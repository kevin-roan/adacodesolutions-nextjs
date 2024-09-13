"use client";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { ToastContainer, toast } from "react-toastify";
import { Select, SelectItem } from "@nextui-org/select";
import "react-toastify/dist/ReactToastify.css";
import { createNewStudentEntry } from "@/server/firebase/students/addNewStudent";

type Inputs = {
  email: string;
  phone: string;
  name: string;
  survey: string;
};

type UserformModelProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
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
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, "formdata");
    notify();
    createNewStudentEntry(data);
  };

  const notify = () => {
    toast("Our Team will contact you shortly");
  };
  return (
    <div>
      {isSubmitted ? (
        <></>
      ) : (
        <>
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
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 w-[90%]">
                    Talk to our career experts to help you find a suitable
                    career path
                  </ModalHeader>
                  <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Input
                        placeholder="Enter Your Name"
                        {...register("name")}
                        required
                        className="my-2"
                      />
                      <Input
                        placeholder="Email"
                        {...register("email")}
                        className="my-2"
                      />
                      <Input
                        placeholder="Phone Number"
                        {...register("phone")}
                        required
                        className="my-2"
                      />
                      <Controller
                        name="survey"
                        control={control}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <Select
                            label="Where did you hear about us"
                            name="survey"
                            size="sm"
                            onChange={(selected) => {
                              onChange(selected); // Pass the selected value to react-hook-form
                            }}
                            value={value} // Controlled value
                          >
                            {selectOptions.map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </Select>
                        )}
                      />
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onClick={onClose}
                        >
                          Close
                        </Button>
                        <Button
                          color="danger"
                          type="submit"
                          onClick={() => {
                            onClose();
                            setSubmitted(true);
                          }}
                        >
                          Get Started
                        </Button>
                      </ModalFooter>
                    </form>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}{" "}
    </div>
  );
};

export default UserFormModel;
