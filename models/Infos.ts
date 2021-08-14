/* eslint-disable camelcase */
interface RegisterAccount {
  register_id: number
  register_category: String
  register_name: String
  register_is_revenue: boolean
  register_value: number
}
interface BaseInfo {
  despesa: number
  receita: number
  wallet: number
}
export interface Infos {
  baseInfos: BaseInfo
  registers: RegisterAccount
}
