import { createStore, Store } from "redux";
import { IArticleState, IArticleAction } from "../store/type";
import reducer from "../store/reducer";

const store: Store<IArticleState, IArticleAction> = createStore(reducer);

export default store;