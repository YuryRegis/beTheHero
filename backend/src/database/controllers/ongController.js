const connection = require('../conection');
const crypto = require('crypto');


module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, wpp, city, uf} = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            city,
            uf,
            email,
            wpp
        });

    return response.json({id});
    }

};  //module.exports