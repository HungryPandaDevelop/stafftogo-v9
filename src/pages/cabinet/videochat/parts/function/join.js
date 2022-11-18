import { db } from 'firebase.config';
import { collection, doc,  addDoc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';

const joinCall = async (pc, currentRoomId)=>{

  const callDoc = doc(collection(db, "calls"), currentRoomId);
  const answerCandidates = collection(callDoc, "answerCandidates");

  const offerCandidates = collection(callDoc, "offerCandidates");


  let masCand = [];
  pc.onicecandidate = (event) => {
    // console.log('event.candidate.toJSON()', event.candidate.toJSON())
    // masCand.push(event.candidate)
    // updateDoc(callDoc, { masCand: masCand });


    event.candidate &&
      addDoc(answerCandidates, event.candidate.toJSON());
  };

  const callData = (await getDoc(callDoc)).data();

  const offerDescription = callData.offer;
  await pc.setRemoteDescription(
    new RTCSessionDescription(offerDescription)
  );

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await updateDoc(callDoc, { answer });

  onSnapshot(offerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
}

export default joinCall;