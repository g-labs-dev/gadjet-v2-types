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

//지점 목록 조회
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_RESPONSE = Branches[]
// ===========================

export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  branch: Partial<Branches>
}
export type ADD_RESPONSE = Branches
// ===========================

export type ADD_BUSINESS_BODY = {
  branchBusiness: Partial<BranchBusinesses>
}
export type ADD_BUSINESS_RESPONSE = BranchBusinesses

// ===========================

export type ADD_SETTLEMENT_BODY = {
  branchSettlement: Partial<BranchSettlements>
}
export type ADD_SETTLEMENT_RESPONSE = BranchSettlements

// ===========================
export type ADD_CONTRACT_DOCUMENT_BODY = {
  branchContractDocument: Partial<BranchContractDocuments>
}
export type ADD_CONTRACT_DOCUMENT_RESPONSE = BranchContractDocuments

// ===========================
export type ADD_SUBLET_BODY = {
  branchSublet: Partial<BranchSublets>
}
export type ADD_SUBLET_RESPONSE = BranchSublets

// ===========================
export type ADD_RENTEE_BODY = {
  branchRentee: Partial<BranchRentees>
}
export type ADD_RENTEE_RESPONSE = BranchRentees

// ===========================
export type ADD_AUTOMATION_BODY = {
  branchAutomation: Partial<BranchAutomations>
}
export type ADD_AUTOMATION_RESPONSE = BranchAutomations

// ===========================

export type UPDATE_BUSINESS_PARAMS = { branchId: number }
export type UPDATE_BUSINESS_BODY = { branchBusiness: Partial<BranchBusinesses> }
export type UPDATE_BUSINESS_RESPONSE = BranchBusinesses
// ===========================

export type UPDATE_SETTLEMENT_PARAMS = { branchId: number }
export type UPDATE_SETTLEMENT_BODY = {
  branchSettlement: Partial<BranchSettlements>
}
export type UPDATE_SETTLEMENT_RESPONSE = BranchSettlements

// ===========================
export type UPDATE_CONTRACT_DOCUMENT_PARAMS = { branchId: number }
export type UPDATE_CONTRACT_DOCUMENT_BODY = {
  branchContractDocument: Partial<BranchContractDocuments>
}
export type UPDATE_CONTRACT_DOCUMENT_RESPONSE = BranchContractDocuments

// ===========================
export type UPDATE_SUBLET_PARAMS = { branchId: number }
export type UPDATE_SUBLET_BODY = {
  branchSublet: Partial<BranchSublets>
}
export type UPDATE_SUBLET_RESPONSE = BranchSublets

// ===========================
export type UPDATE_RENTEE_PARAMS = { branchId: number }
export type UPDATE_RENTEE_BODY = {
  branchRentee: Partial<BranchRentees>
}
export type UPDATE_RENTEE_RESPONSE = BranchRentees

// ===========================
export type UPDATE_AUTOMATION_PARAMS = { branchId: number }
export type UPDATE_AUTOMATION_BODY = {
  branchAutomation: Partial<BranchAutomations>
}
export type UPDATE_AUTOMATION_RESPONSE = BranchAutomations

// ===========================
