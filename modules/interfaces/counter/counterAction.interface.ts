import { type } from "os";

export enum counterActionType{
    COUNTER_INCREMENT = 'COUNTER_INCREMENT',
    COUNTER_DECREMENT = 'COUNTER_DECREMENT',
    COUNTER_RESET = 'COUNTER_RESET'
}

export type CounterAction = CounterIncrement | CounterDecrement | CounterReset

export interface CounterIncrement{type: counterActionType.COUNTER_INCREMENT}
export interface CounterDecrement{type: counterActionType.COUNTER_DECREMENT}
export interface CounterReset{type: counterActionType.COUNTER_RESET}
