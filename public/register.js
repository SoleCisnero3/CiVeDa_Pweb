
const messageError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log(e.target.children.user.value)
    const res = await fetch("/api/register",{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user.value,
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });
    if(!res.ok) return messageError.classList.toggle("escondido", false);
    const resJson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
})