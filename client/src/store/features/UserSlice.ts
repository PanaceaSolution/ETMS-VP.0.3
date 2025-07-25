import { AuthApi } from '@/lib/api/userAPI';
import { IAuthData, IAuthInitialState, Status } from '@/types/authData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '../store';

const initialState : IAuthInitialState = {
    users: [],
    status: Status.LOADING
}

const userSlice = createSlice({
    name: 'user',       
    initialState,
    reducers : {
        setUsers(state:IAuthInitialState, action: PayloadAction<IAuthData[]>) {
            state.users = action.payload
    },
    setStatus(state:IAuthInitialState, action: PayloadAction<Status>) {
            state.status = action.payload;
        }
}
})

export const { setUsers, setStatus } = userSlice.actions;
export default userSlice.reducer;

export function createUser(data : IAuthData) {
    return async function createUserThunk(dispatch:ReturnType<typeof useAppDispatch>) {
        try {
            const response = await AuthApi.post('users' , data);
            if (response.status === 201) {
                dispatch(setUsers(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
        }
    }
}

export function loginUser(data: IAuthData) {
    return async function loginUserThunk(dispatch:ReturnType<typeof useAppDispatch>) {
        try {
            const response = await AuthApi.post('login',data);
            if (response.status === 200) {
                dispatch(setUsers(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
        }
    }
}
 