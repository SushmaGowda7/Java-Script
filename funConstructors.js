function Student(firstName, lastName, rollNumber, sex, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.sex = sex;
    this.dob = new Date(dob);
}
Student.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`;
}
Student.prototype.getBirthYear = function()
{
    return this.dob.getFullYear();
}
Student.prototype.calculateAge = function()
{
    return (2022 - this.dob.getFullYear());
}
const student1 = new Student('Sushma', 'Gowda', '17', 'Female', '24-01-1998');
const student2 = new Student('Abhishek', 'Gowda', '7', 'Male', '08-01-1997');

if(student1.calculateAge() > student2.calculateAge())
{
    console.log(student1.getFullName());
}
else
{
    console.log(student2.getFullName());
}

//console.log(student1.calculateAge());