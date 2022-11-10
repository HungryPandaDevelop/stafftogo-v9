import { toast } from 'react-toastify';
// import { Timestamp } from '@google-cloud/firestore';
import {
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  where,
  setDoc,
  orderBy
} from 'firebase/firestore';

import { db } from 'firebase.config';




const createRoom = async (
  listingId, 
  uid, 
  invitedUid, 
  hisInvitingName, 
  hisInvitingImg, 
  hisInvitingNameAccount,
  ownInvitedName,
  ownInvitedNameAccount,
  ownInvitedImg,
  owmListingId
  ) => {

  //if(querySnap.docs.length === 0){
    try {
      const sendData = {
        interlocutors: [uid, invitedUid],
        uid: uid,
        invitedUid: invitedUid, 
        timestamp: serverTimestamp(),
        listingId: listingId,
        hisInvitingName: hisInvitingName,
        hisInvitingImg: hisInvitingImg,
        hisInvitingNameAccount:hisInvitingNameAccount, // *
        ownInvitedName: ownInvitedName,
        ownInvitedNameAccount: ownInvitedNameAccount,
        ownInvitedImg: ownInvitedImg,
        owmListingId: owmListingId,
        status: 'considered',
        messages: [],
      }
      
      const docRef = await addDoc(collection(db, 'message'), sendData);
      toast.success('Данные обновлены')
      return docRef.id;

    
  
      

  
    } catch (error) {
        console.error(error);
        toast.error(error)
    }

}

const sendMessage = async (roomId, text,  uid) => {


  const getDocRoomInfo =  await getDoc(doc(db, 'message', roomId));
  const getRoomInfo = getDocRoomInfo.data();

  // console.log(roomId, text,  uid, getRoomInfo.messages)

  getRoomInfo.messages.push({
    text: text,
    uid: uid,
    read: false,
    timestamp: new Date()
  });
  // console.log('m', getRoomInfo.messages)

  try {

    const  setData = { 
        ...getRoomInfo,
        messages: getRoomInfo.messages
      };

    await setDoc(doc(db, 'message', roomId), setData);

    toast.success('Данные обновлены');
    
      
  } catch (error) {
      console.error(error);
      toast.error(error)
  }
}


const getMyRoomMessages = (chatId, callback) => {
  const docRef =  doc(db, 'message', chatId);
  let a = 0;
  onSnapshot(
    query(docRef),
    (doc)=>{
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if(source === "Server"){
        console.log('refresh')
        callback(a++);
    

      }
    },
  );
}

const updateRead = async (roomId, res)=>{
  console.log(res.messages)
  const changeRead = res.messages.map(item=>{
    item.read = true
    return item;
  })
  res.messages = changeRead
  await updateDoc(doc(db, 'message', roomId), res);
}



const getMyRooms = async (uid) =>{

  const listRef = collection(db, 'message'); 

  const q = query(
    listRef,
    where("interlocutors", "array-contains", uid),

  );

  const querySnap = await getDocs(q);

  const list = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  // callback(list);
  return list;
}


export {getMyRoomMessages, sendMessage, createRoom, getMyRooms, updateRead};




