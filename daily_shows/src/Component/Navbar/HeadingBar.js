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
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';




export default class HeadingBar extends Component {
    constructor(props){
        super(props)
        this.state={
            search:"",
            setgo:"",
            data:[],
            open:false,
            open_drawer:false,
            open_drawer_top:false,
        }
    }
    handleChange = (e)=>{
        let str= e.target.value
        let search= str.split(" ").join("%20")
        this.setState({search:search});
    
    }
    setData=()=>{
        this.setState({data:''})
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=504c060f&s=${this.state.search}`)
        .then(response =>
            this.setState({data: response.data.Search}))
        .catch(err => {
            if(err){
                alert("Movie Not Found")
                window.location.reload(false)
            }
        });
        this.setState({open:true})
    }
    movie_id=(imdbID)=>{
        localStorage.setItem('movie_id', imdbID);
    }
    handleClose=()=>{
        this.setState({data:''})
        this.setState({open:false})
    }
    handleDrawerOpen=()=>{
        this.setState({open_drawer:true})
    }
    handleDrawerClose=()=>{
        this.setState({open_drawer:false})
    }
    TopDrawerOpen=()=>{
        this.setState({open_drawer_top:true})
    }
    TopDrawerClose=()=>{
        this.setState({open_drawer_top:false})
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <AppBar position="static" style={{backgroundColor:'#24292e'}}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.handleDrawerOpen}>    
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            variant="persistent"
                            anchor="left"
                            open={this.state.open_drawer}
                            classes={{paper: Style.drawerPaper}}>
                            <div className={Style.drawerHeader}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {this.state.open_drawer === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </div>
                            <Divider/>
                                <div className={Style.list_item}>
                                    <List>
                                        <Typography disabled variant="body1" style={{marginTop:"15px", fontWeight:"bold"}}>Movies News</Typography> 
                                        <Typography variant="body1" style={{marginTop:"15px", fontWeight:"bold"}}>Top Celebs</Typography>
                                        <Typography variant="body1" style={{marginTop:"15px", fontWeight:"bold"}}>Top TV Shows</Typography>
                                        <Typography variant="body1" style={{marginTop:"15px", fontWeight:"bold"}}>Award & Event</Typography>   
                                    </List>
                                    
                                </div>
                            <Divider />
                                <List className={Style.list_item}>
                                    <Typography variant="body1" style={{marginTop:"15px", fontWeight:"bold"}}>Coutect Us</Typography>
                                    <Typography variant="body1" style={{marginTop:"25px", color:"grey", fontWeight:"bold"}}>V-Ds.1.0.1(Beta)</Typography>
                                </List>
                        </Drawer>
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
                            <div className={Style.search_btn}>
                                <Button onClick={this.setData} style={{backgroundColor:"hsla(0,0%,100%,.125)", color:"Grey", border:"solid 1px hsla(0,0%,100%,.125)", borderRadius:"5px", marginLeft:"5px", height:'35px'}} >Search</Button>
                            </div>
                            <div className={Style.search_icon_small}>
                                <IconButton color="inherit" onClick={this.TopDrawerOpen} >    
                                    <SearchIcon />
                                </IconButton>
                                <div>
                                    <Drawer
                                        variant="persistent"
                                        anchor="top"
                                        open={this.state.open_drawer_top}
                                        className={ Style.drawerPaper_top}>
                                        <div className={Style.topDrawerArrn}>
                                            <div>
                                                <IconButton onClick={this.TopDrawerClose}>
                                                    {this.state.open_drawer_top === true ? <KeyboardArrowUpIcon style={{color:"white"}}/> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </div>
                                            <div>
                                                <div className={Style.searchDrawerArrn}>
                                                    <div className={Style.searchDrawerTop}>
                                                        <div className={Style.searchIcon}>
                                                            <SearchIcon />
                                                        </div>
                                                        <div>
                                                            <InputBase placeholder="Search Movie with Title" style={{color:'inherit',marginLeft:'50px'}} onChange={this.handleChange}/>
                                                        </div>
                                                    </div> 
                                                    <div className={Style.search_btn_drawer_top}>
                                                        <Button onClick={this.setData} style={{backgroundColor:"hsla(0,0%,100%,.125)", color:"Grey", border:"solid 1px hsla(0,0%,100%,.125)", borderRadius:"5px", marginLeft:"5px", height:'35px'}} >Search</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Drawer>
                                </div>
                            </div>
                            <Dialog fullScreen onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                                <AppBar position="static" style={{backgroundColor:'#24292e'}}>
                                    <Toolbar className={Style.model_appbar}>
                                        <Link to="/" style={{color:"white", textDecoration:"none"}}>
                                            <Typography variant="h6">DailyShow</Typography>
                                        </Link>
                                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                            <CloseIcon />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                <DialogContent dividers>
                                   {
                                    this.state.data.length>0?
                                       this.state.data.map((e)=>{
                                           return(
                                                <Link to="/movies_info" onClick={this.handleClose} style={{color:"white", textDecoration:"none"}}>
                                                    <Button onClick={() => this.movie_id(e.imdbID)}>
                                                        <Card style={{width:"300px"}}>
                                                            <div className={Style.card_div}>
                                                                <div>
                                                                    <img src={e.Poster} style={{height:"180px", width:"172px"}}></img>
                                                                </div>
                                                                <div className={Style.card_title}>
                                                                    <Typography variant="h6">{e.Title}</Typography>
                                                                    <div className={Style.card_type}>
                                                                        <Typography variant="body2">{`Type: ${e.Type}`}</Typography>
                                                                        <Typography variant="body2">{`Year: ${e.Year}`}</Typography>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Button>
                                                </Link>     
                                           )
                                       })
                                       
                                    :
                                    <div className={Style.spiner}>
                                        <CircularProgress disableShrink />
                                    </div>
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
