(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{62:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("想要在 VuePress 中支持多语言，首先你需要使用如下的文件结构：")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("p",[t._v("默认主题也内置国际化支持，可以通过 "),s("code",[t._v("themeConfig.locales")]),t._v(" 来配置，与上面配置相同，也使用 "),s("code",[t._v("{ path: config }")]),t._v(" 这种（路径+配置对象）格式。除了可以配置一些整个网站都会用到的文本，每个语言对象都有自己的 "),s("router-link",{attrs:{to:"../default-theme-config/#导航栏"}},[t._v("导航栏")]),t._v(" 和 "),s("router-link",{attrs:{to:"../default-theme-config/#侧边栏"}},[t._v("侧边栏")]),t._v("。")],1),t._m(7)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"国际化支持-internationalization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#国际化支持-internationalization","aria-hidden":"true"}},[this._v("#")]),this._v(" 国际化支持(internationalization)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"网站级别的国际化配置-site-level-i18n-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网站级别的国际化配置-site-level-i18n-config","aria-hidden":"true"}},[this._v("#")]),this._v(" 网站级别的国际化配置(site level i18n config)")])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("/\n├─ README.md\n├─ foo.md\n├─ /nested/\n│  └─ README.md\n└─ /zh/\n   ├─ README.md\n   ├─ foo.md\n   └─ /zh/nested/\n      └─ README.md\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("然后，在 "),n("code",[this._v(".vuepress/config.js")]),this._v(" 中指定 "),n("code",[this._v("locales")]),this._v(" 选项：")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locales"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 每个语言对象的键(key)，是语言的访问路径。")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 然而，一种特例是将 '/' 作为默认语言的访问路径。")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lang"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'en-US'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 这个值会被设置在 <html> 的 lang 属性上")]),t._v("\n      title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'VuePress'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      description"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Vue-powered Static Site Generator'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'/zh/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lang"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'zh-CN'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'VuePress'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      description"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Vue 驱动的静态网站生成工具'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[t._v("如果某个语言对象没有声明 "),s("code",[t._v("title")]),t._v(" 或 "),s("code",[t._v("description")]),t._v("，VuePress 会尝试获取根语言对象上相应的值。如果每个语言对象都声明了 "),s("code",[t._v("title")]),t._v(" 和 "),s("code",[t._v("description")]),t._v("，则可以省略根语言对象上的 "),s("code",[t._v("title")]),t._v(" 和 "),s("code",[t._v("description")]),t._v("。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"默认主题的国际化配置-default-theme-i18n-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认主题的国际化配置-default-theme-i18n-config","aria-hidden":"true"}},[this._v("#")]),this._v(" 默认主题的国际化配置(default theme i18n config)")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locales"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    locales"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// text for the language dropdown")]),t._v("\n        selectText"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Languages'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// label for this locale in the language dropdown")]),t._v("\n        label"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'English'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// text for the edit-on-github link")]),t._v("\n        editLinkText"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Edit this page on GitHub'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// algolia docsearch options for current locale")]),t._v("\n        algolia"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        nav"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Nested'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/nested/'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sidebar"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token string"}},[t._v("'/nested/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v("'/zh/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 语言下拉菜单的展示文本")]),t._v("\n        selectText"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'选择语言'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 该语言在下拉菜单中的 label 标签")]),t._v("\n        label"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'简体中文'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// github 编辑链接的文字")]),t._v("\n        editLinkText"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'在 GitHub 上编辑此页'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        nav"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'嵌套'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/zh/nested/'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        algolia"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sidebar"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token string"}},[t._v("'/zh/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token string"}},[t._v("'/zh/nested/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);n.default=e.exports}}]);