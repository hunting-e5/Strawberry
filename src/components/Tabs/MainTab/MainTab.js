import React from 'react';
import MainCategory from './MainCategory';
import MainItemList from './MainItemList';
import './MainTab.css'

function MainTab() {
  return (
    <div class = 'main_wrap'>
        <MainCategory/>
        <MainItemList/>
    </div>
  );
}

export default MainTab;