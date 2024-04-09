"use server";

import { db } from "@/firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocFromCache,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

// TODO::deine and declare helpers variables
const TABLE_NAME = "categories";

/**
 * readAllData
 * return all categories
 */
export async function readAllData() {
  try {
    const querySnapshot = await getDocs(collection(db, TABLE_NAME));

    let arr = [];
    await querySnapshot.forEach((doc) => {
      arr.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return arr;
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

/**
 * createMainCategory
 * save main category to firestore.
 * @param {*} data object must contain
 * - id : id of main category
 * - subCategory : name of sub category
 */
export async function createSubCategory(data) {
  try {
    let { id, subCategory } = data;
    const docRef = doc(db, TABLE_NAME, id);
    const prevData = await getSpecificDoc(id);
    if (prevData) {
      let arr = [...prevData.children, subCategory];
      await updateDoc(docRef, {
        children: arr,
      });
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log("Error in Save SubCat.::", err);
    return false;
  }
}

export async function getSpecificDoc(id) {
  try {
    const querySnapshot = await getDoc(doc(db, TABLE_NAME, id));
    if (querySnapshot.exists()) return { ...querySnapshot.data() };
    return undefined;
  } catch (err) {
    console.error("Error reading data: ", err);
  }
}
