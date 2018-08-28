import 'rxjs/add/operator/mergeMap';
import { combineEpics } from 'redux-observable';
import { fetchFromApi } from '../middleware/apiService';
import * as endpoints from "../backend-endpoints";
import { types } from "../actions/user";

export const fetchDataEpic = (actionType, work, okActionCreator, errorActionCreator) => (action$) => {
  return  action$.ofType(actionType)
     .flatMap(action => (work(action))
       .then(okActionCreator)
       .catch(errorActionCreator));
}

const postUserAPI = action => {
  const requestBody = {
    username: action.payload.user
  }
  return Promise.all([
    fetchFromApi({
      path: endpoints.userPost, 
      method: 'POST',
      body: requestBody
    })
  ]).then(result => result.isError);
}

export const postUserEpic = fetchDataEpic(
  types.POST_USER,
  postUserAPI,
  payload => ({ type: types.POST_USER_DONE, payload }),
  payload => ({ type: types.POST_USER_ERROR, payload })
);

const userEpic = combineEpics(postUserEpic);
export default userEpic;