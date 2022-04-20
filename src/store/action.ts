import { IArticle, IArticleAction } from "./type"
import * as actionType from "./actionType";

export function addArticle(article: IArticle){
    
    const action: IArticleAction = {
        type: actionType.ADD_ARTICLE,
        article
      }
    
      return action;
}

export function deleteArticle(article: IArticle) {

  const action: IArticleAction = {
    type: actionType.DELETE_ARTICLE,
    article
  }

  return action;
}

export function editArticle(article: IArticle) {
  
  const action: IArticleAction = {
    type: actionType.EDIT_ARTICLE,
    article
  }

  return action;
}