import { useRef, useState } from "react";
import { ReactComponent as HangupIcon } from "./icons/hangup.svg";
import { Link, useParams, useNavigate } from 'react-router-dom';


import hangUp from "./function/hangUp";
import setupSources from "./function/setupSources";


import "./css/Video.css";
import "./css/index.css";

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
    <div className="videos">

      <video
        ref={localRef}
        autoPlay
        playsInline
        className="local"
        muted
      />
      <video
        ref={remoteRef}
        autoPlay
        playsInline
        className="remote"
      />

      <div className="buttonsContainer">
        <button
          onClick={() => { hangUp(tempPC, currentRoomId, allStreamRef, navigate, joinRoomId, typeConnect) }}
          className="hangup button"
        >
          <HangupIcon />
        </button>
      </div>

      {!webcamActive && (
        <div className="modalContainer">
          <div className="modal">
            <h3>
              Включите камеру и микрофон, для начала разговора
            </h3>
            <div className="btn-container">
              <button
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
              </button>
              <Link to='/cabinet/videochat'
                className="btn btn--red-border"
              >
                Отмена
              </Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos
