import { FETCH_POSTS, FETCH_USER } from "./types";
import JsonPlaceHolder from "../apis/JsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  console.log("before post");
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));

  // you can user map to return promises and use promise.All but its not necessary
  // this is the last sentence and dont have to wait .
};

export const fetchPosts = () => async dispatch => {
  const response = await JsonPlaceHolder.get("/posts");
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await JsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};
