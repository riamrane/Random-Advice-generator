import React from "react";
import axios from "axios";
import './App.css';
class App extends React.Component {
    state ={advice:''};
    //lifecycle method
    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            //destructing objects
            const { advice }=response.data.slip
            this.setState({ advice });
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        const { advice } =this.state;
        return (
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                <buttton className="button" onClick={this.fetchAdvice}>
                    <span>
                        GIVE ME ADVICE!
                    </span>
                </buttton>

                </div>
            </div>
        );
    }
}

export default App;