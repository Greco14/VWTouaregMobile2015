/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
module com.vw.sections {
    import SliderMannager = sections.SliderMannager;
    export class Innovation  {

        private _slideParent:HTMLElement;
        private _sliderMannager:SliderMannager;
        private _slide:HTMLElement;
        private _inicio:number;
        private _maxSlide:number;
        private _isAnimating;

        constructor (private _target:HTMLElement, private _bullet:String, private _bul:String) {

        }



        init ():void {
            console.log("Innovation initialized");
            this._slideParent = $(this._target).find(".sliderDE").get(0);

            this.slideMe();

        }
        slideMe():void{
            var self = this;
            this._inicio = 0;
            var este = this._inicio;
            this._maxSlide = this._slideParent.children.length;
            this._slide = $(this._target).find('.sliderDE').get(0);
            this._isAnimating = false;

            $(this._target)["swipe"]({
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    if(direction == 'right'){

                        este = self.animateMe( este - 1 );
                        this._isAnimating = true;
                    }
                    if(direction == 'left'){

                        este = self.animateMe( este + 1);
                        this._isAnimating = true;
                    }
                },
                allowPageScroll: 'vertical'
            });

        }
        animateMe(actual){

            if(this._isAnimating){
                return false;
            }

            if(actual > this._maxSlide-1){
                return false
            }
            if(actual < 0){
                this._inicio = 0;
                return false;
            }
            var toLeft:number = actual*100;
            console.log(toLeft);
            TweenMax.to(this._slide, 0.5,{
                left: -toLeft+'%',
                ease: Cubic.easeOut,
                onComplete: function(){
                    this._isAnimating = false;
                }
            });
            $(this._bul).removeClass('act');
            $(this._bullet+'-'+actual).addClass('act');
            return actual;


        }
    }
}
