import Vue from 'vue';

const state = {
	slug:'',
	content: '',
	types: [],
	prevDisabld: false,
	nextDisabld: false
};

const actions = {
	getBlog({commit}) {
		window.axios.get('/articles/'+state.slug+'?groups=blog')
		.then(result => {
			let res=result.data.data;
			commit('GETBLOG', {res})
		});
	},
	getType({commit}) {
		window.axios.get('/articles/'+state.slug+ '?include=tags&groups=blog')
		.then(result => {
			let res=result.data.data.tags;
			console.log(res)
			commit('GETTYPE', {res})
		});
	}
};



const mutations = {
	GETBLOG(state, {res})
	{
		state.content = res
	},
	GETTYPE(state, {res})
	{
		state.types = res
	},
}



export default {
	state,
	actions,
	mutations
}