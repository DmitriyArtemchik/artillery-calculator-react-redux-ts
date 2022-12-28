import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { 
    selectValueDistancet, 
    selectValueAngledeg,
    selectSightMechanicalDivisions,
    selectSightMechanicalThousandths,
    selectOpticalSight,
    selectAverageDeviationsLateral
 } from '../../features/counter/counterSlice';
import './finishPage.css';

export const FinishPage = () => {
    const countDistancet = useAppSelector(selectValueDistancet);
    const countAngledeg = useAppSelector(selectValueAngledeg);
    const countSightMechanicalDivisions = useAppSelector(selectSightMechanicalDivisions);
    const countSightMechanicalThousandths = useAppSelector(selectSightMechanicalThousandths);
    const countOpticalSight = useAppSelector(selectOpticalSight);
    const countAverageDeviationsLateral = useAppSelector(selectAverageDeviationsLateral);

    return (
        <>
            <div className='finish'>
                <span>дистанция до цели в м.: </span><p>{countDistancet}</p>
            </div>
            <div className='finish'>
                <span>десятичные градусы: </span><p>{countAngledeg}</p>
            </div>
            <div className='finish'>
                <span>механический прицел ДЕЛЕНИЯ: </span><p>{countSightMechanicalDivisions}</p>
            </div>
            <div className='finish'>
                <span>механический прицел ТЫСЯЧНЫЕ: </span><p>{countSightMechanicalThousandths}</p>
            </div>
            <div className='finish'>
                <span>оптический прицел: </span><p>{countOpticalSight}</p>
            </div>
            <div className='finish'>
                <span>средние отклонения боковые в м.: </span><p>{countAverageDeviationsLateral}</p>
            </div>
        </>
    )
}
