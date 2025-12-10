import { RentalReservations, Rentals } from '../../model';
import { UsedCreditAmount } from '../../type';
type RENTAL_RESERVATION_ERROR = any;
type PARAMS = {
    rentalId: number;
};
export type GET_RENTAL_DETAIL_PARAMS = PARAMS;
export type GET_RENTAL_DETAIL_RESPONSE = {
    rental: Rentals;
};
export type GET_RENTAL_RESERVATION_DETAIL_PARAMS = PARAMS & {
    rentalReservationId: number;
};
export type GET_RENTAL_RESERVATION_DETAIL_RESPONSE = {
    rentalReservation: RentalReservations;
};
export type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS;
export type GET_RENTAL_RESERVATIONS_QUERY = {
    date: string;
};
export type GET_RENTAL_RESERVATIONS_RESPONSE = {
    rentalReservations: RentalReservations[];
};
/**
 * 예약 없는날 빈 배열 채워서 전달
 */
export type RESERVE_RENTAL_PARAMS = PARAMS;
export type RESERVE_RENTAL_BODY = {
    rentalReservation: {
        branchId: number;
        tenantId: number;
        userId: number;
        date: string;
        startTime: string;
        endTime: string;
        memo: string;
        usedCreditAmount: UsedCreditAmount;
    };
};
export type RESERVE_RENTAL_RESPONSE = {
    rentalReservations: RentalReservations;
    error?: RENTAL_RESERVATION_ERROR;
};
/**
 * 1. 크레딧 어떻게 사용할 지 프론트에서 입력
 * 2. 가능한지 서버에서 판단
 * 3. 사용 불가능 하면 에러
 */
export type UPDATE_RENTAL_RESERVATION_ADDITIONAL_MEMO_BODY = {
    rentalReservation: {
        additionalMemo: string;
    };
};
export type UPDATE_RENTAL_RESERVATION_PARAMS = PARAMS & {
    rentalReservationId: number;
};
export type UPDATE_RENTAL_RESERVATION_BODY = {
    rentalReservation: Partial<{
        date: string;
        startTime: string;
        endTime: string;
        memo: string;
        usedCreditAmount: UsedCreditAmount;
    }>;
};
export type UPDATE_RENTAL_RESERVATION_RESPONSE = {
    rentalReservations: RentalReservations;
    error?: RENTAL_RESERVATION_ERROR;
};
export type CANCEL_RENTAL_RESERVATION_PARAMS = PARAMS & {
    rentalReservationId: number;
};
export type CANCEL_RENTAL_RESERVATION_RESPONSE = [number];
export type CHECK_RENTAL_PERMISSION_PARAMS = {
    branchId: number;
};
export type CHECK_RENTAL_PERMISSION_RESPONSE = {
    hasPermission: boolean;
    message?: string;
};
export {};
//# sourceMappingURL=rental.d.ts.map