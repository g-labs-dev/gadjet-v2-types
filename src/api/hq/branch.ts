import {
  BranchAutomations,
  BranchBusinesses,
  BranchCards,
  BranchContractDocuments,
  Branches,
  BranchRentees,
  BranchSettlements,
  BranchSublets,
} from '../../model'
import { BillingCard, Result } from '../../type'

type PARAMS = { hqId: number }

// 운영사 지점 목록 조회
// GET /hqs/0/branches
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = {}
export type GET_LIST_RESPONSE = Branches[]
// ===========================

export type GET_DETAIL_PARAMS = PARAMS & { branchId: number }
export type GET_DETAIL_RESPONSE = Branches

// 운영사 지점 추가
// POST /hqs/0/branches
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  branch: Partial<Branches>
}
export type ADD_RESPONSE = Branches
// ===========================

// 지점 결제수단 추가
// POST /hqs/0/card
export type ADD_CARD_PARAMS = PARAMS
export type ADD_CARD_BODY = { card: BillingCard } &{ contact:string, email:string, name:string}
export type ADD_CARD_RESPONSE = BranchCards