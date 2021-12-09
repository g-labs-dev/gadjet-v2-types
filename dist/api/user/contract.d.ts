import { Contracts, Files } from '../../model';
import { ContractExtendStatus, ContractReceiver } from '../../type';
declare type PARAMS = {
    contractId: number;
};
export declare type GET_CONTRACT_DETAIL_PARAMS = PARAMS;
export declare type GET_CONTRACT_DETAIL_RESPONSE = {
    contract: Contracts;
};
export declare type SIGN_CONTRACT_PARAMS = PARAMS;
export declare type SIGN_CONTRACT_BODY = {
    signatureImageId: number;
};
export declare type SIGN_CONTRACT_RESPONSE = {
    documentFile: Files;
};
export declare type UPDATE_CONTRACT_EXTEND_STATUS_PARAMS = PARAMS;
export declare type UPDATE_CONTRACT_EXTEND_STATUS_BODY = {
    extendStatus: ContractExtendStatus;
};
export declare type UPDATE_CONTRACT_EXTEND_STATUS_RESPONSE = [number];
export declare type UPDATE_CONTRACT_RECEIVER_PARAMS = PARAMS;
export declare type UPDATE_CONTRACT_RECEIVER_BODY = {
    receiver: ContractReceiver;
};
export declare type UPDATE_CONTRACT_RECEIVER_RESPONSE = [number];
export declare type DOCUMENT_EMAIL_PARAMS = PARAMS;
export declare type DOCUMENT_EMAIL_BODY = {
    email: string;
};
export declare type DOCUMENT_EMAIL_RESPONSE = boolean;
export {};
//# sourceMappingURL=contract.d.ts.map