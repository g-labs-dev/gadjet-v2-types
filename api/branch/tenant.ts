import { Contracts, Credits, ProductSales, RentalReservations, Tenants, Users } from "../../model";
import { ContractStatus, CreditType, Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 입주사 조회
// GET /hqs/0/branches/0/tenants
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; contractStatus: ContractStatus[] }; // @@@@ query : name, email, user.name
export type GET_LIST_RESPONSE = { total: number; tenants: Tenants[] };
// ===========================

// 입주사 입주원 조회
// GET /hqs/0/branches/0/tenants/0/users
export type GET_USERS_PARAMS = PARAMS & { tenantId: number };
export type GET_USERS_QUERY = Pagination & { query: string };
export type GET_USERS_RESPONSE = { total: number; users: Omit<Users, "password">[] };
// ===========================

// 입주사 계약 조회
// GET /hqs/0/branches/0/tenants/0/contracts
export type GET_CONTRACTS_PARAMS = PARAMS & { tenantId: number };
export type GET_CONTRACTS_RESPONSE = Pick<Contracts, "contractId" | "startDate" | "suspendDate" | "director" | "status" | "extendStatus">[];
// ===========================

// 입주사 대여대관 예약내역 조회
// GET /hqs/0/branches/0/tenants/0/rental-reservations
export type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS & { tenantId: number };
export type GET_RENTAL_RESERVATIONS_QUERY = Pagination & { query: string }; // query : rental.name
export type GET_RENTAL_RESERVATIONS_RESPONSE = { total: number; rentalReservations: RentalReservations[] };
// ===========================

// 입주사 상품 구매내역 조회
// GET /hqs/0/branches/0/tenants/0/product-sales
export type GET_PRODUCT_SALES_PARAMS = PARAMS & { tenantId: number };
export type GET_PRODUCT_SALES_QUERY = Pagination & { query: string }; // query: product.name
export type GET_PRODUCT_SALES_RESPONSE = { total: number; productSales: ProductSales[] };
// ===========================

// 입주사 크레딧 조회
// GET /hqs/0/branches/0/tenants/0/credits
export type GET_CREDITS_PARAMS = PARAMS & { tenantId: number };
export type GET_CREDITS_QUERY = Pagination & { date: string; creditTypes: CreditType[] }; // @@@@ credit.availableStartDate <= date <= credit.availableendDate (creditType === 'contract' 만 날짜 구분? )
export type GET_CREDITS_RESPONSE = { total: number; credits: Credits[] };
// ===========================

// 입주사 내보내기
// GET /hqs/0/branches/0/tenants/export
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_RESPONSE = any; // @@@@ xlsx 계약중인 입주사 전체 내보내기
// ===========================
