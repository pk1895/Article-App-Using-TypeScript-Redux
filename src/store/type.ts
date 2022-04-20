
export interface IArticle {
    id: number,
    title: string,
    content?:string
}

export interface IArticleState{
    articles: IArticle[];
}

export interface IArticleAction{
    type: string,
    article: IArticle
}