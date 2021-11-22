export class User {
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
