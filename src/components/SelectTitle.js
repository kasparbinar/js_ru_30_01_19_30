import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {filterNameArticle} from '../AC'

class SelectTitle extends Component {
    static propTypes = {
    }

    state = {
        selection: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
        )
    }

    handleSelectChange = selection => {
        this.setState({ selection })
        this.props.filterNameArticle(selection)
    }
}

export default connect(null, { filterNameArticle })(SelectTitle)