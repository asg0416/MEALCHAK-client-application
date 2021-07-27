import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import axiosModule from '../axios_module';

import logger from '../../shared/Console';

const SET_POST = 'SET_POST';
const GET_DETAIL_POST = 'GET_DETAIL_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const getDetailPost = createAction(GET_DETAIL_POST, (post_id) => ({ post_id }));

const initialState = {
  list: [],
};

const getPostAX = () => {
  return async function (dispatch, getState, { history }) {
    const res = await axiosModule.get('/posts');
    try {
      console.log(res);
      let post_list = [];
      res.data.forEach((p) => {
        console.log(p.postId, p.id);
        let post = {
          post_id: p.id,
          title: p.title,
          contents: p.contents,
          headCount: p.headCount,
          orderTime: p.orderTime,
          address: p.address,
          insert_dt: p.createdAt,
          username: p.username,
        };
        post_list.push(post);
      });
      dispatch(setPost(post_list));
    } catch (err) {
      console.log(err);
    }
  };
};

const getOnePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axiosModule
      .get('/posts')
      .then((res) => {
        let p = res.data[id];
        console.log(id, res);
        let post = {
          post_id: p.id,
          title: p.title,
          contents: p.contents,
          headCount: p.headCount,
          orderTime: p.orderTime,
          address: p.address,
          insert_dt: p.createdAt,
          username: p.username,
        };
        dispatch(setPost([post]));
      })
      .catch((err) => logger('post.js 62줄: ', err));
  };
};

// middelware
// const getDetailPostDB = (postId) => {
//   return function (dispatch, getState, { history }) {
//     axios
//       .get(`http://localhost:4000/posts/${postId}`)
//       .then((result) => {
//         dispatch(getDetailPost(result.data));
//       })
//       .catch((err) => {
//         console.log('에러: ', err);
//       });
//   };
// };

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;

        // draft.list.push(...action.payload.post_list);
        // console.log(draft.list.push(...action.payload.post_list));

        // draft.list = draft.list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);
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
  },
  initialState
);

const actionCreators = {
  setPost,
  getPostAX,
  getOnePostDB,
};

export { actionCreators };
