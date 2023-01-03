import { Contracts, Files } from '../../model';
import { ContractExtendStatus, ContractReceiver, Result } from '../../type';
type PARAMS = {
    contractId: number;
};
export type GET_CONTRACT_DETAIL_PARAMS = PARAMS;
export type GET_CONTRACT_DETAIL_RESPONSE = {
    contract: Contracts;
};
export type SIGN_CONTRACT_PARAMS = PARAMS;
export type SIGN_CONTRACT_BODY = {
    signatureImageId: number;
};
export type SIGN_CONTRACT_RESPONSE = {
    documentFile: Files;
};
export type UPDATE_CONTRACT_EXTEND_STATUS_PARAMS = PARAMS;
export type UPDATE_CONTRACT_EXTEND_STATUS_BODY = {
    extendStatus: ContractExtendStatus;
};
export type UPDATE_CONTRACT_EXTEND_STATUS_RESPONSE = [number];
export type UPDATE_CONTRACT_RECEIVER_PARAMS = PARAMS;
export type UPDATE_CONTRACT_RECEIVER_BODY = {
    receiver: ContractReceiver;
};
export type UPDATE_CONTRACT_RECEIVER_RESPONSE = [number];
export type DOCUMENT_EMAIL_PARAMS = PARAMS;
export type DOCUMENT_EMAIL_BODY = {
    email: string;
};
export type DOCUMENT_EMAIL_RESPONSE = Result;
export {};
//# sourceMappingURL=contract.d.ts.map