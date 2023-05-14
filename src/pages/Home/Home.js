import styles from './Home.module.css'
import { useState } from 'react'
export default function Home(params) {
    const [showInput,setShowInput] = useState(false)
    return <>
    <button onClick={()=>{setShowInput(!showInput)}} className={styles.button}>Show input</button>
    {showInput && <input type='text'/>}
    </>
};
