import Vue from 'vue';

const state = {
	titles: '',
	currentIndex: 0,
	page: 1,
	per_count: 28,
	total_pages: 0,
	taglist: [],
	total: 0,
	metas:[]
};

const actions = {
	getShare({commit},current_page) 
	{
		window.axios.get('/tags?groups=share')
		.then(result => {
			let res = result.data.data;
			commit('GETSHARE', {res})
			window.axios.get('/shares',{
				params:{
					tags: res[state.currentIndex].name,
					page: current_page||1,
					per_count: state.per_count
				}
			})
			.then(result => {
				let res = result.data;
				document.body.scrollTop=0;
				commit('GETSHAREARTICLE', {res})
			});

		});
	}

};



const mutations = {
	GETSHARE(state, {res}) 
	{
		state.titles = res
	},
	GETSHAREARTICLE(state, {res}) 
	{
        //获取内容
        state.taglist = res.data
        //获取页面信息
        state.metas = res.meta
        console.log(res.meta.pagination)
        // 总页数
        state.total_pages=res.meta.pagination.total_pages
        // 当前页数
        state.total=res.meta.pagination.total
    }
}



export default {
	state,
	actions,
	mutations
}