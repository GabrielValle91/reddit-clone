import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    editPost(event){
      event.preventDefault();
      this.model.save().then((resp) => {
        this.transitionToRoute('post', resp.id)
      });
    }
  }
});
