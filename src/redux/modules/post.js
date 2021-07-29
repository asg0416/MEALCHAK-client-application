import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axiosModule from "../axios_module";

import logger from "../../shared/Console";

const SET_POST = "SET_POST";
const GET_DETAIL_POST = "GET_DETAIL_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_item) => ({ post_item }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));

const initialState = {
  list: [],
};

const getPostAX = () => {
  return function (dispatch, getState, { history }) {
    axiosModule
      .get("/posts")
      .then((res) => {
        let post_list = [];
        res.data.forEach((p) => {
          let post = {
            post_id: p.id,
            title: p.title,
            contents: p.contents,
            category: p.category,
            shop: p.restaurant,
            headCount: p.headCount,
            orderTime: p.orderTime,
            address: p.address,
            insert_dt: p.createdAt,
            username: p.username,
            user_id: p.userId,
          };
          post_list.push(post);
        });
        dispatch(setPost(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getOnePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    axiosModule
      .get(`/posts/${postId}`)
      .then((res) => {
        let p = res.data;
        let post = {
          post_id: p.id,
          title: p.title,
          contents: p.contents,
          category: p.category,
          shop: p.restaurant,
          headCount: p.headCount,
          orderTime: p.orderTime,
          address: p.address,
          insert_dt: p.createdAt,
          username: p.username,
          user_id: p.userId,
        };
        dispatch(setPost([post]));
      })
      .catch((err) => {
        logger("post모듈 - getOnePostDB : ", err);
      });
  };
};

const addPostAX = (post_info) => {
  return function (dispatch, getState, { history }) {
    axiosModule
      .post("/posts", {
        title: post_info.title,
        headCount: post_info.headCount,
        category: post_info.foodCategory,
        address: post_info.place,
        orderTime: post_info.appointmentTime,
        contents: post_info.contents,
        restaurant: post_info.restaurant,
      })
      .then((res) => {
        window.alert("모집글 작성이 완료되었습니다.");
        window.location.replace("/home");
      })
      .catch((e) => {
        logger("모집글 작성 모듈 에러", e);
        if (
          window.confirm(
            "모집글 작성에 에러가 발생했습니다.\n홈 화면으로 돌아가시겠습니까?"
          )
        ) {
          history.replace("/home");
        } else {
          history.push("/upload");
        }
      });
  };
};

const editPostAX = (post_id, post_info) => {
  return function (dispatch, getState, { history }) {
    axiosModule
      .put(`/posts/${post_id}`, {
        title: post_info.title,
        headCount: post_info.headCount,
        category: post_info.foodCategory,
        address: post_info.place,
        orderTime: post_info.appointmentTime,
        contents: post_info.contents,
        restaurant: post_info.restaurant,
      })
      .then((res) => {
        logger("수정 후 res", res);
        let post = {
          post_id: res.data.id,
          title: res.data.title,
          contents: res.data.contents,
          category: res.data.category,
          shop: res.data.restaurant,
          headCount: res.data.headCount,
          orderTime: res.data.orderTime,
          address: res.data.address,
          insert_dt: res.data.createdAt,
          username: res.data.username,
          user_id: res.data.userId,
        };

        dispatch(editPost(post_id, post));
        window.alert("모집글 수정이 완료되었습니다.");
        window.location.replace(`/post/${post_id}`);
      })
      .catch((e) => {
        logger("모집글 수정 모듈 에러", e);
        if (
          window.confirm(
            "모집글 작성에 에러가 발생했습니다.\n홈 화면으로 돌아가시겠습니까?"
          )
        ) {
          history.replace("/home");
        } else {
          history.push(`/post/${post_id}`);
        }
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);

        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.post_id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.post_id)] = cur;
            return acc;
          }
        }, []);
      }),

    [GET_DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.detail_post.push(...action.payload.post_id);

        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post_item);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.post_id === action.payload.post_id
        );
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  getPostAX,
  getOnePostDB,
  addPostAX,
  editPostAX,
};

export { actionCreators };
