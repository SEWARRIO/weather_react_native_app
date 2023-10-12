// types.d.ts
import { AuthState } from './reducers/authSlice'; // Adjust the path accordingly
import { RootState } from 'react-redux';
declare module 'react-redux' {
  interface RootState {
    auth: AuthState;
    // Add other slices if any
  }
}
