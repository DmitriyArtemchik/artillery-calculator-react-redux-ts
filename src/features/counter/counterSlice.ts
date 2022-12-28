import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

import DistanceCalculation, { dist, angledeg } from '../../app/AppLogic/DistanceCalc'; 
import HighExplosiveFullCharge, 
  { sightMechanicalDivisions, 
    sightMechanicalThousandths, 
    opticalSight,
    averageDeviationsLateral } 
from '../../app/AppLogic/CalcSightsCorrections';
import { MainCoordinatesDataFromInput } from '../../app/AppLogic/interfaces';


const initialState: MainCoordinatesDataFromInput = {
  valueA: 0,
  valueB: 0,
  valueC: 0,
  valueD: 0,
  valueDistancet: 0,
  valueAngledeg: 0,
  maximumRangeShot: 0,
  maximumRangeShotOptics: 0,
  valueSightMechanicalDivisions: 0,
  valueSightMechanicalThousandths: 0,
  valueOpticalSight: 0,
  valueAverageDeviationsLateral: 0
};


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmountA: (state, action: PayloadAction<number>) => {
      state.valueA = action.payload;
    },
    incrementByAmountB: (state, action: PayloadAction<number>) => {
      state.valueB = action.payload;
    },
    incrementByAmountC: (state, action: PayloadAction<number>) => {
        state.valueC = action.payload;
    },
    incrementByAmountD: (state, action: PayloadAction<number>) => {
        state.valueD = action.payload;
    },
    dataOutput: (state) => {
      DistanceCalculation(state.valueA, state.valueB, state.valueC, state.valueD);
      // @ts-ignore
      HighExplosiveFullCharge(dist, state.maximumRangeShot);
      state.valueDistancet = dist;
      state.valueAngledeg = angledeg;
      state.valueSightMechanicalDivisions = sightMechanicalDivisions;
      state.valueSightMechanicalThousandths = sightMechanicalThousandths;
      state.valueOpticalSight = opticalSight;
      state.valueAverageDeviationsLateral = averageDeviationsLateral;
    },
    howitzerSelection: (state, action: PayloadAction<number>) => {
      state.maximumRangeShot = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     })
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },
});

export const { 
    incrementByAmountA,
    incrementByAmountB,
    incrementByAmountC,
    incrementByAmountD,
    dataOutput,
    howitzerSelection
   } = counterSlice.actions;


export const selectValueDistancet = (state: RootState) => state.counter.valueDistancet;
export const selectValueAngledeg = (state: RootState) => state.counter.valueAngledeg;
export const selectSightMechanicalDivisions = (state: RootState) => state.counter.valueSightMechanicalDivisions;
export const selectSightMechanicalThousandths = (state: RootState) => state.counter.valueSightMechanicalThousandths;
export const selectOpticalSight = (state: RootState) => state.counter.valueOpticalSight;
export const selectAverageDeviationsLateral = (state: RootState) => state.counter.valueAverageDeviationsLateral;


// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default counterSlice.reducer;
