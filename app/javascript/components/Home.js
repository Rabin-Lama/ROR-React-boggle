import React, {Component} from 'react'
import Banner from './Banner'
import Instructions from './Instructions'
import Game from './Game'
import axios from 'axios'

class Home extends Component {
    constructor() {
        // Hi there Bich. I wanted to ask a small question regarding the task. Should the the system only validate
        // words which are present on the board, diagonally, vertically or horizontally ?
        // Or can the letters pivot as well ?
        super()

        this.state = {
            game_is_on: false,
            letters: []
        }

        axios.get('/get_board_letters.json')
            .then(response => {
                this.state.letters = response.data.data;
            })
            .catch(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div className="main">
                <Banner/>
                {/* <Instructions /> */}
                <Game/>
            </div>
        )
    }
}

export default Home