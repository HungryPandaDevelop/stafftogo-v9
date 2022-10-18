import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDeleteCards, onDeleteMessage } from 'store/asyncActions/getListing';

import CardItem from 'pages/cabinet/parts/CardItem';

import ActionFn from 'store/actions';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { saveInfo } from 'store/asyncActions/saveInfo';

import { connect } from 'react-redux';

const CardsList = ({ uid, cabinetType, accountInfo, ActionFn }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getListing(cabinetType, uid, 'users').then(res => {
      if (isMounted) {
        setListings(res);

        if (res.length === 1) {
          onActivateItem(res[res.length - 1].id);
        }

        setLoading(false);
      }
    });




    return () => { isMounted = false };
  }, []);

  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, cabinetType).then(res => {
      setListings(res);

      onActivateItem(res[res.length - 1].id);
    });
    onDeleteMessage(id);
  }


  const onEdit = (listingId) => {
    navigate(`/cabinet/${cabinetType}-edit/${listingId}`)
  }

  const onActivateItem = (id) => {
    if (accountInfo.currentCard !== id) {
      const addUserInfo = { ...accountInfo, currentCard: id };
      console.log(addUserInfo)
      saveInfo(addUserInfo, uid, 'users').then(() => {
        ActionFn('SET_INFO_ACCOUNT', addUserInfo);
      });
    }
  }


  return (
    <>
      <TemplateAccount title={`${cabinetType}`} cabinetType={cabinetType} showAddBtn={true}>
        {loading ? 'loading' : listings.length > 0 ? (
          <>
            <Link className="btn btn--orange" to={`/cabinet/${cabinetType}-new`}>
              Создать {cabinetType === 'resume' ? 'резюме' : 'вакансию'}
            </Link>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <CardItem
                    listing={listing.data}
                    id={listing.id}
                    currentCard={accountInfo.currentCard}
                    onEdit={() => onEdit(listing.id)}
                    onDelete={() => deleteItem(listings, listing.id)}
                    onActivate={() => onActivateItem(listing.id)}
                    cabinetType={cabinetType}

                  />

                </div>
              ))
            }
          </>
        ) : 'Empty'}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.info.typeCabinet,
  }
}

export default connect(mapStateToProps, { ActionFn })(CardsList);