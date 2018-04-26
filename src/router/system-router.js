import index from '@/view/system/index'
import page1 from '@/view/system/pages/page1'
import page2 from '@/view/system/pages/page2'

export default {
  path: '/system',
  name: 'index',
  component: index,
  children: [
    {
      path: 'page1',
      name: 'page1',
      component: page1
    },
    {
      path: 'page2',
      name: 'page2',
      component: page2
    }
  ]
}
