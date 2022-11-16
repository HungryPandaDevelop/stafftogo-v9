import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { db } from 'firebase.config';
import { collection, doc, where, query, setDoc, addDoc, getDoc, onSnapshot, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';


const CallPopup = ({ uid }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (uid) {
      const q = query(collection(db, "calls"), where('offer.invitedId', '==', uid));
      onSnapshot(q, (querySnapshot) => {
        const calls = [];
        querySnapshot.forEach((doc) => {
          calls.push(doc.data());
        });

        console.log(calls)
        setRooms(calls);
      });
    }


  }, [uid]);

  return (
    <div className="popup element-show popup-video show">
      <div className="popup-container">
        <div className="main-full">
          <h2>Вам звонок:</h2>
          <div className="call-item-container">
            {rooms.length > 0 ? rooms.map((item) => (
              <div className="call-item" key={item.offer.roomId}>
                <Link className='btn-call' to={`/cabinet/videochat/videoroom-in/${item.offer.roomId}`}></Link>
                <div className="btn-hangup"></div>
              </div>
            )) : 'Список пуст'}
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
  }
}

export default connect(mapStateToProps)(CallPopup);