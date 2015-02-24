/**
 * Created by Greco on 2/17/15.
 */

/// <reference path="./sections/HomeSection.ts" />
/// <reference path="./sections/MenuMannager.ts" />
/// <reference path="./sections/SliderMannager.ts" />
/// <reference path="./sections/ExteriorDesign.ts" />
/// <reference path="./sections/InteriorDesign.ts" />
/// <reference path="./sections/Innovation.ts" />
/// <reference path="./sections/AssistenceSistem.ts" />
/// <reference path="./sections/Security.ts" />
/// <reference path="./sections/Colors.ts" />
/// <reference path="./sections/Gallery.ts" />
/// <reference path="./sections/Loader.ts" />

module com.vw {

    import HomeSection = sections.HomeSection;
    import SliderMannager = sections.SliderMannager;
    import MenuMannager = sections.MenuMannager;
    import ExteriorDesign = sections.ExteriorDesign;
    import InteriorDesign = sections.InteriorDesign;
    import Innovation = sections.Innovation;
    import AssistenceSistem = sections.AssistenceSistem;
    import Security = sections.Security;
    import Colors = sections.Colors;
    import Gallery = sections.Gallery;
    import Loader = sections.Loader;

    export class VWMobileTouaregApp {

            private _homseSection:HomeSection;
            private _sliderMannager:SliderMannager;
            private _menuMannager:MenuMannager;
            private _exteriorDesign:ExteriorDesign;
            private _interiorDesign:InteriorDesign;
            private _innovation:Innovation;
            private _assistenceSistem:AssistenceSistem;
            private _security:Security;
            private _colors:Colors;
            private _gallery:Gallery;
            private _loader:Loader;

        constructor () {
                console.log("VWMobileTouaregApp instace created!");
            }

            init():void {
                console.log("VWMobileTouaregApp initialized!");
                this._homseSection = new HomeSection($("body")[ 0 ]);
                this._homseSection.init();
                this._exteriorDesign = new ExteriorDesign($('#diseno-exterior')[0],'#b', '.bul0');
                this._exteriorDesign.init();
                this._interiorDesign = new InteriorDesign($('#diseno-interior')[0],'#bI', '.bul1');
                this._interiorDesign.init();
                this._innovation = new Innovation($('#innovacion')[0],'#bIn', '.bul2');
                this._innovation.init();
                this._assistenceSistem = new AssistenceSistem($('#sistema-de-asistencia')[0],'#bAs', '.bul3');
                this._assistenceSistem.init();
                this._security = new Security($('#seguridad')[0],'#bSe', '.bul4');
                this._security.init();
                this._colors = new Colors($('#colores')[0],'#bC', '.bul5');
                this._colors.init();
                this._gallery = new Gallery($('#galeria')[0],'#bG', '.bul6');
                this._gallery.init();

                this._menuMannager = new MenuMannager($('#Menu')[0]);
                this._menuMannager.init();
                this._loader = new Loader($('#loader')[0]);
                this._loader.init();
            }
    }
}
