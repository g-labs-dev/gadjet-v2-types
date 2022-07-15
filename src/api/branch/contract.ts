import { Bills, ContractInviteCodes, Contracts } from '../../model'
import { ContractSignatureStatus, ContractStatus, Pagination } from '../../type'
import { ContractSearch } from '../../type/search'

type PARAMS = { hqId: number; branchId: number }

// 계약 목록 검색
// GET /hqs/0/branches/0/contracts
export type GET_LIST_PARAMS = PARAMS
export type GET_LIST_QUERY = Pagination & ContractSearch
export type GET_LIST_RESPONSE = { total: number; contracts: Contracts[] }
// ===========================

// 계약 상세 조회
// GET /hqs/0/branches/0/contracts/0
export type GET_DETAIL_PARAMS = PARAMS & { contractId: number }
export type GET_DETAIL_RESPONSE = Contracts
// ===========================

// 계약 추가
// POST /hqs/0/branches/0/contracts
export type ADD_PARAMS = PARAMS
export type ADD_BODY = {
  contract: Partial<Contracts>
}
export type ADD_RESPONSE = Contracts
// ===========================

// 계약 업데이트
// PUT /hqs/0/branches/0/contracts/0
export type UPDATE_PARAMS = PARAMS & { contractId: number }
export type UPDATE_BODY = { contract: Partial<Contracts> }
export type UPDATE_RESPONSE = [number]
// ===========================

// 계약 제거
// DEL /hqs/0/branches/0/contracts/0
export type DELETE_PARAMS = PARAMS & { contractId: number }
export type DELETE_RESPONSE = [number]
// ===========================

// 계약 내보내기
// GET /hqs/0/branches/0/contracts/export
export type EXPORT_PARAMS = PARAMS
export type EXPORT_QUERY = { startDate?: [string, string]; suspendDate?: [string, string] } // ['YYYY-MM-DD', 'YYYY-MM-DD']
export type EXPORT_RESPONSE = Buffer
// ===========================

// 계약 데이터 업로드
// POST /hqs/0/branches/0/contracts/upload
export type UPLOAD_PARAMS = PARAMS
export type UPLOAD_BODY = { contracts: Partial<Contracts>[] } // @@@@ front 파싱 기준
export type UPLOAD_RESPONSE = [number] // create 된 계약 수
// ===========================

// 계약 종료
// PUT /hqs/0/branches/0/contracts/0/suspend
export type SUSPEND_PARAMS = PARAMS & { contractId: number }
export type SUSPEND_BODY = { suspendDate: string }
export type SUSPEND_RESPONSE = [number]
// ===========================

// 계약 초대 발송
// POST /hqs/0/branches/0/contracts/0/send-invite
export type SEND_INVITE_PARAMS = PARAMS & { contractId: number }
export type SEND_INVITE_BODY = { contacts: string[] }
export type SEND_INVITE_RESPONSE = ContractInviteCodes[]
// ===========================

// 계약 검색 (attributes: ['contractId', 'tenant','status', 'startDate', 'suspendDate'])
// GET /hqs/0/branches/0/contracts/search
export type SEARCH_PARAMS = PARAMS
export type SEARCH_QUERY = { query: string; status: ContractStatus[] }
export type SEARCH_RESPONSE = { contracts: Contracts[] }
// ===========================

// 계약 메모 수정
// PUT /hqs/0/branches/0/contracts/0/memo
export type UPDATE_MEMO_PARAMS = PARAMS & { contractId: number }
export type UPDATE_MEMO_BODY = {  contracts: Partial<Contracts> }
export type UPDATE_MEMO_RESPONSE = [number]
// ===========================

// 계약 서명 요청
// PUT /hqs/0/branches/0/contracts/0/signature-status
export type UPDATE_SIGNATURE_STATUS_PARAMS = PARAMS & { contractId: number }
export type UPDATE_SIGNATURE_STATUS_BODY = { signatureStatus: ContractSignatureStatus }
export type UPDATE_SIGNATURE_STATUS_RESPONSE = [number]
// ===========================

// 계약 보증금 청구서 조회
// GET /hqs/0/branches/0/contracts/0/deposit-bills
export type GET_CONTRACT_DEPOSIT_BILLS_PARAMS = PARAMS & { contractId: number }
export type GET_CONTRACT_DEPOSIT_BILLS_QUERY = {}
export type GET_CONTRACT_DEPOSIT_BILLS_RESPONSE = { bills: Bills[] }
// ===========================

// 계약서 업데이트
// PUT /hqs/0/branches/0/contracts/0/document-file/0
export type UPDATE_DOCUMENT_FILE_PARAMS = PARAMS & { contractId: number }
export type UPDATE_DOCUMENT_FILE_BODY = { documentFileId: number }
export type UPDATE_DOCUMENT_FILE_RESPONSE = [number]
// ===========================
