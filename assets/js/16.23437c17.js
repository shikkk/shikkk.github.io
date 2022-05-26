(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{387:function(t,v,_){"use strict";_.r(v);var e=_(46),l=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"git常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" git常用命令")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("查看状态")])]),t._v(" "),_("tr",[_("td",[t._v("branch")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("查看分支列表")])]),t._v(" "),_("tr",[_("td",[t._v("branch -r")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("查看远程主机分支")])]),t._v(" "),_("tr",[_("td",[t._v("checkout")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("切换分支")])]),t._v(" "),_("tr",[_("td",[t._v("checkout -b")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("新建本地分支")])]),t._v(" "),_("tr",[_("td",[t._v("commit -m")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("提交代码到主机")])]),t._v(" "),_("tr",[_("td",[t._v("log")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("查看提交记录")])]),t._v(" "),_("tr",[_("td",[t._v("merge")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("合并代码：历史log不清晰，会污染merge信息")])]),t._v(" "),_("tr",[_("td",[t._v("rebase")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("合并代码：历史log清晰，一条线")])]),t._v(" "),_("tr",[_("td",[t._v("stash")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("未修改好的代码储存起来")])]),t._v(" "),_("tr",[_("td",[t._v("stash pop")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("释放储存器的代码")])]),t._v(" "),_("tr",[_("td",[t._v("stash list")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("查看stash列表")])]),t._v(" "),_("tr",[_("td",[t._v("diff")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("代码对比")])]),t._v(" "),_("tr",[_("td",[t._v("remote -v")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("查找远程url")])]),t._v(" "),_("tr",[_("td",[t._v("remote set-url origin xxxxxx")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("替换远程url")])]),t._v(" "),_("tr",[_("td",[t._v("fetch")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("更新远程主机全部取回本地")])]),t._v(" "),_("tr",[_("td",[t._v("show-ref")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("显示所有分支、tags列表")])])])]),t._v(" "),_("h3",{attrs:{id:"merge和rebase区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#merge和rebase区别"}},[t._v("#")]),t._v(" merge和rebase区别")]),t._v(" "),_("ul",[_("li",[t._v("merge\n"),_("ol",[_("li",[t._v("会记录下合并动作,很多时候这些合并产生的是垃圾信息")]),t._v(" "),_("li",[t._v("不会修改commit id")]),t._v(" "),_("li",[t._v("冲突只解决一次")]),t._v(" "),_("li",[t._v("分支看着不太整洁，但能看出来合并的先后顺序")]),t._v(" "),_("li",[t._v("记录真实的commit情况，包括每个分支的详情")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("特点")]),t._v("：自动创建一个新的commit，当合并时遇到冲突，修改后重新commit即可")]),t._v(" "),_("li",[_("strong",[t._v("有点")]),t._v("：将commit的实际情况进行记录，便于以后查看")]),t._v(" "),_("li",[_("strong",[t._v("缺点")]),t._v("：由于每次merge会自动产生一个merge commit，这样会使得feature分支很杂乱")])])]),t._v(" "),_("li",[t._v("rebase\n"),_("ol",[_("li",[t._v("改变当前分支的branch out位置")]),t._v(" "),_("li",[t._v("项目历史更整洁明了")]),t._v(" "),_("li",[t._v("每个commit都需要解决冲突")]),t._v(" "),_("li",[t._v("修改了所有的commit id")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("特点")]),t._v("：将commit历史进行合并")]),t._v(" "),_("li",[_("strong",[t._v("有点")]),t._v("：将项目历史比较简单，少了merge commit")]),t._v(" "),_("li",[_("strong",[t._v("缺点")]),t._v("：当发生冲突时不容易定位问题\n"),_("ul",[_("li",[t._v("如果出现冲突如下解决\n"),_("ol",[_("li",[t._v("修改冲突部分")]),t._v(" "),_("li",[t._v("git add")]),t._v(" "),_("li",[_("code",[t._v("git rebase --continue")])]),t._v(" "),_("li",[t._v("如果3不行，"),_("code",[t._v("git rebase --skip")])])])])])])])])])])}),[],!1,null,null,null);v.default=l.exports}}]);