import {INCREMENT, DELETE_ARTICLE, FILTER_NAME_ARTICLE, FILTER_DATE_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterDateArticle(from, to) {
    return {
        type: FILTER_DATE_ARTICLE,
        payload: { from, to }
    }
}

export function filterNameArticle(names) {
    return {
        type: FILTER_NAME_ARTICLE,
        payload: { names }
    }
}