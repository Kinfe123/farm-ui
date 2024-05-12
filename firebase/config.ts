import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc as getOneDoc,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
  WhereFilterOp,
} from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MG_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const signInMethod = signInWithEmailAndPassword;

// Add new doc
const insertDoc = async (doc: object, collectionName: string) => {
  const dbInstance = collection(db, collectionName);
  return addDoc(dbInstance, doc);
};

// Get docs
const fetchDocs = (collectionName: string) => {
  const dbRef = collection(db, collectionName);

  return getDocs(dbRef);
};

// Get docs
const useQuery = (
  collectionName: string,
  q: {
    fieldPath: string;
    opStr: WhereFilterOp;
    value: number | string | boolean;
  }
) => {
  const dbRef = query(
    collection(db, collectionName),
    where(q.fieldPath, q.opStr, q.value)
  );

  return getDocs(dbRef);
};

// Delete doc
const deleteDocument = (id: string, collectionName: string) => {
  const dbRef = query(collection(db, collectionName), where("id", "==", id));

  return getDocs(dbRef).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const id = querySnapshot.docs[0].id;

      const docRef = doc(db, collectionName, id);
      return deleteDoc(docRef);
    }
  });
};

// Get component
const getDoc = (value: string, collectionName: string, fieldPath?: string) => {
  const dbRef = fieldPath
    ? query(collection(db, collectionName), where(fieldPath, "==", value))
    : query(collection(db, collectionName), where("id", "==", value));
  return getDocs(dbRef);
};

// Edit doc
const editDoc = (
  value: string,
  collectionName: string,
  data: any,
  fieldPath?: string
) => {
  const dbRef = fieldPath
    ? query(collection(db, collectionName), where(fieldPath, "==", value))
    : query(collection(db, collectionName), where("id", "==", value));

  return getDocs(dbRef).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      const docRef = doc(db, collectionName, docId);
      return updateDoc(docRef, data);
    }
  });
};

export {
  auth,
  signInMethod,
  insertDoc,
  fetchDocs,
  deleteDocument,
  getDoc,
  getOneDoc,
  editDoc,
  useQuery,
  db,
  doc,
};



/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .bg-shiny {
    @apply border border-zinc-800;
    background: linear-gradient(180deg, #27272a 0%, rgba(15, 23, 42, 0) 100%);
  }

  .bg-shiny:hover {
    @apply duration-200;
    background: linear-gradient(180deg, #27272a 10%, rgba(15, 23, 42, 0) 100%);
  }

  .heading {
    @apply font-extrabold text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)];
  }
}

.custom-screen {
  @apply max-w-screen-xl mx-auto px-4 md:px-8;
}

.custom-screen-lg {
  max-width: 1600px;
  @apply mx-auto px-4;
}

.ar-font {
  font-family: "Tajawal", sans-serif;
}

.btns-container {
  @apply flex flex-wrap items-center justify-center gap-5 pt-20 pb-4;
}

.btns-container button {
  margin-top: 0.5em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: currentColor;
}

.cta-pr-btn:hover svg {
  transform: translateX(5px);
}

.cta-pr-btn-ar:hover svg {
  transform: translateX(-5px);
}

.cta-sec {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.code-block .Code pre {
  max-height: 580px !important;
  overflow-y: auto !important;
}


import defaultTheme from "tailwindcss/defaultTheme"


*/
