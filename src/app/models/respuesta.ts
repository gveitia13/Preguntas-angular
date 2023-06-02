export class Respuesta {
  nombre: string
  esCorrecta: number


  public constructor(nombre: string, esCorrecta: number) {
    this.nombre = nombre;
    this.esCorrecta = esCorrecta;
  }
}
