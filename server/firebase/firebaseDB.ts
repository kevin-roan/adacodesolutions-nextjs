import { getFirestore } from "firebase/firestore";
import { app } from "./firebaseHelper";

const db = getFirestore(app);

export { db };
