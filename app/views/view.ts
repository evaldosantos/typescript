export abstract class View<T> {
  protected el: HTMLElement;
  private escapar: boolean = false;

  constructor(seletor: string, escapar?: boolean) {
    this.el = document.querySelector(seletor) as HTMLElement;
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if(this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    this.el.innerHTML = template;
  }
}