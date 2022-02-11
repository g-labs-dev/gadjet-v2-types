import { BranchAutomations, BranchBusinesses, BranchContractDocuments, Branches, BranchRentees, BranchSettlements, BranchSublets } from '../../model';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_QUERY = {};
export declare type GET_LIST_RESPONSE = Branches[];
export declare type GET_DETAIL_PARAMS = PARAMS & {
    branchId: number;
};
export declare type GET_DETAIL_RESPONSE = Branches;
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    branch: Partial<Branches>;
};
export declare type ADD_RESPONSE = Branches;
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
export declare type UPDATE_AUTOMATION_PARAMS = PARAMS;
export declare type UPDATE_AUTOMATION_BODY = {
    automation: Partial<BranchAutomations>;
};
export declare type UPDATE_AUTOMATION_RESPONSE = [number];
export {};
//# sourceMappingURL=branch.d.ts.map