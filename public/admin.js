document.getElementByIdTagName("button")[0].addEventListener("click",()=>{
    document.kookie ='jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = "/"
})