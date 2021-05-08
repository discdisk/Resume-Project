<template>
  <div>
    <div style="float: left; font-weight: bold; margin-bottom: 3px">
      {{ item.title }}
    </div>
    <div style="float: right">{{ item.when }}</div>
    <div style="clear: both"></div>

    <div style="float: left">{{ item.what }}</div>
    <div style="float: right">{{ item.where }}</div>
    <div style="clear: both"></div>

    <ul>
      <li v-for="detail in item.descriptions" :key="detail">{{ detail }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Item } from "../model/section.model";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "itemBlock",
  props: {
    item: { type: Object as PropType<Item>,
      required: true, },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  border-bottom: 1px solid rgb(199, 199, 199);
}
ul {
  list-style-type: disc;
  padding: 0;
}
li {
  list-style-position: outside;
  margin: 5px 15px;
  margin-top: 0px;
  /* min-height: 20px; */
}
/* li::before{
  content:".";
  font-size:100px;
} */
</style>
