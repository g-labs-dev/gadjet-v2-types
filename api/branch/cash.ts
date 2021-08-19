import { Cash } from "../../model";
import { Pagination, CashSummary } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 현금 조회
// GET /hqs/0/branches/0/cash
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; date: [string, string] }; // query: memo
export type GET_LIST_RESPONSE = { total: number; cash: Cash[] };
// ===========================

// 현금 조회
// GET /hqs/0/branches/0/cash/0
export type GET_DETAIL_PARAMS = PARAMS & { cashId: number };
export type GET_DETAIL_RESPONSE = Cash;
// ===========================

// 현금 요약
// GET /hqs/0/branches/0/cash/summary
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = {};
export type GET_SUMMARY_RESPONSE = CashSummary;
// ===========================

// 현금 내보내기
// GET /hqs/0/branches/0/cash/export
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = { date: [string, string] };
export type EXPORT_RESPONSE = any; // @@@@ xlsx
// ===========================

// 현금 추가
// POST /hqs/0/branches/0/cash
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  cash: Pick<Cash, "date" | "price" | "memo" | "managerId" | "managerName">;
};
export type ADD_RESPONSE = Cash;
// ===========================

// 현금 수정
// PUT /hqs/0/branches/0/cash/0
export type UPDATE_PARAMS = PARAMS & { cashId: number };
export type UPDATE_BODY = {
  cash: Pick<Cash, "date" | "price" | "memo" | "managerId" | "managerName">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 현금 제거
// DEL /hqs/0/branches/0/cash/0
export type DELETE_PARAMS = PARAMS & { cashId: number };
export type DELETE_RESPONSE = [number];
// ===========================
