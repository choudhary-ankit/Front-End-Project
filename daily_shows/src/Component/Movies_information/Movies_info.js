import React, { Component } from 'react'
import Style from './Movies_info.module.css'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core'
import { Link} from '@material-ui/core';


export default class Movies_info extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies_info:[],
        }
    }

    componentDidMount=()=>{
        let movies_id= localStorage.getItem('movie_id');
        axios.get(`https://www.omdbapi.com/?i=${movies_id}&apikey=504c060f`)
        .then(response => 
            this.setState({movies_info: response.data})  
        )
        .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.movies_info)
        return (
            <div>
                <div className={Style.main_div}>
                    <div className={Style.aling_item}>
                        <div>
                            <img src={this.state.movies_info.Poster}></img>
                        </div>
                        <div className={Style.titel_div}>
                            <div>
                                <p className={Style.movies_title}>{this.state.movies_info.Title}</p>
                            </div>
                            <div className={Style.genre_div}>
                                <Typography variant="body1">{`Genre : ${this.state.movies_info.Genre}`}</Typography>
                                <Typography variant="body1">{`Country : ${this.state.movies_info.Country}`}</Typography>
                                <Typography variant="body1">{`Released : ${this.state.movies_info.Released}`}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.booking_div}>
                    <div className={Style.booking_alling}>
                        <Typography variant="body1">Part of The Collection: Action/Comedy/Drama/Musical</Typography>
                        <Link href = "/movies_hall" style={{color:"white"}} underline="none">
                            <Button variant="contained" color="primary">Booknow</Button>
                        </Link>
                    </div>
                </div>
                <div className={Style.booking_div}>
                    <div className={Style.booking_alling}>
                        <Typography variant="h4">MOVIES INFO</Typography>
                    </div>
                </div>
                <div className={Style.booking_div}>
                    <div className={Style.movie_type}>
                    <Typography variant="body1">{`Rating : ${this.state.movies_info.imdbRating}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`Genre : ${this.state.movies_info.Genre}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`Directed By : ${this.state.movies_info.Director}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{` Writen By :${this.state.movies_info.Writer}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`Cast : ${this.state.movies_info.Actors}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{` In Theater : ${this.state.movies_info.Released}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`On Disc/Straming :${this.state.movies_info.DVD}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`RunTime :${this.state.movies_info.Runtime}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`Studio : ${this.state.movies_info.Production}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`Language : ${this.state.movies_info.Language}`}</Typography>
                    <hr></hr>
                    <Typography variant="body1">{`Award : ${this.state.movies_info.Awards}`}</Typography>
                    </div>
                </div>
                <div className={Style.booking_div}>
                    <div className={Style.booking_alling}>
                        <p>{`PLOT: ${this.state.movies_info.Plot}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}

