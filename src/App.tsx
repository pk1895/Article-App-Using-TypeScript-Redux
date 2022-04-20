import { useSelector } from "react-redux";
import "./App.css";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";
import { IArticle, IArticleState } from "./store/type";

function App() {

  const articles: IArticle[] = useSelector((state: IArticleState) => state.articles);
  console.log(`articles: ${JSON.stringify(articles)}`);


  return (
    <div className="App">
      <h1>Redux Article App</h1>
      <AddArticle />

      {articles.map(article => (
        <ArticleList
          key={article.id}
          article={article} />
      ))}

    </div>
  );
}

export default App;
