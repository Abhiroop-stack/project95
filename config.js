import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzBPHVJ1PPiDKRkDmEng9WrEsifhWLEuI",
  authDomain: "quiz-buzzer-be20e.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-be20e-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-be20e",
  storageBucket: "quiz-buzzer-be20e.appspot.com",
  messagingSenderId: "26699845207",
  appId: "1:26699845207:web:3cd3d962a6b9514cbf5d12"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();