<template>
    <div class="result" :class="{success:win ,danger:!win }">
        <div>
            <div class="card" >
                <div class="card-body">
                    <h1 v-if="text.length<content.length">{{ ((text.length*100)/content.length).toFixed(2)  }} % </h1>
                    <h3 v-if="win"><span class="bg-success">Success</span> you have tap the same text</h3>
                    <h3 v-if="!win"><span class="bg-danger">Failed</span> the output isn't the same the input text</h3>
                    <a href="/" class="btn btn-primary btn-lg">Quit</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Result",
    props:['win','content','text'],
    data:function(){
      return ({
          nbrChar :this.content.lenght
      })
    }
}
</script>

<style lang="scss" scoped>
body{
    overflow-y: hidden;
}
.success{
    background: #2ecc71;
}
.danger{
    background: #e84118;
}
.result{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    
    color: #222;
    overflow-y: hidden !important;
    span{
        color: #fff;
    }
    .card{
        margin: auto;
        margin-top: 14rem;
        padding: 30px 0;
        border-radius: 15px;
        box-shadow: 0 3px 10px #222;
        width: 40rem;
    }
}

@media (max-width: 767px) {
    .result .card{
        width:30rem;
    }
}
</style>