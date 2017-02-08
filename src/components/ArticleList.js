import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'

class ArticleList extends Component {

    static propTypes = {
        //А вот сюда еще и из декоратора данные приходят
        articles: PropTypes.arrayOf(React.PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        })).isRequired
    }

    render() {
        const {articles, toggleOpen, openId} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openId}
                toggleOpen={toggleOpen(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }


}

export default accordeon(ArticleList)
