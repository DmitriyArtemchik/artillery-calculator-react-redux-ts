import React, { useState } from 'react';

import MainPage from '../../app/mainPage';
import { useAppDispatch } from '../../app/hooks';


export function Counter() {

  const [incrementAmountA, setlatitudeOfPointA] = useState('0');
  const [incrementAmountB, setlongitudeOfPointA] = useState('0');
  const [incrementAmountC, setlatitudeOfPointB] = useState('0');
  const [incrementAmountD, setlongitudeOfPointB] = useState('0');

  return (
    <>
      <MainPage
      // @ts-ignore
        setlatitudeOfPointA={setlatitudeOfPointA}
      // @ts-ignore
        setlongitudeOfPointA={setlongitudeOfPointA}
      // @ts-ignore
        setlatitudeOfPointB={setlatitudeOfPointB}
      // @ts-ignore
        setlongitudeOfPointB={setlongitudeOfPointB}
      />
    </>
  );
}

