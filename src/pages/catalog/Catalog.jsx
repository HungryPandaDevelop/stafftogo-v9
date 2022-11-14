import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import Filters from 'blocks/filters/Filters';

import { connect } from 'react-redux';


import { getListing } from 'store/asyncActions/getListing';

import { useParams } from 'react-router-dom';

import filterMain from 'components/filterMain/filterMain';

import Pagination from 'pages/catalog/Pagination';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

const Catalog = ({ listingSearch, uid, cabinetType, accountInfo, }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  const params = useParams();


  useEffect(() => {

    getListing(params.catagoryName).then(res => {

      let data = filterMain(listingSearch, res);

      accountInfo.hideMass && accountInfo.hideMass.forEach(el => {
        data = data.filter(item => item.id !== el)
      });
      // console.log(data)
      data = data.filter(item => item.data.activeCards !== 'off')
      setListings(data);
      setLoading(false);
    });

  }, [listingSearch, params.catagoryName]);



  const renderTitle = () => {
    return params.catagoryName === 'resume' ? 'Резюме' : 'Вакансии'
  }


  return (
    <>
      <div className="stub"></div>
      <Filters />
      <Breadcrumbs />
      <div className="content">
        <PageTitle title={renderTitle()} />

        <div className="main-full">
          {loading ? <PreloaderList /> : listings.length > 0 ? (
            <>

              <Pagination
                listings={listings}
                listingType={params.catagoryName}
                uid={uid}
                accountInfo={accountInfo}
                cabinetType={cabinetType}
              />
            </>
          ) : (
            <EmptyList />
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
  }
}



export default connect(mapStateToProps)(Catalog);
