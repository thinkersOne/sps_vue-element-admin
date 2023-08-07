import Vue from 'vue'
import Router from 'vue-router'
import sa from '@/sa-frame/sa'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/*
{
  // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
  hidden: true, // (默认 false)

  //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  redirect: 'noRedirect',

  // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  alwaysShow: true,

  name: 'router-name', // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  meta: {
    roles: ['admin', 'editor'], // 设置该路由进入的权限，支持多个权限叠加
    title: 'title', // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name', // 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
    noCache: true, // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    breadcrumb: false, //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    affix: true, // 如果设置为true，它则会固定在tags-view中(默认 false)

    // 当路由设置了该属性，则会高亮相对应的侧边栏。
    // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
    // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
    activeMenu: '/article/list'
  }
}
*/

/**
 * 一些隐藏路由
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/sp-views/redirect/index')
      }
    ]
  },
  //注册页面
  {
    path: '/register',
    component: () => import('@/sp-views/sp-admin/register'),
    hidden: true
  },
  // 登录页
  {
    path: '/login',
    component: () => import('@/sp-views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/sp-views/error-page/404'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/sp-views/error-page/403'),
    hidden: true
  },
  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/sp-views/home/index'),
        name: 'home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
]

/**
 * 动态路由列表
 */
export const asyncRoutes = [

  {
    name: 'bas',
    hidden: true,
    meta: {
      title: '身份相关',
    },
    children: [
      { name: 'dev', hidden: true, meta: { title: '开发者权限（最高权限）' }},
      { name: 'in-system', hidden: true, meta: { title: '允许进入后台管理' }},
    ]
  },

  {
    name: 'auth',
    path: '/sp-role',
    component: Layout,
    meta: {
      title: '权限控制',
      icon: 'el-icon-unlock'
    },
    children: [
      {
        name: 'role-list',
        path: 'role-list',
        component: () => import('@/sp-views/sp-role/role-list.vue'),
        meta: { title: '角色列表' }
      },
      {
        name: 'menu-list',
        path: 'menu-list',
        component: () => import('@/sp-views/sp-role/menu-list.vue'),
        meta: { title: '菜单列表' }
      },
      {
        name: 'admin-list',
        path: 'admin-list',
        component: () => import('@/sp-views/sp-admin/admin-list.vue'),
        meta: { title: '管理员列表' }
      },
      {
        name: 'admin-add',
        path: 'admin-add',
        component: () => import('@/sp-views/sp-admin/admin-add.vue'),
        meta: { title: '管理员添加' }
      },
      {
        name: 'sp-admin-login',
        path: 'sp-admin-login',
        component: () => import('@/sp-views/sp-admin-login/sp-admin-login-list.vue'),
        meta: { title: '管理员登录日志' }
      }
    ]
  },

  {
    name: 'console',
    path: '/sp-console',
    component: Layout,
    meta: {
      title: '监控中心',
      icon: 'el-icon-view'
    },
    children: [
      {
        name: 'redis-console',
        path: 'redis-console',
        component: () => import('@/sp-views/sp-console/redis-console.vue'),
        meta: { title: 'Redis监控台' }
      },
      {
        name: 'apilog-list',
        path: 'apilog-list',
        component: () => import('@/sp-views/sp-apilog/apilog-list.vue'),
        meta: { title: 'API请求日志' }
      },
      {
        name: 'sql-console',
        path: 'sql-console',
        component: () => import('@/sp-views/sp-console/sql-console.vue'),
        meta: { title: 'SQL 监控台' }
      },
      {
        name: 'form-generator',
        path: 'form-generator',
        component: () => import('@/sp-views/sp-console/form-generator.vue'),
        meta: { title: '在线表单构建' }
      },
      // {
      //   name: 'sa-test',
      //   path: 'sa-test',
      //   component: () => import('@/views/test/sa-test'),
      //   meta: { title: 'Test组件' }
      // },
    ]
  },

  {
    name: 'sp-cfg',
    path: '/sp-cfg',
    component: Layout,
    meta: {
      title: '系统配置',
      icon: 'el-icon-setting'
    },
    children: [
      {
        name: 'sp-cfg-app',
        path: 'sp-cfg-app',
        component: () => import('@/sp-views/sp-cfg/app-cfg.vue'),
        meta: { title: '系统对公配置' }
      },
      {
        name: 'sp-cfg-server',
        path: 'sp-cfg-server',
        component: () => import('@/sp-views/sp-cfg/server-cfg.vue'),
        meta: { title: '服务器私有配置' }
      },
    ]
  },

  {
    name: 'user',
    path: '/user',
    component: Layout,
    meta: {
      title: '用户表',
      icon: 'el-icon-folder-opened'
    },
    children: [
      {
        name: 'user-list',
        path: 'user-list',
        component: () => import('@/sp-views/user/user-list.vue'),
        meta: { title: '用户表-列表' }
      },
      {
        name: 'user-add',
        path: 'user-add',
        component: () => import('@/sp-views/user/user-add.vue'),
        meta: { title: '用户表-添加' }
      },
    ]
  },
  {
		name: 'category',
		path: '/category',
		component: Layout,
        meta: {
          title: '账号分类',
          icon: 'el-icon-folder-opened'
        },
		children: [
            {
                name: 'category-list',
                path: 'category-list',
                component: () => import('@/sp-views/category/category-list.vue'),
                meta: { title: '账号分类' }
            },
            // {
            //     name: 'category-add',
            //     path: 'category-add',
            //     component: () => import('@/sp-views/category/category-add.vue'),
            //     meta: { title: '密码分类表-新增' }
            // },
		]
	},
	{
		name: 'password',
		path: '/password',
		component: Layout,
        meta: {
          title: '账号密码管理',
          icon: 'el-icon-folder-opened'
        },
		children: [
            {
                name: 'password-list',
                path: 'password-list',
                component: () => import('@/sp-views/password/password-list.vue'),
                meta: { title: '账号密码管理' }
            },
            // {
            //     name: 'password-add',
            //     path: 'password-add',
            //     component: () => import('@/sp-views/password/password-add.vue'),
            //     meta: { title: '密码表-新增' }
            // },
		]
	},
  {
		name: 'spVedio',
		path: '/spVedio',
		component: Layout,
        meta: {
          title: '视频管理',
          icon: 'el-icon-folder-opened'
        },
		children: [
            {
                name: 'spVedio-list',
                path: 'spVedio-list',
                component: () => import('@/sp-views/sp-vedio/sp-vedio-list.vue'),
                meta: { title: '视频表-列表' }
            },
            {
                name: 'spVedio-add',
                path: 'spVedio-add',
                component: () => import('@/sp-views/sp-vedio/sp-vedio-add.vue'),
                meta: { title: '视频表-新增' }
            },
		]
	},
  {
		name: 'spProduct',
		path: '/spProduct',
		component: Layout,
        meta: {
          title: '商品信息表',
          icon: 'el-icon-folder-opened'
        },
		children: [
            {
                name: 'spProduct-list',
                path: 'spProduct-list',
                component: () => import('@/sp-views/sp-product/sp-product-list.vue'),
                meta: { title: '商品信息表-列表' }
            },
          
		]
	},
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
sa.router = router;

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
