import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDeleteCards } from 'store/asyncActions/getListing';

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
        console.log(res.length, accountInfo.currentCard)
        if (res.length === 1 && !accountInfo.currentCard) {
          onActivateItem([res[res.length - 1].id, res[res.length - 1].data.card_name]);
        }

        setLoading(false);
      }
    });




    return () => { isMounted = false };
  }, []);

  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, cabinetType).then(res => {
      setListings(res);
      if (res.length > 1) {
        onActivateItem([res[res.length - 1].id, res[res.length - 1].data.card_name]);
      } else {
        onActivateItem('');
      }
    });
    // onDeleteMessage(id);
  }


  const onEdit = (listingId) => {
    navigate(`/cabinet/${cabinetType}-edit/${listingId}`)
  }

  const onActivateItem = (el) => {
    if (accountInfo.currentCard !== el) {
      const addUserInfo = { ...accountInfo, currentCard: el };
      console.log(addUserInfo)
      saveInfo(addUserInfo, uid, 'users').then(() => {
        ActionFn('SET_INFO_ACCOUNT', addUserInfo);
      });
    }
  }

  console.log(listings)
  return (
    <>
      <TemplateAccount
        title={`${cabinetType}`}
        cabinetType={cabinetType}
        addWrapClass='cards-account-container'
        showAddBtn={true}

      >
        <div className="add-cards-container">
          <Link className="btn btn--orange-border cabinet-add-cards ico-in ico-in--left" to={`/cabinet/${cabinetType}-new`}>
            <i></i>
            <span>
              Создать {cabinetType === 'resume' ? 'резюме' : 'вакансию'}
            </span>
          </Link>
        </div>
        {loading ? 'loading' : listings.length > 0 ? (
          <>

            <table>
              <thead>
                <tr className="cards-account-head">
                  <th>Название</th>
                  <th>З/п</th>
                  <th>Резюме обновлено</th>
                  <th>Статус</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {
                  listings.map((listing) => (
                    <tr key={listing.id}>
                      <CardItem
                        listing={listing.data}
                        id={listing.id}
                        currentCard={accountInfo.currentCard}
                        onEdit={() => onEdit(listing.id)}
                        onDelete={() => deleteItem(listings, listing.id)}
                        onActivate={() => onActivateItem([listing.id, listing.data.card_name])}
                        cabinetType={cabinetType}

                      />
                    </tr>
                  ))
                }
              </tbody>
            </table>

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