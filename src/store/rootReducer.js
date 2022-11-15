
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


import fieldsDemo from 'store/reducers/base/fieldsDemo';
import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';
import fieldsEmployersAccount from 'store/reducers/base/fieldsEmployersAccount';
import fieldsFeedback from 'store/reducers/base/fieldsFeedback';
import fieldsApplicantsAccount from 'store/reducers/base/fieldsApplicantsAccount';
import fieldsVacancies from 'store/reducers/base/fieldsVacancies';
import fieldsResume from 'store/reducers/base/fieldsResume';
import fieldsChat from 'store/reducers/base/fieldsChat';
import fieldsReviews from 'store/reducers/base/fieldsReviews';
import fieldsAdditionalFilter from 'store/reducers/base/fieldsAdditionalFilter';
import fieldsPages from 'store/reducers/base/fieldsPages';
import fieldsPriceFilter from 'store/reducers/base/fieldsPriceFilter';

import specializationBase from "store/reducers/base/specializationBase";
import industryBase from "store/reducers/base/industryBase";
import russianCities from "store/reducers/base/russianCities";

import infoAccountReducer from "store/reducers/infoAccountReducer";

import popupReducer from "store/reducers/popupReducer";
// import alphabetListPopupReducer from "store/reducers/alphabetListPopupReducer";

import popupMapInfoReducer from "store/reducers/popupMapInfoReducer";

import listingTypeReducer from "store/reducers/listingTypeReducer";
import listingSearchReducer from "store/reducers/listingSearchReducer";



const rootReducer = combineReducers({
  form: formReducer,
  fieldsDemo: fieldsDemo,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsEmployersAccount: fieldsEmployersAccount,
  fieldsFeedback: fieldsFeedback,
  fieldsApplicantsAccount: fieldsApplicantsAccount,
  fieldsVacancies: fieldsVacancies,
  fieldsResume: fieldsResume,
  fieldsChat: fieldsChat,
  fieldsReviews: fieldsReviews,
  fieldsAdditionalFilter: fieldsAdditionalFilter,
  fieldsPriceFilter: fieldsPriceFilter,
  fieldsPages: fieldsPages,
  accountInfo: infoAccountReducer,
  specializationBase: specializationBase,
  industryBase: industryBase,
  russianCities: russianCities,
  popupReducer: popupReducer,
  popupMapInfoReducer: popupMapInfoReducer,
  listingTypeReducer: listingTypeReducer,
  listingSearchReducer: listingSearchReducer,
});

export default rootReducer;
