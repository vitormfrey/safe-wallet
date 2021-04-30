import { Module, VuexModule } from 'vuex-module-decorators'

// import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  // private books = [] as Book[]
  // private book = {} as Book
  // public get $all() {
  //   return this.books
  // }
  // public get $single() {
  //   return this.book
  // }
  // @Mutation
  // private SET_ALL(book: Book[]) {
  //   this.books = book
  // }
  // @Mutation
  // private SET_SINGLE(book: Book) {
  //   this.book = book
  // }
  // @Action
  // public async index() {
  //   const book = await $axios.$get('/books')
  //   console.log(book)
  //   this.context.commit('SET_ALL', book)
  // }
  // @Action
  // public async show({ id }: Show) {
  //   const book = await $axios.$get(`/books/${id}`)
  //   this.context.commit('SET_SINGLE', book)
  // }
}
