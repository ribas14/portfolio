<template>
  <div class="hello">
    <div class="container">
      <h3>
        You can find me on <a href="https://www.linkedin.com/in/frcm/" target="blank" class="link">Linkedin</a> or check out my <a class="link" href="https://github.com/ribas14" target="blank">Github</a>
      </h3>
      <br>
      <h3 style="text-align: center">
        Want to talk? Send me an email at  <a style="" hre="mailto:felipercmelo@gmail.com" class="link email">felipercmelo@gmail.com</a>
      </h3>
      <br>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Talk',
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
  
}
.hello {
  text-align: left;
  padding: 20px
}
.email {
  font-size: 2.7rem !important;

}
h3 {
  margin: 30px 0 0;
  color: white;
  font-size: 3rem;
  padding: 10px;
  font-weight: 200
}
ul {
  text-align: right;
  list-style-type: none;
  padding: 0;
}
li > a:hover {
  color: #04CA83;
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
  .email {
    font-size: 1.7rem !important;
  }
}
.link {
  text-decoration: none;
  color: #04CA83;
  font-weight: 700;
  transition: 0.2s
}
.link:hover {
  color: white;
  cursor: pointer;
}
</style>
