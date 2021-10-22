export function logarTempoDeExecucao(emSegundos: boolean = true) {
  return function (
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: []) {
      let unidade = 'milisegundos';
      let divisor = 1;
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();

      if (emSegundos) {
        unidade = 'segundos';
        divisor = 1000;
      }
      console.log(`${propertykey}, tempo de execucao: ${(t2 - t1)/divisor} ${unidade}`);

      retorno;
    }

    return descriptor;
  };
  return function(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const t1 = performance.now();
      // chamar o metodo original
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();

      console.log(`Tempo de execução do método ${propertykey}: ${(t2-t1)/1000}`);

    }
    return descriptor;
  }
}