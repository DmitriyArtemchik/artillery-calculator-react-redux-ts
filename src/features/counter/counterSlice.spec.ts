import counterReducer, {
  incrementByAmountA,
  incrementByAmountB,
  incrementByAmountC,
  incrementByAmountD,
  dataOutput,
  howitzerSelection
} from './counterSlice';
import { MainCoordinatesDataFromInput } from '../../app/AppLogic/interfaces';

describe('counter reducer', () => {
  const initialState: MainCoordinatesDataFromInput = {
    // value: 2,
    // status: 'idle',
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
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      // value: 0,
      // status: 'idle',
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
    });
  });

  // it('should handle increment', () => {
  //   const actual = counterReducer(initialState, increment());
  //   expect(actual.value).toEqual(4);
  // });

  // it('should handle decrement', () => {
  //   const actual = counterReducer(initialState, decrement());
  //   expect(actual.value).toEqual(2);
  // });

  // it('should handle d30', () => {
  //   const actual = counterReducer(initialState, d30(2));
  //   expect(actual.value).toEqual(1);
  // });
  // it('should handle incrementByAmount', () => {
  //   const actual = counterReducer(initialState, incrementByAmount(2));
  //   expect(actual.value).toEqual(5);
  // });
  // снизу тестовый код
  it('should handle incrementByAmountA', () => {
    const actual = counterReducer(initialState, incrementByAmountA(0));
    expect(actual.valueA).toEqual(9);
  });
  it('should handle incrementByAmountB', () => {
    const actual = counterReducer(initialState, incrementByAmountB(0));
    expect(actual.valueB).toEqual(10);
  });
  it('should handle incrementByAmountC', () => {
    const actual = counterReducer(initialState, incrementByAmountC(0));
    expect(actual.valueC).toEqual(11);
  });
  it('should handle incrementByAmountD', () => {
    const actual = counterReducer(initialState, incrementByAmountD(0));
    expect(actual.valueD).toEqual(12);
  });
  it('should handle dataOutput', () => {
    
    const actual = counterReducer(initialState, dataOutput());
    expect(actual.valueDistancet).toEqual(13);
  });
  it('should handle distanceSolution', () => {
    
    const actual = counterReducer(initialState, howitzerSelection(0));
    expect(actual.valueDistancet).toEqual(14);
  });
});

