/// <reference types="node" />
import { RentalReservations, Rentals } from '../../model';
import { Pagination } from '../../type';
import { RentalReservationSearch, RentalSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & RentalSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    rentals: Rentals[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    rentalId: number;
};
export type GET_DETAIL_RESPONSE = Rentals;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    rental: Partial<Rentals>;
};
export type ADD_RESPONSE = Rentals;
export type UPDATE_PARAMS = PARAMS & {
    rentalId: number;
};
export type UPDATE_BODY = {
    rental: Partial<Rentals>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    rentalId: number;
};
export type DELETE_RESPONSE = [number];
export type GET_RESERVATIONS_PARAMS = PARAMS;
export type GET_RESERVATIONS_QUERY = Pagination & RentalReservationSearch;
export type GET_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
export type ADD_RESERVATION_PARAMS = PARAMS & {
    rentalId: number;
};
export type ADD_RESERVATION_BODY = {
    rentalReservation: Partial<RentalReservations>;
};
export type ADD_RESERVATION_RESPONSE = RentalReservations;
export type UPDATE_RENTAL_RESERVATION_ADDITIONAL_MEMO_BODY = {
    rentalReservation: {
        additionalMemo: string;
    };
};
export type UPDATE_RESERVATION_PARAMS = PARAMS & {
    rentalId: number;
    rentalReservationId: number;
};
export type UPDATE_RESERVATION_BODY = {
    rentalReservation: Partial<RentalReservations>;
};
export type UPDATE_RESERVATION_RESPONSE = [number];
export type DELETE_RESERVATION_PARAMS = PARAMS & {
    rentalId: number;
    rentalReservationId: number;
};
export type DELETE_RESERVATION_RESPONSE = [number];
export type EXPORT_RESERVATIONS_PARAMS = PARAMS;
export type EXPORT_RESERVATIONS_QUERY = {
    date: [string, string];
};
export type EXPORT_RESERVATIONS_RESPONSE = Buffer;
export {};
//# sourceMappingURL=rental.d.ts.map