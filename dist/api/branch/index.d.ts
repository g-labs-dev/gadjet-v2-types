import { BranchAutomations, BranchBusinesses, BranchContractDocuments, Branches, BranchNotifications, BranchRentees, BranchSettlements, BranchSublets } from '../../model';
import { PopbillJoinForm } from '../../popbill/auth';
import { Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_DETAIL_PARAMS = PARAMS;
export declare type GET_DETAIL_RESPONSE = Branches;
export declare type UPDATE_PARAMS = PARAMS;
export declare type UPDATE_BODY = {
    branch: Partial<Branches>;
};
export declare type UPDATE_RESPONSE = [number];
export declare type UPDATE_BUSINESS_PARAMS = PARAMS;
export declare type UPDATE_BUSINESS_BODY = {
    business: Partial<BranchBusinesses>;
};
export declare type UPDATE_BUSINESS_RESPONSE = [number];
export declare type UPDATE_SETTLEMENT_PARAMS = PARAMS;
export declare type UPDATE_SETTLEMENT_BODY = {
    settlement: Partial<BranchSettlements>;
};
export declare type UPDATE_SETTLEMENT_RESPONSE = [number];
export declare type UPDATE_CONTRACT_DOCUMENT_PARAMS = PARAMS;
export declare type UPDATE_CONTRACT_DOCUMENT_BODY = {
    contractDocument: Partial<BranchContractDocuments>;
};
export declare type UPDATE_CONTRACT_DOCUMENT_RESPONSE = [number];
export declare type UPDATE_SUBLET_PARAMS = PARAMS;
export declare type UPDATE_SUBLET_BODY = {
    sublet: Partial<BranchSublets>;
};
export declare type UPDATE_SUBLET_RESPONSE = [number];
export declare type UPDATE_RENTEE_PARAMS = PARAMS;
export declare type UPDATE_RENTEE_BODY = {
    rentee: Partial<BranchRentees>;
};
export declare type UPDATE_RENTEE_RESPONSE = [number];
export declare type GET_AUTOMATION_PARAMS = PARAMS;
export declare type GET_AUTOMATION_RESPONSE = {
    automation: BranchAutomations;
};
export declare type UPDATE_AUTOMATION_PARAMS = PARAMS;
export declare type UPDATE_AUTOMATION_BODY = {
    automation: Partial<BranchAutomations>;
};
export declare type UPDATE_AUTOMATION_RESPONSE = [number];
export declare type JOIN_POPBILL_PARAMS = PARAMS;
export declare type JOIN_POPBILL_BODY = {
    form: PopbillJoinForm;
};
export declare type JOIN_POPBILL_RESPONSE = [number];
export declare type GET_BRANCH_NOTIFICATIONS_PARAMS = PARAMS;
export declare type GET_BRANCH_NOTIFICATIONS_QUERY = Pagination;
export declare type GET_BRANCH_NOTIFICATIONS_RESPONSE = {
    total: number;
    branchNotifications: BranchNotifications[];
};
export {};
//# sourceMappingURL=index.d.ts.map