import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

interface Props {
  desc: string;
  highlights: string[];
  id: string;
  imgUrl: string;
  small: string;
  title: string;
}

const TestCard = ({ desc, highlights, id, imgUrl, small, title }: Props) => {
  return (
    <Card className="max-w-[300px] m-3">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          radius="sm"
          src={imgUrl}
          height={150}
          width={1000}
        />
      </CardHeader>
      <Divider />
      <div className="flex flex-col items-center">
        <p className="text-md">{title}</p>
        <p className="text-small text-default-500">nextui.org</p>
      </div>
      <Divider />
      <CardBody>
        <p>{desc}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TestCard;
