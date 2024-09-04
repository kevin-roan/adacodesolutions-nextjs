"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

type Inputs = {
  example: string;
  exampleRequired: string;
};

type UserformModelProps = {
  isOpen: boolean;
  onOpenChange: boolean;
};

const UserFormModel = ({ isOpen, onOpenChange }: UserformModelProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 w-[90%]">
                  Talk to our career experts to help you find a suitable career
                  path
                </ModalHeader>
                <ModalBody>
                  <Input placeholder="Enter Your Name" />
                  <Input placeholder="Email" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Enter Your Name" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="danger" onPress={onClose}>
                    Get Started
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </div>
  );
};

export default UserFormModel;
