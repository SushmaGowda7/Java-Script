class User
{
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    register()
    {
        console.log(this.username + ' is now registered');
    }
}
let sush = new User('Sushma', 'sushmagowda309@gmail.com', '789654');
sush.register();
class Member extends User{
    constructor(username, email, password, memberPackage)
    {
        super(username, email, password);
        this.package = memberPackage;
    }
    getPackage(){
        console.log(this.username+' is subscribed to the standard package');
    }
}
let Gowda = new Member('Abhishek', 'abhishek@gmail.com','1234','Standard');
Gowda.register();
Gowda.getPackage();