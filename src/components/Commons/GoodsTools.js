let obj= {}
let store = window.localStorage

//商品的增加或更新 
// 获取本地存储数据
// 判断添加的商品是否在goodsObj中
// 若在，追加；若不在，新建一个key 给一个value
obj.addOrUpdate = function(newGoods){
  let goodsObj = this.getGoods()
  if(goodsObj[newGoods.id]){
    goodsObj[newGoods.id] += newGoods.num
  } else {
    goodsObj[newGoods.id] = newGoods.num
  }
  this.saveGoods(goodsObj)
}

// 获取
obj.getGoods = function(){
  return JSON.parse(store.getItem('goods')|| '{}')
}

// 存储
obj.saveGoods = function (obj){
  // 保存到本地 存为对象形式 []
  store.setItem('goods', JSON.stringify(obj))
}

// 获取总数
obj.getTotalCount = function(){
  let goodsList = this.getGoods()
  let sum = 0
  let arr = Object.values(goodsList)
  arr.forEach(ele => sum += ele)
  return sum
}

export default obj