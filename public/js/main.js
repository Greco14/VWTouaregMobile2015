/**
 * Created by raul on 9/23/14.
 */
/// <reference path="../../definitions/handlebars/handlebars.d.ts" />

/**
 * Created by Greco on 2/17/15.
 */
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var HomeSection = (function () {
                function HomeSection(_target) {
                    this._target = _target;
                }
                HomeSection.prototype.init = function () {
                    console.log("HomeSection initialized");
                    //console.log(this._target);
                };
                return HomeSection;
            })();
            sections.HomeSection = HomeSection;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/17/15.
 * Menu Mannager
 */
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var MenuMannager = (function () {
                function MenuMannager(_target) {
                    this._target = _target;
                }
                MenuMannager.prototype.init = function () {
                    var self = this;
                    console.log("Menu Mannager initialized");
                    //console.log(this._target);
                    $('.menu').on('click', function () {
                        $('#menu').css({ display: 'block' });
                        TweenMax.to($('.lightBox'), 0.25, {
                            opacity: 1,
                            ease: Cubic.easeOut,
                            onComplete: function () {
                                TweenMax.to($('.menuHold'), 0.5, {
                                    right: '0',
                                    ease: Cubic.easeOut
                                });
                            }
                        });
                    });
                    $('#compartir').on('click', function (event) {
                        event.preventDefault();
                        TweenMax.to($('.shareSect'), 0.5, {
                            right: '0',
                            ease: Cubic.easeOut
                        });
                    });
                    $('.close').on('click', function (event) {
                        event.preventDefault();
                        TweenMax.to($('.shareSect'), 0.5, {
                            right: '-100%',
                            ease: Cubic.easeOut
                        });
                    });
                    $('#menu')["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                self.closeMenu();
                            }
                            if (direction == 'left') {
                                console.log('LEFT');
                            }
                        },
                    });
                    $('.btC').on('click', function () {
                        setTimeout(function () {
                            self.closeMenu();
                        }, 500);
                    });
                };
                MenuMannager.prototype.closeMenu = function () {
                    TweenMax.to($('.menuHold'), 0.5, {
                        right: '-100%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            TweenMax.to($('.lightBox'), 0.25, {
                                opacity: 0,
                                ease: Cubic.easeOut,
                                onComplete: function () {
                                    $('#menu').css({ display: 'none' });
                                    $('.shareSect').css({ right: '-100%' });
                                }
                            });
                        }
                    });
                };
                MenuMannager.prototype.share = function () {
                };
                return MenuMannager;
            })();
            sections.MenuMannager = MenuMannager;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 */
