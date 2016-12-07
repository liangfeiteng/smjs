/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-01 14:17:33
 * @version $Id$
 */
 (function() {
 	function animate(obj,target){
        clearInterval(obj.timer);  // 先清除定时器
        var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result)<=15)  // 如果差值不小于 5 说明到位置了
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
            }
        },10)
    } 
    window.onload = function() {
    	var box = document.getElementById('em_logo_trans');
    	var ul = document.getElementById("em_logo_tunbo");
    	var ol = document.getElementById("em_lunbocircle");
        var twoul = document.getElementById("em_logo_tunbo_two");
    	var ullist = ul.children;
    	ul.appendChild(ul.children[0].cloneNode(true));
    	console.log(ullist);
    	var ollist = ol.children;
    	for(var i = 0; i < ollist.length; i++){
    		ollist[i].index = i;
    		ollist[i].onmouseover = function () {
	    		for(var j = 0; j < ollist.length; j++) {
	    			ollist[j].className = "";
	    		}
	    		this.className = "trolley_light";
                animate(ul,-this.index*1920)
                square = key = this.index;
    		}
    	}
        // animate(twoul,-this.index*1100)
    	var timer = null; // 轮播图定时器
    	var key = 0; // 控制播放器张数
    	var square = 0; // 控制器小方块
    	timer = setInterval(autoplay,3000);
        function autoplay() {
            key++ ;
            if (key>ullist.length - 1) {
                ul.style.left = 0;
                key = 1;
            }
            animate(ul,-key*1920);
            square++;
            if (square > ollist.length - 1 ) {
                square = 0;
            }
            for(var i = 0; i < ollist.length; i++) {
                ollist[i].className = "";
            }
            ollist[square].className = "trolley_light";
        }
        box.onmouseover = function () {
            clearInterval(timer);
        }
        box.onmouseout = function () {
            timer = setInterval(autoplay,3000);
        }
    }
 }) ();