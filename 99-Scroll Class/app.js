(function($){
    $.fn.scrollClass = function(opt){
      var locked = false;
      var $el = $(this);
      var autoNext = false, autoPrev = false;
      var getClass = function(g,p){
        if(p === undefined){
          return 'group'+g;
        }
        return 'group'+g+'-phase'+p;
      };
      opt = $.extend({
        groups:[],
        curGroup:0,
        curPhase:0,
        autoNext:false,
        autoPrev:false,
        onScrollUp:function(){
          var that = this;
          if(locked) return;
          if(this.curGroup === 0 && this.curPhase === 0)   return;        
          if(this.curPhase === 0){
            $el.removeClass(getClass(this.curGroup));
            $el.removeClass(getClass(this.curGroup,this.curPhase));
            this.curGroup--;          
            this.curPhase = this.groups[this.curGroup].phases.length-1;
            
            $el.addClass(getClass(this.curGroup));
            $el.addClass(getClass(this.curGroup,this.curPhase));
            
            var phase = this.groups[this.curGroup].phases[this.curPhase];
            this.lock(phase.duration);
            autoPrev = phase.autoPrev;
          }else{          
            $el.removeClass(getClass(this.curGroup,this.curPhase));
            this.curPhase--;
            $el.addClass(getClass(this.curGroup,this.curPhase));
            
            var phase = this.groups[this.curGroup].phases[this.curPhase];
            this.lock(phase.duration);
            autoPrev = phase.autoPrev;
          }
        },
        onScrollDown:function(){
          var that = this;
          if(locked) return;
          if(this.curGroup === this.groups.length-1 && this.curPhase === this.groups[this.groups.length-1].phases.length-1)   return;    
          
          
          var phase = this.groups[this.curGroup].phases[this.curPhase];
          
          if(this.curPhase === this.groups[this.curGroup].phases.length-1){
            $el.removeClass(getClass(this.curGroup));
            $el.removeClass(getClass(this.curGroup,this.curPhase));
            this.curGroup++;          
            this.curPhase = 0;
            
            $el.addClass(getClass(this.curGroup));
            $el.addClass(getClass(this.curGroup,this.curPhase));
            
            this.lock(phase.duration);
            autoNext = phase.autoNext;
            
          }else{          
            $el.removeClass(getClass(this.curGroup,this.curPhase));
            this.curPhase++;
            $el.addClass(getClass(this.curGroup,this.curPhase));
            
            var phase = this.groups[this.curGroup].phases[this.curPhase];
            this.lock(phase.duration);
            autoNext = phase.autoNext;
          }
        },
        lock:function(duration){
          locked = true;
          var that = this;
          setTimeout(function(){
            locked = false;
            if(autoNext){            
              autoNext = autoPrev = false;
              that.onScrollDown();
            }
            if(autoPrev){            
              autoNext = autoPrev = false;
              that.onScrollUp();
            }
          },duration);
        },
        init:function(){
          $el.addClass(getClass(this.curGroup));
          $el.addClass(getClass(this.curGroup,this.curPhase));
        }
      },opt);
      
      opt.init();
      
      $(window).bind('mousewheel DOMMouseScroll', function(event){
          if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
              opt.onScrollUp();
          }
          else {
              opt.onScrollDown();
          }
      });
    }
  })(jQuery);
  
  $(document).ready(function(){
    $('.wrap').scrollClass({
      groups:[
        {
          phases:[
            {
              duration:1000
            },
            {
              duration:1000
            },
            {
              duration:1000,
              autoNext:true,
              autoPrev:true
            },
            {
              duration:1000,
              autoNext:true,
              autoPrev:true
            },
            {
              duration:1000
            }
          ]
        },{
          phases:[
            {
              duration:1000
            },
            {
              duration:1000
            },
            {
              duration:1000
            }
          ]
        },{
          phases:[
            {
              duration:1000
            },
            {
              duration:1000
            },
            {
              duration:1000
            }
          ]
        },{
          phases:[
            {
              duration:1000
            },
            {
              duration:1000
            },
            {
              duration:1000
            }
          ]
        }
      ]
    });
  });