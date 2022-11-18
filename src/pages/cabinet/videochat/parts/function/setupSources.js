import createCall from "pages/cabinet/videochat/parts/function/create";
import joinCall from "pages/cabinet/videochat/parts/function/join";
import hangUpAuto from "pages/cabinet/videochat/parts/function/hangUpAuto";

const setupSources = async (
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
  ) => {

    // console.log(invitedId)
  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
    };

  const pc = new RTCPeerConnection(servers);
  console.log('1', pc)
  
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    // audio: true,
  });
  console.log('2', localStream)
  const remoteStream = new MediaStream();

  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  setAllStreamRef([localStream, remoteStream]); // для остановки после нажатия

  localRef.current.srcObject = localStream; // загрузка видео в наш video тег

  remoteRef.current.srcObject = remoteStream;

  

  if (typeConnect === "create") {
    createCall(pc, setCurrentRoomId, invitedId, uid);
    setWebcamActive(true);
    
    setTempPc(pc)
  }
  if (typeConnect === "join") {

    joinCall(pc, joinRoomId);
    setWebcamActive(true); // вкл зоны камеры

    setTempPc(pc)
  }

  pc.onconnectionstatechange = (event) => {
    // console.log('connection', pc)
    if (pc.connectionState === "disconnected") {
      setTempPc(pc)
      console.log('disconnected')
      hangUpAuto(navigate, localStream, remoteStream);
    }
  };

};

export default setupSources;