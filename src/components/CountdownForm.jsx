import React from 'react';

class CountdownForm extends React.Component {

    state={
        time:""
    }

     onSubmit(e) {
       //This will give you string for seconds. Do not remove refs
       e.preventDefault();
        var secondsStr = this.refs.seconds.value;
        // console.log(typeof secondsStr);
        if(parseInt(secondsStr)>0){
            // console.log("sending");
        this.props.onSetCountdownTime(parseInt(secondsStr));
        this.setState({time:""})
        }
        this.setState({time:""})
       
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" value={this.state.time} onChange={event=>this.setState({time:event.target.value})}/>

                    <input type="submit" className="button success expanded" value="Start Countdown"/>
                </form>
            </div>
        );
    }
}

export default CountdownForm;