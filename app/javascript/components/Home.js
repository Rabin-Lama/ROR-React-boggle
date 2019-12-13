import React, {Component} from 'react'
import Banner from './Banner'
import Instructions from './Instructions'
import Game from './Game'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game_is_on: true,
            letters: []
        }
    }

    componentDidMount() {
        axios.get('/get_board_letters.json')
            .then(response => {
                this.setState({letters: response.data.data})
            })
            .catch(response => {
                console.log(response)
            })
    }

    restartGame(item) {
        if(confirm("You'll lose all your progress. Are you sure ?")) {
            axios.get('/get_board_letters.json')
                .then(response => {
                    this.setState({letters: response.data.data})
                })
                .catch(response => {
                    console.log(response)
                })
        }
    }

    render() {
        const body = (
            this.state.game_is_on ?
                <Game boardLetters={this.state.letters} restartGame={this.restartGame.bind(this)}/> :
                <Instructions/>
        )
        return (
            <div className="main">
                <Banner/>
                {body}
            </div>
        )
    }
}

export default Home