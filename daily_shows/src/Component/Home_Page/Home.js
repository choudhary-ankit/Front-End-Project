import React, { Component } from 'react'
import Style from './Home.module.css'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Latest_movies from '../../Movies_data/Latest_movies'
import Action_movies from '../../Movies_data/Action_movies'
import Bollywod_movies from '../../Movies_data/Bollywod_movies'
import Hollywood_movies from '../../Movies_data/Hollywood_movies'
import Thriller_movies from '../../Movies_data/Thriller_movies'
import { Link} from '@material-ui/core';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    set_id=(movie_id)=>{
        localStorage.setItem('movie_id', movie_id);
    }
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.cover_div}>
                    <img src='./Home_page/cover.jpg' style={{width:"100%"}}></img>
                </div>
                <div className={Style.movies_in_theater}>
                    <Typography variant="h4" >Latest Movies</Typography>
                </div>
                <div className={Style.card_div}>
                    {
                        Latest_movies.map((e)=>{
                            return(
                                <Link to="/movies_info">
                                    <Button onClick={() => this.set_id(e.movie_id)}>
                                        <Card className={Style.card_size} style={{backgroundColor:"black", color:"grey"}}>
                                            <div>
                                                <img src={e.img} style={{width:"170px", height:"180px"}}></img>
                                            </div>
                                            <div>
                                                <Typography Variant="body1">{e.Title}</Typography>
                                                <Typography Variant="body2">{e.Year}</Typography>
                                            </div>
                                        </Card>
                                    </Button>
                                </Link>

                            )
                        })
                    }
                </div>
                <div className={Style.movies_in_theater}>
                    <Typography variant="h4" >Action Movies</Typography>
                </div>
                <div className={Style.card_div}>
                    {
                        Action_movies.map((e)=>{
                            return(
                                <Link href="/movies_info" style={{color:"white"}} underline="none">
                                    <Button onClick={() => this.set_id(e.movie_id)}>
                                        <Card className={Style.card_size} style={{backgroundColor:"black", color:"grey"}}>
                                            <div>
                                                <img src={e.img} style={{width:"170px", height:"180px"}}></img>
                                            </div>
                                            <div>
                                                <Typography Variant="body1">{e.Title}</Typography>
                                                <Typography Variant="body2">{e.Year}</Typography>
                                            </div>
                                        </Card>
                                    </Button>
                                </Link>

                            )
                        })
                    }
                </div>
                <div className={Style.movies_in_theater}>
                    <Typography variant="h4" >Thriller Movies</Typography>
                </div>
                <div className={Style.card_div}>
                    {
                        Thriller_movies.map((e)=>{
                            return(
                                <Link to="/movies_info">
                                    <Button onClick={() => this.set_id(e.movie_id)}>
                                        <Card className={Style.card_size} style={{backgroundColor:"black", color:"grey"}}>
                                            <div>
                                                <img src={e.img} style={{width:"170px", height:"180px"}}></img>
                                            </div>
                                            <div>
                                                <Typography Variant="body1">{e.Title}</Typography>
                                                <Typography Variant="body2">{e.Year}</Typography>
                                            </div>
                                        </Card>
                                    </Button>
                                </Link>

                            )
                        })
                    }
                </div>
                <div className={Style.movies_in_theater}>
                    <Typography variant="h4" >Bollywood Movies</Typography>
                </div>
                <div className={Style.card_div}>
                    {
                        Bollywod_movies.map((e)=>{
                            return(
                                <Link to="/movies_info">
                                    <Button onClick={() => this.set_id(e.movie_id)}>
                                        <Card className={Style.card_size} style={{backgroundColor:"black", color:"grey"}}>
                                            <div>
                                                <img src={e.img} style={{width:"170px", height:"180px"}}></img>
                                            </div>
                                            <div>
                                                <Typography Variant="body1">{e.Title}</Typography>
                                                <Typography Variant="body2">{e.Year}</Typography>
                                            </div>
                                        </Card>
                                    </Button>
                                </Link>

                            )
                        })
                    }
                </div>
                <div className={Style.movies_in_theater}>
                    <Typography variant="h4" >Hollywood Movies</Typography>
                </div>
                <div className={Style.card_div}>
                    {
                        Hollywood_movies.map((e)=>{
                            return(
                                <Link to="/movies_info">
                                    <Button onClick={() => this.set_id(e.movie_id)}>
                                        <Card className={Style.card_size} style={{backgroundColor:"black", color:"grey"}}>
                                            <div>
                                                <img src={e.img} style={{width:"170px", height:"180px"}}></img>
                                            </div>
                                            <div>
                                                <Typography Variant="body1">{e.Title}</Typography>
                                                <Typography Variant="body2">{e.Year}</Typography>
                                            </div>
                                        </Card>
                                    </Button>
                                </Link>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
