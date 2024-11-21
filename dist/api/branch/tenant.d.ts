/// <reference types="node" />
import { Contracts, CreditLogs, Credits, ProductSales, RentalReservations, Tenants, Users } from '../../model';
import { CreditType, Pagination } from '../../type';
import { TenantSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & TenantSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    tenants: Tenants[];
};
export type GET_USERS_PARAMS = PARAMS & {
    tenantId: number;
};
export type GET_USERS_QUERY = Pagination & {
    query: string;
};
export type GET_USERS_RESPONSE = {
    total: number;
    users: Users[];
};
export type DELETE_USER_FROM_TENANT_PARAMS = PARAMS & {
    tenantId: number;
    userId: number;
};
export type DELETE_USER_FROM_TENANT_RESPONSE = boolean;
export type GET_CONTRACTS_PARAMS = PARAMS & {
    tenantId: number;
};
export type GET_CONTRACTS_QUERY = Pagination & {
    query: string;
};
export type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS & {
    tenantId: number;
};
export type GET_RENTAL_RESERVATIONS_QUERY = Pagination & {
    query: string;
};
export type GET_RENTAL_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
export type GET_PRODUCT_SALES_PARAMS = PARAMS & {
    tenantId: number;
};
export type GET_PRODUCT_SALES_QUERY = Pagination & {
    query: string;
};
export type GET_PRODUCT_SALES_RESPONSE = {
    total: number;
    productSales: ProductSales[];
};
export type GET_CREDITS_PARAMS = PARAMS & {
    tenantId: number;
};
export type GET_CREDITS_QUERY = Pagination & {
    date: string;
    creditTypes: CreditType[];
};
export type GET_CREDITS_RESPONSE = {
    total: number;
    credits: Credits[];
};
export type GET_CREDIT_LOGS_PARAMS = PARAMS & {
    tenantId: number;
};
export type GET_CREDIT_LOGS_QUERY = Pagination & {
    datetime: [string, string];
};
export type GET_CREDIT_LOGS_RESPONSE = {
    total: number;
    creditLogs: CreditLogs[];
};
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = {
    includeExpired: boolean;
};
export type EXPORT_RESPONSE = Buffer;
export type ADD_CREDITS_PARAMS = PARAMS & {
    tenantId: number;
};
export type ADD_CREDITS_BODY = {
    credit: {
        contract: {
            amount: number;
            availableRange: [string, string];
        };
        mileage: {
            amount: number;
        };
        buy: {
            amount: number;
        };
        memo: string;
    };
};
export type ADD_CREDITS_RESPONSE = boolean;
export type INVITE_USERS_PARAMS = PARAMS & {
    tenantId: number;
};
export type INVITE_USERS_BODY = {
    phone: string[];
};
export type INVITE_USERS_RESPONSE = boolean;
export {};
//# sourceMappingURL=tenant.d.ts.map