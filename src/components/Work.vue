<template>
  <div class="hello" ref="main">
    <div class="container">
      <h3 class="title">Phone to Chrome</h3>
      <h3>React Native app reads a QR code on website or extension and a chat between them is created.</h3>
      <div class="row">
        <div class="column">
          <a href="https://github.com/ribas14/phone-to-chrome" target="blank">
            <img src="@/assets/github.png" alt="Snow" style="width:50px; float: right">
          </a>
        </div>
        <div class="column">
          <a href="https://play.google.com/store/apps/details?id=com.felri.phonetochrome" target="blank">
            <img src="@/assets/google_play.png" alt="Snow" style="width:50px">
          </a>
        </div>
        <div class="column">
          <a href="https://ctop.site/" target="blank">
            <img src="@/assets/site.webp" alt="Snow" style="width:50px; float: left">
          </a>  
        </div>        
      </div>
      <div class="video">
        <div style="width:100%;height:0px;position:relative;padding-bottom:200.000%;">
          <iframe src="https://streamable.com/s/dsr8r/hqekjx" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;">
          </iframe>
        </div>
      </div>
      <h3 class="title">Santri Sistemas</h3>
      <h3>Dashboard for a legacy system using Vuejs</h3>
      <div class="video">
        <div style="width:100%;height:0px;position:relative;padding-bottom:51.095%;">
          <iframe src="https://streamable.com/s/gkre8/lwekca" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
        </div>
      </div>
      <h3 class="title">Santri Sistemas</h3>
      <h3>React Native app with authentication and backend in Java</h3>
      <div class="video">
        <div style="width:100%;height:0px;position:relative;padding-bottom:177.345%;">
          <iframe src="https://streamable.com/s/ukymp/kjoard" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
        </div>
      </div>
      <br>
      <h3>Let's
        <a @click.stop="goTo('talk')" class="link">talk</a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      heigth: 480,
    };
  },
  watch: {

  },
  mounted() {
    this.heigth = window.innerHeight
  },
  props: {
    msg: String
  },
  methods: {
    goTo(r) {
      this.$router.push(r);
    }
  }
};
</script>

<style scoped>
iframe {
  max-height: 700px !important
}
.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 5px;
}
.video {
  padding: 20px;
  max-height: 700px !important;
  overflow: hidden;
}
.container {
  margin-top: 100px;
}
.name {
  color: white;
  font-size: 1.4em;
  float: left;
}
.title {
  text-decoration: none;
  color: #04CA83;
  font-weight: 800;
}
.hello {
  text-align: left;
  padding: 20px;
  text-align: center !important

}
h3 {
  margin: 30px 100px;
  color: white;
  font-size: 2rem;
  font-weight: 200;
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
  font-weight: 600;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media only screen and (max-width: 768px) {
  h3 {
    font-size: 2rem !important;
    margin: 30px 0;
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
