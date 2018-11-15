$(function () {
  $('.shutter').shutter({
	shutterW: 1965, // 容器宽度
	shutterH: 400, // 容器高度
	isAutoPlay: true, // 是否自动播放
	playInterval: 2000, // 自动播放时间
	curDisplay: 3, // 当前显示页
	fullPage: false // 是否全屏展示
  });
});