import Vue from 'vue'
import Router from 'vue-router'
import MyForm from '../components/form/MyForm'
import MyInput from '../components/input/Input'
import MyRadio from '../components/radio/Radio'

Vue.use(Router)


export default new Router({
  linkActiveClass : 'active',
  routes: [
    {
      path: '/'
    },
    {
      path: '/myForm',
      name: 'MyForm',
      component: MyForm,
      children: [
        {
          // 默认跳转到 input
          path:'',
          redirect: 'input'
        },
        {
          path: 'input',
          name: 'MyInput',
          component: MyInput
        },
        {
          path: 'radio',
          name: 'MyRadio',
          component: MyRadio
        }
      ]
    }
  ]
})
