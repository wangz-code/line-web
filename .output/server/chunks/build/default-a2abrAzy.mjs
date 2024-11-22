import { _ as __nuxt_component_0 } from './nuxt-link-BftFs5bt.mjs';
import { ref, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';

const _sfc_main$1 = {
  __name: "ConsultModal",
  __ssrInlineRender: true,
  props: ["show"],
  emits: ["onClose"],
  setup(__props, { emit: __emit }) {
    ref(false);
    const form = ref({
      custmessage: "",
      custname: "",
      custphone: "",
      custcompany: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-backdrop fade show"></div><div class="modal fade show" tabindex="-1" style="${ssrRenderStyle({ "display": "block" })}"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header border-0"><h4>\u670D\u52A1\u54A8\u8BE2</h4><button type="button" class="close" aria-label="Close"><span aria-hidden="true">\xD7</span></button></div><div class="modal-body"><form class="form"><div class="form-group"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).custname)} aria-describedby="emailHelp" placeholder="\u59D3\u540D" required="true"></div><div class="form-group"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).custphone)} placeholder="\u624B\u673A" required="true"></div><div class="form-group"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).custcompany)} placeholder="\u516C\u53F8" required="true"></div><div class="form-group"><textarea class="form-control" placeholder="\u54A8\u8BE2\u5185\u5BB9" rows="6">${ssrInterpolate(unref(form).custmessage)}</textarea></div><button type="button" class="btn btn-primary btn-round mr-1">\u7ACB\u5373\u63D0\u4EA4</button><span> \u63D0\u4EA4\u6210\u529F\u540E\u5DE5\u4F5C\u4EBA\u5458\u4F1A\u53CA\u65F6\u4E0E\u60A8\u8054\u7CFB \u8C22\u8C22!</span></form></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConsultModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/demo/logo-w.png");
