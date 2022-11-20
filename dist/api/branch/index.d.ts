import { BranchAutomations, BranchBusinesses, BranchContractDocuments, Branches, BranchNotifications, BranchRentees, BranchSettlements, BranchSublets } from '../../model';
import { PopbillJoinForm } from '../../popbill/auth';
import { Pagination, Result } from '../../type';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_DETAIL_PARAMS = PARAMS;
export type GET_DETAIL_RESPONSE = Branches;
export type UPDATE_PARAMS = PARAMS;
export type UPDATE_BODY = {
    branch: Partial<Branches>;
};
export type UPDATE_RESPONSE = [number];
export type UPDATE_BUSINESS_PARAMS = PARAMS;
export type UPDATE_BUSINESS_BODY = {
    business: Partial<BranchBusinesses>;
};
export type UPDATE_BUSINESS_RESPONSE = [number];
export type UPDATE_SETTLEMENT_PARAMS = PARAMS;
export type UPDATE_SETTLEMENT_BODY = {
    settlement: Partial<BranchSettlements>;
};
export type UPDATE_SETTLEMENT_RESPONSE = [number];
export type UPDATE_CONTRACT_DOCUMENT_PARAMS = PARAMS;
export type UPDATE_CONTRACT_DOCUMENT_BODY = {
    contractDocument: Partial<BranchContractDocuments>;
};
export type UPDATE_CONTRACT_DOCUMENT_RESPONSE = [number];
export type UPDATE_SUBLET_PARAMS = PARAMS;
export type UPDATE_SUBLET_BODY = {
    sublet: Partial<BranchSublets>;
};
export type UPDATE_SUBLET_RESPONSE = [number];
export type UPDATE_RENTEE_PARAMS = PARAMS;
export type UPDATE_RENTEE_BODY = {
    rentee: Partial<BranchRentees>;
};
export type UPDATE_RENTEE_RESPONSE = [number];
export type GET_AUTOMATION_PARAMS = PARAMS;
export type GET_AUTOMATION_RESPONSE = {
    automation: BranchAutomations;
};
export type UPDATE_AUTOMATION_PARAMS = PARAMS;
export type UPDATE_AUTOMATION_BODY = {
    automation: Partial<BranchAutomations>;
};
export type UPDATE_AUTOMATION_RESPONSE = [number];
export type JOIN_POPBILL_PARAMS = PARAMS;
export type JOIN_POPBILL_BODY = {
    form: PopbillJoinForm;
};
export type JOIN_POPBILL_RESPONSE = Result;
export type GET_BRANCH_NOTIFICATIONS_PARAMS = PARAMS;
export type GET_BRANCH_NOTIFICATIONS_QUERY = Pagination;
export type GET_BRANCH_NOTIFICATIONS_RESPONSE = {
    total: number;
    branchNotifications: BranchNotifications[];
};
export type GET_REMAIN_DATE = PARAMS & {
    managerId: number;
};
export type GET_REMAIN_DATE_RESPONSE = Result & {
    type: number;
};
export type UPDATE_CHARGE_NOTICE_PARAMS = PARAMS;
export type UPDATE_CHARGE_NOTICE_BODY = {
    chargeNotice: number;
    managerId: number;
};
export type UPDATE_CHARGE_NOTICE_RESPONSE = Result;
export {};
//# sourceMappingURL=index.d.ts.map