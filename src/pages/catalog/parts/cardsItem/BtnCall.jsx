import { Link } from "react-router-dom"


const BtnCall = ({ listing }) => {

  return (
    <>
      <Link to={`/cabinet/videochat/videoroom-out/${listing.userRef}`} className="video-btn"><span>Звонок</span><i></i></Link>
    </>

  )
}


export default BtnCall;