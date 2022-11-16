import { useState, useEffect } from "react";


import "./css/Video.css";
import "./css/index.css";

import Videos from './Videos';

const MainScreen = ({ typeConnect, videoroomid, invitedId, uid }) => {

  return (
    <div>
      <Videos
        mode={typeConnect}
        callId={videoroomid}

        typeConnect={typeConnect}
        invitedId={invitedId}
        uid={uid}
      />
    </div>
  )
}

export default MainScreen
