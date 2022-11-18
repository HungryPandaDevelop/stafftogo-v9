import { db } from 'firebase.config';
import { collection, doc, setDoc, addDoc, onSnapshot, } from 'firebase/firestore';

const createCall = async (pc, setCurrentRoomId, invitedId, uid) => {
  console.log('createCall', uid);
  
  const callDoc = doc(collection(db, "calls"));
  const offerCandidates = collection(callDoc, "offerCandidates");
  const answerCandidates = collection(callDoc, "answerCandidates");


  setCurrentRoomId(callDoc.id);

  pc.onicecandidate = (event) => {
    event.candidate &&
      addDoc(offerCandidates, event.candidate.toJSON());
  };

  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
    roomId: callDoc.id,
    invitedId: invitedId,
    uid: uid
  };

  await setDoc(callDoc, { offer });

  onSnapshot(callDoc, (snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(
        data.answer
      );
      pc.setRemoteDescription(answerDescription);
    }
  });

  onSnapshot(answerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const candidate = new RTCIceCandidate(
          change.doc.data()
        );
        pc.addIceCandidate(candidate);
      }
    });
  });
}

export default createCall;