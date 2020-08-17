import React, { Component } from 'react';
import Style from './HeadingBar.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import axios from 'axios'
import {Link} from 'react-router-dom';




export default class HeadingBar extends Component {
    constructor(props){
        super(props)
        this.state={
            search:"",
            setgo:"",
            data:[],
            open:false,
        }
    }
    handleChange = (e)=>{
        let str= e.target.value
        let search= str.split(" ").join("%20")
        this.setState({search:search});
    
    }
    setData=()=>{
       
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=504c060f&s=${this.state.search}`)
        .then(response => 
            this.setState({data: response.data.Search})  
        )
        .catch(err => alert("not found any movie"));
        this.setState({open:true})
    }
    movie_id=(imdbID)=>{
        localStorage.setItem('movie_id', imdbID);
    }
    handleClose=()=>{
        this.setState({open:false})
    }
    render() {
        console.log(this.state.search)
        return (
            <div>
                <AppBar position="static" style={{backgroundColor:'#24292e'}}>
                    <Toolbar>
                        {/* <IconButton edge="start" className={Style.menuButton} color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton> */}
                        <div className={Style.title}>
                            <div>
                                <Link to="/" style={{color:"white", textDecoration:"none"}}>
                                    <Typography variant="h6">DailyShow</Typography>
                                </Link>
                            </div>
                            <div className={Style.search}>
                                <div className={Style.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <div>
                                    <InputBase placeholder="Search Movie with Title" style={{color:'inherit',marginLeft:'50px'}} onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button onClick={this.setData} style={{backgroundColor:"hsla(0,0%,100%,.125)", color:"Grey", border:"solid 1px hsla(0,0%,100%,.125)", borderRadius:"5px", marginLeft:"5px", height:'35px'}} >Search</Button>
                            <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                                <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>Search History</DialogTitle>
                                <DialogContent dividers>
                                   {
                                    this.state.data.length>0?
                                       this.state.data.map((e)=>{
                                           return(
                                                <Link to="/movies_info" onClick={this.handleClose} style={{color:"white", textDecoration:"none"}}>
                                                    <Button onClick={() => this.movie_id(e.imdbID)}>
                                                        <Card style={{width:"400px"}}>
                                                            <div className={Style.card_div}>
                                                                <div>
                                                                    <img src={e.Poster} style={{height:"180px", width:"172px"}}></img>
                                                                </div>
                                                                <div className={Style.card_title}>
                                                                    <Typography variant="h4">{e.Title}</Typography>
                                                                    <div className={Style.card_type}>
                                                                        <Typography variant="body2">{e.Type}</Typography>
                                                                        <Typography variant="body2">{e.Year}</Typography>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Button>
                                                </Link>
                                           )
                                       })
                                    :
                                    <h1>This Movie is not found</h1>
                                   }
                                </DialogContent>
                            </Dialog>
                        </div>
                    </Toolbar>
                </AppBar>
          </div>
        )
    }
}
