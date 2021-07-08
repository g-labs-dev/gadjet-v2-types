import { Bills } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 청구서 목록 검색
// GET /hqs/0/branches/0/bills
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; from: string; to: string; spaceTypes: number[] }; // startDate 기준 검색
export type GET_LIST_RESPONSE = { total: number; bills: Bills[] };
// ===========================

// 청구서 추가
// POST /hqs/0/branches/0/bills
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  bill: Pick<Bills, "contractId" | "tenantId" | "type" | "openDate" | "startDate" | "endDate" | "paymentStartDate" | "paymentEndDate" | "spaces" | "additions" | "surcharges" | "memo" | "manualFlag">;
};
export type ADD_RESPONSE = Bills;
// ===========================

// 청구서 수정
// PUT /hqs/0/branches/0/bills/0
export type UPDATE_PARAMS = PARAMS & { billId: number };
export type UPDATE_BODY = { bill: Partial<Bills> };
export type UPDATE_RESPONSE = [number];
// ===========================

// 청구서 제거
// DEL /hqs/0/branches/0/bills/0
export type DELETE_PARAMS = PARAMS & { billId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 청구서 내보내기
// GET /hqs/0/branches/0/bills/export
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = { from: string; to: string }; // YYYY-MM-DD
export type EXPORT_RESPONSE = any; // xlsx
// ===========================
