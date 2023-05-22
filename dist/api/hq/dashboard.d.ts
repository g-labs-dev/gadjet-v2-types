import { Bills, Contracts, Spaces } from '../../model';
import { Pagination } from '../../type';
type PARAMS = {
    hqId: number;
};
export type SEARCH_CONTRACT_PARAMS = PARAMS;
export type SEARCH_CONTRACT_QUERY = Pagination & {
    query: string;
};
export type SEARCH_CONTRACT_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export type GET_BEFORE_STARTED_CONTRACT_PARAMS = PARAMS;
export type GET_BEFORE_STARTED_CONTRACT_QUERY = {
    date: string;
};
export type GET_BEFORE_STARTED_CONTRACT_RESPONSE = Contracts[];
export type GET_START_CONTRACT_PARAMS = PARAMS;
export type GET_START_CONTRACT_QUERY = {
    date: string;
};
export type GET_START_CONTRACT_RESPONSE = Contracts[];
export type GET_END_CONTRACT_PARAMS = PARAMS;
export type GET_END_CONTRACT_QUERY = {
    date: string;
};
export type GET_END_CONTRACT_RESPONSE = Contracts[];
export type GET_UNPAID_BILL_PARAMS = PARAMS;
export type GET_UNPAID_BILL_QUERY = {
    date: string;
};
export type GET_UNPAID_BILL_RESPONSE = Bills[];
/**
 * Bills.paymentEndDate < date && Bills.unpaid > 0
 */
export type GET_SPACE_PARAMS = PARAMS;
export type GET_SPACE_QUERY = {
    date: string;
};
export type GET_SPACE_RESPONSE = Spaces[];
export {};
/**
 * Bills.contracts = Contracts.suspendDate > date
 */
//# sourceMappingURL=dashboard.d.ts.map