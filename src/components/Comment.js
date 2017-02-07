import React, { Component, PropTypes } from 'react'

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    render() {
        const {text, user} = this.props.comment;
        return (
            <div>
                {text}
                {user && <b> by {user}</b>}
            </div>
        )
    }
}