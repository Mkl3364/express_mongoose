const Piscine = require("../Model/Piscine");

const pisineController = {
    // Récupère tous les restaurants
    create : async(request, response) => {
        try {
            var piscine = new Piscine()
            piscine.id = request.body.id
            piscine.nom = request.body.nom;
            piscine.adresse = request.body.adresse;
            piscine.tel = request.body.tel;
            piscine.save(function(err) {
                if(err) {
                    response.send(err);
                }
                response.send({message : 'Bravo la piscine est maintenant stocké en base de données'})
            })
        } catch (error) {
            console.error(error);
            response.status(500).send(error.message);
        }
    },
    findAll: async (request, response) => {
        try {
            const allPisicines = await Piscine.find()
            response.json(allPisicines)
            //response.send({message: 'Bravo voici les résulats'})
        } catch (error) {
            console.error(error)
        }
    },
    findById: async (request, response) => {
        try {
            const targetPoolName = request.params.nom;
            const targetPool = await Piscine.findOne({
                nom: targetPoolName
            })
            response.json(targetPool)
        } catch(error) {
            console.error(error)
        }
    },
    update: async (request, response) => {
        try {

            // trouver la piscine à modifier
            const targetName = request.params.nom;
            const targetPool = await Piscine.findOne({
                nom: targetName
            })

            // Modifier les informations de la piscine
            Object.assign(targetPool, request.body)
            const data = await targetPool.save()
            response.send({message : 'pool updated'})

        } catch (error) {
            console.error(error)
        }
    },
    delete: async(request, response) => {
        try {
            const targetPoolName = request.params.nom;
            const targetPool = await Piscine.deleteOne({
                nom: targetPoolName
            })
            response.json(targetPool)
        }
        catch(error) {
            console.error(error)
        }
    }
};

module.exports = pisineController;