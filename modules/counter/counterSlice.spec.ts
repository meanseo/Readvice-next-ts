// import counterReducer, {
//     CounterState,
//     increment,
//     decrement,
//   } from './counterSlice';
  
// describe('counter reducer', () => {
//     const initialState: CounterState = {
//         value: 3,
//         status: 'idle',
//     };
    
//     it('should handle initial state', () => {
//         expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
//         value: 0,
//         status: 'idle',
//         });
//     });

//     it('should handle increment', () => {
//         const actual = counterReducer(initialState, increment());
//         expect(actual.value).toEqual(4);
//     });

//     it('should handle decrement', () => {
//         const actual = counterReducer(initialState, decrement());
//         expect(actual.value).toEqual(2);
//     });
// })