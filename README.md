# vue-global-events [![npm](https://img.shields.io/npm/v/vue-global-events.svg)](vue-global-events) ![npm](https://img.shields.io/npm/dt/vue-global-events.svg)

> global events plugin

This is the version for Vue 2

## Installation

```bash
npm install @irooty/vue-global-events --save
```

## Usage

```js
import GlobalEvents from '@irooty/vue-global-events';
// register globally
Vue.use('GlobalEvents', GlobalEvents);
```

After that you can register global events like this:

```javascript
_UserEvents.views();
// OR
this._$views();
// OR
this.$onUserEvent(_UserEvents.eventType.VIEWS);
```
## Methods
All Methods
```javascript
// 浏览
_UserEvents.views();
// 点赞
_UserEvents.like();
// 收藏
_UserEvents.favorite();
// 分享
_UserEvents.share();
// 评论
_UserEvents.review();
// 参与
_UserEvents.visit();
// 其它
_UserEvents.other();
/*  === OR ===  */
// 浏览
this._$views();
// 点赞
this._$like();
// 收藏
this._$favorite();
// 分享
this._$share();
// 评论
this._$review();
// 参与
this._$visit();
// 其它
this._$other();
/*  === OR ===  */
this.$onUserEvent(_UserEvents.eventType.VIEWS);
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# publish
npm publish --access public

# unpublish force
npm unpublish @irooty/vue-global-events --force
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
