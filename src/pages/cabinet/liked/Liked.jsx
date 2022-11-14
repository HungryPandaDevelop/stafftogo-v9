
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

import CardItemLike from 'pages/cabinet/liked/CardItemLike';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { getListing } from 'store/asyncActions/getListing';

const Liked = ({ typeCabinet, accountInfo, ActionFn }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState([]);



  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';

  useEffect(() => {
    let isMounted = true;
    console.log('render')
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
      <>
        {loading ? <PreloaderList /> : listings.length > 0 ? (<table>
          <thead>
            <tr className="cards-account-head">
              <th>Название</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {
              listings.map((like, index) => (
                <tr key={index} >
                  <CardItemLike
                    like={like}
                    reverseTypeCabinet={reverseTypeCabinet}
                    accountInfo={accountInfo}
                    ActionFn={ActionFn}

                  />
                </tr>
              ))
            }
          </tbody>
        </table>) : (<EmptyList />)}
      </>
    )
  }


  return (
    <>
      <TemplateAccount
        title="Мне понравилось"
        addWrapClass='cards-account-container'
      >
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    typeCabinet: state.accountInfo.info.typeCabinet,
  }
}



export default connect(mapStateToProps, { ActionFn })(Liked);
