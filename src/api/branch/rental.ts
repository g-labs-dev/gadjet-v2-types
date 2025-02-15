import { RentalReservations, Rentals } from '../../model'
import { Pagination } from '../../type'
import { RentalReservationSearch, RentalSearch } from '../../type/search'

type PARAMS = { hqId: number; branchId: number }

// 대관대여 조회
// GET /hqs/0/branches/0/rentals
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & RentalSearch
export type GET_LIST_RESPONSE = { total: number; rentals: Rentals[] }
// ===========================

// 대관대여 상세 조회
// GET /hqs/0/branches/0/rentals/0
export type GET_DETAIL_PARAMS = PARAMS & { rentalId: number }
export type GET_DETAIL_RESPONSE = Rentals
// ===========================

// 대관대여 추가
// POST /hqs/0/branches/0/rentals
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  rental: Partial<Rentals>
}
export type ADD_RESPONSE = Rentals
// ===========================

// 대관대여 수정
// PUT /hqs/0/branches/0/rentals/0
export type UPDATE_PARAMS = PARAMS & { rentalId: number }
export type UPDATE_BODY = {
  rental: Partial<Rentals>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 대관대여 제거
// DEL /hqs/0/branches/0/rentals/0
export type DELETE_PARAMS = PARAMS & { rentalId: number }
export type DELETE_RESPONSE = [number]
// ===========================

// 대관대여 내역 조회
// GET /hqs/0/branches/0/rental-reservations
export type GET_RESERVATIONS_PARAMS = PARAMS
export type GET_RESERVATIONS_QUERY = Pagination & RentalReservationSearch
export type GET_RESERVATIONS_RESPONSE = { total: number; rentalReservations: RentalReservations[] }
// ===========================

// 대관대여 내역 추가
// POST /hqs/0/branches/0/rentals/0/rental-reservations
export type ADD_RESERVATION_PARAMS = PARAMS & { rentalId: number }
export type ADD_RESERVATION_BODY = {
  rentalReservation: Partial<RentalReservations>
}
export type ADD_RESERVATION_RESPONSE = RentalReservations
// ===========================

// PUT /rentals/0/rental-reservations/0/additional-memo
export type UPDATE_RENTAL_RESERVATION_ADDITIONAL_MEMO_BODY = {
  rentalReservation: {
    additionalMemo: string
  }
}
// ===========================

// 대관대여 내역 수정
// PUT /hqs/0/branches/0/rentals/0/rental-reservations/0
export type UPDATE_RESERVATION_PARAMS = PARAMS & { rentalId: number; rentalReservationId: number }
export type UPDATE_RESERVATION_BODY = {
  rentalReservation: Partial<RentalReservations>
}
export type UPDATE_RESERVATION_RESPONSE = [number]
// ===========================

// 대관대여 내역 제거
// DEL /hqs/0/branches/0/rentals/0/rental-reservations/0
export type DELETE_RESERVATION_PARAMS = PARAMS & { rentalId: number; rentalReservationId: number }
export type DELETE_RESERVATION_RESPONSE = [number]
// ===========================

// 대관대여 내역 내보내기
// GET /hqs/0/branches/0/rental-reservations/export
export type EXPORT_RESERVATIONS_PARAMS = PARAMS
export type EXPORT_RESERVATIONS_QUERY = { date: [string, string] }
export type EXPORT_RESERVATIONS_RESPONSE = Buffer
// ===========================
