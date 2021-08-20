import { BranchDashboardDayEvent, BranchDashboardDayEventDetail, BranchDashboardEventSummary } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 대시보드 이벤트 조회
// GET /hqs/0/branches/0/dashboard/events
export type GET_EVENT_PARAMS = PARAMS;
export type GET_EVENT_QUERY = { date: [string, string] }; // [YYYY-MM-DD, YYYY-MM-DD]
export type GET_EVENT_RESPONSE = { date: string; event: BranchDashboardDayEvent }[]; // YYYY-MM-DD
// ===========================

// 이벤트 요약 조회
// GET /hqs/0/branches/0/dashboard/event-summary
export type GET_EVENT_SUMMARY_PARAMS = PARAMS;
export type GET_EVENT_SUMMARY_QUERY = { date: [string, string] };
export type GET_EVENT_SUMMARY_RESPONSE = BranchDashboardEventSummary;
// ===========================

// 이벤트 상세 조회
// GET /hqs/0/branches/0/dashboard/events/2021-01-01
export type GET_EVENT_DETAIL_PARAMS = PARAMS & { date: string }; // YYYY-MM-DD
export type GET_EVENT_DETAIL_RESPONSE = BranchDashboardDayEventDetail;
// ===========================
