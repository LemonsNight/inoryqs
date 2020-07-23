/*
  直接更新state的多个方法的对象
*/
import {
  NEWSETS
  // SEARCHONLOAD
} from './mutation-types'

export default {
  // 获取首页菜单列表
  [NEWSETS] (state, {newSets}) {
    state.newSets = newSets
  }

}
