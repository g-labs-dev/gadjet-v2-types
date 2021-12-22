import { Bills } from '../../model'
import { BillSummary, ContractReceiver, Pagination, Result } from '../../type'

type PARAMS = { hqId: number; branchId: number }

// 청구서 목록 검색
// GET /hqs/0/branches/0/bills
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & { query: string; startDate: [string, string]; spaceTypes: number[] } // startDate: ['YYYY-MM-DD', 'YYYY-MM-DD']
export type GET_LIST_RESPONSE = { total: number; bills: Bills[] }
// ===========================

// 청구서 상세 검색
// GET /hqs/0/branches/0/bills/0
export type GET_DETAIL_PARAMS = PARAMS & { billId: number }
export type GET_DETAIL_RESPONSE = Bills
// ===========================

// 청구서 요약
// GET /hqs/0/branches/0/bills/summary
export type GET_SUMMARY_PARAMS = PARAMS
export type GET_SUMMARY_QUERY = { query: string; startDate: [string, string]; spaceTypes: number[] } // startDate: ['YYYY-MM-DD', 'YYYY-MM-DD']
export type GET_SUMMARY_RESPONSE = BillSummary
// ===========================

// 청구서 추가
// POST /hqs/0/branches/0/bills
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  bill: Partial<Bills>
}
export type ADD_RESPONSE = Bills
// ===========================

// 청구서 수정
// PUT /hqs/0/branches/0/bills/0
export type UPDATE_PARAMS = PARAMS & { billId: number }
export type UPDATE_BODY = { bill: Partial<Bills> }
export type UPDATE_RESPONSE = [number]
// ===========================

// 청구서 제거
// DEL /hqs/0/branches/0/bills/0
export type DELETE_PARAMS = PARAMS & { billId: number }
export type DELETE_RESPONSE = [number]
// ===========================

// 청구서 내보내기
// GET /hqs/0/branches/0/bills/export
export type EXPORT_PARAMS = PARAMS
export type EXPORT_QUERY = { startDate: [string, string] } // YYYY-MM-DD
export type EXPORT_RESPONSE = any // xlsx
// ===========================

// 청구서 발송
// POST /hqs/0/branches/0/bills/0/send
export type SEND_PARAMS = PARAMS & { billId: number }
export type SEND_BODY = {
  receivers: ContractReceiver['bill']
}
export type SEND_RESPONSE = any // 발송결과
// ===========================

// 보증금 청구서 보증금 반환
// PUT /hqs/0/branches/0/bills/0/deposit-refund
export type REFUND_DEPOSIT_PARAMS = PARAMS & { billId: number }
export type REFUND_DEPOSIT_BODY = { price: number }
export type REFUND_DEPOSIT_RESPONSE = Result
// ===========================
