(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);


(lib.cp = function() {
	this.initialize(img.cp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.home = function() {
	this.initialize(img.home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);


(lib.next = function() {
	this.initialize(img.next);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);


(lib.tp = function() {
	this.initialize(img.tp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.home();
	this.instance.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,x:-2,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0,y:0},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,97.5,88.8);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,x:-2,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0,y:0},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,97.5,88.8);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,x:-2,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0,y:0},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,97.5,88.8);


// stage content:
(lib.halaman2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next7.addEventListener("click", next7ke8.bind(this));
		function next7ke8(){ 
			this.gotoAndStop(8); 
		}
		
		this.back7.addEventListener("click", function() {
		    window.location.href = "halaman1.html";
		});
	}
	this.frame_1 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.back8.addEventListener("click", back8ke7.bind(this));
		function back8ke7(){ 
			this.gotoAndStop(7); 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// btn
	this.home = new lib.Symbol30();
	this.home.name = "home";
	this.home.setTransform(1200.4,68.95,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2, false, new lib.Symbol30(), 3);

	this.next7 = new lib.Symbol29();
	this.next7.name = "next7";
	this.next7.setTransform(1200.4,650.95,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next7, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back7 = new lib.Symbol28();
	this.back7.name = "back7";
	this.back7.setTransform(79.4,650.95,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back7, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back8 = new lib.Symbol28();
	this.back8.name = "back8";
	this.back8.setTransform(83.5,654.1,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back8, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.back7},{t:this.next7},{t:this.home,p:{x:1200.4,y:68.95}}]}).to({state:[{t:this.back8},{t:this.home,p:{x:1204.5,y:72.1}}]},1).wait(1));

	// bg
	this.instance = new lib.cp();

	this.instance_1 = new lib.tp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,640,360);
// library properties:
lib.properties = {
	id: 'A388CA6AD4A8B34780D506C43630B451',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png", id:"back"},
		{src:"images/cp.png", id:"cp"},
		{src:"images/home.png", id:"home"},
		{src:"images/next.png", id:"next"},
		{src:"images/tp.png", id:"tp"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A388CA6AD4A8B34780D506C43630B451'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;