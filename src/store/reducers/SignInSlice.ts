import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISignedInUser } from 'types/interfaces/ISignedInUser';

interface ISignInState {
    data: ISignedInUser;
    loading: boolean;
}

const initialState: ISignInState = {
  data: {
    token: '',
    name: '',
    photo: '',
    id: '',
  },
  loading: false,
};

export const SignInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setSignInLoading(state: ISignInState, action: PayloadAction<boolean>): void {
      state.loading = action.payload;
    },
    setSignInData(state: ISignInState, action: PayloadAction<ISignedInUser>): void {
      state.data = action.payload;
    },
    clearState(state: ISignInState): void {
      state.data = initialState.data;
      state.loading = false;
    },
  },
});

export const { setSignInData, setSignInLoading, clearState } = SignInSlice.actions;
export default SignInSlice.reducer;
