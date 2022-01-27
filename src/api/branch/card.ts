import { BranchCards } from '../../model'
import { BillingCard, Result } from '../../type'

type PARAMS = { hqId: number; branchId: number }

// 지점 결제수단 조회
// GET /hqs/0/branches/0/cards
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = {}
export type GET_LIST_RESPONSE = { branchCards: BranchCards[] }
// ===========================

// 지점 결제수단 추가
// POST /hqs/0/branches/0/cards
export type ADD_PARAMS = PARAMS
export type ADD_BODY = { card: BillingCard }
export type ADD_RESPONSE = Result
// ===========================

// 지점 결제수단 제거
// DELETE /hqs/0/branches/0/cards/0
export type DELETE_PARAMS = PARAMS & { branchCardId: number }
export type DELETE_RESPONSE = Result
// ===========================

// 지점 결제수단 검증
// GET /hqs/0/branches/0/cards/0/validate
export type VALIDATE_PARAMS = PARAMS & { branchCardId: number }
export type VALIDATE_RESPONSE = Result
// ===========================

// 지점 결제수단 자동결제 변경
// PUT /hqs/0/branches/0/cards/0/active
export type UPDATE_BILLING_PARAMS = PARAMS & { branchCardId: number }
export type UPDATE_BILLING_RESPONSE = Result
// ===========================
