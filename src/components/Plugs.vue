<template>
  <div class="container">
    <h3 class="title" :style="{color: colors[plugs.main_color] }">{{ plugs.title }}</h3>
    <div class="thumbs">
      <div class="thumb-container" v-for="item in items">
        <div class="thumb"
          :style="{
          'background-image': 'url(' + item.poster + ')',
          'border-bottom': '2px solid ' + colors[plugs.main_color]
          }"
          >
        </div>
        <div class="text">
          <p>{{ item.title | truncateOnWord(60) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Plugs',
  props: ['plugs'],
  data () {
    return {
      items: [],
      colors: {
        green: '#00b41a',
        blue: '#008dff'
      }
    }
  },
  methods: {
    processData (items) {
      items = items.slice(0, 3)
      return items
    }
  },
  mounted () {
    this.items = this.processData(this.plugs.items)
    // console.log('Plugs', JSON.parse(JSON.stringify(this.plugs)))
  },
  filters: {
    truncateOnWord (str, limit) {
      var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF'
      var reg = new RegExp('(?=[' + trimmable + '])')
      var words = str.split(reg)
      var count = 0
      var returnWords = words.filter(function (word) {
        count += word.length
        return count <= limit
      }).join('')
      if (str.length > limit) {
        returnWords = returnWords + ' ...'
      }
      return returnWords
    }
  }
}
</script>
<style scoped>


.title {
  max-width: 1000px;
  width: 90%;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 40px;
  word-wrap: break-word;
  margin: 0 auto;
}

.thumb-container {
  float: left;
  margin-right: 15px;
  width: 317px;
  background: #131313;

}
.thumbs {
  max-width: 1000px;
  margin: 0 auto;
}
.thumb {
  width: 317px;
  height: 144px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.text p {
  padding: 10px;
  font-size: 18px;
  height: 80px;
}

</style>

<style lang="scss" scoped>

.container {
  @include media('<=tablet') {
    .thumb-container {
      float: none;
      margin: 10px auto;
      max-width: 267px;
      width: 100%;
      .thumb {
        width: 100%;
      }
    }
  }
}
</style>
