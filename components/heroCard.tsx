import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function HeroCard() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none my-3 w-[20rem] bg-black "
    >
      <div className="flex">
        <Image
          alt="Woman listing to music"
          className="object-cover rounded-sm"
          height={200}
          src="https://w7.pngwing.com/pngs/909/484/png-transparent-facebook-founder-chief-executive-social-media-harvard-university-mark-zuckerberg-celebrities-tshirt-hand.png"
          width={200}
        />
        <h1 className="text-white font-bold text-center my-auto">Kevin Roan</h1>
      </div>
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 items-center justify-center">
        <p className="text-tiny text-white/80">Full Stack Developer.</p>
      </CardFooter>
    </Card>
  );
}
