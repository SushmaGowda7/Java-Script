class User
{
    static count = 0;
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++;
    }
    countNoOfUsers()
    {
        console.log('Number of users registerd= '+ User.count);
    }
    register()
    {
        console.log(this.username + ' is now registered');
    }
}
class Member extends User{
    constructor(username, email, password, memberPackage)
    {
        super(username, email, password);
        this.package = memberPackage;
        let todaysDate = new Date();
        const membershipactivetillYear = todaysDate.getFullYear();
        const membershipactivetillMonth = todaysDate.getMonth();
        const membershipactivetillDay = todaysDate.getDay();
        this.membershipactivetilldate = new Date(membershipactivetillYear, membershipactivetillMonth, membershipactivetillDay);
    }

static renewMembership() {
  const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
  const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
  const membershipactivetillDay = this.membershipactivetilldate.getDay();

  this.membershipactivetilldate = new Date(membershipactivetillYear + 1, membershipactivetillMonth + 1, membershipactivetillDay);
}

subscriptionActiveTill() {
  console.log(this.username + ' is scubscribed to ' + this.package + ' uptill ' + this.membershipactivetilldate);
}
    getPackage(){
        console.log(this.username+' is subscribed to the standard package');
    }
}
const Gowda = new Member('Abhishek', 'abhishek@gmail.com','1234','Standard');
const sush = new Member('Sushma', 'sushmagowda309@gmail.com','1234','yearly');

Gowda.register();
Gowda.getPackage();
sush.countNoOfUsers();
Gowda.subscriptionActiveTill();
sush.subscriptionActiveTill();
