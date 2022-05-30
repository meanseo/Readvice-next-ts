import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector
} from 'react-redux'

import type {RooteState, AppDispatch} from '../modules/store'

export const useAppDispatch = () =>useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector