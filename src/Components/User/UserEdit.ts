import { Component } from "../Component.js";
import { User } from "../../Model/UserModel.js";
import { userAPI } from "../api/userAPI.js";
export class UserEdit extends Component {
    public constructor(private _id:string|undefined){
        super();
        this._id=_id;
    }
    public template(): string {
        return `
        <div  class="bg-gray-100 mt-20">
        <hr>
                <div class="m-8 ">
                <h2 class="text-center">Edit user</h2>
                <form class="py-8" id="btn-user">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name..." required>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email..." required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password </label>
                        <input type="password" class="form-control" id="password" placeholder="Password..." required>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                    <button class="btn btn-danger">Cancel</button>
            </form>
            </div>
        </div>
        `;
    }
    public async afterRender() {
        console.log(this._id);
        if(typeof this._id != 'undefined'){
          const data = await  userAPI.find(this._id);
          const user = await data.json();
        //   console.log(user);
           (document.querySelector('#name') as HTMLInputElement).value = user._name;
          (document.querySelector('#email') as HTMLInputElement).value = user._email;
          (document.querySelector('#password') as HTMLInputElement).value = user._password;
          document.querySelector('#btn-user')!.addEventListener('submit',async (e)=>{
            e.preventDefault();
            const inPName = document.querySelector('#name') as HTMLInputElement;
             const name: string = inPName.value;
             const email = (document.querySelector('#email') as HTMLInputElement).value;
             const password = (document.querySelector('#password') as HTMLInputElement).value;
             // console.log(name, email, password);
 
             let user: User = new User( Math.round(Math.random() * 700000), name, email, password);
             if(typeof this._id != 'undefined'){
                await userAPI.update(this._id,user).then(()=>{
                    window.location.hash = '#/users/index';
                })
             }
         })
        }
       
    }
}