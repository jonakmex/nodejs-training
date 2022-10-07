export class Greet {
    sayHello(name:string) {
        return `Hello ${this.processName(name)}`;
      }

    private processName(name:string){
        return name.length > 0 ? name : 'Empty';
    }
}