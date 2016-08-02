
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('work', function(table) {
    table.increments();
    table.string('title', 255);
    table.string('url');
    table.text('description');
    table.string('thumbnail');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('work');
};
