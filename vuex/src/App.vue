<template>
  <div id="app">
    <div class="allFriends">
      <div v-for="friend of allFriends"  :key="friend.id" class="friends">
        <div class="friendCard">
          <img class="img" :src="friend.avatar">
          <div class="name">
            <h2>{{friend.name}}</h2>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  computed:mapGetters(['allFriends']),
  methods: mapActions(['fetchFriends']),
  mounted() {
    this.fetchFriends()
  }

}
</script>

<style>
#app {}
.allFriends{
  display: flex;
  padding: 5px;
  width: 600px;
  flex-wrap: wrap
}
.friendCard{
  height: 150px;
  width: 100px;
  margin: 10px;
}
.friends{
  display: flex;
}
.img{
  object-fit: cover;
  height: 100px;
}
.name h2{
  font-size: 12px;
}
</style>
