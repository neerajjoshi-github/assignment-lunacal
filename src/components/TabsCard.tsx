import QuestionMark from "../assets/question-mark.png";
import Boxes from "../assets/boxes.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "about_me", label: "About Me" },
  { id: "experiences", label: "Experiences" },
  { id: "recommended", label: "Recommended" },
];

const TabsCard = () => {
  const [active, setActive] = useState(tabs[0].id);
  return (
    <div className="relative w-full h-[315px] px-[56px] py-4 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] rounded-[18px]">
      <div className="absolute top-5 left-3 flex flex-col gap-[104px]">
        <img src={QuestionMark} alt="Question Mark Icon" />
        <img src={Boxes} alt="Boxes Icon" />
      </div>
      <Tabs
        onValueChange={(e) => setActive(e)}
        defaultValue="about_me"
        className="w-full h-full flex flex-col gap-6 "
      >
        <TabsList className="bg-[#171717] h-[62px] rounded-3xl p-2 w-full grid gap-1 grid-cols-3">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {active === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute rounded-2xl inset-0 z-10 bg-[#28292F] shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,-8.43px_-16.87px_50.6px_-16.87px_#485B71]  mix-blend-difference"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value="about_me"
          className="overflow-auto flex flex-1 flex-col gap-4 custom-scrollbar"
        >
          <p>
            Hello! I’m Alex, a software engineer at TechCorp. I’ve been part of
            this innovative company for over 5 years, working on a variety of
            exciting projects that push the boundaries of technology.
          </p>
          <p>
            Originally from Seattle, WA, I’ve been living in San Francisco, CA,
            with my partner, Sarah, and our dog, Max, for the past 8 years. In
            my free time, I enjoy hiking, photography, and trying out new coffee
            spots around the city. My mornings usually start with a good run, so
            I’m most active and responsive after 9 AM. I'm passionate about
            coding, learning new programming languages, and contributing to
            open-source projects.
          </p>
        </TabsContent>
        <TabsContent
          value="experiences"
          className="overflow-auto flex flex-1 flex-col gap-4 custom-scrollbar"
        >
          <p>
            I started my career as a junior developer at a small startup, where
            I had the opportunity to wear many hats and learn a lot about
            full-stack development. After a couple of years, I joined TechCorp
            as a mid-level engineer and quickly grew into a senior role.
          </p>
          <p>
            During my time here, I’ve led several key projects, including the
            development of our new client-facing dashboard, which increased user
            engagement by 40%. I’m also involved in mentoring new team members
            and organizing internal hackathons. My most recent project was the
            migration of our legacy system to a cloud-based architecture, which
            has significantly improved performance and scalability.
          </p>
        </TabsContent>
        <TabsContent
          value="recommended"
          className="overflow-auto flex flex-1 flex-col gap-4 custom-scrollbar"
        >
          <p>
            Based on my experience and the needs of our team, I highly recommend
            exploring the following resources and opportunities:
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <strong>Books:</strong> “Clean Code” by Robert C. Martin and “You
              Don’t Know JS” series by Kyle Simpson. These are great reads to
              deepen your understanding of JavaScript and coding best practices.
            </li>
            <li>
              <strong>Courses:</strong> If you’re looking to enhance your
              skills, check out online courses on platforms like Coursera or
              Udemy. Some of my favorites include the React and Node.js
              full-stack course by Andrew Mead and the Advanced JavaScript
              Concepts by Andrei Neagoie.
            </li>
            <li>
              <strong>Conferences:</strong> Attending industry conferences like
              JSConf, Google I/O, and AWS re:Invent is a great way to stay
              updated on the latest trends and network with fellow
              professionals.
            </li>
          </ul>
          <p>
            I’m always happy to chat and share more resources, so feel free to
            reach out if you’re looking for personalized recommendations!
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsCard;
