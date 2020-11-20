import React from "react"

class NewCharForm extends React.Component {

    state = {
        name: '',
        img: '',
        show: ''
    }

    newCharHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render () {
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.newSubmitHandler({
                        name: event.target.name.value,
                        show: event.target.show.value,
                        img: event.target.img.value
                    })
                    this.setState({
                        name: '',
                        img: '',
                        show: ''
                    })
                }}>
                    •<input type="text" name="name" placeholder="enter character name" value={this.state.name} onChange={this.newCharHandler} /> •
                    <input type="text" name="img" placeholder="enter image url" value={this.state.img} onChange={this.newCharHandler} /> •
                    <input type="text" name="show" placeholder="enter character show" value={this.state.show} onChange={this.newCharHandler} />
                    <br></br>
                    <br></br>
                    <button>Submit Character</button>
                </form>
                <br />
            </div>
        )
    }
}

export default NewCharForm;


