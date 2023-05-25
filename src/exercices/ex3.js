
async function main() {


    //promise.all() fetch await

    //1 A partir des liens ci-dessous, faire un algo qui récupère via la fonction "fetch" la liste des utilisateurs et la liste des articles
    const responseU = await fetch("https://jsonplaceholder.typicode.com/users");
    const  users = await responseU.json();
    const  responseP = await fetch("https://jsonplaceholder.typicode.com/posts");
    const  posts = await responseP.json();

    //2 Filtrer les tâches et ne garder que les id pairs
    const evenPosts = posts.filter(o => (o.id !== undefined && o.id % 2 === 0)) //potentiellement source d'erreurs silencieuses

    //3 Transformer cette liste de taches pour ne renvoyés que le titre (.title) ainsi que le nom d'utilisateur (.username) de chaque todo
    let finalResultBis = []
    evenPosts.forEach(postHere => {
        finalResultBis.push({
            title: postHere["title"],
            username: users.find((userHere) => userHere["id"] === postHere["userId"])
        })
    });

    //4 Faire un console.log du résultat
    console.log(finalResultBis)
}

export default function ex3() {
    main()
}


