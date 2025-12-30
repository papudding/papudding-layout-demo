import { type MenuItem } from 'papudding-layout'

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
        window.location.href = '/login'
      },
      divided: true
    }
  ]
}