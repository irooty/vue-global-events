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
let data = {
    subjectType: _UserEvents.subjectType.POSTS, // Subject Type
    // ... other param
}; // User params
_UserEvents.views(data);
// OR
this._$views(data);
// OR
this.$onUserEvent(_UserEvents.eventType.VIEWS,data);
```
### Props

#### `eventType`
User Event Type, ex.`_UserEvents.eventType.VIEWS`.

- type: `Enum`
- value: `String`

##### enums

- `VIEWS`: 浏览
- `LIKE`: 点赞
- `FAVORITE`: 收藏
- `SHARE`: 分享
- `REVIEW`: 评论
- `VISIT`: 参与
- `OTHER`: 其它

#### `subjectType`
Content Subject Type, ex.`_UserEvents.subjectType.ARTICLE`.

- type: `Enum`
- value: `String`

##### enums

- `ARTICLE`: 图文
- `POSTS`: 帖子
- `COMMENT`: 评论
- `EXAM`: 答题
- `ANSWER`: 问卷
- `VOTE`: 投票
- `SECTION`: 栏目

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
