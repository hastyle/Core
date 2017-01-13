$(function(){

  //////////////////////// Navigation Animation ///////////////////

  var listItem = $('.list-item');

    listItem.on('click', function(){
        var currentListItem = $(this);
        var anchorLink = currentListItem.find('a');
          currentListItem.addClass('current');
          currentListItem.siblings().removeClass('current');
    });

//////////////////// CounterUp ///////////////////////////////////
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    },
        demo = new CountUp("myTargetElement", 0, 52, 0, 2, options),
        demo2 = new CountUp("myTargetElement2", 0, 23, 0, 3, options),
        demo3 = new CountUp("myTargetElement3", 0, 55, 0, 2.5, options),
        controller = new ScrollMagic.Controller(),
        scene = new ScrollMagic.Scene({
      triggerElement: '#statistics',
      offset: -100,
      reverse: false,
    })
    .on('start', function(){
      demo.start();
      demo2.start();
      demo3.start();
    })
    .addTo(controller);

    ////////////////// Main Message Section Animation ////////////////////
    var controller = new ScrollMagic.Controller(),
        mainMessage = $('#main-massage'),
        title = mainMessage.find('.main-massage'),
        tlm = new TimelineMax(),
        tween = tlm.from(title, 3, {y: 50, autoAlpha: 0,ease: Power4.easeOut}),
        scene = new ScrollMagic.Scene({
      offset: '-300', // offset trigger position by 100px
      triggerElement: '#main-massage', // what will trigger scene
      reverse: false, // plays scene on the way up?
    })
      .setTween(tween)
      .addTo(controller);

////////////////// More Section Animation ///////////////////////

  var controller = new ScrollMagic.Controller(),
      more = $('#more'),
      mainTitle = more.find('.main-title'),
      secondaryTitle = more.find('.secondary-title'),
      button = more.find('.button'),
      iphone = more.find('.img-iphone'),
      macbook = more.find('.img-macbook'),
      tlm = new TimelineMax();
      tween =
    tlm
      .from(mainTitle,1,{y:100, autoAlpha:0, ease: Expo.easeOut})
      .from(secondaryTitle,1,{y:100, autoAlpha:0, ease: Expo.easeOut}, 0.5)
      .from(button,1,{y:100, autoAlpha:0, ease: Expo.easeOut}, 0.7)
      .from(iphone,5,{x:-100, autoAlpha:0, ease: Expo.easeOut}, 1.1)
      .from(macbook,5,{x:100, autoAlpha:0, ease: Expo.easeOut}, 1.3);

  var scene = new ScrollMagic.Scene({
    offset: -100, // offset trigger position by 100px
    triggerElement: '#more', // what will trigger scene
    reverse: false, // plays scene on the way up?
  })
  .setTween(tween)
  .addTo(controller);

////////////////// Header Animation ///////////////////////
  var header = $('.header'),
      tlm = new TimelineMax(),
      tween = tlm.staggerFrom(header,1, {autoAlpha: 0, y: 15}, 1);
      controller = new ScrollMagic.Controller();
      scene = new ScrollMagic.Scene({
        triggerElement: '.header',
      })
      .setTween(tween)
      .addTo(controller);

////////////////// Features Animation ///////////////////////
  var featureWrapper = $('.feature-wrapper'),
      tlm = new TimelineMax(),
      controller = new ScrollMagic.Controller();
      tween = tlm.staggerFrom(featureWrapper, 1,{autoAlpha: 0, cycle: {x: [-100, 100]}}, .5),
      scene = new ScrollMagic.Scene({
        triggerElement: '.feature-wrapper',
        reverse: false,
        offset: -150,
      })
      .setTween(tween)
      .addTo(controller);



});
