// declare module 'Appuser' { }
/*///<reference path ="./IComponet.ts"/>*/
import { Icomponet } from "./IComponet.js";
export abstract class Component implements Icomponet {
    public async render() {
        document.getElementById('app')!.innerHTML = await this.template();
        await this.afterRender();
    }
    public abstract template(): string;
    public abstract afterRender(): void;
}


