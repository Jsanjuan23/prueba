import React from 'react'
import swal from 'sweetalert'
import {firebase} from '../firebase'
import logo from '../medicina.jpg'
import Analisis from './Analisis'
import Registro from './Registro'
import Principal from './Principal'
const Login = () => {
  const [lista, setLista] = React.useState([])
    const [cc, setCc] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [val, setVal] = React.useState(true)
    const [atras, setAtras] = React.useState(false)
    const [reg, setReg] = React.useState(false)
    

    React.useEffect(()=>{
      const leer=async()=>{
          try {
              const db = firebase.firestore()
              const data = await db.collection('pacientes').get()
              const arraydata = data.docs.map(item =>(
                {
                id: item.id, ...item.data()
                }
              ))
              setLista(arraydata)
            } catch (error) {
              console.log(error)        
            }
          }
          leer();
        })
        const buscar = async() =>{
          if(!cc.trim() || !pass.trim()){
              swal({
                title: "Error",
                text: "No puede dejaaar ningún campo vacio.",
                icon: "error",
                button: "Aceptar"
              })
              return
          }
        
        try{
          
          const user = lista.find(dato => dato.id === cc);
  
          if (user.id === cc && user.clave===pass){
            setVal(false)
          }else{
           
              swal({
                  title: "Error",
                  text: "Por favor, verifique la constraseña ingresada.",
                  icon: "error",
                  button: "Aceptar"
                })
                return
            }
          
        }catch(error){
          swal({
            title: "Error",
            text: "El usuario ingresado no existe.",
            icon: "error",
            button: "Aceptar"
          })
        }
  
        
        }

   const validar = () =>{
  
    setVal(false)
    setReg(true)
   }

   const volver = ()=>{
    setVal(false)
    setAtras(true)
   }


  return (

 
  <div>
    {
      val ?
    <div>

<div class="container mt-3">
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <div class="container-fluid">
              
                <img src={logo} alt="logo" style={{width: '40px'}} class="rounded-pill"/>
              
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
              <h5 style={{color:"white"}}>Medical Analysis Software</h5>
              </li>
              
            </ul>
          </div>
          <button type="button" class="btn btn-dark btn-rounded" onClick={volver}>
        <i class="fas fa-hand-point-left"></i>
</button>
        </div>
      </nav>		 
        </div>
          <br />
          <div class="container" align="center">
              <div class="card border-dark mb-3" style={{maxWidth: '30rem'}}>
                      <div class="row">
                      <div class="card-body text-dark">
                  
                              <div class="card-text">
          
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                  
                                  <div class="progress">
                                  <div class="progress-bar w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                  <br />
                                  <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_5056093.jpg" alt="" class="rounded-pill" style={{width: '8rem'}}/>
                                  <br /><br />                             
                                  <input type="text" class="form-control" placeholder="Ingresar Usuario" value={cc} onChange={(e)=> setCc(e.target.value)}/>
                  <br />
                  <input type="password" placeholder="Contraseña" class="form-control"value={pass} onChange={(e)=> setPass(e.target.value)}/>
                  <br />
                  <input type="button" class="btn btn-secondary" value="Ingresar" onClick={buscar}/>
                  <br /><br />
     
  
                </div>
                <br />
                <div class="container">
                  <div class="row">
                        <div class="col-lg-6 ms-auto">
                              
                          <button type="button" class="btn btn-danger btn-floating">
                          <i class="fas fa-exclamation-circle"></i>
                          
                          </button>
                          <p><small><strong>Olvidé mi contraseña</strong></small></p>
                            </div>
                            <div class="col-lg-6 ms-auto">
                            
                              <button type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-color="dark" onClick={validar}>
                          <i class="fas fa-user-plus"></i>
                            </button>
                            <p><small><strong>Registrarme</strong></small></p>
                            </div>
                  </div>
                   
                  
                  </div> 
              </div>
            
          </div>
            </div>
        </div>
      </div> 

    </div>
    :
    reg ?
    <Registro/>
    :
    atras ?
    <Principal/>
    :
    <Analisis/>
    }


   
      


     


  </div>
  )
}

export default Login