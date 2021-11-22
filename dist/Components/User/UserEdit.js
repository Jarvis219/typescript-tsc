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
import { User } from "../../Model/UserModel.js";
import { userAPI } from "../api/userAPI.js";
export class UserEdit extends Component {
    constructor(_id) {
        super();
        this._id = _id;
        this._id = _id;
    }
    template() {
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
    afterRender() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this._id);
            if (typeof this._id != 'undefined') {
                const data = yield userAPI.find(this._id);
                const user = yield data.json();
                //   console.log(user);
                document.querySelector('#name').value = user._name;
                document.querySelector('#email').value = user._email;
                document.querySelector('#password').value = user._password;
                document.querySelector('#btn-user').addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
                    e.preventDefault();
                    const inPName = document.querySelector('#name');
                    const name = inPName.value;
                    const email = document.querySelector('#email').value;
                    const password = document.querySelector('#password').value;
                    // console.log(name, email, password);
                    let user = new User(Math.round(Math.random() * 700000), name, email, password);
                    if (typeof this._id != 'undefined') {
                        yield userAPI.update(this._id, user).then(() => {
                            window.location.hash = '#/users/index';
                        });
                    }
                }));
            }
        });
    }
}
