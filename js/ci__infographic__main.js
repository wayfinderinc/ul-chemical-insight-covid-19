jQuery(document).ready(function() {
    //clicking functions
    jQuery('#resources__trigger').on('click', function(e) {
        jQuery('#resources').toggleClass("open__resources"); //you can list several class names 
        document.getElementById('resources').scrollIntoView();
    });
    //slider functions

    jQuery('#scene2__content__8__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
    })

});
// init controller sceenchangees
var scenechange = new ScrollMagic.Controller();
// build tween
var tween__scene1 = TweenMax.to("#background__scene1", 1, {
    className: "+=scenechange"
});
var tween__scene2 = TweenMax.to("#background__scene2", 1, {
    className: "+=scenechange"
});
var tween__scene3 = TweenMax.to("#background__scene3", 1, {
    className: "+=scenechange"
});
var tween__scene4 = TweenMax.to("#background__scene4", 1, {
    className: "+=scenechange"
});
// build scene
var scenechange__scene1 = new ScrollMagic.Scene({
        triggerElement: "#scenechange__trigger1",
        duration: 300,
        offset: -100,
        triggerHook: 0.85
    })
    .setTween(tween__scene1)
    .addTo(scenechange);
var scenechange__scene2 = new ScrollMagic.Scene({
        triggerElement: "#scenechange__trigger2",
        duration: 300,
        offset: -100,
        triggerHook: 0.5
    })
    .setTween(tween__scene2)
    .addTo(scenechange);

var scenechange__scene3 = new ScrollMagic.Scene({
        triggerElement: "#scenechange__trigger3",
        duration: 300,
        offset: -100,
        triggerHook: 0.5
    })
    .setTween(tween__scene3)
    .addTo(scenechange);

var scenechange__scene4 = new ScrollMagic.Scene({
        triggerElement: "#scenechange__trigger4",
        duration: 300,
        offset: -100,
        triggerHook: 0.5
    })
    .setTween(tween__scene4)
    .addTo(scenechange);


//scene1 - Intro
var scene1 = new ScrollMagic.Controller();

var scene1__move = TweenMax.to("#scene1__background", 1, {
    className: "+=movescene1__background"
});
var scene1__move__h1 = TweenMax.to("#scene1__content h1", 1, {
    className: "+=movescene1__h1"
});
var scene1__move__p = TweenMax.to("#scene1__content p", 1, {
    className: "+=movescene2__p"
});

