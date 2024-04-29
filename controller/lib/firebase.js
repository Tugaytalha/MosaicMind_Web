require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getAxiosInstance } = require('axios');
const { errorHandler } = require('./helper');
const { getFirestoree, doc, setDoc, collection, getDocs, query, where, getFirestore } = require('firebase/firestore');

// const errorHandler = (error, functionName, module) => {
//     console.error(`Error in ${module} module, ${functionName} function: ${error}`);
//     // Add your error handling logic here
// };

const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

let app;
let firestoreDb;

const initializeFirebaseApp = () => {
    try {
        app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        return app;
    } catch (error) {
        errorHandler(error, "initializeFirebaseApp", "firebase");
    }
}

const getFirebaseApp = () => app;

const uploaProcessedData = async (data) => {
    try {
        const docRef = doc(firestoreDb, "processed-data", "data");
        let dataUpdated = await setDoc(docRef, data);
        return dataUpdated;
    } catch (error) {
        errorHandler(error, "uploadProcessedData", "firebase");
    }
}

const getTheData = async (from, to) => {
    try {
        const collectionRef = collection(firestoreDb, "rasperryCounts");
        const finalData = [];
        const q = query(collectionRef);

        const docSnap = await getDocs(q);

        docSnap.forEach((doc) => {
            finalData.push(doc.data());
        });
        return finalData;
    } catch (error) {
        errorHandler(error, "getTheData", "firebase");
    }
}

const getRaspberryCounts = async () => {
    try {
        const firestoreDb = getFirestore();
        const collectionRef = collection(firestoreDb, 'rasperryCounts');
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);
        const raspberryCounts = [];
        
        querySnapshot.forEach((doc) => {
            raspberryCounts.push(doc.data());
        });
        
        return raspberryCounts;
    } catch (error) {
        errorHandler(error, 'getRaspberryCounts', 'firebase');
    }
}

module.exports = {
    initializeFirebaseApp,
    getFirebaseApp,
    uploaProcessedData,
    getTheData,
    getRaspberryCounts,
};