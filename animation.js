function startLoop() {

    const transformObj = document.querySelectorAll('div');
    transformObj.forEach((el) => {
        el.style.background = 'linear-gradient(to right, blue 10%,red 50%,green 1000%';
    });

    anime({
        targets: '.circle',
        translateX: [0, 400],
        delay: anime.stagger(200, { start: 1000 }),
        background: "#0000FF",
        direction: "alternate",
        width: '50%',
        duration: 750,
        borderRadius: ['50%', '0%'],
        loop: true,
        opacity: 0.2,

        rotate: {
            value: '+=2turn', // 0 + 2 = '2turn'
            duration: 1800,
            easing: 'easeInOutSine'

        },

        // keyframes: [
        //     { translateY: -40 },
        //     { translateX: 250 },
        //     { translateY: 40 },
        //     { translateX: 0 },
        //     { translateY: 0 }
        // ]
    });


}



function stopLoop() {

}