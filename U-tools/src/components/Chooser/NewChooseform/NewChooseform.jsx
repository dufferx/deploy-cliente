import styles from './NewChooseform.module.scss'
import classes from './NewChooseform.module.scss'
import React, {useState, useRef, useEffect} from 'react'
import { useConfigContext } from '../../../context/ConfigContext';
let uv=0;
let um=0;
let cum=0;
import { toast } from 'react-toastify';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';



const NewChooseForm =({onAddChoose,onDeleteChoose=()=>{}})=>{
  const navigate = useNavigate();

const [nameField, setName] = useState("");
const [nameField2, setName2] = useState("");
const [lastNameField, setLastName] = useState("");
const [uvs, SetUvs]= useState([0]);
const [ums, SetUms] = useState([0]);
const [cumd, setCumd] = useState(0);
const [sumuvs, SetSumuvs] = useState("0")
const { startLoading , stopLoading } = useConfigContext();
const { token } = useUserContext();
//const [users, setUsers]=useState([])


  if (isNaN(cumd)) {
    setCumd(0)
  
  }

 


  const errors={
    "lastName":!lastNameField || lastNameField > 10,
   // "cumd": cumd=0
  }

  const hasErrors = () =>{
    return Object.values(errors).some(error => error)
  }
  
  
 

  const redirectHandler4 = (e) => {
    e.preventDefault();
    navigate('/cumcalculator');
  }


  useEffect(()=>{

  let _cum = (ums.reduce((acc2,amount2) => acc2 + amount2)) / (uvs.reduce((acc2,amount2) => acc2 + amount2))

    setCumd((_cum).toFixed(2))

  },[uvs],[ums])




const handleClick=(e) =>{
    e.preventDefault();
    let _uvs = [...uvs,parseFloat(nameField)];
    SetUvs(_uvs);

    let _ums =[...ums,(parseInt(nameField)*parseFloat(lastNameField))]
    SetUms(_ums)


   onAddChoose(nameField2,lastNameField);


   setName("");
   setLastName(""); 
   

   
   
   
}

const handleSave=(e) =>{
  e.preventDefault();
  
  saveChoose((uvs.reduce((acc2,amount2) => acc2 + amount2)).toString(), (ums.reduce((acc2,amount2) => acc2 + amount2)).toString() , cumd.toString());

  //navigate('/cumcalculator');
  
}



const handleClear =(e) =>{
  e.preventDefault();

  let deleteuv =[...uvs];
  deleteuv.pop();

  SetUvs(deleteuv)


  let deleteum = [...ums];
  deleteum.pop();

  SetUms(deleteum)



  onDeleteChoose(true);



}

const saveChoose = async (uvs, ums, cum) => {
  try {
    startLoading();
      const response = await fetch(`https://deploy-utools-api-production.up.railway.app/api/auth/patch/${token}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
              uvs, ums, cum
          })
      });


      if (response.ok) {
              toast.success("Notas guardado");
              navigate('/cumcalculator');
          
      }else{
          const msg = {
              "400": "Wrong fields",
              "404": "Not Found"
          }

          toast.warn(msg[response.status.toString()] || "Unexpected error")
      }
  } catch (error) {
      toast.error("error")
  } finally {
    stopLoading();
  }
}


    return(
        <form id={styles["frmUsers"]}>
                
                <div className={classes["fieldis-grouped"]}>
                    
                      <select defaultValue={'DEFAULT'}
                      className={classes["input-selct"]} 
                      name ="name"
                      onChange={ (e)=> { 
                        let selectedOption = e.target.selectedOptions[0];
                        let Value = e.target.value;
                        setName(Value);
                         setName2(selectedOption.text);}}>
                      
                        <option value="DEFAULT" disabled>Materia...</option>
                        <option  disabled>---------------Ciclo 1---------------</option>
                        <option value="4">Precalculo</option>
                        <option value="3">Optativa técnica I</option>
                        <option value="3">Matematica Discreta</option>
                        <option value="4">Fundamentos de programacion</option>
                        <option  disabled>---------------Ciclo 2---------------</option>
                        <option value="4"> Álgebra vectorial y matrices </option>
                        <option value="4"> Cálculo I </option>
                        <option value="4">Programación de estructuras dinámicas </option>
                        <option value="3"> Matemática Discreta II </option>
                        <option  disabled>---------------Ciclo 3---------------</option>
                        <option value="5">Física I</option>
                        <option value="4">Cálculo II</option>
                        <option value="4">Programación Orientada a Objetos</option>
                        <option value="4">Bases de datos</option>
                        <option  disabled>---------------Ciclo 4---------------</option>
                        <option value="5">Electricidad y magnetismo</option>
                        <option value="4"> Cálculo III</option>
                        <option value="4">Programación web</option>
                        <option value="4">Administración de Bases de Datos</option>
                        <option value="3">Optativa Humanistico-Social</option>
                        <option  disabled>---------------Ciclo 5---------------</option>
                        <option value="4">Análisis numérico</option>
                        <option value="4">Redes de computadoras</option>
                        <option value="4">Programación de dispositivos móviles</option>
                        <option value="3">Análisis de sistemas</option>
                        <option value="5">Física I</option>
                        <option  disabled>---------------Ciclo 6---------------</option>
                        <option value="3">Optativa Humanistico-Social II</option>
                        <option value="4">Análisis de algoritmos</option>
                        <option value="4">Programación de artefactos</option>
                        <option value="4">Probabilidad estadística</option>
                        <option value="4">Seguridad en entornos de desarrollo</option>
                        <option  disabled>---------------Ciclo 7---------------</option>
                        <option value="4">Arquitectura de computadoras</option>
                        <option value="4">Técnicas de simulación en computadoras</option>
                        <option value="4">Programación n-capas</option>
                        <option value="4">Fundamentos de inteligencia de negocios</option>
                        <option value="3">Optativa Humanistico-Social</option>
                        <option  disabled>---------------Ciclo 8---------------</option>
                        <option value="4">Sistemas Operativos</option>
                        <option value="4">Programación declarativa</option>
                        <option value="4">Ingeniería de software</option>
                        <option value="4">Formulación y evaluación de proyectos</option>
                        <option value="4">Programación declarativa</option>
                        <option  disabled>---------------Ciclo 9---------------</option>
                        <option value="3">Optativa Humanistico-Social IV</option>
                        <option value="4">Optativa técnica II</option>
                        <option value="4">Aplicaciones de código abierto</option>
                        <option value="4">Práctica profesional I</option>
                        <option  disabled>---------------Ciclo 10---------------</option>
                        <option value="4">Optativa técnica III</option>
                        <option value="4">Teoría de lenguajes de programación</option>
                        <option value="3">Optativa humanístico-Social V</option>
                        <option value="4">Práctica profesional II</option>

                      </select>
                        
                        
                        <input
                        className={errors["lastName"] ? classes["ierror"] : classes["input"]}
                        autoComplete="off"
                       // className={classes["input"]} 
                        name="lastName" 
                        value={lastNameField}
                        onChange={ (e)=> { setLastName(e.target.value)}}
                        type="number" 
                        placeholder="Nota"
                        />
                        
                        
                        <button 
                        id={errors["lastName"] ? styles["btnerror"] : styles["btnAdd"]}
                        disabled={errors["lastName"] ? true: false}
                        
                        onClick={handleClick}
                      //  id={styles["btnAdd"]} 
                        type="button" 
                        role="button">ADD</button>



                        <button 
                       // disabled={verife}
                        id={styles["btnClr"]}
                        onClick={handleClear}

                type="button" >
              DELETE
            </button>
                       
                      
                </div>

                <div id={styles["botones"]}>
                
                <button onClick={handleSave}
                id={styles["btnSave"]} type="button" className={classes["button is-info"]}>
              GUARDAR
            </button>

            <button onClick={redirectHandler4} 
                id={styles["btnSave"]} type="button" className={classes["button is-info"]}>
              VER RESULTADOS 
            </button>
            
            </div>
            <div id={styles["results"]}>
              CUM: <label>{cumd}</label> 
            </div>
            


            <br/>
            <br/>

            
            </form>
    );
} 

export default NewChooseForm

