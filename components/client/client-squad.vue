<template lang="pug">
  .client-squad
    .control-bar
    .top
    .menu
      .squad-button LOGOUT
      .squad-button(@click="$action('battle/startSearch', 'ladder')") START LADDER GAME
      .squad-button(@click="$action('battle/startSearch', 'quick')") START QUICK GAME
      .squad-button(@click="$action('battle/startSearch', 'private')") START PRIVATE GAME
    .roster
      character-list(@ondblclick="$action('squad/tap', ...$event)")
    .account
    .squad
      squad-list(@ondblclick="$action('squad/tap', ...$event)")
</template>

<script>
  export default {
    onSocket: {
      'inpotr/is' () {
        console.log(this)
      }
    }
  }
</script>

<style lang="less">
  .client-squad {
    display: grid;
    display: -ms-grid;
    grid-template-columns: 1fr 200px;
    -ms-grid-columns: 1fr 200px;
    grid-template-rows: 10px 2fr 40px 1fr 1fr;
    -ms-grid-rows: 10px 2fr 40px 1fr 1fr;

    .control-bar {
      background-color: #1a99ea;
      grid-column: 1/ span 2;
      grid-row: 1 / span 1;
      -ms-grid-row: 1;
      -ms-grid-column: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column-span: 2;
    }
    .top {
      background-color: #94deea;
      grid-column: 1/ span 2;
      grid-row: 2 / span 1;
      -ms-grid-row: 2;
      -ms-grid-column: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column-span: 2;
    }
    .menu {
      display: flex;
      justify-content: space-around;
      background-color: #2dff81;
      grid-column: 1/ span 2;
      grid-row: 3 / span 1;
      -ms-grid-row: 3;
      -ms-grid-column: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column-span: 2;

      .squad-button {
        display: inline-block;
        background-color: #dbba6e;
        height: 24px;
        padding: 4px;
        margin: 4px 0;
        box-shadow: 0 0 0 4px red, 0 0 0 5px black;
      }
    }
    .roster {
      background-color: #ff5336;
      grid-column: 1/ span 1;
      grid-row: 4 / span 2;
      -ms-grid-row: 4;
      -ms-grid-column: 1;
      -ms-grid-row-span: 2;
      -ms-grid-column-span: 1;
    }
    .account {
      background-color: #e488ff;
      grid-column: 2/ span 1;
      grid-row: 4 / span 1;
      -ms-grid-row: 4;
      -ms-grid-column: 2;
      -ms-grid-row-span: 1;
      -ms-grid-column-span: 1;
    }
    .squad {
      background-color: #eab553;
      grid-column: 2/ span 1;
      grid-row: 5 / span 1;
      -ms-grid-row: 5;
      -ms-grid-column: 2;
      -ms-grid-row-span: 1;
      -ms-grid-column-span: 1;
    }
  }
</style>

