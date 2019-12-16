import React, {Component} from 'react'
import GameBoard from './GameBoard'
import GameScore from './GameScore'
import GameSidebar from './GameSidebar'

class Game extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 col-md-4">
                            <GameBoard boardLetters={this.props.boardLetters}/>
                        </div>
                        <div className="col-sm-2 col-md-3">
                            <GameSidebar
                                restartGame={this.props.restartGame}
                                backToInstructions={this.props.backToInstructions}
                                submitWord={this.props.submitWord}
                                messageToUser={this.props.messageToUser}
                                messageType={this.props.messageType}
                                startedTime={this.props.startedTime}
                            />
                        </div>
                        <div className="col-sm-5 col-md-5">
                            <GameScore
                                correctWords={this.props.correctWords}
                                totalScore={this.props.totalScore}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game