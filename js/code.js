const item=document.querySelectorAll('.timeline li')
document.addEventListener('DOMContentLoaded',()=>{
    isElementInViewport
    getCallbackFun
    window.addEventListener("load",getCallbackFun)
    window.addEventListener("resize",getCallbackFun)
    window.addEventListener("scroll",getCallbackFun)
})
function isElementInViewport(element)
{
    const react=element.getBoundingClientRect()
    return(react.top>=0 && react.left>=0 && react.bottom<=(window.innerHeight || document.documentElement.clientHeight) && react.right<=(window.innerWidth || document.documentElement.clientWidth))

}
function getCallbackFun()
{
    for (let i=0; i<item.length; i++)
    { 
        if(isElementInViewport(item[i]))
        {
            item[i].classList.add("in-view")
        }
        else
        {
            item[i].classList.remove("in-view")
        }
    }
}