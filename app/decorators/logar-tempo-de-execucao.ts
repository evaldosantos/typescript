export function logarTempoDeExecucao() {
  return function(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    return descriptor;
  }
}