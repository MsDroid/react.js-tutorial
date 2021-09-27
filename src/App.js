import React, { Component } from 'react';

// app.css
import "./App.css";

// components
import Top from './components/Topbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
// mock data
// import {Products} from './utills/mockData';
// axios
import axios from 'axios';
import SearchBox from './components/searchBox';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      Products : [],
      loader : true
    }
  }

  componentDidMount(){
    axios
    .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then((res) => {
      this.setState({Products : res.data, loader:false});
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    // debugger;
    if(nextState.Products.length > 5){
      return true;
    }else return false;
  }

  render(){
    return ( 
      <div>
        <Top />
        <Banner />
        <SearchBox />
        {this.state.loader ? <h1>Loading...</h1> :
        <div className= "d-flex flex-wrap">
          {this.state.Products.map((items, index) => 
            <Card {...items} />)}
        </div>
        }
        <Footer />
      </div>
      
     );
  }
}


 
export default App;