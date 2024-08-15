"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/primitives";
import { GithubIcon, NextUILogo, SearchIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { RadioGroup, Radio } from "@nextui-org/radio";
import SectionHeader from "@/components/sectionHeader";
import CourseCard from "@/components/courseCard";
import courses from "@/contants/course";
import { motion } from "framer-motion";

export default function Home() {
  const text =
    "Learn Data Science, Machine Leaning , Artificial Intelligence , Mobile and Web app Development with Industry Experts.".split(
      " ",
    );
  const handleConfetti = () => {
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
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.01,
          }}
        >
          <h1 className={title()}>Last&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Option&nbsp;</h1>
          <br />
          <h1 className={title()}>Your Secure an IT Job</h1>
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
              {el}{" "}
            </motion.span>
          ))}
        </h2>
      </div>

      <div className="flex gap-3">
        <button className="button " onClick={handleConfetti}>
          <span className="button-background ">
            <h3 className="button-text">Enroll Now </h3>
          </span>
        </button>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <SearchIcon size={20} />
          Hire From Us
        </Link>
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
                  <Radio value="itbackground">
                    <p>I Have IT Background </p>
                  </Radio>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Radio value="non-itbackground">
                    <p>I Don&apos;t Have IT Background </p>
                  </Radio>
                </CardBody>
              </Card>
            </div>
          </RadioGroup>
        </div>
      </div>
      <section>
        <SectionHeader desc="Explore Programs" title="Checkout our Courses" />
        <div className="flex my-4 flex-wrap items-center justify-center">
          {courses.map((item, _) => {
            return (
              <>
                <CourseCard
                  desc={item.description}
                  highlights={item.highlights}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  small={item.small}
                  title={item.title}
                />
              </>
            );
          })}
        </div>
      </section>
      <section>
        <SectionHeader desc="Tutors" title="Meet the Heroes" />
        <div className="flex"></div>
      </section>
    </section>
  );
}
