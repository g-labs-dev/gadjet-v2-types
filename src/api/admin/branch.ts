import {
  BranchAutomations,
  BranchBusinesses,
  BranchContractDocuments,
  Branches,
  BranchRentees,
  BranchSettlements,
  BranchSublets,
} from '../../model'

type PARAMS = { hqId: number }

// 지점 상세 조회
// GET /hqs/0/branches/0
export type GET_DETAIL_PARAMS = PARAMS & { branchId: number }
export type GET_DETAIL_RESPONSE = Branches
// ===========================

// 지점 목록 조회
// GET /hqs/0/branches
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_RESPONSE = Branches[]
// ===========================

// 지점 추가
// POST /hqs/0/branches
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  branch: Partial<Branches>
}
export type ADD_RESPONSE = Branches
// ===========================

// 지점 수정
// PUT /hqs/0/branches/0
export type UPDATE_PARAMS = PARAMS & { branchId: number }
export type UPDATE_BODY = {
  branch: Partial<Branches>
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 지점 사업자 추가
// POST /hqs/0/branches/0/business
export type ADD_BUSINESS_PARAMS = PARAMS & { branchId: number }
export type ADD_BUSINESS_BODY = {
  branchBusiness: Partial<BranchBusinesses>
}
export type ADD_BUSINESS_RESPONSE = BranchBusinesses
// ===========================

// 지점 정산 추가
// POST /hqs/0/branches/0/settlement
export type ADD_SETTLEMENT_PARAMS = PARAMS & { branchId: number }
export type ADD_SETTLEMENT_BODY = {
  branchSettlement: Partial<BranchSettlements>
}
export type ADD_SETTLEMENT_RESPONSE = BranchSettlements
// ===========================

// 지점 계약서 추가
// POST /hqs/0/branches/0/contract-document
export type ADD_CONTRACT_DOCUMENT_PARAMS = PARAMS & { branchId: number }
export type ADD_CONTRACT_DOCUMENT_BODY = {
  branchContractDocument: Partial<BranchContractDocuments>
}
export type ADD_CONTRACT_DOCUMENT_RESPONSE = BranchContractDocuments
// ===========================

// 지점 전대차 추가
// POST /hqs/0/branches/0/sublet
export type ADD_SUBLET_PARAMS = PARAMS & { branchId: number }
export type ADD_SUBLET_BODY = {
  branchSublet: Partial<BranchSublets>
}
export type ADD_SUBLET_RESPONSE = BranchSublets
// ===========================

// 지점 임대 추가
// POST /hqs/0/branches/0/rentee
export type ADD_RENTEE_PARAMS = PARAMS & { branchId: number }
export type ADD_RENTEE_BODY = {
  branchRentee: Partial<BranchRentees>
}
export type ADD_RENTEE_RESPONSE = BranchRentees
// ===========================

// 지점 자동화 설정 추가
// POST /hqs/0/branches/0/automation
export type ADD_AUTOMATION_PARAMS = PARAMS & { branchId: number }
export type ADD_AUTOMATION_BODY = {
  branchAutomation: Partial<BranchAutomations>
}
export type ADD_AUTOMATION_RESPONSE = BranchAutomations
// ===========================

// 지점 사업자 조회
// GET /hqs/0/branches/0/business
export type GET_BUSINESS_PARAMS = PARAMS & { branchId: number }
export type GET_BUSINESS_RESPONSE = BranchBusinesses
// ===========================

// 지점 정산 조회
// GET /hqs/0/branches/0/
export type GET_SETTLEMENT_PARAMS = PARAMS & { branchId: number }
export type GET_SETTLEMENT_RESPONSE = BranchSettlements
// ===========================

//지점 계약서 조회
// GET /hqs/0/branches/0/
export type GET_CONTRACT_DOCUMENT_PARAMS = PARAMS & { branchId: number }
export type GET_CONTRACT_DOCUMENT_RESPONSE = BranchContractDocuments
// ===========================

//지점 전대차 조회
// GET /hqs/0/branches/0/
export type GET_SUBLET_PARAMS = PARAMS & { branchId: number }
export type GET_SUBLET_RESPONSE = BranchSublets
// ===========================

// 지점 임대차 조회
// GET /hqs/0/branches/0/rentee
export type GET_RENTEE_PARAMS = PARAMS & { branchId: number }
export type GET_RENTEE_RESPONSE = BranchRentees
// ===========================

// 지점 자동화 조회
// GET /hqs/0/branches/0/automations
export type GET_AUTOMATION_PARAMS = PARAMS & { branchId: number }
export type GET_AUTOMATION_RESPONSE = BranchAutomations
// ===========================

// 지점 사업자 수정
// PUT /hqs/0/branches/0/business
export type UPDATE_BUSINESS_PARAMS = { branchId: number }
export type UPDATE_BUSINESS_BODY = { branchBusiness: Partial<BranchBusinesses> }
export type UPDATE_BUSINESS_RESPONSE = [number]
// ===========================

// 지점 정산 수정
// PUT /hqs/0/branches/0/settlement
export type UPDATE_SETTLEMENT_PARAMS = { branchId: number }
export type UPDATE_SETTLEMENT_BODY = {
  branchSettlement: Partial<BranchSettlements>
}
export type UPDATE_SETTLEMENT_RESPONSE = [number]
// ===========================

// 지점 계약서 수정
// PUT /hqs/0/branches/0/contract-document
export type UPDATE_CONTRACT_DOCUMENT_PARAMS = { branchId: number }
export type UPDATE_CONTRACT_DOCUMENT_BODY = {
  branchContractDocument: Partial<BranchContractDocuments>
}
export type UPDATE_CONTRACT_DOCUMENT_RESPONSE = [number]
// ===========================

// 지점 전대차 수정
// PUT /hqs/0/branches/0/sublet
export type UPDATE_SUBLET_PARAMS = { branchId: number }
export type UPDATE_SUBLET_BODY = {
  branchSublet: Partial<BranchSublets>
}
export type UPDATE_SUBLET_RESPONSE = [number]
// ===========================

// 지점 임대차 수정
// PUT /hqs/0/branches/0/rentee
export type UPDATE_RENTEE_PARAMS = { branchId: number }
export type UPDATE_RENTEE_BODY = {
  branchRentee: Partial<BranchRentees>
}
export type UPDATE_RENTEE_RESPONSE = [number]
// ===========================

// 지점 자동화 설정
// PUT /hqs/0/branches/0/automations
export type UPDATE_AUTOMATION_PARAMS = { branchId: number }
export type UPDATE_AUTOMATION_BODY = {
  branchAutomation: Partial<BranchAutomations>
}
export type UPDATE_AUTOMATION_RESPONSE = [number]
// ===========================
