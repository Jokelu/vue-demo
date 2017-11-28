import tree from './tree'


var plugin = {
  opTree: tree
}
export default {
  install(Vue) {
    for (let k in plugin) {
      Vue.component(k, plugin[k])
    }
    /*列表格式转换树格式
    * @param data 数组
		 * @param parentId 父节点id
		 * @param pidField 父节点字段名
    *
    * */

    const converToTreedata = (data, parentId, pidFiedId) => {
      var list = []
      data.forEach((item) => {
        if (item[pidFiedId] == parentId) {
          item.children = converToTreedata(data,item.id,pidFiedId)
          list.push(item)
        }
      })
      return list
    }
    Vue.prototype.$converToTreedata = converToTreedata
  }
}
