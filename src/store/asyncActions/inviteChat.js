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
  owmListingId,
  ownType,
  hisType,
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
        ownType,
        hisType
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

const getTestItem = async (uid) =>{
  // const docRef =  doc(db, 'message', 'DAcrA7yWfR2tYCkPRGDU');
  const docRef =  collection(db, "message"); // Супер РЕШЕНИЕ для Коллекции
  let rooms = [];
  onSnapshot(query(docRef),(snapshot)=>{
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
          // console.log("New: ", change.doc.data());\
          rooms.push([change.doc.id, change.doc.data()])
      }
      if (change.type === "modified") {
          // console.log("Modified: ", change.doc.data());
      }
      if (change.type === "removed") {
        rooms = rooms.filter(item => item[0] !== change.doc.id)
          
      }
    }) 
  console.log('rooms', rooms)
  });


  // const docRef =  doc(db, 'message', 'DAcrA7yWfR2tYCkPRGDU'); Супер РЕШЕНИЕ для документа

  // onSnapshot(docRef,(doc)=>{

  //   const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
  //   console.log('rooms', doc.data().messages)
  
  // });
}


const getRoomsOnline = async (setRooms, uid, ) => {
  const docRef =  collection(db, "message")
  const q = query(
    docRef,
    where('interlocutors', 'array-contains', uid),
  );

  let rooms = [];
  onSnapshot(q,(snapshot)=>{
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {

            rooms.push({
              id: change.doc.id,
              data: change.doc.data()
            });
        }
        if (change.type === "modified") {
            rooms = rooms.map((item) => {

              if (item.id === change.doc.id){
                return {id: change.doc.id, data: change.doc.data()}
              }
              else{
                return item;
              }

            });
            
        }
        if (change.type === "removed") {
          rooms = rooms.filter(item => item.id !== change.doc.id)
            
        }
      })
  
    setRooms(rooms);
  })
}


let unsubscribe;
const getMessagesOnline = async (roomId, setMessages) => {
  const docRef =  doc(db, 'message', roomId); //Супер РЕШЕНИЕ для документа

  unsubscribe = onSnapshot(docRef,(doc)=>{
    // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    setMessages(doc.data());
  });

}
const stopOnline = ()=>{
  unsubscribe();
}


export {getMyRoomMessages, sendMessage, createRoom, getMyRooms, updateRead, getMessagesOnline, stopOnline, getRoomsOnline, getTestItem};




