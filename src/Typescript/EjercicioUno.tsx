
export const EjercicioUno = () => {
  // Constantes que contienen la medida de ambos lados
  const lado: number = 8;

  const calcularArea = (): number => {
    return (
      lado * lado
    )
  }

  return (
    <div>
      <h2>Ejercicio Uno</h2>
      <h3>El area de un cuadrado con una medida de {lado} es: {calcularArea()}</h3>
    </div>
  )
}
