import { useSSRContext, withCtx, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BftFs5bt.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
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
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    title: String,
    desc: String,
    desc2: String,
    icon: String,
    path: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.title == "none") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-4" }, _attrs))} data-v-80352ff8></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "card border-0 transition-3d-hover" }, _attrs))} data-v-80352ff8><div class="card-body product" data-v-80352ff8><div class="rows" data-v-80352ff8><div class="icon" data-v-80352ff8><img width="65"${ssrRenderAttr("src", __props.icon)} alt="" srcset="" data-v-80352ff8></div><div class="text-left desc" data-v-80352ff8><h5 data-v-80352ff8>${ssrInterpolate(__props.title)}</h5><div data-v-80352ff8>${ssrInterpolate(__props.desc)}</div><div data-v-80352ff8>${ssrInterpolate(__props.desc2)}</div></div></div></div></div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Product.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-80352ff8"]]);
const _imports_0 = publicAssetsURL("/img/demo/dashb-syb.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productData = [
      {
        name: "\u6D88\u8D39\u8005\u53E3\u7891\u670D\u52A1\u5E73\u53F0",
        data: [
          {
            title: "\u4F1A\u5458\u5B9D",
            path: "/product/hyb",
            desc: "\u589E\u5F3A\u6D88\u8D39\u8005\u7C98\u6027",
            desc2: "\u6D88\u8D39\u8DDF\u8E2A\u3001\u591A\u6E20\u9053\u5F15\u6D41\u3001\u79EF\u5206\u7BA1\u7406",
            icon: "/img/product/hyb.png"
          },
          {
            title: "\u6536\u94F6\u5B9D",
            path: "/product/syb",
            desc: "\u7CBE\u7EC6\u5316\u5BA2\u6237\u7BA1\u7406",
            desc2: "\u901A\u8FC7\u6570\u636E\u5206\u6790\uFF0C\u4E86\u89E3\u6D88\u8D39\u8005\u9700\u6C42",
            icon: "/img/product/syb.png"
          },
          {
            title: "\u6652\u5355\u5B9D",
            path: "/product/sdb",
            desc: "\u63D0\u5347\u5BA2\u6237\u6EE1\u610F\u5EA6",
            desc2: "\u6D88\u8D39\u8005\u5BA2\u8BC9\u8BC4\u4EF7\u3001\u6652\u5355\u53E3\u7891\u5BA3\u4F20",
            icon: "/img/product/sdb.png"
          }
        ]
      },
      {
        name: "\u5546\u6237\u7BA1\u7406\u670D\u52A1\u5E73\u53F0",
        data: [
          {
            title: "\u8425\u8FD0\u5B9D",
            path: "/product/yyb",
            desc: "\u89C4\u8303\u5316\u7BA1\u7406",
            desc2: "\u65E5\u5E38\u7ECF\u8425\uFF0C\u7BA1\u63A7\uFF0C\u63D0\u5347\u5546\u6237\u80FD\u529B",
            icon: "/img/product/yyb.png"
          },
          {
            title: "\u8BC4\u4EF7\u5B9D",
            path: "/product/pjb",
            desc: "\u591A\u7EF4\u5EA6\u7EFC\u5408\u8003\u6838,\u661F\u7EA7\u8BC4\u5B9A",
            desc2: "\u6570\u636E\u5316\u66F4\u5BA2\u89C2\uFF0C\u63D0\u5347\u6D88\u8D39\u8005\u4F53\u9A8C",
            icon: "/img/product/pjb.png"
          },
          {
            title: "\u5408\u540C\u5B9D",
            path: "/product/htb",
            desc: "\u4E3B\u8425\u6536\u5165\u7BA1\u63A7,\u81EA\u52A8\u8BA1\u7B97\u79DF\u91D1\u8D39\u7528",
            desc2: "\u5C55\u5E10\u5355\u6536\u8D39\u51C6\u786E\u3001\u53CA\u65F6\u3001\u4FBF\u6377",
            icon: "/img/product/htb.png"
          }
        ]
      },
      {
        name: "\u5356\u573A\u7ECF\u8425\u6570\u636E\u5E73\u53F0",
        data: [
          {
            title: "\u5BB6\u5C45\u9A7E\u9A76\u8231",
            path: "/product/jsc",
            desc: "\u5B9E\u65F6\u76D1\u63A7",
            desc2: "\u56FE\u8868\u5C55\u793A\u5356\u573A\u7ECF\u8425\u6570\u636E",
            icon: "/img/product/jsc.png"
          },
          {
            title: "\u6570\u636E\u5927\u5C4F",
            path: "/product/sjdp",
            desc: "\u53EF\u89C6\u5316\u5C55\u793A",
            desc2: "\u667A\u80FD\u5206\u6790,\u8D8B\u52BF\u9884\u6D4B,\u51B3\u7B56\u652F\u6301",
            icon: "/img/product/sjdp.png"
          },
          {
            title: "none"
          }
        ]
      }
    ];
    const industryData = [
      {
        title: "\u884C\u4E1A\u89C2\u70B9",
        target: "hygd",
        data: [
          {
            title: "\u6D45\u8C08\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE",
            icon: "/img/hygd/szhjs.jpg",
            path: "/article/hygd/digitalconstruction",
            time: "2023-08-09",
            class: "\u5BB6\u5C45\u5E02\u573A"
          },
          {
            title: "\u53EA\u8981\u6570\u636E\u4E0D\u8981\u94B1\uFF1F3.0\u6A21\u5F0F\u624D\u662F\u5356\u573A\u6536\u94F6\u7684\u672A\u6765\uFF01",
            icon: "/img/hygd/3.0.jpg",
            path: "/article/hygd/threecash",
            time: "2020-04-09",
            class: "\u4ECA\u65E5\u5BB6\u5C45"
          },
          {
            title: "\u6D45\u8BBA\u5BB6\u5C45\u5356\u573A\u6570\u5B57\u5316\u5E73\u53F0\u5EFA\u8BBE | \u5185\u6709\u798F\u5229\uFF01",
            icon: "/img/hygd/szh.jpg",
            path: "/article/hygd/digitalization",
            time: "2020-04-09",
            class: "\u5BB6\u5C45\u5E02\u573A"
          },
          {
            title: "\u5982\u4F55\u9884\u9632\u548C\u5E94\u5BF9\u75AB\u60C5\u7ED3\u675F\u540E\u53EF\u80FD\u51FA\u73B0\u7684\u5546\u6237\u9003\u573A\u95EE\u9898\uFF1F",
            icon: "/img/hygd/shtc.jpg",
            path: "/article/hygd/prevent",
            time: "2020-02-26",
            class: "\u5BB6\u5C45\u5E02\u573A"
          },
          {
            title: "\u65B0\u51A0\u75AB\u60C5\u5BF92020\u5E74\u5BB6\u5C45\u5356\u573A\u7ECF\u8425\u60C5\u51B5\u5F71\u54CD",
            icon: "/img/hygd/dy.jpg",
            path: "/article/hygd/survey",
            time: "2020-02-26",
            class: "\u5E02\u573A\u8C03\u7814"
          },
          {
            title: "\u5934\u6761\u4E28\u5BB6\u5C45\u5356\u573A\u7684\u7EDF\u4E00\u6536\u94F6\u6A21\u5F0F\u5230\u5E95\u53EF\u4E0D\u53EF\u884C\uFF1F",
            icon: "/img/hygd/tysy.jpg",
            path: "/article/hygd/unicash",
            time: "2015-11-02",
            class: "\u5BB6\u5C45\u4E3B\u6D41"
          },
          {
            title: "\u5BB6\u5C45\u5356\u573A\u4E3A\u4EC0\u4E48\u8981\u7EDF\u4E00\u6536\u94F6\uFF0C\u6838\u5FC3\u95EE\u9898\u662F\u8FD9\u4E2A\uFF01",
            icon: "/img/hygd/tysy.jpg",
            path: "/article/hygd/whyunicashier",
            time: "2018-06-06",
            class: "\u5BB6\u5C45\u5FAE\u65B0\u95FB"
          }
        ]
      },
      {
        title: "\u5BA2\u6237\u89C1\u8BC1",
        target: "khjz",
        data: [
          {
            title: "\u5BCC\u5B89\u5C45\u5357\u5B81\u5E97\u642D\u5EFA\u6570\u5B57\u5E73\u53F0\uFF01",
            icon: "/img/khjz/faj_ly.jpg",
            path: "/article/khjz/faj_ly",
            time: "2023-06-18",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u4E1C\u4E9A\u5BB6\u5C45\u6570\u5B57\u5316\u7BA1\u7406\u5347\u7EA7\u4E4B\u8DEF",
            icon: "/img/khjz/dy_ye.jpg",
            path: "/article/khjz/dy_ye",
            time: "2023-06-18",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u5982\u4F55\u8BA9\u60A8\u7684\u5BB6\u5C45\u5356\u573A\u4FDD\u6301\u7ADE\u4E89\u529B",
            icon: "/img/khjz/zmz.jpg",
            path: "/article/khjz/zmz",
            time: "2023-06-18",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u5929\u6C34\u6865\u5357\u5BB6\u5C45\u5EFA\u6750\u57CE \u201C\u950B\u8292\u667A\u6536\u94F6\u201D\u7CFB\u7EDF\u4E0A\u7EBF\uFF01",
            icon: "/img/khjz/tsqn.jpg",
            path: "/article/khjz/tsqn",
            time: "2022-05-06",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u4E07\u6CF0\u9686\u6570\u5B57\u5316\u5E73\u53F0 \u5206\u5E03\u5F0F\u6536\u94F6\u6210\u529F\u4E0A\u7EBF!",
            icon: "/img/khjz/wtl.jpg",
            path: "/article/khjz/wtl",
            time: "2021-08-09",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u5546\u573A\u7B80\u8BAF \u258F\u6052\u5927\u5546\u573A\u6570\u5B57\u5316\u8425\u8FD0\u7CFB\u7EDF\u542F\u52A8",
            icon: "/img/khjz/hd.jpg",
            path: "/article/khjz/hd",
            time: "2021-06-30",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u795D\u8D3A\u5BCC\u5B89\u5C45\u5357\u5B81\u5E97\u201C\u6570\u5B57\u5316\u5E73\u53F0-\u5206\u5E03\u5F0F\u6536\u94F6\u201D\u9879\u76EE\u4E0A\u7EBF\u9A8C\u6536",
            icon: "/img/khjz/faj_nn.jpg",
            path: "/article/khjz/faj_nn",
            time: "2020-12-11",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u6700\u65B0\u8D44\u8BAF | \u5E7F\u897F\u5BCC\u5B89\u5C45\u96C6\u56E2\u4E0E\u5EFA\u8BBE\u94F6\u884C\u7B7E\u8BA2\u6218\u7565\u5408\u4F5C\u534F\u8BAE",
            icon: "/img/khjz/faj_qd.jpg",
            path: "/article/khjz/faj_qd",
            time: "2020-06-18",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u94F6\u5EA7\u5BB6\u5C45\u8425\u8FD0\u7CFB\u7EDF\u4E0A\u7EBF\u5566!",
            icon: "/img/khjz/yz.jpg",
            path: "/article/khjz/yz",
            time: "2018-04-12",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u70ED\u70C8\u795D\u8D3A\u534E\u53A6\u5BB6\u5C45\u6E2F\u8425\u9500&\u8425\u8FD0\u7BA1\u7406\u7CFB\u7EDF\u6210\u529F\u4E0A\u7EBF!",
            icon: "/img/khjz/hx.jpg",
            path: "/article/khjz/hx",
            time: "2017-09-26",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u5609\u79BE\u4E50\u5929\u56FD\u9645\u5BB6\u5C45\u6536\u94F6\u5B9D\u4E0A\u7EBF\u5566!",
            icon: "/img/khjz/jhlt.jpg",
            path: "/article/khjz/jhlt",
            time: "2018-07-03",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u6C5F\u8C6A\u56FD\u9645 \u5BB6\u5C45\u9986 \u5BB6\u5C45\u6536\u94F6\u5B9D\u3001\u5DE1\u5E97\u5B9D\u4E0A\u7EBF\uFF01",
            icon: "/img/khjz/jhgj.jpg",
            path: "/article/khjz/jhgj",
            time: "2018-08-20",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "J+\u94F6\u7CFB\u7EDF\u6536\u94F6\u6A21\u5757\u660E\u65E5\u8D77\u6B63\u5F0F\u4E0A\u7EBF\u8FD0\u8425",
            icon: "/img/khjz/jswb.jpg",
            path: "/article/khjz/jswb",
            time: "2018-05-17",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u7687\u671D\u56FD\u9645\u5EFA\u6750 \u5BB6\u5C45\u8425\u8FD0\u7BA1\u7406\u7CFB\u7EDF\u5546\u6237\u52A8\u5458\u5927\u4F1A ",
            icon: "/img/khjz/hc.jpg",
            path: "/article/khjz/hc",
            time: "2019-05-17",
            class: "\u5BB6\u5C45\u5356\u573A"
          }
        ]
      },
      {
        title: "\u6D3B\u52A8\u8D44\u8BAF",
        target: "hdzx",
        data: [
          {
            title: "\u7B2C\u516D\u7A7A\u95F4\u6E56\u5DDE\u5546\u573A\u643A\u624B\u4EA4\u901A\u94F6\u884C\u4E3A200\uFF0B\u54C1\u724C\u201C\u91D1\u878D\u8D4B\u80FD\u201D\uFF01",
            icon: "/img/hdzx/dlkj.jpg",
            path: "/article/hdzx/dlkj",
            time: "2022-03-29",
            class: "\u5BB6\u5C45\u5356\u573A"
          },
          {
            title: "\u300C\u91CD\u78C5\u56DE\u987E\u300D\u6DF1\u5733\u5E02\u5BB6\u5177\u884C\u4E1A\u534F\u4F1A&\u4E2D\u56FD\u533A\u57DF \u5BB6\u5C45\u5356\u573A\u767E\u4F73\u8054\u76DF\xB7\u534E\u4E1C\u884C\u5B8C\u7F8E\u843D\u5E55",
            icon: "/img/hdzx/hdx.jpg",
            path: "/article/hdzx/hdx",
            time: "2021-06-07",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u73B0\u573A\u843D\u4F4D20000\u33A1+ |\u767E\u4F73\u8054\u76DF&\u6155\u601D\u96C6\u56E2\u5BF9\u63A5\u4EA4\u6D41\u4F1A\u5728\u676D\u5706\u6EE1\u843D\u5E55",
            icon: "/img/hdzx/ms.jpg",
            path: "/article/hdzx/ms",
            time: "2021-04-15",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u6DF1\u5EA6\u5BF9\u63A5 \u5F3A\u5F3A\u8054\u5408 \u5171\u8C0B\u672A\u6765|\u767E\u4F73\u8054\u76DF&\u654F\u534E\u63A7\u80A1\u5BF9\u63A5\u4EA4\u6D41\u4F1A\u8BAE\u5728\u676D\u5706\u6EE1\u843D\u5E55",
            icon: "/img/hdzx/mh.jpg",
            path: "/article/hdzx/mh",
            time: "2021-04-15",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u300C\u6DF1\u5733\u5C55\u4F1A\u6D3B\u52A8\u56DE\u987E\u300D\u767E\u4F73\u8054\u76DF\u79D8\u4E66\u957F\u8C22\u5730\u3001\u7406\u4E8B\u77F3\u4E1C\u5E94\u9080\u51FA\u5E2D\u6DF1\u5733\u5C55\u4E94\u661F\u54C1\u8D28\u9881\u5956\u5178\u793C",
            icon: "/img/hdzx/szzh.jpg",
            path: "/article/hdzx/szzh",
            time: "2021-03-23",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u540E\u75AB\u60C5\u65F6\u4EE3\u7ECF\u9500\u5546\u53D1\u5C55\u4E4B\u9053\u2014\u2014\u79EF\u6781\u5E94\u52BF\u3001\u4E3B\u52A8\u8FCE\u53D8\uFF0C\u624D\u662F\u738B\u9053\uFF01",
            icon: "/img/hdzx/jxs.jpg",
            path: "/article/hdzx/jxs",
            time: "2021-03-23",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u6DF1\u5733\u5BB6\u5177\u534F\u4F1A\xD7\u767E\u4F73\u8054\u76DF\u2014\u5F3A\u52BF\u8054\u5408\uFF0C\u5171\u4EAB\u5171\u8D62\uFF01",
            icon: "/img/hdzx/szjj.jpg",
            path: "/article/hdzx/szjj",
            time: "2021-03-23",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u8C0B\u8FDC\xB7\u5171\u8D62\u2014\u2014\u767E\u4F73\u8054\u76DF\u6D59\u6C5F\u884C\u7B2C\u4E8C\u5B63\u5B8C\u7F8E\u843D\u5E55",
            icon: "/img/hdzx/zjx.jpg",
            path: "/article/hdzx/zjx",
            time: "2021-03-13",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u91CD\u78C5|\u767E\u4F73\u8054\u76DF\uFF0C\u53CC\u559C\u4E34\u95E8\u2014\u2014\u767E\u4F73\u8054\u76DF\u4E0E\u559C\u4E34\u95E8\u6B63\u5F0F\u8FBE\u6210\u6218\u7565\u5408\u4F5C",
            icon: "/img/hdzx/xlm.jpg",
            path: "/article/hdzx/xlm",
            time: "2021-03-10",
            class: "\u767E\u4F73\u8054\u76DF"
          },
          {
            title: "\u987A\u52BF\u805A\u529B\uFF0C\u5171\u8D62\u53D1\u5C55\u65B0\u673A\u9047 \u2014\u2014\u767E\u4F73\u8054\u76DF\u8D70\u8FDB\u6DF1\u5733\u5BB6\u5177\u884C\u4E1A\u534F\u4F1A",
            icon: "/img/hdzx/szjjxh.jpg",
            path: "/article/hdzx/szjjxh",
            time: "2021-01-08",
            class: "\u7F51\u6613\u65B0\u95FB"
          },
          {
            title: "\u518D\u8D77\u822A\uFF1A\u767E\u4F73\u8054\u76DF\u5E7F\u4E1C\u884C\u7B2C\u4E8C\u5B63\u5B8C\u7F8E\u843D\u5E55",
            icon: "/img/hdzx/gdx.jpg",
            path: "/article/hdzx/gdx",
            time: "2020-12-14",
            class: "\u4ECA\u65E5\u5934\u6761"
          },
          {
            title: "\u805A\u52BF\u524D\u884C\u2014\u2014\u654F\u534E\u63A7\u80A1&\u767E\u4F73\u8054\u76DF\u8FBE\u6210\u6218\u7565\u5408\u4F5C",
            icon: "/img/hdzx/mhkg.jpg",
            path: "/article/hdzx/mhkg",
            time: "2020-12-14",
            class: "\u641C\u72D0\u5BB6\u5C45"
          },
          {
            title: "\u667A\u9886\u672A\u6765\u2014\u2014\u6052\u6D01\u536B\u6D74&\u767E\u4F73\u8054\u76DF\u6218\u7565\u643A\u624B",
            icon: "/img/hdzx/hj.jpg",
            path: "/article/hdzx/hj",
            time: "2020-12-14",
            class: "\u641C\u72D0\u5BB6\u5C45"
          },
          {
            title: "\u767E\u4F73\u8054\u76DF\u4F1A\u805A\u5357\u901A \u643A\u624B\u987E\u5BB6 \u5BB6\u5C45\u8FBE\u6210\u6218\u7565\u5408\u4F5C",
            icon: "/img/hdzx/gj.jpg",
            path: "/article/hdzx/gj",
            time: "2020-09-09",
            class: "\u7F51\u6613\u5BB6\u5C45"
          },
          {
            title: "\u4E2D\u56FD\u533A\u57DF \u5BB6\u5C45\u5356\u573A,\u767E\u4F73\u8054\u76DF,\u53EC\u5F00\u7B2C\u4E00\u5C4A\u7406\u4E8B\u4F1A\u5458\u5927\u4F1A",
            icon: "/img/hdzx/bayj.jpg",
            path: "/article/hdzx/bayj",
            time: "2020-09-09",
            class: "\u7F51\u6613\u5BB6\u5C45"
          },
          {
            title: "\u3010\u5BF9\u8BDD\u54C1\u724C\u5DE5\u5382\uFF0C\u63A2\u8BA8\u884C\u4E1A\u601D\u8DEF\u3011\u767E\u4F73\u8054\u76DF\u8D74\u5E7F\u4E1C\u8003\u5BDF",
            icon: "/img/hdzx/gc.jpg",
            path: "/article/hdzx/gc",
            time: "2020-08-07",
            class: "\u767E\u4F73\u8054\u76DF"
          }
        ]
      }
    ];
    const furnitureStore = [
      {
        name: "\u7B2C\u516D\u7A7A\u95F4",
        src: "/img/store/lk.png"
      },
      {
        name: "\u5927\u660E\u5BAB\u5EFA\u6750\u5BB6\u5C45",
        src: "/img/store/dmg.png"
      },
      {
        name: "\u534E\u53A6\u5BB6\u5C45\u6E2F",
        src: "/img/store/hx.png"
      },
      {
        name: "\u5347\u8F89\u5BB6\u5C45",
        src: "/img/store/sh.png"
      },
      {
        name: "\u5BCC\u5B89\u5C45",
        src: "/img/store/faj.png"
      },
      {
        name: "\u8398\u6F6E\u56FD\u9645\u5BB6\u5C45",
        src: "/img/store/xc.png"
      },
      {
        name: "\u5609\u79BE\u4E50\u5929",
        src: "/img/store/jhlt.png"
      },
      {
        name: "\u5B9C\u5BB6\u7F8E\u56FD\u9645\u5BB6\u5C45",
        src: "/img/store/yjm.png"
      },
      {
        name: "\u6052\u5927\u5EFA\u6750\u5BB6\u5C45",
        src: "/img/store/hdjc.png"
      },
      {
        name: "\u6865\u5357\u5BB6\u5C45\u5EFA\u6750\u57CE",
        src: "/img/store/qn.png"
      },
      {
        name: "\u534E\u6D0B\u5BB6\u5C45\u5E7F\u573A",
        src: "/img/store/hy.png"
      },
      {
        name: "\u5929\u4E3D\u5BB6\u5C45",
        src: "/img/store/tljj.png"
      },
      {
        name: "\u5FB7\u514B\u5FB7\u5BB6",
        src: "/img/store/dkdj.png"
      },
      {
        name: "\u6C5F\u8C6A\u5EFA\u6750\u5BB6\u5C45\u57CE",
        src: "/img/store/jhgj.png"
      },
      {
        name: "\u4E1C\u4E9A\u5BB6\u5C45",
        src: "/img/store/dyjj.png"
      },
      {
        name: "\u60E0\u5DDE\u4E07\u9970\u57CE",
        src: "/img/store/hzwsc.png"
      },
      {
        name: "\u4FDD\u5229\u535A\u7687",
        src: "/img/store/blbh.png"
      },
      {
        name: "\u4E07\u6CF0\u9686\u5BB6\u5C45\u5EFA\u6750\u5E02\u573A",
        src: "/img/store/wantailong.png"
      },
      {
        name: "\u5927\u5546\u6C47",
        src: "/img/store/dsh.png"
      },
      {
        name: "\u534E\u6D32\u5BB6\u5C45",
        src: "/img/store/hzjj.png"
      },
      {
        name: "\u661F\u827A\u4F73",
        src: "/img/store/xyj.png"
      },
      {
        name: "\u94F6\u5EA7\u5BB6\u5C45",
        src: "/img/store/yzjj.png"
      },
      {
        name: "\u535A\u7F8E\u88C5\u9970\u57CE",
        src: "/img/store/bm.png"
      },
      {
        name: "\u9886\u822A\u56FD\u8D38",
        src: "/img/store/lhgm.png"
      },
      {
        name: "\u7EA2\u661F\u7F8E\u5BB6",
        src: "/img/store/hxmj.png"
      },
      {
        name: "\u6E05\u4E30\u56FD\u9645\u5BB6\u5C45",
        src: "/img/store/qfgjjj.png"
      },
      {
        name: "\u5EFA\u914D\u9F99\u5BB6\u5C45\u5EFA\u6750",
        src: "/img/store/jpl.png"
      },
      {
        name: "\u8346\u95E8\u5927\u5BB6\u88C5",
        src: "/img/store/jmdjz.png"
      },
      {
        name: "\u7687\u671D\u56FD\u9645\u5EFA\u6750\u5BB6\u5C45",
        src: "/img/store/hc.png"
      },
      {
        name: "\u5409\u76DB\u4F1F\u90A6",
        src: "/img/store/jswb.png"
      },
      {
        name: "\u5BB6\u6C47\u751F\u6D3B\u5E7F\u573A",
        src: "/img/store/jh.png"
      },
      {
        name: "\u56FD\u90A6\u96C6\u56E2",
        src: "/img/store/gb.png"
      },
      {
        name: "e\u5BB6\u5929\u4E0B\u5BB6\u5C45",
        src: "/img/store/yjtx.png"
      },
      {
        name: "\u5C45\u6613\u7A7A\u95F4",
        src: "/img/store/jykj.png"
      }
    ];
    const bank = [
      {
        name: "\u4E2D\u56FD\u94F6\u884C",
        src: "/img/bank/zgyh.png"
      },
      {
        name: "\u4E2D\u56FD\u5EFA\u8BBE\u94F6\u884C",
        src: "/img/bank/zgjsyh.png"
      },
      {
        name: "\u4E2D\u56FD\u5DE5\u5546\u94F6\u884C",
        src: "/img/bank/zggsyh.png"
      },
      {
        name: "\u4E2D\u56FD\u519C\u4E1A\u94F6\u884C",
        src: "/img/bank/zgnyyh.png"
      },
      {
        name: "\u94F6\u8054\u5546\u52A1",
        src: "/img/bank/ylsw.png"
      },
      {
        name: "\u901A\u8054\u652F\u4ED8",
        src: "/img/bank/tlzf.png"
      },
      {
        name: "\u62C9\u5361\u62C9",
        src: "/img/bank/lkl.png"
      },
      {
        name: "\u5174\u4E1A\u94F6\u884C",
        src: "/img/bank/xyyh.png"
      },
      {
        name: "\u676D\u5DDE\u94F6\u884C",
        src: "/img/bank/hzyh.png"
      },
      {
        name: "\u56DB\u5DDD\u519C\u4FE1",
        src: "/img/bank/scnx.png"
      },
      {
        name: "\u9655\u897F\u4FE1\u5408",
        src: "/img/bank/sxxh.png"
      },
      {
        name: "\u8054\u8FEAlandi",
        src: "/img/bank/ld.png"
      },
      {
        name: "\u629A\u5DDE\u519C\u5546\u94F6\u884C",
        src: "/img/bank/fznsyh.png"
      },
      {
        name: "\u8427\u5C71\u519C\u5546\u94F6\u884C",
        src: "/img/bank/xsnsyh.png"
      },
      {
        name: "\u5347\u817Ecenterm",
        src: "/img/bank/st.png"
      },
      {
        name: "\u5B9E\u8FBEtart",
        src: "/img/bank/sd.png"
      },
      {
        name: "\u5609\u8054\u652F\u4ED8",
        src: "/img/bank/jlzf.png"
      },
      {
        name: "\u676D\u5DDE\u8054\u5408\u94F6\u884C",
        src: "/img/bank/hzlhyh.png"
      },
      {
        name: "\u7518\u8083\u94F6\u884C",
        src: "/img/bank/gsyh.png"
      },
      {
        name: "\u767E\u5BCCpax",
        src: "/img/bank/bf.png"
      },
      {
        name: "\u4EA4\u901A\u94F6\u884C",
        src: "/img/bank/jtyh.png"
      }
    ];
    const other = [
      {
        name: "\u963F\u91CC\u4E91",
        src: "/img/store/aly.png"
      },
      {
        name: "\u817E\u8BAF\u4E91",
        src: "/img/store/txy.png"
      },
      {
        name: "\u6709\u8D5E",
        src: "/img/store/yz.png"
      },
      {
        name: "\u5FB7\u7ACB\u4E91",
        src: "/img/store/dly.png"
      },
      {
        name: "\u505C\u7B80\u5355",
        src: "/img/store/tjd.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Product = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4ba39185><header id="toptop" data-v-4ba39185><div class="jumbotron jumbotron-fluid mb-0 pb-5 bg-primary" data-v-4ba39185><div class="container-fluid text-white h-100" data-v-4ba39185><div class="d-lg-flex align-items-center justify-content-between text-center pl-lg-5" data-v-4ba39185><div class="col pt-4 pb-4" data-v-4ba39185><h1 class="display-4 xs-title" data-v-4ba39185><span class="xs-100" data-v-4ba39185>\u5BB6\u5C45\u5356\u573A</span><strong class="xs-100 col-md-6 col-sm-12 p-0" data-v-4ba39185>\u667A\u6167\u5546\u573A</strong><div class="xs-100 col-md-12" data-v-4ba39185>\u89E3\u51B3\u65B9\u6848</div></h1><span data-v-4ba39185>SMART MALL SOLUTIONS FOR HOME STORES</span><h5 class="font-weight-light mb-4" data-v-4ba39185>\u4E13\u6CE8\u5BB6\u5C45\u5356\u573A\u7684\u8F6F\u4EF6\u670D\u52A1\u5546</h5><a href="#khjz" class="btn btn-lg btn-outline-white btn-round" data-v-4ba39185>\u67E5\u770B\u6848\u4F8B</a></div><div class="col align-self-bottom align-items-right text-right h-max-380 h-xl-560 position-relative z-index-1" data-v-4ba39185><img${ssrRenderAttr("src", _imports_0)} class="rounded img-fluid" data-v-4ba39185></div></div></div></div><svg style="${ssrRenderStyle({ "-webkit-transform": "rotate(-180deg)", "-moz-transform": "rotate(-180deg)", "-o-transform": "rotate(-180deg)", "transform": "rotate(-180deg)", "margin-top": "-1px" })}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 126" xml:space="preserve" data-v-4ba39185><path class="bg-primary" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z" data-v-4ba39185></path></svg></header><main class="container" data-v-4ba39185><section class="pt-5 pb-5" data-aos="fade-up" data-v-4ba39185><div class="row" data-v-4ba39185><div class="col-md-12" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-4ba39185><nav class="navbar navbar-expand-lg navbar-light bg-white" data-v-4ba39185><div class="container justify-content-center" data-v-4ba39185><ul class="navbar-nav my-nav-tab" data-v-4ba39185><li class="nav-item" data-v-4ba39185><a class="nav-link" data-v-4ba39185>\u89E3\u51B3\u65B9\u6848</a></li><li class="nav-item" data-v-4ba39185><a class="nav-link" data-v-4ba39185>\u884C\u4E1A\u89C2\u70B9</a></li><li class="nav-item" data-v-4ba39185><a class="nav-link" data-v-4ba39185>\u5BA2\u6237\u89C1\u8BC1</a></li><li class="nav-item" data-v-4ba39185><a class="nav-link" data-v-4ba39185>\u6D3B\u52A8\u8D44\u8BAF</a></li><li class="nav-item" data-v-4ba39185><a class="nav-link" data-v-4ba39185>\u5408\u4F5C\u5356\u573A</a></li><li class="nav-item" data-v-4ba39185><a class="nav-link" data-v-4ba39185>\u5408\u4F5C\u673A\u6784</a></li></ul></div></nav><hr id="jjfa" data-v-4ba39185></div></div></section><!--[-->`);
      ssrRenderList(productData, (pro) => {
        _push(`<section class="pt-3 pb-3" data-aos="fade-up" data-v-4ba39185><h3 class="h5 mb-2 font-weight-bold" data-v-4ba39185>${ssrInterpolate(pro.name)}</h3><div class="card-deck card-pricing text-center" data-v-4ba39185><!--[-->`);
        ssrRenderList(pro.data, (item) => {
          _push(ssrRenderComponent(_component_Product, {
            path: item.path,
            title: item.title,
            desc: item.desc,
            desc2: item.desc2,
            icon: item.icon
          }, null, _parent));
        });
        _push(`<!--]--></div></section>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(industryData, (card) => {
        _push(`<div data-v-4ba39185><section${ssrRenderAttr("id", card.target)} class="pt-5" data-aos="fade-up" data-v-4ba39185><h3 class="h5 mb-4 font-weight-bold" data-v-4ba39185>${ssrInterpolate(card.title)}</h3><div class="row" data-v-4ba39185><!--[-->`);
        ssrRenderList(card.data, (item) => {
          _push(`<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 transition-3d-hover mt-4" data-v-4ba39185>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="card border-0 shadow-sm" data-v-4ba39185${_scopeId}><div class="card-header p-0" data-v-4ba39185${_scopeId}><img${ssrRenderAttr("src", item.icon)} height="150" class="w-100" data-v-4ba39185${_scopeId}></div><div class="card-body text-dark" data-v-4ba39185${_scopeId}><div class="mb-4 gd-title" data-v-4ba39185${_scopeId}><h6 data-v-4ba39185${_scopeId}>${ssrInterpolate(item.title)}</h6></div><div class="row" data-v-4ba39185${_scopeId}><div class="col-sm-12 col-md-6" data-v-4ba39185${_scopeId}>${ssrInterpolate(item.class)}</div><div class="col-sm-12 col-md-6" data-v-4ba39185${_scopeId}>${ssrInterpolate(item.time)}</div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "card border-0 shadow-sm" }, [
                    createVNode("div", { class: "card-header p-0" }, [
                      createVNode("img", {
                        src: item.icon,
                        height: "150",
                        class: "w-100"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "card-body text-dark" }, [
                      createVNode("div", { class: "mb-4 gd-title" }, [
                        createVNode("h6", null, toDisplayString(item.title), 1)
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-sm-12 col-md-6" }, toDisplayString(item.class), 1),
                        createVNode("div", { class: "col-sm-12 col-md-6" }, toDisplayString(item.time), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></section></div>`);
      });
      _push(`<!--]--><section id="store" class="mt-5 pb-2" data-aos="fade-up" data-v-4ba39185><h3 class="h5 mb-4 font-weight-bold" data-v-4ba39185>\u5408\u4F5C\u5BB6\u5C45\u5356\u573A</h3><div class="row text-white" data-v-4ba39185><!--[-->`);
      ssrRenderList(furnitureStore, (item) => {
        _push(`<div class="col-2 col-xs-6" data-aos="flip-right" data-v-4ba39185><div class="bg-white store" data-v-4ba39185><img class="b-stroe"${ssrRenderAttr("src", item.src)} height="60"${ssrRenderAttr("alt", item.name)} srcset="" data-v-4ba39185><span data-v-4ba39185>${ssrInterpolate(item.name)}</span></div></div>`);
      });
      _push(`<!--]--></div></section><section id="hzjg" class="pt-2 pb-2" data-aos="flip-right" data-v-4ba39185><h3 class="h5 mb-4 font-weight-bold" data-v-4ba39185>\u5408\u4F5C\u91D1\u878D\u673A\u6784</h3><div class="row text-white" data-v-4ba39185><!--[-->`);
      ssrRenderList(bank, (item) => {
        _push(`<div class="col-2 col-xs-6" data-v-4ba39185><div class="bg-white store" data-v-4ba39185><img class="b-bank"${ssrRenderAttr("src", item.src)} width="200" height="60" alt="" srcset="" data-v-4ba39185><span data-v-4ba39185>${ssrInterpolate(item.name)}</span></div></div>`);
      });
      _push(`<!--]--></div></section><section class="pt-2 mb-5" data-aos="fade-up" data-v-4ba39185><h3 class="h5 mb-4 font-weight-bold" data-v-4ba39185>\u5176\u4ED6\u5408\u4F5C\u4F19\u4F34</h3><div class="row text-white align-items-center text-center" data-v-4ba39185><!--[-->`);
      ssrRenderList(other, (item) => {
        _push(`<div class="col-2 col-xs-6" data-v-4ba39185><div class="bg-white" data-v-4ba39185><img${ssrRenderAttr("src", item.src)} width="200" height="60" alt="" srcset="" data-v-4ba39185><span data-v-4ba39185>${ssrInterpolate(item.name)}</span></div></div>`);
      });
      _push(`<!--]--></div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ba39185"]]);

export { index as default };
//# sourceMappingURL=index-Dn7efUfy.mjs.map
