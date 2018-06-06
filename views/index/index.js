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
    loading: true
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
    this.setData({ year })
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

  gotoDetail(e) {
    console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },

  godeailyear (e) {
    const touchYear = e.detail.current
    const currentYear = this.data.thisYear - touchYear
    this.setData({
      thisYear: currentYear,
      movies: [],
      current: touchYear
    })
    this.loadMovies()
  },
})