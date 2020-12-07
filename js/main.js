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
        if(origin === 'mainPage'){
            $('.main-txt').addClass('action');
            $('.bg-move').addClass('action')
            $('.cloud').addClass('action')
        }else{
            $('.main-txt').removeClass('action');
            $('.bg-move').removeClass('action')
            $('.cloud').removeClass('action')
        }

        if(origin === 'introPage'){
            $('.intro-title, .intro-desc, #intro-box').addClass('action')

        }else{
            $('.intro-title, .intro-desc, #intro-box').removeClass('action')
        }


        if(origin === 'placePage'){
            $('#place-info').addClass('action');
            //$('#place-slider').delay(500).slick('slickPlay')
        }else{
            $('#place-info').removeClass('action')
            //$('#place-slider').slick('slickPause')
        }

        if(origin === 'activPage'){
            $('.bg_illust').addClass('action')
        }else{
            $('.bg_illust').removeClass('action')
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
    
    {text : "The Han River is well equipped with public facilities including parks. You ca take a walk along the Han River and enjoy the scenery of Seoul."},
    {text : "There are many stores that rent hanbok around the palace. Wearing hanbok will make good memories. Also, the entrance fee is free if you wear Hanbok and enter the palace."},
    {text : "It will be a good experience to stay in a traditional Korean house, Hanok. You can stay in Hanok or experience Hanok Cafe."}

]

const activIllust = $('.bg_illust');
const person = activIllust.find('.person').find('img');
const textArea = $('.activ-text .desc')

$('.activ-list').click(function(){
        let idxNumber = $(this).index() //인덱스 번호
        activIllust.removeClass('action');
        //console.log(that)
        
        let listUrl =  $(this).find('img').attr('src');
        let bgUrl = listUrl.replace('_day','_day_bg');
        let objUrl = listUrl.replace('_day','_day_objs');
        //console.log(fixedUrl);
        activIllust.css({backgroundImage : `url(${bgUrl})`});
        person.hide();
        person.attr('src', objUrl);
        setTimeout(function(){
            person.show();
        },1000)
        if(idxNumber === 0){
            textArea.text(activityData[0].text)
            person.parent().css({
                display:"block",
                width:'30%', right:'60%', bottom:'10%'
            })
        }else if(idxNumber === 1){
            textArea.text(activityData[1].text)
            person.parent().css({
                display:"block",
                width:'23%', right:'24%', bottom:'25%'
            })
        }else if(idxNumber === 2){
            textArea.text(activityData[2].text)
            person.parent().css({
                display : "none"
            })
        }
        activIllust.addClass('action');
        //person.remove('.person')
})

               