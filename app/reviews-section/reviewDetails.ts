import { StaticImageData } from "next/image";
import badge1 from "../../public/badge1.svg";
import badge2 from "../../public/badge2.svg";
import badge3 from "../../public/badge3.svg";
import certificate1 from "../../public/certificate1.png";
import certificate2 from "../../public/certificate2.png";
import certificate3 from "../../public/certificate3.png";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Solution Challenge 2025",
    role: "",
    company: "GOOGLE",
    profileImg: badge1,
    testimonial:
      "Participated in the Google 2025 Solution Challenge, developing innovative solutions aligned with the UN's Sustainable Development Goals using Google technologies.",
  },
  {
    name: "Cloud Innovator",
    role: "",
    company: "GOOGLE",
    profileImg: badge2,
    testimonial:
      "Earned the Google Cloud Innovator badge, showcasing expertise in leveraging Google Cloud technologies for innovative solutions.",
  },
  {
    name: "I/O Registered",
    role: "",
    company: "GOOGLE",
    profileImg: badge3,
    testimonial:
      "​Registered attendee of Google I/O 2025, engaging with the latest innovations in AI, Android, web, and cloud technologies",
  },
  {
    name: "Applying AI Principals With GC",
    role: "",
    company: "GOOGLE",
    profileImg: certificate1,
    testimonial:
      "",
  },
  {
    name: "Innovation with Google Cloud AI",
    role: "",
    company: "GOOGLE",
    profileImg: certificate2,
    testimonial:
      "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Vertex AI and Dialogflow CX",
    role: "",
    company: "GOOGLE",
    profileImg: certificate3,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
  
];
