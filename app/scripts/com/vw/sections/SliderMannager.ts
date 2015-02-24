/**
 * Created by Greco on 2/20/15.
 */
/**
 * Created by Greco on 2/17/15.
 */
module com.vw.sections {
    export class SliderMannager  {

        private _slideParent:HTMLElement;
        public imIn:number;

        constructor (private _target:HTMLElement, private _bullet:String) {

        }



        init ():void {
            this._slideParent = $(this._target).find(".sliderDE").get(0);
            console.log("SliderMannager initialized");
            console.log(this._slideParent.children.length);
            console.log('the bullet is'+this._bullet+'-1');

        }
    }
}