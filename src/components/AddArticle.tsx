import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addArticle } from '../store/action';
import { IArticle } from '../store/type';

const AddArticle: React.FC = () => {

  const [article, setArticle] = useState<IArticle>({ id: 0, title: "", content: "" });
  const dispatch = useDispatch();

  const handleArticleDetail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, [evt.target.id]: evt.target.value });
  }

  const onAddArticle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addArticle(article));
    // console.log(article);
  }

  return (
    <form onSubmit={(e) => onAddArticle(e)} className="input">
      <input placeholder='Title' id="title" type="text" className="input__box" onChange={(e) => handleArticleDetail(e)} />
      <input placeholder='Content' id="content" type="text" className="input__box" onChange={(e) => handleArticleDetail(e)} />
      <button type='submit' className="input_submit">
        Add article
      </button>
    </form>
  )
}

export default AddArticle;