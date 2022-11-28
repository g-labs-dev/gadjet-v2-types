import { Bills, Branches, CreditLogs, Events, Notices, Payments, Products, ProductSales, RentalReservations, Rentals, Services, ServiceSales } from '../../model';
import { CreditType, Pagination } from '../../type';
declare type PARAMS = {
    tenantId: number;
    branchId: number;
};
export declare type GET_BRANCH_DETAIL_PARAMS = PARAMS;
export declare type GET_BRANCH_DETAIL_RESPONSE = {
    branch: Branches;
};
export declare type GET_CREDIT_PARAMS = PARAMS;
export declare type GET_CREDIT_QUERY = {
    date: string;
};
export declare type GET_CREDIT_RESPONSE = {
    credit: Record<CreditType, number>;
};
/**
 * 무료크레딧은 availableStartDate < date < availableEndDate
 */
export declare type GET_CREDIT_LOGS_PARAMS = PARAMS;
export declare type GET_CREDIT_LOGS_QUERY = Pagination & {};
export declare type GET_CREDIT_LOGS_RESPONSE = {
    total: number;
    creditLogs: CreditLogs[];
};
export declare type GET_RENTAL_RESERVATIONS_PARAMS = PARAMS;
export declare type GET_RENTAL_RESERVATIONS_QUERY = Pagination & {};
export declare type GET_RENTAL_RESERVATIONS_RESPONSE = {
    total: number;
    rentalReservations: RentalReservations[];
};
/**
 * RentalReservations.Rentals 포함
 */
export declare type GET_PRODUCT_SALES_PARAMS = PARAMS;
export declare type GET_PRODUCT_SALES_QUERY = Pagination & {};
export declare type GET_PRODUCT_SALES_RESPONSE = {
    total: number;
    productSales: ProductSales[];
};
/**
 * ProductSales.Product 포함
 */
export declare type GET_SERVICE_SALES_PARAMS = PARAMS;
export declare type GET_SERVICE_SALES_QUERY = Pagination & {};
export declare type GET_SERVICE_SALES_RESPONSE = {
    total: number;
    serviceSales: ServiceSales[];
};
/**
 * ServiceSales.Service 포함
 */
export declare type GET_BILLS_PARAMS = PARAMS;
export declare type GET_BILLS_QUERY = Pagination & {};
export declare type GET_BILLS_RESPONSE = {
    total: number;
    bills: Bills[];
};
export declare type GET_PAYMENTS_PARAMS = PARAMS;
export declare type GET_PAYMENTS_QUERY = Pagination & {};
export declare type GET_PAYMENTS_RESPONSE = {
    total: number;
    payments: Payments[];
};
export declare type GET_NOTICES_PARAMS = PARAMS;
export declare type GET_NOTICES_QUERY = Pagination & {};
export declare type GET_NOTICES_RESPONSE = {
    total: number;
    notices: Notices[];
};
export declare type GET_NOTICE_DETAIL_PARAMS = PARAMS & {
    noticeId: number;
};
export declare type GET_NOTICE_DETAIL_RESPONSE = {
    notice: Notices;
};
export declare type GET_EVENTS_PARAMS = PARAMS;
export declare type GET_EVENTS_QUERY = Pagination & {};
export declare type GET_EVENTS_RESPONSE = {
    total: number;
    events: Events[];
};
export declare type GET_EVENT_DETAIL_PARAMS = PARAMS & {
    eventId: number;
};
export declare type GET_EVENT_DETAIL_RESPONSE = {
    event: Events;
};
export declare type GET_SERVICES_PARAMS = PARAMS;
export declare type GET_SERVICES_QUERY = Pagination;
export declare type GET_SERVICES_RESPONSE = {
    total: number;
    services: Services[];
};
export declare type GET_PRODUCTS_PARAMS = PARAMS;
export declare type GET_PRODUCTS_QUERY = Pagination;
export declare type GET_PRODUCTS_RESPONSE = {
    total: number;
    products: Products[];
};
export declare type GET_RENTALS_PARAMS = PARAMS;
export declare type GET_RENTALS_QUERY = Pagination;
export declare type GET_RENTALS_RESPONSE = {
    total: number;
    rentals: Rentals[];
};
export {};
//# sourceMappingURL=branch.d.ts.map