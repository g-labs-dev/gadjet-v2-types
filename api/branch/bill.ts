import { Bills } from "../../model";
import { BillSummary, Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 청구서 목록 검색
// GET /hqs/0/branches/0/bills
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; startDate: [string, string]; spaceTypes: number[] }; // startDate: ['YYYY-MM-DD', 'YYYY-MM-DD']
export type GET_LIST_RESPONSE = { total: number; bills: Bills[] };
// ===========================

// 청구서 요약
// GET /hqs/0/branches/0/bills/summary
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = { query: string; startDate: [string, string]; spaceTypes: number[] }; // startDate: ['YYYY-MM-DD', 'YYYY-MM-DD']
export type GET_SUMMARY_RESPONSE = BillSummary;
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
export type EXPORT_QUERY = { startDate: [string, string] }; // YYYY-MM-DD
export type EXPORT_RESPONSE = any; // xlsx
// ===========================
