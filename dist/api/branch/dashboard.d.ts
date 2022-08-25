import { Tenants } from '../../model';
import { BranchDashboardDayEvent, BranchDashboardDayEventDetail, BranchDashboardEventSummary, Pagination } from '../../type';
declare type PARAMS = {
    hqId: number;
    branchId: number;
};
export declare type GET_EVENT_PARAMS = PARAMS;
export declare type GET_EVENT_QUERY = {
    date: [string, string];
};
export declare type GET_EVENT_RESPONSE = {
    date: string;
    event: BranchDashboardDayEvent;
}[];
export declare type GET_EVENT_SUMMARY_PARAMS = PARAMS;
export declare type GET_EVENT_SUMMARY_QUERY = {
    date: [string, string];
};
export declare type GET_EVENT_SUMMARY_RESPONSE = BranchDashboardEventSummary;
export declare type GET_EVENT_DETAIL_PARAMS = PARAMS & {
    date: string;
};
export declare type GET_EVENT_DETAIL_RESPONSE = BranchDashboardDayEventDetail;
export declare type GET_TENANT_PARAMS = PARAMS;
export declare type GET_TENANT_QUERY = Pagination & {
    query: string;
};
export declare type GET_TENANT_RESPONSE = {
    total: number;
    tenants: Tenants[];
};
export {};
//# sourceMappingURL=dashboard.d.ts.map