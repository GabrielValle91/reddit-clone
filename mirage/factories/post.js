import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(){
    return 'Post';
  },
  body(){
    return 'hello';
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
