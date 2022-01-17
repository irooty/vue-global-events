# vue-global-events [![npm](https://img.shields.io/npm/v/vue-global-events.svg)](vue-global-events) ![npm](https://img.shields.io/npm/dt/vue-global-events.svg)

> 全局用户事件插件

该插件使用 Vue 3 + 版本

[English](./README-en_US.md) | 简体中文

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
    ucType: _UserEvents.subjectType.POSTS, // 题材类型 “帖子”
    // ... 其它参数
}; // 用户参数
_UserEvents.views(data);
// 或
this._$views(data);
// 或
this.$onUserEvent(_UserEvents.eventType.VIEWS,data);
```

### 参数
用户参数 
```javascript
let data = {
    msgId: 'String', // 事件ID
    platAppId: 'String', // 企业ID、公众号ID
    platType: 'String', // 应用标识 ewc：企业微信，mp：公众号
    agentId: 'String', // 企业应用ID  企业微信有值，其它无
    userId: 'String', // 用户ID
    ucType: 'String', // 题材类型，请查看_UserEvents.subjectType
    commentId: 'int', // 评论ID
    secId: 'int', // 栏目ID
    readPercent: 'String', // 阅读进度
    staySecond: 'String', // 停留时间(s)
    createTime: 'Date' // 事件时间
}; 
```

### 属性

#### `eventType`
用户事件类型, 使用方式：`_UserEvents.eventType.VIEWS`.

- type: `Enum`
- value: `String`

##### 枚举列表

- `VIEWS`: 浏览
- `CLICK`: 点击
- `LIKE`: 点赞
- `ULIKE`: 取消点赞
- `FAV`: 收藏
- `UFAV`: 取消收藏
- `SHARE`: 分享
- `USHARE`: 取消分享
- `COMMENT`: 评论
- `UCOMMENT`: 取消评论
- `STAY`: 停留
- `PV`: 浏览百分比
- `JOIN`: 参与
- `OTHER`: 其它

#### `subjectType`
内容题材类型, 使用方式：`_UserEvents.subjectType.ARTICLE`.

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
// 点击
_UserEvents.click(data);
// 点赞
_UserEvents.like(data);
// 取消点赞
_UserEvents.ulike(data);
// 收藏
_UserEvents.favorite(data);
// 取消收藏
_UserEvents.ufavorite(data);
// 分享
_UserEvents.share(data);
// 取消分享
_UserEvents.ushare(data);
// 评论
_UserEvents.comment(data);
// 取消评论
_UserEvents.ucomment(data);
// 停留
_UserEvents.stay(data);
// 浏览百分比
_UserEvents.pv(data);
// 参与
_UserEvents.join(data);
// 其它
_UserEvents.other(data);
/*  === 或 ===  */
// 浏览
this._$views(data);
// 点击
this._$click(data);
// 点赞
this._$like(data);
// 取消点赞
this._$ulike(data);
// 收藏
this._$favorite(data);
// 取消收藏
this._$ufavorite(data);
// 分享
this._$share(data);
// 取消分享
this._$ushare(data);
// 评论
this._$comment(data);
// 取消评论
this._$ucomment(data);
// 停留
this._$stay(data);
// 浏览百分比
this._$pv(data);
// 参与
this._$join(data);
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
