import { Services, ServiceSales } from '../../model';
import { Pagination, ServiceSalesSummary } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    services: Services[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    serviceId: number;
};
export declare type GET_DETAIL_RESPONSE = Services;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    service: Partial<Services>;
};
export declare type ADD_RESPONSE = Services;
export declare type UPDATE_PARAMS = PARAMS & {
    serviceId: number;
};
export declare type UPDATE_BODY = {
    service: Partial<Services>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    serviceId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_SALES_PARAMS = PARAMS;
export declare type GET_SALES_QUERY = Pagination & {
    query: string;
    datetime: [string, string];
    serviceIds: number[];
};
export declare type GET_SALES_RESPONSE = {
    total: number;
    serviceSales: ServiceSales[];
};
export declare type GET_SALES_SUMMARY_PARAMS = PARAMS;
export declare type GET_SALES_SUMMARY_QUERY = Pagination & {
    datetime: [string, string];
    serviceIds: number[];
};
export declare type GET_SALES_SUMMARY_RESPONSE = ServiceSalesSummary;
export declare type REFUND_SALES_PARAMS = PARAMS & {
    serviceSaleId: number;
};
export declare type REFUND_SALES_RESPONSE = [number];
export declare type EXPORT_SALES_PARAMS = PARAMS;
export declare type EXPORT_SALES_QUERY = {
    datetime: [string, string];
};
export declare type EXPORT_SALES_RESPONSE = any;
export {};
//# sourceMappingURL=service.d.ts.map