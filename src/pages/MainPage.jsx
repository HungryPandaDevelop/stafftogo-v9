import { useState, useRef } from 'react';

import MainSection from 'pages/main-page/MainSection';
import AdvantagesHome from 'pages/main-page/AdvantagesHome';
import InstructionsHome from './main-page/InstructionsHome';
import FeedbackHome from './main-page/FeedbackHome';

const MainPage = () => {

  const [sectionTop, setSectionTop] = useState(0);


  return (
    <>
      <MainSection sectionTop={sectionTop}/>
      <AdvantagesHome setSectionTop={setSectionTop} />
      <InstructionsHome />
      <FeedbackHome />
    </>
  );
};

export default MainPage;