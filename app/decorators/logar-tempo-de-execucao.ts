export function logarTempoDeExecucao() {
  return function(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = () => {
      const t1 = performance.now();
      // chamar o metodo original
      const retorno = metodoOriginal();
      const t2 = performance.now();

      console.log(`Tempo de execução do método ${propertykey}: ${(t2-t1)/1000}`);
    }
    return descriptor;
  }
}