import { EventAttendees, Events } from '../../model';
import { Pagination } from '../../type';
import { EventSearch } from '../../type/search';
type PARAMS = {
    hqId: number;
    branchId: number;
};
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & EventSearch;
export type GET_LIST_RESPONSE = {
    total: number;
    events: Events[];
};
export type GET_DETAIL_PARAMS = PARAMS & {
    eventId: number;
};
export type GET_DETAIL_RESPONSE = Events;
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
    event: Partial<Events>;
};
export type ADD_RESPONSE = Events;
export type UPDATE_PARAMS = PARAMS & {
    eventId: number;
};
export type UPDATE_BODY = {
    event: Partial<Events>;
};
export type UPDATE_RESPONSE = [number];
export type DELETE_PARAMS = PARAMS & {
    eventId: number;
};
export type DELETE_RESPONSE = [number];
export type GET_ATTENDEES_PARAMS = PARAMS & {
    eventId: number;
};
export type GET_ATTENDEES_RESPONSE = EventAttendees[];
export type DELETE_ATTENDEE_PARAMS = PARAMS & {
    eventId: number;
    eventAttendeeId: number;
};
export type DELETE_ATTENDEE_RESPONSE = [number];
export {};
//# sourceMappingURL=event.d.ts.map