import Image from "next/image";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";

const ServiceCard = () => {
  return (
    <Card className="w-[20rem]">
      <CardBody className="flex flex-row gap-3">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1829/1829008.png"
          alt="cardimage"
          width={100}
          height={100}
        />
        <div className="flex-row gap-3">
          <h3 className="font-bold ">Project Oriented </h3>
          <p>Make beautiful websites </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
