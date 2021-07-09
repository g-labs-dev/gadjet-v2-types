import { Contracts } from "../../model";
import { Pagination } from "../../type";

type PARAMS = { hqId: number; branchId: number };

// 계약 목록 검색
// GET /hqs/0/branches/0/contracts
export type GET_LIST_PARAMS = PARAMS;
export type GET_LIST_QUERY = Pagination & { query: string; spaceTypes: number[] };
export type GET_LIST_RESPONSE = { total: number; contracts: Contracts[] };
// ===========================

// 계약 상세 조회
// GET /hqs/0/branches/0/contracts/0
export type GET_DETAIL_PARAMS = PARAMS & { contractId: number };
export type GET_DETAIL_RESPONSE = Required<Contracts>;
// ===========================

// 계약 추가
// POST /hqs/0/branches/0/contracts
export type ADD_PARAMS = PARAMS;
export type ADD_BODY = {
  contract: Pick<
    Contracts,
    | "tenantId"
    | "startDate"
    | "endDate"
    | "address"
    | "population"
    | "paymentDate"
    | "billingType"
    | "billingSplitType"
    | "paymentDueDate"
    | "lateFeeType"
    | "lateFee"
    | "publicMemo"
    | "privateMemo"
    | "status"
    | "signatureImageId"
    | "documentFileId"
    | "extendStatus"
    | "extendContractId"
    | "director"
    | "contractor"
    | "spaces"
    | "additions"
  >;
};
export type ADD_RESPONSE = Contracts;
// ===========================

// 계약 업데이트
// PUT /hqs/0/branches/0/contracts/0
export type UPDATE_PARAMS = PARAMS & { contractId: number };
export type UPDATE_BODY = { contract: Partial<Contracts> };
export type UPDATE_RESPONSE = [number];
// ===========================

// 계약 제거
// DEL /hqs/0/branches/0/contracts/0
export type DELETE_PARAMS = PARAMS & { contractId: number };
export type DELETE_RESPONSE = [number];
// ===========================

// 계약 내보내기
// GET /hqs/0/branches/0/contracts/export
export type EXPORT_PARAMS = PARAMS;
export type EXPORT_QUERY = { startDate: [string, string]; suspendDate: [string, string] }; // ['YYYY-MM-DD', 'YYYY-MM-DD']
export type EXPORT_RESPONSE = any; // @@@@ xlsx
// ===========================

// 계약 데이터 업로드
// POST /hqs/0/branches/0/contracts/upload
export type UPLOAD_PARAMS = PARAMS;
export type UPLOAD_BODY = { contracts: Partial<Contracts> }; // @@@@ front 파싱 기준
export type UPLOAD_RESPONSE = [number]; // create 된 계약 수
// ===========================
