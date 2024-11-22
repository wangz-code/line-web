import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from './Container-TZvEYdu6.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("IMG_sjdp.D02ol7B3.jpg");
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
              _push3(`\u6570\u636E\u5927\u5C4F`);
            } else {
              return [
                createTextVNode("\u6570\u636E\u5927\u5C4F")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u4E0A\u6D77\u6F9C\u7533\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "keywords",
          content: "\u5BB6\u5C45\u5356\u573A,\u6570\u5B57\u5316\u548C\u667A\u6167\u5546\u573A\u5EFA\u8BBE\u670D\u52A1 \u6570\u636E\u5927\u5C4F"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u6570\u636E\u5927\u5C4F")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u4E0A\u6D77\u6F9C\u7533\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8"
          }),
          createVNode(_component_Meta, {
            name: "keywords",
            content: "\u5BB6\u5C45\u5356\u573A,\u6570\u5B57\u5316\u548C\u667A\u6167\u5546\u573A\u5EFA\u8BBE\u670D\u52A1 \u6570\u636E\u5927\u5C4F"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-sm-12"${_scopeId}><div class="text-body"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="\u6570\u636E\u5927\u5C4F" srcset=""${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-sm-12" }, [
              createVNode("div", { class: "text-body" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "\u6570\u636E\u5927\u5C4F",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/sjdp/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-z0kx2t94.mjs.map
