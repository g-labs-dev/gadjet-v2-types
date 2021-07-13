import { RentalReservations, Rentals } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 대관대여 조회
// GET /hqs/0/branches/0/rentals
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string };
export type GET_LIST_RESPONSE = { total: number; rentals: Rentals[] };
// ===========================

// 대관대여 추가
// POST /hqs/0/branches/0/rentals
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  rental: Pick<Rentals, "price" | "name" | "description" | "startTime" | "endTime" | "availableCreditType" | "weekendFlag" | "shareFlag" | "imageId">;
};
export type ADD_RESPONSE = Rentals;
// ===========================

// 대관대여 수정
// PUT /hqs/0/branches/0/rentals/0
export type UPDATE_PARAMS = PARAMS & { rentalId: number };
export type UPDATE_BODY = {
  rental: Pick<Rentals, "price" | "name" | "description" | "startTime" | "endTime" | "availableCreditType" | "weekendFlag" | "shareFlag" | "imageId">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 대관대여 제거
// DEL /hqs/0/branches/0/rentals/0
export type DELETE_PARAMS = PARAMS & { rentalId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 대관대여 내역 조회
// GET /hqs/0/branches/0/rental-resevations
export type GET_RESERVATIONS_PARAMS = PARAMS;
export type GET_RESERVATIONS_QUERY = Pagination & { date: [string, string]; rentalIds: number[] };
export type GET_RESERVATIONS_RESPONSE = { total: number; rentalReservations: RentalReservations[] };
// ===========================

// 대관대여 내역 추가
// POST /hqs/0/branches/0/rentals/0/rental-resevations
export type ADD_RESERVATION_PARAMS = PARAMS & { rentalId: number };
export type ADD_RESERVATION_BODY = {
  rental: Pick<RentalReservations, "tenantId" | "userId" | "date" | "startTime" | "endTime" | "memo" | "usedCreditAmount" | "managerFlag">;
};
export type ADD_RESERVATION_RESPONSE = RentalReservations;
// ===========================

// 대관대여 내역 수정
// PUT /hqs/0/branches/0/rentals/0/rental-resevations/0
export type UPDATE_RESERVATION_PARAMS = PARAMS & { rentalId: number; rentalReservationId: number };
export type UPDATE_RESERVATION_BODY = {
  rental: Pick<RentalReservations, "tenantId" | "userId" | "date" | "startTime" | "endTime" | "memo" | "usedCreditAmount" | "managerFlag">;
};
export type UPDATE_RESERVATION_RESPONSE = [number];
// ===========================

// 대관대여 내역 제거
// DEL /hqs/0/branches/0/rentals/0/rental-resevations/0
export type DELETE_RESERVATION_PARAMS = PARAMS & { rentalId: number; rentalReservationId: number };
export type DELETE_RESERVATION_RESPONSE = [number];
// ===========================

// 대관대여 내역 내보내기
// GET /hqs/0/branches/0/rental-reservations
export type EXPORT_RESERVATIONS_PARAMS = PARAMS;
export type EXPORT_RESERVATIONS_QUERY = { date: [string, string] };
export type EXPORT_RESERVATIONS_RESPONSE = any; // @@@@ xlsx
// ===========================
