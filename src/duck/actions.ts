import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./constant";
import api from "../Utils/ApiUtils";

const createSimpleAction = (type: string) => (payload: any) => (dispatch: any) => dispatch({ type, payload });
const actFetchDataRequest = () => ({ type: GET_DATA_REQUEST });
const actFetchDataSuccess = createSimpleAction(GET_DATA_SUCCESS);
const actFetchDataFail = createSimpleAction(GET_DATA_FAIL);


export const actFetchData = () => {
    return (dispatch: any) => {
        dispatch(actFetchDataRequest());
        api.get("Product")
            .then((result) => {
                dispatch(actFetchDataSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actFetchDataFail(error));
            })
    }
};