/**
 * Created by Greco on 2/17/15.
 */
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var SliderMannager = (function () {
                function SliderMannager(_target, _bullet) {
                    this._target = _target;
                    this._bullet = _bullet;
                }
                SliderMannager.prototype.init = function () {
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    console.log("SliderMannager initialized");
                    console.log(this._slideParent.children.length);
                    console.log('the bullet is' + this._bullet + '-1');
                };
                return SliderMannager;
            })();
            sections.SliderMannager = SliderMannager;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var ExteriorDesign = (function () {
                function ExteriorDesign(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                ExteriorDesign.prototype.init = function () {
                    console.log("Exterio Design initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    this.slideMe();
                };
                ExteriorDesign.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            console.log(event);
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                ExteriorDesign.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual > this._maxSlide - 1) {
                        return false;
                    }
                    if (actual < 0) {
                        this._inicio = 0;
                        return false;
                    }
                    var toLeft = actual * 100;
                    console.log(toLeft);
                    TweenMax.to(this._slide, 0.5, {
                        left: -toLeft + '%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            this._isAnimating = false;
                        }
                    });
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    return actual;
                };
                return ExteriorDesign;
            })();
            sections.ExteriorDesign = ExteriorDesign;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var InteriorDesign = (function () {
                function InteriorDesign(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                InteriorDesign.prototype.init = function () {
                    console.log("InteriorDesign initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    this.slideMe();
                };
                InteriorDesign.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                InteriorDesign.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual > this._maxSlide - 1) {
                        return false;
                    }
                    if (actual < 0) {
                        this._inicio = 0;
                        return false;
                    }
                    var toLeft = actual * 100;
                    console.log(toLeft);
                    TweenMax.to(this._slide, 0.5, {
                        left: -toLeft + '%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            this._isAnimating = false;
                        }
                    });
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    return actual;
                };
                return InteriorDesign;
            })();
            sections.InteriorDesign = InteriorDesign;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var Innovation = (function () {
                function Innovation(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                Innovation.prototype.init = function () {
                    console.log("Innovation initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    this.slideMe();
                };
                Innovation.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                Innovation.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual > this._maxSlide - 1) {
                        return false;
                    }
                    if (actual < 0) {
                        this._inicio = 0;
                        return false;
                    }
                    var toLeft = actual * 100;
                    console.log(toLeft);
                    TweenMax.to(this._slide, 0.5, {
                        left: -toLeft + '%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            this._isAnimating = false;
                        }
                    });
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    return actual;
                };
                return Innovation;
            })();
            sections.Innovation = Innovation;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var AssistenceSistem = (function () {
                function AssistenceSistem(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                AssistenceSistem.prototype.init = function () {
                    console.log("AssistenceSistem initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    this.slideMe();
                };
                AssistenceSistem.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                AssistenceSistem.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual > this._maxSlide - 1) {
                        return false;
                    }
                    if (actual < 0) {
                        this._inicio = 0;
                        return false;
                    }
                    var toLeft = actual * 100;
                    console.log(toLeft);
                    TweenMax.to(this._slide, 0.5, {
                        left: -toLeft + '%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            this._isAnimating = false;
                        }
                    });
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    return actual;
                };
                return AssistenceSistem;
            })();
            sections.AssistenceSistem = AssistenceSistem;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var Security = (function () {
                function Security(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                Security.prototype.init = function () {
                    console.log("Security initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    this.slideMe();
                };
                Security.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                Security.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual > this._maxSlide - 1) {
                        return false;
                    }
                    if (actual < 0) {
                        this._inicio = 0;
                        return false;
                    }
                    var toLeft = actual * 100;
                    console.log(toLeft);
                    TweenMax.to(this._slide, 0.5, {
                        left: -toLeft + '%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            this._isAnimating = false;
                        }
                    });
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    return actual;
                };
                return Security;
            })();
            sections.Security = Security;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var Colors = (function () {
                function Colors(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                Colors.prototype.init = function () {
                    /*console.log("Colors initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);*/
                    this.slideMe();
                };
                Colors.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    /*this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);*/
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                Colors.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual >= 7) {
                        actual = 0;
                    }
                    if (actual < 0) {
                        actual = 6;
                    }
                    for (var i = 0; i <= 6; i++) {
                        $('.carIs').removeClass('act');
                        $('.colName').removeClass('act');
                    }
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    $('.txt' + actual).addClass('act');
                    $('.cr' + actual).addClass('act');
                    return actual;
                };
                return Colors;
            })();
            sections.Colors = Colors;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
/// <reference path="SliderMannager.ts" />
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var Gallery = (function () {
                function Gallery(_target, _bullet, _bul) {
                    this._target = _target;
                    this._bullet = _bullet;
                    this._bul = _bul;
                }
                Gallery.prototype.init = function () {
                    console.log("Gallery initialized");
                    this._slideParent = $(this._target).find(".sliderDE").get(0);
                    this.slideMe();
                };
                Gallery.prototype.slideMe = function () {
                    var self = this;
                    this._inicio = 0;
                    var este = this._inicio;
                    this._maxSlide = this._slideParent.children.length;
                    this._slide = $(this._target).find('.sliderDE').get(0);
                    this._isAnimating = false;
                    $(this._target)["swipe"]({
                        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                            if (direction == 'right') {
                                este = self.animateMe(este - 1);
                                this._isAnimating = true;
                            }
                            if (direction == 'left') {
                                este = self.animateMe(este + 1);
                                this._isAnimating = true;
                            }
                        },
                        allowPageScroll: 'vertical'
                    });
                };
                Gallery.prototype.animateMe = function (actual) {
                    if (this._isAnimating) {
                        return false;
                    }
                    if (actual > this._maxSlide - 1) {
                        return false;
                    }
                    if (actual < 0) {
                        this._inicio = 0;
                        return false;
                    }
                    var toLeft = actual * 100;
                    console.log(toLeft);
                    TweenMax.to(this._slide, 0.5, {
                        left: -toLeft + '%',
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            this._isAnimating = false;
                        }
                    });
                    $(this._bul).removeClass('act');
                    $(this._bullet + '-' + actual).addClass('act');
                    return actual;
                };
                return Gallery;
            })();
            sections.Gallery = Gallery;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/**
 * Created by Greco on 2/20/15.
 * Exterior Design
 */
