import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false,
      //Лучше внести этот стейт в CommentList
        isOpenComments: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
                {this.getButton()}
                {this.getComments()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
            </section>
        )
    }

    getComments() {
        if (!this.state.isOpen || !this.state.isOpenComments) return null

        return (
            <CommentList comments={this.props.article.comments}/>
        )
    }

    getButton() {
        if (!this.state.isOpen || this.props.article.comments == undefined){
            return null;
        }
        return (
            <button onClick={this.handleClickComment}>{this.state.isOpenComments ? 'Hide comments' : 'Show comments'}</button>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleClickComment = (ev) => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }
}
