/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

 window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

 window.axios = require('axios');
 // window.axios.defaults.baseURL=`http://xsp.zendaiart.net/api`;
window.axios.defaults.baseURL=`http://service.smalltiger.me/api`;
window.axios.defaults.headers.common = {
	'X-CSRF-TOKEN': 'luan xie de a!!',
	'X-Requested-With': 'XMLHttpRequest'
};
window.axios.interceptors.request.use(function (config) {
	return config;
}, function (error) {
	return Promise.reject(error);
});

window.axios.interceptors.response.use(function (response) {
	return response;
}, function (error) {

	return Promise.reject(error);
});




