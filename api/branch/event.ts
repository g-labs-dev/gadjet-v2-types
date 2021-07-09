import { EventAttendees, Events } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 이벤트 조회
// GET /hqs/0/branches/0/events
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string }; // @@@@ 이벤트 상태로 조회?? (모집 중, 모집 마감, 종료됨)
export type GET_LIST_RESPONSE = { total: number; events: Omit<Events, "content">[] };
// ===========================

// 이벤트 상세조회
// GET /hqs/0/branches/0/events/0
export type GET_DETAIL_PARAMS = PARAMS & { eventId: number };
export type GET_DETAIL_RESPONSE = Required<Events>;
// ===========================

// 이벤트 추가
// POST /hqs/0/branches/0/events
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  event: Pick<
    Events,
    | "title"
    | "content"
    | "price"
    | "openDate"
    | "applyStartDate"
    | "applyEndDate"
    | "startDate"
    | "endDate"
    | "maxAttendeeCount"
    | "place"
    | "address"
    | "addressDetail"
    | "lat"
    | "lng"
    | "availableCreditType"
    | "onlineFlag"
    | "bannerImageId"
  >;
};
export type ADD_RESPONSE = Events;
// ===========================

// 이벤트 수정
// PUT /hqs/0/branches/0/events/0
export type UPDATE_PARAMS = PARAMS & { eventId: number };
export type UPDATE_BODY = {
  event: Pick<
    Events,
    | "title"
    | "content"
    | "price"
    | "openDate"
    | "applyStartDate"
    | "applyEndDate"
    | "startDate"
    | "endDate"
    | "maxAttendeeCount"
    | "place"
    | "address"
    | "addressDetail"
    | "lat"
    | "lng"
    | "availableCreditType"
    | "onlineFlag"
    | "bannerImageId"
  >;
};
export type UPDATE_RESPONSE = [number];
// ===========================

// 이벤트 제거
// DEL /hqs/0/branches/0/events/0
export type DELETE_PARAMS = PARAMS & { eventId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 이벤트 참가자 조회
// GET /hqs/0/branches/0/events/0/event-attendees
export type GET_ATTENDEES_PARAMS = PARAMS & { eventId: number };
export type GET_ATTENDEES_RESPONSE = Required<EventAttendees>[];
// ===========================

// 이벤트 참가자 제거
// DEL /hqs/0/branches/0/events/0/event-attendees/0
export type DELETE_ATTENDEE_PARAMS = PARAMS & { eventId: number; eventAttendeeId: number };
export type DELETE_ATTENDEE_RESPONSE = [number];
// ===========================
