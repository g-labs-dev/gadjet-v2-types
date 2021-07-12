import { BranchRoles } from "../../model";
import {} from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 권한 조회
// GET /hqs/0/branches/0/roles
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_RESPONSE = BranchRoles[];
// ===========================

// 권한 추가
// POST /hqs/0/branches/0/roles
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  role: Omit<BranchRoles, "branchRoleId" | "hqId" | "branchId" | "branch" | "manager">;
};
export type ADD_RESPONSE = BranchRoles;
// ===========================

// 권한 수정
// PUT /hqs/0/branches/0/roles/0
export type UPDATE_PARAMS = PARAMS & { branchRoleId: number };
export type UPDATE_BODY = {
  role: Omit<BranchRoles, "branchRoleId" | "hqId" | "branchId" | "branch" | "manager">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 권한 제거
// DEL /hqs/0/branches/0/roles/0
export type DELETE_PARAMS = PARAMS & { branchRoleId: number };
export type DELETE_RESPONSE = [number];
// ===========================
