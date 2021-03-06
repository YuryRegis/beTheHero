
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //2 caracteres
      table.string('email').notNullable();
      table.string('wpp').notNullable();      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
