import React, { Component } from 'react'
import Style from './Movies_hall.module.css'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Checkbox from '@material-ui/core/Checkbox';
import { Link} from '@material-ui/core';

export default class Movies_hall extends Component {
constructor(Props){
    super(Props)
    this.state = {
        seat_no:[],
        open:false,
        next:true,
        A1:false,
        A2:false,
        A3:false,
        A1_disable:false,
        A2_disable:false,
        A3_disable:false,
    }
}
handleOpen=()=>{
    this.setState({open:true})
        
}
handleClose=()=>{
    this.setState({open:false})
}
handleChange = (e) => {
    this.setState({ [e.target.name]:e.target.checked})
    let checking = e.target.checked
    if(checking===true){
        let seat_no = e.target.value
        this.state.seat_no.push(seat_no)
        this.setState({next:false})
    }
    else if(checking===false){
        let seat_no = e.target.value
        this.state.seat_no.pop(seat_no)
    }
    else {
        this.setState({next:true})
    }


}
proced=()=>{
    this.setState({open:false})
    if(this.state.A1===true || this.state.A2 === true || this.state.A3===true){
        localStorage.setItem('A1', this.state.A1); 
        localStorage.setItem('A2', this.state.A2);
        localStorage.setItem('A3', this.state.A3);
    }
    let A1 = localStorage.getItem('A1');
    let A2 = localStorage.getItem('A2');
    let A3 = localStorage.getItem('A3');

    if(A1==="null" || A1==="false"){
        localStorage.removeItem('A1')
        this.setState({A1:false, A1_disable:false})
    }
    if(A2==="null" || A2==="false"){
        localStorage.removeItem('A2')
        this.setState({A2:false, A2_disable:false})
    }
    if(A3==="null" || A3==="false"){
        localStorage.removeItem('A3')
        this.setState({A3:false, A3_disable:false})
    }
    localStorage.setItem('seat_no', this.state.seat_no);
    
}
componentDidMount=()=>{
    let A1 = localStorage.getItem('A1');
    let A2 = localStorage.getItem('A2');
    let A3 = localStorage.getItem('A3');
        this.setState({
            A1:A1, 
            A2:A2,
            A3:A3,
            A1_disable:A1,
            A2_disable:A2,
            A3_disable:A3,
        })
}
  
    render() {
        
        return (
            
            <div className={Style.body}>
                <div>
                    <Typography variant="h2" style={{color:"white"}}>CinePolice: P&M Mall</Typography>
                </div>
                <div className={Style.timing_btn}>
                    <Button variant="contained" color="primary" onClick={this.handleOpen} style={{marginTop:"10px"}} disabled>(9:00A.M to 12:00P.M) </Button>
                    <Button variant="contained" color="primary" onClick={this.handleOpen} style={{marginTop:"10px"}}>(12:00P.M to 3:00P.M)</Button>
                    <Button variant="contained" color="primary" style={{marginTop:"10px"}} disabled>(3:00P.M to 6:00P.M)</Button>
                    <Button variant="contained" color="primary" style={{marginTop:"10px"}} disabled>(6:00P.M to 9:00P.M)</Button>
                    <Button variant="contained" color="primary" style={{marginTop:"10px"}} disabled>(9:00P.M to 12:00A.M)</Button>
                </div>
                <div>
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>Seat Arrangement</DialogTitle>
                        <DialogContent dividers>
                            <Checkbox onChange={this.handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} checked={this.state.A1} name="A1" disabled={this.state.A1_disable} value="A1"/>
                            <Checkbox onChange={this.handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} checked={this.state.A2} name="A2" disabled={this.state.A2_disable} value="A2"/>
                            <Checkbox onChange={this.handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} checked={this.state.A3} name="A3" disabled={this.state.A3_disable} value="A3"/>
                        </DialogContent>
                        <DialogActions>
                            <Link href="/payment" style={{color:"white"}} underline="none">
                                <Button variant="contained" color="primary"onClick={this.proced} disabled={this.state.next}>Proced</Button>
                            </Link>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}
