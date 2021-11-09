import { Bills } from '../../model';
import { BillSummary, ContractReceiver, Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
    startDate: [string, string];
    spaceTypes: number[];
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    bills: Bills[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    billId: number;
};
export declare type GET_DETAIL_RESPONSE = Bills;
export declare type GET_SUMMARY_PARAMS = PARAMS;
export declare type GET_SUMMARY_QUERY = {
    query: string;
    startDate: [string, string];
    spaceTypes: number[];
};
export declare type GET_SUMMARY_RESPONSE = BillSummary;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    bill: Pick<Bills, 'contractId' | 'tenantId' | 'type' | 'openDate' | 'startDate' | 'endDate' | 'paymentStartDate' | 'paymentEndDate' | 'spaces' | 'additions' | 'surcharges' | 'memo' | 'manualFlag'>;
};
export declare type ADD_RESPONSE = Bills;
export declare type UPDATE_PARAMS = PARAMS & {
    billId: number;
};
export declare type UPDATE_BODY = {
    bill: Partial<Bills>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    billId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type EXPORT_PARAMS = PARAMS;
export declare type EXPORT_QUERY = {
    startDate: [string, string];
};
export declare type EXPORT_RESPONSE = any;
export declare type SEND_PARAMS = PARAMS & {
    billId: number;
};
export declare type SEND_BODY = {
    receivers: ContractReceiver['bill'];
};
export declare type SEND_RESPONSE = any;
export {};
//# sourceMappingURL=bill.d.ts.map