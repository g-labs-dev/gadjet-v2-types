import { Cashbill } from "./popbill/cashbill";
import { Taxinvoice } from "./popbill/taxinvoice";
import {
  BillPrice,
  BillType,
  BranchBuildingContractType,
  ContractBillingSplitType,
  ContractBillingType,
  ContractContractor,
  ContractDepositStatus,
  ContractDirector,
  ContractExtendStatus,
  ContractLateFeeType,
  ContractReceiver,
  ContractSignatureStatus,
  ContractStatus,
  ContractTenant,
  CreditType,
  CreditUsage,
  DayIndex,
  ExpenditureType,
  FileCategory,
  ImageCategory,
  ManagerJoinType,
  NotificationTemplate,
  NotificationType,
  PaymentStatus,
  PaymentType,
  ReceiptStatus,
  ReceiptType,
  Relation,
  Role,
  TenantType,
  UsedCreditAmount,
} from "./type";

export type Images = {
  imageId: number;
  size: number;
  width: number;
  height: number;
  category: ImageCategory;
  path: string;
  uri: string;
};

export type Files = {
  fileId: number;
  size: number;
  category: FileCategory;
  path: string;
  uri: string;
};

export type Banks = {
  bankCode: string;
  name: string;
};

export type Gics = {
  code: number;
  parentCode: number | null;
  depth: number;
  ko: string;
  en: string;

  children?: Relation<Gics[]>;
};

export type Dates = {
  yyyymmdd: number;
  year: number;
  month: number;
  date: number;
  dateString: string;
  dayIndex: DayIndex;
  weekendFlag: boolean;
  holidayFlag: boolean;
  nextBusinessDate: string;
};

export type Months = {
  yyyymm: number;
  year: number;
  month: number;
  monthString: string;
};

export type Hqs = {
  hqId: number;
  name: string;
  email: string;
  logoImageId: number | null;

  image?: Relation<Images>;
  branches?: Relation<Branches[]>;
  roles?: Relation<HqRoles[]>;
};

export type Branches = {
  branchId: number;
  hqId: number;
  name: string;
  contact: string;
  email: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  billingContractType: BranchBuildingContractType;
  popbillId: string | null;

  hq?: Relation<Hqs>;
  business?: Relation<BranchBusiness>;
  settlement?: Relation<BranchSettlement>;
  contractDocument?: Relation<BranchContractDocument>;
  sublet?: Relation<BranchSublet>;
  rentee?: Relation<BranchRentee>;
  automation?: Relation<BranchAutomations>;
  roles?: Relation<BranchRoles[]>;
  floors?: Relation<Floors[]>;
  spaceTypes?: Relation<SpaceTypes[]>;
};

export type BranchBusiness = {
  branchBusinessId: number;
  branchId: number;
  director: string;
  name: string;
  address: string;
  identityNumber: string;
  businessNumber: string;
  corporationNumber: string;
  businessType: string;
  businessClass: string;
  managers?: [{ name: string; department: string; tel: string; contact: string; email: string }, { name: string; department: string; tel: string; contact: string; email: string }];
};

export type BranchSettlement = {
  branchSettlementId: number;
  branchId: number;
  bankCode: string;
  bankName: string;
  account: string;
  holder: string;

  bank?: Relation<Banks>;
};

export type BranchContractDocument = {
  branchContractDocumentId: number;
  branchId: number;
  zipcode: string;
  address: string;
  addressDetail: string;
  deposit: string;
  rent: string;
  area: string;
  managementFee: string;
  signatureImageId: number | null;
  termsFileId: number | null;
  policyFileId: number | null;
  etcFileId: number | null;

  signatureImage?: Relation<Images>;
  termsFile?: Relation<Files>;
  policyFile?: Relation<Files>;
  etcFile?: Relation<Files>;
};

export type BranchSublet = {
  branchSubletId: number;
  branchId: number;
  name: string;
  businessNumber: string;
  corporationNumber: string;
  address: string;
  contact: string;
  signatureImageId: number | null;
  consentFileId: number | null;

  signatureImage?: Relation<Images>;
  consentFile?: Relation<Files>;
};

export type BranchRentee = {
  branchRenteeId: number;
  branchId: number;
  name: string;
  businessNumber: string;
  corporationNumber: string;
  address: string;
  contact: string;
  signatureImageId: number | null;

  signatureImage?: Relation<Images>;
};

export type BranchAutomations = {
  branchAutomationId: number;
  branchId: number;
  extendCheckFlag: boolean;
  extendCheckValue: number;
  billing: boolean;
  receipt: boolean;
};

