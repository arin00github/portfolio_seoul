let yOffset=0
const placeArea = document.querySelector('#place-illust');
const placeBg = document.querySelector('.place-bg');
const placeBtn = document.querySelector('#placebtn');
//let sw = false;
//let posTop , posLeft;

function scrollLoop (){
    let x = placeArea.scrollLeft
    console.log(x);
}

placeArea.addEventListener('scroll',function(){
    scrollLoop()
})







        


/******* place part  *******/


$('#container').fullpage({
    sectionSelector : '.section',
    easing : '',
    slidesNavigation: true,
    menu : '#menu',
    anchors:['mainPage','introPage','inforPage','placePage','activPage','endPage'],
    //nevigation:true,
    afterLoad : function(origin, destination,direction){
        const $title = $('#subject .page-title')
        if(origin === 'mainPage'){
            $($title).text('')
            $('.main-txt').addClass('action');
            $('.bg-move').addClass('action')
            $('.cloud').addClass('action')
        }else{
            $('.main-txt').removeClass('action');
            $('.bg-move').removeClass('action')
            $('.cloud').removeClass('action')
        }

        if(origin === 'introPage'){
            $($title).text('01.introduction')
            $('.intro-title, .intro-desc, #intro-box').addClass('action')

        }else{
            $('.intro-title, .intro-desc, #intro-box').removeClass('action')
        }
        if(origin === 'inforPage'){
            $($title).text('02.information')
        }


        if(origin === 'placePage'){
            $($title).text('Where to Visit')
            $('#place-info').addClass('action');
            //$('#place-slider').delay(500).slick('slickPlay')
        }else{
            $('#place-info').removeClass('action')
            //$('#place-slider').slick('slickPause')
        }

        if(origin === 'activPage'){
            $($title).text('What to Play')
            $('.bg_illust').addClass('action')
        }else{
            $('.bg_illust').removeClass('action')
        }

        if(origin === 'endPage'){
            $($title).text('')
            $('#end').addClass('active')
        }else{
            $('#end').removeClass('active')
        }
    },
    

})
/******* home part  *******/
const clouds = $('.cloud')

for(let i = 0 ; i < clouds.length ; i++){
    let leftvalue = clouds[i].offsetLeft
    let checkTimer = setInterval(function(){
        console.log(leftvalue);
    },1000)

    
}
/******* information part  *******/
$("#infor-slider").slick({
    slidesToShow : 3,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
})



/******* place part  *******/
const placeImg = $('.pl-unit-img');
const placeText = $(placeImg).next().find('.pl-text');
$('.pl-unit-img').mouseover(function(){
    
    $(placeText).removeClass('active')
    $(this).next().find('.pl-text').addClass('active')
}).mouseout(function(){
    $(this).next().find('.pl-text').removeClass('active')
})

const scrollBar = $('#scroll-bar');

/******* activity part  *******/


const activityData = [
    
    {   title : "01.At The Han River",
        text : "The Han River is well equipped with public facilities including parks. You ca take a walk along the Han River and enjoy the scenery of Seoul."},
    {
        title : "02.Wearing Hanbok",
        text : "There are many stores that rent Hanbok around the palace. Wearing hanbok will make good memories. Also, the entrance fee is free if you wear Hanbok and enter the palace."},
    {
        title : "03.Hanok Stay",
        text : "It will be a good experience to stay in a traditional Korean house, Hanok. You can stay in Hanok or experience Hanok Cafe."}

]

const activIllust = $('.bg_illust');
const textArea = $('.activ-text .desc')
const textTitle = $('.activ-title')
const illustArray = [
    "portfolio_seoul/image/activity_day_bg_01.gif",
    "portfolio_seoul/image/activity_day_bg_02.gif",
    "portfolio_seoul/image/activity_day_bg_03.gif"
]



$('.activ-list').click(function(){
    let idxNumber = $(this).index() //인덱스 번호
    console.log(idxNumber);
    activIllust.removeClass('action');
    
        
    activIllust.css({backgroundImage : `url(${illustArray[idxNumber]})`});
    textTitle.text(activityData[idxNumber].title);
    textArea.text(activityData[idxNumber].text);
       
    activIllust.addClass('action');
       
})


/// Endsection svg

const svgText = document.querySelectorAll('#thank-text .st0')
const dashValue = [305, 430, 420, 476, 310, 412, 400]
for(let i=0; i < svgText.length ; i++){
    console.log(`Letter ${i} is ${svgText[i].getTotalLength()}`)
}

