import { IoIosAddCircle} from "react-icons/io";
import NewGrade from './NewGrade/NewGrade';
import React,{ useState, useEffect} from 'react';
import {flushSync} from 'react-dom'
import './GreadeCalculator.css'
import Header from "../Header/Header";

const GradeCalculator =()=>{
    const [notaField, SetNota] = useState("");
    const [porcentajeField, SetPorcentaje] = useState(""); 
    const [formValues, setFormValues] = useState([{ name: "", email : ""}])
    const [resp, SetResp] = useState("0");
    
    if (isNaN(resp)){
      SetResp("0")
    }

    useEffect(()=>{
      let res = formValues.map(value => parseFloat(value.name) * (parseFloat(value.email)/100)).reduce((acc, amount) => acc+ amount);
      SetResp(res)
    },[formValues])

    const errors = {
      "name": parseFloat(notaField) > 10,
      "email": parseFloat(porcentajeField)>100
    }





    
    
    let handleChange = (i, e) => {
        
        SetNota(e.target.value)
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);


      }

      let handleChange2  =(i,e) => {
        SetPorcentaje(e.target.value)
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);

      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {

      let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
      flushSync(() => {
        
        setFormValues(newFormValues);
      });
        
   
        
       
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();

    //var res = formValues.map(value => value.name).reduce((acc, amount) => acc+ amount);
    var res = formValues.map(value => parseFloat(value.name) * (parseFloat(value.email)/100)).reduce((acc, amount) => acc+ amount);
    
    SetResp(res)
    


        //alert(JSON.stringify(formValues));

    }


    return (
        <div className="nav">
        <Header />
        <form  className="form-grade"
        
        onSubmit={handleSubmit}>
        <h1 className="calcuno">Calculadora de nota</h1>
          {formValues.map((element, index) => (
            
            <div className="form-inline" key={index}>
              <label>Nota</label>



              <input 
              className={ errors["name"] ? "error" : ""}
              min="0"
              max="10"
              autoComplete="off"
              placeholder="Ej: 8"
              type="number" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Porcentaje %</label>


              <input 
              className={ errors["email"] ? "error" : ""}
              min="0"
              max="10"
              autoComplete="off"
              placeholder="Ej: 20"
              type="number" name="email" value={element.email || ""} onChange={e => handleChange2(index, e)} />

              { 

                index ?

             <button type="button"  className="button-remove" onClick={() => removeFormFields(index)}>Eliminar</button>
             : 
             <button type="button"  className="button-remover" onClick={() => removeFormFields(index)}>Eliminar</button>
              } 
            </div>
          
          ))}
          <div className="button-section">
              <button className="button-add" type="button" onClick={() => addFormFields()}>Añadir</button>              
          </div>
          
            <div className="nota">
              Nota : 
              <label className={ errors["email"] || errors["name"] ? "error" : ""}>{resp}</label>
            </div>

      </form>
      </div>
    )
}


export default GradeCalculator;