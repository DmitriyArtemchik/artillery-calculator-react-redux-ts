import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Link } from "react-router-dom";
import {
    incrementByAmountA,
    incrementByAmountB,
    incrementByAmountC,
    incrementByAmountD,
    dataOutput,
} from '../../features/counter/counterSlice';
import { MainCoordinates } from '../AppLogic/interfaces';


import './settingsPage.css'



const SettingsPage: React.FC<MainCoordinates> = (props: MainCoordinates): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className='mainPageFormA'>
                <div className='FormA_Longitude'>
                    <label htmlFor='longitude'>широта точки А</label>
                    <input
                        id='longitude'
                        name='longitude'
                        type='number'
                        aria-label="Set increment amount A"
                        onChange={(e) => dispatch(incrementByAmountA(+e.target.value)) }
                    />
                </div>
                <div className='FormA_Width'>
                    <label htmlFor='width'>долгота точки А</label>
                    <input
                        id='width'
                        name='width'
                        type='number'
                        aria-label="Set increment amount B"
                        onChange={(e) => dispatch(incrementByAmountB(+e.target.value))}
                    />
                </div>
            </div>
            <div className='mainPageFormB'>
                <div className='FormA_Longitude'>
                    <label htmlFor='longitude'>широта точки Б</label>
                    <input
                        id='longitude2'
                        name='longitude2'
                        type='number'
                        aria-label="Set increment amount C"
                        onChange={(e) => dispatch(incrementByAmountC(+e.target.value))}
                    />
                </div>
                <div className='FormA_Longitude'>
                    <label htmlFor='width'>долгота точки Б</label>
                    <input
                        id='width2'
                        name='width2'
                        type='number'
                        aria-label="Set increment amount D"
                        onChange={(e) => dispatch(incrementByAmountD(+e.target.value))}
                    />
                </div>
            </div>
            <div className='divSettindPageLink'>
            <Link 
                className='settindPageLink'
                to="/finishPage"
                aria-label="dataOutput value"
                onClick={() => {dispatch(dataOutput())
                }}>расчитать
            </Link>
            </div>
        </>
    )
}


export default SettingsPage;