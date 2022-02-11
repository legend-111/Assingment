var marvelavengers = [
    {

        name: "Thor",
        age: 1500,
        weapon: "Storm breaker",
        villan: "Hella",
        planet: "Asgard"
    },
    {
        name: "Ironman",
        age: 43,
        weapon: "Mark 85/Hulk buster",
        villan: "Ultron",
        planet: "Earth"
    },
    {
        name: "Captain America",
        age: 105,
        weapon: "Shield",
        villan: "Hydra",
        planet: "Earth"
    },
    {
        name: "Spiderman",
        age: 23,
        weapon: "Web ",
        villan: "Green Goblin",
        planet: "Earth"
    },
    {
        name: "Dr Strange",
        age: 36,
        weapon: "Magic",
        villan: "Dormamu",
        planet: "Earth"
    }
]
for (var i = 0; i < 5; i++) {
    console.log(marvelavengers[i].name);
    console.log(marvelavengers[i].age);
    console.log(marvelavengers[i].villan);
    console.log(marvelavengers[i].planet);
    console.log(marvelavengers[i].weapon);
    console.log("---------------------------------------------------------");

}

//by using forEach loop
console.log("---------------------using forEach loop-------------------");
marvelavengers.forEach(
    function (a, i) {

        console.log(a.name);
        console.log(a.age);
        console.log(a.villan);
        console.log(a.planet);
        console.log(a.weapon);
        console.log("---------------------------------------------------");
    }
)