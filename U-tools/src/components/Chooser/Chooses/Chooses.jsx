import NewChoose from '../NewChoose/NewChoose';
import styles from './Chooses.module.scss'

const Chooses =({ posts  =[]})=>{
    const mappedChoose = posts.map(choose => {
        return(
          <NewChoose 
          key={choose.name}
            name={choose.name}
            lastName={choose.lastname}
          />
        );
    
    })



    return(
        <div 
        id={styles["divElements"]} >
        {mappedChoose}
        </div>
    );
}


export default Chooses;