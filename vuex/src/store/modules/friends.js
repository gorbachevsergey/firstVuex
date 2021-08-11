export default {
    actions: {
        async fetchFriends(ctx) {
            const res = await fetch(
                'https://60d2c48c858b410017b2e2d9.mockapi.io/users'
            );
            const friends = await res.json();

            ctx.commit('updateFriends',friends)
        }
    },

    mutations: {
        updateFriends(state,data){
            state.friend = data
        }
    },

    state: {
        friend: []
    },

    getters: {
        allFriends(state) {
            return state.friend
        }
    }
}
