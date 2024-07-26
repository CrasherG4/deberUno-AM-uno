
export const EjercicioDos = () => {
	// Array
	const nums: number[] = [5, 9, 1, 4];

	// funcion
	const sumaNumeros = (arrayNumeros: number[]): number => {
		let suma: number = 0;
		arrayNumeros.forEach(numero => {
			suma = suma + numero;
		});
		return suma;
	}

	return (
		<div>
			<h2>Suma de un Arreglo</h2>
			La suma del arreglo [{nums.join(' + ')}] es: {sumaNumeros(nums)}
		</div>
	)
}
