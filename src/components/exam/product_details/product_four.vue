<template>
<div class="box" >
  <div class="list-view" ref="listView">
    <ul>
      <li v-for="group in singers" class="list-group" :key="group.id" ref="listGroup">
        <h2 class="list-group-title">{{ group.title }}</h2>
        <ul class="list-group-ul">
          <li v-for="item in group.items" class="list-group-item" :key="item.id">
            <img v-lazy="item.avatar" class="avatar">
            <span class="name">{{ item.name }}</span>
            <!-- <img v-lazy="item.avatar1" class="avatar">
            <span class="name">{{item.name1}}</span> -->
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li v-for="(item, index) in shortcutList"
        class="item"
        :data-index="index"
        :key="item.id"
        @touchstart="onShortcutStart"
        @touchmove.stop.prevent="onShortcutMove"
        :class="{'current': currentIndex === index}"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      singers: [
        {
          title: "有品推荐",
          items: [
            {
              name: "周杰伦",
              avatar:
                "http://p3.music.126.net/o-FjCrUlhyFC96xiVvJZ8g==/109951163111191410.jpg"
              // avatar1:
              // 'http://p4.music.126.net/H4Lh45kDfeb1Ke7THhNWjQ==/109951163109244011.jpg',
              // name1:'BIGBANG'
            },
            {
              name: "陈奕迅",
              avatar:
                "http://p4.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg"
            },
            {
              name: "薛之谦",
              avatar:
                "http://p4.music.126.net/ULlwJ2drOfYv-f6-_7jGGQ==/3250156379592966.jpg"
            },
            {
              name: "BIGBANG",
              avatar:
                "http://p4.music.126.net/H4Lh45kDfeb1Ke7THhNWjQ==/109951163109244011.jpg"
            },
            {
              name: "林俊杰",
              avatar:
                "http://p3.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg"
            },
            {
              name: "Maroon 5",
              avatar:
                "http://p3.music.126.net/h-ynyQrpyIvfJeW_DeaqHA==/1385384666932895.jpg"
            },
            {
              name: "王菲",
              avatar:
                "http://p4.music.126.net/GKhjgN1ltQYK3eYf9DdJwg==/18727981557622763.jpg"
            },
            {
              name: "李荣浩",
              avatar:
                "http://p4.music.126.net/tpH_HIHPDjRZep1pJC3q2w==/109951163062593811.jpg"
            },
            {
              name: "G.E.M.邓紫棋",
              avatar:
                "http://p4.music.126.net/r7uMnwjWpYMuQI_3ZTg56A==/18528969953189760.jpg"
            },
            {
              name: "张学友",
              avatar:
                "http://p3.music.126.net/1JG8Uwzb5XAJXaPUHR6RBw==/3238061747024716.jpg"
            }
          ]
        },
        {
          title: "家用电器",
          items: [
            {
              name: "Adele",
              avatar:
                "http://p4.music.126.net/6iuRSwLHGrjp3RJH86tfuQ==/3261151495434554.jpg"
            },
            {
              name: "Alan Walker",
              avatar:
                "http://p4.music.126.net/AsrGD4Sf0HWJ3mK-Y__PLw==/18981968742063387.jpg"
            },
            {
              name: "A-Lin",
              avatar:
                "http://p4.music.126.net/8iSt6sAD819N3juz-bu2vQ==/1379887107721899.jpg"
            },
            {
              name: "Ariana Grande",
              avatar:
                "http://p3.music.126.net/hqr3IB1u1UVJKkmxyIvsfA==/18701593278522174.jpg"
            },
            {
              name: "Aimer",
              avatar:
                "http://p3.music.126.net/7oFBcNAt1TXGzliOEc3p7g==/109951163112362346.jpg"
            },
            {
              name: "Avicii",
              avatar:
                "http://p3.music.126.net/h1wzVYeqth2d2ujPefocGQ==/18588343581208995.jpg"
            },
            {
              name: "Avril Lavigne",
              avatar:
                "http://p3.music.126.net/plN1CKu6igIh7fKrE8prWA==/18912699509666227.jpg"
            },
            {
              name: "Audio Machine",
              avatar:
                "http://p3.music.126.net/C4QsdeWjFi_ZrDAxUrF0MQ==/109951163187133601.jpg"
            }
          ]
        },
        {
          title: "智能家庭",
          items: [
            {
              name: "BIGBANG",
              avatar:
                "http://p4.music.126.net/H4Lh45kDfeb1Ke7THhNWjQ==/109951163109244011.jpg"
            },
            {
              name: "Bruno Mars",
              avatar:
                "http://p3.music.126.net/Zf1ESZwNs0MaiqLBAZ2PWQ==/18723583511044011.jpg"
            },
            {
              name: "Beyond",
              avatar:
                "http://p4.music.126.net/wuaNikQW2tPPFN0Oe5Rk9w==/80264348845616.jpg"
            },
            {
              name: "BTS (防弹少年团)",
              avatar:
                "http://p3.music.126.net/YHtpXGyzCv093GLtujr1cQ==/109951163064390008.jpg"
            }
          ]
        },
        {
          title: "手机电脑",
          items: [
            {
              name: "陈奕迅",
              avatar:
                "http://p4.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg"
            },
            {
              name: "Coldplay",
              avatar:
                "http://p4.music.126.net/eL-ft_ucUcby648eVnNewA==/19162288649094558.jpg"
            },
            {
              name: "陈粒",
              avatar:
                "http://p3.music.126.net/Q92YwJrk2f2tsK-7B0VIhQ==/6628955605123612.jpg"
            },
            {
              name: "陈小春",
              avatar:
                "http://p3.music.126.net/WA-eUvljuoahxnENnwqx1g==/172623325577460.jpg"
            },
            {
              name: "Charlie Puth",
              avatar:
                "http://p4.music.126.net/jKGxUbCYhy5aaKlvlrLM2w==/109951163040583012.jpg"
            },
            {
              name: "Carly Rae Jepsen",
              avatar:
                "http://p4.music.126.net/YzpodJ0TyW4ZC587Porasw==/240793046499895.jpg"
            },
            {
              name: "陈绮贞",
              avatar:
                "http://p4.music.126.net/bQEPHbVRPhyEnyYNe8zUqA==/153931627905286.jpg"
            },
            {
              name: "初音ミク",
              avatar:
                "http://p3.music.126.net/tMz0TTyDO4pJv3FMETjRGw==/109951163021786523.jpg"
            }
          ]
        },
        {
          title: "家具家装",
          items: [
            {
              name: "EXO",
              avatar:
                "http://p3.music.126.net/DZ7MuNXFMCcL_v8zyNeygw==/109951163175601143.jpg"
            },
            {
              name: "Eminem",
              avatar:
                "http://p4.music.126.net/4nBVmtjIoX5A-QZmLPaHdg==/109951163078482452.jpg"
            },
            {
              name: "Ed Sheeran",
              avatar:
                "http://p4.music.126.net/7QK82incNi3k9Gfpot_ykg==/18636722092498224.jpg"
            },
            {
              name: "Ellie Goulding",
              avatar:
                "http://p4.music.126.net/dh3LtjjtVjkd33Vb16nBXg==/19019352137349259.jpg"
            }
          ]
        },
        {
          title: "居家餐厨",
          items: [
            {
              name: "Fall Out Boy",
              avatar:
                "http://p4.music.126.net/lPgsuTf0ma76HpXK8ff0jw==/109951163054786259.jpg"
            },
            {
              name: "方大同",
              avatar:
                "http://p4.music.126.net/tTZcmIj2RV3ahQ-PvT-fEg==/109951163185998147.jpg"
            }
          ]
        },
        {
          title: "电视影音",
          items: [
            {
              name: "G.E.M.邓紫棋",
              avatar:
                "http://p4.music.126.net/r7uMnwjWpYMuQI_3ZTg56A==/18528969953189760.jpg"
            },
            {
              name: "G-Dragon",
              avatar:
                "http://p4.music.126.net/0jQmRXv0j-vVGQ5_Z4BliQ==/18725782534592929.jpg"
            },
            {
              name: "古巨基",
              avatar:
                "http://p4.music.126.net/dc7JiLEiMpM_MgX0kPPImQ==/5965950092650438.jpg"
            },
            {
              name: "GALA",
              avatar:
                "http://p3.music.126.net/P5yFw0wtRt0u1AbxnrZbpw==/109951162908083277.jpg"
            }
          ]
        },
        {
          title: "运动户外",
          items: [
            {
              name: "好妹妹",
              avatar:
                "http://p3.music.126.net/vSTfsnbL-kDJ5a7krBYWQg==/3362306558224859.jpg"
            },
            {
              name: "Hans Zimmer",
              avatar:
                "http://p3.music.126.net/rnc6wVyR_nM0bfxTBZVAuw==/157230162794113.jpg"
            }
          ]
        },
        {
          title: "日用文创",
          items: [
            {
              name: "IU",
              avatar:
                "http://p4.music.126.net/KHy2OOa2omoGt9G11rJtdg==/109951163024470480.jpg"
            },
            {
              id: 94779,
              name: "Imagine Dragons",
              avatar:
                "http://p4.music.126.net/t8pT1oUfIHYl3lfXnQA2Qw==/19213965695579757.jpg"
            }
          ]
        }
      ],
      scrollY: 0,
      currentIndex: 0,
      left_list: {},
      arr_key: [],
      all_list:[],
      arr_value:[],
      s:{}
    };
  },
  created() {
    this.axios.get("/classify").then(result => {
      var data = result.data.data;
      // console.log(data);
      var obj_list = {};
      var obj_name = [];
      var obj_all = {};

      for (var i = 0; i < data.length; i++) {
        if (obj_list[data[i].cname] == undefined) {
          obj_list[data[i].cname] = [];
        }
        obj_name = Object.keys(obj_list);
        for (var name of obj_name) {
          if (name == data[i].cname) {
            obj_list[name].push(data[i]);
            this.left_list = obj_list;
          }
        }
      }
      // console.log(this.left_list)

      for (var key in this.left_list) {
        this.arr_key.push(key);
        this.arr_value.push(this.left_list[key])
      }
      console.log(this.arr_value);
        for(var i=0;i<this.arr_value.length;i++){
          this.s.items = this.arr_value[i];
          // console.log(this.s);
        }
          console.log(this.s);
    });

    this.touch = {};
    // 初始化 better-scroll 必须要等 dom 加载完毕
    setTimeout(() => {
      this._initSrcoll();
      this._calculateHeight();
    }, 20);
  },
  methods: {
    _initSrcoll() {
      // console.log('didi')
      this.scroll = new BScroll(this.$refs.listView, {
        probeType: 3,
        click: true
      });
      this.scroll.on("scroll", pos => {
        this.scrollY = pos.y;
      });
    },
    onShortcutStart(e) {
      // 获取到绑定的 index
      let index = e.target.getAttribute("data-index");
      // 使用 better-scroll 的 scrollToElement 方法实现跳转
      this.scrollToElement(index);

      // 记录一下点击时候的 Y坐标 和 index
      let firstTouch = e.touches[0].pageY;
      this.touch.y1 = firstTouch;
      this.touch.anchorIndex = index;
    },
    onShortcutMove(e) {
      // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
      let touchMove = e.touches[0].pageY;
      this.touch.y2 = touchMove;
      // 这里的 16.7 是索引元素的高度
      let delta = Math.floor((this.touch.y2 - this.touch.y1) / 16.7);

      // 计算最后的位置
      // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下
      let index = this.touch.anchorIndex * 1 + delta;
      this.scrollToElement(index);
    },
    scrollToElement(index) {
      // 处理边界情况
      // 因为 index 通过滑动距离计算出来的
      // 所以向上滑超过索引框框的时候就会 < 0，向上就会超过最大值
      if (index < 0) {
        return;
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2;
      }
      // listHeight 是正的， 所以加个 -
      this.scrollY = -this.listHeight[index];
      this.scroll.scrollToElement(this.$refs.listGroup[index]);
    },
    _calculateHeight() {
      this.listHeight = [];
      const list = this.$refs.listGroup;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
  },
  watch: {
    scrollY(newVal) {
      // 向下滑动的时候 newVal 是一个负数，所以当 newVal > 0 时，currentIndex 直接为 0
      if (newVal > 0) {
        this.currentIndex = 0;
        return;
      }
      // 计算 currentIndex 的值
      for (let i = 0; i < this.listHeight.length - 1; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];

        if (-newVal >= height1 && -newVal < height2) {
          this.currentIndex = i;
          return;
        }
      }
      this.currentIndex = this.listHeight.length - 2;
    }
  },
  computed: {
    shortcutList() {
      return this.singers.map(group => {
        return group.title.substr(0, 4);
      });
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box {
  position: fixed;
  width: 100%;
  height: 100%;
  // margin: 0 auto;
}
.list-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  .list-group {
    padding-bottom: 30px;
    padding-left: 70px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
      color: #fff;
      background: #c9b9ab;
    }
    .list-group-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0 15px 0px;
      flex-direction: column;
      width: 30%;
      text-align: center;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 5%;
      }
      .name {
        // margin-left: 20px;
        color: black;
        font-size: 14px;
        // font-weight: 500;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    // right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 70px;
    padding: 245px 0;
    border-radius: 10px;
    text-align: center;
    background: #fff;
    font-family: Helvetica;
    border: 1px solid #ccc;
    .item {
      // width: 100px;
      padding: 25px 0px;
      line-height: 1;
      color: #927154;
      font-size: 15px;
      &.current {
        color: #000;
        // font-weight: bold;
      }
    }
  }
}
.list-group-ul {
  // margin: 0 auto;
  display: flex;
  flex-direction: row;
  // width: 50%;
  justify-content: space-between;
  flex-wrap: wrap;
  // padding-left: 50px;
}
</style>
