/// <reference types="node" />
import { Products, ProductSales } from '../../model';
import { Pagination, ProductSalesSummary } from '../../type';
import { ProductSaleSearch, ProductSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & ProductSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    products: Products[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    productId: number;
};
export type GET_DETAIL_RESPONSE = Products;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    product: Partial<Products>;
};
export type ADD_RESPONSE = Products;
export type UPDATE_PARAMS = PARAMS & {
    productId: number;
};
export type UPDATE_BODY = {
    product: Partial<Products>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    productId: number;
};
export type DELETE_RESPONSE = [number];
export type ADD_SALES_PARAMS = PARAMS;
export type ADD_SALES_BODY = {
    productSales: Partial<ProductSales>;
};
export type ADD_SALES_RESPONSE = ProductSales;
export type GET_SALES_PARAMS = PARAMS;
export type GET_SALES_QUERY = Pagination & ProductSaleSearch;
export type GET_SALES_RESPONSE = {
    total: number;
    productSales: ProductSales[];
};
export type GET_SALES_SUMMARY_PARAMS = PARAMS;
export type GET_SALES_SUMMARY_QUERY = Pagination & {
    query: string;
    datetime: [string, string];
    productIds: number[];
};
export type GET_SALES_SUMMARY_RESPONSE = ProductSalesSummary;
export type REFUND_SALES_PARAMS = PARAMS & {
    productSaleId: number;
};
export type REFUND_SALES_RESPONSE = [number];
export type EXPORT_SALES_PARAMS = PARAMS;
export type EXPORT_SALES_QUERY = {
    datetime: [string, string];
};
export type EXPORT_SALES_RESPONSE = Buffer;
export {};
//# sourceMappingURL=product.d.ts.map