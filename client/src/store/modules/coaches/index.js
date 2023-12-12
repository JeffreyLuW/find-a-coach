import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  // vux store 的结构
  // import { createStore } from 'vuex';
  // import coachesModule from './modules/coaches/index.js';
  // const store = createStore({
  //   modules: {
  //     coaches: coachesModule
  //   }
  // });

  // export default {
  //    namespaced: true,
  //    state(){
  //      return { 里面存放着数据 }
  //    },
  //    mutations,
  //    actions,
  //    getters
  // }

  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
