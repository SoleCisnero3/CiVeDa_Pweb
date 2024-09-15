    document.getElementById("register-form").addEventListener("submit", async (e) => {
        e.preventDefault();

        // Obtener los valores del formulario de manera más precisa
        const user = e.target.elements["user"].value;
        const email = e.target.elements["email"].value;
        const password = e.target.elements["password"].value;

        console.log("Usuario:", user);

        try {
            // Enviar la solicitud a la ruta de tu servidor donde se maneja el registro (no al HTML)
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user,
                    email,
                    password
                })
            });

            if (res.ok) {
                // Redirigir o mostrar un mensaje de éxito
                alert("Registro exitoso");
            } else {
                alert("Error al registrarse");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Ocurrió un error durante el registro");
        }
    });
