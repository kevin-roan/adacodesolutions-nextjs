"use client";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

import { db } from "../firebaseDB";

interface StudentDataProps {
  name: string;
  phone: string;
  email: string;
  survey: string;
}

const createNewStudentEntry = async ({
  name,
  phone,
  email,
  survey,
}: StudentDataProps) => {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      createdAt: serverTimestamp(),
      studentname: name,
      phonenumber: phone,
      emailAddress: email,
      survey: survey,
      isCalled: false,
    });
    console.log("Student Data added successfully", docRef.id);
  } catch (error) {
    console.error("Error sending student data:", error);
  }
};

export { createNewStudentEntry };
