<template>
  <div class="hello">
    <div>
      <div class="name" @click.stop="goTo('/')">
        Felipe Ribeiro
      </div>
      <div>
        <ul>
          <li><a @click.stop="goTo('/work')">Work</a></li>
          <li><a @click.stop="goTo('/talk')">Hello</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {    
  name: 'NavBar',
  props: {
    msg: String
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
  cursor: pointer;
  
}
.hello {
  text-align: left;
  padding: 20px
}
h3 {
  margin: 30px 0 0;
  color: white;
  font-size: 4rem;
  font-weight: 200
}
ul {
  text-align: right;
  list-style-type: none;
  padding: 0;
}
li > a:hover {
  color: #04CA83;
  cursor: pointer;
}
li > a {
  transition: 0.2s;
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
