# vue-global-events [![npm](https://img.shields.io/npm/v/vue-global-events.svg)](vue-global-events) ![npm](https://img.shields.io/npm/dt/vue-global-events.svg)

> 全局用户插件

该插件使用 Vue 3 + 版本

[English](./README.md) | 简体中文

## 安装插件

```bash
npm install @irooty/vue-global-events --save
```

## 使用插件

```js
import request from './libs/request' // 请引入你的 Request
import GlobalEvents from '@irooty/vue-global-events';
// 全局注册
Vue.use(GlobalEvents,{request: request});
```

插件使用方法:

```javascript
let data = {
    subjectType: _UserEvents.subjectType.POSTS, // 题材类型 “帖子”
    // ... 其它参数
}; // 用户参数
_UserEvents.views(data);
// 或
this._$views(data);
// 或
this.$onUserEvent(_UserEvents.eventType.VIEWS,data);
```
### 属性

#### `eventType`
用户事件类型, 使用方法`_UserEvents.eventType.VIEWS`.

- type: `Enum`
- value: `String`

##### 枚举列表

- `VIEWS`: 浏览
- `LIKE`: 点赞
- `FAVORITE`: 收藏
- `SHARE`: 分享
- `REVIEW`: 评论
- `VISIT`: 参与
- `OTHER`: 其它

#### `subjectType`
内容题材类型, ex.`_UserEvents.subjectType.ARTICLE`.

- type: `Enum`
- value: `String`

##### 枚举列表

- `ARTICLE`: 图文
- `POSTS`: 帖子
- `COMMENT`: 评论
- `EXAM`: 答题
- `ANSWER`: 问卷
- `VOTE`: 投票
- `SECTION`: 栏目

## 方法
所有方法列表
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
/*  === 或 ===  */
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
/*  === 或 ===  */
this.$onUserEvent(_UserEvents.eventType.VIEWS,data);
```

## 开发步骤

``` bash
# 安装依赖
npm install

# 热部署 localhost:8080
npm run dev

# 打包
npm run build

# 打包成插件
npm run build:lib

# 发布插件
npm publish --access public

# 强制移除发布
npm unpublish @irooty/vue-global-events --force
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
