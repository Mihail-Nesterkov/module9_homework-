const jsonString = `
{
    "list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}`;
const data = JSON.parse(jsonString);
const list = data.list;

for (const listElement of list) {
    const res = {
            name: listElement.name,
            age: +listElement.age,
            prof: listElement.prof
    }
    console.log('результат', res);
}