var scene1__move__scene = new ScrollMagic.Scene({
        triggerElement: "#scene1",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(scene1__move)
    .addTo(scene1);

var scene1__move__scene__h1 = new ScrollMagic.Scene({
        triggerElement: "#scene1",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(scene1__move__h1)
    .addTo(scene1);


var scene1__move__scene_p = new ScrollMagic.Scene({
        triggerElement: "#scene1",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(scene1__move__p)
    .addTo(scene1);


//Scene2 - Step 1
var scene2 = new ScrollMagic.Controller();
var step1 = TweenMax.to("#step1", 1, {
    className: "+=numberopacity"
});
var step1__opacity = new ScrollMagic.Scene({
        triggerElement: "#scene2",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(step1)
    .addTo(scene2);


//Scene3 - Step2
var scene3 = new ScrollMagic.Controller();
var step2 = TweenMax.to("#step2", 1, {
    className: "+=numberopacity"
});
var step2__opacity = new ScrollMagic.Scene({
        triggerElement: "#scene3",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(step2)
    .addTo(scene3);

//Scene4 - Step 3
var scene4 = new ScrollMagic.Controller();
var step3 = TweenMax.to("#step3", 1, {
    className: "+=numberopacity"
});
var step3__opacity = new ScrollMagic.Scene({
        triggerElement: "#scene4",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(step3)
    .addTo(scene4);

//Scene5 - Step 4
var scene5 = new ScrollMagic.Controller();
var step4 = TweenMax.to("#step4", 1, {
    className: "+=numberopacity"
});
var step4__opacity = new ScrollMagic.Scene({
        triggerElement: "#scene5",
        duration: "100%",
        triggerHook: 0
    })
    .setTween(step4)
    .addTo(scene5);

// Scene 2


var scene2__content__2 = new ScrollMagic.Controller();
var scene2__content__2__tween = TweenMax.to("#scene2__content__2", 1, {
    className: "+=scene2__content__2__move"
});
var scene2__content__2__move = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__2",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene2__content__2__tween)
    .addTo(scene2__content__2);


var scene2__content__2 = new ScrollMagic.Controller();
var scene2__content__2__1__tween = TweenMax.to("#scene2__content__2__span1", 1, {
    className: "+=scene2__content__2__move"
});
var scene2__content__2__1__animation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__2",
        duration: "600",
        triggerHook: 0.5
    })
    .setTween(scene2__content__2__1__tween)
    .addTo(scene2__content__2);



var scene2__content__3 = new ScrollMagic.Controller();
var scene2__content__3__1__tween = TweenMax.to("#scene2__content__3__span1", 1, {
    className: "+=scene2__content__3__move"
});
var scene2__content__3__1__animation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__3",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene2__content__3__1__tween)
    .addTo(scene2__content__3);

var scene2__content__3__2__tween = TweenMax.to("#scene2__content__3__span2", 1, {
    className: "+=scene2__content__3__move"
});
var scene2__content__3__2__animation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__3",
        duration: "300",
        triggerHook: 0.7
    })
    .setTween(scene2__content__3__2__tween)
    .addTo(scene2__content__3);



var scene2__content__4 = new ScrollMagic.Controller();
var scene2__content__4__h2__tween = TweenMax.to("#scene2__content__4 h2", 1, {
    className: "+=scene2__content__4__move"
});
var scene2__content__4__h2__amimation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__4",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene2__content__4__h2__tween)
    .addTo(scene2__content__4);

var scene2__content__4__svg__tween = TweenMax.to("#scene2__content__4__svg", 1, {
    className: "+=scene2__content__4__svg__move"
});
var scene2__content__4__svg__amimation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__4",
        duration: "400",
        triggerHook: 0.6
    })
    .setTween(scene2__content__4__svg__tween)
    .addTo(scene2__content__4);


var scene2__content__5 = new ScrollMagic.Controller();
var scene2__content__5__h3__tween = TweenMax.to("#scene2__content__5 h3", 1, {
    className: "+=scene2__content__5__move"
});
var scene2__content__5__h3__amimation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__5",
        duration: "200",
        triggerHook: 0.8
    })
    .setTween(scene2__content__5__h3__tween)
    .addTo(scene2__content__5);

var scene2__content__5__h3__1__tween = TweenMax.to("#scene2__content__5__h3__1", 1, {
    className: "+=scene2__content__5__h3__move"
});
var scene2__content__5__h3__1__amimation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__5",
        duration: "200",
        triggerHook: 0.65
    })
    .setTween(scene2__content__5__h3__1__tween)
    .addTo(scene2__content__5);

var scene2__content__5__h3__2__tween = TweenMax.to("#scene2__content__5__h3__2", 1, {
    className: "+=scene2__content__5__h3__move"
});
var scene2__content__5__h3__2__amimation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__5",
        duration: "200",
        triggerHook: 0.5
    })
    .setTween(scene2__content__5__h3__2__tween)
    .addTo(scene2__content__5);

var scene2__content__6 = new ScrollMagic.Controller();
var scene2__content__6__1__tween = TweenMax.to("#scene2__content__6__1", 1, {
    className: "+=scene2__content__6__1__move"
});
var scene2__content__6__1__animation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__6",
        duration: "400",
        triggerHook: 0.75
    })
    .setTween(scene2__content__6__1__tween)
    .addTo(scene2__content__6);

var scene2__content__6__2__tween = TweenMax.to("#scene2__content__6__2", 1, {
    className: "+=scene2__content__6__2__move"
});
var scene2__content__6__2__animation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__6",
        duration: "400",
        triggerHook: 0.75
    })
    .setTween(scene2__content__6__2__tween)
    .addTo(scene2__content__6);

var scene2__content__7 = new ScrollMagic.Controller();
var scene2__content__7__tween = TweenMax.to("#scene2__content__7", 1, {
    className: "+=scene2__content__7__move"
});
var scene2__content__7__animation = new ScrollMagic.Scene({
        triggerElement: "#scene2__content__7",
        duration: "400",
        triggerHook: 0.75
    })
    .setTween(scene2__content__7__tween)
    .addTo(scene2__content__7);


