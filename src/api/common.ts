import { Banks, Dates, Files, Gics, Images } from '../model'
import {} from '../type'

// 파일 추가
// POST /files
export type ADD_FILE_BODY = {
  file: Partial<Files>
}
export type ADD_FILE_RESPONSE = Files
// ===========================

// 이미지 추가
// POST /images
export type ADD_IMAGE_BODY = {
  image: Partial<Images>
}
export type ADD_IMAGE_RESPONSE = Images
// ===========================

// 은행 조회
// GET /banks
export type GET_BANKS_RESPONSE = {
  banks: Banks[]
}
// ===========================

// GICS 조회
// GET /gics
export type GET_GICS_RESPONSE = {
  gics: Gics[]
}
// ===========================

// 날짜 조회
// GET /dates/0
export type GET_DATE_PARAMS = { date: string } // yyyymmdd
export type GET_DATE_RESPONSE = Dates
// ===========================
