/**
 * 接口地址
 * @type {string}
 */
const PATH = "/base/event/syncSend";
/**
 * 事件类型
 * @type {{VIEWS: string, CLICK: string, LIKE: string, ULIKE: string, FAV: string, UFAV: string, SHARE: string, USHARE: string, COMMENT: string, UCOMMENT: string, STAY: string, PV: string, JOIN: string, OTHER: string}}
 */
const EventType = {
    /* 浏览 */
    VIEWS: "views",
    /* 点击 */
    CLICK: "click",
    /* 点赞 */
    LIKE: "like",
    /* 取消点赞 */
    ULIKE: "ulike",
    /* 收藏 */
    FAV: "fav",
    /* 取消收藏 */
    UFAV: "ufav",
    /* 分享 */
    SHARE: "share",
    /* 取消分享 */
    USHARE: "ushare",
    /* 评论 */
    COMMENT: "comment",
    /* 取消评论 */
    UCOMMENT: "ucomment",
    /* 停留 */
    STAY: "stay",
    /* 浏览百分比 */
    PV: "pv",
    /* 参与 */
    JOIN: "join",
    /* 其他 */
    OTHER: "other"
};
/**
 * 题材类型
 * @type {{ARTICLE: string, POSTS: string, COMMENT: string, EXAM: string, ANSWER: string, VOTE: string, SECTION: string}}
 */
const SubjectType = {
    /* 图文 */
    ARTICLE: "00",
    /* 帖子 */
    POSTS: "01",
    /* 评论 */
    COMMENT: "02",
    /* 答题 */
    EXAM: "03",
    /* 问卷 */
    ANSWER: "04",
    /* 投票 */
    VOTE: "05",
    /* 栏目 */
    SECTION: "06"
};
/**
 * 插件构造方法
 * @param app
 * @param options
 * @constructor
 */
const Plugin = function (app, options) {
    this.app = app;
    this.options = options;
    this.eventType = EventType;
    this.subjectType = SubjectType;
};
/**
 * 浏览
 * @param data 用户数据
 */
Plugin.prototype.views = function (data) {
    process(this.options.request,EventType.VIEWS,data);
};
/**
 * 点击
 * @param data 用户数据
 */
Plugin.prototype.click = function (data) {
    process(this.options.request,EventType.CLICK,data);
};
/**
 * 点赞
 * @param data 用户数据
 */
Plugin.prototype.like = function (data) {
    process(this.options.request,EventType.LIKE,data);
};
/**
 * 取消点赞
 * @param data 用户数据
 */
Plugin.prototype.ulike = function (data) {
    process(this.options.request,EventType.ULIKE,data);
};
/**
 * 收藏
 * @param data 用户数据
 */
Plugin.prototype.favorite = function (data) {
    process(this.options.request,EventType.FAV,data);
};
/**
 * 取消收藏
 * @param data 用户数据
 */
Plugin.prototype.ufavorite = function (data) {
    process(this.options.request,EventType.UFAV,data);
};
/**
 * 分享
 * @param data 用户数据
 */
Plugin.prototype.share = function (data) {
    process(this.options.request,EventType.SHARE,data);
};
/**
 * 取消分享
 * @param data 用户数据
 */
Plugin.prototype.ushare = function (data) {
    process(this.options.request,EventType.USHARE,data);
};
/**
 * 评论
 * @param data 用户数据
 */
Plugin.prototype.comment = function (data) {
    process(this.options.request,EventType.COMMENT,data);
};
/**
 * 取消评论
 * @param data 用户数据
 */
Plugin.prototype.ucomment = function (data) {
    process(this.options.request,EventType.UCOMMENT,data);
};
/**
 * 停留
 * @param data 用户数据
 */
Plugin.prototype.stay = function (data) {
    process(this.options.request,EventType.STAY,data);
};
/**
 * 浏览百分比
 * @param data 用户数据
 */
