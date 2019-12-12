import React, { Component } from 'react';

class Game extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="board">
                                Board here
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sidebar">
                                Sidebar here
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer">
                            timer | restart button
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game