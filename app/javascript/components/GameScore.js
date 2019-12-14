import React from "react";
import styled from 'styled-components'

const ScoreWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px 10px;
    height: 410px;
    overflow-y: scroll;
`

const Title = styled.span`
    font-size: 1.5em;
`

const Words = styled.li`
    font-size: 1.2em;
    font-weight: bold;
`

const Total = styled.span`
    font-size: 1.2em;
`

const GameScore = (props) => {
    return (
        <ScoreWrapper>
            <div className="container">
                <Title>Correct Words</Title>
                <Title className="float-right">Score</Title>
                <hr/>
                <ul>
                    {props.correctWords.map((i, k) => {
                        return <Words key={k}>{i}<span className="float-right">{i.length}</span></Words>
                    })}
                </ul>
                <hr/>
                <Total>Total</Total>
                <Total className="float-right">{props.totalScore}</Total>
            </div>
        </ScoreWrapper>
    )
}

export default GameScore