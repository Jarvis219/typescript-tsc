
/*///<reference path ="./Components/User/UserCreat.ts"/>
///<reference path ="./Components/Component.ts"/> */
import { UserCreat } from './Components/User/UserCreat.js';
import { UserIndex } from './Components/User/UserIndex.js';
import { Component } from './Components/Component.js';
import { UserEdit } from './Components/User/UserEdit.js';
// import { Route } from 'navigo';


 declare const window:any; 

 type Route = {
    name: string;
    path: string | RegExp;
  };
 type Match = {
    url: string;
    queryString: string;
    hashString: string;
    route: Route;
    data: { [key: string]: string } | null;
    params: { [key: string]: string } | null;
  };

const routes = () => {
    window.router
        .on('/users/index',async () => {
            const gui: Component = new UserIndex();
           await gui.render();
           gui.afterRender();
        })
        .on('/users/creat', () => {
            const gui: Component = new UserCreat();
            gui.render();
        })
        .on('/users/edit/:id',async (params: Match)=>{
        //    console.log(params)
            const id = params?.data?.id;
            // console.log(id);
            const gui:Component = new UserEdit(id);
          await  gui.render();
            
        })
        .resolve();
}   

routes();





