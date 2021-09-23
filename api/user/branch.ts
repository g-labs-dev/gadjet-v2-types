import { Bills, Branches, CreditLogs, Payments, ProductSales, RentalReservations, ServiceSales } from "../../model";
import { CreditType, Pagination } from "../../type";

type PARAMS = { tenantId: number; branchId: number };

// 지점 상세 조회
// GET /tenants/0/branches/0
export type GET_BRANCH_DETAIL_PARAMS = PARAMS;
export type GET_BRANCH_DETAIL_RESPONSE = { branch: Branches };
// ===========================

// 크레딧 조회 (사용 가능한 크레딧)
// GET /tenants/0/branches/0/credits
export type GET_CREDIT_PARAMS = PARAMS;
export type GET_CREDIT_QUERY = { date: string }; // YYYY-MM-DD
export type GET_CREDIT_RESPONSE = { credit: Record<CreditType, number> };
/**
 * 무료크레딧은 availableStartDate < date < availableEndDate
 */
// ===========================

// 크레딧 이용내역 조회
// GET /tenants/0/branches/0/credit-logs
export type GET_CREDIT_LOGS_PARAMS = PARAMS;
export type GET_CREDIT_LOGS_QUERY = Pagination & {};
export type GET_CREDIT_LOGS_RESPONSE = { total: number; creditLogs: CreditLogs[] };
// ===========================

// 대관/대여 예약내역 조회
// GET /tenants/0/branches/0/rental-reservations
export type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS;
export type GET_RENTAL_RESERVATIONS_QUERY = Pagination & {};
export type GET_RENTAL_RESERVATIONS_RESPONSE = { total: number; rentalReservations: RentalReservations[] };
/**
 * RentalReservations.Rentals 포함
 */
// ===========================

// 상품 구매내역 조회
// GET /tenants/0/branches/0/product-sales
export type GET_PRODUCT_SALES_PARAMS = PARAMS;
export type GET_PRODUCT_SALES_QUERY = Pagination & {};
export type GET_PRODUCT_SALES_RESPONSE = { total: number; productSales: ProductSales[] };
/**
 * ProductSales.Product 포함
 */
// ===========================

// 서비스 구매내역 조회
// GET /tenants/0/branches/0/service-sales
export type GET_SERVICE_SALES_PARAMS = PARAMS;
export type GET_SERVICE_SALES_QUERY = Pagination & {};
export type GET_SERVICE_SALES_RESPONSE = { total: number; serviceSales: ServiceSales[] };
/**
 * ServiceSales.Service 포함
 */
// ===========================

// 청구서 목록 조회
// GET /tenants/0/branches/0/bills
export type GET_BILLS_PARAMS = PARAMS;
export type GET_BILLS_QUERY = Pagination & {};
export type GET_BILLS_RESPONSE = { total: number; bills: Bills[] };
// ===========================

// 결제내역 목록 조회
// GET /tenants/0/branches/0/payments
export type GET_PAYMENTS_PARAMS = PARAMS;
export type GET_PAYMENTS_QUERY = Pagination & {};
export type GET_PAYMENTS_RESPONSE = { total: number; payments: Payments[] };
// ===========================
