
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import CardItemLike from 'pages/cabinet/liked/CardItemLike';
import { useEffect, useState } from 'react';

import { getListing } from 'store/asyncActions/getListing';

import { db } from 'firebase.config';
import { collection, doc, deleteDoc } from 'firebase/firestore';

const VideoListOut = ({ typeCabinet, accountInfo, uid, ActionFn }) => {

  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);



  useEffect(() => {
    let isMounted = true;
    // console.log('render')
    getListing(reverseTypeCabinet, accountInfo.likeMass, 'liked').then(res => {
      if (isMounted) {
        setListings(res);
        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [accountInfo]);

  const contentPage = () => {

    return (
      <table>
        <thead>
          <tr className="cards-account-head">
            <th>Новые звонки</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? (<tr><td>Loading...</td></tr>) : (
              listings.length !== 0 ? (
                listings.map((like, index) => (
                  <tr key={index} >
                    <CardItemLike
                      like={like}
                      reverseTypeCabinet={reverseTypeCabinet}
                      accountInfo={accountInfo}

                    />
                  </tr>
                ))
              ) : <tr><td>Empty Like List</td></tr>
            )
          }
        </tbody>
      </table>
    )
  }

  return (
    <TemplateAccount
      title='Чат'
      addWrapClass='cards-account-container'

    >

      {contentPage()}

    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    typeCabinet: state.accountInfo.info.typeCabinet,
  }
}



export default connect(mapStateToProps, { ActionFn })(VideoListOut);