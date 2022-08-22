import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './modules/dataSlice'

export default configureStore({
  reducer: {
    data:dataReducer
  },
});

// export type AppDispatch= typeof store.dispatch
// export type RoootState=ReturnType<typeof store.getState> 