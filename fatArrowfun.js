class Student {
    constructor(name, age, phoneNumber, marks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge){
        return (minMarks) =>{
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(this.name + ' is ready for placements');
            }
            else{
                console.log(this.name + ' is not ready for placements');
            }
            
        }
    }
}
const student1 = new Student('sush', 23, 134656, 75);
const student2 = new Student('sushma', 17, 134656, 35);

student1.setPlacementAge(20)(50);
student2.setPlacementAge(17)(80);
