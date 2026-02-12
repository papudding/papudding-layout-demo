import { type MenuItem } from 'papudding-layout'
import router from '../router'

export const menuItemsBuilder = (): MenuItem[] => {
  return [
    {
      label: '个人中心',
      handler: () => {
        console.log('Home clicked')
      },
    },
    {
      label: 'About',
      handler: () => {
        console.log('About clicked')
      },
    },
    {
      label: '登出',
      handler: () => {
        console.log('Logout clicked')
        localStorage.removeItem('papudding-layout-state')
        router.push('/login')
      },
      divided: true
    }
  ]
}