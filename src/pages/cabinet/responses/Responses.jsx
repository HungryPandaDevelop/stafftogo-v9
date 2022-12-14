import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardItemResponse from 'pages/cabinet/responses/CardItemResponse';
import { getListing } from 'store/asyncActions/getListing';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';


import { onDeleteCards } from 'store/asyncActions/getListing';

const Responses = ({ uid, typeCabinet }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {


    getListing('message', uid, 'response').then(res => {

      setListings(res);
      setLoading(false);
    })
  }, [])

  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, 'message').then(res => {
      setListings(res);

    });
  }




  return (
    <>
      <TemplateAccount
        title="Мои приглашения"
        addWrapClass='cards-account-container'
      >
        {loading ? <PreloaderList /> : listings.length > 0 ? (
          <table>
            <thead>
              <tr className='cards-account-head'>
                <th><b>Вакансии</b></th>
                <th><b>Дата</b></th>
                <th><b>Статус</b></th>
                <th><b>Действия</b></th>
              </tr>
            </thead>
            <tbody>
              {
                listings.map(listing => (
                  <CardItemResponse
                    key={listing.id}
                    listing={listing}
                    typeCabinet={typeCabinet}
                    onDelete={() => deleteItem(listings, listing.id)}
                  />
                ))
              }
            </tbody>
          </table>
        ) : <EmptyList />}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    currentCard: state.accountInfo.info.currentCard,
    typeCabinet: state.accountInfo.info.typeCabinet,
    uid: state.accountInfo.info.uid,
  }
}



export default connect(mapStateToProps)(Responses);
