import { BranchAutomations, BranchBusinesses, BranchContractDocuments, Branches, BranchRentees, BranchSettlements, BranchSublets } from '../../model';
declare type PARAMS = {
    hqId: number;
};
export declare type GET_DETAIL_PARAMS = PARAMS & {
    branchId: number;
};
export declare type GET_DETAIL_RESPONSE = Branches;
export declare type GET_LIST_PARAMS = PARAMS;
export declare type GET_LIST_RESPONSE = Branches[];
export declare type ADD_PARAMS = PARAMS;
export declare type ADD_BODY = {
    branch: Partial<Branches>;
};
export declare type ADD_RESPONSE = Branches;
export declare type ADD_BUSINESS_BODY = {
    branchBusiness: Partial<BranchBusinesses>;
};
export declare type ADD_BUSINESS_RESPONSE = BranchBusinesses;
export declare type ADD_SETTLEMENT_BODY = {
    branchSettlement: Partial<BranchSettlements>;
};
export declare type ADD_SETTLEMENT_RESPONSE = BranchSettlements;
export declare type ADD_CONTRACT_DOCUMENT_BODY = {
    branchContractDocument: Partial<BranchContractDocuments>;
};
export declare type ADD_CONTRACT_DOCUMENT_RESPONSE = BranchContractDocuments;
export declare type ADD_SUBLET_BODY = {
    branchSublet: Partial<BranchSublets>;
};
export declare type ADD_SUBLET_RESPONSE = BranchSublets;
export declare type ADD_RENTEE_BODY = {
    branchRentee: Partial<BranchRentees>;
};
export declare type ADD_RENTEE_RESPONSE = BranchRentees;
export declare type ADD_AUTOMATION_BODY = {
    branchAutomation: Partial<BranchAutomations>;
};
export declare type ADD_AUTOMATION_RESPONSE = BranchAutomations;
export declare type UPDATE_BUSINESS_BODY = {
    branchBusiness: Partial<BranchBusinesses>;
};
export declare type UPDATE_BUSINESS_RESPONSE = BranchBusinesses;
export declare type UPDATE_SETTLEMENT_BODY = {
    branchSettlement: Partial<BranchSettlements>;
};
export declare type UPDATE_SETTLEMENT_RESPONSE = BranchSettlements;
export declare type UPDATE_CONTRACT_DOCUMENT_BODY = {
    branchContractDocument: Partial<BranchContractDocuments>;
};
export declare type UPDATE_CONTRACT_DOCUMENT_RESPONSE = BranchContractDocuments;
export declare type UPDATE_SUBLET_BODY = {
    branchSublet: Partial<BranchSublets>;
};
export declare type UPDATE_SUBLET_RESPONSE = BranchSublets;
export declare type UPDATE_RENTEE_BODY = {
    branchRentee: Partial<BranchRentees>;
};
export declare type UPDATE_RENTEE_RESPONSE = BranchRentees;
export declare type UPDATE_AUTOMATION_BODY = {
    branchAutomation: Partial<BranchAutomations>;
};
export declare type UPDATE_AUTOMATION_RESPONSE = BranchAutomations;
export {};
//# sourceMappingURL=branch.d.ts.map