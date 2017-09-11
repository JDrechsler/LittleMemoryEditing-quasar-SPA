import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(compPath: string) {
	return () => import(`./components/${compPath}`).then(m => m.default)
}

var routes: { path: string, component: () => Promise<any> }[] = [
	{ path: '/littlememoryediting', component: load('LittleMemoryEditing/LittleMemoryEditing.vue') },
	{ path: '/', component: load('LittleMemoryEditing/LittleMemoryEditing.vue') },
	{ path: '*', component: load('Error404.vue') }
]

export const router = new VueRouter({
	routes,
	mode: 'history'
})