/* 2020-04-09 23:35 태형 수정 */
/* 2020-04-19 상아 주석 */

import React from 'react';
// 메뉴 바를 보여주는 <Category/>  ../components/Header/MenuDrawer 로 대체 -> Header.js에서 렌더링

import MainItemList from './MainItemList';
import './MainTab.css'
import TestId from '../TestId/TestId';

function MainTab() {
  return (
    <div class = 'main_wrap'>
        <TestId/>
        <MainItemList/>
    </div>
  );
}

export default MainTab;