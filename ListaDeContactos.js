//1.Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido
let listContactos = [
    {id: 1,
    nombres: "Ezer Edgardo",
    apellidos: "Perdomo Castellanos",
    telefono: 50495392589,
    ubicaciones: [{
        departamento: "Santa Barbara",
        municipio: "Santa Barbara"
    }]
    },
    {id: 2,
    nombres: "Kensy",
    apellidos: "Muñoz Dubon",
    telefono: 50495392649,
    ubicaciones: [{
        departamento: "Santa Barbara",
        municipio: "Ilama"
    }]
    },
    {id: 3,
    nombres: "Carlos Edgardo",
    apellidos: "Hernandez",
    telefono: 50405382589,
    ubicaciones: [{
        departamento: "Copan",
        municipio: "Santa Rosa Copan"
    }]
    },
    
]

//2.Crea una función para añadir un nuevo contacto
function añadir(idN, nombresN, apellidosN, telefonoN, departamentoN, municipioN){
    const contactoNuevo = {
        id: idN,
        nombres: nombresN,
        apellido: apellidosN,
        telefono: telefonoN,
        ubicaciones: [{
            departamento: departamentoN,
            municipio: municipioN
        }]
    }
    listContactos.push(contactoNuevo)
    return (listContactos)

}
añadir( 4, "Adhara", "Muñoz", 50495392589,"Ocotepeque", "Sinuapa")

//3.Crea una función para borrar un contacto existente
function eliminar(idE){
    const listaNueva = listContactos.filter((contacto)=>{
        if(contacto.id !== idE){
            return contacto;
        }
    } )  
    listContactos=listaNueva  
}
eliminar(3);

//4.Crea una función para imprimir en consola los contactos presentes en la lista
function mostrar(){
    console.log(listContactos);
}


//bonus Añade una funcion que permita actualizar un contacto

function actualizarContacto (idA, nombresA, apellidosA, telefonoA, departamentoA, municipioA){
    const listActualizada = [];
    for (let i = 0; i < listContactos.length; i++ ){
        if(listContactos[i].id === idA){
        const contactoEditado = {
        id: listContactos[i].id,
        nombres: nombresA,
        apellido: apellidosA,
        telefono: telefonoA,
        ubicaciones: [{
            departamento: departamentoA,
            municipio: municipioA
        }]
    }
        listActualizada.push(contactoEditado);
    }else{
            listActualizada.push(listContactos[i]);
        };
    }
    listContactos = listActualizada;
    return(listContactos);
}
actualizarContacto(4, "Sahily Adhara", "Perdomo", 12345678, "Sinuapa", "Ocotepeque");

mostrar();