const _imports_1 = publicAssetsURL("/img/foot.png");
const _imports_2 = publicAssetsURL("/img/about/code.png");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const onChange = (value) => {
      show.value = value;
    };
    const navList = [
      {
        title: "\u6D88\u8D39\u8005\u53E3\u7891\u670D\u52A1\u5E73\u53F0",
        childen: [
          {
            name: "\u4F1A\u5458\u5B9D",
            href: "/product/hyb"
          },
          {
            name: "\u6536\u94F6\u5B9D",
            href: "/product/syb"
          },
          {
            name: "\u6652\u5355\u5B9D",
            href: "/product/sdb"
          }
        ]
      },
      {
        title: "\u5546\u6237\u7BA1\u7406\u670D\u52A1\u5E73\u53F0",
        childen: [
          {
            name: "\u8425\u8FD0\u5B9D",
            href: "/product/yyb"
          },
          {
            name: "\u8BC4\u4EF7\u5B9D",
            href: "/product/pjb"
          },
          {
            name: "\u5408\u540C\u5B9D",
            href: "/product/htb"
          }
        ]
      },
      {
        title: "\u5356\u573A\u7ECF\u8425\u6570\u636E\u5E73\u53F0",
        childen: [
          {
            name: "\u5BB6\u5C45\u9A7E\u9A76\u8231",
            href: "/product/jsc"
          },
          {
            name: "\u6570\u636E\u5927\u5C4F",
            href: "/product/sjdp"
          }
        ]
      }
    ];
    const toTop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ConsultModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="topnav navbar navbar-expand-lg navbar-dark bg-primary fixed-top"><div class="container-fluid"><a class="navbar-brand" href="/"><i class="fas fa-anchor mr-2"></i><img width="128"${ssrRenderAttr("src", _imports_0)} alt="logo" srcset=""></a><button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbarColor02" style="${ssrRenderStyle({})}"><ul class="navbar-nav mr-auto d-flex align-items-center"><!--[-->`);
      ssrRenderList(navList, (item) => {
        _push(`<li class="nav-item dropdown li-dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${ssrInterpolate(item.title)}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><!--[-->`);
        ssrRenderList(item.childen, (nav) => {
          _push(`<a class="dropdown-item"${ssrRenderAttr("href", nav.href)}>${ssrInterpolate(nav.name)}</a>`);
        });
        _push(`<!--]--></div></li>`);
      });
      _push(`<!--]--><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5173\u4E8E\u6211\u4EEC`);
          } else {
            return [
              createTextVNode("\u5173\u4E8E\u6211\u4EEC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><ul class="navbar-nav ml-auto d-flex align-items-center"><li class="nav-item"><span class="nav-link" href="#"><a class="btn btn-info btn-round shadow-sm" href="#">\u670D\u52A1\u54A8\u8BE2</a></span></li></ul></div></div></nav><div style="${ssrRenderStyle({ "position": "fixed", "bottom": "20px", "right": "20px", "z-index": "9" })}">`);
      if (unref(toTop)) {
        _push(`<a href="#toptop" data-aos="fade-up"><div class="rounded-circle shadow-lg p-1 bg-white" data-toggle="tooltip" data-placement="top" title="" data-original-title="\u8FD4\u56DE\u9876\u90E8"><svg t="1695895398121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1470" width="50" height="50"><path d="M739.2 446.51c4-258.84-210.12-376.12-224.51-383.71v-0.4l-0.38 0.2-0.38-0.2v0.4c-14.4 7.58-228.53 124.86-224.52 383.71-43.6 28-89.28 77.86-82 164s91.35 143.29 123.53 140.17 22.84-27 22.84-27l11-44.64s47.45 71.77 62.67 71.75c13.66-1.09 78.66-0.12 86.44 0h0.77c7.77-0.12 72.78-1.09 86.44 0 15.23 0 62.67-71.75 62.67-71.75l11 44.64s-9.34 23.88 22.84 27 116.27-54 123.54-140.15-38.35-135.99-81.95-164.02z m-224.9-3.81c-6.09-0.09-85.73-3-93-95.51 2.67-87.95 86.78-95.72 93-96.17 6.27 0.46 90.38 8.22 93 96.17-7.3 92.52-86.9 95.42-93 95.51zM467.28 888.75a19 19 0 0 1-19 19 19 19 0 0 1-19-19v-94.12a19 19 0 0 1 19-19 19 19 0 0 1 19 19zM537.18 939.71A19.29 19.29 0 0 1 517.89 959a19.29 19.29 0 0 1-19.29-19.29v-140a19.29 19.29 0 0 1 19.29-19.29 19.29 19.29 0 0 1 19.29 19.29zM601.55 866.61a19 19 0 0 1-19 19 19 19 0 0 1-19-19v-67.14a19 19 0 0 1 19-19 19 19 0 0 1 19 19z" fill="#7832e2" p-id="1471"></path></svg></div></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="rounded-circle shadow-lg p-1 my-4 bg-white"><svg t="1697447541633" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4208" width="50" height="50"><path d="M677.63 889.8c-12.67 0-24.44-1.81-34.39-5.43h-0.91c-13.57-3.62-135.75-41.63-296.85-202.73-155.66-157.48-196.39-281.47-201.82-297.76-14.48-35.29-3.62-86 23.53-114l62.45-62.45a67.32 67.32 0 0 1 47.06-19.91c19.91 0 38.92 10 51.59 26.25l91.4 117.65c13.58 17.2 14.49 45.26 3.62 63.36l-46.15 76.92c2.72 10.86 15.38 48.87 70.59 107.7 60.64 57 96.84 67.88 106.8 70.6l76.92-46.16c10-6.34 20.82-7.24 28.06-7.24 13.58 0 26.25 3.62 35.3 10.86l117.65 91.4c15.39 12.67 25.34 29 26.24 48s-5.42 37.11-19.9 50.68L757.27 859c-19 19-49.77 30.77-79.64 30.77z" fill="#7832e2" p-id="4209"></path><path class="phone-ani" d="M792.69 605.49a27 27 0 0 1-19.26-46c79.68-81 78.76-211.81-2.06-291.66-81-80-212-79.22-292 1.76l-0.27 0.27a27 27 0 0 1-38.47-38l0.2-0.19a0.38 0.38 0 0 1 0.09-0.09 260.5 260.5 0 0 1 371 365.8 27 27 0 0 1-19.23 8.11z" fill="#FF9600" p-id="4210"></path><path class="phone-ani" d="M713.45 524.63a27 27 0 0 1-18.76-46.48A84.06 84.06 0 0 0 578 357.09l-0.42 0.4a27 27 0 0 1-37.46-39l0.4-0.38a138.09 138.09 0 0 1 195.27 3.67c52.82 54.83 51.2 142.42-3.6 195.25a26.94 26.94 0 0 1-18.74 7.6z" fill="#FF9600" p-id="4211"></path></svg></div></div><div class="pt-5">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle({ "width": "100%" })}"><img${ssrRenderAttr("src", _imports_1)} alt="" srcset=""></div><footer class="bg-black pb-5 foot"><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(navList, (nav) => {
        _push(`<div class="col-6 col-md"><h5 class="mb-4 text-white">${ssrInterpolate(nav.title)}</h5><ul class="list-unstyled text-small"><!--[-->`);
        ssrRenderList(nav.childen, (item) => {
          _push(`<li><a class="text-white"${ssrRenderAttr("href", item.href)}>${ssrInterpolate(item.name)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--><div class="col-6 col-md"><h5 class="mb-4 text-white">\u5173\u4E8E\u6211\u4EEC</h5><ul class="list-unstyled text-small"><li><a class="text-white">\u5730\u5740: \u4E0A\u6D77\u5E02\u95F5\u884C\u533A\u4E03\u5B9D\u9547\u65B0\u9F99\u8DEF1333\u5F04\u4E07\u79D1\u4E03\u5B9D\u56FD\u964528\u5E62216</a></li><li><a class="text-white">\u516C\u4F17\u53F7: \u6F9C\u7533\u79D1\u6280</a></li><li><a class="text-white">\u90AE\u7BB1: xiedi@lineshen.com</a></li><li><a class="text-white">\u8054\u7CFB\u7535\u8BDD: 021-54437686 / 18621918993</a></li><li><img${ssrRenderAttr("src", _imports_2)} width="100" height="100" alt=""></li><a href="https://beian.miit.gov.cn/" target="_blank"><img style="${ssrRenderStyle({ "width": "20px" })}" src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png">\u6CAAICP\u590716048809\u53F7-1</a></ul></div></div></div></footer>`);
      _push(ssrRenderComponent(_component_ConsultModal, {
        show: unref(show),
        onUpdate: onChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-a2abrAzy.mjs.map
