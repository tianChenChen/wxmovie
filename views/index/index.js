// views/index/index.js
// 获取全局应用程序实例对象
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: [2018,2017,2016,2015,2014,2013,2012,2011],
    movies: [],
    start: 0,
    size: 20,
    subtitle: '加载中...',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovies()
    const year = []
    for (var y = 2018; y > 1988; y--) {
      year.push(y)
    }
    this.setData({ year, loading: false })
  },
  loadMovies() {
    this.setData({ loading: true })
    return app.douban.list(2016, this.data.start).then(d => {
      const data = d.subjects
      const movies = this.data.movies.concat(data)
      console.log(movies)
      this.setData({ movies, loading: false })
    })
  },
  scorllbottom () {
    const page = this.data.start
    console.log(page)
    this.setData({
      start: page + 20
    })
    this.loadMovies()
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