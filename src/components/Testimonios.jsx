import { useEffect, useState } from 'react'

const Testimonios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
    
        //aca muestro los datos
        const Data = async  () => {
            const resp =  await fetch('https://randomuser.me/api/')
            const usuarios = await  resp.json()
            setUsuarios(usuarios.results)
            console.log(usuarios.results)
        }

   
        Data()
    }, [])
 
    return (
        <>
            <div className='BloqueRandomUser'>
                {usuarios.map((testimonio) => {
                    //destructuracion de testimonio
                    const {
                        name: { first, last },
                        picture: { large },
                        email,
                        phone,
                        login: { uuid, username },
                        dob: { age },

                    } = testimonio

                    return (
                        //ingreso la info tomando el id con la llave
                 
                        <div key={uuid} className='DataRandomUser'>
                            <img className="ImgRandomUser" src={large} alt={first} />
                            <div className="txt-centrado">
                                <h2>{first} {last}</h2>
                                <p>{age} años</p>
                            </div>
                            <div className="txt-centrado">
                                <p>{email}</p>
                                <p>{username}</p>
                                <p>{phone}</p>
                            </div>
                        </div>
                    )                    
                })}

           
            </div>

            <div className='BloqueRandomUser'>
                {usuarios.map((testimonio) => {
                    //destructuracion de testimonio
                    const {
                        name: { first, last },
                        picture: { large },
                        email,
                        phone,
                        login: { uuid, username },
                        dob: { age },

                    } = testimonio

                    return (
                        //ingreso la info tomando el id con la llave
                 
                        <div key={uuid} className='DataRandomUser'>
                            <img className="ImgRandomUser2nd"src={large} alt={first} />
                            <div className="txt-centrado">
                                <h2>{first} {last}</h2>
                                <p>{age} años</p>
                            </div>
                            <div className="txt-centrado">
                                <p>{email}</p>
                                <p>{username}</p>
                                <p>{phone}</p>
                            </div>
                        </div>
                    )                    
                })}
            </div>
            
         
        </>
    )
}

export default Testimonios