import Vue from 'vue';

const state = {
    links: [],
    currentIndex: '',
    articles: [],
    page: 1,
    per_count: 10,
    total_pages: 0,
    current_page: 1,
    total: 0
};

const actions = {
    getBlogs({commit},current_page) 
    {
        window.axios.get('/tags?groups=blog')
        .then(result => {
            let res = result.data.data;
            commit('GETLINKS', {res})
            window.axios.get('/articles?groups=blog',state.currentIndex===''?{
                params:{
                    page: current_page||1,
                    per_count: state.per_count
                }
            }:{
                params:{
                    tags: res[state.currentIndex].name,
                    page: current_page||1,
                    per_count: state.per_count
                }
            })
            .then(result => {
                let res = result.data;
                document.body.scrollTop=0;
                commit('GETBLOGS', {res})
            });

        });
    }

};



const mutations = {
    GETLINKS(state, {res}) 
    {
        state.links = res
    },
    GETBLOGS(state, {res}) 
    {
        //获取内容
        state.articles = res.data
        //获取页面信息
        state.metas = res.meta
        // 总页数
        state.total_pages=res.meta.pagination.total_pages
        // 当前页数
        state.current_page=res.meta.pagination.current_page
        state.total=res.meta.pagination.total
    }
}



export default {
    state,
    actions,
    mutations
}