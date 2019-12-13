import React from "react";
import styled from 'styled-components'

const ScoreWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 0 10px;
    height: 410px;
    overflow-y: scroll;
`

const Title = styled.h1`
    font-size: 2em;
`

const GameScore = (props) => {
    return (
        <ScoreWrapper>
            <Title>Your Score</Title>
            <hr/>
        </ScoreWrapper>
    )
}

export default GameScore