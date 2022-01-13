import { BranchNotifications } from '../../model'
import {} from '../../type'

type PARAMS = { managerId: number }

// 알림 조회
// GET /managers/0/notifications
export type GET_PARAMS = PARAMS
export type GET_RESPONSE = BranchNotifications[]
// ===========================
