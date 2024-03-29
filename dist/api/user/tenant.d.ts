import { Tenants, TenantRoles, Contracts, Users, Hqs, RentalReservations, Bills, Events, Notices } from '../../model';
import { Pagination } from '../../type';
type PARAMS = {
    tenantId: number;
};
export type GET_DETAIL_PARAMS = PARAMS;
export type GET_DETAIL_RESPONSE = {
    tenant: Tenants;
};
export type GET_HQS_PARAMS = PARAMS;
export type GET_HQS_QUERY = {};
export type GET_HQS_RESPONSE = {
    hqs: Hqs[];
};
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
export type GET_CONTRACTS_PARAMS = PARAMS;
export type GET_CONTRACTS_QUERY = Pagination & {};
export type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export type GET_MEMBERS_PARAMS = PARAMS;
export type GET_MEMBERS_QUERY = Pagination & {};
export type GET_MEMBERS_RESPONSE = {
    total: number;
    members: Users[];
};
/**
 * Users.tenantRoles 포함
 */
export type SEND_MEMBER_CODE_PARAMS = PARAMS;
export type SEND_MEMBER_CODE_BODY = {
    contacts: string[];
    contractId: number;
};
export type SEND_MEMBER_CODE_RESPONSE = boolean;
export type UPDATE_MEMBER_ROLE_PARAMS = PARAMS & {
    tenantRoleId: number;
};
export type UPDATE_MEMBER_ROLE_BODY = {
    role: Partial<TenantRoles>;
};
export type UPDATE_MEMBER_ROLE_RESPONSE = [number];
export type DELETE_MEMBER_ROLE_PARAMS = PARAMS & {
    tenantRoleId: number;
};
export type DELETE_MEMBER_ROLE_RESPONSE = [number];
export type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS;
export type GET_RENTAL_RESERVATIONS_QUERY = Pagination;
export type GET_RENTAL_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
export type GET_HOME_DASHBOARD_PARAMS = PARAMS & {
    branchId: number;
};
export type GET_HOME_DASHBOARD_RESPONSE = {
    contracts: Contracts[];
    bills: Bills[];
    notices: Notices[];
    events: Events[];
};
export {};
//# sourceMappingURL=tenant.d.ts.map