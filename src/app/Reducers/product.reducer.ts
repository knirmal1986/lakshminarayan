import { Product } from '../models/product.model';

//list of ACTIONS
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export interface productModal {
  products: Product[];
  selectedProduct: Product,
  deleteProduct:Product
}

export interface productState {
  productsList: productModal;
}
//reducers
const initialState: productState = {
  productsList: {
    products: [],
    selectedProduct: {
        name: '',
        price: 0
    },
    deleteProduct: {
      name: '',
      price: 0
    }
  },
 
  
};
export function appProductReducer(
  productstate = initialState,
  action: any
) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {...productstate, productsList: action.payload};
    default:
      return productstate;
  }
}
