import { EjercicioCinco } from "./Typescript/EjercicioCinco"
import { EjercicioCuatro } from "./Typescript/EjercicioCuatro"
import { EjercicioDos } from "./Typescript/EjercicioDos"
import { EjercicioTres } from "./Typescript/EjercicioTres"
import { EjercicioUno } from "./Typescript/EjercicioUno"


export const App = () => {
  return (
    <div className="mt-2 ms-4 text-center">
      <h1>EJERICIOS TYPESCRIPT - REACT</h1>
      <hr />
      {/* {<EjercicioUno/>} */}
      {/* {<EjercicioDos/>} */}
      {/* {<EjercicioTres/>} */}
      {/* {<EjercicioCuatro/>} */}
      {<EjercicioCinco/>}
    </div>
  )
}