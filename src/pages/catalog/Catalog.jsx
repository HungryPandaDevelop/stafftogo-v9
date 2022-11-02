import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import Filters from 'blocks/filters/Filters';

import { connect } from 'react-redux';


import { getListing } from 'store/asyncActions/getListing';



import filterMain from 'components/filterMain/filterMain';

import Pagination from 'pages/catalog/Pagination';

const Catalog = ({ listingType, listingSearch, uid, cabinetType, accountInfo, }) => {

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    getListing(listingType).then(res => {

      let data = filterMain(listingSearch, res);

      accountInfo.hideMass && accountInfo.hideMass.forEach(el => {
        data = data.filter(item => item.id !== el)
      })

      setListings(data);
      setLoading(false);
    });

  }, [listingSearch, listingType]);






  return (
    <>
      <div className="stub"></div>
      <Filters />
      <Breadcrumbs />
      <div className="content">
        <PageTitle title="список" />

        <div className="main-full">
          {loading ? 'Loading list' : listings.length > 0 ? (
            <>

              <Pagination
                listings={listings}
                listingType={listingType}
                uid={uid}
                accountInfo={accountInfo}
                cabinetType={cabinetType}
              />
            </>
          ) : (
            <p>Нет элементов</p>
          )}
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listingSearch: state.listingSearchReducer,
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.info.typeCabinet,
    listingType: state.listingTypeReducer,
  }
}



export default connect(mapStateToProps)(Catalog);
