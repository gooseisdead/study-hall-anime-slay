import React from 'react'
import {charactersApi} from '../api.js'
import CharacterCard from '../Components/CharacterCard.js'
import NewCharForm from '../Components/NewCharFrom.js'
import SearchForm from '../Components/SearchForm.js'

class CharacterContainer extends React.Component {

    state = {
        api: charactersApi,
        searchValue: ''
    }

    renderCharacters = () => {
        let filteredArray = this.state.api.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(el => <CharacterCard key={el.name} char={el} />)
    }

    newSubmitHandler = (newObj) => {
        let newArray = [...this.state.api, newObj]
        this.setState({api: newArray})
    }

    searchChangeHandler = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        return (
        <>
            <h1>Anime Slay</h1>
            <h3>Add New Character</h3>
            <NewCharForm newSubmitHandler={this.newSubmitHandler} />
            <h3>Search Character By Name</h3>
            <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler}/>
            <br></br>
            <div className="character-main">
            {this.renderCharacters()}
            </div>
        </>
        )
    }

}

export default CharacterContainer;