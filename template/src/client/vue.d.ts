// allow importing vue files into ts files
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
