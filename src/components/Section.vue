<template>
  <div>
    <div class="title">{{ section.sectionTitle }}</div>
    <!-- <div>{{section.items}}</div> -->
    <itemBlock
      class="block"
      v-for="item in section.items"
      :key="item.title"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Section } from "../model/section.model";
import itemBlock from "./itemBlock.vue";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Section",
  props: {
    section: { type: Object as PropType<Section>, required:true },
  },
  components: {
    itemBlock,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  padding: 0px;
}
.title {
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgb(199, 199, 199);
  margin-bottom: 8px;
  font-weight: bold;
  font-size: large;
}
</style>
