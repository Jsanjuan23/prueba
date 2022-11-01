import React from 'react'
import logo from '../medicina.jpg'
import Login from './Login'
import swal from 'sweetalert'

const Analisis = () => {
  const [estado, setEstado] = React.useState(true)
  const [leu, setLeu] = React.useState("")
  const [peso, setPeso] = React.useState("")
  const [est, setEst] = React.useState("")
  const [ts, setTs] = React.useState("")
  const atras = ()=>{
    setEstado(false)
   }

   const resultado = async(e)=>{
    e.preventDefault()

    if(!leu.trim() || !peso.trim() || !est.trim() || !ts.trim()){
        swal({
          title: "Error",
          text: "No puede dejar ningún campo vacio.",
          icon: "error",
          button: "Aceptar"
        })
        return
    }

    if (parseInt(leu)>30){
      swal("Usted tiene una infección!")

    }else{
      swal("Todo normal!")
    }


   }


  return (


    <div>{
      estado ?

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
    <br /><br />
    <form class="col-8" id="formDatosAnalizar">
			<div class="row">
				<div class="col">
					<label for="tipoSangre" class="col-form-label">Tipo de sangre:
					</label>
					<div class="">
						<select name="" id="tipoSangre" class="form-control" data-toggle="tooltip"
							title="Ingrese tipo de Sangre!" required value={ts} onChange={(e)=> setTs(e.target.value)}>
              <option>Seleccione</option>
							<option>A+</option>
							<option>A-</option>
							<option>B+</option>
							<option>B-</option>
							<option>AB+</option>
							<option>AB-</option>
							<option>O+</option>
							<option>O-</option>
						</select>
						<div class="invalid-feedback">
							Campo Vacio,por favor
							llenarlo
						</div>
					</div>
				</div>
				<div class="col">
					<label for="Peso" class="col-form-label">Peso:
					</label>
					<div class="">
						<input type="number" id="peso" class="form-control" value={peso} onChange={(e)=> setPeso(e.target.value)}></input>
					</div>
				</div>
				<div class="col">
					<label for="Estatura" class="col-form-label">Estatura:
					</label>
					<div class="">
						<input type="number" id="Estatura" class="form-control"value={est} onChange={(e)=> setEst(e.target.value)}></input>
					</div>
				</div>
				<div class="col">
					<label for="Leucocitos" class="col-form-label">Leucocitos:
					</label>
					<div class="">
						<input type="number" id="Leucocitos" class="form-control"value={leu} onChange={(e)=> setLeu(e.target.value)}></input>
					</div>
				</div>
			</div>
		</form>
	<br /><br />
	<div class="form-group row">

		<div class="col-sm-3">
			<button class="btn btn-primary" type="submit" onClick={resultado}>Analizar</button>
		</div>
	</div>	 
	    </div>

      :
    <Login/>

}
</div>

  )
}

export default Analisis