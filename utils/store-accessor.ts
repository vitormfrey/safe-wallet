import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Contas from '@/store/contas'

// eslint-disable-next-line import/no-mutable-exports
let contas: Contas

function initializeStores(store: Store<any>): void {
  contas = getModule(Contas, store)
}

export { initializeStores, contas }
