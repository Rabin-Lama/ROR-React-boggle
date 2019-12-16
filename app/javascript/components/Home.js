import React, {Component} from 'react'
import Banner from './Banner'
import Instructions from './Instructions'
import Game from './Game'
import axios from 'axios'

const csrfToken = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game_is_on: false,
            messageToUser: '',
            messageType: 'blue',
            board_letters: [],
            correct_words: [],
            attempted_words: [],
            total_score: 0,
            timer_start: Date.now() + 180000,
            inputDisabled: false
        }
    }

    componentDidMount() {
        axios.get('/get_board_letters.json')
            .then(response => {
                this.setState({board_letters: response.data.data})
            })
            .catch(response => {
                console.log(response)
            })
    }

    restartGame(e) {
        e.preventDefault()

        if (confirm("You'll lose all your progress. Are you sure ?")) {
            this.startGame(e)
        }
    }

    backToInstructions(e) {
        e.preventDefault()

        if (confirm("You'll lose all your progress. Are you sure ?")) {
            this.setState({game_is_on: false})
        }
    }

    startGame(e) {
        axios.get('/get_board_letters.json')
            .then(response => {
                this.setState({
                    game_is_on: true,
                    board_letters: response.data.data,
                    messageToUser: '',
                    correct_words: [],
                    attempted_words: [],
                    total_score: 0,
                    timer_start: Date.now() + 180000
                })
            })
            .catch(response => {
                console.log(response)
            })
    }

    submitWord(e) {
        if (e.key === 'Enter') {
            let submitted_word = e.target.value.trim()
            this.setState(prevState => ({
                attempted_words: [...prevState.attempted_words, submitted_word],
            }))
            if(this.state.attempted_words.includes(submitted_word) || submitted_word.length === 1) {
                e.target.value = ''
                return false;
            }
            axios.post('http://localhost:3000/submit_word', {
                    word: submitted_word,
                    board_letters: this.state.board_letters
                })
                .then(response => {
                    if(response.data.result.length > 0) {
                        let msg = '';
                        let msg_type = '';
                        if(response.data.result.length === 2) {
                            msg = 'Nice'
                            msg_type = 'green'
                        } else if(response.data.result.length === 3) {
                            msg = 'Cool'
                            msg_type = 'green'
                        } else {
                            msg = 'Awesome'
                            msg_type = 'green'
                        }
                        this.setState(prevState => ({
                            correct_words: [...prevState.correct_words, response.data.result],
                            messageToUser: msg,
                            messageType: msg_type,
                        }))

                        // total score is sum of letters in all the words in the array
                        this.setState({total_score: this.state.correct_words.join('').length})
                        // alert(response.data.test_res)
                    } else {
                        this.setState({messageToUser: 'Wrong !', messageType: 'red'})
                    }
                })
                .catch(response => {
                    console.log(response)
                })
            e.target.value = ''
        }
    }

    render() {
        const body = (
            this.state.game_is_on ?
                <Game
                    boardLetters={this.state.board_letters}
                    restartGame={this.restartGame.bind(this)}
                    backToInstructions={this.backToInstructions.bind(this)}
                    submitWord={this.submitWord.bind(this)}
                    correctWords={this.state.correct_words}
                    totalScore={this.state.total_score}
                    messageToUser={this.state.messageToUser}
                    messageType={this.state.messageType}
                    startedTime={this.state.timer_start}
                /> :
                <Instructions startGame={this.startGame.bind(this)}/>
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