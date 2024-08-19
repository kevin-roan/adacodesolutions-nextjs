import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

export default function TestimonialCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[340px] my-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Kevin Roan
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @kevinroan_
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-clip">
        <p>
          Adacode solutions is your best career solution Lorem ipsum dolor sit
          amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
          Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt
        </p>
        <span className="pt-2">
          #Student@Adacode
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">Student</p>
          <p className="text-default-400 text-small">@ Adacode Solutions</p>
        </div>
      </CardFooter>
    </Card>
  );
}
