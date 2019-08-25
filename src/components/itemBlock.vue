<template>
  <div>
    <div style="float:left; font-weight:bold; margin-bottom:3px">{{item.title}}</div>
    <div style="float:right;">{{item.when}}</div>
    <div style="clear: both;"></div>

    <div style="float:left;">{{item.what}}</div>
    <div style="float:right;">{{item.where}}</div>
    <div style="clear: both;"></div>

    <ul>
        <li v-for="detail in item.descriptions" :key="detail">{{detail}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'itemBlock',
  props: {
    item: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  border-bottom: 1px solid rgb(199, 199, 199);
}
ul {
  list-style-type:disc;
  padding: 0;
}
li {
  list-style-position:inside;
  margin: 1px 10px;
  height: 20px;
}
/* li::before{
  content:".";
  font-size:100px;
} */
</style>
