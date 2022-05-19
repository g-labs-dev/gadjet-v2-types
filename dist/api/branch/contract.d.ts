/// <reference types="node" />
import { Bills, ContractInviteCodes, Contracts } from '../../model';
import { ContractSignatureStatus, ContractStatus, Pagination } from '../../type';
import { ContractSearch } from '../../type/search';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = Pagination & ContractSearch;
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
    contract: Partial<Contracts>;
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
export declare type EXPORT_RESPONSE = Buffer;
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
export declare type SEND_INVITE_PARAMS = PARAMS & {
    contractId: number;
};
export declare type SEND_INVITE_BODY = {
    contacts: string[];
};
export declare type SEND_INVITE_RESPONSE = ContractInviteCodes[];
export declare type SEARCH_PARAMS = PARAMS;
export declare type SEARCH_QUERY = {
    query: string;
    status: ContractStatus[];
};
export declare type SEARCH_RESPONSE = {
    contracts: Contracts[];
};
export declare type UPDATE_SIGNATURE_STATUS_PARAMS = PARAMS & {
    contractId: number;
};
export declare type UPDATE_SIGNATURE_STATUS_BODY = {
    signatureStatus: ContractSignatureStatus;
};
export declare type UPDATE_SIGNATURE_STATUS_RESPONSE = [number];
export declare type GET_CONTRACT_DEPOSIT_BILLS_PARAMS = PARAMS & {
    contractId: number;
};
export declare type GET_CONTRACT_DEPOSIT_BILLS_QUERY = {};
export declare type GET_CONTRACT_DEPOSIT_BILLS_RESPONSE = {
    bills: Bills[];
};
export declare type UPDATE_DOCUMENT_FILE_PARAMS = PARAMS & {
    contractId: number;
};
export declare type UPDATE_DOCUMENT_FILE_BODY = {
    documentFileId: number;
};
export declare type UPDATE_DOCUMENT_FILE_RESPONSE = [number];
export {};
//# sourceMappingURL=contract.d.ts.map