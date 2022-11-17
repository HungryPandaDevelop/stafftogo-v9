

const hangUpAuto =  (navigate, localStream, remoteStream)=>{

    localStream.getTracks().forEach(mediaTrack => {
      mediaTrack.stop();
    });
    remoteStream.getTracks().forEach(mediaTrack => {
      mediaTrack.stop();
    });
    navigate('/cabinet/', { replace: true });



}

export default hangUpAuto;