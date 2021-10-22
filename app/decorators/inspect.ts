
export function inspect(emSegundos: boolean = true) {
  return function (
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: []) {
      console.log(`Metodo ${propertykey}`);
      console.log(`Parametros ${JSON.stringify(args)}`);
      
      const retorno = metodoOriginal.apply(this, args);
      console.log(`˜Retorno ${JSON.stringify(retorno)}`)
      return retorno;
    }

    return descriptor;
  };
}