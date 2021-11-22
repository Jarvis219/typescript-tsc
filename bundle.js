"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let gui: Component = new UserCreat();
// gui.render();
// declare module 'Appuser' { }
///<reference path ="./IComponet.ts">
var AppUser;
(function (AppUser) {
    class Component {
        render() {
            return __awaiter(this, void 0, void 0, function* () {
                document.getElementById('app').innerHTML = yield this.template();
                yield this.afterRender();
            });
        }
    }
    AppUser.Component = Component;
})(AppUser || (AppUser = {}));
///<reference path ="../Component.ts">
///<reference path ="../../Model/UserModel.ts">
var AppUser;
(function (AppUser) {
    class UserCreat extends AppUser.Component {
        template() {
            return `
            <div class="w-72">
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
            document.querySelector('#form-creat').addEventListener('submit', (e) => {
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
                let user = new AppUser.User(0, name, email, password);
            });
        }
    }
    AppUser.UserCreat = UserCreat;
})(AppUser || (AppUser = {}));
///<reference path ="../Component.ts">
///<reference path ="../../Model/UserModel.ts">
var AppUser;
(function (AppUser) {
    class UserIndex extends AppUser.Component {
        constructor() {
            super();
            this.listUser = [];
            this.fakeData();
        }
        fakeData() {
            let user1 = new AppUser.User(1, "kai1", "kai1@gmail.com", "10000");
            let user2 = new AppUser.User(2, "kai2", "ka2i@gmail.com", "20000");
            let user3 = new AppUser.User(3, "kai3", "kai3@gmail.com", "30000");
            this.listUser.push(user1);
            this.listUser.push(user2);
            this.listUser.push(user3);
        }
        template() {
            return `
            <div>
            <div></div>
            <table >
                <thead>
                    <tr>
                        <th class="border border-indigo-600 px-3 py-1">id</th>
                        <th class="border border-indigo-600 px-3 py-1">name</th>
                        <th class="border border-indigo-600 px-3 py-1">email</th>
                        <th class="border border-indigo-600 px-3 py-1" colspan="2">order</th>
                    </tr>
                </thead>
                 <tbody id="data-user">
                
                </tbody>
            </table>
            </div>
            `;
        }
        afterRender() {
            let inforUser = this.listUser.map(element => {
                return `
    
                <tr>
                    <td  class="border border-indigo-600 px-3 py-1">${element.id}</td>
                    <td  class="border border-indigo-600 px-3 py-1">${element.name}</td>
                    <td class="border border-indigo-600 px-3 py-1"  >${element.email}</td>
                    <td class="border border-indigo-600 px-3 py-1" ><a href="#" class="shadow bg-green-400 px-2 py-1 rounded text-white hover:bg-blue-400 "><button>edit</button><a></td>
                    <td class="border border-indigo-600 px-3 py-1" ><a href="#" class="shadow bg-red-400 px-2 py-1 rounded text-white hover:bg-gray-400"><button>delete</button><a></td>
                </tr>
                `;
            }).join("");
            document.querySelector('#data-user').innerHTML = inforUser;
        }
    }
    AppUser.UserIndex = UserIndex;
})(AppUser || (AppUser = {}));
var AppUser;
(function (AppUser) {
    class User {
        constructor(_id, _name, _email, _password) {
            this._id = _id;
            this._name = _name;
            this._email = _email;
            this._password = _password;
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        set name(_name) {
            this._name = _name;
        }
        get email() {
            return this._email;
        }
        set email(_email) {
            this._email = _email;
        }
        get password() {
            return this._password;
        }
        set password(_password) {
            this._password = _password;
        }
    }
    AppUser.User = User;
})(AppUser || (AppUser = {}));
