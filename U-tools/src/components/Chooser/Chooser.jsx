import styles from './Chooser.module.scss'
import classes from './Chooser.module.scss'
import logo from '../../assets/logo.png'
import mas from '../../assets/mas.png'
import React, {useState, useRef} from 'react'
import NewChoose from './NewChoose/NewChoose'
import NewChooseForm from './NewChooseform/NewChooseform'
import Chooses from './Chooses/Chooses'
import Header from "../Header/Header";



    const Chooser = () =>{

    const [posts, setPosts]=useState([]);
    
    const onAddChooseHandler = (name,lastName) =>{
      const _posts =[...posts, {
        name: name,
        lastname: lastName
      }];

      setPosts(_posts)
    }

    const onDeleteChooseHandler = (state) =>{
      if (state) {
        let deletes = [...posts];
        deletes.pop();
  
        setPosts(deletes)
      }
     
    }



    return( 
  
         <div id={styles["big-cont"]}>
       <Header />
        <div className={classes["container"]}>
            <h1 className={classes["title has-text-centered"]}>¿Qué materias cursaste?</h1>
            <br/>
            <br/>
            <div id={styles["jsonDiv"]}>
            </div>
            
            <NewChooseForm onDeleteChoose={onDeleteChooseHandler}
            onAddChoose={onAddChooseHandler}/>

            
            <Chooses posts={posts}/>
           
            <br/>
            
        </div>
      </div> 


   
   
    );
}

  
export default Chooser;
