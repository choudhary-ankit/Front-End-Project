import React, { Component } from 'react'
import Style from './Headingbar.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Link, DialogTitle } from '@material-ui/core';
import ChildComponent from '../Home/Home_screen';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default class Headingbar extends Component {   
    constructor(props){
        super(props)
        this.state={
            location:"",
            user_email:"",
            user_password:"",
            Name:"",
            Email:"",
            Password:"",
            LoginButton_Name:"Singin/Singup",
            setOpen: false,
            singupOpen:false,
            

        }
    }
    handleChange = (e) => {
        let GetLocation = e.target.value
        this.setState({
         location:GetLocation
        })
        localStorage.setItem('Location', e.target.value);
    }
    handleClickOpen=()=>{
        this.setState({setOpen:true})
    }
    handleClose=()=>{
        this.setState({setOpen:false})
        
    }
    reload=()=>{
        this.setState({singupOpen:true})
    }
    singupClose=()=>{
        this.setState({singupOpen:false})
    }
    getChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value  
        })
    }
    Singin=()=>{
        var user_Data = localStorage.getItem(this.state.user_email)
        var password = JSON.parse(user_Data)
        if(this.state.user_email.length=== 0 || this.state.user_password.length===0){
            alert("plz enter correct email and password")
            this.setState({LoginButton_Name:"Singin"})
        }  
        else if (password===null){
            alert("you are not register plz singup")
        }
        else if (this.state.user_password===password.pass){
            this.setState({LoginButton_Name:`welcome ${password.name}`})
            alert(`welcome in F.O.D.I.E.S ${password.name}`)
            this.setState({setOpen:false})

        }
        else{

            this.setState({LoginButton_Name:"Singin"})
            alert("You are enter wrong password")
            
        }
            
    }

    Singup = ()=>{
        let user = localStorage.getItem(this.state.Email)
        if(user){
            alert("your account is already created, plz login")
        }
        else{
            var user_Data ={name:this.state.Name, pass:this.state.Password}
            localStorage.setItem(this.state.Email, JSON.stringify(user_Data));
            this.setState({singupOpen:false})
            return(
                alert("You Account is Created, plz Loggin")
            )
        }

    }
    render() {
        
        return (
            <div>
                <AppBar position="static" style={{backgroundColor:"#fc8019"}}>
                    <Toolbar>
                        <div className={Style.icon_button}>
                            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={this.handleClickOpen}>
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <Link href="/Headingbar" style={{color:"white"}} underline="none">
                            <Typography variant="h6">F.O.D.I.E.S</Typography>
                        </Link>
                        <div className={Style.form}>
                            <FormControl style={{minWidth:"150px"}}>
                                <InputLabel variant="outlined"  label="Outlined">Select Your City</InputLabel>
                                <Select onChange={this.handleChange}>
                                    <MenuItem value=""><em>none</em></MenuItem>
                                    <MenuItem value="Mumbai" disabled >Mumbai</MenuItem>
                                    <MenuItem value="Banglore" disabled >Banglore</MenuItem>
                                    <MenuItem value="Patna">Patna</MenuItem>
                                    <MenuItem value="New Delhi" disabled >New Delhi</MenuItem>
                                    <MenuItem value="Chennai" disabled>Chennai</MenuItem>
                                    <MenuItem value="Hydrabaad" disabled>Hydrabaad</MenuItem>
                                </Select>
                            </FormControl>
                            <div className={Style.searchBox}>
                                <TextField  variant="outlined" style={{width:"400px"}}/>
                            </div>
                        </div>
                        <div className={Style.button_div}>
                            <div className={Style.searchBox}>
                                <Button variant="contained">Search</Button> 
                            </div>
                            <div className={Style.searchBox}>
                                <Button color="inherit" onClick={this.handleClickOpen}>{this.state.LoginButton_Name}</Button>
                            </div>
                            <div>
                                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.setOpen}>
                                    <div className={Style.login_modal_heading}>
                                        <Link href="/Headingbar" underline="none">
                                            <DialogTitle>F.O.D.I.E.S</DialogTitle>
                                        </Link>
                                        <MuiDialogTitle>
                                            <IconButton aria-label="close" onClick={this.handleClose}>
                                                <CloseIcon />
                                            </IconButton>
                                        </MuiDialogTitle>
                                    </div>
                                    <DialogContent dividers>
                                        <div className={Style.center}>
                                            <div className={Style.card_size}>
                                                <Card>
                                                    <CardContent>
                                                        <Typography variant="h4">Login </Typography>
                                                        <div className={Style.textfield}>
                                                            <TextField id="outlined-basic" label="Enter your mail id" variant="outlined" className={Style.textfield_login} name="user_email" onChange={this.getChange}/>
                                                        </div>
                                                        <div className={Style.textfield}>
                                                            <TextField id="outlined-basic" label="Enter your password" variant="outlined" className={Style.textfield_login} name="user_password" onChange={this.getChange} />
                                                        </div>
                                                        <div className={Style.textfield}>
                                                            <Button variant="contained" color="primary" className={Style.textfield_login} onClick={this.Singin}>Sing In </Button>
                                                        </div>
                                                        <div className={Style.textfield}>
                                                            <Typography variant="body2" component="p">By continuing, you agree to To.Do Condition of Use and Privacy Notice.</Typography>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                        <div className={Style.textfield}>
                                            <Button variant="contained" color="error"  style={{width:"90%", textDecoration:"red"}} onClick={this.reload}>Sign Up </Button>
                                            <div>
                                                <Dialog onClose={this.singupClose} aria-labelledby="customized-dialog-title" open={this.state.singupOpen}>
                                                    <div className={Style.login_modal_heading}>
                                                        <Link href="/Headingbar" underline="none">  
                                                            <DialogTitle>F.O.D.I.E.S</DialogTitle>
                                                        </Link>
                                                        <MuiDialogTitle>
                                                            <IconButton aria-label="close" onClick={this.singupClose}>
                                                                <CloseIcon />
                                                            </IconButton>
                                                        </MuiDialogTitle>
                                                    </div>
                                                    <DialogContent dividers>
                                                        <div className={Style.center}>
                                                            <div className={Style.card_size}>
                                                                <Card>
                                                                    <CardContent>
                                                                        <Typography variant="h4">Sing Up</Typography>
                                                                        <div className={Style.textfield}>
                                                                            <TextField id="outlined-basic" label="Enter your Name" variant="outlined" style={{width:"90%"}} name="Name" onChange={this.getChange} type="text"/>
                                                                        </div>
                                                                        <div className={Style.textfield}>
                                                                            <TextField id="outlined-basic" label="Enter your mail id" variant="outlined" style={{width:"90%"}} name="Email" onChange={this.getChange} type="email"/>
                                                                        </div>
                                                                        <div className={Style.textfield}>
                                                                            <TextField id="outlined-basic" label="Enter your password" variant="outlined" style={{width:"90%"}} name="Password" onChange={this.getChange} type="password"/>
                                                                        </div>
                                                                        <div className={Style.textfield}>
                                                                            <Button variant="contained" color="primary" style={{width:"90%"}} onClick={this.Singup}>Continue</Button>
                                                                        </div>
                                                                        <div className={Style.textfield}>
                                                                            <Typography variant="body2" component="p">By continuing, you agree to To.Do Conditions of Use and Privacy Notice.</Typography>
                                                                        </div>   
                                                                    </CardContent>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <ChildComponent message={this.state.location}/>
            </div>
        )
    }
}
