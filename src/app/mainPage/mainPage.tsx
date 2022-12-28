import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";

import { howitzerSelection } from '../../features/counter/counterSlice';
import { MainCoordinates, MainCoordinatesDataFromInput } from '../AppLogic/interfaces';
import SettingsPage from '../settingsPage';
import FinishPage from '../finishPage';
import './mainPage.css';

// import jsonData from '../DATA/dataId.json';



export const MainPage: React.FC<MainCoordinates> = (props: MainCoordinates): JSX.Element => {

    return (
        <Router>
            <Routes>
                <Route path="/settingsPage" element={<SettingsPage {...props} />}/>
                <Route path="/finishPage" element={<FinishPage />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    )
}

const Home: React.FC<MainCoordinatesDataFromInput> = (props: MainCoordinatesDataFromInput): JSX.Element => {
  const dispatch = useAppDispatch();

  let { maximumRangeShot } = props;

  return (
      <header className="App-header">
          <h1>Калькулятор артиллериста*</h1>
          <div className="mainPage disp-flex">
            <Link 
              onClick={() => {dispatch(howitzerSelection(
                maximumRangeShot = 15300
                ))}}
              className="mainPageLink" 
              to="/settingsPage">Д-30 122мм
            </Link>
            <Link className="mainPageLink pointer-events-none" to="/users">МСТА-Б 152мм</Link>
            <Link className="mainPageLink pointer-events-none" to="/">in development...</Link>
          </div>
          <h2>*Калькулятор находится на стадии разработки, данный момент использует 
            таблицу при полном заряде орудия Д-30 фугасного(ОФ-462Ж(ОФ-462)), 
            дымового(ОФ24Ж(ОФ24)) снаряда. В дальнейшем будут исправляться ошибки, 
            недоработки по мере их выявления, вноситься поправки
            по ветру, температуре воздуха и дт. так же таблицы мортирной 
            стрельбы, разных зарядов и прочие таблицы, меню настройки. 
            Версия 0.1.0
          </h2>
      </header>
  );
}
  
  function Users() {
    return <h2>Users</h2>;
  }


export default MainPage;