import { useState } from "react"

export const EjercicioCinco = () => {

  const [num, setnum] = useState<number>(0);

  const numSumRest = (numero: number) => {setnum(num + numero);}

  return (
    <div>
      <h2>Suma y Resta de numeros en un Contador</h2>
      <h3>Valor: {num}</h3>
      <button className="btn btn-dark mx-lg-2" onClick={() => numSumRest(5)}>+5</button>
      <button className="btn btn-dark" onClick={() => numSumRest(-5)}>- 5</button>
    </div>
  )
}