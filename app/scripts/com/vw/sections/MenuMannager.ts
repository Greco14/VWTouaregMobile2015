/**
 * Created by Greco on 2/17/15.
 * Menu Mannager
 */
module com.vw.sections {
    export class MenuMannager  {
        constructor (private _target:HTMLElement) {

        }

        init ():void {
            var self = this;
            console.log("Menu Mannager initialized");
            //console.log(this._target);
            $('.menu').on('click', function(){
                $('#menu').css({display: 'block'});
                TweenMax.to($('.lightBox'), 0.25,{
                    opacity: 1,
                    ease: Cubic.easeOut,
                    onComplete: function(){

                        TweenMax.to($('.menuHold'), 0.5,{
                            right: '0',
                            ease: Cubic.easeOut
                        });
                    }
                });
            });
            $('#compartir').on('click',function(event){
                event.preventDefault();
                TweenMax.to($('.shareSect'), 0.5,{
                    right: '0',
                    ease: Cubic.easeOut
                });
            });
            $('.close').on('click',function(event){
                event.preventDefault();
                TweenMax.to($('.shareSect'), 0.5,{
                    right: '-100%',
                    ease: Cubic.easeOut
                });
            });

            $('#menu')["swipe"]({
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    if(direction == 'right'){
                        self.closeMenu();
                    }
                    if(direction == 'left'){
                        console.log('LEFT');
                    }
                },

            });
            $('.btC').on('click', function(){
                setTimeout(function(){
                    self.closeMenu();
                },500);

            });
        }
        closeMenu():void{
            TweenMax.to($('.menuHold'), 0.5,{
                right: '-100%',
                ease: Cubic.easeOut,
                onComplete: function(){
                    TweenMax.to($('.lightBox'), 0.25,{
                        opacity: 0,
                        ease: Cubic.easeOut,
                        onComplete: function(){
                            $('#menu').css({display: 'none'});
                            $('.shareSect').css({right:'-100%'})
                        }
                    });
                }
            });
        }
        share(){


        }
    }
}