import users from './data/users';

// Filtrer chaque objet du tableau users pour ne garder que ceux dont accountChecked est à true
// Transformer cette liste en une seule chaine de charactère de 'prénom nom' séparé par des points virgules
// Exemple : "Cedrick Osinski;Laila McKenzie;Cecil Breitenberg;..."
// La variable users est importer depuis src/exercices/data/users.js (n'hésitez pas a y faire un tour si besoin de plus d'information)



export default function ex2() {

    const fUsers = Object.keys(users).map((key) =>  users[key]);
    console.log(fUsers)

    //filtrage verif que l'objet possède bien les propriétés nécéssaires à l'exco, avant de check accountChecked
    const userChecked = (fUsers.filter(o => o.hasOwnProperty("accountChecked") &&
        o.hasOwnProperty("firstName") &&
        o.hasOwnProperty("lastName"))).filter(o => o["accountChecked"])

    //concat
    let theUserNamesConcat = ""
    userChecked.forEach(o => {
            theUserNamesConcat =  [o["firstName"]+' '+o["lastName"],theUserNamesConcat].join(';')
    });
    console.log("Chaine concat users :" + theUserNamesConcat);


}




