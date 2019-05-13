import React, { Component } from 'react';
import Header from "./components/header/headerHOC";
import Main from "./components/main/mainHOC";
import Footer from "./components/footer/footer";
import Location from "./components/location/location";
import SideDrawer from "./components/sideMenu/sideDrawer"
//import { connect } from 'react-redux';
//import axios from "axios"
//Actions
//import {startFetchWeatherData} from "./redux/actions/actions"


class App extends Component {
  // componentDidMount(){
  //     this.props.startFetchWeatherData("Kiev")
  // }

  render() {
    return(
      <React.Fragment>
        <SideDrawer/>
    		<header className="Header">
    			<Header/>
    		</header>
        <section>
          <Location/>
        </section>
	    	<section className="Main">
          <Main/>
        </section>
        <section className="Footer">
          <Footer/>
        </section>
    	</React.Fragment>
    )
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//     startFetchWeatherData: (userlocation)=>dispatch(startFetchWeatherData(userlocation))
//   };
// };

export default App
