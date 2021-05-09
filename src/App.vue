<template>
  <div id="back">
    <div id="A4paper">
      <div id="main">
        <div>
          <div style="font-size: 30px; font-weight: bold; position: relative">
            {{ $t("profile.name") }}
            <!-- <button id="lang" @click="changeLocale()">
              <span :class="{ bold: !langEn }">zh</span>/<span
                :class="{ bold: langEn }"
                >en</span
              >
            </button> -->
          </div>

          <section id="header">
            <div class="header-part text-right">
              <span>{{ $t("profile.age") }}</span> &nbsp;
              <span>{{ $t("profile.intention") }}</span> &nbsp; <br />
              <span>{{ $t("profile.email") }}</span>
            </div>
          </section>
        </div>

        <Section
          v-for="section in sections"
          :section="section"
          :key="section.sectionTitle"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { enSections } from "./data/en";
import { zhSections } from "./data/zh";
import Section from "./components/Section.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Section,
  },
  data() {
    return {
      sections: zhSections,
      langEn: true,
    };
  },
  methods: {
    changeLocale() {
      console.log("change");
      this.langEn = !this.langEn;
      this.$i18n.locale = this.langEn ? "en" : "zh";
      this.sections = this.langEn ? enSections : zhSections;
    },
  },
});
</script>

<style>
a:visited {
  color: black;
}
#header {
  display: flex;
}
.header-part {
  flex: 1;
}
.text-right {
  text-align: right;
}
.bold {
  font-weight: bold;
}
#main {
  flex-direction: column;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;

  padding: 8%;
  padding-top: 20px;
}
#A4paper {
  width: 210mm;
  height: 297mm;
  margin: 0 auto;
  background-color: white;
}
#back {
  margin: -8px;
  background-color: rgb(247, 247, 247);
}
#lang {
  position: absolute;
  right: 0;
}
</style>
