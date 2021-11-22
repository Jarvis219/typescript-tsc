var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*///<reference path ="../Component.ts"/>
///<reference path ="../../Model/UserModel.ts"/> */
import { Component } from "../Component.js";
import { userAPI } from '../api/userAPI.js';
export class UserIndex extends Component {
    // private listUser: User[];
    constructor() {
        super();
        // this.listUser = [];
        // this.fakeData();
    }
    // private fakeData(): void {
    //     let user1: User = new User(1, "kai1", "kai1@gmail.com", "10000");
    //     let user2: User = new User(2, "kai2", "ka2i@gmail.com", "20000");
    //     let user3: User = new User(3, "kai3", "kai3@gmail.com", "30000");
    //     this.listUser.push(user1);
    //     this.listUser.push(user2);
    //     this.listUser.push(user3);
    // }
    template() {
        return `
        <div class="flex justify-center mb-2">
                <a href="#/users/creat" data-navigo class="bg-blue-300 px-2 py-1 rounded"><button>creat</button></a>
                </div>
            <div class="flex justify-center">
                
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
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userAPI.all();
            const data = yield response.json();
            // fetch('http://localhost:3002/users', {
            //     method: "GET"
            // }).then((response) =>
            //     response.json()
            // ).then(data => console.log(data))
            let inforUser = data.map((element) => {
                // console.log(element._name)
                return `
                <tr>
                    <td  class="border border-indigo-600 px-3 py-1">${element._id}</td>
                    <td  class="border border-indigo-600 px-3 py-1">${element._name}</td>
                    <td class="border border-indigo-600 px-3 py-1"  >${element._email}</td>
                    <td class="border border-indigo-600 px-3 py-1" ><a href="#/users/edit/${element.id}" data-navigo class="shadow bg-green-400 px-2 py-1 rounded text-white hover:bg-blue-400 "><button>edit</button><a></td>
                    <td class="border border-indigo-600 px-3 py-1" ><button data-id="${element.id}" onclick="confirm('you are want to delete?')" class="deleted shadow bg-red-400 px-2 py-1 rounded text-white hover:bg-gray-400">delete</button></td>
                </tr>
                `;
            }).join("");
            document.querySelector('#data-user').innerHTML = inforUser;
            document.querySelectorAll('.deleted').forEach(ele => {
                ele.addEventListener('click', (e) => {
                    e.preventDefault();
                    let id = ele.dataset.id;
                    deleted(id);
                });
                // ele.forEach(element => {
                //     console.log(element)
                // });
            });
            function deleted(id) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield userAPI.delete(id).then(() => {
                        window.location.hash = '#/users/index';
                    }).catch(err => {
                        console.log(err);
                    });
                });
            }
        });
    }
}
