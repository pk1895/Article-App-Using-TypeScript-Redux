import { IArticle, IArticleAction, IArticleState } from "./type";
import * as actionType from "./actionType";

const initialState: IArticleState = {
    articles: []    
}

const reducer = (
    state = initialState,
    action: IArticleAction

) => {
    
     switch (action.type) {
         case actionType.ADD_ARTICLE:
                     
             const newArticle: IArticle = {
                id: Date.now(), 
                title: action.article.title,
                content: action.article.content,
             }
             
              return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
             
         case actionType.DELETE_ARTICLE:
             const lastestArticle: IArticle[] = state.articles.filter(el => el.id !== action.article.id);
             
             return {
                 ...state,
                 articles: lastestArticle
             }       
         
         case actionType.EDIT_ARTICLE:
             const updatedArticle: IArticle[] = state.articles.map(el => 
                 el.id === action.article.id ?
                     { ...el, title: action.article.title, content: action.article.content }:el
             );
             
             return {
                 ...state,
                articles: updatedArticle
             }
         
         default:
             return state;
    }

}

export default reducer;