<template>
  <div id="back">
    <div id="A4paper">
      <div id="main">
        <div>
          <div style="font-size: 30px; font-weight: bold; position: relative">
            {{ $t("profile.name") }}
            <button id="lang" @click="changeLocale()">lang</button>
          </div>
          <section id="header">
            <div class="header-part">
              <div>{{ $t("profile.email") }}</div>
              <div>{{ $t("profile.phone") }}</div>
              <div>{{ $t("profile.address") }}</div>
            </div>

            <div class="header-part text-right">
              <div>
                {{ $t("profile.github") }}:
                <a
                  style="text-decoration: none"
                  href="https://github.com/discdisk"
                  >https://github.com/discdisk</a
                >
              </div>
              <div>
                {{ $t("profile.programmingLanguages") }}: Python, Javascript, C,
                SQL
              </div>
              <div>
                {{ $t("profile.framework") }}: Flask, vue.js, Chainer, Keras
              </div>
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

<script>
import Section from "./components/Section.vue";
import { enSections } from "./data/en";
import { zhSections } from "./data/zh";
export default {
  name: "app",
  components: {
    Section,
  },
  data() {
    return {
      sections: enSections,
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
};
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
#main {
  flex-direction: column;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;

  padding: 4%;
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
