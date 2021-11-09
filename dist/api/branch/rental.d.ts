import { RentalReservations, Rentals } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    rentals: Rentals[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    rentalId: number;
};
export declare type GET_DETAIL_RESPONSE = Rentals;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    rental: Pick<Rentals, 'price' | 'name' | 'description' | 'startTime' | 'endTime' | 'availableCreditType' | 'weekendFlag' | 'shareFlag' | 'imageId'>;
};
export declare type ADD_RESPONSE = Rentals;
export declare type UPDATE_PARAMS = PARAMS & {
    rentalId: number;
};
export declare type UPDATE_BODY = {
    rental: Pick<Rentals, 'price' | 'name' | 'description' | 'startTime' | 'endTime' | 'availableCreditType' | 'weekendFlag' | 'shareFlag' | 'imageId'>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    rentalId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_RESERVATIONS_PARAMS = PARAMS;
export declare type GET_RESERVATIONS_QUERY = Pagination & {
    date: [string, string];
    rentalIds: number[];
};
export declare type GET_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
export declare type ADD_RESERVATION_PARAMS = PARAMS & {
    rentalId: number;
};
export declare type ADD_RESERVATION_BODY = {
    rentalReservation: Pick<RentalReservations, 'tenantId' | 'userId' | 'date' | 'startTime' | 'endTime' | 'memo' | 'usedCreditAmount' | 'managerFlag'>;
};
export declare type ADD_RESERVATION_RESPONSE = RentalReservations;
export declare type UPDATE_RESERVATION_PARAMS = PARAMS & {
    rentalId: number;
    rentalReservationId: number;
};
export declare type UPDATE_RESERVATION_BODY = {
    rentalReservation: Pick<RentalReservations, 'tenantId' | 'userId' | 'date' | 'startTime' | 'endTime' | 'memo' | 'usedCreditAmount' | 'managerFlag'>;
};
export declare type UPDATE_RESERVATION_RESPONSE = [number];
export declare type DELETE_RESERVATION_PARAMS = PARAMS & {
    rentalId: number;
    rentalReservationId: number;
};
export declare type DELETE_RESERVATION_RESPONSE = [number];
export declare type EXPORT_RESERVATIONS_PARAMS = PARAMS;
export declare type EXPORT_RESERVATIONS_QUERY = {
    date: [string, string];
};
export declare type EXPORT_RESERVATIONS_RESPONSE = any;
export {};
//# sourceMappingURL=rental.d.ts.map