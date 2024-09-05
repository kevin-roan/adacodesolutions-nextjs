import { collection, serverTimestamp, addDoc } from "firebase/firestore";

import { db } from "../firebaseDB";

interface StudentDataProps {
  studentName: string;
  phone: string;
  email: string;
  survey: string;
}

const createNewStudentEntry = async ({
  studentName,
  phone,
  email,
  survey,
}: StudentDataProps) => {
  console.log("Got student data", studentName, phone, email, survey);
  try {
    const docRef = await addDoc(collection(db, "students"), {
      createdAt: serverTimestamp(),
      studentname: studentName,
      phonenumber: phone,
      emailAddress: email,
      survey: survey,
      isCalled: false, // setting is called to false for new user
    });
    console.log("Student Data added successfully", docRef.id);
  } catch (error) {
    console.error("Error sending student data:", error);
  }
};

export { createNewStudentEntry };
