import { FETCH_POSTS, FETCH_USERS } from "./types";
import JsonPlaceHolder from "../apis/JsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const response = await JsonPlaceHolder.get("/posts");
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

export const fetchUsers = () => async dispatch => {
  const response = await JsonPlaceHolder.get(`/users`);
  dispatch({
    type: FETCH_USERS,
    payload: response.data
  });
};
