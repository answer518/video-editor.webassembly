import { createRouter, createWebHashHistory } from 'vue-router'
import VideoEditor from '../views/VideoEditor.vue'

const routes = [
    {
        path: '/',
        name: 'video-editor',
        component: VideoEditor
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
