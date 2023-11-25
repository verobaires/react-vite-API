import   { useState, useEffect } from 'react'; 
 
function TestimoniosBis() { 
    // Defino el estado de las variables al iniciar con la funcion useState, para almacenar despues info del usuario (const user) y tambien para el desplegable con info adicional
    
    //Aca sacamos el primer valor del array donde esta el valor de state y se lo ponemos en user y despues en setUser vamos a tener el metodo que se ira actualizando 

    //Entonces es importantisimo este hook useState para  crear componentes dinámicos que deben renderizarse según los cambios que ocurran en la interfaz del usuario
    const [user, setUser] = useState({ 
        avatar: '', 
        first_name: '', 
        last_name: '', 
        employment: { title: '' }, 
        address: { city: '' }, 
        email: '', 
        dob: '', 
        
    }); 
  
    // Establecemos el estado de inicio del desplegable en falso para que no muestre nada al inicio
    const [showMoreInfo, setShowMoreInfo] = useState(false); 
  
//UseEffec es un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, por un cambio de estado, por recibir props nuevas o  porque se monta por primera vez. Lo ejecutamos dentro del cuerpo de nuestra función y le pasa mos como parámetro la función que queremos que ejecute al renderizar el componente

//Aca usamos el hook para extraer la informacion de la API cuando se monta y asegura que la data llega cuando la app se carga

    useEffect(() => { 
        // Usamos la funcion getUser para obtener la info de la API
        getUser(); 
    }, [ ]); //dejamos el array vacio para evitar que se repita inifinitamente
  
    // Aca armamos la funcion para peticionar la informacion de la API
    const getUser = () => { 
        // podemos armar una constante con la url que llamamos en fetch o poner la direccion en fetch es lo mismo
        const url = 'https://random-data-api.com/api/v2/users?response_type=json'; 
  


        // Fetch data and update user state when data is received 
        fetch(url)  //  llamada a la API, retorna un objeto que es una Promise
            .then((resp) => resp.json()) // al terminar la peticion transformamos la respuesta a JSON (response.json() que también es una Promise)
            .then((data) => { //  aca ya tenemos la respuesta en formato objeto
                setUser(data); //con setUser renderiza y toma el objeto
                console.log(data)//chequeamos que esta recibiendo el objeto
                
            }); 
                 }; 
  

    // aca armamos una funcion para un deplegable que muestre unas lineas mas de informacion, va a pasar de ocultar a mostrar a ocultar 
    const toggleMoreInfo = () => { 
        setShowMoreInfo(!showMoreInfo); 
    }; 
  
    return ( 
   
        <div className="contenedor"> 
            <div className="cajaPpal"> 
                <div className="contenedor-img"> 
                    <img className='ImgRandomApi'  src={user.avatar} //user recibe la info y al colocar .avatar especificamos que campo vamos a llamar - Usamos backticks en el alt para ingresar mas de un campo
                        alt={`${user.first_name}  
                    ${user.last_name}`} /> 
                  
                </div> 
                <div className="detallesDesplegable"> 
                    <h2>{`${user.first_name} ${user.last_name}`}</h2> 
                    <h3>{user.employment.title}</h3> 
                    <p> <strong >Correo Electronico: </strong> {user.email} </p> 
                    <p> <strong> Telefono: </strong> {user.phone_number} </p> 
                    <h4>Direccion:  {user.address.city}</h4> 
                    
                    {showMoreInfo && ( 
                        <div> 
                            <p><strong>Fecha Nacimiento:</strong> {user.date_of_birth} </p> 
                        </div> 
                    )} 
                
                    <button className='botonRandomApi' onClick={toggleMoreInfo}> 
                        {showMoreInfo ? 'Ver menos info' : 'Mostrar detalles'} 
                    </button> 
                </div> 
                
            </div> 
            
            <button className='botonRandomApi' onClick={getUser}> 
                Cargar nuevo usuario
            </button> 
        </div> 
//tenemos el boton toggleMoreInfo en el cual si showMoreInfo que es el booleano que declaramos en la linea 61 es verdadera oculta (para que al inicio no muestre nada) y si es falsa muestra el detalle. En la linea 82 declaramos lo que showMoreInfo muestra

//tenemos el boton obtener usuario que lo que hace correr la peticion a la api

    ); //cierre return
} // cierre de fx TestimoniosBis
  
export default TestimoniosBis;