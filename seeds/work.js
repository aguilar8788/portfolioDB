
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE work RESTART IDENTITY CASCADE').then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('work').insert({title: "BeforeYouMove", url: "https://beforeyoumove-da5b5.firebaseapp.com/", description: "Before You Move is a web app that allows users to search for neighborhoods in larger cities in the US, and get useful information such as nearyby schools, grocery stores, restaurants, and crime rates for the specific neighborhood.", thumbnail: "https://scontent-sjc2-1.xx.fbcdn.net/t31.0-8/13919995_1084184494982206_3152651749240178408_o.jpg"})
      ]);
    });
};
