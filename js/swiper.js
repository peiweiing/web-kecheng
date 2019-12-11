
    var mySwiper = new Swiper('.swiper-container', {
        // freeMode : true,
        // virtualTranslate : true, 
        setWrapperSize :true,
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        }
    })
    //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
    // new Swiper('.swiper-container')
    // var mySwiper = document.querySelector('.swiper-container').swiper
    // mySwiper.slideNext();