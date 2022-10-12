import { useEffect } from 'react';

import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

import ActionFn from 'store/actions';


const UserList = ({ uid, cabinetType, ownCards, ownCardsLoad, ActionFn }) => {

  useEffect(() => {

    getListing(cabinetType, uid, 'users').then(res => {

      ActionFn('SET_OWN_CARDS', { ownCards: res, ownCardsLoad: false });
    })
  }, []);

  return (
    <>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.info.uid,
    cabinetType: state.accountInfo.info.typeCabinet,
    ownCards: state.accountInfo.ownCards,
    ownCardsLoad: state.accountInfo.ownCardsLoad
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(UserList);