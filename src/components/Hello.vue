<template>
<div>
<md-card v-for="picture in this.$root.catslist" key="picture.id">
  <md-card-media>
    <img :src='picture.url' alt="People">
  </md-card-media>

  <md-card-header>
    <div class="md-title">{{picture.title}}</div>
    <div class="md-subhead">{{picture.info}}</div>
  </md-card-header>

</md-card>
</div>
</template>

<script>
import data from '../data'
export default {
  name: 'hello',
  props: {
    pictures: {
     type: Object,
     default: data.pictures
    },
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
