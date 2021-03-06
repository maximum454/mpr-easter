const swiperEaster = new Swiper('.swiper-easter', {
    slidesPerView: 4,
    spaceBetween: 0,
    grid: {
        fill: 'row',
        rows: 2,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        768: {
            slidesPerView: 3,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 4,
            grid: {
                fill: 'row',
                rows: 2,
            },
        }
    }
})