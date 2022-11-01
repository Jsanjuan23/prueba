import React from 'react'
import logo from '../medicina.jpg'
import Login from './Login';
import Registro from './Registro';

const Principal = () => {
    const [estado,setEstado] = React.useState(true)
    const [ing, setIng] = React.useState(false)
    const [reg, setReg] = React.useState(false)

    const validarr = () =>{
     setEstado(false)
     setReg(true)
     
    }
    const validari = () =>{
        setEstado(false)
        setIng(true)
        
       }

  return (
    
 <div>{
    estado ?

        <div>
        
        <nav class="navbar navbar-dark bg-dark " id="mainNav">
            <br /><br />
            <div class="container">
                
            <h4><strong style={{color:"white"}}>Medical Analysis</strong></h4>
               
                <button class="navbar-toggler text-uppercase bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={validari}>
                <i class='fas fa-sign-in-alt' style={{fontSize:"24px"}} alt="Iniciar Sesión"></i>
                </button>
            </div>
        </nav>
       <br />
        <header class="masthead bg-primary text-white text-center">
            <br />
            <div class="container d-flex align-items-center flex-column">
              
                <img class="rounded-pill" style={{width: '150px'}} src={logo} alt="..." />
                <br />
               
                <h1 class="masthead-heading text-uppercase mb-0">Software Medico</h1>
             
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
      
                <p class="masthead-subheading font-weight-light mb-0">Análisis de tus resultados</p>
            </div>
        </header>
       
      

        <section class="page-section bg-primary text-white mb-0" id="about">
            <br /><br />
            <div class="container">
               
                <div class="row" >
                    <div class="col-lg-4 ms-auto"><p class="text-center">Esta herramienta está diseñada para que los usuarios puedan obtener una previa del resultado de sus exámenes médicos.</p></div>
                    <div class="col-lg-4 me-auto"><p class="text-center">Los resultados de sus análisis deben ser validados previamente con su médico de confianza.</p></div>
                    <div class="col-lg-4 me-auto"><p class="text-center">El objetivo de esta herramienta es de disminuir los tiempos de espera.</p></div>
             
                </div>
              
                <div class="text-center mt-4">
                <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={validarr}>

                       
                        <h7> <i class="fas fa-download me-2"> </i> Quiero registrarme!</h7>
                </button>

                </div>
                <br />
            </div>
        </section>         
  

        </div>
    
    
    :
    ing ? 
    <Login/>
    :
     
    reg ?
    <Registro/>
    :
    alert("Ha ocurrido un problema")
         
     



   
}
    </div>
  )
}

export default Principal