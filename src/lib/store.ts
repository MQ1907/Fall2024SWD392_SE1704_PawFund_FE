import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../lib/features/auth/authSlice';
import petReducer from "../lib/features/pet/petSlice"
import healthCheckReducer  from "../lib/features/pet/HealthCheckSlice"
import userReducer from "../lib/features/user/userSlice"
import adoptionReducer  from "../lib/features/adopt/adoptSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authReducer,
         pets: petReducer,
         healthChecks: healthCheckReducer,
         user: userReducer, 
         adoption: adoptionReducer, 
    }
  })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']