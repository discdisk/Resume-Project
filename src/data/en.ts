import { Section } from "../model/section.model";
export const enSections: Section[] = [
  {
    sectionTitle: "Education",
    items: [
      {
        title: "Tokushima University",
        when: "April 2018 - March 2020",
        what: "Major:Systems Innovation Engineering, Master of Engineering",
        where: "Tokushima, Japan",
        descriptions: [
          "GPA:3.93 / 5.0",
          "Coursework：Applied Image Processing,Spoken Language Processing,Human Sensing",
        ],
      },
      {
        title:
          "China Jiliang University College of Modern Science and Technology ",
        when: "September 2013 - June 2017",
        what: "Major: Automation, Bachelor of Engineering",
        where: "Hangzhou, China",
        descriptions: [
          "GPA:2.80 / 5.0",
          "The Third Prize Scholarship (2015)",
          "Coursework:The Theory and Application of Microcomputer, Industrial Control System Course Design，Object Oriented Programming",
        ],
      },
    ],
  },
  {
    sectionTitle: "Project Experience",
    items: [
      {
        title: "Master's study ",
        when: "Apr 2018 - Present",
        what: "Japanese speech recognition",
        where: "",
        descriptions: [
          "E2E Streaming Speech Recognition Using CTC and Attention.",
          "Unlike the main stream in speech recognition using bi-directional network, we only used uni-direction network which make the model streamable.",
          "Choose maxpooling as downsample method to reduce output time steps and make training faster, the training speed is 0.03s per sentence at training, even with large vocabulary size of 22,642.",
          "Make the model have ability to get a small region of bi-directional context information by using Local Attention and improve word error rate (WER) 1.6% at high downsample rate situation, and still remain streamable.",
          "Introduced Confidence Penalty into our model to regularize over-confidence output and reduced WER by a furthur 1.5%.",
        ],
      },
      {
        title: "Machine Learning Project",
        when: "Sepetember 2018 - Present",
        what: "Web Application",
        where: "",
        descriptions: [
          "Built flask server to host several ML project I made during learning.",
          "Image recognition, text generation and recently the speech recognition model I've been working on.",
          "Use websocket to stream data form web page to server in speech recognition application.",
        ],
      },
      {
        title: "Graduation Project",
        when: "Sepetember 2016 - May 2017",
        what: "Parking lot management system",
        where: "",
        descriptions: [
          "Created a license plate recognition program using python and OpenCV.",
          "Built a server to manage all the sensors, recognition program and door control status.",
          "All the parts are connected to the server by WIFI, so no wiring is required.",
          "Built a smartphone App so that can check the real-time empty space information.",
        ],
      },
      {
        title: "The 1st robot competition in Zhejiang Province",
        when: "Sepetember 2015 - May 2016",
        what: "Line Tracker Robot",
        where: "",
        descriptions: [
          "Select, mount and adjustment the sensors.",
          "Program the microcontroller (C language).",
          "Participated in the Travel Robot Project and won the third prize",
        ],
      },
    ],
  },
  {
    sectionTitle: "Tools, Certifications & Others",
    items: [
      {
        title: "",
        when: "",
        what: "",
        where: "",
        descriptions: [
          "Tools: Git, Sublime Text, VS Code",
          "Languages: English(TOEFL 77/120, TOEIC L&R 865/990), Japanese(N1 129/180)",
          "Interests: Basketball, Soccer, PC games, American TV shows, Anime",
          "Society Experience: Organized basketball games in the university and served as a referee.",
        ],
      },
    ],
  },
];
