import { ActionReducerMap } from "@ngrx/store";
import { ArticleState, appArticleReducer } from "./article.reducer";
import { appProductReducer, productState } from "./product.reducer";

export interface IAppState {
    productsDtls: productState;
    articlesDtls: ArticleState;
  }

  export const reducers: ActionReducerMap<IAppState> = {
    productsDtls: appProductReducer,
    articlesDtls: appArticleReducer,
  };