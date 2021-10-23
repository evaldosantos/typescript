export function escape(
  target: any,
  propertykey: string,
  descriptor: PropertyDescriptor
):any {
  const metodoOriginal = descriptor.value;

  descriptor.value = function(...args: []) {
    let retorno = metodoOriginal.apply(this, args);

    if (typeof retorno === "string") {
      console.log('@escape em acao na classe', this.constructor.name, 'para o metodo', propertykey);
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return retorno;
  }

  return descriptor;
};