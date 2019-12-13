import React from "react";
import styled from 'styled-components'

const Box = styled.div`
    line-height: 100px;
    font-size: 2em;
    font-family: sans serif;
    max-width: 25%;
    text-align: center;
    background-color: #1E90FF;
    border: 1px solid black;
    vertical-align: center;
    text-transform: uppercase;
`

const GameBoard = (props) => {
    return (
        <div className="row">
            {props.boardLetters.map((i, k) => {
                return <Box className="col-sm-3" key={k}>{i}</Box>
            })}
        </div>
    )
}

export default GameBoard