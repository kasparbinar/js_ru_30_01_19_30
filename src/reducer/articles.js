import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_DATE_ARTICLE, FILTER_NAME_ARTICLE} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
            //вспомни, что редюсеры - чистые функции, нельзя брать внешние переменные
            //по сути ты удаляешь статьи, а должен хранить здесь список всех статей, а фильтровать где-то в другом месте(например в коннекте)
            //А еще надо было значения фильтров хранить в сторе
        case FILTER_NAME_ARTICLE:
            console.log(defaultArticles.length);
            if(payload.names.length > 0){
                let newArticles = [];
                for (let key in payload.names){
                    //articles = articles.filter(article => article.title === payload.names[key].label)
                    for (let key2 in defaultArticles){
                        if (payload.names[key].label === defaultArticles[key2].title){
                            newArticles.push(defaultArticles[key2]);
                        }
                    }
                }
                return newArticles;

            }
            return defaultArticles;
        case FILTER_DATE_ARTICLE:
            const {from, to} = payload;


            if (from && to){
                const datefrom = new Date(from).getTime();
                const dateto = new Date(to).getTime();
                let newArticles = [];

                for (let key in defaultArticles){
                    let articleDate = new Date(defaultArticles[key].date).getTime();
                    if (articleDate >= from && articleDate <= to){
                        newArticles.push(defaultArticles[key]);
                    }
                }
                return newArticles;
            }


    }

    return articles
}
