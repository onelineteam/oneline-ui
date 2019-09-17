export default  [
  {
    path: '/icon', component: () => import('../icon.vue')
  }, 
  {
    path: '/button', component: () => import('../button.vue')
  },
  {
    path: '/input', component: () => import('../input.vue')
  },
  {
    path: '/popover', component: () => import('../popover.vue')
  },
]