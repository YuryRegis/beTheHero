const connection = require('../conection');


module.exports = {

    async delete(request, response) {
        const { id } = request.params;
        const ongs_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ongs_id')
            .first();
        
        if (incident.ongs_id != ongs_id) {
            return response.status(401).json({
                error: 'Operation not permitted.'
            });  //json
        };  //if

        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    },  //delete


    async index(request, response) {
        //paginação com limite de 5 incidents
        const { page = 1} = request.query;
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ongs_id')
            .limit(5)
            .offset((page-1)*5)
            .select(['incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.wpp', 
            'ongs.uf', 
            'ongs.city'
        ]);
        
        //total de incidents informado no cabeçalho
        const [count] = await connection('incidents').count();
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },  //index


    async create(request, response) {
        const {title, description, value} = request.body;
        const ongs_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ongs_id
        });

        return response.json({ id });
    }  //create

};  //module.exports