import {
  BranchAutomations,
  BranchBusinesses,
  BranchContractDocuments,
  Branches,
  BranchRentees,
  BranchSettlements,
  BranchSublets,
} from '../../model'
import {} from '../../type'

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

export type UPDATE_BUSINESS_PARAMS = PARAMS
export type UPDATE_BUSINESS_BODY = {
  business: Partial<BranchBusinesses>
}
export type UPDATE_BUSINESS_RESPONSE = [number]

export type UPDATE_SETTLEMENT_PARAMS = PARAMS
export type UPDATE_SETTLEMENT_BODY = {
  settlement: Partial<BranchSettlements>
}
export type UPDATE_SETTLEMENT_RESPONSE = [number]

export type UPDATE_CONTRACT_DOCUMENT_PARAMS = PARAMS
export type UPDATE_CONTRACT_DOCUMENT_BODY = {
  contractDocument: Partial<BranchContractDocuments>
}
export type UPDATE_CONTRACT_DOCUMENT_RESPONSE = [number]

export type UPDATE_SUBLET_PARAMS = PARAMS
export type UPDATE_SUBLET_BODY = {
  sublet: Partial<BranchSublets>
}
export type UPDATE_SUBLET_RESPONSE = [number]

export type UPDATE_RENTEE_PARAMS = PARAMS
export type UPDATE_RENTEE_BODY = {
  rentee: Partial<BranchRentees>
}
export type UPDATE_RENTEE_RESPONSE = [number]

export type UPDATE_AUTOMATION_PARAMS = PARAMS
export type UPDATE_AUTOMATION_BODY = {
  automation: Partial<BranchAutomations>
}
export type UPDATE_AUTOMATION_RESPONSE = [number]
