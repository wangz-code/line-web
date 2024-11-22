import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from './Container-TZvEYdu6.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_4 } from './virtual_public-CyqEAoM1.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-C2merokO.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("IMG_01.BcY9gB2L.jpg");
const _imports_1 = "" + buildAssetsURL("IMG_02.D3hmC4EO.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Meta = Meta;
  const _component_Container = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE`);
            } else {
              return [
                createTextVNode("\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "keywords",
          content: "\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE"
          }),
          createVNode(_component_Meta, {
            name: "keywords",
            content: "\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-sm-12"${_scopeId}><div class="text-body"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="\u6570\u5B57\u5316\u5EFA\u8BBE" srcset=""${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="3.0" srcset=""${_scopeId}><img class="" id="lxweixin" style="${ssrRenderStyle({ "float": "right", "width": "40%" })}"${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-sm-12" }, [
              createVNode("div", { class: "text-body" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "\u6570\u5B57\u5316\u5EFA\u8BBE",
                  srcset: ""
                }),
                createVNode("img", {
                  src: _imports_1,
                  alt: "3.0",
                  srcset: ""
                }),
                createVNode("img", {
                  class: "",
                  id: "lxweixin",
                  style: { "float": "right", "width": "40%" },
                  src: _imports_4,
                  alt: ""
                })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/hygd/digitalconstruction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const digitalconstruction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { digitalconstruction as default };
//# sourceMappingURL=digitalconstruction-D-PjKGvH.mjs.map
