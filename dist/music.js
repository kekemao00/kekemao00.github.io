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
      },
      {
        name: '韩信',
        artist: '温柚,胡夏',
        url: 'https://music-kekemao.oss-cn-hongkong.aliyuncs.com/hexo-player/music/%E6%B8%A9%E6%9F%9A%2C%E8%83%A1%E5%A4%8F%20-%20%E9%9F%A9%E4%BF%A1.mp3',
        cover: 'https://music-kekemao.oss-cn-hongkong.aliyuncs.com/hexo-player/icon/hanxin.jpg',
      },
      {
        name: '苏幕遮',
        artist: '张晓棠',
	url: "https://music-kekemao.oss-cn-hongkong.aliyuncs.com/hexo-player/music/%E5%BC%A0%E6%99%93%E6%A3%A0%20-%20%E8%8B%8F%E5%B9%95%E9%81%AE.mp3",
        cover: 'https://music-kekemao.oss-cn-hongkong.aliyuncs.com/hexo-player/icon/sumuzhe.jpg',
      }

    ]
});
