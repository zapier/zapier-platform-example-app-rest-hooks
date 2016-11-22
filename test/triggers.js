require('should');

const zapier = require('zapier-platform-core');

const appTester = zapier.createAppTester(require('../index'));

describe('triggers', () => {

  describe('new recipe trigger', () => {
    it('should load recipe from fake hook', (done) => {
      const bundle = {
        inputData: {
          style: 'mediterranean'
        },
        meta: {
          frontend: false
        },
        cleanedRequest: {
          id: 1,
          name: 'name 1',
          directions: 'directions 1'
        }
      };

      appTester('triggers.recipe', bundle)
        .then(results => {
          results.length.should.eql(1);

          const firstRecipe = results[0];
          firstRecipe.name.should.eql('name 1');
          firstRecipe.directions.should.eql('directions 1');

          done();
        })
        .catch(done);
    });
  });

});
