require('dotenv').config();
const { initializeApp } = require('firebase/app');
const { getAxiosInstance } = require('axios');
const { errorHandler } = require('./helper');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
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
let auth;

const initializeFirebaseApp = () => {
    try {
        app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        auth = getAuth(app);
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

const parseRaspberryData = (data) => {
    const parsedData = {};
    data.split(', ').forEach(item => {
        const [key, value] = item.split(':');
        parsedData[key.trim()] = parseInt(value.trim());
    });
    return parsedData;
};

const getRaspberryCounts = async () => {
    try {
        const firestoreDb = getFirestore();
        const collectionRef = collection(firestoreDb, 'rasperryCounts');
        const querySnapshot = await getDocs(collectionRef);

        const raspberryCounts = {};

        querySnapshot.forEach(doc => {
            const data = doc.data();
            const machineId = doc.id;
            if (machineId.startsWith('raspberry_machine_')) {
                for (const key in data) {
                    if (key.includes("r"))
                        data[key.replace("r", "r" + machineId.at(18))] = data[key];
                    else
                        data[key + machineId.at(18)] = data[key];
                    delete data[key];
                }

                // add data to raspberryCounts
                for (const key in data) {
                    if (raspberryCounts[key]) {
                        raspberryCounts[key] += data[key];
                    } else {
                        raspberryCounts[key] = data[key];
                    }
                }
            }
        });

        return [raspberryCounts]; // Wrap in an array as requested in the output
    } catch (error) {
        errorHandler(error, 'getRaspberryCounts', 'firebase');
    }
};

const registerUser = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            throw new Error('Email is already in use');
        } else if (error.code === 'auth/weak-password') {
            throw new Error('Password is too weak');
        } else if (error.code === 'auth/invalid-email') {
            throw new Error('Invalid email');
        } else {
            errorHandler(error, 'registerUser', 'firebase');
        }
    }
}

const loginUser = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    } catch (error) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            throw new Error('Incorrect email or password');
        } else {
            errorHandler(error, 'loginUser', 'firebase');
        }
    }
}

module.exports = {
    initializeFirebaseApp,
    getFirebaseApp,
    uploaProcessedData,
    getTheData,
    getRaspberryCounts,
    registerUser,
    loginUser,
};
