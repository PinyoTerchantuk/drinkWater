import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'





type Inputs = {
  weight:number;
}

function App() {
  

  const { register, handleSubmit } = useForm<Inputs>();
  const [bmi, setBMI] = useState<number>();

   
 
  const onSubmit = (data:Inputs) => {
    
    const weightNum = data.weight;
  

    const  waterIntake = weightNum * 2.2 * 30 / 1000;
    setBMI( waterIntake)//SetState!!!!!!!!!!
    

  }

  return (
    <>
      <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
      <h1>X มล.</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">น้ำหนัก (กก.)</label>
      <input {...register('weight', { required: true })} type="text" id="username"  placeholder="กรอกน้ำหนัก (kg)" />
      
      <button type="submit">Submit</button>
    </form>
    <h1>{bmi}</h1>
    </>
  )
}

export default App
