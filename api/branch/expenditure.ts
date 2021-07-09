import { Expenditure } from "../../model";
import { Pagination, ExpenditureSummary, ExpenditureType } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 지출 조회
// GET /hqs/0/branches/0/expenditure
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; expenditureTypes: ExpenditureType[] }; // query: memo
export type GET_LIST_RESPONSE = { total: number; expenditure: Expenditure[] };
// ===========================

// 지출 요약
// GET /hqs/0/branches/0/expenditure/summary
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = { query: string; expenditureTypes: ExpenditureType[] };
export type GET_SUMMARY_RESPONSE = ExpenditureSummary;
// ===========================

// 지출 내보내기
// GET /hqs/0/branches/0/expenditure/export
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = { query: string; expenditureTypes: ExpenditureType[] };
export type EXPORT_RESPONSE = any; // @@@@ xlsx
// ===========================

// 지출 추가
// POST /hqs/0/branches/0/expenditure
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  expenditure: Pick<Expenditure, "date" | "type" | "price" | "memo" | "managerId" | "managerName">;
};
export type ADD_RESPONSE = Expenditure;
// ===========================

// 지출 수정
// PUT /hqs/0/branches/0/expenditure/0
export type UPDATE_PARAMS = PARAMS & { expenditureId: number };
export type UPDATE_BODY = {
  expenditure: Pick<Expenditure, "date" | "type" | "price" | "memo" | "managerId" | "managerName">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 지출 제거
// DEL /hqs/0/branches/0/expenditure/0
export type DELETE_PARAMS = PARAMS & { expenditureId: number };
export type DELETE_RESPONSE = [number];
// ===========================
