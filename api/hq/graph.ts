// month 포맷 YYYY-MM-DD

type PARAMS = { hqId: number };

// 매출 그래프 (월 별 group)
// GET /hqs/0/graphs/sales
export type GRAPH_PAYMENT_PARAMS = PARAMS;
export type GRAPH_PAYMENT_QUERY = { date: [string, string] };
export type GRAPH_PAYMENT_RESPONSE = {
  payments: { month: string; price: number }[]; // 결제내역 (청구서 기준)
  expectPayments: { month: string; price: number }[]; // 예상 결제내역 (청구서 기준)
  expenditure: { month: string; price: number }[]; // 지출
};
// ===========================

// 예상 매출 (지점 별 group)
// GET /hqs/0/graphs/expect-payments
export type GRAPH_EXPECT_PAYMENT_PARAMS = PARAMS;
export type GRAPH_EXPECT_PAYMENT_QUERY = { date: [string, string] };
export type GRAPH_EXPECT_PAYMENT_RESPONSE = {
  total: { month: string; price: number }[]; // 전 지점 합계
  [branchName: string]: { month: string; price: number }[]; // 지점별
};
// ===========================

// 계약 (지점 별 group)
// GET /hqs/0/graphs/contracts
export type GRAPH_CONTRACT_PARAMS = PARAMS;
export type GRAPH_CONTRACT_QUERY = { date: [string, string] };
export type GRAPH_CONTRACT_RESPONSE = {
  total: { month: string; start: number; end: number }[]; // 전 지점 합계
  [branchName: string]: { month: string; start: number; end: number }[]; // 지점별
};
/**
 *  start: 시작계약
 *  end: 종료계약
 */
// ===========================

// 공간 유형 별 매출 (지점 별, 공간 유형 별 group)
// GET /hqs/0/graphs/contracts
export type GRAPH_SPACE_TYPE_PARAMS = PARAMS;
export type GRAPH_SPACE_TYPE_QUERY = { date: [string, string] };
export type GRAPH_SPACE_TYPE_RESPONSE = {
  [branchName: string]: {
    [spaceTypeName: string]: { month: string; price: number }[];
  }[]; // 지점별 (key = 지점 아이디)
};
// ===========================
