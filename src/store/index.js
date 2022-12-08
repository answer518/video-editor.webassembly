import { provide } from 'vue'

const hello = Symbol()

function useProvider() {
    provide(hello)
}

export default {
    useProvider
}