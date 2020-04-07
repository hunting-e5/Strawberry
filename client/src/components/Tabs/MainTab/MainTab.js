import React from 'react';
import Category from './Category';
import MainItemList from './MainItemList';
import './MainTab.css'

function MainTab() {
  return (
    <div class = 'main_wrap'>
        <Category/>
        <MainItemList/>
    </div>
  );
}

export default MainTab;