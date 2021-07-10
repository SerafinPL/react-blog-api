import * as actionTypes from "./actionTypes";




const initialState = {
  posts: [],
  comments: [],
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
    // case actionTypes.GET_POST: {
    //   console.log("GETPoSTS");

    //   let data;

    //   fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(res);
    //       data = res;
	// return {
	// 	    ...state,
	// 			posts: data,
	// 	    loaded: false,
	// 	    error: true,
	// 	    load: true,
	// 	  };
    //     });
		
    // //   return {
    // //     ...state,
	// // 		posts: data,
    // //     loaded: false,
    // //     error: true,
    // //     load: true,
    // //   };
    //  }
  }

  return state;
};

export default reducer;
