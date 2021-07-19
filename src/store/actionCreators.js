

export const FetchData = () => {
	return dispatch =>{
		
		// axios.post(url, authData)
		// .then( response => {
		// 	//console.log(response.data);
		// 	const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000));
		// 	localStorage.setItem('token', response.data.idToken);
		// 	localStorage.setItem('expirationDate', expirationDate);
		// 	localStorage.setItem('userId', response.data.localId);
		// 	//console.log(localStorage);
		// 	dispatch(authSuccess(response.data.idToken, response.data.localId));
		// 	dispatch(checkAuthTimeout(response.data.expiresIn));
		// })
		// .catch(error => {
		// 	//console.log(error.response.data.error.message);
		// 	dispatch(authFail(error));
		// });
	};
};