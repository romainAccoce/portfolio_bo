export interface PaginationType {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface MetaType {
  pagination: PaginationType;
}

export interface ApiResponse {
  meta: MetaType;
}
