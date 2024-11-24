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

const _imports_0 = "" + buildAssetsURL("IMG_htb01.DxZmguLD.jpg");
const _imports_1 = "" + buildAssetsURL("IMG_htb02.C9oBW8tp.jpg");
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
              _push3(`\u5408\u540C\u5B9D`);
            } else {
              return [
                createTextVNode("\u5408\u540C\u5B9D")
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
          content: "\u5BB6\u5C45\u5356\u573A,\u6570\u5B57\u5316\u548C\u667A\u6167\u5546\u573A\u5EFA\u8BBE\u670D\u52A1 \u5408\u540C\u5B9D"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u5408\u540C\u5B9D")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u4E0A\u6D77\u6F9C\u7533\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8"
          }),
          createVNode(_component_Meta, {
            name: "keywords",
            content: "\u5BB6\u5C45\u5356\u573A,\u6570\u5B57\u5316\u548C\u667A\u6167\u5546\u573A\u5EFA\u8BBE\u670D\u52A1 \u5408\u540C\u5B9D"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-sm-12"${_scopeId}><div class="text-body"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="\u5408\u540C\u5B9D" srcset=""${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="\u5408\u540C\u5B9D" srcset=""${_scopeId}></div></div><div class="col-sm-12 seo-text"${_scopeId}>\u4E0A\u7EBF\u5408\u540C\u5B9D \u7ED9\u5BB6\u5C45\u5356\u573A\u5E26\u6765\u7684 \u597D\u5904 1.\u63D0\u9AD8\u7BA1\u7406\u6548\u7387\uFF1A \u81EA\u52A8\u5316\u5408\u540C\u7BA1\u7406\u51CF\u5C11\u624B\u5DE5\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u5408\u540C\u5904\u7406\u6548\u7387\uFF1B 2.\u5B9E\u65F6\u8FFD\u8E2A\u548C\u76D1\u63A7\uFF1A \u5408\u540C\u72B6\u6001\u548C\u8FDB\u5C55\u5B9E\u65F6\u53EF\u8FFD\u8E2A\u548C\u76D1\u63A7\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u7BA1\u7406\u63A7\u5236\uFF1B 3.\u7EDF\u4E00\u6807\u51C6\u548C\u89C4\u8303\uFF1A \u7EDF\u4E00\u5408\u540C\u683C\u5F0F\u548C\u6761\u6B3E\uFF0C\u786E\u4FDD\u4E00\u81F4\u6027\u548C\u51C6\u786E\u6027\uFF1B 4.\u65B9\u4FBF\u6587\u4EF6\u5B58\u6863\u548C\u68C0\u7D22\uFF1A \u5408\u540C\u6587\u4EF6\u96C6\u4E2D\u5B58\u6863\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u68C0\u7D22\u548C\u5F52\u6863\uFF1B 5.\u98CE\u9669\u548C\u5408\u89C4\u7BA1\u7406\uFF1A \u63D0\u4F9B\u98CE\u9669\u8BC4\u4F30\u548C\u5408\u89C4\u6027\u68C0\u67E5\uFF0C\u964D\u4F4E\u6CD5\u5F8B\u98CE\u9669\u548C\u5408\u89C4\u98CE\u9669\u3002</div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-sm-12" }, [
              createVNode("div", { class: "text-body" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "\u5408\u540C\u5B9D",
                  srcset: ""
                }),
                createVNode("img", {
                  src: _imports_1,
                  alt: "\u5408\u540C\u5B9D",
                  srcset: ""
                })
              ])
            ]),
            createVNode("div", { class: "col-sm-12 seo-text" }, "\u4E0A\u7EBF\u5408\u540C\u5B9D \u7ED9\u5BB6\u5C45\u5356\u573A\u5E26\u6765\u7684 \u597D\u5904 1.\u63D0\u9AD8\u7BA1\u7406\u6548\u7387\uFF1A \u81EA\u52A8\u5316\u5408\u540C\u7BA1\u7406\u51CF\u5C11\u624B\u5DE5\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u5408\u540C\u5904\u7406\u6548\u7387\uFF1B 2.\u5B9E\u65F6\u8FFD\u8E2A\u548C\u76D1\u63A7\uFF1A \u5408\u540C\u72B6\u6001\u548C\u8FDB\u5C55\u5B9E\u65F6\u53EF\u8FFD\u8E2A\u548C\u76D1\u63A7\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u7BA1\u7406\u63A7\u5236\uFF1B 3.\u7EDF\u4E00\u6807\u51C6\u548C\u89C4\u8303\uFF1A \u7EDF\u4E00\u5408\u540C\u683C\u5F0F\u548C\u6761\u6B3E\uFF0C\u786E\u4FDD\u4E00\u81F4\u6027\u548C\u51C6\u786E\u6027\uFF1B 4.\u65B9\u4FBF\u6587\u4EF6\u5B58\u6863\u548C\u68C0\u7D22\uFF1A \u5408\u540C\u6587\u4EF6\u96C6\u4E2D\u5B58\u6863\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u68C0\u7D22\u548C\u5F52\u6863\uFF1B 5.\u98CE\u9669\u548C\u5408\u89C4\u7BA1\u7406\uFF1A \u63D0\u4F9B\u98CE\u9669\u8BC4\u4F30\u548C\u5408\u89C4\u6027\u68C0\u67E5\uFF0C\u964D\u4F4E\u6CD5\u5F8B\u98CE\u9669\u548C\u5408\u89C4\u98CE\u9669\u3002")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/htb/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DnERsG8e.mjs.map
