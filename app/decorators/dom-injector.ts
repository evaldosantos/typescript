export function domInjector(seletor: string) {
  return function(
    target: any,
    propertykey: string
  ) {
    let el: HTMLElement;
    const getter = function() {
      if (!el) {
        el = document.querySelector(seletor) as HTMLElement;
        console.log('buscando elemento do dom com o seletor', seletor, 'para injetar em', propertykey);
      }
      
      return el;
    }

    Object.defineProperty(target, propertykey, {
      get: getter
    });
  }
}