export type Tenants = {
  tenantId: number;
  name: string;
  contact: string;
  email: string;
  businessNumber: string;
  corporationNumber: string;
  foreignerNumber: string;
  gicsCode: number;
  type: TenantType;
  availableCreditUsage: CreditUsage[];

  credits?: Relation<Credits>;
  gics?: Relation<Gics>;
  users?: Relation<Users[]>;
};

export type Managers = {
  managerId: number;
  legacyManagerId: string;
  email: string;
  password: string;
  name: string;
  joinType: ManagerJoinType;
  socialId: string;
  pushToken: string | null;
  profileImageId: number | null;

  profile?: Relation<Images>;
};

export type Users = {
  userId: number;
  legacyUserId: string;
  contact: string;
  password: string;
  email: string;
  name: string;
  pushToken: string | null;
  profileImageId: number | null;
  code: string;

  profile?: Relation<Images>;
  tenantRoles?: Relation<TenantRoles[]>;
};

export type HqRoles = {
  hqRoleId: number;
  hqId: number;
  managerId: number;
  adminFlag: boolean;
  dashboard: Role;
  graph: Role;
  notice: Role;
  role: Role;
  config: Role;

  hq?: Relation<Hqs>;
  manager?: Relation<Managers>;
};

export type BranchRoles = {
  branchRoleId: number;
  hqId: number;
  branchId: number;
  managerId: number;
  adminFlag: boolean;
  dashboard: Role;
  contract: Role;
  bill: Role;
  receipt: Role;
  space: Role;
  rental: Role;
  addition: Role;
  event: Role;
  tenant: Role;
  notice: Role;
  expenditure: Role;
  product: Role;
  service: Role;
  cash: Role;
  payment: Role;
  role: Role;
  accessLog: Role;
  config: Role;

  branch?: Relation<Branches>;
  manager?: Relation<Managers>;
};

export type TenantRoles = {
  tenantRoleId: number;
  tenantId: number;
  userId: number;
  adminFlag: boolean;
  contract: Role;
  bill: Role;
  rental: Role;
  product: Role;
  service: Role;
  credit: Role;
  role: Role;
  // ... 앱 메뉴들 들어감

  tenant?: Relation<Tenants>;
  user?: Relation<Users>;
};

export type RoleCodes = {
  code: string;
  hqId: number | null;
  branchId: number | null;
  to: string;
};

export type Notices = {
  noticeId: number;
  hqId: number;
  branchId: number;
  title: string;
  content: string;
  writeDate: string;
  openFlag: boolean;

  hq?: Relation<Hqs>;
  branch?: Relation<Branches>;
};

export type Floors = {
  floorId: number;
  branchId: number;
  name: string;
};

export type SpaceTypes = {
  spaceTypeId: number;
  branchId: number;
  name: string;
  virtualFlag: boolean;

  branch?: Relation<Branches>;
  spaces?: Relation<Spaces[]>;
};

export type Spaces = {
  spaceId: number;
  spaceTypeId: number;
  branchId: number;
  name: string;
  price: number;
  area: string;
  capacity: number;
  imageId: number | null;

  spaceType?: Relation<SpaceTypes>;
  image?: Relation<Images>;
  contracts?: Relation<Contracts[]>;
};

export type Additions = {
  additionId: number;
  branchId: number;
  name: string;
  price: number;
};

export type Contracts = {
  contractId: number;
  branchId: number;
  tenantId: number | null;
  startDate: string;
  endDate: string;
  suspendDate: string;
  address: string;
  population: number;
  paymentDate: number;
  billingType: ContractBillingType;
  billingSplitType: ContractBillingSplitType;
  paymentDueDate: number;
  lateFeeType: ContractLateFeeType;
  lateFee: number;
  creditAmount: number;
  publicMemo: string;
  privateMemo: string;
  status: ContractStatus;
  signatureStatus: ContractSignatureStatus;
  signatureImageId: number | null;
  documentFileId: number | null;
  extendStatus: ContractExtendStatus;
  extendContractId: number | null;
  receiver: ContractReceiver;

  tenant: ContractTenant;
  director: ContractDirector;
  contractor: ContractContractor;

  contractDeposit?: Relation<ContractDeposit>;
  contractSpaces?: Relation<ContractSpaces[]>;
  spaces?: Relation<Spaces[]>;
  contractAdditions?: Relation<ContractAdditions[]>;
  additions?: Relation<Additions[]>;
  signatureImage?: Relation<Images>;
  documentFile?: Relation<Files>;
  branch?: Relation<Branches>;
};

