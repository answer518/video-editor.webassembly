import { provide, ref } from 'vue'

const timeLineWidth = Symbol()

function useProvider() {
    provide(timeLineWidth, ref(0))
}

export default {
    useProvider,
    timeLineWidth
}