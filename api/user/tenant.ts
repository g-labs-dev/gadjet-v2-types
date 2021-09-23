import { Tenants, TenantRoles, Contracts, Users, Hqs } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { tenantId: number };

// 상세 조회
// GET /tenants/0
export type GET_DETAIL_PARAMS = PARAMS;
export type GET_DETAIL_RESPONSE = { tenant: Tenants };
// ===========================

// 운영사
// GET /tenants/0/hqs
export type GET_HQS_PARAMS = PARAMS;
export type GET_HQS_QUERY = {};
export type GET_HQS_RESPONSE = { hqs: Hqs[] };
/**
 * 1. 계약 된 지점의 운영사 아이디 조회
 * 2. 운영사 아아디로 운영사 조회 (계약이 없는 지점도 포함해서 조회)
 * 3. Contracts => { attributes: ['contractId', 'tenantId', 'status'] }
 *    const hqs = [
 *      {
 *        hqId: 1,
 *        name: '운영사1',
 *        ...,
 *        branches: [
 *          { branchId: 1, name: '지점1', contracts: [] },
 *          { branchId: 2, name: '지점2', contracts: [{ ... }] },
 *          ...
 *        ],
 *      }
 *    ]
 */
// ===========================

// 계약목록 조회
// GET /tenants/0/contracts
export type GET_CONTRACTS_PARAMS = PARAMS;
export type GET_CONTRACTS_QUERY = Pagination & {};
export type GET_CONTRACTS_RESPONSE = { total: number; contracts: Contracts[] };
// ===========================

// 멤버 조회
// GET /tenants/0/members
export type GET_MEMBERS_PARAMS = PARAMS;
export type GET_MEMBERS_QUERY = Pagination & {};
export type GET_MEMBERS_RESPONSE = { total: number; members: Users[] };
/**
 * Users.tenantRoles 포함
 */
// ===========================

// 멤버 권한 초대코드 발송
// POST /tenants/0/code
export type SEND_MEMBER_CODE_PARAMS = PARAMS;
export type SEND_MEMBER_CODE_BODY = { contact: string };
export type SEND_MEMBER_CODE_RESPONSE = boolean;
// ===========================

// 멤버 권한 수정
// PUT /tenants/0/roles/0
export type UPDATE_MEMBER_ROLE_PARAMS = PARAMS & { tenantRoleId: number };
export type UPDATE_MEMBER_ROLE_BODY = { role: Partial<TenantRoles> };
export type UPDATE_MEMBER_ROLE_RESPONSE = [number];
// ===========================

// 멤버 권한 제거(멤버 제거)
// DEL /tenants/0/roles/0
export type DELETE_MEMBER_ROLE_PARAMS = PARAMS & { tenantRoleId: number };
export type DELETE_MEMBER_ROLE_RESPONSE = [number];
// ===========================
