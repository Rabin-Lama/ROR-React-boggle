import React from 'react';
import styled from 'styled-components'
import img from '../../assets/images/game_image.png'

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    color: white !important;
    padding: 5px 20px;
    font-size: 18px;
    border: 2px solid black;
    background: #ea3636;
`

const InstructionsText = styled.div`
    font-family: sans serif;
    font-size: 14px;
    text-align: justify;
`

const Image = styled.img`
    width: 100%;
    border: 1px solid black;
`

const Instructions = (props) => {
    return (
        <div className="container">
            <div className="row pt-4">
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <h2>Instructions</h2>
                        <InstructionsText>
                            <p>
                                Play Boggle to test your lexical skills.
                            </p>
                            <p>
                                You will have a board filled with letters. The goal is to find words, of which letters are
                                digonally, vertically or horizontally placed together in a straight line.
                                In the texbox, type the word you think you have found in the board and then submit it by hitting
                                return. If the word you submitted is found in the board and is actually a word then it will be
                                added in the scoreboard, where you will also be able to see all the other correct words you have
                                submitted during your gameplay.
                            </p>
                            <p>
                                There is a time limit, and when the time is up you will not be able to submit any more words and
                                will be provided with you total score.
                                The score is calculated on the basis of letters' count in the words you submit. So the total
                                score is sum of all the words' letters in the scoreboard.
                            </p>
                            <p>
                                If you don't like the roll, you can always restart your game. But be careful, as your score will
                                also be reset to zero.
                            </p>
                        </InstructionsText>
                        <Button onClick={props.startGame}>Play</Button>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <Image src={img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions