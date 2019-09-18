const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
    audio: [
      {
	name: '鬼迷心窍',
	artist: '李宗盛',
	url: 'https://music-kekemao.oss-cn-hongkong.aliyuncs.com/hexo-player/music/lizongsheng-guimixinqiao.mp3',
	cover: 'https://music-kekemao.oss-cn-hongkong.aliyuncs.com/hexo-player/icon/lizongsheng.jpg',
      }
    ]
});
