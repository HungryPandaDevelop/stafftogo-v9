import { db } from 'firebase.config';
import {  doc, deleteDoc, collection, getDocs } from 'firebase/firestore';

const hangUp = async (tempPC, roomId, allStreamRef, navigate, joinRoomId, typeConnect)=>{

  // console.log('tempPC', tempPC, )
  // console.log('roomId', roomId, )
  // console.log('allStreamRef', allStreamRef,)
  if(typeConnect === 'join'){
    console.log('navigate', joinRoomId)
  }else{
    console.log('navigate', roomId)
  }

  let currentRoom;
  if(typeConnect === 'join'){
    currentRoom = joinRoomId ;
  }else{
    currentRoom = roomId ;
  }

  // let roomRef = doc(collection(db, "calls","answerCandidates"), currentRoom);
  // deleteDoc(roomRef);
  await deleteDoc(doc(db, "calls", currentRoom)).then(res=>{

    tempPC.close();

    allStreamRef[0].getTracks().forEach(mediaTrack => {
      mediaTrack.stop();
    });
    allStreamRef[1].getTracks().forEach(mediaTrack => {
      mediaTrack.stop();
    });
    navigate('/cabinet/', { replace: true });

  });


}

export default hangUp;