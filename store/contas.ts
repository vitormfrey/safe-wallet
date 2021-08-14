/* eslint-disable no-console */
/* eslint-disable camelcase */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Conta } from '@/models'
import { $axios, $cookies } from '@/utils/nuxt-instance'
interface UserId {
  user_id: Number
}
interface RegisterId {
  register_id: Number
}

interface BaseInfo {
  despesa: number
  receita: number
  wallet: number
}
interface Infos {
  baseInfos: BaseInfo
}

@Module({ name: 'contas', stateFactory: true, namespaced: true })
export default class Contas extends VuexModule {
  private contas = [] as Conta[] //  [] as Conta[]
  private conta = [] as Conta[]
  private infos = {} as Infos
  // Getters
  public get $all() {
    return this.contas
  }

  public get $single() {
    return this.conta
  }

  public get $infos() {
    return this.infos
  }

  // Mutations
  @Mutation
  private SET_ALL(conta: []) {
    this.contas = conta
  }

  @Mutation
  private SET_SINGLE(conta: Conta[]) {
    this.conta = conta
  }

  @Mutation
  private ADD_REGISTER(payload: Conta) {
    this.contas.push(payload)
  }

  @Mutation
  private SET_INFOS(payload: any) {
    this.infos = payload
  }

  @Mutation
  private CHANGE_DATA(payload: any) {
    this.conta = payload
    const indexConta = this.contas.findIndex(
      (contas) => contas.register_id === payload.register_id
    )
    this.contas[indexConta] = payload
  }

  @Action
  public async getAccount(payload: UserId) {
    // console.log(user_id)
    const data = await $axios.$get(`/api/getAllRegisters/${payload}`)
    console.log(data)
    this.context.commit('SET_ALL', data)
  }

  @Action
  public async getInfos(payload: UserId) {
    const data = await $axios.$get(`/api/getInfos/${payload}`)
    console.log(data)
    this.context.commit('SET_INFOS', data)
  }

  @Action
  public async createRegister(payload: any) {
    const value: Number = await parseInt(payload.register_value)
    payload.register_value = value

    console.log(payload)
    const data = await $axios.$post(`/api/createRegister`, payload)
    console.log(data)
    this.context.commit('ADD_REGISTER', payload)
  }

  @Action
  public async singleRegister({ register_id }: RegisterId) {
    const user_id = $cookies.get('user_id')
    const number = register_id

    try {
      const data = await $axios.$get(`/api/getRegister/${user_id}/${number}`)
      this.context.commit('SET_SINGLE', data)
    } catch (error) {
      console.log(error)
    }
  }

  @Action
  public async updateRegister(payload: any) {
    // const valor = parseInt(payload.register_value)
    const valor: Number = await parseInt(payload.register_value)
    const updateR = {
      user_id: payload.user_id,
      wallet_id: payload.wallet_id,
      register_id: payload.register_id,
      register_name: payload.register_name,
      register_value: valor,
      register_date: payload.register_date,
      register_category: payload.register_category,
      register_is_revenue: payload.register_is_revenue
    }
    try {
      await $axios.$put('/api/updateRegister', updateR)
      this.context.commit('CHANGE_DATA', payload)
    } catch (err) {
      console.log(err)
    }
  }
}
