import React from 'react'
//import styles from '@/styles/counter/Counter.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { increment, decrement,selectCount } from '@/modules/counter/counterSlice'

export function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
  
    return (
      <div>
        <div >
          <button
            
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span >{count}</span>
          <button
           
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    );
  }