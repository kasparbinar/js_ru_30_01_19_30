import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import SelectTitle from './SelectTitle'
import DateRange from './DateRange'
import {articles as defaultArticles} from '../fixtures'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        user: '',
        selection: null
    }

    render() {
        const {articles} = this.props

        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <SelectTitle articles={defaultArticles} />
                <DateRange />
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }



    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles
}))(App)