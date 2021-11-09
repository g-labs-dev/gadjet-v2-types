import { Tenants, TenantRoles, Contracts, Users, Hqs, RentalReservations, Bills, Events, Notices } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    tenantId: number;
};
export declare type GET_DETAIL_PARAMS = PARAMS;
export declare type GET_DETAIL_RESPONSE = {
    tenant: Tenants;
};
export declare type GET_HQS_PARAMS = PARAMS;
export declare type GET_HQS_QUERY = {};
export declare type GET_HQS_RESPONSE = {
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
export declare type GET_CONTRACTS_PARAMS = PARAMS;
export declare type GET_CONTRACTS_QUERY = Pagination & {};
export declare type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export declare type GET_MEMBERS_PARAMS = PARAMS;
export declare type GET_MEMBERS_QUERY = Pagination & {};
export declare type GET_MEMBERS_RESPONSE = {
    total: number;
    members: Users[];
};
/**
 * Users.tenantRoles 포함
 */
export declare type SEND_MEMBER_CODE_PARAMS = PARAMS;
export declare type SEND_MEMBER_CODE_BODY = {
    contacts: string[];
};
export declare type SEND_MEMBER_CODE_RESPONSE = boolean;
export declare type UPDATE_MEMBER_ROLE_PARAMS = PARAMS & {
    tenantRoleId: number;
};
export declare type UPDATE_MEMBER_ROLE_BODY = {
    role: Partial<TenantRoles>;
};
export declare type UPDATE_MEMBER_ROLE_RESPONSE = [number];
export declare type DELETE_MEMBER_ROLE_PARAMS = PARAMS & {
    tenantRoleId: number;
};
export declare type DELETE_MEMBER_ROLE_RESPONSE = [number];
export declare type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS & {
    branchId: number;
};
export declare type GET_RENTAL_RESERVATIONS_QUERY = Pagination;
export declare type GET_RENTAL_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
export declare type GET_HOME_DASHBOARD_PARAMS = PARAMS & {
    branchId: number;
};
export declare type GET_HOME_DASHBOARD_RESPONSE = {
    contracts: Contracts[];
    bills: Bills[];
    notices: Notices[];
    events: Events[];
};
export {};
//# sourceMappingURL=tenant.d.ts.map