var scene2__partcles = new ScrollMagic.Controller();

var scene2__partcles__move_1 = TweenMax.to("#scene2__particles__1__img", 1, {
    className: "+=scene2__particles__1__paralax"
});
var scene2__partcles__animation_1 = new ScrollMagic.Scene({
        triggerElement: "#scene2__particles__1",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene2__partcles__move_1)
    .addTo(scene2__partcles);

var scene2__partcles__move_2 = TweenMax.to("#scene2__particles__2__img", 1, {
    className: "+=scene2__particles__2__paralax"
});
var scene2__partcles__animation_2 = new ScrollMagic.Scene({
        triggerElement: "#scene2__particles__2",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene2__partcles__move_2)
    .addTo(scene2__partcles);

var scene2__partcles__move_3 = TweenMax.to("#scene2__particles__3__img", 1, {
    className: "+=scene2__particles__3__paralax"
});
var scene2__partcles__animation_3 = new ScrollMagic.Scene({
        triggerElement: "#scene2__particles__3",
        duration: "200%",
        triggerHook: 1
    })
    .setTween(scene2__partcles__move_3)
    .addTo(scene2__partcles);
//scene 3

var scene3__content__2 = new ScrollMagic.Controller();
var scene3__content__2__h2__tween = TweenMax.to("#scene3__content__2 h2", 1, {
    className: "+=scene3__content__2__move"
});
var scene3__content__2__h2__animation = new ScrollMagic.Scene({
        triggerElement: "#scene3__content__2",
        duration: "200",
        triggerHook: 0.55
    })
    .setTween(scene3__content__2__h2__tween)
    .addTo(scene3__content__2);

var scene3__content__3 = new ScrollMagic.Controller();
var scene3__content__3__h2__tween = TweenMax.to("#scene3__content__3 h2", 1, {
    className: "+=scene3__content__3__move"
});
var scene3__content__3__h2__animation = new ScrollMagic.Scene({
        triggerElement: "#scene3__content__3",
        duration: "200",
        triggerHook: 0.75
    })
    .setTween(scene3__content__3__h2__tween)
    .addTo(scene3__content__3);


var scene3__content__4 = new ScrollMagic.Controller();
var scene3__content__4__2__p__tween = TweenMax.to("#scene3__content__4__2 p", 1, {
    className: "+=scene3__content__4__2__p__move"
});
var scene3__content__4__2__p__animation = new ScrollMagic.Scene({
        triggerElement: "#scene3__content__4",
        duration: "200",
        triggerHook: 0.6
    })
    .setTween(scene3__content__4__2__p__tween)
    .addTo(scene3__content__4);


var scene3__content__4__4__p__tween = TweenMax.to("#scene3__content__4__4 p", 1, {
    className: "+=scene3__content__4__4__p__move"
});
var scene3__content__4__4__p__animation = new ScrollMagic.Scene({
        triggerElement: "#scene3__content__4",
        duration: "200",
        triggerHook: 0.45
    })
    .setTween(scene3__content__4__4__p__tween)
    .addTo(scene3__content__4);


var scene3__partcles = new ScrollMagic.Controller();

var scene3__partcles__move_1 = TweenMax.to("#scene3__particles__1__img", 1, {
    className: "+=scene3__particles__1__paralax"
});
var scene3__partcles__animation_1 = new ScrollMagic.Scene({
        triggerElement: "#scene3__particles__1",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene3__partcles__move_1)
    .addTo(scene3__partcles);

var scene3__partcles__move_2 = TweenMax.to("#scene3__particles__2__img", 1, {
    className: "+=scene3__particles__2__paralax"
});
var scene3__partcles__animation_2 = new ScrollMagic.Scene({
        triggerElement: "#scene3__particles__2",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene3__partcles__move_2)
    .addTo(scene3__partcles);

var scene3__partcles__move_3 = TweenMax.to("#scene3__particles__3__img", 1, {
    className: "+=scene3__particles__3__paralax"
});
var scene3__partcles__animation_3 = new ScrollMagic.Scene({
        triggerElement: "#scene3__particles__3",
        duration: "200%",
        triggerHook: 1
    })
    .setTween(scene3__partcles__move_3)
    .addTo(scene3__partcles);

// Scene 4	

var scene4__content__2 = new ScrollMagic.Controller();
var scene4__content__2__h2__tween = TweenMax.to("#scene4__content__2 h2", 1, {
    className: "+=scene4__content__2__move"
});
var scene4__content__2__h2__animation = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__2",
        duration: "200",
        triggerHook: 0.8
    })
    .setTween(scene4__content__2__h2__tween)
    .addTo(scene4__content__2);



var scene4__grids = new ScrollMagic.Controller();

var scene4__grids__tween_1 = TweenMax.to("#gridarea__1", 1, {
    className: "+=movegridarea"
});
var scene4__grids__animation_1 = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__3__grid",
        duration: "200",
        triggerHook: 0.65
    })
    .setTween(scene4__grids__tween_1)
    .addTo(scene4__grids);

