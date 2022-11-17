
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { db } from 'firebase.config';
import { doc, collection, where, query, onSnapshot, deleteDoc } from 'firebase/firestore';

import { getListing } from 'store/asyncActions/getListing';

// import urlAudio from 'front-end/images/02433.mp3';

const CallPopup = ({ uid }) => {
  const [rooms, setRooms] = useState([]);



  // const [audio] = useState(typeof Audio !== "undefined" && new Audio(urlAudio)); //this will prevent rendering errors on NextJS since NodeJs doesn't recognise HTML tags neither its libs.
  // const [isPlaying, setIsPlaying] = useState(true);


  // useEffect(() => {
  //   isPlaying ? audio.play() : audio.pause();
  // }, [isPlaying]);

  useEffect(() => {

    if (uid) {


      const q = query(collection(db, "calls"), where('offer.invitedId', '==', uid));

      onSnapshot(q, (querySnapshot) => {
        const calls = [];
        querySnapshot.forEach((doc) => {
          calls.push({ data: doc.data(), id: doc.id });
        });

        // console.log(calls)
        setRooms(calls);
      });


      getListing('calls', uid, 'videolist-my').then(res => {
        res.forEach((item) => {
          deleteDoc(doc(db, 'calls', item.id))
        });
      })

    }


  }, [uid]);


  const hangupCall = (listingId) => {
    deleteDoc(doc(db, 'calls', listingId))
  }

  return (
    rooms.length > 0 && (
      <>
        <div className="popup element-show popup-video show">
          <div className="popup-container">

            <div className="main-full">
              <h2>Вам звонок:</h2>
              <div className="call-item-container">
                {rooms.length > 0 && rooms.map((item) => (
                  <div className="call-item" key={item.data.offer.roomId}>
                    <span>mail@mail.ru</span>
                    <div className="controls">
                      <Link className='btn-call' to={`/cabinet/videochat/videoroom-in/${item.data.offer.roomId}`}></Link>
                      <div className="btn-hangup" onClick={() => { hangupCall(item.id) }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
  }
}

export default connect(mapStateToProps)(CallPopup);