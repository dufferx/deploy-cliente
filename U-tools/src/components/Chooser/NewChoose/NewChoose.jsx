import classes from './NewChoose.module.scss';

const   NewChoose = ({name,lastName})=>{



    return(
        <div className={classes["eliminar"]}>
        <div> <strong>Materia:</strong> {name}<strong> Nota: </strong>{lastName}</div>  
         </div>
    );
}


export default NewChoose;