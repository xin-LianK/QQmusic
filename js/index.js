$(function(){

	var audio = $('audio').get(0);//audio标签

	var toollike = $('.toolbar .tool-shoucang')
	var tooladd = $('.toolbar .tool-tianjia')
	var toolload = $('.toolbar .tool-xiazai')
	var tooldel = $('.toolbar .tool-shanchu')

	var ingTime = $('.ing-time');//当前时间
	var finTime = $('.fin-time');//总时长
	var quCircle = $('.qu-jindu .circle');//歌曲进度条上的指示
	var quJindu = $('.qu-jindu .jindutiao');//歌曲进度条

	var shengyin = $('.voice-jindu .shengyin');//声音按钮
	var voCircle = $('.voice-jindu .circle');//声音进度条上的指示
	var voJindu = $('.voice-jindu .jindutiao');//声音进度条

	var up = $(".musicBox .up");
	var play = $(".musicBox .play");
	var down = $(".musicBox .down");
	var lrc = $(".lyric-inner");


	var index=0;
	var database=[
		{name:"慢慢慢",url:"mp3/王澜霏 - 慢慢慢.mp3",singer:"王澜霏",ztime:"03:05",albumurl:"imgs/mmm.jpg",gcurl:"lrc/mmm.lrc"},
		{name:"一定会好好的",url:"mp3/杨栋梁 - 一定会好好的.mp3",singer:"杨栋梁",ztime:"03:50",albumurl:"imgs/ydhhd.jpg",gcurl:"lrc/ydhhhd.lrc"},
		{name:"Gotta Have You",url:"mp3/The Weepies - Gotta Have You.mp3",singer:"The Weepies",ztime:"03:19",albumurl:"imgs/T002R300x300M0000005mM0D0BclEr.jpg",gcurl:"lrc/Gotta Have You.lrc"},
		{name:"光年",url:"mp3/Xun - 光年.mp3",singer:"Xun",ztime:"05:20",albumurl:"imgs/gn.jpg",gcurl:"lrc/m.lrc"},
		{name:"爱情转移",url:"mp3/陈奕迅 - 爱情转移.mp3",singer:"陈奕迅",ztime:"04:22",albumurl:"imgs/aqzy.jpg",gcurl:"lrc/aqzy.lrc"},
		{name:"陪你度过漫长岁月",url:"mp3/陈奕迅 - 陪你度过漫长岁月 (国语).mp3",singer:"陈奕迅",ztime:"04:02",albumurl:"imgs/pndgmcsy.jpg",gcurl:"lrc/pndgmcsy.lrc"},
		{name:"别丢下我不管",url:"mp3/风小筝 - 别丢下我不管.mp3",singer:"风小筝",ztime:"04:36",albumurl:"imgs/bdxwbg.jpg",gcurl:"lrc/bdxwbg.lrc"},
		{name:"我知道你也很想念",url:"mp3/后弦 - 我知道你也很想念.mp3",singer:"后弦",ztime:"04:22",albumurl:"imgs/wzdnyhxn.jpg",gcurl:"lrc/wzdnyhxn.lrc"},
		{name:"她说",url:"mp3/林俊杰 - 她说.mp3",singer:"林俊杰",ztime:"05:20",albumurl:"imgs/ts.jpg",gcurl:"lrc/ts.lrc"},
		{name:"从你的全世界路过",url:"mp3/刘佳欣 - 从你的全世界路过.mp3",singer:"刘佳欣",ztime:"03:34",albumurl:"imgs/cndsjlg.jpg",gcurl:"lrc/cndsjlg.lrc"},
		{name:"好久不见",url:"mp3/唐嫣 - 好久不见.mp3",singer:"唐嫣",ztime:"04:45",albumurl:"imgs/hjbj.jpg",gcurl:"lrc/hjbj.lrc"},
		{name:"该死的异地恋",url:"mp3/童可可_田跃君 - 该死的异地恋.mp3",singer:"童可可",ztime:"03:58",albumurl:"imgs/gsdydl.jpg",gcurl:"lrc/gsdydl.lrc"},
		{name:"一个人",url:"mp3/夏婉安 - 一个人.mp3",singer:"夏婉安",ztime:"03:14",albumurl:"imgs/ygr.jpg",gcurl:"lrc/ygr.lrc"},
		{name:"我们的童话",url:"mp3/小贱（谭冰尧） - 我们的童话.mp3",singer:"小贱",ztime:"03:48",albumurl:"imgs/wmdth.jpg",gcurl:"lrc/1.txt"},
		{name:"千古",url:"mp3/许嵩 - 千古.mp3",singer:"许嵩",ztime:"03:41",albumurl:"imgs/qg.jpg",gcurl:"lrc/qg.lrc"},
		{name:"山水之间",url:"mp3/许嵩 - 山水之间.mp3",singer:"许嵩",ztime:"04:36",albumurl:"imgs/sszj.jpg",gcurl:"lrc/sszj.lrc"},
		{name:"心的构造",url:"mp3/曾咏欣 - 心的构造.mp3",singer:"曾咏欣",ztime:"04:01",albumurl:"imgs/T002R300x300M000003Qj87c3r8ROZ.jpg",gcurl:"lrc/xdgz.lrc"},
		{name:"你",url:"mp3/郑爽 - 你.mp3",singer:"郑爽",ztime:"03:15",albumurl:"imgs/ni.jpg",gcurl:"lrc/m.lrc"},
		{name:"没有如果的如果",url:"mp3/幂幂 - 没有如果的如果.mp3",singer:"幂幂",ztime:"03:26",albumurl:"imgs/myrgdrg.jpg",gcurl:"lrc/m.lrc"},
		{name:"也许你已经忘了我",url:"mp3/乔洋 - 也许你已经忘了我.mp3",singer:"乔洋",ztime:"04:09",albumurl:"imgs/yxnyjwlw.jpg",gcurl:"lrc/yxnyjwlw.lrc"}
	];

	//遍历数据
	$.each(database, function(i,v) {
		index++;
		$("<li> <div class='lists-item'> <div class='song-check'><input type='checkbox' check-id="+index+"></div> <div class='song-number tong'>"+index+"</div> <div class='song-name tong'><span class='tong'>"+v.name+"</span> <div class='tool '> <a class='tool-play'></a><a class='tool-add'></a><a class='tool-load'></a><a class='tool-send'></a> </div> </div> <div class='song-artist tong'>"+v.singer+"</div> <div class='song-time tong'>"+v.ztime+"</div>  </div> <i></i></li>").appendTo('.lists')
	});

	//一些默认样式
	$(".lists li").eq(0).addClass('show').siblings().removeClass('show')
	$('.song-name a').text(database[ 0 ].name)
	$('.song-singer a').text(database[ 0 ].singer)
	$('.song-album a').text(database[ 0].name)
	$('.song-img img').attr('src',database[ 0 ].albumurl)
	$('.mask-bg').css({
		backgroundImage:"url("+database[ 0 ].albumurl+")"
	})
	$('.song-check').on('dblclick',false);

	tooldel.on('click',function(){
		$('.song-check input:checked').parent().parent().remove();
	})


	//下一首
	down.on('click',function(){
		index++;
		if(index===database.length){
			index=0
		}
		var url=database[index].url
		$(audio).attr('src',url)
		audio.play()

		play.removeClass('kaishi').delay(500).queue(function(){
			$(this).addClass('kaishi').dequeue()
		})
		console.dir(index)
		$(".lists li").eq(index).addClass('show').siblings().removeClass('show')

		$('.song-name a').text(database[ index ].name)
		$('.song-singer a').text(database[ index ].singer)
		$('.song-album a').text(database[ index ].name)
		$('.song-img img').attr('src',database[ index ].albumurl)
		$('.mask-bg').css({
			backgroundImage:"url("+database[ index ].albumurl+")"
		})

			$.ajax({
				url:""+database[ index ].gcurl+"",
				dataType:"text"
			}).done(function(data){
				var text=data;
				lyric=parseLyric(text)
			});
	})

	//播放按钮点击事件
	play.on('click',function(){
		if(audio.paused){
			audio.play();
			$(this).addClass('kaishi')
		}else{
			audio.pause();
			$(this).removeClass('kaishi')
		}

		$.ajax({
				url:""+database[ index ].gcurl+"",
				dataType:"text"
			}).done(function(data){
				var text=data;
				lyric=parseLyric(text)
			});
	})

	//上一首
	up.on('click',function(){
		index--;
		if(index===-1){
			index=database.length-1;
		}
		var url=database[index].url
		$(audio).attr('src',url)
		audio.play()
		play.removeClass('kaishi').delay(500).queue(function(){
			$(this).addClass('kaishi').dequeue()
		})

		$(".lists li").eq(index).addClass('show').siblings().removeClass('show')

		$('.song-name a').text(database[ index ].name)
		$('.song-singer a').text(database[ index ].singer)
		$('.song-album a').text(database[ index ].name)
		$('.song-img img').attr('src',database[ index ].albumurl)
		$('.mask-bg').css({
			backgroundImage:"url("+database[ index ].albumurl+")"
		})

		$.ajax({
				url:""+database[ index ].gcurl+"",
				dataType:"text"
			}).done(function(data){
				var text=data;
				lyric=parseLyric(text)
			});
	})

	//点击歌曲播放
//	$(document).on('dblclick',false);

	$('.lists').on('dblclick','li',function(){
		var index=$(this).index()
		audio.src=database[ index ].url
		audio.play()

		$(this).addClass('show').siblings().removeClass('show');
		play.removeClass('kaishi').delay(500).queue(function(){
			$(this).addClass('kaishi').dequeue()
		})

		$('.song-name a').text(database[ index ].name)
		$('.song-singer a').text(database[ index ].singer)
		$('.song-album a').text(database[ index ].name)
		$('.song-img img').attr('src',database[ index ].albumurl)
		$('.mask-bg').css({
			backgroundImage:"url("+database[ index ].albumurl+")"
		})


		$.ajax({
				url:""+database[ index ].gcurl+"",
				dataType:"text"
			}).done(function(data){
				var text=data;
				lyric=parseLyric(text)
			});
	})

	//歌曲在播放的过程中会一直调用fn 修改时间
	audio.ontimeupdate = function(){
    	ingTime.text(studyTime(audio.currentTime))
    	finTime.text(studyTime(audio.duration))
		quCircle.css({
			left:quJindu.width()*(audio.currentTime/audio.duration)
		});
		$('.qu-move').css({
			width:quJindu.width()*(audio.currentTime/audio.duration)
		});
		//遍历所有歌词，看哪句歌词的时间与当然时间吻合
	    for (var i = 0; i < lyric.length; i++) {
	        if (this.currentTime /*当前播放的时间*/ > lyric[i][0]) {
	            //显示到页面
	            lrc.text(lyric[i][1])
	//			$("<p>"+lyric[i][1]+"</p>").appendTo(lrc)
	//          $("<p>"+lyric[i-2][1]+"</p><p>"+lyric[i-1][1]+"</p><p>"+lyric[i][1]+"</p><p>"+lyric[i+1][1]+"</p><p>"+lyric[i+2][1]+"</p>").appendTo(lrc)
	        };
	    };

	}
//	$(audio).trigger('play')
	//时间转换小函数
	var h = 0, m = 0, s = 0;
    var studyTime=function (t){
		m=parseInt(t/60%60);
		s=parseInt(t%60);
		m=m<10?"0"+m:m;
		s=s<10?"0"+s:s;
		return m+':'+s;
    }



	//歌曲进度条点击事件
	quJindu.on('click',function(e){
		audio.currentTime=audio.duration*(e.offsetX/quJindu.width())
		quCircle.css({
			left:e.offsetX
		})

	})

	//圈圈点击事件阻止
	quCircle.on('click',false);

	//歌曲进度条拖动
//	quCircle.on('mousedown',function(e){
//		var ox=e.offsetX;
//		$(document).on('mousemove',function(e){
////			var x=e.clientX-ox;
////			console.dir($('quCircle').offset().left)
////			quCircle.css({
////				left:x
////			})
//		})
//	})

	//声音进度条点击事件
	voJindu.on('click',function(e){
		v=e.offsetX/voJindu.width();
		shengyin.attr('save',v);
		audio.volume=v;
		voCircle.css({
			left:e.offsetX
		})
		$('.vo-move').css({
			width:e.offsetX
		})
	})

	//圈圈点击事件阻止
	voCircle.on('click',false);



//声音按钮点击事件
	shengyin.on('click',function(){
		v=$(this).attr('save')
		console.dir(v)
		if(audio.volume===0){
			console.dir(v)
			audio.volume=v;
			shengyin.removeClass('kaishi')
			voCircle.css({
				left:v*voJindu.width()
			})
			$('.vo-move').css({
				width:v*voJindu.width()
			})
		}else{
			audio.volume=0;
			shengyin.addClass('kaishi')
			voCircle.css({
				left:0
			})
			$('.vo-move').css({
				width:0
			})
		}
	})


	$('.music-player').height($(window).height())
	$('.content .lists-b .lists-m').height($(window).height()-300)





	function parseLyric(text) {
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            //提取歌词
             value = v.replace(pattern, '');
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx

            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    return result;
}

})
