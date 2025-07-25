import { Status } from "@/types/authData";
import { IBookingData } from "@/types/bookingData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../store";
import { AuthApi } from "@/lib/api/userAPI";

export interface IBookingInitialState {
    bookings: IBookingData[];
    status: Status;
}

const initialState : IBookingInitialState= {
    bookings: [],
    status : Status.LOADING
}

const bookingSlice = createSlice({
    name: 'booking',    
    initialState,
    reducers: {
        setBookings(state, action: PayloadAction<IBookingData[]>) {    
            state.bookings = action.payload;
        },
        setStatus(state, action: PayloadAction<Status>) {
            state.status = action.payload;
        }
    }
})

export const { setBookings, setStatus } = bookingSlice.actions;
export default bookingSlice.reducer;

export function createBooking(data: IBookingData) {
    return async function createBookingThunk(dispatch: ReturnType<typeof useAppDispatch>) {
        try {
            const response = await AuthApi.post('bookings', data);
            if (response.status === 201) {
                dispatch(setBookings(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
        }
    }
}

export function fetchBookings() {
    return async function fetchBookingsThunk(dispatch: ReturnType<typeof useAppDispatch>) {
        try {
            const response = await AuthApi.get('bookings');
            if (response.status === 200) {
                dispatch(setBookings(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
        }
    }
}