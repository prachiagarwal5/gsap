// gsap.to("#box" ,{
//     x:1000,
//     rotate:360,
//     duration:2,
//     backgroundColor:"blue",
//     delay:1
// })

// gsap.from("#box" ,{
//     x:1000,
//     rotate:360,
//     duration:2,
//     backgroundColor:"blue",
//     delay:1
// })
// var tl=gsap.timeline();
// tl.to("#box1",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:3,
//     delay:1
// })
// tl.to("#box2",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
    
// })
// tl.to("#box3",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:1,
// })
var tl=gsap.timeline();
tl.from("#nav h3" ,{
        y:-50,
        opacity:0,

        duration:0.8,
        stagger:0.3,
        delay:0.4
    })
    tl.from("#main h1" ,{
        x:-500,
        opacity:0,
        stagger:0.3,
        duration:1,
        stagger:0.6,
        delay:0.4
    })
    tl.from("img" ,{
        x:100,
        rotate:45,
        opacity:0,
        stagger:0.3,
        duration:0.5,
        stagger:0.5,
        
    })