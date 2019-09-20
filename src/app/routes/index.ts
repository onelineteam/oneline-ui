import Icon from '../icon.vue';
import Button from '../button.vue';
import Input from '../input.vue';
import Popover from '../popover.vue';
import Layout from '../layout.vue';
export default  [
  {
    path: '/icon', component:  Icon, name: 'icon'
  }, 
  {
    path: '/button', component:  Button, name: 'button'
  },
  {
    name: 'input', path: '/input', component:  Input
  },
  {
    path: '/popover', component:   Popover, name: 'popover'
  },
  {
    path: '/layout', component: Layout, name: 'layout'
  }
]