import Vue from "vue";
import BasicVueChat from "./BasicChat.vue";

const Components = {
  BasicVueChat,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
