import React from 'react'
import {charactersApi} from '../api.js'
import CharacterCard from '../Components/CharacterCard.js'
import NewCharForm from '../Components/NewCharFrom.js'

class CharacterContainer extends React.Component {

    state = {
        api: charactersApi
    }

    renderCharacters = () => {
        return (
            this.state.api.map(el => <CharacterCard key={el.name} char={el} />)
        )
    }

    newSubmitHandler = (newObj) => {
        let newArray = [...this.state.api, newObj]
        this.setState({api: newArray})
    }


    render() {
        return <div className="character-main">
            <h1>Anime Slay</h1>
            <NewCharForm newSubmitHandler={this.newSubmitHandler} />
            {this.renderCharacters()}
            </div>
    }

}

export default CharacterContainer;