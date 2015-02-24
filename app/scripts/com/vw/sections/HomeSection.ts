/**
 * Created by Greco on 2/17/15.
 */
module com.vw.sections {
    export class HomeSection  {
        constructor (private _target:HTMLElement) {
            
        }

        init ():void {
            console.log("HomeSection initialized");
            //console.log(this._target);

        }
    }
}