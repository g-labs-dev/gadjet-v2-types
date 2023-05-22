/// <reference types="node" />
import { Bills, ContractInviteCodes, Contracts } from '../../model';
import { ContractSignatureStatus, ContractStatus, Pagination } from '../../type';
import { ContractSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & ContractSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    contracts: Contracts[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    contractId: number;
};
export type GET_DETAIL_RESPONSE = Contracts;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    contract: Partial<Contracts>;
};
export type ADD_RESPONSE = Contracts;
export type UPDATE_PARAMS = PARAMS & {
    contractId: number;
};
export type UPDATE_BODY = {
    contract: Partial<Contracts>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    contractId: number;
};
export type DELETE_RESPONSE = [number];
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = {
    startDate?: [string, string];
    suspendDate?: [string, string];
};
export type EXPORT_RESPONSE = Buffer;
export type UPLOAD_PARAMS = PARAMS;
export type UPLOAD_BODY = {
    contracts: Partial<Contracts>[];
};
export type UPLOAD_RESPONSE = [number];
export type SUSPEND_PARAMS = PARAMS & {
    contractId: number;
};
export type SUSPEND_BODY = {
    suspendDate: string;
};
export type SUSPEND_RESPONSE = [number];
export type SEND_INVITE_PARAMS = PARAMS & {
    contractId: number;
};
export type SEND_INVITE_BODY = {
    contacts: string[];
};
export type SEND_INVITE_RESPONSE = ContractInviteCodes[];
export type SEARCH_PARAMS = PARAMS;
export type SEARCH_QUERY = {
    query: string;
    status: ContractStatus[];
};
export type SEARCH_RESPONSE = {
    contracts: Contracts[];
};
export type UPDATE_MEMO_PARAMS = PARAMS & {
    contractId: number;
};
export type UPDATE_MEMO_BODY = {
    contracts: Partial<Contracts>;
};
export type UPDATE_MEMO_RESPONSE = [number];
export type UPDATE_SIGNATURE_STATUS_PARAMS = PARAMS & {
    contractId: number;
};
export type UPDATE_SIGNATURE_STATUS_BODY = {
    signatureStatus: ContractSignatureStatus;
};
export type UPDATE_SIGNATURE_STATUS_RESPONSE = [number];
export type GET_CONTRACT_DEPOSIT_BILLS_PARAMS = PARAMS & {
    contractId: number;
};
export type GET_CONTRACT_DEPOSIT_BILLS_QUERY = {};
export type GET_CONTRACT_DEPOSIT_BILLS_RESPONSE = {
    bills: Bills[];
};
export type UPDATE_DOCUMENT_FILE_PARAMS = PARAMS & {
    contractId: number;
};
export type UPDATE_DOCUMENT_FILE_BODY = {
    documentFileId: number;
};
export type UPDATE_DOCUMENT_FILE_RESPONSE = [number];
export {};
//# sourceMappingURL=contract.d.ts.map