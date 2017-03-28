import Vue from 'vue';

const state = {
    slug: '',
    content: '',
    prevDisabld: true,
    nextDisabld: true
};

const actions = {
    getArticle({commit}) {
        window.axios.get('/articles/'+state.slug)
        .then(result => {
            let res=result.data.data;
            commit('GETARTICLE', {res})
        });
    }
};



const mutations = {
    GETARTICLE(state, {res})
    {
         state.content = res
    }
}



export default {
    state,
    actions,
    mutations
}