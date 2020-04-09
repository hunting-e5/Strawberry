/* 태형 수정 */

import React from 'react';
import Category from './Category';
import MainItemList from './MainItemList';
import './MainTab.css'
import TestId from '../TestId/TestId';

function MainTab() {
  return (
    <div class = 'main_wrap'>
        <TestId/>
        <Category/>
        <MainItemList/>
    </div>
  );
}

export default MainTab;