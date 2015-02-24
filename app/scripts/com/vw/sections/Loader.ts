/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */

module com.vw.sections {

    export class Loader  {
        private _line:HTMLElement;


        constructor (private _target:HTMLElement) {

        }



        init ():void {
            console.log("Loader initialized");
            /*
             this._slideParent = $(this._target).find(".sliderDE").get(0);*/
            this._line = $(this._target).find('.line').get(0);
            this.loaderAninm();

        }
        loaderAninm ():void{
            animame();
            function animame(){
                TweenMax.set($('.line'),{width: 0});
                TweenMax.to($('.line'), 1.50,{
                    width: '100%',
                    ease: Quad.easeInOut,
                    onComplete: function(){

                    }
                });
                setTimeout(animame,1700);
            }

        }


    }
}
