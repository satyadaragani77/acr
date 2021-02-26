(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{391:function(s,a,t){"use strict";t.r(a);var e=t(40),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"quick-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-run"}},[s._v("#")]),s._v(" Quick run")]),s._v(" "),t("p",[s._v("Deploy a quick run or a set of container using a multi-step task with Managed Identities.")]),s._v(" "),t("h2",{attrs:{id:"create-a-resource-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-resource-group"}},[s._v("#")]),s._v(" Create a resource group")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("az group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -n mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -l westus\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"create-a-user-assigned-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-user-assigned-identity"}},[s._v("#")]),s._v(" Create a user assigned identity")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("identity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("az identity create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -g mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -n mytaskrunidentity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -o tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"deploy-a-registry-and-a-task-run-which-is-associated-with-the-user-assigned-identity-and-run-a-multi-step-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-registry-and-a-task-run-which-is-associated-with-the-user-assigned-identity-and-run-a-multi-step-task"}},[s._v("#")]),s._v(" Deploy a registry and a task run  which is associated with the user assigned identity and run a multi-step task")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("az deployment group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -g mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --template-file azuredeploy.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters azuredeploy.parameters.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userAssignedIdentity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$identity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'properties.outputs.registry.value'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -o tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"output-the-run-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-the-run-log"}},[s._v("#")]),s._v(" Output the run log")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("az acr task list-runs -r "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[0].runId'")]),s._v(" -o tsv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I% az acr task logs -r "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" --run-id %\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);