var scene4__grids__tween_2 = TweenMax.to("#gridarea__2", 1, {
    className: "+=movegridarea"
});
var scene4__grids__animation_2 = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__3__grid",
        duration: "200",
        triggerHook: 0.6
    })
    .setTween(scene4__grids__tween_2)
    .addTo(scene4__grids);

var scene4__grids__tween_3 = TweenMax.to("#gridarea__3", 1, {
    className: "+=movegridarea"
});
var scene4__grids__animation_4 = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__3__grid",
        duration: "200",
        triggerHook: 0.55
    })
    .setTween(scene4__grids__tween_3)
    .addTo(scene4__grids);

var scene4__grids__tween_4 = TweenMax.to("#gridarea__4", 1, {
    className: "+=movegridarea"
});
var scene4__grids__animation_4 = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__3__grid",
        duration: "200",
        triggerHook: 0.5
    })
    .setTween(scene4__grids__tween_4)
    .addTo(scene4__grids);

var scene4__grids__tween_5 = TweenMax.to("#gridarea__5", 1, {
    className: "+=movegridarea"
});
var scene4__grids__animation_5 = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__3__grid",
        duration: "200",
        triggerHook: 0.45
    })
    .setTween(scene4__grids__tween_5)
    .addTo(scene4__grids);


var scene4__grids__tween_6 = TweenMax.to("#gridarea__6", 1, {
    className: "+=movegridarea"
});
var scene4__grids__animation_6 = new ScrollMagic.Scene({
        triggerElement: "#scene4__content__3__grid",
        duration: "200",
        triggerHook: 0.4
    })
    .setTween(scene4__grids__tween_6)
    .addTo(scene4__grids);


var scene4__partcles = new ScrollMagic.Controller();

var scene4__partcles__move_1 = TweenMax.to("#scene4__particles__1__img", 1, {
    className: "+=scene4__particles__1__paralax"
});
var scene4__partcles__animation_1 = new ScrollMagic.Scene({
        triggerElement: "#scene4__particles__1",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene4__partcles__move_1)
    .addTo(scene4__partcles);

var scene4__partcles__move_2 = TweenMax.to("#scene4__particles__2__img", 1, {
    className: "+=scene4__particles__2__paralax"
});
var scene4__partcles__animation_2 = new ScrollMagic.Scene({
        triggerElement: "#scene4__particles__2",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene4__partcles__move_2)
    .addTo(scene4__partcles);


// Scene 5


var scene5__content__2 = new ScrollMagic.Controller();
var scene5__content__2__1__tween = TweenMax.to("#scene5__content__2__1", 1, {
    className: "+=scene5__content__2__1__move"
});
var scene5__content__2__1__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__2",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene5__content__2__1__tween)
    .addTo(scene5__content__2);

var scene5__content__2__2__tween = TweenMax.to("#scene5__content__2__2", 1, {
    className: "+=scene5__content__2__2__move"
});
var scene5__content__2__2__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__2",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene5__content__2__2__tween)
    .addTo(scene5__content__2);



var scene5__content__3 = new ScrollMagic.Controller();
var scene5__content__3__1__tween = TweenMax.to("#scene5__content__3__1", 1, {
    className: "+=scene5__content__3__1__move"
});
var scene5__content__3__1__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__3",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene5__content__3__1__tween)
    .addTo(scene5__content__3);

var scene5__content__3__2__tween = TweenMax.to("#scene5__content__3__2", 1, {
    className: "+=scene5__content__3__2__move"
});
var scene5__content__3__2__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__3",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene5__content__3__2__tween)
    .addTo(scene5__content__3);



var scene5__content__4 = new ScrollMagic.Controller();
var scene5__content__4__tween = TweenMax.to("#scene5__content__4", 1, {
    className: "+=scene5__content__4__move"
});
var scene5__content__4__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__4",
        duration: "500",
        triggerHook: 0.8
    })
    .setTween(scene5__content__4__tween)
    .addTo(scene5__content__4);

