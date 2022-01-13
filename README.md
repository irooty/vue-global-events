# vue-global-events [![npm](https://img.shields.io/npm/v/vue-global-events.svg)](vue-global-events) ![npm](https://img.shields.io/npm/dt/vue-global-events.svg)

> global events plugin

This is the version for Vue 3

## Installation

```bash
npm install @irooty/vue-global-events --save
```

## Usage

```js
import request from './libs/request' // Please import your Request
import GlobalEvents from '@irooty/vue-global-events';
// register globally
Vue.use(GlobalEvents,{request: request});
```

After that you can register global events like this:

```javascript
let data = {}; // User params
_UserEvents.views(data);
// OR
this._$views(data);
// OR
this.$onUserEvent(_UserEvents.eventType.VIEWS,data);
```
## Methods
All Methods
```javascript
// 浏览
_UserEvents.views(data);
// 点赞
_UserEvents.like(data);
// 收藏
_UserEvents.favorite(data);
// 分享
_UserEvents.share(data);
// 评论
_UserEvents.review(data);
// 参与
_UserEvents.visit(data);
// 其它
_UserEvents.other(data);
/*  === OR ===  */
// 浏览
this._$views(data);
// 点赞
this._$like(data);
// 收藏
this._$favorite(data);
// 分享
this._$share(data);
// 评论
this._$review(data);
// 参与
this._$visit(data);
// 其它
this._$other(data);
/*  === OR ===  */
this.$onUserEvent(_UserEvents.eventType.VIEWS,data);
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
