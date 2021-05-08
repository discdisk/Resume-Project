import { Section } from "../model/section.model";
export const zhSections: Section[] = [
  {
    sectionTitle: "项目经历",
    items: [
      {
        title: "株式会社コーテッグ",
        when: "2020年4月至今",
        what: "招聘匹配网站，全栈开发",
        where: "日本",
        descriptions: [
          "前端框架使用Angular，掌握组件化开发，使用rxjs进行流式数据状态管理。",
          "后端框架为Ruby On Rails，掌握MVC设计模式。",
          "分析数据库慢查询语句，使用合理的索引提高查询和加载速度。",
          "使用消息队列优化后端数据收集API，提高服务器可用性，降低待机成本。",
          "通过AWS的ECS服务使用容器进行服务器部署编排。",
        ],
      },
      {
        title: "硕士研究",
        when: "2018年4月-2020年4月",
        what: "日语语音识别",
        where: "",
        descriptions: [
          "在这项研究中，我们提出了一种基于CTC的流式端到端语音识别模型，通过局部注意力机构来提高准确性。",
          "通过使用局部注意力机构，在使用不同的特征提取器（有无CNN）或不同的下采样率的情况下，模型能够具有更高的鲁棒性，也意味着可以通过适当的提高下采样率来减少计算量。",
          "因为这个类型的模型是以文字单位进行识别的，所以在具有很高的实时性的同时，峰值计算量可以保持在较低的水准，适用于部署在低配置的设备上。",
        ],
      },
    ],
  },
  {
    sectionTitle: "技能列表",
    items: [
      {
        title: "",
        when: "",
        what: "",
        where: "",
        descriptions: [
          "编程语言: Python, Ruby, Typescript, Javascript, GoLang",
          "开发框架: Angular, Ruby On Rails, FastAPI, PyTorch, Chainer, Vue",
          "其它工具: Rxjs, MySQL, Docker, AWS, Kubernetes",
          "语言能力: 英语(TOEFL 77/120, TOEIC L&R 865/990), 日语(N1 129/180)",
        ],
      },
    ],
  },
  {
    sectionTitle: "学历",
    items: [
      {
        title: "德岛大学",
        when: "2018年4月-2020年3月",
        what: "专业:Systems Innovation Engineering, 工程学硕士",
        where: "日本德岛",
        descriptions: [
          // "GPA:3.93 / 5.0",
          // "课程：应用图像处理，口语处理，人类感知",
        ],
      },
      {
        title: "中国计量大学现代科技学院 ",
        when: "2013年9月-2017年6月",
        what: "专业：自动化，工程学学士",
        where: "中国杭州",
        descriptions: [
          // "GPA:2.80 / 5.0",
          // "三等奖学金（2015年）",
          // "课程：微机的理论与应用，工业控制系统课程设计，面向对象程序设计",
        ],
      },
    ],
  },
  {
    sectionTitle: "工具, 认证 & 其它",
    items: [
      {
        title: "",
        when: "",
        what: "",
        where: "",
        descriptions: [
          "工具: Git, Sublime Text, VS Code",
          "兴趣: Basketball, Soccer, PC games, American TV shows, Anime",
          "论文发表：End-to-end recognition of streaming Japanese speech using CTC and local attention. APSIPA",
        ],
      },
    ],
  },
];
