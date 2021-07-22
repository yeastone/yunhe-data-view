/**
 * EXPORT COMPONENTS
 */
export { default as areaLocation1 } from './components/areaLocation1/index'
export { default as borderBox1 } from './components/borderBox1/index'
export { default as borderBox2 } from './components/borderBox2/index'
export { default as chartContent } from './components/chartContent/index'
export { default as dropBox1 } from './components/dropBox1/index'
export { default as headerBox1 } from './components/headerBox1/index'
export { default as pointMap1 } from './components/pointMap1/index'
export { default as pointMap2 } from './components/pointMap2/index'
export { default as pointMap3 } from './components/pointMap3/index'
export { default as progressBar1 } from './components/progressBar1/index'
export { default as radioButton1 } from './components/radioButton1/index'
export { default as rankTable1 } from './components/rankTable1/index'
export { default as rankTable3 } from './components/rankTable3/index'
export { default as timeBox1 } from './components/timeBox1/index'
export { default as titleHeader1 } from './components/titleHeader1/index'
/**
 * IMPORT COMPONENTS
 */
import areaLocation1 from './components/areaLocation1/index';


import borderBox1 from './components/borderBox1/index'
import borderBox2 from './components/borderBox2/index';


import chartContent from './components/chartContent/index'
import dropBox1 from './components/dropBox1/index'
import headerBox1 from './components/headerBox1/index';

import pointMap1 from './components/pointMap1/index'
import pointMap2 from './components/pointMap2/index'
import pointMap3 from './components/pointMap3/index'


import progressBar1 from './components/progressBar1/index'
import radioButton1 from './components/radioButton1/index'
import rankTable1 from './components/rankTable1/index'
import rankTable3 from './components/rankTable3/index'
import timeBox1 from './components/timeBox1/index'
import titleHeader1 from './components/titleHeader1/index'


/**
 * USE COMPONENTS
 */
export default function (Vue) {

  Vue.use(areaLocation1)
  
  Vue.use(borderBox1)
  Vue.use(borderBox2)
  Vue.use(chartContent)
  Vue.use(dropBox1)
  
  Vue.use(headerBox1)

  Vue.use(pointMap1)
  Vue.use(pointMap2)
  Vue.use(pointMap3)
  Vue.use(progressBar1)
  Vue.use(radioButton1)
  Vue.use(rankTable1)
  Vue.use(rankTable3)
  Vue.use(timeBox1)
  Vue.use(titleHeader1)
}
