import Icon from '../icon.vue';
import Button from '../button.vue';
import Input from '../input.vue';
import Popover from '../popover.vue';
import Layout from '../layout.vue';
import Text from '../text.vue';
import Color from '../color.vue';

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
  },
  {
    path: '/text', component:   Text, name: 'text'
  },
  {
    path: '/color', component: Color, name: 'color'
  }
]