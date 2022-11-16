import { db } from 'firebase.config';
import { collection, doc, setDoc, addDoc, getDoc, onSnapshot, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';

const hangUp = async (pc,roomId)=>{




    if (roomId) {
      // let roomRef = doc(collection(db, "calls"), roomId);
      // await getDocs(collection(roomRef, "answerCandidates"))
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       deleteDoc(roomRef);
      //     });
      //   });
      // await getDocs(collection(roomRef, "offerCandidates"))
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       deleteDoc(roomRef);
      //     });
      //   });
      // await deleteDoc(roomRef);

      await deleteDoc(doc(db, "calls", roomId)).then(res=>{
        pc.close();
        console.log('pc')
        // window.location = '/cabinet/videochat/';
      })
    }

    
}

export default hangUp;