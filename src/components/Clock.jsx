import React, { useState, useEffect } from 'react';

function Clock(props) {
    const[time,setTime]=useState({
        minutes:"00",
        seconds:"00"
    });
    const[sec,setSec]=useState("");
    const formatTime=(timeI)=> {
        var second = timeI % 60;
        var minute = Math.floor(timeI / 60);

        if (second < 10) {
            second = '0' + second;
        }

        if (minute < 10) {
            minute = '0' + minute;
        }

        setTime({minutes:minute,seconds:second})
        setSec(timeI);
        return minute+":"+second;

    }

    
    useEffect(() => {
        let counter=sec
        while(counter>0){
            setTimeout(()=>
            formatTime(sec-1),1000);
            counter--;
        }
        return () => {
            // cleanup
        }
    }, [sec])
    
        

    useEffect(() => {
        if(props.timeInSeconds>0){
       formatTime(props.timeInSeconds)
        }
        return () => {
            // cleanup
        }
    }, [props.timeInSeconds])
     


    return (
            <div className="clock">
                <span className="clock-text">
                  {time.minutes+":"+time.seconds}
                </span>
            </div>
        );
}



export default Clock;

// import React from 'react';

// class Clock extends React.Component {
//     state={
//         timeInSeconds:"",
//         minutes:"",
//         seconds:"",
//     }

//     formatTime(timeInSeconds) {

//         var seconds = timeInSeconds % 60;
//         var minutes = Math.floor(timeInSeconds / 60);

//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }

//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }

//         return this.setState({minutes:minutes,seconds:seconds});
//     }

//     componentDidMount(){
//         var {timeInSeconds} = this.props;
//         this.setState({timeInSeconds:this.props.timeInSeconds});
//         console.log(this.props.timeInSeconds+"reaching");
//         this.myInterval = setInterval(() => {
//             this.formatTime(this.state.timeInSeconds)
//             if (this.state.seconds <= 0) {
//                 if (this.state.minutes <= 0) {
//                   clearInterval(this.myInterval)
//                         }
//                     }else{
//                             this.setState({timeInSeconds:this.state.timeInSeconds-1})
//                         }
//         }, 1000);
//     }

    
//     render() {

//         //Keep the classes name. Try to inject your code and do not remove existing code
//         return (
//             <div className="clock">
//                 <span className="clock-text">
//                     {this.state.minutes+":"+this.state.seconds}
//                 </span>
//             </div>
//         );
//     }
// }



// export default Clock;


// // import React from 'react';

// // class Clock extends React.Component {
// //     state={
// //         minutes:0,
// //         seconds:0,
// //     }

// //     formatTime(timeInSeconds) {
// //         var seconds = timeInSeconds % 60;
// //         var minutes = Math.floor(timeInSeconds / 60);

// //         if (seconds < 10) {
// //             seconds = '0' + seconds;
// //         }

// //         if (minutes < 10) {
// //             minutes = '0' + minutes;
// //         }

// //         return this.setState({minutes:minutes,seconds:seconds});
// //     }

// //     componentDidMount(){
// //         this.setState({timeInSeconds:this.props.timeInSeconds});
// //         setInterval(() => {
// //             console.log(this.state.timeInSeconds);
// //             this.formatTime(this.state.timeInSeconds)
// //         }, 1000);
// //     }

// //     componentDidMount() {
// //         // this.setState({timeInSeconds:this.props.timeInSeconds});
// //         this.formatTime(this.props.timeInSeconds)
// //         this.myInterval = setInterval(() => {
// //           const { seconds, minutes } = this.state
// //           if (seconds > 0) {
// //             this.setState(({ seconds }) => ({
// //               seconds: seconds - 1
// //             }))
// //           }
// //           if (seconds === 0) {
// //             if (minutes === 0) {
// //               clearInterval(this.myInterval)
// //             } else {
// //               this.setState(({ minutes }) => ({
// //                 minutes: minutes - 1,
// //                 seconds: 59
// //               }))
// //             }
// //           }
// //         }, 1000)
// //       }

    
// //     render() {
// //         var {timeInSeconds} = this.props;

// //         //Keep the classes name. Try to inject your code and do not remove existing code
// //         return (
// //             <div className="clock">
// //                 <span className="clock-text">
// //                 </span>
// //             </div>
// //         );
// //     }
// // }



// // export default Clock;
