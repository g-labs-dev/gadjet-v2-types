import { Services, ServiceSales } from "../../model";
import { Pagination, ServiceSalesSummary } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 서비스 조회
// GET /hqs/0/branches/0/services
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & {};
export type GET_LIST_RESPONSE = { total: number; services: Services[] };
// ===========================

// 서비스 상세 조회
// GET /hqs/0/branches/0/services/0
export type GET_DETAIL_PARAMS = PARAMS & { serviceId: number };
export type GET_DETAIL_RESPONSE = Services;
// ===========================

// 서비스 추가
// POST /hqs/0/branches/0/services
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  service: Pick<Services, "name" | "description" | "guide" | "price" | "imageId">;
};
export type ADD_RESPONSE = Services;
// ===========================

// 서비스 수정
// PUT /hqs/0/branches/0/services/0
export type UPDATE_PARAMS = PARAMS & { serviceId: number };
export type UPDATE_BODY = {
  service: Pick<Services, "name" | "description" | "guide" | "price" | "imageId">;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 서비스 제거
// DEL /hqs/0/branches/0/services/0
export type DELETE_PARAMS = PARAMS & { serviceId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 서비스 판매내역 조회
// GET /hqs/0/branches/0/service-sales
export type GET_SALES_PARAMS = PARAMS;
export type GET_SALES_QUERY = Pagination & { datetime: [string, string]; serviceIds: number[] }; // serviceIds.length === 0 이면 전체
export type GET_SALES_RESPONSE = { total: number; serviceSales: ServiceSales[] };
// ===========================

// 서비스 판매내역 요약
// GET /hqs/0/branches/0/service-sales/summary
export type GET_SALES_SUMMARY_PARAMS = PARAMS;
export type GET_SALES_SUMMARY_QUERY = Pagination & { datetime: [string, string]; serviceIds: number[] };
export type GET_SALES_SUMMARY_RESPONSE = ServiceSalesSummary;
// ===========================

// 서비스 판매내역 환불
// DEL /hqs/0/branches/0/service-sales/0
export type REFUND_SALES_PARAMS = PARAMS & { serviceSaleId: number };
export type REFUND_SALES_RESPONSE = [number];
// ===========================

// 서비스 판매내역 내보내기
// GET /hqs/0/branches/0/service-sales/export
export type EXPORT_SALES_PARAMS = PARAMS;
export type EXPORT_SALES_QUERY = { datetime: [string, string] };
export type EXPORT_SALES_RESPONSE = any; // @@@@ xlsx
// ===========================
