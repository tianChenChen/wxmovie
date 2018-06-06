// views/index/index.js
// 获取全局应用程序实例对象
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: [],
    thisYear: 2018,
    current: 0,
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
    return app.douban.list(this.data.thisYear, this.data.start).then(d => {
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

  goyear (e) {
    console.log(e)
    const year = e.currentTarget.dataset.year
    const current = e.currentTarget.dataset.index
    this.setData({
      thisYear: year,
      movies: [],
      current: current
    })
    this.loadMovies()
  },

  godeailyear (e) {
    console.log(e, '触发', e.detail.current)
    const touchYear = e.detail.current
    const currentYear = this.data.thisYear - touchYear
    this.setData({
      thisYear: currentYear,
      movies: [],
      current: touchYear
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