var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*///<reference path ="./Components/User/UserCreat.ts"/>
///<reference path ="./Components/Component.ts"/> */
import { UserCreat } from './Components/User/UserCreat.js';
import { UserIndex } from './Components/User/UserIndex.js';
import { UserEdit } from './Components/User/UserEdit.js';
const routes = () => {
    window.router
        .on('/users/index', () => __awaiter(void 0, void 0, void 0, function* () {
        const gui = new UserIndex();
        yield gui.render();
        gui.afterRender();
    }))
        .on('/users/creat', () => {
        const gui = new UserCreat();
        gui.render();
    })
        .on('/users/edit/:id', (params) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        //    console.log(params)
        const id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
        // console.log(id);
        const gui = new UserEdit(id);
        yield gui.render();
    }))
        .resolve();
};
routes();
