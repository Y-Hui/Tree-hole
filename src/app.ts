import { createApp } from 'vue'

import 'uno.css'
import './app.scss'
import './assets/iconfont.css'
import { useNutUIComponents } from './nutui'

const App = createApp({
  // 入口组件不需要实现 render 方法，
  // 即使实现了也会被 taro 所覆盖
})

useNutUIComponents(App)
export default App