Plugin.prototype.pv = function (data) {
    process(this.options.request,EventType.PV,data);
};
/**
 * 参与
 * @param data 用户数据
 */
Plugin.prototype.join = function (data) {
    process(this.options.request,EventType.JOIN,data);
};
/**
 * 其它
 * @param data 用户数据
 */
Plugin.prototype.other = function (data) {
    process(this.options.request,EventType.OTHER,data);
};
/**
 * 统一调后台
 * @param request 请求对象
 * @param type 事假类型
 * @param data 用户数据
 */
function process(request,type,data) {
    const pass = validate(data);
    if (!pass) return;
    let params = Object.assign({},data);
    params.event = type;
    (function (params) {
        return request({
            url: PATH,
            method: "post",
            data: params,
        });
    })(params)
        .then((res) => {
            console.log(res);
        })
        .catch((error)=>{
            console.error(error);
        });
}

function validate(data) {
    if(!data){
        console.error("参数不能为空！");
        return false;
    }
    if(data.constructor !== Object){
        console.error("参数必须是一个对象！");
        return false;
    }
    if(!data.msgId){
        console.error("msgId-事件id不能为空！");
        return false;
    }
    if(!data.ucType){
        console.error("ucType-主题类型不能为空！");
        return false;
    }
    return true;
}

/**
 * 导出插件
 */
export default {
    install: (app, options) => {
        const userEvents =  new Plugin(app,options);
        window._UserEvents = userEvents;
        app.config.globalProperties._$views = (data) => {
            userEvents.views(data);
        };
        app.config.globalProperties._$click = (data) => {
            userEvents.click(data);
        };
        app.config.globalProperties._$like = (data) => {
            userEvents.like(data);
        };
        app.config.globalProperties._$ulike = (data) => {
            userEvents.ulike(data);
        };
        app.config.globalProperties._$favorite = (data) => {
            userEvents.favorite(data);
        };
        app.config.globalProperties._$ufavorite = (data) => {
            userEvents.ufavorite(data);
        };
        app.config.globalProperties._$share = (data) => {
            userEvents.share(data);
        };
        app.config.globalProperties._$ushare = (data) => {
            userEvents.ushare(data);
        };
        app.config.globalProperties._$comment = (data) => {
            userEvents.comment(data);
        };
        app.config.globalProperties._$ucomment = (data) => {
            userEvents.ucomment(data);
        };
        app.config.globalProperties._$stay= (data) => {
            userEvents.stay(data);
        };
        app.config.globalProperties._$pv= (data) => {
            userEvents.pv(data);
        };
        app.config.globalProperties._$join= (data) => {
            userEvents.join(data);
        };
        app.config.globalProperties._$other = (data) => {
            userEvents.other(data);
        };
        app.config.globalProperties.$onUserEvent = (type,data) => {
            switch (type){
                case EventType.VIEWS:
                    userEvents.views(data);
                    break;
                case EventType.CLICK:
                    userEvents.click(data);
                    break;
                case EventType.LIKE:
                    userEvents.like(data);
                    break;
                case EventType.ULIKE:
                    userEvents.ulike(data);
                    break;
                case EventType.FAV:
                    userEvents.favorite(data);
                    break;
                case EventType.UFAV:
                    userEvents.ufavorite(data);
                    break;
                case EventType.SHARE:
                    userEvents.share(data);
                    break;
                case EventType.USHARE:
                    userEvents.ushare(data);
                    break;
                case EventType.COMMENT:
                    userEvents.comment(data);
                    break;
                case EventType.UCOMMENT:
                    userEvents.ucomment(data);
                    break;
                case EventType.STAY:
                    userEvents.stay(data);
                    break;
                case EventType.PV:
                    userEvents.pv(data);
                    break;
                case EventType.JOIN:
                    userEvents.join(data);
                    break;
                case EventType.OTHER:
                    userEvents.other(data);
            }
        };
    }
}
