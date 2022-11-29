import classes from './LoadingSpinner.module.scss';

import { useConfigContext } from '../../context/ConfigContext'; 

const LoadingSpinner = () => {
const { loading } = useConfigContext();

    return(
            loading &&
            <div className={classes["container"]}>
        <div className={classes["loadingio-spinner-pulse-s7rp0v67qjl"]}><div className={classes["ldio-tnw7jwed7sn"]}>
<div></div><div></div><div></div>
</div></div>
        </div>
    );
}

export default LoadingSpinner;