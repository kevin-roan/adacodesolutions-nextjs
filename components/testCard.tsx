import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import UserFormModel from "./userformModal";

interface Props {
  desc: string;
  highlights?: string[];
  id: string;
  imgUrl: string;
  small: string;
  title: string;
}

const TestCard = ({ desc, highlights, id, imgUrl, small, title }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const CourseDownloader = (filename: string) => {
    const fileUrlRegex = /^[a-zA-Z0-9-]+$/;
    if (!fileUrlRegex.test(filename)) {
      console.error("Invalid filename format");
      return;
    }
    const fullFilename = `/courses/${filename}.pdf`;
    const fileUrl = fullFilename;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "coursedetails.pdf";
    link.click();
  };

  const handleClick = (filename: string) => {
    onOpen();
    setTimeout(() => {
      CourseDownloader(filename);
    }, 2000);
  };

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
      <div className="flex flex-col items-center bg-black border-r-1 border-l-1">
        <p className="text-md">{title}</p>
      </div>
      <Divider />
      <CardBody>
        <p>{desc}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button onClick={() => handleClick(id)}>Download Brochure</Button>
        <UserFormModel isOpen={isOpen} onOpenChange={onOpenChange} />
      </CardFooter>
    </Card>
  );
};

export default TestCard;
