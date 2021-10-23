export function domInjector(seletor: string) {
  return function(
    target: any,
    propertykey: string
  ) {
    const getter = function() {
      const el = document.querySelector(seletor);
      console.log('buscando elemento do dom com o seletor', seletor, 'para injetar em', propertykey);
      return el;
    }

    Object.defineProperty(target, propertykey, {
      get: getter
    });
  }
}