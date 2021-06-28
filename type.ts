export type ImageCategory =
  | "hq"
  | "branch"
  | "rental"
  | "room"
  | "tenant"
  | "user"
  | "manager"
  | "event"
  | "signature";

export type FileCategory =
  | "branch-terms" // 지점 이용약관
  | "branch-policy" // 지점 개인정보처리방침
  | "branch-etc" // 지점 기타 안내문
  | "sublet-consent" // 전대동의서
  | "sublet-document" // 전대차 계약서
  | "rentee-document" // 임대차 계약서
  | "contract-document"; // 계약서

export type TenantType =
  | "sole-proprietor" // 개인사업자
  | "corporation-business" // 법인사업자
  | "local" // 비사업자 내국인
  | "foreigner"; // 비사업자 외국인

export type ManagerJoinType = "local" | "google";

export type Role =
  | 1 // 편집, 조회
  | 2 // 조회
  | 3; // 권한없음

export type ContractBillingType =
  | "prepayment" // 선납
  | "monthly"; // 월세

export type ContractBillingSplitType =
  | "A" // 월 기준 분할
  | "B"; // 30일 기준 분할

export type ContractLateFeeType =
  | "none" // 연체료 부과 안함
  | "fix" // 고정금액
  | "rate"; // 이용료의 비율

export type ContractStatus =
  | "before-started" // 시작전
  | "started" // 시작됨
  | "suspended" // 종료됨
  | "extended"; // 연장됨

export type ContractSignatureStatus =
  | "none" // 서명불가, 서명 전
  | "waiting" // 서명가능, 서명 대기
  | "signed"; // 서명됨

export type ContractExtendStatus =
  | "none" // 아무것도 안함
  | "asked" // 연장할지 물어봄
  | "approval" // 연장한다고 대답함
  | "refusal"; // 연장거절

export type ContractDirector = {
  name: string;
  contact: string;
  email: string;
  residentNumber: string; // 주민등록번호
  corporationNumber: string; // 법인등록번호
};
export type ContractContractor = {
  name: string;
  contact: string;
  email: string;
  relationshipWithDirector: string; // 대표자와의 관계 (ex. 본인, 부모, ...)
};

export type Surcharges = {
  name: string;
  price: number;
};

export type BillType =
  | "deposit" // 보증금 청구서
  | "sales"; // 매출 청구서

export type ReceiptStatus =
  | "none" // 증빙 안함
  | "tax-invoice-request" // 세금계산서 요청
  | "tax-invoice-fail" // 세금계산서 실패
  | "tax-invoice-done" // 세금계산서 완료
  | "tax-invoice-updated" // 세금계산서 수정 발행 됨
  | "cash-receipt-request" // 현금영수증 요청
  | "cash-receipt-fail" // 현금영수증 실패
  | "cash-receipt-done" // 현금영수증 완료
  | "cash-receipt-cancel"; // 현금영수증 취소

export type ContractDepositStatus =
  | "unpaid" // 미납
  | "paid" // 납부
  | "returned"; // 반환됨

export type PaymentType =
  | "card" // 카드결제
  | "transfer" // 실시간계좌이체
  | "direct" // 무통장입금
  | "oversea-card" // 해외카드
  | "paypal" // 페이팔
  | "alipay" // 알리페이
  | "wechatpay"; // 위쳇페이

export type PaymentStatus =
  | "ready" // 결제준비
  | "approve" // 결제완료
  | "cancel"; // 결제취소(=환불)

export type CreditType =
  | "contract" // 계약크레딧 (=무료크레딧)
  | "buy" // 구매크레딧 (=유료크레딧)
  | "mileage"; // 마일리지 크레딧 (=가라지 크레딧)

export type CreditUsage =
  | "rental" // 대관/대여
  | "store" // 스토어
  | "service" // 서비스
  | "event"; // 이벤트

export type UsedCreditAmount = {
  [K in CreditType]?: number;
};

export type ReceiptType =
  | "tax-invoice" // 세금계산서
  | "cash-receipt"; // 현금영수증

// 일 | 월 | 화 | 수 | 목 | 금 | 토
export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type BillPrice = { name: string; price: number };
