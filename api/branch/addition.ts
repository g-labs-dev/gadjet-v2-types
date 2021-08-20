import { Additions, Contracts } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 부가서비스 조회
// GET /hqs/0/branches/0/additions
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string };
export type GET_LIST_RESPONSE = { total: number; additions: Additions[] };
// ===========================

// 부가서비스 상세 조회
// GET /hqs/0/branches/0/additions/0
export type GET_DETAIL_PARAMS = PARAMS & { additionId: number };
export type GET_DETAIL_RESPONSE = Additions;
// ===========================

// 부가서비스 추가
// POST /hqs/0/branches/0/additions
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  addition: Pick<Additions, "name" | "price">;
};
export type ADD_RESPONSE = Additions;
// ===========================

// 부가서비스 수정
// PUT /hqs/0/branches/0/additions/0
export type UPDATE_PARAMS = PARAMS & { additionId: number };
export type UPDATE_BODY = {
  addition: Pick<Additions, "name" | "price">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 부가서비스 제거
// DEL /hqs/0/branches/0/additions/0
export type DELETE_PARAMS = PARAMS & { additionId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 부가서비스 계약 조회
// GET /hqs/0/branches/0/additions/0/contracts
export type GET_CONTRACTS_PARAMS = PARAMS & { additionId: number };
export type GET_CONTRACTS_QUERY = Pagination;
export type GET_CONTRACTS_RESPONSE = { total: number; contracts: Contracts[] };
// ===========================
