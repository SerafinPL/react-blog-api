import * as actionTypes from "./actionTypes";



export const FetchData = () => {
    console.log('fetch')
	return dispatch =>{
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw Error(res.statusText);
              }
            })
            .then((res) => {
      
      
              const changeRes = res.map(element => {
                element.fav = false;
                return element;
              });
              
              dispatch({
                type: actionTypes.STORE_RESULT,
                result: changeRes, 
                error: false,
              });
            })
            .catch((err) => {
              console.log(err);
              dispatch({
                type: actionTypes.STORE_RESULT,
                result: err, 
                error: true,
              });
            });
	};
};