import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello",
    },
    profile: {
      name: "CHEN JIAHAO",
      email: "{'Email: chenjiahao0501@gmail.com'}",
      phone: "Phone: 080-4475-0266",
      address: "Address: Chiba",
      github: "Github",
      programmingLanguages: "Programming Languages",
      framework: "Framework",
    },
    sectionTitle: {
      education: "Education",
      projectExperience: "Project Experience",
      others: "Tools, Certifications & Others",
    },
  },
  zh: {
    message: {
      hello: "你好",
    },
    profile: {
      name: "陈家浩",
      email: "{'邮箱: chenjiahao0501@gmail.com'}",
      phone: "电话: 151-6821-1261",
      address: "地址: 杭州",
      github: "Github",
      programmingLanguages: "编程语言",
      framework: "框架",
    },
    sectionTitle: {
      education: "学历",
      projectExperience: "项目经历",
      others: "工具, 认证 & 其它",
    },
  },
};

export const i18n = createI18n({
  locale: "zh", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
