<template>
  <div class="hello">
    <div class="container">
      <h3 v-if="lang == 'eng'">
        Hi, I am a web developer working with javascript, react native and vuejs
      </h3>
      <h3 v-if="lang == 'pt'">
        Oi, trabalho com desenvolvimento web usando javascript, react native e vuejs
      </h3>      
      <br>
      <h3 v-if="lang == 'eng'">
        You can check out some of my <a @click.stop="goTo('/work')" class="link">work</a>
      </h3>
      <h3 v-if="lang == 'pt'">
        Você pode ver alguns dos meus <a @click.stop="goTo('/work')" class="link">trabalhos</a>
      </h3>      
      <br>
      <h3 v-if="lang == 'eng'">
        Or we can <a @click.stop="goTo('/talk')" class="link">talk</a>
      </h3>
      <h3 v-if="lang == 'pt'">
        Ou podemos <a @click.stop="goTo('/talk')" class="link">conversar</a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },  
  props: {
    lang: String,
  },
  methods: {
    goTo(r) {
      this.$router.push(r)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 100px;
}
.name {
  color: white;
  font-size: 1.4em;
  float: left;
  
}
.hello {
  text-align: left;
  padding: 20px
}
h3 {
  margin: 30px 0 0;
  color: white;
  font-size: 3rem;
  font-weight: 200
}
ul {
  text-align: right;
  list-style-type: none;
  padding: 0;
}
li > a {
  color: white;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 600
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media only screen and (max-width: 768px) {
  h3 {
    font-size: 2rem !important;
  }
}
.link {
  text-decoration: none;
  color: #04CA83;
  font-weight: 800;
  transition: 0.2s
}
.link:hover {
  color: white;
  cursor: pointer;
}
</style>
