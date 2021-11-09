import { Contracts } from '../../model';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & {
    query: string;
    spaceTypes: number[];
};
export declare type GET_LIST_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    contractId: number;
};
export declare type GET_DETAIL_RESPONSE = Contracts;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    contract: Pick<Contracts, 'tenantId' | 'startDate' | 'endDate' | 'address' | 'population' | 'paymentDate' | 'billingType' | 'billingSplitType' | 'paymentDueDate' | 'lateFeeType' | 'lateFee' | 'publicMemo' | 'privateMemo' | 'status' | 'signatureImageId' | 'documentFileId' | 'extendStatus' | 'extendContractId' | 'director' | 'contractor' | 'spaces' | 'additions'>;
};
export declare type ADD_RESPONSE = Contracts;
export declare type UPDATE_PARAMS = PARAMS & {
    contractId: number;
};
export declare type UPDATE_BODY = {
    contract: Partial<Contracts>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type DELETE_PARAMS = PARAMS & {
    contractId: number;
};
export declare type DELETE_RESPONSE = [number];
export declare type EXPORT_PARAMS = PARAMS;
export declare type EXPORT_QUERY = {
    startDate?: [string, string];
    suspendDate?: [string, string];
};
export declare type EXPORT_RESPONSE = any;
export declare type UPLOAD_PARAMS = PARAMS;
export declare type UPLOAD_BODY = {
    contracts: Partial<Contracts>[];
};
export declare type UPLOAD_RESPONSE = [number];
export declare type SUSPEND_PARAMS = PARAMS & {
    contractId: number;
};
export declare type SUSPEND_BODY = {
    suspendDate: string;
};
export declare type SUSPEND_RESPONSE = [number];
export {};
//# sourceMappingURL=contract.d.ts.map