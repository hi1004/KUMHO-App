

$(document).ready(function(){
    
    $('#fullpage').fullpage({
    sectionSelector: '.fullpage_section',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    navigationTooltips: ['HOME', 'NAVIGATION', 'COMPANY', 'BUSINESS', 'NEWS & TOPICS', 'CONTACT'],
    slidesNavigation: true,
    css3: true,
    controlArrows: true ,
    scrollingSpeed: 700,
 /*   anchors: ['firstPage', 'secondPage'],*/
   /* autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay:1000,*/
    scrollBar:true,
    navigationPosition: 'left',
      easing : 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: true,
      loopTop:true,
      /*loopHorizontal:true,
      continuousHorizontal :true,
      continuousVertical: true,
      scrollHorizontally: true,
      interlockedSlides: true,
      offsetSections: true,*/
      normalScrollElements:'#wrap',
      scrollOverflow: true,
      
      
  }); 
    
   
    
});