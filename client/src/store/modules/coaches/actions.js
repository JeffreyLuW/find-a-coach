export default {
    registerCoach(context, data) {
        const coachData = {
          id: context.rootGetters.userId,
          firstName: data.first,
          lastName: data.last,
          description: data.description,
          areas: data.areas
        };
    
        context.commit('registerCoach', coachData);
      }
};