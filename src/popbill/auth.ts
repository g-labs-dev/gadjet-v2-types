// https://docs.popbill.com/cashbill/node/api#JoinForm

export type PopbillJoinForm = {
  ID: string; // 6-50자
  PWD: string; // 8-20자
  LinkID: "GADJET"; // 고정
  CorpNum: string; // 사업자번호
  CeoName: string; // 대표자 성명
  CorpName: string; // 회사명
  Addr: string; // 사업장 주소
  BizType: string; // 업태
  BizClass: string; // 종목
  ContactName: string; // 담당자 성명
  ContactEmail: string; // 담당자 이메일
  ContactTEL: string; // 담당자 연락처
};
