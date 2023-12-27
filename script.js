document.getElementById('formulario').addEventListener('submit', (event)=>{
    event.preventDefault()

    let entradaNombre= document.getElementById('name')
    let errorNombre= document.getElementById('nameError')

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent='Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent=''
        errorNombre.classList.remove('error-message')
    }

    let entradaMail= document.getElementById('email')
    let errorMail = document.getElementById('emailError')
    let mailPatron= /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
    
    if(!mailPatron.test(entradaMail.value)){
        errorMail.textContent= 'Por favor, ingresá un mail válido' 
        errorMail.classList.add('error-message')
    }else{
        errorMail.textContent=''
        errorMail.classList.remove('error-message')
    }

    let entradaContrasena = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let contrasenaPatron=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if(!contrasenaPatron.test(entradaContrasena.value)){
       errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales'
       errorContrasena.classList.add('error-message')
    }else{
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    if(!errorNombre.textContent && !errorMail.textContent && !errorContrasena.textContent){
        alert('Los datos han sido ingresados correctamente')
        document.getElementById('formulario').reset() 
    }
})