export type ContractSpaces = {
  contractSpaceId: number;
  contractId: number;
  spaceId: number;
  name: string;
  price: number;
};

export type ContractAdditions = {
  contractAdditionId: number;
  contractId: number;
  additionId: number;
  name: string;
  price: number;
};

export type ContractQueries = {
  contractQueryId: number;
  contractId: number;
  query: string;
};

export type ContractInviteCodes = {
  inviteCode: string;
  contractId: number;
  managerId: number;
  to: string;
  receivedFlag: boolean;

  manager?: Relation<Managers>;
};

export type Bills = {
  billId: number;
  branchId: number;
  contractId: number | null;
  tenantId: number | null;
  userId: number | null;
  type: BillType;
  price: number;
  unpaidPrice: number;
  openDate: string;
  startDate: string;
  endDate: string;
  paymentStartDate: string;
  paymentEndDate: string;
  spaces: BillPrice[];
  additions: BillPrice[];
  surcharges: BillPrice[];
  memo: string;
  receiptStatus: ReceiptStatus;
  gadjetPayFlag: boolean;
  manualFlag: boolean;

  contract?: Relation<Contracts>;
  tenant?: Relation<Tenants>;
  user?: Relation<Users>;
  payments?: Relation<Payments[]>;
  receipts?: Relation<Receipts[]>;
  branch?: Relation<Branches>;
};

export type ContractDeposit = {
  contractDepositId: number;
  branchId: number;
  contractId: number;
  billId: number;
  price: number;
  bankCode: string;
  bankName: string;
  holder: string;
  account: string;
  status: ContractDepositStatus;
};

export type Payments = {
  paymentId: number;
  branchId: number;
  billId: number;
  userId: number;
  item: string;
  type: PaymentType;
  status: PaymentStatus;
  readyDatetime: string;
  readyJson: object;
  approveDatetime: string;
  approveJson: object;
  refundDatetime: string;
  refundJson: object;
  price: number;
  commissionPrice: number;
  settlementPrice: number;
  gadjetPrice: number;
  memo: string;
  confirmFlag: boolean;
  settlementFlag: boolean;
  manualFlag: boolean;

  bill?: Relation<Bills>;
  user?: Relation<Users>;
};

export type Settlements = {
  settlementId: number;
  branchId: number;
  bankCode: string;
  bankName: string;
  account: string;
  holder: string;
  price: number;
  date: string;
  paymentJson: Payments[];
};

export type Credits = {
  creditId: number;
  hqId: number;
  tenantId: number | null;
  contractId: number | null;
  userId: number | null;
  type: CreditType;
  amount: number;
  availableStartDate: string;
  availableEndDate: string;
  availableFlag: boolean;
};

export type CreditLogs = {
  creditLogId: number;
  creditId: number;
  creditType: CreditType;
  usage: CreditUsage | null;
  amount: number;
  datetime: string;
};

export type Events = {
  eventId: number;
  branchId: number;
  title: string;
  content: string;
  price: number;
  openDate: string;
  applyStartDate: string;
  applyEndDate: string;
  startDate: string;
  endDate: string;
  maxAttendeeCount: number;
  attendeeCount: number;
  place: string;
  address: string;
  addressDetail: string;
  lat: string;
  lng: string;
  availableCreditType: CreditType[];
  onlineFlag: boolean;
  bannerImageId: number | null;

  bannerImage?: Relation<Images>;
  attendees?: Relation<EventAttendees[]>;
};

export type EventAttendees = {
  eventAttendeeId: number;
  eventId: number;
  userId: number;
  applyDatetime: string;
  usedCreditAmount: UsedCreditAmount;

  user?: Relation<Users>;
};

export type Rentals = {
  rentalId: number;
  branchId: number;
  price: number;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  availableCreditType: CreditType[];
  weekendFlag: boolean;
  shareFlag: boolean;
  imageId: number | null;

  branch?: Relation<Branches>;
  image?: Relation<Images>;
};

export type RentalReservations = {
  rentalReservationId: number;
  branchId: number;
  rentalId: number;
  tenantId: number;
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  memo: string;
  usedCreditAmount: UsedCreditAmount;
  managerFlag: boolean;

  rental?: Relation<Rentals>;
  tenant?: Relation<Tenants>;
  user?: Relation<Users>;
};

