import "./style.css";

const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
];

function tieneMayusculas(cadena: string) {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === cadena[i].toUpperCase() || cadena[i] === cadena[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

function tieneNumeros(cadena: string) {
    for (let i = 0; i < cadena.length; i++) {
        if (!isNaN(parseInt(cadena[i]))) {
            return true;
        }
    }
    return false;
}

const tieneCaracteresEspeciales = (clave: string): Boolean => {
    const caracteresEspeciales = "!@#$%^&*()-_+=<>?/{}[]|";
    for (let i = 0; i < clave.length; i++) {
        if (caracteresEspeciales.includes(clave[i])) {
            return true;
        }
    }
    return false;
};

const tieneLongitudMinima = (clave: string): Boolean => {
    if (clave.length >= 8) {
        return true;
    }
    return false;
}

const tieneNombreUsuario = (nombreUsuario: string, clave: string): Boolean => {
    if (nombreUsuario !== clave) {
        return true;
    }
    return false;
};

const tienePalabrasComunes = (clave: string, commonPasswords: string[]): boolean => {
    const claveMinusculas = clave.toLowerCase();
    for (const commonPassword of commonPasswords) {
        if ( claveMinusculas === commonPassword.toLowerCase()) {
            return false;
        }
    }
    return true;
}

interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

export const validarClave = (nombreUsuario: string, clave: string): ValidacionClave => {
    if (!tieneMayusculas(clave)) {
        return { esValida: false, error: "La clave debe tener al menos una mayúscula." };
    }

    if (!tieneNumeros(clave)) {
        return { esValida: false, error: "La clave debe tener al menos un número." };
    }

    if (!tieneCaracteresEspeciales(clave)) {
        return { esValida: false, error: "La clave debe de tener caracteres especiales." };
    }

    if (!tieneLongitudMinima(clave)) {
        return { esValida: false, error: "La clave debe tener al menos 8 caracteres." };
    }

    if (!tieneNombreUsuario(nombreUsuario, clave)) {
        return { esValida: false, error: "La clave no puede ser igual al nombre de usuario." };
    }

    if (!tienePalabrasComunes(clave, commonPasswords)) {
        return { esValida: false, error: "La clave no puede ser una palabra común." };
    }

    return { esValida: true };
}

// La funcion de validarClave la he creado dos veces porque lo empece haciendo de esta manera,
// pero después vi que en el enunciado ponia otra cosa. 
// Pienso que es mejor que devuelva todos los errores encontrados por eso lo dejo también aquí 😅.

// interface ValidacionClave {
//     esValida: boolean;
//     error?: string[];
// }

// export const validarClave = (nombreUsuario: string, clave: string): ValidacionClave => {
//     const errores = [];

//     if (!tieneMayusculas(clave)) {
//         errores.push("La clave debe tener al menos una mayúscula.");
//     }

//     if (!tieneNumeros(clave)) {
//         errores.push("La clave debe tener al menos un número.");
//     }

//     if (!tieneCaracteresEspeciales(clave)) {
//         errores.push("La clave debe de tener caracteres especiales.");
//     }

//     if (!tieneLongitudMinima(clave)) {
//         errores.push("La clave debe tener al menos 8 caracteres.");
//     }

//     if (!tieneNombreUsuario(nombreUsuario, clave)) {
//         errores.push("La clave no puede ser igual al nombre de usuario.");
//     }

//     if (!tienePalabrasComunes(clave, commonPasswords)) {
//         errores.push("La clave no puede ser una palabra común.");
//     }
    
//     if (errores.length === 0) {
//         return { esValida: true };
//     } else {
//         return { esValida: false, error: errores };
//     }
// }

console.log(validarClave("admin", "admin"));