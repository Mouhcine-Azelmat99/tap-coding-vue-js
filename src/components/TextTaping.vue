<template>
    <div class="text">
        <p> {{ content }} </p>
        <span>
           {{ content.length  }}
        </span>
    </div>
</template>

<script>
export default {
    name: "TextTaping",
    props:['content'],
}
</script>

<style lang="scss">
.text{
    width: 700px;
    background-color: #eee;
    padding: 20px;
    text-align: center;
    color: #222;
    line-height: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 3px 10px #222;
    span{
        background-color: #e84118;
        color: #fff;
        padding: 8px;
        float: right;
        border-radius: 8px;
    }
}

@media (max-width: 767px) {
  .text{
    width: 500px;
  }
}
</style>