import { Expenditures } from '../../model'
import { Pagination, ExpenditureSummary, ExpenditureType } from '../../type'

type PARAMS = { hqId: number; branchId: number }

// 지출 조회
// GET /hqs/0/branches/0/expenditure
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & { query: string; expenditureTypes: ExpenditureType[]; date: [string, string] } // query: memo
export type GET_LIST_RESPONSE = { total: number; expenditure: Expenditures[] }
// ===========================

// 지출 상세 조회
// GET /hqs/0/branches/0/expenditure
export type GET_DETAIL_PARAMS = PARAMS & { expenditureId: number }
export type GET_DETAIL_RESPONSE = Expenditures
// ===========================

// 지출 요약
// GET /hqs/0/branches/0/expenditure/summary
export type GET_SUMMARY_PARAMS = PARAMS
export type GET_SUMMARY_QUERY = { query: string; expenditureTypes: ExpenditureType[]; date: [string, string] }
export type GET_SUMMARY_RESPONSE = ExpenditureSummary
// ===========================

// 지출 내보내기
// GET /hqs/0/branches/0/expenditure/export
export type EXPORT_PARAMS = PARAMS
export type EXPORT_QUERY = { date: [string, string] }
export type EXPORT_RESPONSE = Buffer
// ===========================

// 지출 추가
// POST /hqs/0/branches/0/expenditure
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  expenditure: Partial<Expenditures>
}
export type ADD_RESPONSE = Expenditures
// ===========================

// 지출 수정
// PUT /hqs/0/branches/0/expenditure/0
export type UPDATE_PARAMS = PARAMS & { expenditureId: number }
export type UPDATE_BODY = {
  expenditure: Partial<Expenditures>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 지출 제거
// DEL /hqs/0/branches/0/expenditure/0
export type DELETE_PARAMS = PARAMS & { expenditureId: number }
export type DELETE_RESPONSE = [number]
// ===========================
