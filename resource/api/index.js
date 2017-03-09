export const getWorkJson = (() => {
	axios.get('./work.json')
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
});