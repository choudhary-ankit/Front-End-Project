import React, { Component } from 'react'
import Style from './User_info.module.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import axios from 'axios'
import Button from '@material-ui/core/Button';

export default class User_info extends Component {
    constructor(props){
        super(props)
            this.state = {
                movies_data:[],
                seat_no:""
            }
        
    }
    componentDidMount=()=>{
        let movies_id= localStorage.getItem('movie_id');
        let movies_seat= localStorage.getItem('seat_no');
        this.setState({seat_no:movies_seat})
        axios.get(`https://www.omdbapi.com/?i=${movies_id}&apikey=504c060f`)
        .then(response => 
            this.setState({movies_data: response.data})  
        )
        .catch(err => console.log(err));
    }
    getticket=()=>{
        window.print();
    }
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.card_div}>
                    <Card className={Style.card_size}>
                        <div className={Style.card_header}>
                            <p>Your Movie Ticket</p>
                        </div>
                        <hr></hr>
                        <div className={Style.movies_info_aarang}>
                            <div >
                                <div className={Style.movies_name_aarang}>
                                    <Typography variant="h4">{this.state.movies_data.Title}</Typography>
                                </div>
                                <div className={Style.movies_lng_aarang}>
                                    <div className={Style.lng_div_arrang}>
                                        <p>{this.state.movies_data.Genre}</p>
                                    </div>
                                    <div className={Style.lng_div_arrang}>
                                        <p>{this.state.movies_data.Runtime}</p>
                                    </div>
                                    <div className={Style.lng_div_arrang}>
                                        <p>{this.state.movies_data.Language}</p>
                                    </div>
                                </div>
                                <div className={Style.movies_time_screen}>
                                    <div>
                                        <p>Time</p>
                                        <p style={{fontWeight:"bold", fontSize:"20px"}}>12:15 P.M</p>
                                    </div>
                                    <div className={Style.screen_seat_price}>
                                        <div>
                                            <p>screen-3</p>
                                        </div>
                                        <div>
                                            <p>{`Seat-no: ${this.state.seat_no}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.movie_div_arrang}>
                                <img src={this.state.movies_data.Poster} style={{width:"160px", height:"180px"}}></img>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={Style.print_btn}>
                            <Button variant="contained" color="primary" onClick={this.getticket}>Print Ticket</Button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
