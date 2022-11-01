import React from 'react'
import logo from '../medicina.jpg'
import agg_usuario from '../agregar-usuario.png'
import {firebase} from '../firebase'
import swal from 'sweetalert'
import Login from './Login'
const Registro = () => {
  const [lista, setLista] = React.useState([])
  const [cc, setCc] = React.useState('')
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const [fechan, setFechan] = React.useState('')
  const [sexo, setSexo] = React.useState('')
  const [eps, setEps] = React.useState('')
  const [correo, setCorreo] = React.useState('')
  const [cel, setCel] = React.useState('')
  const [estado, setEstado] = React.useState(true)

  // ------------------               GUARDAR         ------------------------
  const guardar = async(e) =>{
    
    e.preventDefault()

    if(!cc.trim() || !nombre.trim() || !apellido.trim() || !fechan.trim() || !sexo.trim() || !eps.trim() || !correo.trim() || !cel.trim()){
        swal({
          title: "Error",
          text: "No puede dejar ningún campo vacio.",
          icon: "error",
          button: "Aceptar"
        })
        return
    }

    try {
      var pass = Math.floor(Math.random()*9999)+1000
      const conv = pass.toString();
     
      const db = firebase.firestore()
      const nuevo_r = {
        id : cc,
        nombre : nombre,
        apellido : apellido,
        fecha : fechan,
        sexo : sexo,
        eps : eps,
        correo: correo,
        tel : cel,
        clave : conv
      }

      db.collection('pacientes').add(nuevo_r)
      setLista([
        ...lista,
        {
          id:cc,
          nombre : nombre,
          apellido : apellido,
          fecha : fechan,
          sexo : sexo,
          eps : eps,
          clave : conv,
          correo : correo,
          tel : cel,
          
        }
    ])

  
      swal({
        title: "Correcto",
        text: "Su clave para ingresar al sistemas es : "+pass,
        icon: "success",
        button: "Aceptar"
      })
      setEstado(false)
      setCc('')
      setNombre('')
      setApellido('')
      setFechan('')
      setSexo('')
      setEps('')
      setCorreo('')
      setCel('')
     
      
    } catch (error) { 
    }
  }
const atras = ()=>{
 setEstado(false)
}


// ---------------------------------------------------------------------------------------------------

return (
<div>
  {
    estado ?
    <div class="container">
<form onSubmit>
<div class="container mt-3">
		<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
			<div class="container-fluid">
            
        <img src={logo} alt="logo" style={{width: '40px'}} class="rounded-pill"/>
   
				<div class="container-fluid">
          
					<ul class="navbar-nav">
						<li class="nav-item">
            <h5 style={{color:"white"}}>Medical Analysis</h5>
						</li>
						
					</ul>

				</div>
        <button type="button" class="btn btn-dark btn-rounded" onClick={atras}>
        <i class="fas fa-hand-point-left"></i>
</button>
			</div>
		</nav>		 
	    </div>
    
  <br />
  <div class="container">
  <div class="row">
  <div class="card-body text-dark">
  <div class="card-text">
  <img src={agg_usuario} alt="" style={{width: '10%'}} class="img-fluid"></img>
  <br /><br />
    <h5 class="text-dark"> Registro de pacientes</h5>
    <br />

  
    <br />

    <div class="form-row">
     
    <div class="form-group col-md-2">
       <label for="inputEmail4"><em>Identificación</em></label>
       <input type="text" class="form-control" id="inputEmail4" value={cc} onChange={(e)=> setCc(e.target.value)}></input>
     </div>
     <div class="form-group col-md-2">
       <label for="inputEmail4"><em>Fecha de nacimiento</em></label>
       <input type="date" name="txtfec" class="form-control" value={fechan} onChange={(e)=> setFechan(e.target.value)} ></input>
     </div>
     <div class="form-group col-md-4">
       <label for="inputEmail4"><em>Nombres</em></label>
       <input type="text" class="form-control" id="inputEmail4" value={nombre} onChange={(e)=> setNombre(e.target.value)}></input>
     </div>

     <div class="form-group col-md-4">
       <label for="inputEmail4"><em>Apellidos</em></label>
       <input type="text" class="form-control" id="inputEmail4" value={apellido} onChange={(e)=> setApellido(e.target.value)} ></input>
     </div>
     
     </div>

     <div class="form-row">
     

     
     <div class="form-group col-md-3">
      <label for="inputState"><em>Sexo</em></label>
      <select id="inputState" class="form-control" value={sexo} onChange={(e)=> setSexo(e.target.value)}>
        <option selected>Seleccione...</option>
        <option>Masculino</option>
        <option>Femenino</option>
      </select>
    </div>

    <div class="form-group col-md-3">
      <label for="inputState"><em>EPS</em></label>
      <select id="inputState" class="form-control" value={eps} onChange={(e)=> setEps(e.target.value)}>
        <option selected>Seleccione...</option>
        <option>Sura</option>
        <option>Conmeva</option>
        <option>Nueva Eps</option>
        <option>Comparta</option>
      </select>
    </div>
    <div class="form-group col-md-3">
       <label for="inputEmail4"><em>Correo electronico</em></label>
       <input type="text" class="form-control mb-2" id="inlineFormInput" value={correo} onChange={(e)=> setCorreo(e.target.value)}></input>
     </div>

     <div class="form-group col-md-3">
      <label for="inputZip"><em>Celular</em></label>
      <input type="text" class="form-control" id="inputZip" value={cel} onChange={(e)=> setCel(e.target.value)}></input>
    </div>

     </div>


        
<br />

<div class="card text-center">
  <button type="submit" class="btn btn-success" onClick={guardar}><h5>Guardar</h5></button>
</div>
</div>
</div>
</div>
</div>
</form>
</div>
    :
    <Login/>
  }

</div>
  )
}

export default Registro