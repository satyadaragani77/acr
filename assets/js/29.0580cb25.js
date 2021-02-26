(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{405:function(e,t,n){"use strict";n.r(t);var o=n(40),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"understand-access-to-a-connected-registry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#understand-access-to-a-connected-registry"}},[e._v("#")]),e._v(" Understand access to a connected registry")]),e._v(" "),n("p",[e._v("To access and manage a "),n("RouterLink",{attrs:{to:"/preview/connected-registry/intro-connected-registry.html"}},[e._v("connected registry")]),e._v(", currently only ACR "),n("RouterLink",{attrs:{to:"/preview/connected-registry/container-registry-repository-scoped-permissions.html"}},[e._v("token-based authentication")]),e._v(" is supported. As shown in the following image, two different types of tokens are used by each connected registry:")],1),e._v(" "),n("ul",[n("li",[e._v("One or more "),n("em",[e._v("client tokens")]),e._v(", which on-premise clients use to authenticate with a connected registry and push or pull images and artifacts to or from it.")]),e._v(" "),n("li",[e._v("A "),n("em",[e._v("sync token")]),e._v(" used by each connected registry to access its parent and synchronize images and artifacts with it.")])]),e._v(" "),n("p",[n("img",{attrs:{src:"media/connected-registry/connected-registry-authentication-overview.svg",alt:"Connected Registry Authentication Overview"}})]),e._v(" "),n("blockquote",[n("p",[e._v("[!IMPORTANT]\nStore token passwords for each connected registry in a safe location. After they are created, token passwords can't be retrieved. You can regenerate token passwords at any time.")])]),e._v(" "),n("h2",{attrs:{id:"client-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client-tokens"}},[e._v("#")]),e._v(" Client tokens")]),e._v(" "),n("p",[e._v("To manage client access to a connected registry, you create tokens scoped for actions on one or more repositories. After creating a token, you configure the connected registry to accept the token by using the "),n("code",[e._v("az acr connected-registry update")]),e._v(" command. A client can then use the token credentials to access a connected registry endpoint - for example, to use Docker CLI commands to pull or push images to the connected registry.")]),e._v(" "),n("p",[e._v("Your options for configuring client token actions depend on whether the connected registry allows both push and pull operations or functions as a pull-only mirror.")]),e._v(" "),n("ul",[n("li",[e._v("A connected registry in the default "),n("em",[e._v("registry")]),e._v(" mode allows both pull and push operations, so you can create a token that allows actions to both "),n("em",[e._v("read")]),e._v(" and "),n("em",[e._v("write")]),e._v(" repository content in that registry.")]),e._v(" "),n("li",[e._v("For a connected registry in "),n("em",[e._v("mirror")]),e._v(" mode, client tokens can only allow actions to "),n("em",[e._v("read")]),e._v(" repository content.")])]),e._v(" "),n("h3",{attrs:{id:"manage-client-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manage-client-tokens"}},[e._v("#")]),e._v(" Manage client tokens")]),e._v(" "),n("p",[e._v("Update client tokens, passwords, or scope maps as needed by using "),n("a",{attrs:{href:"/cli/az/acr#az_acr_token"}},[e._v("az acr token")]),e._v(" and "),n("a",{attrs:{href:"/cli/az/acr#az_acr_scope-map"}},[e._v("az acr scope-map")]),e._v(" commands. Client token updates are propagated automatically to the connected registries that accept the token.")]),e._v(" "),n("h2",{attrs:{id:"sync-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-token"}},[e._v("#")]),e._v(" Sync token")]),e._v(" "),n("p",[e._v("Each connected registry uses a "),n("em",[e._v("sync token")]),e._v(" to authenticate with its parent - which could be another connected registry or the cloud registry. The connected registry automatically uses this token when synchronizing content with the parent or performing other updates.")]),e._v(" "),n("ul",[n("li",[e._v("The "),n("em",[e._v("sync token")]),e._v(" is generated automatically when you create the connected registry resource. You must run the "),n("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/acr/connected-registry/install?view=azure-cli-latest#az_acr_connected_registry_install_renew_credentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("az acr connected-registry install renew-credentials"),n("OutboundLink")],1),e._v(" command to generate the passwords.")]),e._v(" "),n("li",[e._v("Include the "),n("em",[e._v("sync token")]),e._v(" credentials in the configuration used to deploy the connected registry on premises.")]),e._v(" "),n("li",[e._v("By default, the "),n("em",[e._v("sync token")]),e._v(" is granted permission to synchronize selected repositories with its parent. You must provide existing "),n("em",[e._v("sync token")]),e._v(" or one or more repositories to sync when you create the connected registry resource.")]),e._v(" "),n("li",[e._v("It also has permissions to "),n("em",[e._v("read")]),e._v(" and "),n("em",[e._v("write")]),e._v(" synchronization messages on a gateway used to communicate with the connected registry parent. These messages control the synchronization schedule and manage other updates between the connected registry and its parent.")])]),e._v(" "),n("h3",{attrs:{id:"manage-sync-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manage-sync-token"}},[e._v("#")]),e._v(" Manage sync token")]),e._v(" "),n("p",[e._v("Update sync tokens, passwords, or scope maps as needed by using "),n("a",{attrs:{href:"/cli/az/acr#az_acr_token"}},[e._v("az acr token")]),e._v(" and "),n("a",{attrs:{href:"/cli/az/acr#az_acr_scope-map"}},[e._v("az acr scope-map")]),e._v(" commands. Sync token updates are propagated automatically to the connected registry. Follow the standard practices of rotating passwords when updating the sync token.")]),e._v(" "),n("blockquote",[n("p",[e._v("[!WARNING]\nTake care not to delete a sync token. Doing so will permanently prevent communication with the corresponding connected registry. You can disable a connected registry by setting the status of the sync token to "),n("code",[e._v("disabled")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"registry-endpoints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#registry-endpoints"}},[e._v("#")]),e._v(" Registry endpoints")]),e._v(" "),n("p",[e._v("Token credentials for connected registies are scoped to access specific registry endpoints.")]),e._v(" "),n("p",[e._v("A client token accesses the connected registry's endpoint. The connected registry endpoint is the login server URI, which is typically the IP address of the server or device that hosts it.")]),e._v(" "),n("p",[e._v("A sync token accesses the endpoint of the parent registry, which is either another connected registry endpoint or the cloud registry itself. When scoped to access the cloud registry, the sync token needs to reach two registry endpoints:")]),e._v(" "),n("ul",[n("li",[e._v("The fully qualified login server name, for example, "),n("code",[e._v("contoso.azurecr.io")]),e._v(". This endpoint is used for authentication.")]),e._v(" "),n("li",[e._v("A fully qualified regional "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-firewall-access-rules#enable-dedicated-data-endpoints",target:"_blank",rel:"noopener noreferrer"}},[e._v("data endpoint"),n("OutboundLink")],1),e._v(" for the cloud registry, for example, "),n("code",[e._v("contoso.westus2.data.azurecr.io")]),e._v(". This endpoint is used to exchange messages with the connected registry for synchronization purposes.")])]),e._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),n("p",[e._v("Continue to the one of the following articles to learn about specific scenarios where connected registry can be utilized.")]),e._v(" "),n("blockquote",[n("p",[n("RouterLink",{attrs:{to:"/preview/connected-registry/overview-connected-registry-and-iot-edge.html"}},[e._v("Overview: Connected registry and IoT Edge")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);