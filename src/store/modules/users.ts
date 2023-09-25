import { defineStore } from 'pinia';

export const UserStore = defineStore('users', {
  state: () => {
    return {
      token: '',
      userInfo: {},
    };
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
    getUserInfo: (state) => {
      return state.userInfo;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo) {
      this.token = userInfo.accessToken || '';
    },
    resetToken() {
      this.token = '';
      this.userInfo = {};
    },
  },
  persistence: {
    enable: true,
    option: [
      {
        key: 'SOTRE_USERS',
        states: ['token'],
      },
    ],
  },
});
