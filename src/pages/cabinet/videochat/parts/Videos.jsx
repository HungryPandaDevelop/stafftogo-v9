import { useRef, useState } from "react";

import { Link, useParams, useNavigate } from 'react-router-dom';


import hangUp from "./function/hangUp";
import setupSources from "./function/setupSources";


// Initialize WebRTC
const Videos = ({ typeConnect, joinRoomId, uid, textBtn }) => {

  const navigate = useNavigate();
  const params = useParams();
  const invitedId = params.userId;




  const [tempPC, setTempPc] = useState('');
  const [webcamActive, setWebcamActive] = useState(false);

  const [currentRoomId, setCurrentRoomId] = useState('');



  const localRef = useRef();
  const remoteRef = useRef();

  const [allStreamRef, setAllStreamRef] = useState([{}, {}]);
  // const [receivedMediaStream, setReceivedMediaStream] = useState('');


  return (
    <div className="videos-chat">

      <video
        ref={localRef}
        autoPlay
        playsInline
        className="his-video-chat"
        muted
      />
      <video
        ref={remoteRef}
        autoPlay
        playsInline
        className="own-video-chat"
      />

      {webcamActive && (
        <div
          onClick={() => { hangUp(tempPC, currentRoomId, allStreamRef, navigate, joinRoomId, typeConnect) }}
          className="hangup-call"
        >
        </div>
      )}
      {!webcamActive && (
        <div className="popup-in-call shadow-container">
          <h3>
            Включите камеру и микрофон, для начала разговора
          </h3>
          <div className="btn-container">
            <div
              className="btn  btn--green"
              onClick={() => setupSources(
                setTempPc,
                localRef,
                remoteRef,
                setWebcamActive,
                typeConnect,
                setCurrentRoomId,
                joinRoomId,
                invitedId,
                navigate,
                setAllStreamRef,
                uid
              )}>
              {textBtn}
            </div>
            <Link to='/cabinet/videochat'
              className="btn btn--red-border"
            >
              Отмена
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}

export default Videos
