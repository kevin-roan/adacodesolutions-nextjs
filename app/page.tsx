"use client";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { useState, useEffect } from "react";
// import confetti from "canvas-confetti";
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";
import { RadioGroup, Radio } from "@nextui-org/radio";
import SectionHeader from "@/components/sectionHeader";
import courses from "@/contants/course";
import { motion } from "framer-motion";
import ContactUs from "./contact";
import Testimonials from "./testimonials";
import CarouselCard from "@/components/carousel";
import WhyChooseUs from "./whychooseus/page";
import PartnerLogos from "@/components/PartnerLogo";
import HowItWorks from "./howitworks/page";
import MeetOurHeroes from "@/components/meetourHeroes";
import TestCard from "@/components/testCard";
import { useDisclosure } from "@nextui-org/modal";
import UserFormModel from "@/components/userformModal";
import dynamic from "next/dynamic";

export default function Home() {
  const [confetti, setConfetti] = useState<any>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const text =
    "Learn Data Science, Machine Leaning , Artificial Intelligence , Mobile and Web app Development with Industry Experts.".split(
      " ",
    );

  useEffect(() => {
    // Dynamically import canvas-confetti only on the client side
    import("canvas-confetti").then((module) => {
      setConfetti(() => module.default);
    });
  }, []);
  const handleConfetti = () => {
    onOpen();
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <div className="inline-block max-w-lg text-center justify-center ">
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.01,
          }}
        >
          <h1 className={title()}>Build Your&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Career&nbsp;</h1>
          <br />
          <h1 className={title()}>With Adacode Solutions</h1>
        </motion.span>
        <h2 className={subtitle({ class: "mt-4" })}>
          {text.map((el, i) => (
            <motion.span
              key={i}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 1,
                delay: i / 10,
              }}
            >
              {el}
            </motion.span>
          ))}
        </h2>
      </div>
      <div className="flex gap-3 ">
        <button className="button " onClick={handleConfetti}>
          <span className="button-background">
            <h3 className="button-text">Enroll Now </h3>
          </span>
        </button>
        <UserFormModel isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
      <div className="mt-8 flex gap-3 flex-wrap justify-center">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Customized <Code color="danger">Learning</Code>
          </span>
        </Snippet>
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            One on One <Code color="primary">Class</Code>
          </span>
        </Snippet>
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Placement <Code color="success">Assitance</Code>
          </span>
        </Snippet>
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Project <Code color="warning">Certificate</Code>
          </span>
        </Snippet>
      </div>
      <div className="flex-row justify-center">
        <h3 className="text-2xl font-bold text-center my-3">
          What&apos;s your background..?{" "}
        </h3>
        <div className="gap-3 flex">
          <RadioGroup orientation="horizontal">
            <div className="flex gap-3">
              <Card>
                <CardBody>
                  <Radio value="itbackground" onClick={() => onOpen()}>
                    <p className="text-[1rem]">I Have IT Background </p>
                  </Radio>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Radio value="non-itbackground" onClick={() => onOpen()}>
                    <p className="text-[1rem]">
                      I Don&apos;t Have IT Background{" "}
                    </p>
                  </Radio>
                </CardBody>
              </Card>
            </div>
          </RadioGroup>
        </div>
      </div>
      <section>
        <PartnerLogos />
        <div className="text-center">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-slate-500 via-teal-500 to-slate-500 bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
            How it Works
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
            How it Works
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
          <HowItWorks />
          <WhyChooseUs />
        </div>
      </section>
      <section>
        <SectionHeader desc="Explore Programs" title="Checkout our Courses" />
        <div className="flex my-4 flex-wrap items-center justify-center">
          {courses.map((item, _) => {
            return (
              <TestCard
                key={item.id}
                desc={item.description}
                highlights={item.highlights}
                id={item.id}
                imgUrl={item.imgUrl}
                small={item.small}
                title={item.title}
              />
            );
          })}
        </div>
      </section>
      <section>
        <SectionHeader desc="Tutors" title="Meet the Heroes" />
        <MeetOurHeroes />
      </section>
      <section>
        <SectionHeader
          desc="This is what our customers say"
          title="Testimonials"
        />
        <Testimonials />
      </section>
      <section>
        <ContactUs />
      </section>
      <CarouselCard />
    </section>
  );
}
