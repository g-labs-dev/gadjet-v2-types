import { BranchNotifications } from '../../model'
import {} from '../../type'

type PARAMS = { managerId: number; branchId: number }

// 알림 조회
// GET /branches/0/managers/0/notifications
export type GET_PARAMS = PARAMS
export type GET_RESPONSE = BranchNotifications[]
// ===========================
