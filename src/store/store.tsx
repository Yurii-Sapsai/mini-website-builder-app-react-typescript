import { configureStore } from '@reduxjs/toolkit';
import workSpaceSlice from './workSpaceSlice/workSpaceSlice';

export const store = configureStore({
    reducer: {
        workSpace: workSpaceSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;