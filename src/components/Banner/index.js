// ==================================================================================
// class based component
// ================================================================================== 
import React, {Component} from 'react';

class Banner extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "I am Iron man",
        }
        console.log("First Call Constructor");
    }

    updateUser= () =>{
        this.setState({name : "I am Hulk"}); //30ms
        // this.state.name = "I am Hulk";
        // console.log("this.state.name",this.state.name);
        // this.setState({name : "I am Hulk"}, () => {
        //      console.log("this.state.name After setState",this.state.name);
        // });
        
    }

    componentDidMount(){
        console.log("Third Call componentDidMount");
    }

    render(){
        console.log("Second Call Render");
        return (<div className="container">
                 <h1 style={{color:"red", padding:"30px 0"}}>
                 Hello Banner {this.state.name}
                 </h1>
                 <div><a onClick={this.updateUser} >
                     <button className="btn-btn-Primary">Change name</button>
                     </a>
                </div>
                 </div>);
    }
}
















// ==================================================================================
// function based component
// ==================================================================================

// import React from 'react';

// const Banner = () => {
//     return ( 
//         <div className="container">
//         <h1 style={{color:"red", padding:"30px 0"}}>
//         Hello Banner 
//         </h1>
//         </div>
//      );
// }
 
export default Banner;