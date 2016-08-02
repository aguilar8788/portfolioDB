
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('blog', function(table) {
    table.increments();
    table.string('title');
    table.text('post');
    table.text('thumbnail');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blog');
};
