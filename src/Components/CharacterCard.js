import React from 'react'

class CharacterCard extends React.Component {

    render() {
        const {char} = this.props;
        return(
        <div className="char-card">
            <h2>{char.name}</h2>
            <img alt={char.name} src={char.img} />
            <p>{char.show}</p>
        </div>
        )
    }
}

export default CharacterCard;