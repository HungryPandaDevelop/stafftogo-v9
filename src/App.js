import { useState, useEffect } from 'react';

import {BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';

import { getListing } from 'store/asyncActions/getListing';

import PreloaderPopup from 'components/popup/PreloaderPopup';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from 'blocks/Header';
import PrivateRoute from 'blocks/header/PrivateRouter';
import Footer from 'blocks/Footer';

import MainPage from 'pages/MainPage';
import Demo from 'pages/Demo';
import TemplatePage from 'pages/TemplatePage';
import AllPages from 'pages/AllPages';
import NotFound from 'pages/NotFound';

import Chat from 'pages/cabinet/chat/Chat';
// import ChatList from 'pages/cabinet/chat/ChatList';

import Videochat from 'pages/cabinet/videochat/Videochat';
import VideoRoomIn from 'pages/cabinet/videochat/VideoRoomIn';
import VideoRoomOut from 'pages/cabinet/videochat/VideoRoomOut';



import Subscription from 'pages/cabinet/subscription/Subscription';

import Authorization from 'pages/cabinet/auth/Authorization';
import ForgotPassword from 'pages/cabinet/auth/ForgotPassword';
import Registration from 'pages/cabinet/auth/Registration';


import Account from 'pages/cabinet/Account';
import AccountEdit from 'pages/cabinet/AccountEdit';


// Страницы кабинет Нанимателя


import Vacancies from 'pages/cabinet/vacancies/Vacancies';
import VacanciesNew from 'pages/cabinet/vacancies/VacanciesNew';
import VacanciesEdit from 'pages/cabinet/vacancies/VacanciesEdit';
// Страницы кабинет Нанимателя

// Страницы кабинет Соискателя
import Resume from 'pages/cabinet/resume/Resume';
import ResumeNew from 'pages/cabinet/resume/ResumeNew';
import ResumeEdit from 'pages/cabinet/resume/ResumeEdit';
// Страницы кабинет Соискателя

import Liked from 'pages/cabinet/liked/Liked';
import Hidden from 'pages/cabinet/hidden/Hidden';
import Invitations from 'pages/cabinet/invitations/Invitations';
import Responses from 'pages/cabinet/responses/Responses';

import Specialization from 'pages/cabinet/specialization/Specialization';
import SpecializationNew from 'pages/cabinet/specialization/SpecializationNew';
import SpecializationEdit from 'pages/cabinet/specialization/SpecializationEdit';

// Страницы Елементов Вакансии\ Резюме
import Catalog from 'pages/catalog/Catalog';
import CardsDetail from 'pages/catalog/CardsDetail';
// Страницы Елементов Вакансии\ Резюме

import GoMap from 'pages/goMap/GoMap';




const App = () => {

const params = useParams();
const [pages, setPages] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{
  getListing('pages',).then(res => {

    setPages(res);

    setLoading(false);
  });
},[]);

const ScrollToTop =(props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header typeListing={params.catagoryName} />
        {loading ? <PreloaderPopup /> : (        <Routes> 
          <Route path='/' exept element={<MainPage/>} ></Route>
          <Route path='/demo' element={<Demo/>} ></Route>
          {pages.length > 0 && pages.map((item, index) => (        
              <Route key={index} 
              path={`/${item.data.link}`} 
              element={<TemplatePage  
              pages={item.data.id}
              id={item.id}
                />} ></Route>
          ))}

          <Route  path='/allpages' element={<AllPages  pages={pages}/>} ></Route>


          
          <Route path='/authorization'  element={<Authorization/>} ></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/registration'  element={<Registration/>} ></Route>

        

          {/*  Страницы кабинет  */}
            <Route path='/cabinet' element={<PrivateRoute/>}>
              <Route index  element={<Account/>}></Route>
    
              <Route path='/cabinet/account-edit' element={<AccountEdit/>}></Route>

              <Route path='/cabinet/vacancies' element={<Vacancies/>}></Route>
              <Route path='/cabinet/vacancies-new' element={<VacanciesNew/>}></Route>
              <Route path='/cabinet/vacancies-edit/:elementId' element={<VacanciesEdit/>}></Route>

              <Route path='/cabinet/resume' element={<Resume/>}></Route>
              <Route path='/cabinet/resume-new' element={<ResumeNew/>}></Route>
              <Route path='/cabinet/resume-edit/:elementId' element={<ResumeEdit/>}></Route>


              <Route path='/cabinet/liked/' element={<Liked/>}></Route>
              <Route path='/cabinet/hidden/' element={<Hidden/>}></Route>
              <Route path='/cabinet/invitations/' element={<Invitations/>}></Route>
              <Route path='/cabinet/responses/' element={<Responses/>}></Route>

              <Route path='/cabinet/chat/'  element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomUrl'  element={<Chat/>} ></Route>

              <Route path='/cabinet/videochat/'  element={<Videochat/>} ></Route>
              <Route path='/cabinet/videochat/videoroom-out/:userId'  element={<VideoRoomOut/>} ></Route>
              <Route path='/cabinet/videochat/videoroom-in/:roomUrl'  element={<VideoRoomIn/>} ></Route>

              <Route path='/cabinet/specialization' element={<Specialization/>}></Route>
              <Route path='/cabinet/specialization/specialization-new' element={<SpecializationNew/>}></Route>
              <Route path='/cabinet/specialization/specialization-edit/:elementId' element={<SpecializationEdit/>}></Route>

              <Route path='/cabinet/subscription/'  element={<Subscription/>} ></Route>

            </Route>
          {/*  Страницы кабинет  */}


        



          <Route path='/catalog/:catagoryName'  element={<Catalog/>}></Route>
          <Route path='/catalog/:catagoryName/map' element={<GoMap/>}></Route>
          <Route path='/catalog/:catagoryName/map/:idPopup' element={<GoMap/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<CardsDetail/>}></Route>

          <Route path="/404" element={ <NotFound /> } />
          <Route path="*" element={ <Navigate to="/404" replace />} />


        </Routes>)}

        <Footer/>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </>
  );
}

export default App;
