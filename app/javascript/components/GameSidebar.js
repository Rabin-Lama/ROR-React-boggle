import React from "react";
import styled from 'styled-components'
import Countdown from 'react-countdown-now';

const countdownRenderer = ({minutes, seconds, completed}, props) => {
    if (completed) {
        return <span>Time's Up !!!</span>;
    } else {
        return <span>0{minutes}:{seconds}</span>;
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
    padding: 10px 0;
    background-color: #D74234;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    &:hover {
        border: 2px solid black;
    }
`

const HomeButton = styled.div`
    margin: 20px 0;
    padding: 10px 0;
    cursor: pointer;
    padding: 10px 0;
    background-color: #1E90FF;
    font-size: 1.5em;
    text-align: center;
    &:hover {
        border: 2px solid black;
    }
`

const Input = styled.input`
    font-family: sans serif;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px 5px;
    &:focus {
        border: 1px solid black;
    }
`

const Message = styled.div`
    height: 125px;
    font-size: 1.5em;
    text-align: center;
    line-height: 125px;
`

const GameSidebar = (props) => {
    return (
        <div>
            <Input
                placeholder="Enter text here"
                onKeyDown={props.submitWord}
                disabled = {(props.inputDisabled)? "disabled" : ""}
            />
            <CountdownWrapper>
                <i className="glyphicon glyphicon-time mr-3"/>
                <Countdown
                    onComplete={() => props.stopGame()}
                    date={props.startedTime}
                    renderer={countdownRenderer}
                />
            </CountdownWrapper>
            <RestartButton onClick={props.restartGame}>
                <i className="glyphicon glyphicon-refresh mr-3"/> Restart
            </RestartButton>
            <HomeButton onClick={props.backToInstructions}>
                <i className="glyphicon arrow-left mr-3"/> Back to Instructions
            </HomeButton>
            <Message>{props.messageToUser}</Message>
        </div>
    )
}

export default GameSidebar
