/*///<reference path ="../Component.ts"/>
///<reference path ="../../Model/UserModel.ts"/> */
import { Component } from "../Component.js";
import { User } from "../../Model/UserModel.js";
import { userAPI } from '../api/userAPI.js'
import c from "config";
export class UserIndex extends Component {
    // private listUser: User[];
    public constructor() {
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
    public template(): string {
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
    public async afterRender() {
        const response = await userAPI.all();
        const data = await response.json();
        // fetch('http://localhost:3002/users', {
        //     method: "GET"
        // }).then((response) =>
        //     response.json()
        // ).then(data => console.log(data))


        let inforUser: string = data.map((element: User) => {
            // console.log(element._name)
            return `
                <tr>
                    <td  class="border border-indigo-600 px-3 py-1">${element._id}</td>
                    <td  class="border border-indigo-600 px-3 py-1">${element._name}</td>
                    <td class="border border-indigo-600 px-3 py-1"  >${element._email}</td>
                    <td class="border border-indigo-600 px-3 py-1" ><a href="#/users/edit/${element.id}" data-navigo class="shadow bg-green-400 px-2 py-1 rounded text-white hover:bg-blue-400 "><button>edit</button><a></td>
                    <td class="border border-indigo-600 px-3 py-1" ><button data-id="${element.id}" onclick="confirm('you are want to delete?')" class="deleted shadow bg-red-400 px-2 py-1 rounded text-white hover:bg-gray-400">delete</button></td>
                </tr>
                `
        }).join("");
 
        document.querySelector('#data-user')!.innerHTML = inforUser;
        document.querySelectorAll('.deleted').forEach(ele=>{
           ele.addEventListener('click', (e)=>{
               e.preventDefault();
               let id:string = ele.dataset.id;
               deleted(id);
           })
            // ele.forEach(element => {
            //     console.log(element)
            // });
        })
      async  function deleted(id:string){
        await userAPI.delete(id).then(()=>{
            window.location.hash = '#/users/index';
        }).catch(err=>{
            console.log(err)
        })
        }
    }
}
