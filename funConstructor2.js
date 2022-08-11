class Student
{
    constructor(firstName, lastName, rollNumber, sex, dob)
    {
         this.firstName = firstName;
         this.lastName = lastName;
         this.rollNumber = rollNumber;
         this.sex = sex;
         this.dob = new Date(dob);
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    calculateAge()
    {
        return (2022 - this.dob.getFullYear());
    }
   
    isEligible()
    {
        if(student1.calculateAge() >= student2.calculateAge())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

const student1 = new Student('Sushma', 'Gowda', '7', 'Female', '24-01-1998');
const student2 = new Student('Abhishek', 'Gowda', '17', 'Male', '08-01-1998');

console.log(student2.getBirthYear());
console.log(student2.calculateAge());
console.log(student1.isEligible());


