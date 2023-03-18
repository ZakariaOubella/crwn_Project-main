import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4jLJ9hytYSsK2r9eJRKijhVNeUL3KjSc",
  authDomain: "crwon-clothing-db-7608e.firebaseapp.com",
  projectId: "crwon-clothing-db-7608e",
  storageBucket: "crwon-clothing-db-7608e.appspot.com",
  messagingSenderId: "915638813457",
  appId: "1:915638813457:web:0e41946e20abcd860e42b0",
};

initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, GoogleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "collections");
  const querySnapshot = await getDocs(query(collectionRef));

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;

  }, {})
  return categoryMap;
}

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName: UserName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        UserName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error craeting the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (e) => {
  onAuthStateChanged(auth, e);
};