var scene5__content__4__1__tween = TweenMax.to("#scene5__content__4__1", 1, {
    className: "+=scene5__content__4__1__move"
});
var scene5__content__4__1__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__4__1",
        duration: "800",
        triggerHook: 0.5
    })
    .setTween(scene5__content__4__1__tween)

    .addTo(scene5__content__4);



var scene5__content__5 = new ScrollMagic.Controller();
var scene5__content__5__tween = TweenMax.to("#scene5__content__5", 1, {
    className: "+=scene5__content__5__move"
});
var scene5__content__5__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__5",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene5__content__5__tween)
    .addTo(scene5__content__5);



var scene5__content__6 = new ScrollMagic.Controller();
var scene5__content__6__tween = TweenMax.to("#scene5__content__6", 1, {
    className: "+=scene5__content__6__move"
});
var scene5__content__6__move = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__6",
        duration: "300",
        triggerHook: 0.8
    })
    .setTween(scene5__content__6__tween)
    .addTo(scene5__content__6);



var scene5__bkg = new ScrollMagic.Controller();
var scene5__bkg__move = TweenMax.to("#scene5__background1", 1, {
    className: "+=movescene5__background"
});
var scene5__bkg__move__scene = new ScrollMagic.Scene({
        triggerElement: "#scene5__content__3",
        duration: "800",
        triggerHook: .3
    })
    .setTween(scene5__bkg__move)
    .addTo(scene5__bkg);

var scene5__partcles = new ScrollMagic.Controller();

var scene5__partcles__move_1 = TweenMax.to("#scene5__particles__1__img", 1, {
    className: "+=scene5__particles__1__paralax"
});
var scene5__partcles__animation_1 = new ScrollMagic.Scene({
        triggerElement: "#scene5__particles__1",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene5__partcles__move_1)
    .addTo(scene5__partcles);

var scene5__partcles__move_2 = TweenMax.to("#scene5__particles__2__img", 1, {
    className: "+=scene5__particles__2__paralax"
});
var scene5__partcles__animation_2 = new ScrollMagic.Scene({
        triggerElement: "#scene5__particles__2",
        duration: "300%",
        triggerHook: 1
    })
    .setTween(scene5__partcles__move_2)
    .addTo(scene5__partcles);

var d = document,
    menuStatus = 'closed';

function closeNotification() {
    var notification = d.getElementById('notification');
    var hero = d.getElementById('hero');
    notification.style.display = 'none';
    hero.style.marginTop = '60px';
}

function menuToggle() {
    if ( menuStatus === 'closed' ) {
        TweenMax.to('#lineTop', .4, { transformOrigin:'top left', rotation:45, x:4, ease:Expo.easeOut });
        TweenMax.to('#lineBttm', .4, { transformOrigin:'bottom left', rotation:-45, x:4, ease:Expo.easeOut });
        TweenMax.to('#lineMid', .4, { autoAlpha:0, ease:Expo.easeOut });
        menuStatus = 'open';
        openMobileMenu();
    } else {
        TweenMax.to('#lineTop', .4, { transformOrigin:'top left', rotation:0, x:0, ease:Expo.easeOut });
        TweenMax.to('#lineBttm', .4, { transformOrigin:'bottom left', rotation:0, x:0, ease:Expo.easeOut });
        TweenMax.to('#lineMid', .4, { autoAlpha:1, ease:Expo.easeOut });
        menuStatus = 'closed';
        closeMobileMenu();
    }
}

function openMobileMenu() {
    TweenMax.fromTo('.nav-menu', .4, { display:'block', xPercent:-100 }, { xPercent:0, ease:Expo.easeOut });
}

function closeMobileMenu() {
    TweenMax.to('.nav-menu', .2, { xPercent:-100, ease:Expo.easeOut, onComplete:function() {
        TweenMax.set('.nav-menu', { display:'none' });
    } });
}