import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    
    state={
        count:""
    }
    setCount=(e)=>{
        console.log(this.state.count);
        this.setState({count:e})
    }
    render() {

        return (
            <div>
                <Clock timeInSeconds={parseInt(this.state.count)}/>
                <CountdownForm onSetCountdownTime={this.setCount}/>
            </div>
        );
    }
}

export default Countdown;