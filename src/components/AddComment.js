import React, { Component, PropTypes } from 'react'

class AddComment extends Component {

    state = {
        author: '',
        comment: ''
    }

    render() {
        return (
            <div>
                Author:
                <input type="text" value={this.state.author} onChange={this.handleAuthorChange}/>
                <br />
                Comment:
                <input type="text" value={this.state.comment} onChange={this.handleCommentChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

    handleAuthorChange = (ev) => {
        this.setState({
            author: ev.target.value
        })
    }

    handleCommentChange = (ev) => {
        this.setState({
            comment: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        console.log('author: ', this.state.author);
        console.log('comment: ', this.state.comment);
        this.setState({
            author: '',
            comment: ''
        })
    }
}

export default AddComment