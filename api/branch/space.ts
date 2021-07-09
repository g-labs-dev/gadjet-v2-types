import { Spaces } from "../../model";
import { Pagination, SpaceSummary } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 공간 조회
// GET /hqs/0/branches/0/spaces
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; usingFlag: boolean }; // usingFlag = 공실인지 아닌지 계약으로 판단
export type GET_LIST_RESPONSE = Spaces[];
// ===========================

// 공간 요약
// GET /hqs/0/branches/0/spaces/summary
export type GET_SUMMARY_PARAMS = PARAMS;
export type GET_SUMMARY_QUERY = { query: string; usingFlag: boolean };
export type GET_SUMMARY_RESPONSE = SpaceSummary;
// ===========================

// 공간 추가
// POST /hqs/0/branches/0/spaces
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  space: Pick<Spaces, "spaceTypeId" | "name" | "price" | "area" | "capacity" | "imageId">;
};
export type ADD_RESPONSE = Spaces;
// ===========================

// 공간 수정
// PUT /hqs/0/branches/0/spaces/0
export type UPDATE_PARAMS = PARAMS & { spaceId: number };
export type UPDATE_BODY = {
  space: Pick<Spaces, "spaceTypeId" | "name" | "price" | "area" | "capacity" | "imageId">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 공간 제거
// DEL /hqs/0/branches/0/spaces/0
export type DELETE_PARAMS = PARAMS & { spaceId: number };
export type DELETE_RESPONSE = [number];
// ===========================
