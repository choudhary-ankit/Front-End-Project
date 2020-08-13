import React, { Component } from 'react'
import HeadingBar from './Component/Navbar/HeadingBar'
import Movies_info from './Component/Movies_information/Movies_info'
import {Route} from 'react-router-dom';
import Home from './Component/Home_Page/Home';
import Movies_hall from './Component/Movies_timing/Movies_hall';
import User_info from './Component/Customer_info/User_info'
import Payment from './Component/Payment_method/Payment';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeadingBar/>
        <Route path ="/" exact component={Home}></Route>
        <Route path = "/Movies_info" component = {Movies_info} />
        <Route path = "/Movies_hall" component = {Movies_hall}></Route>
        <Route path = "/Payment" component = {Payment}></Route>
        <Route path = "/User_info" component = {User_info}></Route>
      </div>
    )
  }
}
