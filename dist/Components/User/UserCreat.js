// import { Navigo } from 'navigo';
/*///<reference path ="../Component.ts"/>
///<reference path ="../../Model/UserModel.ts"/> */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component } from "../Component.js";
import { User } from '../../Model/UserModel.js';
import { userAPI } from "../api/userAPI.js";
export class UserCreat extends Component {
    template() {
        return `
            <div class="">
            <div> 
            <a href="#/users/index" data-navigo class="bg-blue-300 px-2 py-1 rounded"><button>List</button></a>
            </div>
                 <form action="" method="POST" id="form-creat"> 
                        <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder=" Name">
                        
                        </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <a  class="btn btn-danger text-white">Cancel</a>
                </form>
              </div>
            `;
    }
    afterRender() {
        return __awaiter(this, void 0, void 0, function* () {
            document.querySelector('#form-creat').addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                // C1 use <HTMLInputElement>
                // const inPName = <HTMLInputElement>document.querySelector('#name');
                // const name: string = inPName.value;
                // C2 use as HTMLInputElement
                const inPName = document.querySelector('#name');
                const name = inPName.value;
                const email = document.querySelector('#email').value;
                const password = document.querySelector('#password').value;
                // console.log(name, email, password);
                let user = new User(Math.round(Math.random() * 700000), name, email, password);
                yield userAPI.creat(user).then(() => {
                    window.location.hash = '#/users/index';
                });
            }));
        });
    }
}
