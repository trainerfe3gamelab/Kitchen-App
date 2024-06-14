const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER,
    appId: process.env.FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const metadata = {
    contentType: 'image/jpeg',
};

function uploadImages(imageRef, fileBuffer) {
    return new Promise((resolve, reject) => {
        const myRef = ref(storage, imageRef);
        uploadBytes(myRef, fileBuffer, metadata)
            .then((snapshot) => {
                getDownloadURL(ref(storage, myRef.fullPath))
                    .then((url) => {
                        resolve(url);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            })
            .catch((error) => {
                reject(error);
            });
    });
}
module.exports = uploadImages 