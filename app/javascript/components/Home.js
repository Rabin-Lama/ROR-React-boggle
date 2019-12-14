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
            game_is_on: true,
            submitted_word_status: '',
            board_letters: [],
            correct_words: [],
            attempted_words: [],
            total_score: 0
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
            axios.get('/get_board_letters.json')
                .then(response => {
                    this.setState({board_letters: response.data.data})
                })
                .catch(response => {
                    console.log(response)
                })
        }
    }

    submitWord(e) {
        if (e.key === 'Enter') {
            let submitted_word = e.target.value.trim()
            this.setState(prevState => ({
                attempted_words: [...prevState.attempted_words, submitted_word],
            }))
            if(this.state.attempted_words.includes(submitted_word)) {
                e.target.value = ''
                return false;
            }
            axios.post('http://localhost:3000/submit_word', {
                    word: submitted_word
                })
                .then(response => {
                    if(response.data.result.length > 0) {
                        this.setState(prevState => ({
                            correct_words: [...prevState.correct_words, response.data.result],
                            submitted_word_status: response.data.result,
                        }))

                        // total score is sum of letters in all the words in the array
                        this.setState({total_score: this.state.correct_words.join('').length})
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
                    submitWord={this.submitWord.bind(this)}
                    correctWords={this.state.correct_words}
                    totalScore={this.state.total_score}
                    submittedWordStatus={this.state.submitted_word_status}
                /> :
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