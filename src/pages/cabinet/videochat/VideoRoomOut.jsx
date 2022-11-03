
import { useState, useEffect } from 'react';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleListing } from 'store/asyncActions/getSingleListing';

const VideoRoomOut = ({ uid }) => {

  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    getSingleListing('users', params.userId).then(res => {
      setListing(res);
      setLoading(false);
    });

  }, []);


  console.log('listing', listing)
  return (
    <TemplateAccount
      title='Видеочат'
      addWrapClass='cabinet-account'
    >

      <div className="main-full">
        <h3>Видеочат с {!loading && listing.accountName}</h3>
        {params.userId ? (<MainScreen typeConnect="create" invitedId={params.userId} uid={uid} />) : 'Выберете, кому хотите позвонить'}
      </div>
    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid
  }
}



export default connect(mapStateToProps)(VideoRoomOut);