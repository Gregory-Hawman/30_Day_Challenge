
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id').primary();
            tbl.string('username', 255).notNullable().unique();
            tbl.string('email', 255).notNullable().unique();
            tbl.string('password', 255).notNullable();
        })

        .createTable('challenges', tbl => {
            tbl.increments('id').primary();
            tbl.string('title', 255).notNullable();
            tbl.float('duration').notNullable();
            tbl.date('start_date').notNullable();
            tbl.boolean('complete')
        })

        .createTable('complete', tbl => {
            tbl.increments(id).primary();
            
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
