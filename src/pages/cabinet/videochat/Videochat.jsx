import { useEffect, useState } from 'react';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getListing } from 'store/asyncActions/getListing';

import { db } from 'firebase.config';
import { collection, doc, deleteDoc } from 'firebase/firestore';


const Videochat = ({ uid }) => {
  const params = useParams();


  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  useEffect(() => {
    console.log('uid', uid)
    if (uid) {
      getListing('calls', uid, 'videolist-my').then(res => {
        console.log('res', res)
        setListings(res);
        setLoading(false);

        res.map(item => {
          let roomRef = doc(collection(db, "calls"), item.id);
          deleteDoc(roomRef);
        });
      });
    }


  }, [uid]);


  return (
    <TemplateAccount title='Чат' addWrapClass='cabinet-account'>
      {params.userId}
      <div className="main-full">
        <h3>Видеочат</h3>
      </div>
      <div className="btn-container">
        <Link className='btn btn--orange-border' to='/cabinet/videochat/videolist-out'>Исходящие звонки</Link>
        {/* <Link className='btn btn--green-border' to='/cabinet/videochat/videolist-in'>Входящие звонки</Link> */}
      </div>
      <div className="main-full">
        <h3>Не законченные звонки</h3>
        {
          loading ? ('Loading...') : (
            listings.length !== 0 ? (
              listings.map((item, index) => (
                <div key={index} >
                  <Link to={`/cabinet/videochat/videoroom-out/${item.data.offer.invitedId}`}>{item.id}</Link>
                </div>
              ))
            ) : 'null'
          )
        }
      </div>
    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  console.log('123')
  return {
    uid: state.accountInfo.info.uid,
  }
}



export default connect(mapStateToProps)(Videochat);