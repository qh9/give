// pages/project6/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      name:"哈登",
      step:200,
      praise:0,
      proportion:50
    }, {
        name: "库里",
        step: '',
        praise: 0,
        proportion:60
      }, {
        name: "小里弗斯",
        step: '',
        praise: 0,
        proportion:100
      }, {
        name: "詹姆斯",
        step: '',
        praise: 0,
        proportion:30
      }]
  },
  //点赞
  praise(index){
    this.data.list.map((item,i)=>{
      if (i == index.currentTarget.dataset.child){
        return item.praise++
      }
    })
   this.setData({
     list: this.data.list
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.list.map((item)=>{
      let random = Math.floor(Math.random() * 1001)//随机数
      let val=(100/1000)*random
      item.step=random
      item.proportion=val
    })
    this.setData({
      list:this.data.list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})