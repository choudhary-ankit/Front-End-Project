import React, { Component } from 'react'
import Headingbar from './Component/Navbar/Headingbar'
import {Route} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Route  component={Headingbar}></Route>
      </React.Fragment>
    )
  }
}
