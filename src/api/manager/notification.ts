import { ManagerNotifications } from '../../model'
import {} from '../../type'

type PARAMS = { managerId: number }

// 알림 조회
// GET /managers/0/notifications
export type GET_PARAMS = PARAMS
export type GET_RESPONSE = ManagerNotifications[]
// ===========================

// 알림 읽음
// PUT /managers/0/notifications/0/read
export type READ_PARAMS = PARAMS & { managerNotificationId: number }
export type READ_RESPONSE = [number]
// ===========================

// 알림 모두 읽음
// PUT /managers/0/notifications/read-all
export type READ_ALL_PARAMS = PARAMS
export type READ_ALL_RESPONSE = [number]
// ===========================

// 알림 삭제
// DEL /managers/0/notifications/0
export type DELETE_PARAMS = PARAMS & { managerNotificationId: number }
export type DELETE_RESPONSE = [number]
// ===========================
