import e = require("express");

document.getElementById("register-form").addEventListener("submit", async(e)=>{
    e.preventDefault();
    console.log(e.target.children.user.value);
    const res = await fetch("http://localhost:5500/pages/register.html", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user.value,
            email: e.target.children.email.value,
            password:e.target.children.password.value
        })
    })
})