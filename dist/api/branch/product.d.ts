/// <reference types="node" />
import { Products, ProductSales } from '../../model';
import { Pagination, ProductSalesSummary } from '../../type';
import { ProductSaleSearch, ProductSearch } from '../../type/search';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & ProductSearch;
export declare type GET_LIST_RESPONSE = {
    total: number;
    products: Products[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    productId: number;
};
export declare type GET_DETAIL_RESPONSE = Products;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    product: Partial<Products>;
};
export declare type ADD_RESPONSE = Products;
export declare type UPDATE_PARAMS = PARAMS & {
    productId: number;
};
export declare type UPDATE_BODY = {
    product: Partial<Products>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    productId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type GET_SALES_PARAMS = PARAMS;
export declare type GET_SALES_QUERY = Pagination & ProductSaleSearch;
export declare type GET_SALES_RESPONSE = {
    total: number;
    productSales: ProductSales[];
};
export declare type GET_SALES_SUMMARY_PARAMS = PARAMS;
export declare type GET_SALES_SUMMARY_QUERY = Pagination & {
    query: string;
    datetime: [string, string];
    productIds: number[];
};
export declare type GET_SALES_SUMMARY_RESPONSE = ProductSalesSummary;
export declare type REFUND_SALES_PARAMS = PARAMS & {
    productSaleId: number;
};
export declare type REFUND_SALES_RESPONSE = [number];
export declare type EXPORT_SALES_PARAMS = PARAMS;
export declare type EXPORT_SALES_QUERY = {
    datetime: [string, string];
};
export declare type EXPORT_SALES_RESPONSE = Buffer;
export {};
//# sourceMappingURL=product.d.ts.map