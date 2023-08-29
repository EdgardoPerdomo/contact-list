//1.Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido
let listContactos = [
    {id: 1,
    nombre: "Edgardo",
    apellido: "Perdomo",
    numero: 50495392589
    },
    {id: 2,
    nombre: "Kensy",
    apellido:"Muñoz",
    numero: 50496879689
    },
    {id: 3,
    nombre: "Carlos",
    apellido:"Hernandez",
    numero: 50494530899
    },
    
]

//2.Crea una función para añadir un nuevo contacto
function añadir(idN, nombreN, apellidoN, numeroN){
    const contactoNuevo = {
        id: idN,
        nombre: nombreN,
        apellido: apellidoN,
        telefono: numeroN,
    }
    listContactos.push(contactoNuevo)
    return (listContactos)

}
añadir( 4, "Adhara", "Muñoz", 50495392589)

//3.Crea una función para borrar un contacto existente
function eliminar(nombreE){
    const listaNueva = listContactos.filter((contacto)=>{
        if(contacto.nombre !== nombreE){
            return contacto;
        }
    } )  
    listContactos=listaNueva  
}
eliminar("Carlos");

//4.Crea una función para imprimir en consola los contactos presentes en la lista
function mostrar(){
    console.log(listContactos);
}

mostrar();