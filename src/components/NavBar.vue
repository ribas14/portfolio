<template>
  <div class="hello">
  <transition name="modal">
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper" >
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div style="display:inline !important; margin-bottom: 25px; cursor: pointer">
                <a @click.stop="english()">🇺🇸</a> &#32&#32 <a @click.stop="portuguese()">🇧🇷</a>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>        
    <div v-if="!showModal">
      <div class="name">
        <div @click.stop="goTo('/')">
        Felipe Ribeiro
        </div>
        <br>
        <div>
          <a @click.stop="$emit('english')">🇺🇸</a> · <a @click.stop="$emit('portuguese')">🇧🇷</a>
        </div>
      </div>
      <div>
        <ul>
          <li><a v-if="lang == 'eng'" @click.stop="goTo('/work')">Work</a></li>
          <li><a v-if="lang == 'pt'" @click.stop="goTo('/work')">Trabalho</a></li>
          <li> · </li>
          <li><a v-if="lang == 'eng'" @click.stop="goTo('/talk')">Hello</a></li>
          <li><a v-if="lang == 'pt'" @click.stop="goTo('/talk')">Olá</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {    
  name: 'NavBar',
  data() {
    return {
      showModal: false
    };
  },
  props: {
    lang: String,
  },
  created() {
    localStorage.lang ? this.showModal = false : this.showModal = true
  },
  methods: {
    english() {
      this.showModal = false
      this.$emit('english')
    },
    portuguese() {
      this.showModal = false
      this.$emit('portuguese')
    },
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
  margin: 0 3px;
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #161618;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  font-size: 3em;
  text-align: center;
  margin: 50px 50px;
}

.modal-default-button {
  float: right;
}

</style>