var com;
(function (com) {
    var vw;
    (function (vw) {
        var sections;
        (function (sections) {
            var Loader = (function () {
                function Loader(_target) {
                    this._target = _target;
                }
                Loader.prototype.init = function () {
                    console.log("Loader initialized");
                    /*
                     this._slideParent = $(this._target).find(".sliderDE").get(0);*/
                    this._line = $(this._target).find('.line').get(0);
                    this.loaderAninm();
                };
                Loader.prototype.loaderAninm = function () {
                    animame();
                    function animame() {
                        TweenMax.set($('.line'), { width: 0 });
                        TweenMax.to($('.line'), 1.50, {
                            width: '100%',
                            ease: Quad.easeInOut,
                            onComplete: function () {
                            }
                        });
                        setTimeout(animame, 1700);
                    }
                };
                return Loader;
            })();
            sections.Loader = Loader;
        })(sections = vw.sections || (vw.sections = {}));
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

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
var com;
(function (com) {
    var vw;
    (function (vw) {
        var HomeSection = vw.sections.HomeSection;
        var MenuMannager = vw.sections.MenuMannager;
        var ExteriorDesign = vw.sections.ExteriorDesign;
        var InteriorDesign = vw.sections.InteriorDesign;
        var Innovation = vw.sections.Innovation;
        var AssistenceSistem = vw.sections.AssistenceSistem;
        var Security = vw.sections.Security;
        var Colors = vw.sections.Colors;
        var Gallery = vw.sections.Gallery;
        var Loader = vw.sections.Loader;
        var VWMobileTouaregApp = (function () {
            function VWMobileTouaregApp() {
                console.log("VWMobileTouaregApp instace created!");
            }
            VWMobileTouaregApp.prototype.init = function () {
                console.log("VWMobileTouaregApp initialized!");
                this._homseSection = new HomeSection($("body")[0]);
                this._homseSection.init();
                this._exteriorDesign = new ExteriorDesign($('#diseno-exterior')[0], '#b', '.bul0');
                this._exteriorDesign.init();
                this._interiorDesign = new InteriorDesign($('#diseno-interior')[0], '#bI', '.bul1');
                this._interiorDesign.init();
                this._innovation = new Innovation($('#innovacion')[0], '#bIn', '.bul2');
                this._innovation.init();
                this._assistenceSistem = new AssistenceSistem($('#sistema-de-asistencia')[0], '#bAs', '.bul3');
                this._assistenceSistem.init();
                this._security = new Security($('#seguridad')[0], '#bSe', '.bul4');
                this._security.init();
                this._colors = new Colors($('#colores')[0], '#bC', '.bul5');
                this._colors.init();
                this._gallery = new Gallery($('#galeria')[0], '#bG', '.bul6');
                this._gallery.init();
                this._menuMannager = new MenuMannager($('#Menu')[0]);
                this._menuMannager.init();
                this._loader = new Loader($('#loader')[0]);
                this._loader.init();
            };
            return VWMobileTouaregApp;
        })();
        vw.VWMobileTouaregApp = VWMobileTouaregApp;
    })(vw = com.vw || (com.vw = {}));
})(com || (com = {}));

/// <reference path="../../definitions/handlebars/handlebars.d.ts" />
/// <reference path="../../definitions/jquery/jquery.d.ts" />
/// <reference path="../../definitions/greensock/greensock.d.ts" />
/// <reference path="./HandlebarsTemplates.ts" />
/// <reference path="./com/vw/VWMobileTouaregApp.ts" />
var VWMobileTouaregApp = com.vw.VWMobileTouaregApp;
$(function () {
    //you will see when text changed by template
    window["app"] = new VWMobileTouaregApp();
    window["app"].init();
});

//# sourceMappingURL=main.js.map