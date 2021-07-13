import * as actionTypes from "./actionTypes";

const initialState = {
  posts: [],
  commentsFav: [],
  loaded: false,
  error: null,
  load: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: {
      if (!state.loaded && !action.error) {
        return {
          ...state,
          posts: state.posts.concat(action.result),
          loaded: true,
          load: true,
          error: false,
        };
      } else if (action.error) {
        return {
          ...state,
          loaded: false,
          error: true,
          load: true,
        };
      } else {
        return state;
      }

    }
    case actionTypes.TOGGLE_FAV:
      const postIndex = state.posts.findIndex(
        p => p.id === action.id
      );
      const newFavStatus = !state.posts[postIndex].fav;
      const updatedPost = [...state.posts];
      updatedPost[postIndex] = {
        ...state.posts[postIndex],
        isFavorite: newFavStatus
      };
      return {
        ...state,
        products: updatedPost
      };
    default:
      return state;
  }

  return state;
};

export default reducer;
