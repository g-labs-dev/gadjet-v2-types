import { BranchAutomations, BranchBusiness, BranchContractDocument, Branches, BranchRentee, BranchSettlement, BranchSublet } from "../../model";
import {} from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 지점 상세 조회
// GET /hqs/0/branches/0
export type GET_DETAIL_PARAMS = PARAMS;
export type GET_DETAIL_RESPONSE = Branches;
// ===========================

// 지점 수정
// PUT /hqs/0/branches/0
export type UPDATE_PARAMS = PARAMS;
export type UPDATE_BODY = {
  branch: Partial<Branches>;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 지점 사업자 수정
// PUT /hqs/0/branches/0/business
export type UPDATE_BUSINESS_PARAMS = PARAMS;
export type UPDATE_BUSINESS_BODY = {
  business: Partial<BranchBusiness>;
};
export type UPDATE_BUSINESS_RESPONSE = [number];
// ===========================

// 지점 정산 수정
// PUT /hqs/0/branches/0/settlement
export type UPDATE_SETTLEMENT_PARAMS = PARAMS;
export type UPDATE_SETTLEMENT_BODY = {
  settlement: Partial<BranchSettlement>;
};
export type UPDATE_SETTLEMENT_RESPONSE = [number];
// ===========================

// 지점 계약서 수정
// PUT /hqs/0/branches/0/contract-document
export type UPDATE_CONTRACT_DOCUMENT_PARAMS = PARAMS;
export type UPDATE_CONTRACT_DOCUMENT_BODY = {
  contractDocument: Partial<BranchContractDocument>;
};
export type UPDATE_CONTRACT_DOCUMENT_RESPONSE = [number];
// ===========================

// 지점 전대차 수정
// PUT /hqs/0/branches/0/sublet
export type UPDATE_SUBLET_PARAMS = PARAMS;
export type UPDATE_SUBLET_BODY = {
  sublet: Partial<BranchSublet>;
};
export type UPDATE_SUBLET_RESPONSE = [number];
// ===========================

// 지점 임대차 수정
// PUT /hqs/0/branches/0/rentee
export type UPDATE_RENTEE_PARAMS = PARAMS;
export type UPDATE_RENTEE_BODY = {
  rentee: Partial<BranchRentee>;
};
export type UPDATE_RENTEE_RESPONSE = [number];
// ===========================

// 청구서 자동화 설정
// PUT /hqs/0/branches/0/automation
export type UPDATE_AUTOMATION_PARAMS = PARAMS;
export type UPDATE_AUTOMATION_BODY = {
  automation: Partial<BranchAutomations>;
};
export type UPDATE_AUTOMATION_RESPONSE = [number];
// ===========================

// 팝빌 회원가입
//
// ===========================
