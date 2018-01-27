.
├── dist                              # 所有打包配置项
├── src                               # 程序源文件
│   ├── actions                       # actions 管理
│   ├── api                           # superagent 处理，基于node的Ajax组件
│   ├── components                    # 可复用的直观组件(Presentational Components)
│   ├── constants                     # 常量管理
│   ├── reducers                      # reducers 管理
│   ├── routes                        # 主路由和异步分割点
│   │   └── index.js                  # 用store启动主程序路由
│   ├── static                        # 静态资源文件
│   ├── store                         # Redux指定块
│   │   ├── middlewares               # 中间件管理
│   │   │   ├── afterApiMiddleware.js # 处理用户登录中间件
│   │   │   └── promiseMiddleware.js  # 处理 Pormise 中间件
│   │   ├── createStore.js            # 创建和使用redux store
│   │   ├── reducers.js               # Reducer注册和注入
│   │   └── types.js                  # 管理 Action、Reducer 公用的 types
│   │── util                          # 工具包
│   │── views                         # 业务页面管理
│   │   └── Home                      # 不规则路由
│   │       ├── Home.js               # 将组件集成成为业务模块
│   │       ├── Home.less             # 业务模块对应的css
│   │       └── index.js              # 导入业务模块，使用 redux 将模块需要的 porps 传入
│   ├── index.htlm                    # 主入口 HTML 文件
│   ├── index.js                      # 主要 JS 文件
│   └── index.less                    # 主入口 css 文件
└── tests                             # 测试