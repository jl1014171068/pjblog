import Vue from 'vue';

const state = {
    types: [],
    articles: [],
    metas:[],
    page: 1,
    per_count: 9,
    total_pages: 0,
    current_page: 1,
    currentIndex: 0,
};

const actions = {
    getWork({commit}) 
    {
        window.axios.get('/tags?groups=works')
        .then(result => {
            let res = result.data.data;
            commit('GETTYPE', {res})
            window.axios.get('/articles',{
                params: {
                    tags: res[state.currentIndex].name,
                    page: state.current_page,
                    per_count: state.per_count
                }
            })
            .then(result => {
                let res = result.data;
                commit('GETARTICLES', {res})
            });

        });
    }
};



const mutations = {
    GETTYPE(state, {res}) 
    {
        state.types = res
    },
    GETARTICLES(state, {res}) 
    {
        //获取内容
        // state.articles = res.data
        if(res.meta.pagination.current_page===1){
            Vue.set(state,'articles', []);
        }
        const lists = state.articles.concat(res.data);
        Vue.set(state, 'articles', lists);
        //获取页面信息
        state.metas = res.meta
        // 总页数
        state.total_pages=res.meta.pagination.total_pages
        // 当前页数
        state.current_page=res.meta.pagination.current_page
    }
}



export default {
    state,
    actions,
    mutations
}