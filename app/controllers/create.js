import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createPost(event){
      event.preventDefault();
      let post = this.store.createRecord('post', {
        title: this.title,
        body: this.body,
        upvotes: 1,
        downvotes: 0,
        category: 'general'
      });
      post.save().then((resp) => {
        this.transitionToRoute('post', resp.id);
      })
    }
  }
});
