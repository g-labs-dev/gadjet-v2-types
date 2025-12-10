import { Dates, RentalReservations, Rentals } from '../../model'
import { UsedCreditAmount } from '../../type'

type RENTAL_RESERVATION_ERROR = any // => 에러 타입 추후 정의 (i18n연관)

type PARAMS = { rentalId: number }

// 대관/대여 상세조회
// GET /rentals/0
export type GET_RENTAL_DETAIL_PARAMS = PARAMS
export type GET_RENTAL_DETAIL_RESPONSE = { rental: Rentals }
// ===========================

// 대관/대여 예약내역 상세 조회
// GET /rentals/0/rental-reservations/0
export type GET_RENTAL_RESERVATION_DETAIL_PARAMS = PARAMS & { rentalReservationId: number }
export type GET_RENTAL_RESERVATION_DETAIL_RESPONSE = { rentalReservation: RentalReservations }
// ===========================

// 대관/대여 예약내역 조회
// GET /rentals/0/rental-reservations
export type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS
export type GET_RENTAL_RESERVATIONS_QUERY = { date: string } // YYYY-MM-DD
export type GET_RENTAL_RESERVATIONS_RESPONSE = { rentalReservations: RentalReservations[] }
/**
 * 예약 없는날 빈 배열 채워서 전달
 */
// ===========================

// 대관/대여 예약
// POST /rentals/0/rental-reservations
export type RESERVE_RENTAL_PARAMS = PARAMS
export type RESERVE_RENTAL_BODY = {
  rentalReservation: {
    branchId: number
    tenantId: number
    userId: number
    date: string
    startTime: string
    endTime: string
    memo: string
    usedCreditAmount: UsedCreditAmount
  }
}
export type RESERVE_RENTAL_RESPONSE = { rentalReservations: RentalReservations; error?: RENTAL_RESERVATION_ERROR }
/**
 * 1. 크레딧 어떻게 사용할 지 프론트에서 입력
 * 2. 가능한지 서버에서 판단
 * 3. 사용 불가능 하면 에러
 */
// ===========================

// PUT /rentals/0/rental-reservations/0/additional-memo
export type UPDATE_RENTAL_RESERVATION_ADDITIONAL_MEMO_BODY = {
  rentalReservation: {
    additionalMemo: string
  }
}

// 대관/대여 예약 수정
// PUT /rentals/0/rental-reservations/0
export type UPDATE_RENTAL_RESERVATION_PARAMS = PARAMS & { rentalReservationId: number }
export type UPDATE_RENTAL_RESERVATION_BODY = {
  rentalReservation: Partial<{
    date: string
    startTime: string
    endTime: string
    memo: string
    usedCreditAmount: UsedCreditAmount
  }>
}
export type UPDATE_RENTAL_RESERVATION_RESPONSE = {
  rentalReservations: RentalReservations
  error?: RENTAL_RESERVATION_ERROR
}
// ===========================

// 대관/대여 예약 취소
// DEL /rentals/0/rental-reservations/0
export type CANCEL_RENTAL_RESERVATION_PARAMS = PARAMS & { rentalReservationId: number }
export type CANCEL_RENTAL_RESERVATION_RESPONSE = [number]
// ===========================

// 대관/대여 예약 권한 확인
// GET /branches/:branchId/check-rental-permission
export type CHECK_RENTAL_PERMISSION_PARAMS = { branchId: number }
export type CHECK_RENTAL_PERMISSION_RESPONSE = { 
  hasPermission: boolean
  message?: string
}
// ===========================
