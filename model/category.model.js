"use server";

import { db } from "@/firebase.config";
import { addDoc, collection } from "firebase/firestore";

// TODO::deine and declare helpers variables
const TABLE_NAME = "categories";

/**
 * readAllData
 * return all categories
 */
async function readAllData() {
  try {
    const querySnapshot = await getDocs(collection(db, TABLE_NAME));

    console.log("Read Categories Data is done::", querySnapshot);
    return querySnapshot;
  } catch (err) {
    console.error("Error reading data: ", err);
  }
}

/**
 * createMainCategory
 * save main category to firestore.
 * @param {*} data object must contain
 * - caterory : name of main category
 */
export async function createMainCategory(data) {
  try {
    let { caterory } = data;
    const docRef = await addDoc(collection(db, TABLE_NAME), {
      author: "Sallam Rady",
      caterory,
      children: [],
    });
    console.log("caterory created successfully with ID: ", docRef.id, docRef);
    return true;
  } catch (err) {
    console.error("Error save caterory: ", err);
    return false;
  }
}

async function createSubCategory(data) {
  try {
    let { id, subCategory } = data;
    const docRef = doc(db, TABLE_NAME, id);
    await updateDoc(docRef, {
      advice: "Demo",
    });
    return true;
  } catch (err) {
    console.log("Error in Save SubCat.::", err);
    return false;
  }
}
