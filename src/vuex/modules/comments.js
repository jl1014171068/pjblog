import Vue from 'vue';

const state = {
     slug:'',
     content: '',
     
     sendFlag: false,
     per_page: 10,

     total:0,
     total_pages: 0,
     current_page: 1,
};

const actions = {
    getComments({commit}) {
        window.axios.get('/articles/' + state.slug + '/replies',{
             params: {
                    per_page: state.per_page,
                    current_page: state.current_page,
                }
        })
        .then(result => {
            let res=result.data;
            commit('GETCOMMENTS', {res})
        });
    }
};



const mutations = {
    GETCOMMENTS(state, {res})
    {
       state.content = res
       state.total = res.meta.pagination.total
       state.total_pages = res.meta.pagination.total_pages
       state.current_page = res.meta.pagination.current_page

   }
}



export default {
    state,
    actions,
    mutations
}