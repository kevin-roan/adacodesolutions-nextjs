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
import { ToastContainer, toast } from "react-toastify";
import { Select, SelectOptions, SelectItem } from "@nextui-org/select";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  email: string;
  phone: string;
  name: string;
};

type UserformModelProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void; // Adjusted to match the correct type
};

const selectOptions = [
  "Instagram",
  "Youtube",
  "Other Social Media",
  "Word of Mouth",
];

const UserFormModel = ({ isOpen, onOpenChange }: UserformModelProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const notify = () => {
    toast("Our Team will contact you shortly");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
                  <Input
                    placeholder="Enter Your Name"
                    {...register("name")}
                    required
                  />
                  <Input placeholder="Email" {...register("email")} />
                  <Input
                    placeholder="Phone Number"
                    {...register("phone")}
                    required
                  />
                  <Select label="Where did you heard about us" size="sm">
                    {selectOptions.map((item, index) => (
                      <SelectItem key={index}>{item}</SelectItem>
                    ))}
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="danger" onClick={notify}>
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
