import { BillType, ContractStatus, ExpenditureType, PaymentStatus, PaymentType } from '.';
/**
 * 기본 Date Format YYYY-MM-DD
 */
export declare type ContractSearch = {
    query: string;
    spaceTypes: number[];
    status: ContractStatus[];
};
export declare type BillSearch = {
    query: string;
    startDate: [string, string];
    spaceTypes: number[];
    type: BillType[];
};
export declare type ReceiptSearch = {
    query: string;
    requestDatetime: [string, string];
};
export declare type SpaceSearch = {
    query: string;
    emptyFlag: boolean;
};
export declare type RentalSearch = {
    query: string;
};
export declare type RentalReservationSearch = {
    date: [string, string];
    rentalIds: number[];
};
export declare type TenantSearch = {
    query: string;
    contractStatus: ContractStatus[];
};
export declare type NoticeSearch = {
    query: string;
    writeDate: [string, string];
};
export declare type AccessLogSearch = {
    query: string;
    datetime: [string, string];
};
export declare type ProductSearch = {
    query: string;
};
export declare type ProductSaleSearch = {
    query: string;
    datetime: [string, string];
    productIds: number[];
};
export declare type ServiceSearch = {
    query: string;
};
export declare type ServiceSaleSearch = {
    query: string;
    datetime: [string, string];
    serviceIds: number[];
};
export declare type ExpenditureSearch = {
    query: string;
    expenditureTypes: ExpenditureType[];
    date: [string, string];
};
export declare type PaymentSearch = {
    query: string;
    paymentType: PaymentType[];
    paymentStatus: PaymentStatus[];
    date: [string, string];
};
export declare type EventSearch = {
    query: string;
};
export declare type AdditionSearch = {
    query: string;
};
export declare type CashSearch = {
    query: string;
    date: [string, string];
};
export declare type BranchRoleSearch = Record<string, unknown>;
//# sourceMappingURL=search.d.ts.map