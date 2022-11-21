import RenderFormAccount from 'components/forms/RenderFormAccount';
import { connect } from 'react-redux';

import { useEffect, useState } from 'react';

import SimpleDateTime from 'react-simple-timestamp-to-date';

import { addRews } from 'store/asyncActions/addCards';
import { getListing } from 'store/asyncActions/getListing';


import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg';

const Reviews = ({
  uid,
  checkingStatus,
  dataForm,
  userInfo,
  fields,
  elementId,
}) => {



  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [refreshDoc, setRefreshDoc] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getListing('reviews', elementId, 'reviews').then(res => {
      if (isMounted) {
        setListings(res);

        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [refreshDoc]);


  const onSubmitIn = () => {

    const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;

    const addUserInfo = {
      ...dataForm.values,
      accountName: userInfo.accountName,
      imgsAccount: imgCards,
      uid: userInfo.uid
    };
    addRews(addUserInfo, 'reviews', elementId).then((res) => {
      setRefreshDoc(!refreshDoc)
    });

  }


  const showHideForm = (thisListing) => {
    let chectUId = true;

    thisListing.map(item => {
      if (item.data.uid === uid) {
        chectUId = false;
      }
    });

    if (chectUId) {
      return (
        checkingStatus ? 'Loading account...' : !uid ? 'Что бы оставить отзыв авторизируйтесь' : (
          <RenderFormAccount
            btnSaveText="Оставить отзыв"
            objFields={fields}
            orderFields={fields.order}
            onSubmitIn={onSubmitIn}
            sending={true}
            btnClass='btn-save btn--orange'
            formClassAdd="form-default"
          />
        )
      )
    }
    else {
      return 'Вы уже оставили отзыв';
    }



  }

  const renderStars = (item) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<i
        key={i}
        className={`star-ico star-ico--gray ${Number(item.data.grade) - 1 >= i && 'active'}`}
      ></i>)
    }

    return stars;
  }

  return (
    <>
      <div className="reviews-detail">
        <div className="main-grid cards-second-info">
          <div className="col-6">
            <h2>Отзывы</h2>
            <div className="reviews-list">
              {loading ? 'Загрузка' : !listings ? 'Список пуст' : listings.map((item, index) => (
                <div key={index} className="reviews-item">
                  <div className="main-grid">
                    <div className="reviews-info col-3">
                      <div
                        className="reviews-img img-cover"
                        style={{ backgroundImage: `url(${item.data.imgsAccount})` }}
                      >

                      </div>
                      <h2>{item.data.accountName}</h2>
                      <h3>
                        <SimpleDateTime
                          format="MYD"
                          showTime="0"
                          dateSeparator="."
                        >{item.data.timestamp.seconds}</SimpleDateTime>

                      </h3>
                    </div>
                    <div className="reviews-body col-9">
                      <div className="reviews-text">
                        {item.data.reviews}
                      </div>
                      <div className="reviews-stars-container">
                        {renderStars(item)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="col-6 rew-default-container">
            <h2>Оставить отзыв</h2>
            {listings && showHideForm(listings)}

          </div>
        </div>

      </div>


    </>
  )
}


const mapStateToProps = (state) => {

  const fields = state.fieldsReviews;
  const formReducer = state.form && state.form.singleInput;
  return {
    fields: fields,
    dataForm: formReducer,
    userInfo: state.accountInfo.info,
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps)(Reviews);