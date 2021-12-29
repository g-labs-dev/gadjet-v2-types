import { Payments } from '../../model'
import { Pagination, PaymentStatus, PaymentSummary, PaymentType, Result } from '../../type'

type PARAMS = { hqId: number; branchId: number }

// 결제내역 조회
// GET /hqs/0/branches/0/payments
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & {
  query: string
  paymentType: PaymentType[]
  paymentStatus: PaymentStatus[]
  date: [string, string]
}
export type GET_LIST_RESPONSE = { total: number; payments: Payments[] }
// ===========================

// 결제내역 상세조회
// GET /hqs/0/branches/0/payments/0
export type GET_DETAIL_PARAMS = PARAMS & { paymentId: number }
export type GET_DETAIL_RESPONSE = Payments
// ===========================

// 결제내역 추가
// POST /hqs/0/branches/0/payments
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  payment: Partial<Payments>
}
export type ADD_RESPONSE = Payments
// ===========================

// 결제내역 수정
// PUT /hqs/0/branches/0/payments/0
export type UPDATE_PARAMS = PARAMS & { paymentId: number }
export type UPDATE_BODY = {
  payment: Partial<Payments>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 결제내역 제거
// DELETE /hqs/0/branches/0/payments/0
export type DELETE_PARAMS = PARAMS & { paymentId: number }
export type DELETE_RESPONSE = [number]
// ===========================

// 결제내역 요약
// GET /hqs/0/branches/0/payments
export type GET_SUMMARY_PARAMS = PARAMS
export type GET_SUMMARY_QUERY = { query: string; paymentType: PaymentType[]; date: [string, string] }
export type GET_SUMMARY_RESPONSE = PaymentSummary
// ===========================

// 결제내역 내보내기
// GET /hqs/0/branches/0/payments/export
export type EXPORT_PARAMS = PARAMS
export type EXPORT_QUERY = { query: string; paymentType: PaymentType[]; paymentStatus: PaymentStatus[] }
export type EXPORT_RESPONSE = any // @@@@ xlsx
// ===========================

// 결제내역 매출확정
// PUT /hqs/0/branches/0/payments/0/confirm
export type CONFIRM_PARAMS = PARAMS & { paymentId: number }
export type CONFIRM_RESPONSE = [number]
// ===========================

// 결제내역 환불
// PUT /hqs/0/branches/0/payments/0/refund
export type REFUND_PARAMS = PARAMS & { paymentId: number }
export type REFUND_BODY = {
  account?: { number: string; bankCode: string; holder: string }
}
export type REFUND_RESPONSE = Result
// ===========================

// 보증금 결제내역 내보내기
// GET /hqs/0/branches/0/payments/deposit/export
export type EXPORT_DEPOSIT_PAYMENTS_PARAMS = PARAMS
export type EXPORT_DEPOSIT_PAYMENTS_QUERY = { contractRange: [string, string] }
export type EXPORT_DEPOSIT_PAYMENTS_RESPONSE = ArrayBuffer
// ===========================
