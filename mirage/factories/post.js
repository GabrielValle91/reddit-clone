import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return `Post ${i + 1}`;
  },
  body(){
    return faker.lorem.sentence();
  },
  upvotes(i){
    return faker.list.random(1, 3, 4, 7, 8, 12, 19, 22, 25, 75, 1022)(i);
  },
  downvotes(i){
    return faker.list.random(2, 5, 7, 9, 11, 14, 19, 26, 32, 64, 746)(i);
  },
  category(){
    return 'Emberjs';
  }
});
