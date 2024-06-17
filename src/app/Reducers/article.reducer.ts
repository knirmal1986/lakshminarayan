import { Article } from "../models/product.model"

//list of ACTIONS
export const ADD_ARTICLE = "ADD_ARTICLE"
export const REMOVE_Article = "REMOVE_ARTICLE"

export interface ArticleModal{
    articles: Article[],
    selectedArticle: Article
}

export interface ArticleState{
    articlesList: ArticleModal
}
//reducers
const initialState : ArticleState =  {
    articlesList: {
        articles: [],
        selectedArticle:{
            name: "",
            price: 0
        }
    }
}
export function appArticleReducer(articlestate= initialState, action: any){
    switch(action.type){
        case ADD_ARTICLE : 
        return { ...articlestate , ArticlesList: action.payload}
        default: 
        return articlestate
    }
}