import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./constant";
import { AppState } from "./type";
import { Action } from "./type";
import { Product } from "./type";
const initialState: AppState<Product> = {
    loading: false,
    data: null,
    error: null,
}
// (state = initialState, action) viết theo dạng default params.
const productReducer = (state = initialState, action: Action): AppState<Product> => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }
        case GET_DATA_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
        case GET_DATA_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default productReducer;