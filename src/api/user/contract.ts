import { Contracts, Files } from '../../model'
import { ContractExtendStatus, ContractReceiver, Result } from '../../type'

type PARAMS = { contractId: number }

// 계약 상세조회
// GET /contracts/0
export type GET_CONTRACT_DETAIL_PARAMS = PARAMS
export type GET_CONTRACT_DETAIL_RESPONSE = { contract: Contracts }
// ===========================

// 계약 서명
// POST /contracts/0/signature
export type SIGN_CONTRACT_PARAMS = PARAMS
export type SIGN_CONTRACT_BODY = { signatureImageId: number }
export type SIGN_CONTRACT_RESPONSE = { documentFile: Files }
// ===========================

// 계약 연장 상태 수정
// UPDATE /contracts/0/extend-status
export type UPDATE_CONTRACT_EXTEND_STATUS_PARAMS = PARAMS
export type UPDATE_CONTRACT_EXTEND_STATUS_BODY = { extendStatus: ContractExtendStatus }
export type UPDATE_CONTRACT_EXTEND_STATUS_RESPONSE = [number]
// ===========================

// 계약 알림 담당자 수정
// UPDATE /contracts/0/receiver
export type UPDATE_CONTRACT_RECEIVER_PARAMS = PARAMS
export type UPDATE_CONTRACT_RECEIVER_BODY = { receiver: ContractReceiver }
export type UPDATE_CONTRACT_RECEIVER_RESPONSE = [number]
// ===========================

// 계약서 이메일로 받기
// POST /contracts/0/document/email
export type DOCUMENT_EMAIL_PARAMS = PARAMS
export type DOCUMENT_EMAIL_BODY = { email: string }
export type DOCUMENT_EMAIL_RESPONSE = Result
// ===========================
