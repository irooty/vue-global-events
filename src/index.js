/**
 * 接口地址
 * @type {string}
 */
const PATH = "/base/file/upload/news";
/**
 * 事假类型
 * @type {{VIEWS: string, LIKE: string, FAVORITE: string, SHARE: string, REVIEW: string, VISIT: string, OTHER: string}}
 */
const EventType = {
    /* 浏览 */
    VIEWS: "100",
    /* 点赞 */
    LIKE: "101",
    /* 收藏 */
    FAVORITE: "102",
    /* 分享 */
    SHARE: "103",
    /* 评论 */
    REVIEW: "104",
    /* 参与 */
    VISIT: "105",
    /* 其它 */
    OTHER: "106"
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
};
/**
 * 浏览
 */
Plugin.prototype.views = function () {
    process(this.options.request,EventType.VIEWS);
};
/**
 * 点赞
 */
Plugin.prototype.like = function () {
    process(this.options.request,EventType.LIKE);
};
/**
 * 收藏
 */
Plugin.prototype.favorite = function () {
    process(this.options.request,EventType.FAVORITE);
};
/**
 * 分享
 */
Plugin.prototype.share = function () {
    process(this.options.request,EventType.SHARE);
};
/**
 * 评论
 */
Plugin.prototype.review = function () {
    process(this.options.request,EventType.REVIEW);
};
/**
 * 参与
 */
Plugin.prototype.visit = function () {
    process(this.options.request,EventType.VISIT);
};
/**
 * 其它
 */
Plugin.prototype.other = function () {
    process(this.options.request,EventType.OTHER);
};
/**
 * 统一调后台
 * @param request 请求对象
 * @param type 事假类型
 */
function process(request,type) {
    let params = {};
    (function (params) {
        return request({
            url: PATH,
            method: "get",
            params: params,
        });
    })(params)
        .then((res) => {
            console.log(res);
        })
        .catch((error)=>{
            console.error(error);
        });
}

/**
 * 导出插件
 */
export default {
    install: (app, options) => {
        const userEvents =  new Plugin(app,options);
        window._UserEvents = userEvents;
        app.config.globalProperties._$views = () => {
            userEvents.views();
        };
        app.config.globalProperties._$like = () => {
            userEvents.like();
        };
        app.config.globalProperties._$favorite = () => {
            userEvents.favorite();
        };
        app.config.globalProperties._$share = () => {
            userEvents.share();
        };
        app.config.globalProperties._$review = () => {
            userEvents.review();
        };
        app.config.globalProperties._$visit= () => {
            userEvents.visit();
        };
        app.config.globalProperties._$other = () => {
            userEvents.other();
        };
        app.config.globalProperties.$onUserEvent = (type) => {
            switch (type){
                case EventType.VIEWS:
                    userEvents.views();
                    break;
                case EventType.LIKE:
                    userEvents.like();
                    break;
                case EventType.FAVORITE:
                    userEvents.favorite();
                    break;
                case EventType.SHARE:
                    userEvents.share();
                    break;
                case EventType.REVIEW:
                    userEvents.review();
                    break;
                case EventType.VISIT:
                    userEvents.visit();
                    break;
                case EventType.OTHER:
                    userEvents.other();
            }
        };
        console.info("UserEvents插件嘤嘤嘤....",options);
    }
}
