import { IoIosAddCircle} from "react-icons/io";
import styles from './NewGrade.module.scss';
import React, {useState, useRef} from 'react'


const NewGrade = () =>{
    const [lastNameField, setLastName] = useState([]);

    return(
        <div id={styles["entradas"]}>
                <input 
                value={lastNameField}
                        
                        onChange={ (e)=> { setLastName(e.target.value)}}
                type="text" name="evaluacion"  placeholder="Ej: Parcial 1"  id={styles["input1"]}/>
                <input type="text" name="porcentaje"  placeholder="Ej: 20"  id={styles["input2"]}/>
                <input type="text" name="nota"  placeholder="Ej: 8" id={styles["input3"]}/>    

            </div>
    );

}

export default NewGrade;