import { BranchRoles } from '../../model'
import { Pagination } from '../../type'
import {} from '../../type'
import { BranchRoleSearch } from '../../type/search'

type PARAMS = { hqId: number; branchId: number }

// 권한 조회
// GET /hqs/0/branches/0/roles
export type GET_LIST_PARAMS = PARAMS & BranchRoleSearch
export type GET_LIST_QUERY = Pagination & { query: string }
export type GET_LIST_RESPONSE = BranchRoles[]
// ===========================

// 권한 조회
// GET /hqs/0/branches/0/roles/0
export type GET_DETAIL_PARAMS = PARAMS & { branchRoleId: number }
export type GET_DETAIL_RESPONSE = BranchRoles
// ===========================

// 권한 추가
// POST /hqs/0/branches/0/roles
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  role: BranchRoles
}
export type ADD_RESPONSE = BranchRoles
// ===========================

// 권한 수정
// PUT /hqs/0/branches/0/roles/0
export type UPDATE_PARAMS = PARAMS & { branchRoleId: number }
export type UPDATE_BODY = {
  role: BranchRoles
}
export type UPDATE_RESPONSE = [number]
// ===========================

// 권한 제거
// DEL /hqs/0/branches/0/roles/0
export type DELETE_PARAMS = PARAMS & { branchRoleId: number }
export type DELETE_RESPONSE = [number]
// ===========================

// 권한 초대
// POST /hqs/0/branches/0/roles/invite
export type INVITE_PARAMS = PARAMS
export type INVITE_BODY = { email: string; branchRole: Partial<BranchRoles> }
export type INVITE_RESPONSE = boolean
// ===========================
