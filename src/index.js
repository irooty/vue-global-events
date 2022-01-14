/**
 * 接口地址
 * @type {string}
 */
const PATH = "/mobile/platThemeBbsArticle/test";
/**
 * 事件类型
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
 * 点赞
 * @param data 用户数据
 */
Plugin.prototype.like = function (data) {
    process(this.options.request,EventType.LIKE,data);
};
/**
 * 收藏
 * @param data 用户数据
 */
Plugin.prototype.favorite = function (data) {
    process(this.options.request,EventType.FAVORITE,data);
};
/**
 * 分享
 * @param data 用户数据
 */
Plugin.prototype.share = function (data) {
    process(this.options.request,EventType.SHARE,data);
};
/**
 * 评论
 * @param data 用户数据
 */
Plugin.prototype.review = function (data) {
    process(this.options.request,EventType.REVIEW,data);
};
/**
 * 参与
 * @param data 用户数据
 */
Plugin.prototype.visit = function (data) {
    process(this.options.request,EventType.VISIT,data);
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
    let params = Object.assign({},data);
    params.eventType = type;
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
        app.config.globalProperties._$views = (data) => {
            userEvents.views(data);
        };
        app.config.globalProperties._$like = (data) => {
            userEvents.like(data);
        };
        app.config.globalProperties._$favorite = (data) => {
            userEvents.favorite(data);
        };
        app.config.globalProperties._$share = (data) => {
            userEvents.share(data);
        };
        app.config.globalProperties._$review = (data) => {
            userEvents.review(data);
        };
        app.config.globalProperties._$visit= (data) => {
            userEvents.visit(data);
        };
        app.config.globalProperties._$other = (data) => {
            userEvents.other(data);
        };
        app.config.globalProperties.$onUserEvent = (type,data) => {
            switch (type){
                case EventType.VIEWS:
                    userEvents.views(data);
                    break;
                case EventType.LIKE:
                    userEvents.like(data);
                    break;
                case EventType.FAVORITE:
                    userEvents.favorite(data);
                    break;
                case EventType.SHARE:
                    userEvents.share(data);
                    break;
                case EventType.REVIEW:
                    userEvents.review(data);
                    break;
                case EventType.VISIT:
                    userEvents.visit(data);
                    break;
                case EventType.OTHER:
                    userEvents.other(data);
            }
        };
    }
}
