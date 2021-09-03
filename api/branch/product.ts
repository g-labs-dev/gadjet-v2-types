import { Products, ProductSales } from "../../model";
import { Pagination, ProductSalesSummary } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 상품 조회
// GET /hqs/0/branches/0/products
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & {};
export type GET_LIST_RESPONSE = { total: number; products: Products[] };
// ===========================

// 상품 상세 조회
// GET /hqs/0/branches/0/products/0
export type GET_DETAIL_PARAMS = PARAMS & { productId: number };
export type GET_DETAIL_RESPONSE = Products;

// 상품 추가
// POST /hqs/0/branches/0/products
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  product: Pick<Products, "name" | "description" | "price" | "stock" | "availableCreditType" | "imageId">;
};
export type ADD_RESPONSE = Products;
// ===========================

// 상품 수정
// PUT /hqs/0/branches/0/products/0
export type UPDATE_PARAMS = PARAMS & { productId: number };
export type UPDATE_BODY = {
  product: Pick<Products, "name" | "description" | "price" | "stock" | "availableCreditType" | "imageId">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 상품 제거
// DEL /hqs/0/branches/0/products/0
export type DELETE_PARAMS = PARAMS & { productId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 상품 판매내역 조회
// GET /hqs/0/branches/0/product-sales
export type GET_SALES_PARAMS = PARAMS;
export type GET_SALES_QUERY = Pagination & { datetime: [string, string]; productIds: number[] }; // productIds.length === 0 이면 전체
export type GET_SALES_RESPONSE = { total: number; productSales: ProductSales[] };
// ===========================

// 상품 판매내역 요약
// GET /hqs/0/branches/0/product-sales/summary
export type GET_SALES_SUMMARY_PARAMS = PARAMS;
export type GET_SALES_SUMMARY_QUERY = Pagination & { datetime: [string, string]; productIds: number[] };
export type GET_SALES_SUMMARY_RESPONSE = ProductSalesSummary;
// ===========================

// 상품 판매내역 환불
// DEL /hqs/0/branches/0/product-sales/0
export type REFUND_SALES_PARAMS = PARAMS & { productSaleId: number };
export type REFUND_SALES_RESPONSE = [number];
// ===========================

// 상품 판매내역 내보내기
// GET /hqs/0/branches/0/product-sales/export
export type EXPORT_SALES_PARAMS = PARAMS;
export type EXPORT_SALES_QUERY = { datetime: [string, string] };
export type EXPORT_SALES_RESPONSE = any; // @@@@ xlsx
// ===========================
