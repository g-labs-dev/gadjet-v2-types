import { Bills, Contracts, Spaces } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_RECENT_CONTRACT_PARAMS = PARAMS;
export declare type GET_RECENT_CONTRACT_QUERY = {
    pageSize: number;
};
export declare type GET_RECENT_CONTRACT_RESPONSE = Contracts[];
/**
 * order by createdAt desc
 */
export declare type SEARCH_CONTRACT_PARAMS = PARAMS;
export declare type SEARCH_CONTRACT_QUERY = Pagination & {
    query: string;
};
export declare type SEARCH_CONTRACT_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export declare type GET_START_CONTRACT_PARAMS = PARAMS;
export declare type GET_START_CONTRACT_QUERY = {
    date: string;
};
export declare type GET_START_CONTRACT_RESPONSE = Contracts[];
export declare type GET_END_CONTRACT_PARAMS = PARAMS;
export declare type GET_END_CONTRACT_QUERY = {
    date: string;
};
export declare type GET_END_CONTRACT_RESPONSE = Contracts[];
export declare type GET_UNPAID_BILL_PARAMS = PARAMS;
export declare type GET_UNPAID_BILL_QUERY = {
    date: string;
};
export declare type GET_UNPAID_BILL_RESPONSE = Bills[];
/**
 * Bills.paymentEndDate < date && Bills.unpaid > 0
 */
export declare type GET_SPACE_PARAMS = PARAMS;
export declare type GET_SPACE_QUERY = {
    date: string;
};
export declare type GET_SPACE_RESPONSE = Spaces[];
export {};
/**
 * Bills.contracts = Contracts.suspendDate > date
 */
//# sourceMappingURL=dashboard.d.ts.map