
export class User {
    private readonly _id: number;
    private _name: string;
    private _email: string;
    private _password: string;

    public constructor(_id: number, _name: string, _email: string, _password: string) {
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._password = _password;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }
    get email(): string {
        return this._email;
    }
    set email(_email: string) {
        this._email = _email;
    }
    get password(): string {
        return this._password;
    }
    set password(_password: string) {
        this._password = _password;
    }

}
