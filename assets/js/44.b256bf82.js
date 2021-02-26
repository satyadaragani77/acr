(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{393:function(a,s,t){"use strict";t.r(s);var e=t(40),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"quick-docker-build-using-identity-and-keyvault"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-docker-build-using-identity-and-keyvault"}},[a._v("#")]),a._v(" Quick Docker build using identity and keyvault")]),a._v(" "),t("h2",{attrs:{id:"create-a-resource-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-resource-group"}},[a._v("#")]),a._v(" Create a resource group")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -n mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -l westus\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"create-a-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-registry"}},[a._v("#")]),a._v(" Create a Registry")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az acr create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   -n myreg -g mytaskrunrg --sku Standard\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"create-a-custom-registry-and-enable-the-admin-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-registry-and-enable-the-admin-user"}},[a._v("#")]),a._v(" Create a Custom Registry and enable the admin user")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az acr create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   -n mycustomreg -g mytaskrunrg --sku Standard --admin-enabled "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"create-a-user-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-user-identity"}},[a._v("#")]),a._v(" Create a User Identity")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az identity create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -g mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -n myquickdockerbuildrunwithidentity\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"create-keyvault"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-keyvault"}},[a._v("#")]),a._v(" Create KeyVault")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az keyvault create --name mykeyvault --resource-group mytaskrunrg --location eastus2\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"save-registry-username-password-in-the-keyvault"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-registry-username-password-in-the-keyvault"}},[a._v("#")]),a._v(" Save registry username/password in the keyvault")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Get password of admin user")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("az acr credential show --name mycustomreg --query passwords"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".value --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\naz keyvault secret "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" --name username --value mycustomreg --vault-name mykeyvault\naz keyvault secret "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" --name password --value "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$password")]),a._v(" --vault-name mykeyvault\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"grant-identity-access-to-key-vault-object-id-is-the-object-id-of-managed-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant-identity-access-to-key-vault-object-id-is-the-object-id-of-managed-identity"}},[a._v("#")]),a._v(" Grant identity access to key vault (object-id is the Object ID of managed identity)")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Get principal id of the identity")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("principalId")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("az identity show --resource-group mytaskrunrg --name myquickdockerbuildrunwithidentity --query principalId --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\naz keyvault set-policy --name mykeyvault --resource-group mytaskrunrg --object-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$principalId")]),a._v(" --secret-permissions get \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"deploy-a-quick-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-quick-run"}},[a._v("#")]),a._v(" Deploy a quick run")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Get the custom registry name")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("customregistryName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("az acr show -n mycustomreg --query loginServer --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Get the KeyVault UserName Url")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("userNameUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("az keyvault secret show --name username --vault-name mykeyvault --query "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Get the KeyVault Password Url")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("passwordUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("az keyvault secret show --name password --vault-name mykeyvault --query "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Get the ID of ManagedIdentity")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("managedId")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("az identity show --resource-group mytaskrunrg --name myquickdockerbuildrunwithidentity --query "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\naz deployment group create --resource-group "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mytaskrunrg"')]),a._v(" --template-file azuredeploy.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters azuredeploy.parameters.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("registryName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myreg"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("taskRunName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mytaskrun"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("customRegistryName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$customregistryName")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("userNameUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$userNameUrl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("userPasswordUrl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$passwordUrl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("repository")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello-world"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("managedIdResourceId")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$managedIdResourceId")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sourceLocation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://github.com/Azure-Samples/acr-build-helloworld-node.git"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);