export type Products = {
  productId: number;
  branchId: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  salesAmount: number;
  availableCreditType: CreditType[];
  imageId: number | null;

  image?: Relation<Images>;
};

export type ProductSales = {
  productSaleId: number;
  branchId: number;
  productId: number;
  tenantId: number;
  userId: number;
  name: string;
  amount: number;
  price: number;
  usedCreditAmount: UsedCreditAmount;
  datetime: string;
  refundFlag: boolean;

  product?: Relation<Products>;
  tenant?: Relation<Tenants>;
  user?: Relation<Users>;
};

export type Services = {
  serviceId: number;
  branchId: number;
  name: string;
  description: string;
  price: number;
  guide: string;
  salesAmount: number;
  availableCreditType: CreditType[];
  imageId: number | null;

  image?: Relation<Images>;
};

export type ServiceSales = {
  serviceSaleId: number;
  branchId: number;
  serviceId: number;
  tenantId: number;
  userId: number;
  name: string;
  amount: number;
  price: number;
  usedCreditAmount: UsedCreditAmount;
  datetime: string;
  refundFlag: boolean;

  service?: Relation<Services>;
  tenant?: Relation<Tenants>;
  user?: Relation<Users>;
};

export type Receipts = {
  receiptId: number;
  parentReceiptId: number | null;
  branchId: number;
  billId: number;
  type: ReceiptType;
  json: Taxinvoice | Cashbill;
  status: ReceiptStatus;
  price: number;
  ntsConfirmNumber: string;
  ntsResultCode: string;
  mgtKey: string;
  requestDatetime: string;
};

export type ManagerNotifications = {
  managerNotificationId: number;
  managerId: number;
  title: string;
  content: string;
  sendDatetime: string;
  link: string;
  readFlag: boolean;
};

export type UserNotifications = {
  userNotificationId: number;
  userId: number;
  title: string;
  content: string;
  sendDatetime: string;
  link: string;
  readFlag: boolean;
};

export type BranchCards = {
  branchCardId: number;
  branchId: number;
  billKey: string;
  cardCode: string;
  cardName: string;
  cardNumber: string;
  acquCardCode: string;
  acquCardName: string;
  registDate: string;
  corporationFlag: boolean;
  lastUsedFlag: boolean;
  billingFlag: boolean;
};

export type TenantCards = {
  tenantCardId: number;
  tenantId: number;
  billKey: string;
  cardCode: string;
  cardName: string;
  cardNumber: string;
  acquCardCode: string;
  acquCardName: string;
  registDate: string;
  corporationFlag: boolean;
  lastUsedFlag: boolean;
  billingFlag: boolean;
};

export type UserCards = {
  userCardId: number;
  userId: number;
  billKey: string;
  cardCode: string;
  cardName: string;
  cardNumber: string;
  acquCardCode: string;
  acquCardName: string;
  registDate: string;
  corporationFlag: boolean;
  lastUsedFlag: boolean;
  billingFlag: boolean;
};

export type Expenditure = {
  expenditureId: number;
  branchId: number;
  managerId: number | null;
  managerName: string;
  date: string;
  type: ExpenditureType;
  price: number;
  memo: string;

  manager?: Relation<Managers>;
};

export type Cash = {
  cashId: number;
  branchId: number;
  managerId: number | null;
  managerName: string;
  date: string;
  price: number;
  memo: string;
  reserve: number;

  manager?: Relation<Managers>;
};

export type AccessLogs = {
  accessLogId: number;
  hqId: number;
  branchId: number;
  managerId: number;
  managerName: string;
  title: string;
  url: string;
  ip: string;
  ua: string;
  successFlag: boolean;
  datetime: string;

  manager?: Relation<Managers>;
};

export type ManagerInviteCodes = {
  managerInviteCode: string;
  hqId: number | null;
  branchId: number | null;
  managerId: number;
  hqRole: Partial<HqRoles> | null; // branchId === null && hqId 일 때 사용
  branchRole: Partial<BranchRoles> | null; // hqId === null && branchId 일 때 사용
  to: string;
  receivedFlag: boolean;

  manager?: Relation<Managers>;
};

export type NotificationSendLogs = {
  notificationSendLogId: number;
  hqId: number | null;
  branchId: number | null;
  managerId: string;
  type: NotificationType;
  to: string; // 전화번호 or email
  template: NotificationTemplate;
  data: any; // 템플릿에 맞는 데이터 json
  datetime: string; // YYYY-MM-DD HH:mm:ss

  manager?: Relation<Managers>;
};
