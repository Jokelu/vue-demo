<template>
  <div class="tree">
    <div v-for="(item,index) in data">
      <div class="tree_title" @click.stop="toggleShow(index,item)" v-bind="{'open': showList[index]}">
        <div class="tree_icon" :style="titleStyle">
          <img v-bind="{'open':showList[index]}" :style="iconStyle(item)" src="./right.png" class="tree_icon_down">
        </div>
        <div class="tree_text">
          {{item.label}}
        </div>
      </div>
      <transition name="slide">
        <div v-show="showList[index]">
          <div v-if="canEachChildren(item)">
            <op-tree :data="item.children" :index="nextIndex"></op-tree>
          </div>
          <div v-if="canEachContext(item)">
            <div class="tree_context" :style="contextStyle" v-for="con in item.context">
              <span>{{con.checkContent}}</span>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const MARGINLEFT = 15
  const ICONLENGTH = 30
  export default {
    name: 'tree',
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      index: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        showList: [],
        nextIndex: 0
      }
    },
    created() {
      this.nextIndex = this.index + 1
    },
    computed: {
      titleStyle() {
        return 'margin-left:' + MARGINLEFT * this.index + 'px;'
      },
      contextStyle() {
        return 'margin-left:' + (MARGINLEFT * (this.index + 1) + ICONLENGTH) + 'px'
      }
    },
    methods: {
      toggleShow(index, data) {
        let status = !this.showList[index]
        this.showList.splice(index, 1, status)
      },
      canEachChildren(item) {
        return item.children && item.children.length
      },
      canEachContext(item) {
        return item.context && item.context.length
      },
      iconStyle(item) {
        if (item.children && item.children.length) {
          return 'visibility:visible;'
        }
        if (item.context && item.context.length) {
          return 'visibility:visible;'
        }
        return 'visibility: hidden;'
      }
    }
  }
</script>

<style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all .3s
  }
  .slide-enter, .slide-leave-to /* .slide-leave-active in below version 2.1.8 */ {
    transform: translateY(-10px);
  }
  .tree {
    background-color: #fff;
    color: #333;
    line-height: 30px;
    height: auto;
  }

  .tree_title {
    display: flex;
    align-items: center;
    background-color: #fff;
  }

  .tree_icon {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
  }

  .tree_icon_down {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
    text-indent: 2px;
    color: rgb(151, 168, 190);
    transition: all 0.3s linear;
  }

  .tree_icon_down[open=open] {
    transform: translate3d(-50%, -50%, 0) rotate(90deg);
  }

</style>
