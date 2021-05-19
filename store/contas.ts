import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Conta } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: number
}

@Module({ name: 'contas', stateFactory: true, namespaced: true })
export default class Contas extends VuexModule {
  private contas = [] as Conta[]
  private conta = {} as Conta
  // Getters

  public get $all() {
    return this.contas
  }

  public get $single() {
    return this.conta
  }

  // Mutations
  @Mutation
  private SET_ALL(conta: Conta[]) {
    this.contas = conta
  }

  @Mutation
  private SET_SINGLE(conta: Conta) {
    this.conta = conta
  }

  @Mutation
  private CHANGE_DATA(conta: Conta) {
    this.conta = conta
    const indexConta = this.contas.findIndex((contas) => contas.id === conta.id)
    this.contas[indexConta] = conta
  }
  // Actions

  @Action
  public async index() {
    const data = await $axios.$get('/conta')
    // console.log(data)
    this.context.commit('SET_ALL', data)
  }

  @Action
  public async singleConta({ id }: Show) {
    const data = await $axios.$get(`/conta/${id}`)
    this.context.commit('SET_SINGLE', data)
  }

  @Action
  public async updateConta(conta: Conta) {
    console.log(conta)
    await $axios.$put(`/conta/${conta.id}`, conta)
    this.context.commit('CHANGE_DATA', conta)
  }
}
