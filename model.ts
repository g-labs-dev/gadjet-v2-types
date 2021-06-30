import {
  BillPrice,
  BillType,
  ContractBillingSplitType,
  ContractBillingType,
  ContractContractor,
  ContractDepositStatus,
  ContractDirector,
  ContractExtendStatus,
  ContractLateFeeType,
  ContractSignatureStatus,
  ContractStatus,
  CreditType,
  CreditUsage,
  DayIndex,
  FileCategory,
  ImageCategory,
  ManagerJoinType,
  PaymentStatus,
  PaymentType,
  ReceiptStatus,
  ReceiptType,
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
  parentCode: number;
  depth: number;
  ko: string;
  en: string;
};

export type Dates = {
  yyyymmdd: number;
  year: number;
  month: number;
  date: number;
  dateString: string;
  dayIndex: DayIndex;
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

  image?: Images;
  branches: Branches[];
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
  popbillId: string | null;

  hq: Hqs;
  business: BranchBusiness;
  settlement: BranchSettlement;
  contractDocument?: BranchContractDocument;
  sublet?: BranchSublet;
  rentee?: BranchRentee;
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
};

export type BranchSettlement = {
  branchSettlementId: number;
  branchId: number;
  bankCode: string;
  bankName: string;
  account: string;
  holder: string;

  bank: Banks;
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

  signatureImage?: Images;
  termsFile?: Files;
  policyFile?: Files;
  etcFile?: Files;
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

  signatureImage?: Images;
  consentFile?: Files;
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

  signatureImage: Images;
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

  gics?: Gics;
};

export type Managers = {
  managerId: number;
  email: string;
  password: string;
  name: string;
  joinType: ManagerJoinType;
  socialId: string;
  profileImageId: number | null;

  profile?: Images;
};

export type Users = {
  userId: number;
  contact: string;
  password: string;
  email: string;
  name: string;
  profileImageId: number | null;

  profile?: Images;
};

export type HqRoles = {
  hqRoleId: number;
  hqId: number;
  managerId: number;
  adminFlag: boolean;
  roleManageFlag: boolean;
  dashboard: Role;
  graph: Role;
  notice: Role;
  config: Role;

  hq: Hqs;
  manager: Managers;
};

export type BranchRoles = {
  branchRoleId: number;
  branchId: number;
  managerId: number;
  adminFlag: boolean;
  roleManageFlag: boolean;
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
  cash: Role;
  payment: Role;
  accessLog: Role;
  config: Role;

  branch: Branches;
  manager: Managers;
};

export type TenantRoles = {
  tenantRoleId: number;
  tenantId: number;
  userId: number;
  // ... 앱 메뉴들 들어감

  tenant: Tenants;
  user: Users;
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
};

export type Floors = {
  floorId: number;
  branchId: number;
  name: string;
};

export type SpaceTypes = {
  spaceTypeId: number;
  name: string;
  virtualFlag: boolean;
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

  spaceType: SpaceTypes;
  image?: Images;
};

export type Addtions = {
  additionId: number;
  branchId: number;
  name: string;
  price: number;
};

export type Contracts = {
  contractId: number;
  branchId: number;
  tenantId: number;
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
  publicMemo: string;
  privateMeme: string;
  status: ContractStatus;
  signatureStatus: ContractSignatureStatus;
  signatureImageId: number | null;
  documentFileId: number | null;
  extendStatus: ContractExtendStatus;
  extendContractId: number | null;
  tenant: Tenants;
  director: ContractDirector;
  contractor: ContractContractor;

  spaces: ContractSpaces[];
  additions: ContractAdditions[];
  signatureImage?: Images;
  documentFile?: Files;
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

export type ContractQuries = {
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

  manager?: Managers;
};

export type Bills = {
  billId: number;
  contractId: number;
  tenantId: number;
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
  type: PaymentType;
  status: PaymentStatus;
  readyDatetime: string;
  readyJson: object;
  approveDatetime: string;
  approvoeJson: object;
  cancelDatetime: string;
  cancelJson: object;
  price: number;
  commissionPrice: number;
  settlementPrice: number;
  confirmFlag: boolean;
  settlementFlag: boolean;
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
  tenantId: number;
  contractId: number | null;
  type: CreditType;
  availableStartDate: string;
  availableendDate: string;
  availableFlag: boolean;
};

export type CreditLogs = {
  creditLogId: number;
  creditId: number;
  usage: CreditUsage;
  amount: number;
  useFlag: boolean;
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

  bannerInage?: Images;
};

export type EventAttendees = {
  eventAttendeeId: number;
  eventId: number;
  userId: number;
  applyDatetime: string;
  usedCreditAmount: UsedCreditAmount;

  user: Users;
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

  image?: Images;
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

  image?: Images;
};

export type ProductSales = {
  productSalesId: number;
  branchId: number;
  productId: number;
  tenantId: number;
  userId: number;
  name: string;
  amount: number;
  price: number;
  usedCreditAmount: UsedCreditAmount;
  refundFlag: boolean;

  tenant?: Tenants;
  user?: Users;
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

  image: Images;
};

export type ServiceSales = {
  serviceSaleId: number;
  branchId: number;
  serviceId: number;
  tenantId: number;
  userId: number;
  name: string;
  priceLnumber;
  usedCreditAmount: UsedCreditAmount;
  refundFlag: boolean;

  tenant?: Tenants;
  user?: Users;
};

export type Receipts = {
  receiptId: number;
  parentReceiptId: number;
  branchId: string;
  billId: string;
  type: ReceiptType;
  status: ReceiptStatus;
  price: number;
  ntsConfirmNumber: string;
  ntsResultCode: string;
  mgtKey: string;
  requestDatetime: string;
};

export type Notifications = {
  notificationId: number;
  branchId: number;
  title: string;
  content: string;
  sendDatetime: string;
};

export type UserNotifications = {
  userNotificationId: number;
  userId: number;
  title: string;
  content: string;
  sendDatetime: string;
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
