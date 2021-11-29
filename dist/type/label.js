"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billType = exports.ntsResultCode = exports.expenditureType = exports.receiptStatus = exports.receiptType = exports.creditUsage = exports.creditType = exports.paymentStatus = exports.paymentType = exports.contractDepositStatus = exports.contractExtendStatus = exports.contractSignatureStatus = exports.contractStatus = exports.contractLateFeeType = exports.contractBillingType = exports.tenantType = void 0;
exports.tenantType = {
    'sole-proprietor': '개인사업자',
    'corporation-business': '법인사업자',
    local: '비사업자 내국인',
    foreigner: '비사업자 외국인',
};
exports.contractBillingType = {
    prepayment: '선납',
    monthly: '월납',
};
exports.contractLateFeeType = {
    none: '없음',
    fix: '고정금액',
    rate: '비율',
};
exports.contractStatus = {
    'before-started': '시작전',
    started: '시작됨',
    expired: '만료됨',
    suspended: '조기종료됨',
    extended: '연장됨',
};
exports.contractSignatureStatus = {
    none: '-',
    waiting: '서명대기',
    signed: '서명완료',
};
exports.contractExtendStatus = {
    none: '-',
    asked: '확인 중',
    approval: '연장동의',
    refusal: '연장거절',
};
exports.contractDepositStatus = {
    unpaid: '미납',
    paid: '납부완료',
    returned: '반환완료',
};
exports.paymentType = {
    card: '카드',
    transfer: '실시간계좌이체',
    direct: '무통장입금',
    'oversea-card': '해외카드',
    paypal: '페이팔',
    alipay: '알리페이',
    wechatpay: '위쳇페이',
    cash: '현금',
};
exports.paymentStatus = {
    ready: '결제준비',
    approve: '결제완료',
    refund: '결제취소(환불)',
};
exports.creditType = {
    contract: '계약',
    buy: '구매',
    mileage: '마일리지',
};
exports.creditUsage = {
    rental: '대관/대여',
    store: '스토어',
    service: '서비스',
    event: '이벤트',
    purchase: '구매',
    etc: '기타',
};
exports.receiptType = {
    'tax-invoice': '세금계산서',
    'cash-receipt': '현금영수증',
};
exports.receiptStatus = {
    none: '증빙 안함',
    'tax-invoice-request': '세금계산서 발행 요청',
    'tax-invoice-fail': '세금계산서 발행 실패',
    'tax-invoice-done': '세금계산서 발행 완료',
    'tax-invoice-update-request': '세금계산서 수정 발행 요청',
    'tax-invoice-updated': '세금계산서 수정 발행 됨',
    'cash-receipt-request': '현금영수증 발행 요청',
    'cash-receipt-fail': '현금영수증 발행 실패',
    'cash-receipt-done': '현금영수증 발행 완료',
    'cash-receipt-cancel': '현금영수증 취소 발행 됨',
};
exports.expenditureType = {
    card: '카드',
    cash: '현금',
    transfer: '계좌이체',
    commission: '결제수수료',
};
exports.ntsResultCode = {
    // 세금계산서 관련
    SUC001: '성공',
    SYN002: '전자서명 오류',
    SYN003: '승인번호 오류',
    SYN004: '전자세금계산서 스키마 오류',
    ERR001: '공급자 사업자번호 오류',
    ERR002: '공급받는자 사업자번호 오류',
    ERR003: '수탁자 사업자번호 오류',
    ERR005: '발행일시 오류',
    ERR006: '작성일자 오류',
    ERR007: '공급가액, 세액 오류',
    ERR008: '코드 유형 오류',
    ERR009: '폐업사업자 발행 오류',
    ERR010: '국세청 등록번호 오류',
    ERR011: '당초승인번호 오류',
    ERR099: '정의되지 않는 기타 오류',
    // 현금영수증 관련
    '0000': '정상승인',
    TX02: '거래일자 오류',
    TX03: '원거래 없음',
    TX04: '가맹점이 국세청 블랙리스트에 등록된 경우',
    TX05: '개시 이전 거래',
    TX06: '종료 이후 거래',
    TX07: '해지 가맹점',
    TX08: '취소금액 오류',
    TX09: '원본/취소 현금영수증의 거래정보 불일치',
    TX10: '미가입 가맹점 거래',
    VA01: '필수값 한개라도 빠졌을때 필수값 오류',
    VA02: '거래구분 값 오류',
    VA03: '원거래 없음',
    VA07: '가맹점 사업자번호 오류',
    VA08: '거래일자 오류',
    VA09: '공급가액, 부가세, 봉사료 <br>거래금액 합계 오류',
    VA10: '공급가액, 부가세 오류',
};
exports.billType = {
    deposit: '보증금',
    sales: '매출',
};
//# sourceMappingURL=label.js.map