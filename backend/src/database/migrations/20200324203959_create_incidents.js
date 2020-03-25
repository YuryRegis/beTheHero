
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    //relaciona tabelas
    table.string('ongs_id').notNullable();
    //chave estrangeira
    table.foreign('ongs_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return  knex.schema.dropTable('incidents');
};
