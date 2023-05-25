// 1) Faire la moyenne d'age des employés ci-dessous (utiliser les méthodes de Array)
// 2) Faire un console.log du résultat

const data = {"employees":[    
    {"name":"Ram", "team": "team1", "email":"ram@gmail.com", "age":23, "nblinecode":100 },
    {"name":"Shyam","team": "team1", "email":"shyam23@gmail.com", "age":28, "nblinecode":400},
    {"name":"John","team": "team2", "email":"john@gmail.com", "age":33, "nblinecode":200},
    {"name":"Bob","team": "team2", "email":"bob32@gmail.com", "age":41, "nblinecode":1000},
    {"name":"James","team": "team1", "email":"james.bond@gmail.com", "age":25, "nblinecode":330},
    {"name":"Bart", "team": "team1","email":"bart@gmail.com", "age":12, "nblinecode":4000},
]}

export default function ex1() {
    console.log("Par team : moyenne age & moyenne nb lignes de code ")
    console.log(getMean(data["employees"], ["team"], ["age", "nblinecode"]));
    console.log("Global : moyenne age & moyenne nb lignes de code ")
    console.log(getMean(data["employees"], [], ["age", "nblinecode"]));
}

function getMean(array, keyGroups, keyMean) {
    let groups = {},
        result = [];
    array.forEach(o => {
        let key = keyGroups.map(k => o[k]).join('|'),
            group = groups[key];
        if (!group) {
            groups[key] = {
                count: 0, usu: {} };
            group = groups[key];
            keyMean.forEach(k => group[k] = 0);
            keyGroups.forEach(k => group.usu[k] = o[k]);
            result.push(group.usu);
        }
        groups[key].count++;
        keyMean.forEach(k => group.usu[k] = (group[k] += o[k]) / group.count);
    })
    return result;
}

