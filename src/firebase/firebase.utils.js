import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDyS9lgYA5pZWtw7Oj6wZTjErekBApeyYk",
    authDomain: "crwn-db-5b8ac.firebaseapp.com",
    databaseURL: "https://crwn-db-5b8ac.firebaseio.com",
    projectId: "crwn-db-5b8ac",
    storageBucket: "crwn-db-5b8ac.appspot.com",
    messagingSenderId: "167662970564",
    appId: "1:167662970564:web:6abc739846c38626e48b91",
    measurementId: "G-N207MSDCT8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async (userAuth, additionalData) => {
    if(userAuth) {
        const userRef = firestore.doc(`user/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists) {
            let createAt = new Date();
            const {displayName, email} = userAuth;

            try {
                await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...additionalData
                });
            } catch (error) {
                console.log(error);
            }
            
        }

        return userRef;
    }
    else return;
}

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGG = () => auth.signInWithPopup(provider);



