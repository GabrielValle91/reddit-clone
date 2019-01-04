import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return `Post ${i + 1}`;
  },
  body(){
    return faker.lorem.sentence();
  },
  upvotes(){
    return 3;
  },
  downvotes(){
    return 1;
  },
  category(){
    return 'Emberjs';
  }
});
