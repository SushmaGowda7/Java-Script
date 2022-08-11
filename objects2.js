const todos = [
    {
        id: 1,
        text:'Take out to trash',
        isCompleted: true
    },
    {
        id: 2,
        text:'Meeting with the boss',
        isCompleted: true
    },
    {
        id: 3,
        text:'dentist appointment',
        isCompleted: false
    }
];
for(let i=0; i<todos.length; i++)
{
    console.log(todos[i].id);
}