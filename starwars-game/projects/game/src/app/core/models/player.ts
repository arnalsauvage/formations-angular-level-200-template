// On déclare une interface pour les joueurs
interface PlayerInterface  {
    name :string;
    id :number;
}

// On déclare un objet Player qui implémente l'interface PlayerInterface
class Player implements PlayerInterface {
    name :string;
    id :number;
    constructor(name :string, id :number) {
        this.name = name;
        this.id = id;
    }
}

// On instancie un objet Player
const player1 = new Player("Luke Skywalker", 1);

// On crée un objet qui respecte une interface proche de playerInterface
let player3 = {
    name : "Luke Skywalker",
    id : 1,
    quelquechose : "toto"
};

// On crée un objet qui respecte l'interface playerInterface
let player2: PlayerInterface = {
    name : "Luke Skywalker",
    id : 1
};

// On peut quand même affecter player3 à player2
player2 = player3;

// On crée une fonction qui met à jour le nom d'un joueur
const updateName = (player :PlayerInterface, newName: string) => {
    player.name = newName;
}

// On crée une fonction qui met à jour le nom d'un joueur en déclarant dynamiquement le type
const updateNameTypeDynamique = (player :{name:string, id:number}, newName: string) => {
    player.name = newName;
}

// On vérifie que tout ça fonctionne

updateName(player1, "Darth Vader");
updateName(player2, "Darth Vader");
updateName(player3, "Darth Vader");
updateName({name : "Darth Vader", id : 1}, "Darth Vader");

updateNameTypeDynamique(player1, "Yoda");
updateNameTypeDynamique(player2, "Yoda");
updateNameTypeDynamique(player3, "Yoda");
updateNameTypeDynamique({name : "Yoda", id : 1}, "Yoda");

// Ici on crée un objet anonyme qui respecte le contrat de Player
// Il ne passe pas par le constructeur de l'objet Player !

const monPlayerYolo: Player ={
    name : "Yolo",
    id : 2
};
