import { unref, mergeProps, withCtx, createVNode, Transition, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline/index.js";
import { Head } from "@inertiajs/inertia-vue3";
const logo = "/build/assets/logo.b4dd11f6.png";
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Popover), mergeProps({ class: "relative bg-white" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-7xl px-4 sm:px-6"${_scopeId}><div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"${_scopeId}><div class="flex justify-start lg:w-0 lg:flex-1"${_scopeId}><a href="#"${_scopeId}><span class="sr-only"${_scopeId}>Vlad Osmianski</span><img class="w-28 h-28 sm:h-10 rounded-md"${ssrRenderAttr("src", unref(logo))} alt=""${_scopeId}></a></div><div class="-my-2 -mr-2 md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>Open menu</span>`);
                  _push3(ssrRenderComponent(unref(Bars3Icon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "Open menu"),
                    createVNode(unref(Bars3Icon), {
                      class: "h-6 w-6",
                      "aria-hidden": "true"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(PopoverGroup), {
              as: "nav",
              class: "hidden space-x-10 md:flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"${_scopeId2}>Blog</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "#",
                      class: "text-base font-medium text-gray-500 hover:text-gray-900"
                    }, "Blog")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(PopoverPanel), {
              focus: "",
              class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"${_scopeId2}><div class="px-5 pt-5 pb-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"${_scopeId2}></div><div class="-mr-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Close menu</span>`);
                        _push4(ssrRenderComponent(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Close menu"),
                          createVNode(unref(XMarkIcon), {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="space-y-6 py-6 px-5"${_scopeId2}><div class="grid grid-cols-2 gap-y-4 gap-x-8"${_scopeId2}><a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"${_scopeId2}>Blog</a></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, [
                      createVNode("div", { class: "px-5 pt-5 pb-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode("img", {
                              class: "h-8 w-auto",
                              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                              alt: "Your Company"
                            })
                          ]),
                          createVNode("div", { class: "-mr-2" }, [
                            createVNode(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "sr-only" }, "Close menu"),
                                createVNode(unref(XMarkIcon), {
                                  class: "h-6 w-6",
                                  "aria-hidden": "true"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-6 py-6 px-5" }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-y-4 gap-x-8" }, [
                          createVNode("a", {
                            href: "#",
                            class: "text-base font-medium text-gray-900 hover:text-gray-700"
                          }, "Blog")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6" }, [
                createVNode("div", { class: "flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10" }, [
                  createVNode("div", { class: "flex justify-start lg:w-0 lg:flex-1" }, [
                    createVNode("a", { href: "#" }, [
                      createVNode("span", { class: "sr-only" }, "Vlad Osmianski"),
                      createVNode("img", {
                        class: "w-28 h-28 sm:h-10 rounded-md",
                        src: unref(logo),
                        alt: ""
                      }, null, 8, ["src"])
                    ])
                  ]),
                  createVNode("div", { class: "-my-2 -mr-2 md:hidden" }, [
                    createVNode(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open menu"),
                        createVNode(unref(Bars3Icon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(unref(PopoverGroup), {
                    as: "nav",
                    class: "hidden space-x-10 md:flex"
                  }, {
                    default: withCtx(() => [
                      createVNode("a", {
                        href: "#",
                        class: "text-base font-medium text-gray-500 hover:text-gray-900"
                      }, "Blog")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(Transition, {
                "enter-active-class": "duration-200 ease-out",
                "enter-from-class": "opacity-0 scale-95",
                "enter-to-class": "opacity-100 scale-100",
                "leave-active-class": "duration-100 ease-in",
                "leave-from-class": "opacity-100 scale-100",
                "leave-to-class": "opacity-0 scale-95"
              }, {
                default: withCtx(() => [
                  createVNode(unref(PopoverPanel), {
                    focus: "",
                    class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, [
                        createVNode("div", { class: "px-5 pt-5 pb-6" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", null, [
                              createVNode("img", {
                                class: "h-8 w-auto",
                                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                alt: "Your Company"
                              })
                            ]),
                            createVNode("div", { class: "-mr-2" }, [
                              createVNode(unref(PopoverButton), { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "sr-only" }, "Close menu"),
                                  createVNode(unref(XMarkIcon), {
                                    class: "h-6 w-6",
                                    "aria-hidden": "true"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-6 py-6 px-5" }, [
                          createVNode("div", { class: "grid grid-cols-2 gap-y-4 gap-x-8" }, [
                            createVNode("a", {
                              href: "#",
                              class: "text-base font-medium text-gray-900 hover:text-gray-700"
                            }, "Blog")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Hello, world!</title>`);
          } else {
            return [
              createVNode("title", null, "Hello, world!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Hello, world! <!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
