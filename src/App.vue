<template>
  <div class="container" id="app">
    <h1>Tap Coding</h1>
    <TextTaping :content="content" />
    <div v-if="!showInput" class="btn_maxtime">
      <button class="btn btn-success" @click="ShowInp">Start</button>
      <h2>
        {{ MaxMinut }} minut
      </h2>
    </div>
        <span v-if="showInput">
        {{ text.length  }} char
      </span>
      <span v-if="showInput">
        <span v-if="minut">{{ minut }} :</span>  <span>{{ second }} s</span>
        <i class="fas fa-stopwatch"></i>
      </span>
    <div v-if="showInput" class="mb-3" id="text_form">
      <textarea v-model="text" class="form-control" rows="8"></textarea>
    </div>
        <Result :text="text" :content="content" :win="win" v-if="showResult"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextTaping from "@/components/TextTaping.vue";
import Result from "@/components/Result.vue";

export default {
  name: "Home",
  components: {
    TextTaping,
    Result,
  },
  data:function(){
      return ({
          text:"",
          second :0,
          minut :0,
          MaxMinut:1,
          showInput:false,
          showResult:false,
          win:false,
          // pourcentage : 0,
          content : "the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their",
      });
  },
  methods:{
    ShowInp(){
      this.showInput=true;  
      setTimeout(() => {
          this.second ++;
          if(this.second>10){
            this.minut++;
            this.second=0;
          }
          if(this.minut==this.MaxMinut){
            this.showResult=true;
            if(this.content == this.text){
              this.win=true;
            }
          }
          this.ShowInp()
      }, 1000)
    }
    
  },

};
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: rgb(16,132,187);
    background: linear-gradient(90deg, rgba(16,132,187,1) 0%, rgba(36,78,212,1) 0%, rgba(0,194,233,1) 100%);
    max-height: 100vh;
    overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100vh;
  width: 100%;
  
  h1{
    margin: 20px 0;
    font-size: 3rem;
    padding: 10px 0;
    border-bottom: 3px solid #273c75;

  }
  #text_form{
    width: 70%;
    margin: 10px auto;
    textarea{
      width: 100%;
      background-color: #eee;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  .btn_maxtime{
    display: flex;
    align-items:center;
    justify-content: space-around;
  button{
    margin-left: 230px;
    padding: 15px 80px;
    font-size: 2rem;
  }
  h2{
    background: #e84118;
    padding: 10px;
    border-radius: 10px;
    float: right;
    margin-left: 50px;
  }
  }
    span{
      margin: 0 20px;
      background-color: #e84118;
      padding: 7px;
      font-weight: bold;
      font-size: 1.1rem;
      border-radius: 8px;
    }

}

@media (max-width: 767px) {
  #app .btn_maxtime{
  button{
    margin-left: 30px;
    padding: 10px 60px;
    font-size: 1.8rem;
  }
  }
    span{
      width: 100px;
      margin-right: 40px;
      font-size: 0.7rem;
    }
  
  #app #text_form{
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
