// pages/size/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontSize:20
  },
  //伸缩变大变小
  sliderchange(e){
    this.setData({
      fontSize: e.detail.value
    })
  },
  //点击变大
  big(){
    let newSmall = this.data.fontSize++
    this.setData({
      fontSize: this.data.fontSize++
    })
  },
  //点击变小
  small(){
    let newSmall=this.data.fontSize--
    this.setData({
      fontSize: this.data.fontSize--
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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