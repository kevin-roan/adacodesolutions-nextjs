"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, NextUILogo, SearchIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { RadioGroup, Radio } from "@nextui-org/radio";
import SectionHeader from "@/components/sectionHeader";
import CourseCard from "@/components/courseCard";

export default function Home() {
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
        <h1 className={title()}>Your&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Final&nbsp;</h1>
        <br />
        <h1 className={title()}>Course to Secure an IT Job.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Learn Data Science, Machine Leaning , Artificial Intelligence , Mobile
          and Web app Development with Industry Experts.
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
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </section>
  );
}
