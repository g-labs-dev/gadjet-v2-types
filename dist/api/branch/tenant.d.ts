/// <reference types="node" />
import { Contracts, CreditLogs, Credits, ProductSales, RentalReservations, Tenants, Users } from '../../model';
import { CreditType, Pagination } from '../../type';
import { TenantSearch } from '../../type/search';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & TenantSearch;
export declare type GET_LIST_RESPONSE = {
    total: number;
    tenants: Tenants[];
};
export declare type GET_USERS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type GET_USERS_QUERY = Pagination & {
    query: string;
};
export declare type GET_USERS_RESPONSE = {
    total: number;
    users: Users[];
};
export declare type GET_CONTRACTS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type GET_CONTRACTS_QUERY = Pagination & {
    query: string;
};
export declare type GET_CONTRACTS_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export declare type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type GET_RENTAL_RESERVATIONS_QUERY = Pagination & {
    query: string;
};
export declare type GET_RENTAL_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
export declare type GET_PRODUCT_SALES_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type GET_PRODUCT_SALES_QUERY = Pagination & {
    query: string;
};
export declare type GET_PRODUCT_SALES_RESPONSE = {
    total: number;
    productSales: ProductSales[];
};
export declare type GET_CREDITS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type GET_CREDITS_QUERY = Pagination & {
    date: string;
    creditTypes: CreditType[];
};
export declare type GET_CREDITS_RESPONSE = {
    total: number;
    credits: Credits[];
};
export declare type GET_CREDIT_LOGS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type GET_CREDIT_LOGS_QUERY = Pagination & {
    datetime: [string, string];
};
export declare type GET_CREDIT_LOGS_RESPONSE = {
    total: number;
    creditLogs: CreditLogs[];
};
export declare type EXPORT_PARAMS = PARAMS;
export declare type EXPORT_QUERY = {
    includeExpired: boolean;
};
export declare type EXPORT_RESPONSE = Buffer;
export declare type ADD_CREDITS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type ADD_CREDITS_BODY = {
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
export declare type ADD_CREDITS_RESPONSE = boolean;
export declare type INVITE_USERS_PARAMS = PARAMS & {
    tenantId: number;
};
export declare type INVITE_USERS_BODY = {
    phone: string[];
};
export declare type INVITE_USERS_RESPONSE = boolean;
export {};
//# sourceMappingURL=tenant.d.ts.map