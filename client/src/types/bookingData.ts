import { Status } from "./authData";

export interface IBookingData {
    eventId: string;
    userId: string;
    bookingCategory: string;
    bookingDate: Date;
    numberOfTickets: number;
    price : number
    totalPrice: number;
}

