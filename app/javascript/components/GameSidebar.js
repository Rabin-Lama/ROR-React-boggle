import React from "react";
import styled from 'styled-components'
import Countdown from 'react-countdown-now';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
        alert("completed bro")
        return <Completionist/>;
    } else {
        return <span>{minutes}:{seconds}</span>;
    }
};

const CountdownWrapper = styled.div`
    @import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css");
    margin: 20px 0;
    padding: 10px 0;
    background-color: #46A049;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
`

const RestartButton = styled.div`
    margin: 20px 0;
    padding: 10px 0;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 0;
    background-color: #D74234;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
`

const Input = styled.input`
    font-family: sans serif;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px 5px;
`

const MessageR = styled.div`
    background-color: #D74234;
    height: 200px;
    font-size: 1.5em;
    text-align: center;
    line-height: 200px;
`

const MessageG = styled.div`
    background-color: #46A049;
    height: 200px;
    font-size: 1.5em;
    text-align: center;
    line-height: 200px;
`

const MessageB = styled.div`
    background-color: #1E90FF;
    height: 200px;
    font-size: 1.5em;
    text-align: center;
    line-height: 200px;
`

const GameSidebar = (props) => {
    return (
        <div>
            <Input placeholder="Enter text here" onKeyDown={props.submitWord}/>
            <CountdownWrapper>
                <i className="glyphicon glyphicon-time mr-3"/>
                <Countdown
                    date={Date.now() + 180000}
                    renderer={renderer}
                />
            </CountdownWrapper>
            <RestartButton onClick={props.restartGame}>Restart</RestartButton>
            <MessageG>{props.submittedWordStatus}</MessageG>
        </div>
    )
}

export default GameSidebar
