export const EjercicioCuatro = () => {
  // Arreglo
  const arr = [
    {name: 'Viviana', edad: 19, calificacion: 10},
    {name: 'Gabriel', edad: 20, calificacion: 8},
    {name: 'Gerson', edad: 18, calificacion: 9}
  ];

  // Función
  const califProm = (): number => {
    // Contador que va sumando todas las notas que tiene el arreglo
    let cont = 0;
    arr.map((nota) => {
      cont = nota.calificacion + cont;
    });

    // Realizamos el promedio dependiendo de las notas que existen
    let prom: number = cont / arr.length;

    // retornamos el valor que tiene el promedio para imprimirlo en la pantalla
    return prom;
  }

  return (
    <div>
      <h2>Promedio de Notas</h2>
      Las calificaciones son: {arr.map((nota) => {return nota.calificacion}).join(', ')}
      <br />
      El promedio de las calificaciónes es: {califProm()}
    </div>
  );
};