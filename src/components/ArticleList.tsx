import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteArticle, editArticle } from '../store/action';
import { IArticle } from '../store/type';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

interface Props {
    article: IArticle
}

const ArticleList: React.FC<Props> = ({ article }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editData, setEditData] = useState<IArticle>({ id: article.id, title: article.title, content: article.content });
    const dispatch = useDispatch();

    const onDeleteArticle = () => {
        dispatch(deleteArticle(article));
    }

    const onEditData = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setEditData({ ...editData, [evt.target.id]: evt.target.value });
        console.log(editData);

    }

    const onEditArticle = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setEdit(false);
        dispatch(editArticle(editData));
    }

    return (
        <>
            <form className="todos__single" onSubmit={(evt) => onEditArticle(evt)}>
                {edit ?
                    <input value={editData.title} id="title" onChange={(e) => onEditData(e)} className="todos__single--text" placeholder='Title' />
                    : <h1 className="todos__single--text">{article.title}</h1>
                }
                {edit ?
                    <input value={editData.content} id="content" onChange={(e) => onEditData(e)} className="todos__single--text" placeholder='Content' />
                    : <p className="todos__single--text">{article.content}</p>
                }

                <div>
                    <span
                        className="icon" onClick={() => { setEdit(true) }}>
                        <AiFillEdit />
                    </span>
                    <span className="icon" onClick={onDeleteArticle}>
                        <AiFillDelete />
                    </span>
                    {edit && <button className="icon" type='submit'>
                        <MdDone />
                    </button>}
                </div>
            </form >
        </>
    )
}

export default ArticleList;