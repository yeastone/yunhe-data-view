/**
 * IMPORT COMPONENTS
 */
import borderBox1 from './components/borderBox1/index'
import titleHeader1 from './components/titleHeader1/index'
import progressBar1 from './components/progressBar1/index'
import loginPage1 from './components/loginPage1/index'

/**
 * USE COMPONENTS
 */
export default function (Vue) {
  Vue.use(borderBox1)
  Vue.use(titleHeader1)
  Vue.use(progressBar1)
  Vue.use(loginPage1)
}
