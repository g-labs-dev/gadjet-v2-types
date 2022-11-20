/// <reference types="node" />
import { Services, ServiceSales } from '../../model';
import { Pagination, ServiceSalesSummary } from '../../type';
import { ServiceSaleSearch, ServiceSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & ServiceSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    services: Services[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    serviceId: number;
};
export type GET_DETAIL_RESPONSE = Services;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    service: Partial<Services>;
};
export type ADD_RESPONSE = Services;
export type UPDATE_PARAMS = PARAMS & {
    serviceId: number;
};
export type UPDATE_BODY = {
    service: Partial<Services>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    serviceId: number;
};
export type DELETE_RESPONSE = [number];
export type ADD_SALES_PARAMS = PARAMS;
export type ADD_SALES_BODY = {
    serviceSales: Partial<ServiceSales>;
};
export type ADD_SALES_RESPONSE = ServiceSales;
export type GET_SALES_PARAMS = PARAMS;
export type GET_SALES_QUERY = Pagination & ServiceSaleSearch;
export type GET_SALES_RESPONSE = {
    total: number;
    serviceSales: ServiceSales[];
};
export type GET_SALES_SUMMARY_PARAMS = PARAMS;
export type GET_SALES_SUMMARY_QUERY = Pagination & {
    datetime: [string, string];
    serviceIds: number[];
};
export type GET_SALES_SUMMARY_RESPONSE = ServiceSalesSummary;
export type REFUND_SALES_PARAMS = PARAMS & {
    serviceSaleId: number;
};
export type REFUND_SALES_RESPONSE = [number];
export type EXPORT_SALES_PARAMS = PARAMS;
export type EXPORT_SALES_QUERY = {
    datetime: [string, string];
};
export type EXPORT_SALES_RESPONSE = Buffer;
export {};
//# sourceMappingURL=service.d.ts.map