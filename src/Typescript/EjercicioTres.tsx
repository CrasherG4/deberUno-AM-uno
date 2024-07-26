
export const EjercicioTres = () => {
  // Array
  const arr: number[] = [5,10,15,20,25,30,35,40,45,50];

  // Función
  const dividir = (arrNums: number[]): number[] => {

    let arrDiv: number[] = arr.map((val: number) => {
      return val / 2
    });
    return arrDiv;
  }

  return (
    <div>
      <h2>Arreglo a la Mitad</h2>
      El arreglo original es:<br />[{arr.join(', ')}]<br />Y el arreglo modificado es:<br />[{dividir(arr).join(', ')}]
    </div>
  )
}
