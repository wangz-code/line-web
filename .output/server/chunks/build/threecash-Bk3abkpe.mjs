import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from './Container-DNalNlBL.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import './vue.8fc199ce-DvSg21Lc.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("IMG_01.D3jYm4P2.jpg");
const _imports_1 = "" + buildAssetsURL("IMG_02.CvJmsGkt.jpg");
const _imports_2 = "" + buildAssetsURL("IMG_03.DYKO_a63.jpg");
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
              _push3(`\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01`);
            } else {
              return [
                createTextVNode("\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "keywords",
          content: "\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01"
          }),
          createVNode(_component_Meta, {
            name: "keywords",
            content: "\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-sm-12"${_scopeId}><div class="text-body"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="3.0" srcset=""${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="3.0" srcset=""${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="3.0" srcset=""${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-sm-12" }, [
              createVNode("div", { class: "text-body" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "3.0",
                  srcset: ""
                }),
                createVNode("img", {
                  src: _imports_1,
                  alt: "3.0",
                  srcset: ""
                }),
                createVNode("img", {
                  src: _imports_2,
                  alt: "3.0",
                  srcset: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/hygd/threecash.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const threecash = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { threecash as default };
//# sourceMappingURL=threecash-Bk3abkpe.mjs.map
