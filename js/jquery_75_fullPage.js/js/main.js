
$(document).ready(function(){
    
    
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.fullpage_section',
    slideSelector: '.slide',
      lazyLoading: true,
    navigation: true,
    navigationTooltips: ['HOME', 'NAVIGATION', 'COMPANY', 'BUSINESS', 'NEWS & TOPICS', 'CONTACT'],
    slidesNavigation: true,
    css3: true,
    controlArrows: true ,
    scrollingSpeed: 700,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    autoScrolling: true,
    
    scrollBar:true,
    navigationPosition: 'left',
      easing : 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: true,
      loopHorizontal:true,
      
      scrollHorizontally: true,
      
      normalScrollElements:'#wrap',
      scrollOverflow: true,
      animationAnchor : true,
      
      
      
  }); 
    


  
});