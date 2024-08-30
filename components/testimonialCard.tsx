import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import ReactStars from "react-stars";

interface ReviewProps {
  profilePicLink: string;
  rating: number;
  reviewText: string;
  username: string;
}

const TestimonialCard: React.FC<ReviewProps> = ({
  profilePicLink,
  rating,
  reviewText,
  username,
}) => {
  return (
    <Card className="max-w-[340px] my-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={profilePicLink} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {username}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              Student at Adacode
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-clip">
        <p>{reviewText}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <ReactStars count={5} size={24} color2={"#efbf04"} value={rating} />
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">Student</p>
          <p className="text-default-400 text-small">@ Adacode Solutions</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
