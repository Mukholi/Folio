let svgCont = document.getElementsByClassName("nav-bar-bg-svg-cont")
svgCont = svgCont[0]
const navItems = document.getElementsByClassName("nav-bar-item-cont")
const leftBgBar = document.getElementById("barLeft")
const navBarBg = document.getElementById("nav-bar-bg")

//Methods
function resizeSvgCont(itemID){
    //svgCont.style.width = navItems[itemID].getBoundingClientRect().width+"px"
}
function moveSvgCont(itemID){
    let svgAnime = gsap.timeline()
    svgAnime.pause()
    svgAnime.to(barLeft,{
        width: (navItems[itemID].getBoundingClientRect().x - (navItems[itemID].getBoundingClientRect().width / 2))+"px",
        duration: 0.25,
    })
    svgAnime.to(svgCont,{
        width: navItems[itemID].getBoundingClientRect().width+"px",
        duration: 0.25,
    },"=-0.25")
    svgAnime.to(barRight,{
        width: ((navItems[0].getBoundingClientRect().width) * (navItems.length - (itemID+1))) + "px",
        duration: 0.25,
    },"=-0.25")
    svgAnime.restart()


    //barLeft.style.width = (navItems[itemID].getBoundingClientRect().x - (navItems[itemID].getBoundingClientRect().width / 2))+"px"
    //barRight.style.width = ((navItems[0].getBoundingClientRect().width) * (navItems.length - (itemID+1))) + "px"
}

//Loops
for(let counter = 0; counter < navItems.length; counter++){
    //Loops
    for(let counter = 0; counter < navItems.length; counter++){
        navItems[counter].addEventListener("click", (e)=>{
            resizeSvgCont(counter)
            moveSvgCont(counter)
        })
    }
    navItems[counter].addEventListener("click", (e)=>{
        resizeSvgCont(counter)
        moveSvgCont(counter)
    })
}