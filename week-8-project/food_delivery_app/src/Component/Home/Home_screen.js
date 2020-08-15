import React, { Component } from 'react';
import Style from './Home_screen.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeCard from '../../StaticData/HomeData.js'
import CollectionCard from '../../StaticData/HomeCollection.js'
import BlckImage from '../../StaticData/HomeLocation_1st_part.js'
import BlackImage from '../../StaticData/HomeLocation_1st_part.js';
import Patna from '../../StaticData/PatnaResturentData.js'
import { Link } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ItemMenu from '../../StaticData/PatnaMenu.js';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class Home_screen extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            setOpen:false,
            open:false,
            modalopen:false,
            Resturentname:[],
            Foodprice:'',
            subtotal:[],
            total:"",
            address:"",
            
        }
    }
    handleClickOpen = () => {
        this.setState({
            setOpen:true,
            open:true
        })

      };
    
    handleClose = () => {
        this.setState({
            setOpen:false,
            open:false
        })
    };
    addItem = (name,price) => {
        this.setState({
            
            Foodprice:price,
            
        })
        this.state.subtotal.push(price)
        this.state.Resturentname.push(name)
        let ram=0
        for(var i=0; i<this.state.subtotal.length; i++){
            ram= ram+Number(this.state.subtotal[i])
        }
        this.setState({
            
            total:ram,
            
        })
     }
 
     modalOpen = () => {
         this.state.Resturentname.length < 1 && this.state.subtotal.length<1 ?
         alert("Your Cart is empty, plz add first")
         :
         this.setState({
             modalopen:true
         })
     };
 
     modalClose = () => {
         this.setState({
             
             modalopen:false
         })
     };
    customer_address=(e)=>{
        this.setState({
            [e.target.name]: e.target.value  
            })
    }
    checkout=()=>{
        if(this.state.address.length===0){
            alert("you are not enter address, plz enter")
        }
        else{

            alert("Your order is taken successfully")
        }
     }
    render() {
        return (
            <div>
                { 
                    this.props.message < 1?
                    <div>
                        <div className={Style.img_container}>
                            <img src="./Home_cover.jpg" className={Style.cover_img}></img>
                            <div className={Style.img_text}>
                                <Typography variant="p" >F.O.D.I.E.S</Typography><br></br>
                                <Typography variant="body1" >Discover Best Food & Drinks Here</Typography>
                            </div>
                        </div>
                        <div className={Style.card_arreng}>
                            {
                                HomeCard.map((e) =>{
                                    return(
                                        <Card className={Style.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                className={Style.media}
                                                image={e.image}
                                                title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {e.Title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {e.Type}
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    )
                                })

                            }
                        </div>
                        <div className={Style.collection_bg}>
                            {
                                CollectionCard.map((e)=>{
                                    return(
                                        <Card className={Style.root}>
                                            <CardActionArea>
                                                <CardMedia className={Style.media} image={e.image} title="Contemplative Reptile"/>
                                                <Typography variant="h6">{e.Heading}</Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">{e.Place}</Typography>
                                            </CardActionArea>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>    
                    :
                    <div>
                        <div className={Style.container_black}>
                            {
                                BlackImage.map((e)=>{
                                    return(
                                        <img src={e.imgage} className={Style.black_img}></img>
                                    )
                                })
                            }
                        </div>
                        <div className={Style.resturent}>
                            <Typography variant="h4" >Resturent</Typography>
                        </div>
                        <div className={Style.resturent_card}>
                            {
                                Patna.map((e) => {
                                    return(
                                        <Button onClick={this.handleClickOpen}>
                                            <Card className={Style.root}>
                                                <CardActionArea>
                                                    <CardMedia className={Style.media} image={e.image} title="Contemplative Reptile"/>
                                                    <Typography variant="h6">{e.name}</Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">{e.star}</Typography>
                                                </CardActionArea>
                                            </Card>
                                        </Button>
                                    )
                                
                                })
                            }
                        </div>
                        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} >
                            <AppBar style={{backgroundColor:"#fc8019"}}>
                                <Toolbar className={Style.appbar}>
                                    <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close" >
                                    <CloseIcon />
                                    </IconButton>
                                    <Link href="/Headingbar" style={{color:"white"}} underline="none">
                                        <Typography variant="h6" >F.O.D.I.E.S</Typography>
                                    </Link>
                                </Toolbar>
                            </AppBar>
                            <List>
                                <div className={Style.top}>
                                    <div className={Style.screen_divide}>
                                        <div className={Style.part_one}>
                                            <div className={Style.card_arrenge}>
                                                {
                                                    ItemMenu.map((e)=>{
                                                        return (
                                                            <Card className={Style.card_size} key={e.id}>
                                                                <CardActionArea>
                                                                    <div className={Style.card_textalling}>
                                                                        <div>
                                                                            <Typography variant="h5">{e.name}</Typography>
                                                                            <Typography variant="body2">₹{e.price}</Typography>
                                                                        </div>
                                                                        <Button onClick={() => this.addItem(e.name,e.price)} style={{color:"green"}}>Add</Button>
                                                                    </div>  
                                                                </CardActionArea>
                                                            </Card>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className={Style.part_two}>
                                            <Card className={Style.cart_card} style={{height:"300px"}}>
                                                <Typography variant="h2" style={{textAlign:"center"}}>Cart</Typography>
                                                {
                                                    this.state.total.length ===0 ?
                                                    <Typography variant="h6" style={{textAlign:"center", color:"grey"}}>Cart is empty, plz select some item</Typography>
                                                    :
                                                    <CardActionArea>
                                                        <div className={Style.card_actionarea}>
                                                            <div className={Style.cart_arreng}>
                                                                <div className={Style.menu_item_text}>
                                                                    {
                                                                        this.state.Resturentname.map((e)=>{
                                                                            return(
                                                                                <Typography variant="p">{e}</Typography>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                <div className={Style.menu_item_price}>
                                                                {
                                                                        this.state.subtotal.map((j)=>{
                                                                            return(
                                                                                <Typography variant="body2">{`₹ ${j}`}</Typography>
                                                                            )
                                                                        })
                                                                    }
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className={Style.cart_arreng}>
                                                                <Typography variant="body2">SubTotal</Typography>
                                                                <Typography variant="body2">{`₹ ${this.state.total}`}</Typography>
                                                            </div>
                                                            <center>
                                                                <Button style={{color:"white", backgroundColor:"green", width:"80%", marginTop:"10%"}} variant="contained" onClick={this.modalOpen}>checkout</Button>
                                                                <Dialog open={this.state.modalopen} onClose={this.modalClose} aria-labelledby="form-dialog-title">
                                                                    <DialogTitle id="form-dialog-title" style={{color:"orange"}}>F.O.D.I.E.S</DialogTitle>
                                                                    <DialogContent>
                                                                    <DialogContentText>
                                                                        Enter your Home Address & select payment option
                                                                    </DialogContentText>
                                                                    <TextField
                                                                        autoFocus
                                                                        margin="dense"
                                                                        name="address"
                                                                        label="Enter your Address"
                                                                        type="text"
                                                                        fullWidth
                                                                        onChange={this.customer_address}
                                                                    />
                                                                    <div>
                                                                        <Typography variant="h6"> Select payment option</Typography>
                                                                        <select>
                                                                            <option>COD</option>
                                                                        </select>
                                                                    </div>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                    <Button onClick={this.modalClose} color="primary">
                                                                        Cancel
                                                                    </Button>
                                                                    <Button onClick={this.checkout} color="primary">
                                                                        Checkout
                                                                    </Button>
                                                                    </DialogActions>
                                                                </Dialog>                               
                                                            </center>
                                                        </div>  
                                                    </CardActionArea>
                                                }
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </List>
                        </Dialog>
                    </div>
                }
            </div>
        )
    }
}
