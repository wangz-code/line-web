import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from './Container-TZvEYdu6.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_4 } from './virtual_public-CyqEAoM1.mjs';
import { _ as _export_sfc } from './server.mjs';
import './index-C2merokO.mjs';
import '@unhead/shared';
import '../routes/renderer.mjs';
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
import 'vue-router';

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
              _push3(`\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F`);
            } else {
              return [
                createTextVNode("\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "keywords",
          content: "\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F")
            ]),
            _: 1
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F"
          }),
          createVNode(_component_Meta, {
            name: "keywords",
            content: "\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="activity row flex-center"${_scopeId}><div class="col-12 col-lg-8"${_scopeId}><h3 class="rich_media_title" id="activity-name"${_scopeId}>\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F</h3><div id="meta_content" class="rich_media_meta_list"${_scopeId}><span id="copyright_logo" class="wx_tap_link js_wx_tap_highlight rich_media_meta icon_appmsg_tag appmsg_title_tag weui-wa-hotarea"${_scopeId}>\u539F\u521B</span><span class="rich_media_meta rich_media_meta_text"${_scopeId}> \u8C22\u5730 </span><span class="rich_media_meta rich_media_meta_nickname" id="profileBt"${_scopeId}><a href="javascript:void(0);" class="wx_tap_link js_wx_tap_highlight weui-wa-hotarea" id="js_name"${_scopeId}> \u5BB6\u5C45\u4E3B\u6D41 </a></span><span id="meta_content_hide_info" class=""${_scopeId}><em id="publish_time" class="rich_media_meta rich_media_meta_text"${_scopeId}>2015\u5E7411\u670802\u65E5</em></span></div><div id="page-content" class="rich_media_area_primary"${_scopeId}><div class="rich_media_area_primary_inner"${_scopeId}><div id="img-content" class="rich_media_wrp"${_scopeId}><div class="rich_media_content" id="js_content" style="${ssrRenderStyle({ "visibility": "visible" })}"${_scopeId}><p style="${ssrRenderStyle({})}"${_scopeId}><strong style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(247, 150, 70)" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" })}"${_scopeId}><span class="main" style="${ssrRenderStyle({ "margin": "0px", "padding": "2px 2px 2px 6px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-family": "\u5FAE\u8F6F\u96C5\u9ED1", "line-height": "19px", "color": "rgb(255, 255, 255)" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "line-height": "0px" })}"${_scopeId}>\uFEFF\uFEFF</span><img data-ke-src="" data-ratio="0.5" data-w="22" data-type="gif" width="auto" data-src="" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "visibility": "visible !important", "width": "auto !important" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "2px 2px 2px 6px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(127, 127, 127)" })}"${_scopeId}><strong style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}>\u63D0\u793A</strong>\uFF1A</span></span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(62, 62, 62)", "font-family": "\u5FAE\u8F6F\u96C5\u9ED1", "line-height": "19px" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(127, 127, 127)" })}"${_scopeId}>\u70B9\u51FB\u4E0A\u65B9</span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}>&quot;</span><strong style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(0, 112, 192)" })}"${_scopeId}>\u5BB6\u5177\u4E3B\u6D41</span></strong><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(0, 187, 236)" })}"${_scopeId}>\u2191</span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(127, 127, 127)" })}"${_scopeId}>\u514D\u8D39\u8BA2\u9605\u672C\u520A</span></span></span></strong></p><p style="${ssrRenderStyle({})}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(227, 108, 9)" })}"${_scopeId}><strong style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(247, 150, 70)" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" })}"${_scopeId}>\u5BB6\u5177\u4E3B\u6D41\uFF1A\u52A0\u5165\u6211\u4EEC\uFF0C\u5BB6\u5177\u66F4\u7CBE\u5F69\uFF01</span></strong><strong style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(247, 150, 70)" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" })}"${_scopeId}></span></strong><br style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}></span></p><p style="${ssrRenderStyle({})}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(227, 108, 9)" })}"${_scopeId}><strong style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" })}"${_scopeId}></span></strong></span></p><p style="${ssrRenderStyle({})}"${_scopeId}><br${_scopeId}></p><fieldset class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({})}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(51, 51, 51)", "border-color": "rgb(71, 193, 168)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "font-size": "1em", "font-family": "inherit", "font-weight": "inherit", "height": "16px" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "left", "border-top-width": "6px", "border-top-style": "solid", "border-color": "rgb(71, 193, 168)", "border-left-width": "6px", "border-left-style": "solid" })}"${_scopeId}></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "right", "border-top-width": "6px", "border-top-style": "solid", "border-color": "rgb(71, 193, 168)", "border-right-width": "6px", "border-right-style": "solid" })}"${_scopeId}></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "color": "transparent", "clear": "both" })}"${_scopeId}></section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "-13px 3px", "padding": "12px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word", "border": "1px solid rgb(71, 193, 168)", "border-top-left-radius": "6px", "border-top-right-radius": "6px", "border-bottom-right-radius": "6px", "border-bottom-left-radius": "6px", "line-height": "1.4", "word-break": "break-all" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(255, 0, 0)", "line-height": "26px", "text-indent": "28px", "background-color": "rgb(255, 249, 239)", "text-align": "justify" })}"${_scopeId}><p style="${ssrRenderStyle({ "margin-top": "0px", "margin-bottom": "0px", "padding": "0px", "max-width": "100%", "min-height": "1em", "white-space": "pre-wrap", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-family": "\u5E7C\u5706", "line-height": "21.111112594604492px", "text-decoration": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px", "font-family": "\u5B8B\u4F53" })}"${_scopeId}></span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px", "font-family": "\u5B8B\u4F53" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-size": "14px", "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u6CA1\u6709\u7EDF\u4E00\u6536\u94F6\u4F5C\u4E3A\u524D\u63D0\uFF0C\u7EDF\u4E00\u7684\u4FC3\u9500\u4EE5\u53CA\u552E\u540E\u670D\u52A1\u7B49\u90FD\u662F\u56E0\u4E3A\u7F3A\u5C11\u6570\u636E\u800C\u6D41\u4E8E\u5F62\u5F0F\u3002</span></span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-family": "\u5B8B\u4F53" })}"${_scopeId}><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px" })}"${_scopeId}></span></span></span><span style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px" })}"${_scopeId}><br style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}></span></p></span></section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "font-size": "1em", "font-family": "inherit", "font-weight": "inherit", "height": "16px" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "left", "border-bottom-width": "6px", "border-bottom-style": "solid", "border-color": "rgb(71, 193, 168)", "border-left-width": "6px", "border-left-style": "solid" })}"${_scopeId}></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "right", "border-bottom-width": "6px", "border-bottom-style": "solid", "border-color": "rgb(71, 193, 168)", "border-right-width": "6px", "border-right-style": "solid" })}"${_scopeId}></section></section></section></fieldset><p style="${ssrRenderStyle({})}"${_scopeId}><br style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}></p><p style="${ssrRenderStyle({ "text-indent": "28px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u4F20\u7EDF\u7684\u5BB6\u5C45\u5356\u573A\u7BA1\u7406\u4EE5\u201C\u5E02\u573A\u5316\u7ECF\u8425\u3001\u5E02\u573A\u5316\u7BA1\u7406\u201D\u4E3A\u4E3B\uFF0C\u4E3B\u8981\u5185\u5BB9\u5C31\u662F\u62DB\u5546\u7BA1\u7406\u3001\u7269\u4E1A\u7BA1\u7406\u3001\u73B0\u573A\u8425\u8FD0\u8FC7\u7BA1\u7406\u4EE5\u53CA\u4F01\u5212\u5BA3\u4F20\uFF08\u6253\u5E7F\u544A\uFF0C\u505A\u63A8\u5E7F\uFF09\uFF0C\u7BA1\u7406\u7684\u6838\u5FC3\u70B9\u5728\u5546\u6237\uFF0C\u90FD\u662F\u56F4\u7ED5\u5546\u6237\u8FDB\u884C\u7684\u3002\u5178\u578B\u7684\u6848\u4F8B\u5C31\u662F\u5168\u56FD\u5404\u5730\u5404\u79CD\u5404\u6837\u7684\u5BB6\u5C45\u5EFA\u6750\u8001\u5E02\u573A\uFF0C\u5B83\u4EEC\u7684\u7279\u5F81\u662F\uFF1A\u8857\u94FA\u5F0F\u7684\uFF0C\u5206\u6563\u7684\uFF0C\u5B9A\u4F4D\u4E2D\u4F4E\u7AEF\u7684\u3002\u73B0\u4EE3\u5BB6\u5C45\u5356\u573A\u867D\u7136\u4FDD\u7559\u4E86\u51FA\u79DF\u7684\u6A21\u5F0F\uFF0C\u4F46\u5F80\u5F80\u66F4\u5F3A\u8C03\u5546\u573A\u5316\u7BA1\u7406\u7684\u5185\u5BB9\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u201C\u5E02\u573A\u5316\u7ECF\u8425\u3001\u5546\u573A\u5316\u7BA1\u7406\u201D\u3002\u5176\u4E2D\u5546\u573A\u5316\u7BA1\u7406\u7684\u5185\u5BB9\u5C31\u662F\u7EDF\u4E00\u6536\u94F6\uFF0C\u7EDF\u4E00\u4FC3\u9500\u7BA1\u7406\uFF08\u4E0D\u4EC5\u4EC5\u7EDF\u4E00\u7684\u5BF9\u5916\u5E7F\u544A\u4EE5\u53CA\u5BA3\u4F20\uFF0C\u66F4\u5F3A\u8C03\u6574\u4E2A\u5546\u573A\u7EDF\u4E00\u7684\u4FC3\u9500\u6D3B\u52A8\uFF0C\u4F8B\u5982\u6EE1\u51CF\u3001\u8FD4\u73B0\u3001\u6298\u6263\u3001\u514D\u5355\u3001\u62BD\u5956\u3001\u9001\u8D60\u3001\u4F1A\u5458\u7B49\uFF09\uFF0C\u7EDF\u4E00\u552E\u540E\u670D\u52A1\uFF0C\u751A\u81F3\u662F\u7EDF\u4E00\u7269\u6D41\u7B49\uFF0C\u670D\u52A1\u7684\u6838\u5FC3\u70B9\u662F\u6D88\u8D39\u8005\uFF0C\u8FD9\u4E9B\u63AA\u65BD\u90FD\u662F\u56F4\u7ED5\u5982\u4F55\u66F4\u597D\u7684\u5438\u5F15\u6D88\u8D39\u8005\uFF0C\u66F4\u597D\u7684\u4E86\u89E3\u6D88\u8D39\u8005\u9700\u6C42\uFF0C\u66F4\u597D\u7684\u670D\u52A1\u6D88\u8D39\u8005\u800C\u8BBE\u7F6E\u7684\u3002\u5178\u578B\u7684\u6848\u4F8B\u5C31\u662F\u7EA2\u661F\u7F8E\u51EF\u9F99\u548C\u5C45\u7136\u4E4B\u5BB6\u8FD9\u6837\u5168\u56FD\u8FDE\u9501\u7684\u5356\u573A\uFF0C\u4ED6\u4EEC\u7684\u7279\u5F81\u5C31\u662F\uFF1B\u5355\u4F53\u72EC\u680B\u5168\u5C01\u95ED\u7684\uFF0C\u5B9A\u4F4D\u4E2D\u9AD8\u7AEF\u7684\uFF0C\u6709\u7EDF\u4E00\u7684\u5BF9\u5916\u5F62\u8C61\u7B49\u3002\u5728\u8FD9\u4E9B\u5546\u573A\u5316\u7BA1\u7406\u7684\u63AA\u65BD\u5F53\u4E2D\uFF0C\u7EDF\u4E00\u6536\u94F6\u662F\u5176\u4E2D\u7684\u6838\u5FC3\uFF0C\u6CA1\u6709\u7EDF\u4E00\u6536\u94F6\u4F5C\u4E3A\u524D\u63D0\uFF0C\u7EDF\u4E00\u7684\u4FC3\u9500\u4EE5\u53CA\u552E\u540E\u670D\u52A1\u7B49\u90FD\u662F\u56E0\u4E3A\u7F3A\u5C11\u6570\u636E\u800C\u6D41\u4E8E\u5F62\u5F0F\u3002</span></p><p style="${ssrRenderStyle({ "text-indent": "28px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u4ECE\u7EDF\u4E00\u6536\u94F6\u8FD9\u4E00\u70B9\u6765\u8BF4\uFF0C\u57FA\u672C\u4E0A\u6BCF\u4E2A\u7C7B\u4F3C\u4E8E\u7EA2\u661F\u7F8E\u51EF\u9F99\u548C\u5C45\u7136\u4E4B\u5BB6\u8FD9\u6837\u5B9A\u4F4D\u7684\u5BB6\u5C45\u5356\u573A\u90FD\u5728\u63A8\uFF0C\u4F46\u5F88\u5C11\u6709\u5356\u573A\u80FD\u591F\u5B9E\u73B0100%\u7EDF\u4E00\u6536\u94F6\u3002\u636E\u7B14\u8005\u4E86\u89E3\uFF0C\u5C45\u7136\u4E4B\u5BB6\u5728\u4E00\u4E9B\u5F3A\u52BF\u5730\u533A\u5F3A\u52BF\u5356\u573A\u4E2D\u63A8\u5E7F\u7684\u597D\u4E00\u70B9\uFF0C\u7EDF\u4E00\u6536\u94F6\u4F30\u8BA1\u80FD\u8FBE\u523090%\u4EE5\u4E0A\uFF0C\u4F46\u5176\u4ED6\u975E\u5F3A\u52BF\u5356\u573A\u7684\u63A8\u5E7F\u6548\u679C\u5F80\u5F80\u5C31\u4F1A\u5DEE\u4E00\u4E9B\uFF0C\u7EA2\u661F\u7F8E\u51EF\u9F99\u76F4\u8425\u5E97\u548C\u52A0\u76DF\u5E97\u7684\u7EDF\u4E00\u6536\u94F6\u7387\u5F80\u5F80\u4E5F\u4E0D\u4E00\u6837\u3002\u6240\u4EE5\uFF0C\u6BCF\u4E2A\u57CE\u5E02\u5BB6\u5C45\u5EFA\u6750\u6D88\u8D39\u4E60\u60EF\u3001\u7ECF\u9500\u5546\u8BA4\u8BC6\u3001\u7A0E\u52A1\u73AF\u5883\u4EE5\u53CA\u5356\u573A\u7684\u5F3A\u5F31\u7A0B\u5EA6\u4E0D\u9AD8\uFF0C\u63A8\u5E7F\u7EDF\u4E00\u6536\u94F6\u7684\u96BE\u5EA6\u4E5F\u662F\u4E0D\u540C\u7684\u3002\u5BA2\u89C2\u6765\u8BF4\uFF0C\u5BB6\u5C45\u5356\u573A\u5B9E\u73B0100%\u7EDF\u4E00\u6536\u94F6\u7387\u57FA\u672C\u662F\u4E0D\u73B0\u5B9E\u7684\uFF0C\u4F46\u662F\u5E76\u4E0D\u4EE3\u8868\u505A\u4E0D\u5230100%\u7EDF\u4E00\u6536\u94F6\uFF0C\u5BB6\u5C45\u5356\u573A\u5C31\u6CA1\u6709\u5FC5\u8981\u641E\u7EDF\u4E00\u6536\u94F6\uFF0C\u56E0\u4E3A\u6709\u6570\u636E\u4F46\u662F\u4E0D\u5B8C\u6574\u548C\u6CA1\u6709\u6570\u636E\u5168\u9760\u7ECF\u9A8C\u731C\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u3002<span style="${ssrRenderStyle({ "color": "red" })}"${_scopeId}>\u73B0\u5728\u5BB6\u5C45\u5356\u573A\u4FC3\u9500\u671F\u95F4\u57FA\u672C\u662F\u7EDF\u4E00\u6536\u94F6\u7684\uFF0C\u800C\u5546\u6237\u5728\u4FC3\u9500\u671F\u95F4\u7684\u9500\u552E\u989D\u5F80\u5F80\u80FD\u5360\u5230\u5168\u90E8\u9500\u552E\u989D\u768460%-70%\uFF0C\u6240\u4EE5\u53EA\u8981\u80FD\u6293\u4F4F\u8FD9\u90E8\u5206\u6570\u636E\uFF0C\u90A3\u4E48\u7EDF\u4E00\u6536\u94F6\u5C31\u4E0D\u662F\u6446\u8BBE\u3002</span>\u4E0B\u9762\u6211\u5C06\u901A\u8FC7\u4ECE\u5546\u6237\u4EE5\u53CA\u6D88\u8D39\u8005\u7684\u89D2\u5EA6\uFF0C\u5206\u6790\u8FD9\u5176\u4E2D\u7684\u5173\u952E\u70B9\u5728\u54EA\u91CC\uFF0C\u4EE5\u53CA\u76F8\u5BF9\u5E94\u7684\u529E\u6CD5\u6709\u54EA\u4E9B\u3002</span></p><p style="${ssrRenderStyle({ "text-indent": "28px" })}"${_scopeId}><strong${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#31849b" })}"${_scopeId}>\u4E00\u3001\u5BF9\u4E8E\u5546\u6237\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u7EDF\u4E00\u6536\u94F6\u7684\u62C5\u5FC3\u5F80\u5F80\u6709\u4EE5\u4E0B\u51E0\u70B9\uFF1A</span></strong></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>1.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5546\u573A\u901A\u8FC7\u7EDF\u4E00\u6536\u94F6\uFF0C\u77E5\u9053\u5546\u6237\u7684\u9500\u552E\u60C5\u51B5\uFF0C\u5546\u6237\u9500\u552E\u7684\u597D\uFF0C\u6709\u53EF\u80FD\u88AB\u6DA8\u79DF\u91D1\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>2.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u6536\u94F6\u6B3E\u4EA4\u5230\u5546\u573A\u540E\uFF0C\u5546\u573A\u4E0D\u80FD\u6309\u7167\u7EA6\u5B9A\u53CA\u65F6\u8FD4\u6B3E\uFF0C\u751A\u81F3\u4F1A\u4E71\u6263\u5404\u79CD\u5404\u6837\u7684\u8D39\u7528\uFF0C\u5F71\u54CD\u5546\u6237\u7684\u8D44\u91D1\u6D41\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>3.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5546\u6237\u57FA\u672C\u90FD\u662F\u4E2A\u4F53\u6237\uFF0C\u4EA4\u7684\u662F\u5B9A\u989D\u7A0E\uFF0C\u5982\u679C\u9500\u552E\u989D\u5168\u90E8\u638C\u63E1\u5728\u5546\u573A\u624B\u4E2D\uFF0C\u4E00\u65E6\u5BF9\u5916\u6CC4\u9732\uFF0C\u5C31\u4F1A\u9762\u4E34\u7A0E\u52A1\u98CE\u9669\u95EE\u9898\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>4.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u4E0D\u540C\u4E8E\u5176\u4ED6\u96F6\u552E\u4E1A\u6001\uFF08\u4F8B\u5982\u8D85\u5E02\u3001\u767E\u8D27\uFF09\uFF0C\u5168\u90E8\u662F\u8BA2\u5355\u5F0F\u4EA4\u6613\uFF08\u8D85\u5E02\u548C\u767E\u8D27\u90FD\u662F\u73B0\u8D27\u4EA4\u6613\uFF0C\u6CA1\u6709\u8BA2\u5355\uFF09\uFF0C\u5148\u6709\u8BA2\u5355\uFF0C\u624D\u6709\u4EA4\u6B3E\uFF0C\u4EA4\u6B3E\u5F80\u5F80\u4E5F\u53EA\u662F\u5B9A\u91D1\uFF0C\u4E4B\u540E\u8FD8\u6709\u4E8C\u6B21\u4EA4\u6B3E\u7684\u95EE\u9898\u3002\u56E0\u4E3A\u9500\u552E\u8BA2\u5355\u4E0A\u5F80\u5F80\u9700\u8981\u8BB0\u5F55\u6D88\u8D39\u8005\u7684\u59D3\u540D\u3001\u7535\u8BDD\u4EE5\u53CA\u9001\u8D27\u5730\u5740\uFF0C\u6240\u4EE5\u5F88\u591A\u5546\u6237\u4E5F\u4E0D\u613F\u610F\u628A\u8FD9\u4E9B\u5BA2\u6237\u4FE1\u606F\u5F00\u653E\u7ED9\u5546\u573A\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "28px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u6240\u4EE5\uFF0C\u5BB6\u5C45\u5356\u573A\u8981\u63A8\u5E7F\u597D\u7EDF\u4E00\u6536\u94F6\uFF0C\u5FC5\u987B\u9488\u5BF9\u5546\u6237\u7684\u8FD9\u51E0\u70B9\u62C5\u5FC3\uFF0C\u505A\u597D\u6C9F\u901A\u5DE5\u4F5C\uFF0C\u62FF\u51FA\u5207\u5B9E\u6709\u6548\u5177\u4F53\u53EF\u6267\u884C\u7684\u529E\u6CD5\uFF0C\u5177\u4F53\u5EFA\u8BAE\u5982\u4E0B\uFF1A</span></p><p style="${ssrRenderStyle({ "margin-left": "76px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>1.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><strong${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#4f6228" })}"${_scopeId}>\u5546\u573A\u7684\u79DF\u91D1\u8C03\u6574\u5E94\u505A\u5230\u6709\u636E\u53EF\u4F9D\uFF0C\u6309\u7167\u5408\u540C\u7EA6\u5B9A\u4EE5\u53CA\u5171\u8D62\u7684\u539F\u5219\u8FDB\u884C\u3002</span></strong><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5546\u6237\u53EA\u8981\u5728\u5546\u573A\u8D5A\u5230\u94B1\uFF0C\u88AB\u6DA8\u70B9\u79DF\u91D1\u80AF\u5B9A\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u3002\u5546\u6237\u4E0D\u80FD\u63A5\u53D7\u7684\u662F\u65E0\u5E8F\u7684\u4E0D\u8BB2\u7406\u7684\u4E71\u6DA8\u79DF\u91D1\uFF0C\u4E0D\u7BA1\u5546\u6237\u7684\u6B7B\u6D3B\u3002\u6240\u4EE5\uFF0C\u5546\u573A\u5728\u8FD9\u4E2A\u95EE\u9898\u4E0A\u5FC5\u987B\u505A\u597D\u5546\u6237\u7684\u6C9F\u901A\u5DE5\u4F5C\u4EE5\u53CA\u505A\u51FA\u76F8\u5E94\u7684\u627F\u8BFA\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "76px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>2.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><strong${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#4f6228" })}"${_scopeId}>\u5546\u6237\u7684\u7EDF\u4E00\u6536\u94F6\u6B3E\u4EA4\u5230\u5546\u573A\u540E\uFF0C\u5546\u573A\u5FC5\u987B\u6309\u7167\u7EA6\u5B9A\u7684\u8FD4\u6B3E\u671F\u95F4\u8FDB\u884C\u8FD4\u6B3E\uFF0C</span></strong><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u4E00\u822C\u662F\u6309\u5468\u3001\u5341\u5929\u6216\u8005\u534A\u4E2A\u6708\u8FD4\u4E00\u6B21\uFF0C\u9700\u8981\u6263\u51CF\u7684\u76F8\u5173\u8D39\u7528\u4E5F\u5E94\u4E0E\u5546\u6237\u6838\u5BF9\u6E05\u695A\uFF0C\u8FD4\u6B3E\u6D41\u7A0B\u5FC5\u987B\u505A\u5230\u6807\u51C6\u3001\u53CA\u65F6\u3001\u51C6\u786E\uFF0C\u4E0D\u5F97\u65E0\u6545\u5360\u7528\u6216\u8005\u632A\u7528\u5546\u6237\u6536\u94F6\u6B3E\u3002\u5546\u573A\u4E00\u65E6\u4E27\u5931\u4FE1\u8A89\uFF0C\u90A3\u4E48\u5546\u6237\u7684\u4FE1\u4EFB\u5C06\u4E00\u53BB\u4E0D\u8FD4\uFF0C\u8DD1\u5355\u4E0D\u53EF\u907F\u514D\u3002\u6240\u4EE5\uFF0C\u5546\u573A\u5728\u8FD9\u4E2A\u95EE\u9898\u4E0A\u540C\u6837\u5FC5\u987B\u505A\u597D\u5546\u6237\u7684\u6C9F\u901A\u5DE5\u4F5C\u4EE5\u53CA\u505A\u51FA\u76F8\u5E94\u7684\u627F\u8BFA\uFF0C\u540C\u65F6\u8003\u8651\u5230\u6536\u94F6\u4EE5\u53CA\u8FD4\u6B3E\u5DE5\u4F5C\u7684\u590D\u6742\u6027\uFF0C\u5FC5\u987B\u8981\u914D\u5957\u4E0A\u7EBF\u76F8\u5173\u7684\u8F6F\u4EF6\u7CFB\u7EDF\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "76px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>3.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5173\u4E8E\u7EDF\u4E00\u6536\u94F6\u7684\u7A0E\u52A1\u98CE\u9669\u95EE\u9898\uFF0C\u5404\u5730\u7684\u7A0E\u52A1\u73AF\u5883\u4E0D\u540C\uFF0C\u6700\u597D\u7684\u65B9\u5F0F\u662F<strong${_scopeId}><span style="${ssrRenderStyle({ "color": "#4f6228" })}"${_scopeId}>\u5546\u573A\u4E0E\u7A0E\u52A1\u5C40\u6C9F\u901A\uFF0C\u5546\u573A\u3001\u7A0E\u52A1\u4EE5\u53CA\u5546\u6237\u4E4B\u95F4\u8FBE\u6210\u4EE3\u5F81\u4EE3\u7F34\u7684\u534F\u8BAE\u3002</span></strong>\u53E6\u5916\u5C31\u662F\u4E0A\u7EBF\u76F8\u5173\u7684\u8F6F\u4EF6\u7CFB\u7EDF\uFF0C\u5B9E\u65BD\u76F8\u5E94\u7684\u907F\u7A0E\u63AA\u65BD\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "76px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>4.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5173\u4E8E\u5546\u6237\u62C5\u5FC3\u81EA\u5DF1\u7684\u5BA2\u6237\u4FE1\u606F\u6CC4\u9732\u95EE\u9898\uFF0C\u9996\u5148<strong${_scopeId}><span style="${ssrRenderStyle({ "color": "#4f6228" })}"${_scopeId}>\u5546\u573A\u8981\u5F3A\u8C03\u83B7\u5F97\u6D88\u8D39\u8005\u7684\u4FE1\u606F\u662F\u4E3A\u4E86\u5206\u6790\u9500\u552E\u6570\u636E\u3001\u4E86\u89E3\u6D88\u8D39\u8005\u9700\u6C42\u4EE5\u53CA\u63A8\u5E7F\u5148\u884C\u8D54\u4ED8\u7B49\u552E\u540E\u624B\u6BB5\u6240\u91C7\u53D6\u7684\u5FC5\u8981\u63AA\u65BD\u3002\u5176\u6B21\u901A\u8FC7\u4E0A\u7EBF\u76F8\u5173\u7684\u8F6F\u4EF6\u7CFB\u7EDF\uFF0C\u5546\u573A\u5FC5\u987B\u505A\u597D\u6570\u636E\u6743\u9650\u7BA1\u63A7\u3002</span></strong></span></p><p style="${ssrRenderStyle({ "text-indent": "28px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u9664\u6B64\u4E4B\u5916\uFF0C\u5546\u573A\u8981\u60F3\u5B9E\u73B0\u7EDF\u4E00\u6536\u94F6\uFF0C\u9664\u4E86\u89E3\u51B3\u597D\u4EE5\u4E0A\u51E0\u70B9\u5546\u6237\u7684\u987E\u8651\u4E4B\u5916\uFF0C\u8FD8\u5FC5\u987B\u6709\u5176\u4ED6\u7684\u63A8\u5E7F\u624B\u6BB5\uFF0C\u4F8B\u5982\uFF1A</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>1.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u9488\u5BF9\u53C2\u52A0\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u5546\u6237\uFF0C\u7ED9\u4E88\u76F8\u5E94\u7684\u79DF\u91D1\u6216\u8005\u5176\u4ED6\u8D39\u7528\u4F18\u60E0\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>2.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u9488\u5BF9\u53C2\u52A0\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u5546\u6237\uFF0C\u5546\u573A\u5728\u5E7F\u544A\u5BA3\u4F20\u4EE5\u53CA\u4FC3\u9500\u6D3B\u52A8\u7ED9\u4E88\u652F\u6301\uFF0C\u5546\u573A\u7684\u6240\u6709\u8425\u9500\u6D3B\u52A8\u8BBE\u7F6E\u90FD\u4EE5\u7EDF\u4E00\u6536\u94F6\u4E3A\u524D\u63D0\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>3.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5546\u6237\u5C06\u6536\u94F6\u6B3E\u4EA4\u5230\u5546\u573A\uFF0C\u5728\u8FD4\u6B3E\u7ED3\u7B97\u65F6\uFF0C\u5546\u573A\u7ED9\u4E88\u5546\u6237\u9AD8\u4E8E\u94F6\u884C\u5B58\u6B3E\u5229\u606F\u7684\u56DE\u62A5\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>4.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5BF9\u4E8E\u4EAB\u53D7\u4E86\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u76F8\u5173\u4F18\u60E0\u653F\u7B56\u4F46\u53C8\u5F00\u79C1\u5355\u7684\u5546\u6237\uFF0C\u5546\u573A\u8981\u6307\u5B9A\u76F8\u5E94\u7684\u5904\u7F5A\u63AA\u65BD\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>5.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5546\u573A\u7684POS\u5FC5\u987B\u7531\u5546\u573A\u7EDF\u4E00\u6307\u5B9A\u94F6\u884C\u914D\u7F6E\uFF0C\u5546\u6237\u4E0D\u5F97\u79C1\u8BBEPOS\uFF0C\u56E0\u4E3A\u5BB6\u5C45\u5EFA\u6750\u57FA\u672C\u4E0A\u662F\u5927\u989D\u6D88\u8D39\uFF0C\u4EE5\u5237\u5361\u4E3A\u4E3B\uFF0C\u6240\u4EE5\u5982\u679C\u80FD\u7BA1\u4F4F\u8FD9\u4E00\u70B9\uFF0C\u4E5F\u6709\u5229\u4E8E\u7EDF\u4E00\u6536\u94F6\u7387\u7684\u63D0\u5347\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>6.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5BF9\u4E8E\u6709\u4E9B\u95E8\u5E97\u591A\u4EE5\u53CA\u7ECF\u5E38\u4E0D\u5728\u5E97\u7684\u7ECF\u9500\u5546\u8001\u677F\uFF0C\u628A\u6BCF\u5929\u7684\u9500\u552E\u6B3E\u4EA4\u7ED9\u5546\u573A\u5F80\u5F80\u6BD4\u653E\u5728\u5BFC\u8D2D\u5458\u90A3\u91CC\u66F4\u8BA9\u4ED6\u4EEC\u653E\u5FC3\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "30px" })}"${_scopeId}><strong${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#31849b" })}"${_scopeId}>\u4E8C\u3001\u5BF9\u4E8E\u6D88\u8D39\u8005\u6765\u8BF4\uFF0C\u5728\u83B7\u77E5\u5546\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u63AA\u65BD\u540E\uFF0C\u4ED6\u4EEC\u7EDD\u5927\u90E8\u5206\u65F6\u5019\u662F\u66F4\u503E\u5411\u4E8E\u628A\u94B1\u4EA4\u5230\u5546\u573A\u7684\uFF0C\u56E0\u4E3A\u6D88\u8D39\u8005\u603B\u662F\u5E0C\u671B\u6D88\u8D39\u6709\u4FDD\u969C\uFF0C\u540C\u65F6\u80FD\u4EAB\u53D7\u5546\u573A\u7684\u552E\u540E\u670D\u52A1\u627F\u8BFA\u3002</span></strong><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5982\u679C\u628A\u94B1\u4EA4\u7ED9\u5546\u6237\uFF0C\u5546\u6237\u643A\u6B3E\u9003\u8DD1\uFF0C\u6216\u8005\u5546\u6237\u79BB\u573A\u540E\uFF0C\u4EA7\u54C1\u51FA\u73B0\u552E\u540E\u95EE\u9898\uFF0C\u90A3\u4E48\u95EE\u9898\u5C31\u4F1A\u5F88\u9EBB\u70E6\u3002\u4F46\u662F\u4E00\u65E6\u6D88\u8D39\u8005\u8BA4\u4E3A\u5546\u573A\u7684\u552E\u540E\u670D\u52A1\u63AA\u65BD\u548C\u552E\u540E\u627F\u8BFA\u90FD\u662F\u5F62\u540C\u865A\u8BBE\u7684\uFF0C\u5546\u6237\u53C8\u627F\u8BFA\u6B3E\u9879\u4E0D\u4EA4\u5230\u5546\u573A\u53EF\u4EE5\u4EAB\u53D7\u66F4\u591A\u6298\u6263\u7684\u8BDD\uFF0C\u6D88\u8D39\u8005\u5F80\u5F80\u5C31\u4F1A\u59A5\u534F\u3002\u6240\u4EE5\uFF0C\u9488\u5BF9\u6D88\u8D39\u8005\u7684\u5FC3\u7406\uFF0C\u5EFA\u8BAE\u5546\u573A\u91C7\u53D6\u4EE5\u4E0B\u51E0\u79CD\u63AA\u65BD\uFF1A</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>1.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5728\u5546\u573A\u5185\u5404\u4E2A\u9192\u76EE\u4F4D\u7F6E\u8981\u8BBE\u7F6E\u7EDF\u4E00\u6536\u94F6\u7684\u6807\u8BC6\uFF0C\u4E0D\u65AD\u7684\u5FAA\u73AF\u5E7F\u64AD\u63D0\u9192\u4EE5\u53CA\u5BA3\u4F20\uFF0C\u5BFC\u8D2D\u624B\u518C\u63D0\u9192\uFF0C\u6BCF\u4E2A\u4E13\u5356\u5E97\u9192\u76EE\u4F4D\u7F6E\u7684\u7EDF\u4E00\u6536\u94F6\u6807\u8BC6\u63D0\u9192\u7B49\u7B49\uFF0C\u6807\u8BC6\u63D0\u9192\u5FC5\u987B\u505A\u5230\u4F4D\uFF0C\u8BA9\u6D88\u8D39\u8005\u4ECE\u4E00\u8FDB\u5165\u5546\u573A\u5C31\u4E0D\u65AD\u63A5\u53D7\u5173\u4E8E\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u5BA3\u4F20\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>2.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u5546\u573A\u7684\u201C\u5148\u884C\u8D54\u4ED8\u201D\u3001\u201C\u9001\u8D27\u96F6\u5EF6\u8FDF\u201D\u3001\u201C\u552E\u51FA\u5546\u54C1\u5168\u8D1F\u8D23\u201D\u7B49\u552E\u540E\u670D\u52A1\u627F\u8BFA\u5FC5\u987B\u843D\u5230\u5B9E\u5904\uFF0C\u540C\u65F6\u9488\u5BF9\u6BCF\u9879\u670D\u52A1\u5185\u5BB9\u6811\u7ACB\u5178\u578B\u6848\u4F8B\uFF0C\u4E0D\u65AD\u7684\u5BA3\u4F20\uFF0C\u4F7F\u5546\u573A\u7684\u552E\u540E\u670D\u52A1\u53E3\u7891\u6DF1\u5165\u4EBA\u5FC3\u3002\u73B0\u5728\u6D88\u8D39\u8005\u5BF9\u4E8E\u552E\u540E\u670D\u52A1\u7684\u8D8A\u6765\u8D8A\u91CD\u89C6\uFF0C\u6240\u4EE5\u5982\u679C\u80FD\u5728\u552E\u540E\u670D\u52A1\u4E0A\u5F62\u6210\u53E3\u7891\uFF0C\u90A3\u4E48\u6D88\u8D39\u8005\u5C31\u4F1A\u66F4\u63A5\u53D7\u5546\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "78px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>3.<span style="${ssrRenderStyle({ "font-size": "9px" })}"${_scopeId}></span></span><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u9488\u5BF9\u53C2\u52A0\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u6D88\u8D39\u8005\uFF0C\u9664\u4E86\u4FC3\u9500\u671F\u95F4\u53EF\u4EE5\u4EAB\u53D7\u5546\u573A\u7684\u4F18\u60E0\u653F\u7B56\u548C\u8865\u8D34\u5916\uFF0C\u5E73\u65F6\u4E5F\u53EF\u4EE5\u4E3A\u53C2\u52A0\u7EDF\u4E00\u6536\u94F6\u7684\u6D88\u8D39\u8005\u8BBE\u7F6E\u4E00\u4E9B\u9488\u5BF9\u6027\u7684\u4F18\u60E0\u6D3B\u52A8\u3002\u540C\u65F6\u5546\u573A\u8FD8\u53EF\u4EE5\u8054\u5408\u767E\u8D27\u3001\u8D85\u5E02\u6216\u8005\u5BB6\u7535\u7B49\u5176\u4ED6\u96F6\u552E\u4E1A\u6001\u4E00\u8D77\u53D1\u884C\u4F1A\u5458\u5361\u7B49\u5404\u79CD\u6D3B\u52A8\uFF0C\u53D1\u5C55\u5546\u573A\u4F1A\u5458\uFF0C\u91CD\u70B9\u4E0D\u662F\u4E8C\u6B21\u9500\u552E\uFF0C\u66F4\u591A\u7684\u662F\u901A\u8FC7\u670D\u52A1\u5F62\u6210\u53E3\u7891\uFF0C\u6700\u7EC8\u5F62\u6210\u6D88\u8D39\u8005\u8F6C\u4ECB\u7ECD\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "54px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}></span></p><p style="${ssrRenderStyle({ "margin-left": "54px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u7EDF\u4E00\u6536\u94F6\u7684\u5BF9\u5546\u573A\u7684\u597D\u5904\u4E0D\u8A00\u800C\u55BB\uFF0C\u7EDD\u5927\u90E8\u5206\u5B9A\u4F4D\u4E2D\u9AD8\u7AEF\u7684\u5BB6\u5C45\u5356\u573A\u4E5F\u5E0C\u671B\u63A8\u5E7F\u7EDF\u4E00\u6536\u94F6\uFF0C\u4F46\u5F80\u5F80\u7531\u4E8E\u5546\u6237\u7684\u62B5\u5236\uFF0C\u6D88\u8D39\u8005\u7684\u8BA4\u53EF\uFF0C\u914D\u5408\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u7684\u7BA1\u7406\u5236\u5EA6\u3001\u6D41\u7A0B\u548C\u7BA1\u7406\u624B\u6BB5\u4E0D\u5230\u4F4D\uFF0C\u4EE5\u53CA\u6CA1\u6709\u6210\u719F\u7684\u8F6F\u4EF6\u7CFB\u7EDF\u7B49\u539F\u56E0\u6700\u7EC8\u6D41\u4E8E\u5F62\u5F0F\uFF0C\u4E0D\u4E86\u4E86\u4E4B\u3002\u7B14\u8005\u56E0\u4E3A\u8D1F\u8D23\u5168\u56FD\u5BB6\u5C45\u5356\u573A\u7684\u4FE1\u606F\u5316\u63A8\u5E7F\u5DE5\u4F5C\uFF0C\u8D70\u8BBF\u8FC7\u8FD1\u767E\u4E2A\u5927\u4E2D\u57CE\u5E02\u7684100\u591A\u5BB6\u5BB6\u5C45\u5356\u573A\uFF0C\u5173\u4E8E\u7EDF\u4E00\u6536\u94F6\u7684\u95EE\u9898\u8DDF\u5F88\u591A\u5BB6\u5C45\u5356\u573A\u7684\u7BA1\u7406\u8005\u4EEC\u90FD\u6DF1\u5165\u4EA4\u6D41\u8FC7\u3002\u672C\u6587\u7684\u5F88\u591A\u89C2\u70B9\u548C\u63AA\u65BD\u6765\u6E90\u4E8E\u4ED6\u4EEC\u63A8\u5E7F\u7ECF\u9A8C\u7684\u603B\u7ED3\uFF0C\u7531\u4E8E\u5404\u5730\u7684\u5E02\u573A\u73AF\u5883\u4E0D\u4E00\u6837\uFF0C\u80AF\u5B9A\u662F\u65E0\u6CD5\u666E\u904D\u9002\u7528\u7684\u3002\u5E0C\u671B\u5C31\u6B64\u95EE\u9898\u6709\u66F4\u597D\u89E3\u51B3\u529E\u6CD5\u7684\u5BB6\u5C45\u5356\u573A\u7BA1\u7406\u8005\u4EEC\uFF0C\u53EF\u4EE5\u4E0E\u7B14\u8005\u8054\u7CFB\uFF0C\u7B14\u8005\u4E0D\u751A\u611F\u6FC0\u3002</span></p><p style="${ssrRenderStyle({ "margin-left": "54px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}><br${_scopeId}></span></p><p style="${ssrRenderStyle({ "margin-left": "54px", "text-align": "right" })}"${_scopeId}><strong${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}>\u672C\u6587\u4F5C\u8005\uFF1A\u8C22\u5730 \u5BB6\u5C45\u5356\u573A\u4FE1\u606F\u5316\u63A8\u5E7F\u8D1F\u8D23\u4EBA </span></strong></p><p style="${ssrRenderStyle({ "margin-left": "54px", "text-align": "right" })}"${_scopeId}><strong${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}></span></strong></p><p${_scopeId}><br${_scopeId}></p><img class="" style="${ssrRenderStyle({ "float": "right" })}"${ssrRenderAttr("src", _imports_4)} id="lxweixin" alt=""${_scopeId}><p style="${ssrRenderStyle({ "margin-left": "54px" })}"${_scopeId}><span style="${ssrRenderStyle({ "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" })}"${_scopeId}></span><br${_scopeId}></p><fieldset class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 0px 16px", "padding": "8px", "max-width": "100%", "box-sizing": "border-box", "min-width": "0px", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "border": "1px solid rgb(226, 226, 226)", "box-shadow": "rgb(226, 226, 226) 0px 16px 1px -13px", "font-size": "1.5em", "line-height": "1", "text-decoration": "inherit", "background-color": "rgb(255, 255, 255)", "word-wrap": "break-word !important" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 0px 1em", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "width": "4em", "height": "4em", "float": "left", "border-top-left-radius": "50%", "border-top-right-radius": "50%", "border-bottom-right-radius": "50%", "border-bottom-left-radius": "50%", "background-image": "url(../static/xd_img/jjzl.png)", "background-size": "125.24462127685547%", "background-position": "50% 0%", "background-repeat": "no-repeat no-repeat" })}"${_scopeId}></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "right", "float": "right", "display": "inline" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u7CBE\u5F69\u8D44\u8BAF\u5C3D\u5728\u638C\u63E1</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u73B0\u5728\u5C31\u52A0\u5165\u6211\u4EEC\u5427</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u52A0\u5165\u6211\u4EEC\uFF0C\u773C\u754C\u5927\u4E0D\u540C</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u4E3B\u6D41\u51B3\u5B9A\u5F71\u54CD\u529B</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px 16px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.1em", "line-height": "1.2", "text-align": "inherit", "font-size": "0.7em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit", "color": "rgb(255, 255, 255)", "border-color": "rgb(71, 193, 168)", "background-color": "rgb(142, 201, 101)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u4F1A\u5458\u62DB\u52DF\u4EE4</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1em", "font-family": "inherit" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u5BB6\u5177\u4E3B\u6D41</section></section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "clear": "both" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "line-height": "1.6em", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u5FAE\u4FE1\u53F7\uFF1AjiajuzhuliuMF</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "line-height": "1.6em", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u7F51\u5740\uFF1Ahttp://www.jiajuzhuliu.com/</section></section><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "line-height": "1.6em", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" })}"${_scopeId}><section class="tn-Powered-by-XIUMI" style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" })}"${_scopeId}>\u5FAE\u535A\uFF1A\u5BB6\u5177\u4E3B\u6D41\u6742\u5FD7</section></section></section></fieldset><p style="${ssrRenderStyle({ "margin-top": "0px", "margin-bottom": "0px", "padding": "0px", "max-width": "100%", "min-height": "1em", "white-space": "pre-wrap", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}><br style="${ssrRenderStyle({ "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" })}"${_scopeId}></p><p${_scopeId}><br${_scopeId}></p></div><div id="js_sponsor_ad_area"${_scopeId}></div><div class="read-more__area" id="js_more_read_area" style="${ssrRenderStyle({ "display": "none" })}"${_scopeId}></div></div><ul id="js_hotspot_area" class="article_extend_area"${_scopeId}></ul></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "activity row flex-center" }, [
            createVNode("div", { class: "col-12 col-lg-8" }, [
              createVNode("h3", {
                class: "rich_media_title",
                id: "activity-name"
              }, "\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F"),
              createVNode("div", {
                id: "meta_content",
                class: "rich_media_meta_list"
              }, [
                createVNode("span", {
                  id: "copyright_logo",
                  class: "wx_tap_link js_wx_tap_highlight rich_media_meta icon_appmsg_tag appmsg_title_tag weui-wa-hotarea"
                }, "\u539F\u521B"),
                createVNode("span", { class: "rich_media_meta rich_media_meta_text" }, " \u8C22\u5730 "),
                createVNode("span", {
                  class: "rich_media_meta rich_media_meta_nickname",
                  id: "profileBt"
                }, [
                  createVNode("a", {
                    href: "javascript:void(0);",
                    class: "wx_tap_link js_wx_tap_highlight weui-wa-hotarea",
                    id: "js_name"
                  }, " \u5BB6\u5C45\u4E3B\u6D41 ")
                ]),
                createVNode("span", {
                  id: "meta_content_hide_info",
                  class: ""
                }, [
                  createVNode("em", {
                    id: "publish_time",
                    class: "rich_media_meta rich_media_meta_text"
                  }, "2015\u5E7411\u670802\u65E5")
                ])
              ]),
              createVNode("div", {
                id: "page-content",
                class: "rich_media_area_primary"
              }, [
                createVNode("div", { class: "rich_media_area_primary_inner" }, [
                  createVNode("div", {
                    id: "img-content",
                    class: "rich_media_wrp"
                  }, [
                    createVNode("div", {
                      class: "rich_media_content",
                      id: "js_content",
                      style: { "visibility": "visible" }
                    }, [
                      createVNode("p", { style: {} }, [
                        createVNode("strong", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(247, 150, 70)" } }, [
                          createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" } }, [
                            createVNode("span", {
                              class: "main",
                              style: { "margin": "0px", "padding": "2px 2px 2px 6px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-family": "\u5FAE\u8F6F\u96C5\u9ED1", "line-height": "19px", "color": "rgb(255, 255, 255)" }
                            }, [
                              createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "line-height": "0px" } }, "\uFEFF\uFEFF"),
                              createVNode("img", {
                                "data-ke-src": "",
                                "data-ratio": "0.5",
                                "data-w": "22",
                                "data-type": "gif",
                                width: "auto",
                                "data-src": "",
                                style: { "margin": "0px", "padding": "0px", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "visibility": "visible !important", "width": "auto !important" }
                              }),
                              createVNode("span", { style: { "margin": "0px", "padding": "2px 2px 2px 6px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(127, 127, 127)" } }, [
                                createVNode("strong", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, "\u63D0\u793A"),
                                createTextVNode("\uFF1A")
                              ])
                            ]),
                            createVNode("span", { style: { "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(62, 62, 62)", "font-family": "\u5FAE\u8F6F\u96C5\u9ED1", "line-height": "19px" } }, [
                              createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(127, 127, 127)" } }, "\u70B9\u51FB\u4E0A\u65B9"),
                              createVNode("span", { style: { "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, '"'),
                              createVNode("strong", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, [
                                createVNode("span", { style: { "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(0, 112, 192)" } }, "\u5BB6\u5177\u4E3B\u6D41")
                              ]),
                              createVNode("span", { style: { "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, '"'),
                              createVNode("span", { style: { "margin": "0px", "padding": "0px 0px 0px 2px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(0, 187, 236)" } }, "\u2191"),
                              createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(127, 127, 127)" } }, "\u514D\u8D39\u8BA2\u9605\u672C\u520A")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("p", { style: {} }, [
                        createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(227, 108, 9)" } }, [
                          createVNode("strong", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(247, 150, 70)" } }, [
                            createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" } }, "\u5BB6\u5177\u4E3B\u6D41\uFF1A\u52A0\u5165\u6211\u4EEC\uFF0C\u5BB6\u5177\u66F4\u7CBE\u5F69\uFF01")
                          ]),
                          createVNode("strong", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(247, 150, 70)" } }, [
                            createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" } })
                          ]),
                          createVNode("br", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } })
                        ])
                      ]),
                      createVNode("p", { style: {} }, [
                        createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(227, 108, 9)" } }, [
                          createVNode("strong", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, [
                            createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "12px" } })
                          ])
                        ])
                      ]),
                      createVNode("p", { style: {} }, [
                        createVNode("br")
                      ]),
                      createVNode("fieldset", {
                        class: "tn-Powered-by-XIUMI",
                        style: {}
                      }, [
                        createVNode("section", {
                          class: "tn-Powered-by-XIUMI",
                          style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(51, 51, 51)", "border-color": "rgb(71, 193, 168)" }
                        }, [
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "font-size": "1em", "font-family": "inherit", "font-weight": "inherit", "height": "16px" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "left", "border-top-width": "6px", "border-top-style": "solid", "border-color": "rgb(71, 193, 168)", "border-left-width": "6px", "border-left-style": "solid" }
                            }),
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "right", "border-top-width": "6px", "border-top-style": "solid", "border-color": "rgb(71, 193, 168)", "border-right-width": "6px", "border-right-style": "solid" }
                            }),
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "color": "transparent", "clear": "both" }
                            })
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "-13px 3px", "padding": "12px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word", "border": "1px solid rgb(71, 193, 168)", "border-top-left-radius": "6px", "border-top-right-radius": "6px", "border-bottom-right-radius": "6px", "border-bottom-left-radius": "6px", "line-height": "1.4", "word-break": "break-all" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, [
                              createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "color": "rgb(255, 0, 0)", "line-height": "26px", "text-indent": "28px", "background-color": "rgb(255, 249, 239)", "text-align": "justify" } }, [
                                createVNode("p", { style: { "margin-top": "0px", "margin-bottom": "0px", "padding": "0px", "max-width": "100%", "min-height": "1em", "white-space": "pre-wrap", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, [
                                  createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-family": "\u5E7C\u5706", "line-height": "21.111112594604492px", "text-decoration": "inherit" } }, [
                                    createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px", "font-family": "\u5B8B\u4F53" } }),
                                    createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px", "font-family": "\u5B8B\u4F53" } }, [
                                      createVNode("span", { style: { "font-size": "14px", "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u6CA1\u6709\u7EDF\u4E00\u6536\u94F6\u4F5C\u4E3A\u524D\u63D0\uFF0C\u7EDF\u4E00\u7684\u4FC3\u9500\u4EE5\u53CA\u552E\u540E\u670D\u52A1\u7B49\u90FD\u662F\u56E0\u4E3A\u7F3A\u5C11\u6570\u636E\u800C\u6D41\u4E8E\u5F62\u5F0F\u3002")
                                    ]),
                                    createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-family": "\u5B8B\u4F53" } }, [
                                      createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px" } })
                                    ])
                                  ]),
                                  createVNode("span", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important", "font-size": "14px" } }, [
                                    createVNode("br", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } })
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "font-size": "1em", "font-family": "inherit", "font-weight": "inherit", "height": "16px" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "left", "border-bottom-width": "6px", "border-bottom-style": "solid", "border-color": "rgb(71, 193, 168)", "border-left-width": "6px", "border-left-style": "solid" }
                            }),
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "height": "16px", "width": "24px", "float": "right", "border-bottom-width": "6px", "border-bottom-style": "solid", "border-color": "rgb(71, 193, 168)", "border-right-width": "6px", "border-right-style": "solid" }
                            })
                          ])
                        ])
                      ]),
                      createVNode("p", { style: {} }, [
                        createVNode("br", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } })
                      ]),
                      createVNode("p", { style: { "text-indent": "28px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u4F20\u7EDF\u7684\u5BB6\u5C45\u5356\u573A\u7BA1\u7406\u4EE5\u201C\u5E02\u573A\u5316\u7ECF\u8425\u3001\u5E02\u573A\u5316\u7BA1\u7406\u201D\u4E3A\u4E3B\uFF0C\u4E3B\u8981\u5185\u5BB9\u5C31\u662F\u62DB\u5546\u7BA1\u7406\u3001\u7269\u4E1A\u7BA1\u7406\u3001\u73B0\u573A\u8425\u8FD0\u8FC7\u7BA1\u7406\u4EE5\u53CA\u4F01\u5212\u5BA3\u4F20\uFF08\u6253\u5E7F\u544A\uFF0C\u505A\u63A8\u5E7F\uFF09\uFF0C\u7BA1\u7406\u7684\u6838\u5FC3\u70B9\u5728\u5546\u6237\uFF0C\u90FD\u662F\u56F4\u7ED5\u5546\u6237\u8FDB\u884C\u7684\u3002\u5178\u578B\u7684\u6848\u4F8B\u5C31\u662F\u5168\u56FD\u5404\u5730\u5404\u79CD\u5404\u6837\u7684\u5BB6\u5C45\u5EFA\u6750\u8001\u5E02\u573A\uFF0C\u5B83\u4EEC\u7684\u7279\u5F81\u662F\uFF1A\u8857\u94FA\u5F0F\u7684\uFF0C\u5206\u6563\u7684\uFF0C\u5B9A\u4F4D\u4E2D\u4F4E\u7AEF\u7684\u3002\u73B0\u4EE3\u5BB6\u5C45\u5356\u573A\u867D\u7136\u4FDD\u7559\u4E86\u51FA\u79DF\u7684\u6A21\u5F0F\uFF0C\u4F46\u5F80\u5F80\u66F4\u5F3A\u8C03\u5546\u573A\u5316\u7BA1\u7406\u7684\u5185\u5BB9\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u201C\u5E02\u573A\u5316\u7ECF\u8425\u3001\u5546\u573A\u5316\u7BA1\u7406\u201D\u3002\u5176\u4E2D\u5546\u573A\u5316\u7BA1\u7406\u7684\u5185\u5BB9\u5C31\u662F\u7EDF\u4E00\u6536\u94F6\uFF0C\u7EDF\u4E00\u4FC3\u9500\u7BA1\u7406\uFF08\u4E0D\u4EC5\u4EC5\u7EDF\u4E00\u7684\u5BF9\u5916\u5E7F\u544A\u4EE5\u53CA\u5BA3\u4F20\uFF0C\u66F4\u5F3A\u8C03\u6574\u4E2A\u5546\u573A\u7EDF\u4E00\u7684\u4FC3\u9500\u6D3B\u52A8\uFF0C\u4F8B\u5982\u6EE1\u51CF\u3001\u8FD4\u73B0\u3001\u6298\u6263\u3001\u514D\u5355\u3001\u62BD\u5956\u3001\u9001\u8D60\u3001\u4F1A\u5458\u7B49\uFF09\uFF0C\u7EDF\u4E00\u552E\u540E\u670D\u52A1\uFF0C\u751A\u81F3\u662F\u7EDF\u4E00\u7269\u6D41\u7B49\uFF0C\u670D\u52A1\u7684\u6838\u5FC3\u70B9\u662F\u6D88\u8D39\u8005\uFF0C\u8FD9\u4E9B\u63AA\u65BD\u90FD\u662F\u56F4\u7ED5\u5982\u4F55\u66F4\u597D\u7684\u5438\u5F15\u6D88\u8D39\u8005\uFF0C\u66F4\u597D\u7684\u4E86\u89E3\u6D88\u8D39\u8005\u9700\u6C42\uFF0C\u66F4\u597D\u7684\u670D\u52A1\u6D88\u8D39\u8005\u800C\u8BBE\u7F6E\u7684\u3002\u5178\u578B\u7684\u6848\u4F8B\u5C31\u662F\u7EA2\u661F\u7F8E\u51EF\u9F99\u548C\u5C45\u7136\u4E4B\u5BB6\u8FD9\u6837\u5168\u56FD\u8FDE\u9501\u7684\u5356\u573A\uFF0C\u4ED6\u4EEC\u7684\u7279\u5F81\u5C31\u662F\uFF1B\u5355\u4F53\u72EC\u680B\u5168\u5C01\u95ED\u7684\uFF0C\u5B9A\u4F4D\u4E2D\u9AD8\u7AEF\u7684\uFF0C\u6709\u7EDF\u4E00\u7684\u5BF9\u5916\u5F62\u8C61\u7B49\u3002\u5728\u8FD9\u4E9B\u5546\u573A\u5316\u7BA1\u7406\u7684\u63AA\u65BD\u5F53\u4E2D\uFF0C\u7EDF\u4E00\u6536\u94F6\u662F\u5176\u4E2D\u7684\u6838\u5FC3\uFF0C\u6CA1\u6709\u7EDF\u4E00\u6536\u94F6\u4F5C\u4E3A\u524D\u63D0\uFF0C\u7EDF\u4E00\u7684\u4FC3\u9500\u4EE5\u53CA\u552E\u540E\u670D\u52A1\u7B49\u90FD\u662F\u56E0\u4E3A\u7F3A\u5C11\u6570\u636E\u800C\u6D41\u4E8E\u5F62\u5F0F\u3002")
                      ]),
                      createVNode("p", { style: { "text-indent": "28px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("\u4ECE\u7EDF\u4E00\u6536\u94F6\u8FD9\u4E00\u70B9\u6765\u8BF4\uFF0C\u57FA\u672C\u4E0A\u6BCF\u4E2A\u7C7B\u4F3C\u4E8E\u7EA2\u661F\u7F8E\u51EF\u9F99\u548C\u5C45\u7136\u4E4B\u5BB6\u8FD9\u6837\u5B9A\u4F4D\u7684\u5BB6\u5C45\u5356\u573A\u90FD\u5728\u63A8\uFF0C\u4F46\u5F88\u5C11\u6709\u5356\u573A\u80FD\u591F\u5B9E\u73B0100%\u7EDF\u4E00\u6536\u94F6\u3002\u636E\u7B14\u8005\u4E86\u89E3\uFF0C\u5C45\u7136\u4E4B\u5BB6\u5728\u4E00\u4E9B\u5F3A\u52BF\u5730\u533A\u5F3A\u52BF\u5356\u573A\u4E2D\u63A8\u5E7F\u7684\u597D\u4E00\u70B9\uFF0C\u7EDF\u4E00\u6536\u94F6\u4F30\u8BA1\u80FD\u8FBE\u523090%\u4EE5\u4E0A\uFF0C\u4F46\u5176\u4ED6\u975E\u5F3A\u52BF\u5356\u573A\u7684\u63A8\u5E7F\u6548\u679C\u5F80\u5F80\u5C31\u4F1A\u5DEE\u4E00\u4E9B\uFF0C\u7EA2\u661F\u7F8E\u51EF\u9F99\u76F4\u8425\u5E97\u548C\u52A0\u76DF\u5E97\u7684\u7EDF\u4E00\u6536\u94F6\u7387\u5F80\u5F80\u4E5F\u4E0D\u4E00\u6837\u3002\u6240\u4EE5\uFF0C\u6BCF\u4E2A\u57CE\u5E02\u5BB6\u5C45\u5EFA\u6750\u6D88\u8D39\u4E60\u60EF\u3001\u7ECF\u9500\u5546\u8BA4\u8BC6\u3001\u7A0E\u52A1\u73AF\u5883\u4EE5\u53CA\u5356\u573A\u7684\u5F3A\u5F31\u7A0B\u5EA6\u4E0D\u9AD8\uFF0C\u63A8\u5E7F\u7EDF\u4E00\u6536\u94F6\u7684\u96BE\u5EA6\u4E5F\u662F\u4E0D\u540C\u7684\u3002\u5BA2\u89C2\u6765\u8BF4\uFF0C\u5BB6\u5C45\u5356\u573A\u5B9E\u73B0100%\u7EDF\u4E00\u6536\u94F6\u7387\u57FA\u672C\u662F\u4E0D\u73B0\u5B9E\u7684\uFF0C\u4F46\u662F\u5E76\u4E0D\u4EE3\u8868\u505A\u4E0D\u5230100%\u7EDF\u4E00\u6536\u94F6\uFF0C\u5BB6\u5C45\u5356\u573A\u5C31\u6CA1\u6709\u5FC5\u8981\u641E\u7EDF\u4E00\u6536\u94F6\uFF0C\u56E0\u4E3A\u6709\u6570\u636E\u4F46\u662F\u4E0D\u5B8C\u6574\u548C\u6CA1\u6709\u6570\u636E\u5168\u9760\u7ECF\u9A8C\u731C\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u3002"),
                          createVNode("span", { style: { "color": "red" } }, "\u73B0\u5728\u5BB6\u5C45\u5356\u573A\u4FC3\u9500\u671F\u95F4\u57FA\u672C\u662F\u7EDF\u4E00\u6536\u94F6\u7684\uFF0C\u800C\u5546\u6237\u5728\u4FC3\u9500\u671F\u95F4\u7684\u9500\u552E\u989D\u5F80\u5F80\u80FD\u5360\u5230\u5168\u90E8\u9500\u552E\u989D\u768460%-70%\uFF0C\u6240\u4EE5\u53EA\u8981\u80FD\u6293\u4F4F\u8FD9\u90E8\u5206\u6570\u636E\uFF0C\u90A3\u4E48\u7EDF\u4E00\u6536\u94F6\u5C31\u4E0D\u662F\u6446\u8BBE\u3002"),
                          createTextVNode("\u4E0B\u9762\u6211\u5C06\u901A\u8FC7\u4ECE\u5546\u6237\u4EE5\u53CA\u6D88\u8D39\u8005\u7684\u89D2\u5EA6\uFF0C\u5206\u6790\u8FD9\u5176\u4E2D\u7684\u5173\u952E\u70B9\u5728\u54EA\u91CC\uFF0C\u4EE5\u53CA\u76F8\u5BF9\u5E94\u7684\u529E\u6CD5\u6709\u54EA\u4E9B\u3002")
                        ])
                      ]),
                      createVNode("p", { style: { "text-indent": "28px" } }, [
                        createVNode("strong", null, [
                          createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#31849b" } }, "\u4E00\u3001\u5BF9\u4E8E\u5546\u6237\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u7EDF\u4E00\u6536\u94F6\u7684\u62C5\u5FC3\u5F80\u5F80\u6709\u4EE5\u4E0B\u51E0\u70B9\uFF1A")
                        ])
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("1."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5546\u573A\u901A\u8FC7\u7EDF\u4E00\u6536\u94F6\uFF0C\u77E5\u9053\u5546\u6237\u7684\u9500\u552E\u60C5\u51B5\uFF0C\u5546\u6237\u9500\u552E\u7684\u597D\uFF0C\u6709\u53EF\u80FD\u88AB\u6DA8\u79DF\u91D1\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("2."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u6536\u94F6\u6B3E\u4EA4\u5230\u5546\u573A\u540E\uFF0C\u5546\u573A\u4E0D\u80FD\u6309\u7167\u7EA6\u5B9A\u53CA\u65F6\u8FD4\u6B3E\uFF0C\u751A\u81F3\u4F1A\u4E71\u6263\u5404\u79CD\u5404\u6837\u7684\u8D39\u7528\uFF0C\u5F71\u54CD\u5546\u6237\u7684\u8D44\u91D1\u6D41\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("3."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5546\u6237\u57FA\u672C\u90FD\u662F\u4E2A\u4F53\u6237\uFF0C\u4EA4\u7684\u662F\u5B9A\u989D\u7A0E\uFF0C\u5982\u679C\u9500\u552E\u989D\u5168\u90E8\u638C\u63E1\u5728\u5546\u573A\u624B\u4E2D\uFF0C\u4E00\u65E6\u5BF9\u5916\u6CC4\u9732\uFF0C\u5C31\u4F1A\u9762\u4E34\u7A0E\u52A1\u98CE\u9669\u95EE\u9898\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("4."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u4E0D\u540C\u4E8E\u5176\u4ED6\u96F6\u552E\u4E1A\u6001\uFF08\u4F8B\u5982\u8D85\u5E02\u3001\u767E\u8D27\uFF09\uFF0C\u5168\u90E8\u662F\u8BA2\u5355\u5F0F\u4EA4\u6613\uFF08\u8D85\u5E02\u548C\u767E\u8D27\u90FD\u662F\u73B0\u8D27\u4EA4\u6613\uFF0C\u6CA1\u6709\u8BA2\u5355\uFF09\uFF0C\u5148\u6709\u8BA2\u5355\uFF0C\u624D\u6709\u4EA4\u6B3E\uFF0C\u4EA4\u6B3E\u5F80\u5F80\u4E5F\u53EA\u662F\u5B9A\u91D1\uFF0C\u4E4B\u540E\u8FD8\u6709\u4E8C\u6B21\u4EA4\u6B3E\u7684\u95EE\u9898\u3002\u56E0\u4E3A\u9500\u552E\u8BA2\u5355\u4E0A\u5F80\u5F80\u9700\u8981\u8BB0\u5F55\u6D88\u8D39\u8005\u7684\u59D3\u540D\u3001\u7535\u8BDD\u4EE5\u53CA\u9001\u8D27\u5730\u5740\uFF0C\u6240\u4EE5\u5F88\u591A\u5546\u6237\u4E5F\u4E0D\u613F\u610F\u628A\u8FD9\u4E9B\u5BA2\u6237\u4FE1\u606F\u5F00\u653E\u7ED9\u5546\u573A\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "28px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u6240\u4EE5\uFF0C\u5BB6\u5C45\u5356\u573A\u8981\u63A8\u5E7F\u597D\u7EDF\u4E00\u6536\u94F6\uFF0C\u5FC5\u987B\u9488\u5BF9\u5546\u6237\u7684\u8FD9\u51E0\u70B9\u62C5\u5FC3\uFF0C\u505A\u597D\u6C9F\u901A\u5DE5\u4F5C\uFF0C\u62FF\u51FA\u5207\u5B9E\u6709\u6548\u5177\u4F53\u53EF\u6267\u884C\u7684\u529E\u6CD5\uFF0C\u5177\u4F53\u5EFA\u8BAE\u5982\u4E0B\uFF1A")
                      ]),
                      createVNode("p", { style: { "margin-left": "76px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("1."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("strong", null, [
                          createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#4f6228" } }, "\u5546\u573A\u7684\u79DF\u91D1\u8C03\u6574\u5E94\u505A\u5230\u6709\u636E\u53EF\u4F9D\uFF0C\u6309\u7167\u5408\u540C\u7EA6\u5B9A\u4EE5\u53CA\u5171\u8D62\u7684\u539F\u5219\u8FDB\u884C\u3002")
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5546\u6237\u53EA\u8981\u5728\u5546\u573A\u8D5A\u5230\u94B1\uFF0C\u88AB\u6DA8\u70B9\u79DF\u91D1\u80AF\u5B9A\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u3002\u5546\u6237\u4E0D\u80FD\u63A5\u53D7\u7684\u662F\u65E0\u5E8F\u7684\u4E0D\u8BB2\u7406\u7684\u4E71\u6DA8\u79DF\u91D1\uFF0C\u4E0D\u7BA1\u5546\u6237\u7684\u6B7B\u6D3B\u3002\u6240\u4EE5\uFF0C\u5546\u573A\u5728\u8FD9\u4E2A\u95EE\u9898\u4E0A\u5FC5\u987B\u505A\u597D\u5546\u6237\u7684\u6C9F\u901A\u5DE5\u4F5C\u4EE5\u53CA\u505A\u51FA\u76F8\u5E94\u7684\u627F\u8BFA\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "76px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("2."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("strong", null, [
                          createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#4f6228" } }, "\u5546\u6237\u7684\u7EDF\u4E00\u6536\u94F6\u6B3E\u4EA4\u5230\u5546\u573A\u540E\uFF0C\u5546\u573A\u5FC5\u987B\u6309\u7167\u7EA6\u5B9A\u7684\u8FD4\u6B3E\u671F\u95F4\u8FDB\u884C\u8FD4\u6B3E\uFF0C")
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u4E00\u822C\u662F\u6309\u5468\u3001\u5341\u5929\u6216\u8005\u534A\u4E2A\u6708\u8FD4\u4E00\u6B21\uFF0C\u9700\u8981\u6263\u51CF\u7684\u76F8\u5173\u8D39\u7528\u4E5F\u5E94\u4E0E\u5546\u6237\u6838\u5BF9\u6E05\u695A\uFF0C\u8FD4\u6B3E\u6D41\u7A0B\u5FC5\u987B\u505A\u5230\u6807\u51C6\u3001\u53CA\u65F6\u3001\u51C6\u786E\uFF0C\u4E0D\u5F97\u65E0\u6545\u5360\u7528\u6216\u8005\u632A\u7528\u5546\u6237\u6536\u94F6\u6B3E\u3002\u5546\u573A\u4E00\u65E6\u4E27\u5931\u4FE1\u8A89\uFF0C\u90A3\u4E48\u5546\u6237\u7684\u4FE1\u4EFB\u5C06\u4E00\u53BB\u4E0D\u8FD4\uFF0C\u8DD1\u5355\u4E0D\u53EF\u907F\u514D\u3002\u6240\u4EE5\uFF0C\u5546\u573A\u5728\u8FD9\u4E2A\u95EE\u9898\u4E0A\u540C\u6837\u5FC5\u987B\u505A\u597D\u5546\u6237\u7684\u6C9F\u901A\u5DE5\u4F5C\u4EE5\u53CA\u505A\u51FA\u76F8\u5E94\u7684\u627F\u8BFA\uFF0C\u540C\u65F6\u8003\u8651\u5230\u6536\u94F6\u4EE5\u53CA\u8FD4\u6B3E\u5DE5\u4F5C\u7684\u590D\u6742\u6027\uFF0C\u5FC5\u987B\u8981\u914D\u5957\u4E0A\u7EBF\u76F8\u5173\u7684\u8F6F\u4EF6\u7CFB\u7EDF\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "76px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("3."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("\u5173\u4E8E\u7EDF\u4E00\u6536\u94F6\u7684\u7A0E\u52A1\u98CE\u9669\u95EE\u9898\uFF0C\u5404\u5730\u7684\u7A0E\u52A1\u73AF\u5883\u4E0D\u540C\uFF0C\u6700\u597D\u7684\u65B9\u5F0F\u662F"),
                          createVNode("strong", null, [
                            createVNode("span", { style: { "color": "#4f6228" } }, "\u5546\u573A\u4E0E\u7A0E\u52A1\u5C40\u6C9F\u901A\uFF0C\u5546\u573A\u3001\u7A0E\u52A1\u4EE5\u53CA\u5546\u6237\u4E4B\u95F4\u8FBE\u6210\u4EE3\u5F81\u4EE3\u7F34\u7684\u534F\u8BAE\u3002")
                          ]),
                          createTextVNode("\u53E6\u5916\u5C31\u662F\u4E0A\u7EBF\u76F8\u5173\u7684\u8F6F\u4EF6\u7CFB\u7EDF\uFF0C\u5B9E\u65BD\u76F8\u5E94\u7684\u907F\u7A0E\u63AA\u65BD\u3002")
                        ])
                      ]),
                      createVNode("p", { style: { "margin-left": "76px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("4."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("\u5173\u4E8E\u5546\u6237\u62C5\u5FC3\u81EA\u5DF1\u7684\u5BA2\u6237\u4FE1\u606F\u6CC4\u9732\u95EE\u9898\uFF0C\u9996\u5148"),
                          createVNode("strong", null, [
                            createVNode("span", { style: { "color": "#4f6228" } }, "\u5546\u573A\u8981\u5F3A\u8C03\u83B7\u5F97\u6D88\u8D39\u8005\u7684\u4FE1\u606F\u662F\u4E3A\u4E86\u5206\u6790\u9500\u552E\u6570\u636E\u3001\u4E86\u89E3\u6D88\u8D39\u8005\u9700\u6C42\u4EE5\u53CA\u63A8\u5E7F\u5148\u884C\u8D54\u4ED8\u7B49\u552E\u540E\u624B\u6BB5\u6240\u91C7\u53D6\u7684\u5FC5\u8981\u63AA\u65BD\u3002\u5176\u6B21\u901A\u8FC7\u4E0A\u7EBF\u76F8\u5173\u7684\u8F6F\u4EF6\u7CFB\u7EDF\uFF0C\u5546\u573A\u5FC5\u987B\u505A\u597D\u6570\u636E\u6743\u9650\u7BA1\u63A7\u3002")
                          ])
                        ])
                      ]),
                      createVNode("p", { style: { "text-indent": "28px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u9664\u6B64\u4E4B\u5916\uFF0C\u5546\u573A\u8981\u60F3\u5B9E\u73B0\u7EDF\u4E00\u6536\u94F6\uFF0C\u9664\u4E86\u89E3\u51B3\u597D\u4EE5\u4E0A\u51E0\u70B9\u5546\u6237\u7684\u987E\u8651\u4E4B\u5916\uFF0C\u8FD8\u5FC5\u987B\u6709\u5176\u4ED6\u7684\u63A8\u5E7F\u624B\u6BB5\uFF0C\u4F8B\u5982\uFF1A")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("1."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u9488\u5BF9\u53C2\u52A0\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u5546\u6237\uFF0C\u7ED9\u4E88\u76F8\u5E94\u7684\u79DF\u91D1\u6216\u8005\u5176\u4ED6\u8D39\u7528\u4F18\u60E0\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("2."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u9488\u5BF9\u53C2\u52A0\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u5546\u6237\uFF0C\u5546\u573A\u5728\u5E7F\u544A\u5BA3\u4F20\u4EE5\u53CA\u4FC3\u9500\u6D3B\u52A8\u7ED9\u4E88\u652F\u6301\uFF0C\u5546\u573A\u7684\u6240\u6709\u8425\u9500\u6D3B\u52A8\u8BBE\u7F6E\u90FD\u4EE5\u7EDF\u4E00\u6536\u94F6\u4E3A\u524D\u63D0\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("3."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5546\u6237\u5C06\u6536\u94F6\u6B3E\u4EA4\u5230\u5546\u573A\uFF0C\u5728\u8FD4\u6B3E\u7ED3\u7B97\u65F6\uFF0C\u5546\u573A\u7ED9\u4E88\u5546\u6237\u9AD8\u4E8E\u94F6\u884C\u5B58\u6B3E\u5229\u606F\u7684\u56DE\u62A5\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("4."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5BF9\u4E8E\u4EAB\u53D7\u4E86\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u76F8\u5173\u4F18\u60E0\u653F\u7B56\u4F46\u53C8\u5F00\u79C1\u5355\u7684\u5546\u6237\uFF0C\u5546\u573A\u8981\u6307\u5B9A\u76F8\u5E94\u7684\u5904\u7F5A\u63AA\u65BD\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("5."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5546\u573A\u7684POS\u5FC5\u987B\u7531\u5546\u573A\u7EDF\u4E00\u6307\u5B9A\u94F6\u884C\u914D\u7F6E\uFF0C\u5546\u6237\u4E0D\u5F97\u79C1\u8BBEPOS\uFF0C\u56E0\u4E3A\u5BB6\u5C45\u5EFA\u6750\u57FA\u672C\u4E0A\u662F\u5927\u989D\u6D88\u8D39\uFF0C\u4EE5\u5237\u5361\u4E3A\u4E3B\uFF0C\u6240\u4EE5\u5982\u679C\u80FD\u7BA1\u4F4F\u8FD9\u4E00\u70B9\uFF0C\u4E5F\u6709\u5229\u4E8E\u7EDF\u4E00\u6536\u94F6\u7387\u7684\u63D0\u5347\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("6."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5BF9\u4E8E\u6709\u4E9B\u95E8\u5E97\u591A\u4EE5\u53CA\u7ECF\u5E38\u4E0D\u5728\u5E97\u7684\u7ECF\u9500\u5546\u8001\u677F\uFF0C\u628A\u6BCF\u5929\u7684\u9500\u552E\u6B3E\u4EA4\u7ED9\u5546\u573A\u5F80\u5F80\u6BD4\u653E\u5728\u5BFC\u8D2D\u5458\u90A3\u91CC\u66F4\u8BA9\u4ED6\u4EEC\u653E\u5FC3\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "30px" } }, [
                        createVNode("strong", null, [
                          createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif", "color": "#31849b" } }, "\u4E8C\u3001\u5BF9\u4E8E\u6D88\u8D39\u8005\u6765\u8BF4\uFF0C\u5728\u83B7\u77E5\u5546\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u63AA\u65BD\u540E\uFF0C\u4ED6\u4EEC\u7EDD\u5927\u90E8\u5206\u65F6\u5019\u662F\u66F4\u503E\u5411\u4E8E\u628A\u94B1\u4EA4\u5230\u5546\u573A\u7684\uFF0C\u56E0\u4E3A\u6D88\u8D39\u8005\u603B\u662F\u5E0C\u671B\u6D88\u8D39\u6709\u4FDD\u969C\uFF0C\u540C\u65F6\u80FD\u4EAB\u53D7\u5546\u573A\u7684\u552E\u540E\u670D\u52A1\u627F\u8BFA\u3002")
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5982\u679C\u628A\u94B1\u4EA4\u7ED9\u5546\u6237\uFF0C\u5546\u6237\u643A\u6B3E\u9003\u8DD1\uFF0C\u6216\u8005\u5546\u6237\u79BB\u573A\u540E\uFF0C\u4EA7\u54C1\u51FA\u73B0\u552E\u540E\u95EE\u9898\uFF0C\u90A3\u4E48\u95EE\u9898\u5C31\u4F1A\u5F88\u9EBB\u70E6\u3002\u4F46\u662F\u4E00\u65E6\u6D88\u8D39\u8005\u8BA4\u4E3A\u5546\u573A\u7684\u552E\u540E\u670D\u52A1\u63AA\u65BD\u548C\u552E\u540E\u627F\u8BFA\u90FD\u662F\u5F62\u540C\u865A\u8BBE\u7684\uFF0C\u5546\u6237\u53C8\u627F\u8BFA\u6B3E\u9879\u4E0D\u4EA4\u5230\u5546\u573A\u53EF\u4EE5\u4EAB\u53D7\u66F4\u591A\u6298\u6263\u7684\u8BDD\uFF0C\u6D88\u8D39\u8005\u5F80\u5F80\u5C31\u4F1A\u59A5\u534F\u3002\u6240\u4EE5\uFF0C\u9488\u5BF9\u6D88\u8D39\u8005\u7684\u5FC3\u7406\uFF0C\u5EFA\u8BAE\u5546\u573A\u91C7\u53D6\u4EE5\u4E0B\u51E0\u79CD\u63AA\u65BD\uFF1A")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("1."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5728\u5546\u573A\u5185\u5404\u4E2A\u9192\u76EE\u4F4D\u7F6E\u8981\u8BBE\u7F6E\u7EDF\u4E00\u6536\u94F6\u7684\u6807\u8BC6\uFF0C\u4E0D\u65AD\u7684\u5FAA\u73AF\u5E7F\u64AD\u63D0\u9192\u4EE5\u53CA\u5BA3\u4F20\uFF0C\u5BFC\u8D2D\u624B\u518C\u63D0\u9192\uFF0C\u6BCF\u4E2A\u4E13\u5356\u5E97\u9192\u76EE\u4F4D\u7F6E\u7684\u7EDF\u4E00\u6536\u94F6\u6807\u8BC6\u63D0\u9192\u7B49\u7B49\uFF0C\u6807\u8BC6\u63D0\u9192\u5FC5\u987B\u505A\u5230\u4F4D\uFF0C\u8BA9\u6D88\u8D39\u8005\u4ECE\u4E00\u8FDB\u5165\u5546\u573A\u5C31\u4E0D\u65AD\u63A5\u53D7\u5173\u4E8E\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u5BA3\u4F20\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("2."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u5546\u573A\u7684\u201C\u5148\u884C\u8D54\u4ED8\u201D\u3001\u201C\u9001\u8D27\u96F6\u5EF6\u8FDF\u201D\u3001\u201C\u552E\u51FA\u5546\u54C1\u5168\u8D1F\u8D23\u201D\u7B49\u552E\u540E\u670D\u52A1\u627F\u8BFA\u5FC5\u987B\u843D\u5230\u5B9E\u5904\uFF0C\u540C\u65F6\u9488\u5BF9\u6BCF\u9879\u670D\u52A1\u5185\u5BB9\u6811\u7ACB\u5178\u578B\u6848\u4F8B\uFF0C\u4E0D\u65AD\u7684\u5BA3\u4F20\uFF0C\u4F7F\u5546\u573A\u7684\u552E\u540E\u670D\u52A1\u53E3\u7891\u6DF1\u5165\u4EBA\u5FC3\u3002\u73B0\u5728\u6D88\u8D39\u8005\u5BF9\u4E8E\u552E\u540E\u670D\u52A1\u7684\u8D8A\u6765\u8D8A\u91CD\u89C6\uFF0C\u6240\u4EE5\u5982\u679C\u80FD\u5728\u552E\u540E\u670D\u52A1\u4E0A\u5F62\u6210\u53E3\u7891\uFF0C\u90A3\u4E48\u6D88\u8D39\u8005\u5C31\u4F1A\u66F4\u63A5\u53D7\u5546\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "78px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createTextVNode("3."),
                          createVNode("span", { style: { "font-size": "9px" } })
                        ]),
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u9488\u5BF9\u53C2\u52A0\u5546\u573A\u7EDF\u4E00\u6536\u94F6\u7684\u6D88\u8D39\u8005\uFF0C\u9664\u4E86\u4FC3\u9500\u671F\u95F4\u53EF\u4EE5\u4EAB\u53D7\u5546\u573A\u7684\u4F18\u60E0\u653F\u7B56\u548C\u8865\u8D34\u5916\uFF0C\u5E73\u65F6\u4E5F\u53EF\u4EE5\u4E3A\u53C2\u52A0\u7EDF\u4E00\u6536\u94F6\u7684\u6D88\u8D39\u8005\u8BBE\u7F6E\u4E00\u4E9B\u9488\u5BF9\u6027\u7684\u4F18\u60E0\u6D3B\u52A8\u3002\u540C\u65F6\u5546\u573A\u8FD8\u53EF\u4EE5\u8054\u5408\u767E\u8D27\u3001\u8D85\u5E02\u6216\u8005\u5BB6\u7535\u7B49\u5176\u4ED6\u96F6\u552E\u4E1A\u6001\u4E00\u8D77\u53D1\u884C\u4F1A\u5458\u5361\u7B49\u5404\u79CD\u6D3B\u52A8\uFF0C\u53D1\u5C55\u5546\u573A\u4F1A\u5458\uFF0C\u91CD\u70B9\u4E0D\u662F\u4E8C\u6B21\u9500\u552E\uFF0C\u66F4\u591A\u7684\u662F\u901A\u8FC7\u670D\u52A1\u5F62\u6210\u53E3\u7891\uFF0C\u6700\u7EC8\u5F62\u6210\u6D88\u8D39\u8005\u8F6C\u4ECB\u7ECD\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "54px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } })
                      ]),
                      createVNode("p", { style: { "margin-left": "54px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u7EDF\u4E00\u6536\u94F6\u7684\u5BF9\u5546\u573A\u7684\u597D\u5904\u4E0D\u8A00\u800C\u55BB\uFF0C\u7EDD\u5927\u90E8\u5206\u5B9A\u4F4D\u4E2D\u9AD8\u7AEF\u7684\u5BB6\u5C45\u5356\u573A\u4E5F\u5E0C\u671B\u63A8\u5E7F\u7EDF\u4E00\u6536\u94F6\uFF0C\u4F46\u5F80\u5F80\u7531\u4E8E\u5546\u6237\u7684\u62B5\u5236\uFF0C\u6D88\u8D39\u8005\u7684\u8BA4\u53EF\uFF0C\u914D\u5408\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u7684\u7BA1\u7406\u5236\u5EA6\u3001\u6D41\u7A0B\u548C\u7BA1\u7406\u624B\u6BB5\u4E0D\u5230\u4F4D\uFF0C\u4EE5\u53CA\u6CA1\u6709\u6210\u719F\u7684\u8F6F\u4EF6\u7CFB\u7EDF\u7B49\u539F\u56E0\u6700\u7EC8\u6D41\u4E8E\u5F62\u5F0F\uFF0C\u4E0D\u4E86\u4E86\u4E4B\u3002\u7B14\u8005\u56E0\u4E3A\u8D1F\u8D23\u5168\u56FD\u5BB6\u5C45\u5356\u573A\u7684\u4FE1\u606F\u5316\u63A8\u5E7F\u5DE5\u4F5C\uFF0C\u8D70\u8BBF\u8FC7\u8FD1\u767E\u4E2A\u5927\u4E2D\u57CE\u5E02\u7684100\u591A\u5BB6\u5BB6\u5C45\u5356\u573A\uFF0C\u5173\u4E8E\u7EDF\u4E00\u6536\u94F6\u7684\u95EE\u9898\u8DDF\u5F88\u591A\u5BB6\u5C45\u5356\u573A\u7684\u7BA1\u7406\u8005\u4EEC\u90FD\u6DF1\u5165\u4EA4\u6D41\u8FC7\u3002\u672C\u6587\u7684\u5F88\u591A\u89C2\u70B9\u548C\u63AA\u65BD\u6765\u6E90\u4E8E\u4ED6\u4EEC\u63A8\u5E7F\u7ECF\u9A8C\u7684\u603B\u7ED3\uFF0C\u7531\u4E8E\u5404\u5730\u7684\u5E02\u573A\u73AF\u5883\u4E0D\u4E00\u6837\uFF0C\u80AF\u5B9A\u662F\u65E0\u6CD5\u666E\u904D\u9002\u7528\u7684\u3002\u5E0C\u671B\u5C31\u6B64\u95EE\u9898\u6709\u66F4\u597D\u89E3\u51B3\u529E\u6CD5\u7684\u5BB6\u5C45\u5356\u573A\u7BA1\u7406\u8005\u4EEC\uFF0C\u53EF\u4EE5\u4E0E\u7B14\u8005\u8054\u7CFB\uFF0C\u7B14\u8005\u4E0D\u751A\u611F\u6FC0\u3002")
                      ]),
                      createVNode("p", { style: { "margin-left": "54px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, [
                          createVNode("br")
                        ])
                      ]),
                      createVNode("p", { style: { "margin-left": "54px", "text-align": "right" } }, [
                        createVNode("strong", null, [
                          createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }, "\u672C\u6587\u4F5C\u8005\uFF1A\u8C22\u5730 \u5BB6\u5C45\u5356\u573A\u4FE1\u606F\u5316\u63A8\u5E7F\u8D1F\u8D23\u4EBA ")
                        ])
                      ]),
                      createVNode("p", { style: { "margin-left": "54px", "text-align": "right" } }, [
                        createVNode("strong", null, [
                          createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } })
                        ])
                      ]),
                      createVNode("p", null, [
                        createVNode("br")
                      ]),
                      createVNode("img", {
                        class: "",
                        style: { "float": "right" },
                        src: _imports_4,
                        id: "lxweixin",
                        alt: ""
                      }),
                      createVNode("p", { style: { "margin-left": "54px" } }, [
                        createVNode("span", { style: { "font-family": "\u5FAE\u8F6F\u96C5\u9ED1, sans-serif" } }),
                        createVNode("br")
                      ]),
                      createVNode("fieldset", {
                        class: "tn-Powered-by-XIUMI",
                        style: { "margin": "0px 0px 16px", "padding": "8px", "max-width": "100%", "box-sizing": "border-box", "min-width": "0px", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "border": "1px solid rgb(226, 226, 226)", "box-shadow": "rgb(226, 226, 226) 0px 16px 1px -13px", "font-size": "1.5em", "line-height": "1", "text-decoration": "inherit", "background-color": "rgb(255, 255, 255)", "word-wrap": "break-word !important" }
                      }, [
                        createVNode("section", {
                          class: "tn-Powered-by-XIUMI",
                          style: { "margin": "0px 0px 1em", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "width": "4em", "height": "4em", "float": "left", "border-top-left-radius": "50%", "border-top-right-radius": "50%", "border-bottom-right-radius": "50%", "border-bottom-left-radius": "50%", "background-image": "url(../static/xd_img/jjzl.png)", "background-size": "125.24462127685547%", "background-position": "50% 0%", "background-repeat": "no-repeat no-repeat" }
                        }),
                        createVNode("section", {
                          class: "tn-Powered-by-XIUMI",
                          style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "right", "float": "right", "display": "inline" }
                        }, [
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u7CBE\u5F69\u8D44\u8BAF\u5C3D\u5728\u638C\u63E1")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u73B0\u5728\u5C31\u52A0\u5165\u6211\u4EEC\u5427")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u52A0\u5165\u6211\u4EEC\uFF0C\u773C\u754C\u5927\u4E0D\u540C")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px 3px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1.2", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-align": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u4E3B\u6D41\u51B3\u5B9A\u5F71\u54CD\u529B")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px 16px 0px 0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.1em", "line-height": "1.2", "text-align": "inherit", "font-size": "0.7em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit", "color": "rgb(255, 255, 255)", "border-color": "rgb(71, 193, 168)", "background-color": "rgb(142, 201, 101)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u4F1A\u5458\u62DB\u52DF\u4EE4")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "display": "inline-block", "vertical-align": "top", "width": "1.2em", "line-height": "1em", "font-family": "inherit" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u5BB6\u5177\u4E3B\u6D41")
                          ])
                        ]),
                        createVNode("section", {
                          class: "tn-Powered-by-XIUMI",
                          style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "clear": "both" }
                        }, [
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "line-height": "1.6em", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u5FAE\u4FE1\u53F7\uFF1AjiajuzhuliuMF")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "line-height": "1.6em", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u7F51\u5740\uFF1Ahttp://www.jiajuzhuliu.com/")
                          ]),
                          createVNode("section", {
                            class: "tn-Powered-by-XIUMI",
                            style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important", "text-align": "inherit", "line-height": "1.6em", "font-size": "0.5em", "font-family": "inherit", "font-weight": "inherit", "text-decoration": "inherit", "color": "rgb(120, 124, 129)" }
                          }, [
                            createVNode("section", {
                              class: "tn-Powered-by-XIUMI",
                              style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box", "word-wrap": "break-word !important" }
                            }, "\u5FAE\u535A\uFF1A\u5BB6\u5177\u4E3B\u6D41\u6742\u5FD7")
                          ])
                        ])
                      ]),
                      createVNode("p", { style: { "margin-top": "0px", "margin-bottom": "0px", "padding": "0px", "max-width": "100%", "min-height": "1em", "white-space": "pre-wrap", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } }, [
                        createVNode("br", { style: { "margin": "0px", "padding": "0px", "max-width": "100%", "box-sizing": "border-box !important", "word-wrap": "break-word !important" } })
                      ]),
                      createVNode("p", null, [
                        createVNode("br")
                      ])
                    ]),
                    createVNode("div", { id: "js_sponsor_ad_area" }),
                    createVNode("div", {
                      class: "read-more__area",
                      id: "js_more_read_area",
                      style: { "display": "none" }
                    })
                  ]),
                  createVNode("ul", {
                    id: "js_hotspot_area",
                    class: "article_extend_area"
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/hygd/unicash.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unicash = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { unicash as default };
//# sourceMappingURL=unicash-WGYanCGG.mjs.map
