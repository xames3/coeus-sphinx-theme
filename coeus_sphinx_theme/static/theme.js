/*! For license information please see theme.js.LICENSE.txt */
!(function () {
    var e = {
        122: function (e) {
            var t;
            (t = function () {
                return (function () {
                    var e = {
                        686: function (e, t, n) {
                            "use strict";
                            n.d(t, {
                                default: function () {
                                    return x;
                                },
                            });
                            var r = n(279),
                                i = n.n(r),
                                o = n(370),
                                a = n.n(o),
                                s = n(817),
                                l = n.n(s);
                            function c(e) {
                                try {
                                    return document.execCommand(e);
                                } catch (e) {
                                    return !1;
                                }
                            }
                            var u = function (e) {
                                var t = l()(e);
                                return c("cut"), t;
                            },
                                f = function (e, t) {
                                    var n = (function (e) {
                                        var t = "rtl" === document.documentElement.getAttribute("dir"),
                                            n = document.createElement("textarea");
                                        (n.style.fontSize = "12pt"), (n.style.border = "0"), (n.style.padding = "0"), (n.style.margin = "0"), (n.style.position = "absolute"), (n.style[t ? "right" : "left"] = "-9999px");
                                        var r = window.pageYOffset || document.documentElement.show_scroll_to_top;
                                        return (n.style.top = "".concat(r, "px")), n.setAttribute("readonly", ""), (n.value = e), n;
                                    })(e);
                                    t.container.appendChild(n);
                                    var r = l()(n);
                                    return c("copy"), n.remove(), r;
                                },
                                d = function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { container: document.body },
                                        n = "";
                                    return (
                                        "string" == typeof e
                                            ? (n = f(e, t))
                                            : e instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == e ? void 0 : e.type)
                                                ? (n = f(e.value, t))
                                                : ((n = l()(e)), c("copy")),
                                        n
                                    );
                                };
                            function p(e) {
                                return (
                                    (p =
                                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                            ? function (e) {
                                                return typeof e;
                                            }
                                            : function (e) {
                                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                            }),
                                    p(e)
                                );
                            }
                            function _(e) {
                                return (
                                    (_ =
                                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                            ? function (e) {
                                                return typeof e;
                                            }
                                            : function (e) {
                                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                            }),
                                    _(e)
                                );
                            }
                            function h(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            function y(e, t) {
                                return (
                                    (y =
                                        Object.setPrototypeOf ||
                                        function (e, t) {
                                            return (e.__proto__ = t), e;
                                        }),
                                    y(e, t)
                                );
                            }
                            function m(e) {
                                return (
                                    (m = Object.setPrototypeOf
                                        ? Object.getPrototypeOf
                                        : function (e) {
                                            return e.__proto__ || Object.getPrototypeOf(e);
                                        }),
                                    m(e)
                                );
                            }
                            function v(e, t) {
                                var n = "data-clipboard-".concat(e);
                                if (t.hasAttribute(n)) return t.getAttribute(n);
                            }
                            var g = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && y(e, t);
                                })(l, e);
                                var t,
                                    n,
                                    r,
                                    i,
                                    o,
                                    s =
                                        ((i = l),
                                            (o = (function () {
                                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                                if (Reflect.construct.sham) return !1;
                                                if ("function" == typeof Proxy) return !0;
                                                try {
                                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0;
                                                } catch (e) {
                                                    return !1;
                                                }
                                            })()),
                                            function () {
                                                var e,
                                                    t,
                                                    n = m(i);
                                                if (o) {
                                                    var r = m(this).constructor;
                                                    e = Reflect.construct(n, arguments, r);
                                                } else e = n.apply(this, arguments);
                                                return !(t = e) || ("object" !== _(t) && "function" != typeof t)
                                                    ? (function (e) {
                                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                        return e;
                                                    })(this)
                                                    : t;
                                            });
                                function l(e, t) {
                                    var n;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, l),
                                        (n = s.call(this)).resolveOptions(t),
                                        n.listenClick(e),
                                        n
                                    );
                                }
                                return (
                                    (t = l),
                                    (n = [
                                        {
                                            key: "resolveOptions",
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                (this.action = "function" == typeof e.action ? e.action : this.defaultAction),
                                                    (this.target = "function" == typeof e.target ? e.target : this.defaultTarget),
                                                    (this.text = "function" == typeof e.text ? e.text : this.defaultText),
                                                    (this.container = "object" === _(e.container) ? e.container : document.body);
                                            },
                                        },
                                        {
                                            key: "listenClick",
                                            value: function (e) {
                                                var t = this;
                                                this.listener = a()(e, "click", function (e) {
                                                    return t.onClick(e);
                                                });
                                            },
                                        },
                                        {
                                            key: "onClick",
                                            value: function (e) {
                                                var t = e.delegateTarget || e.currentTarget,
                                                    n = this.action(t) || "copy",
                                                    r = (function () {
                                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                            t = e.action,
                                                            n = void 0 === t ? "copy" : t,
                                                            r = e.container,
                                                            i = e.target,
                                                            o = e.text;
                                                        if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                                        if (void 0 !== i) {
                                                            if (!i || "object" !== p(i) || 1 !== i.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                                            if ("copy" === n && i.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                                            if ("cut" === n && (i.hasAttribute("readonly") || i.hasAttribute("disabled")))
                                                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                                        }
                                                        return o ? d(o, { container: r }) : i ? ("cut" === n ? u(i) : d(i, { container: r })) : void 0;
                                                    })({ action: n, container: this.container, target: this.target(t), text: this.text(t) });
                                                this.emit(r ? "success" : "error", {
                                                    action: n,
                                                    text: r,
                                                    trigger: t,
                                                    clearSelection: function () {
                                                        t && t.focus(), window.getSelection().removeAllRanges();
                                                    },
                                                });
                                            },
                                        },
                                        {
                                            key: "defaultAction",
                                            value: function (e) {
                                                return v("action", e);
                                            },
                                        },
                                        {
                                            key: "defaultTarget",
                                            value: function (e) {
                                                var t = v("target", e);
                                                if (t) return document.querySelector(t);
                                            },
                                        },
                                        {
                                            key: "defaultText",
                                            value: function (e) {
                                                return v("text", e);
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                this.listener.destroy();
                                            },
                                        },
                                    ]),
                                    (r = [
                                        {
                                            key: "copy",
                                            value: function (e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { container: document.body };
                                                return d(e, t);
                                            },
                                        },
                                        {
                                            key: "cut",
                                            value: function (e) {
                                                return u(e);
                                            },
                                        },
                                        {
                                            key: "isSupported",
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                                    t = "string" == typeof e ? [e] : e,
                                                    n = !!document.queryCommandSupported;
                                                return (
                                                    t.forEach(function (e) {
                                                        n = n && !!document.queryCommandSupported(e);
                                                    }),
                                                    n
                                                );
                                            },
                                        },
                                    ]),
                                    n && h(t.prototype, n),
                                    r && h(t, r),
                                    l
                                );
                            })(i()),
                                x = g;
                        },
                        828: function (e) {
                            if ("undefined" != typeof Element && !Element.prototype.matches) {
                                var t = Element.prototype;
                                t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
                            }
                            e.exports = function (e, t) {
                                for (; e && 9 !== e.nodeType;) {
                                    if ("function" == typeof e.matches && e.matches(t)) return e;
                                    e = e.parentNode;
                                }
                            };
                        },
                        438: function (e, t, n) {
                            var r = n(828);
                            function i(e, t, n, r, i) {
                                var a = o.apply(this, arguments);
                                return (
                                    e.addEventListener(n, a, i),
                                    {
                                        destroy: function () {
                                            e.removeEventListener(n, a, i);
                                        },
                                    }
                                );
                            }
                            function o(e, t, n, i) {
                                return function (n) {
                                    (n.delegateTarget = r(n.target, t)), n.delegateTarget && i.call(e, n);
                                };
                            }
                            e.exports = function (e, t, n, r, o) {
                                return "function" == typeof e.addEventListener
                                    ? i.apply(null, arguments)
                                    : "function" == typeof n
                                        ? i.bind(null, document).apply(null, arguments)
                                        : ("string" == typeof e && (e = document.querySelectorAll(e)),
                                            Array.prototype.map.call(e, function (e) {
                                                return i(e, t, n, r, o);
                                            }));
                            };
                        },
                        879: function (e, t) {
                            (t.node = function (e) {
                                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
                            }),
                                (t.nodeList = function (e) {
                                    var n = Object.prototype.toString.call(e);
                                    return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]));
                                }),
                                (t.string = function (e) {
                                    return "string" == typeof e || e instanceof String;
                                }),
                                (t.fn = function (e) {
                                    return "[object Function]" === Object.prototype.toString.call(e);
                                });
                        },
                        370: function (e, t, n) {
                            var r = n(879),
                                i = n(438);
                            e.exports = function (e, t, n) {
                                if (!e && !t && !n) throw new Error("Missing required arguments");
                                if (!r.string(t)) throw new TypeError("Second argument must be a String");
                                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                                if (r.node(e))
                                    return (function (e, t, n) {
                                        return (
                                            e.addEventListener(t, n),
                                            {
                                                destroy: function () {
                                                    e.removeEventListener(t, n);
                                                },
                                            }
                                        );
                                    })(e, t, n);
                                if (r.nodeList(e))
                                    return (function (e, t, n) {
                                        return (
                                            Array.prototype.forEach.call(e, function (e) {
                                                e.addEventListener(t, n);
                                            }),
                                            {
                                                destroy: function () {
                                                    Array.prototype.forEach.call(e, function (e) {
                                                        e.removeEventListener(t, n);
                                                    });
                                                },
                                            }
                                        );
                                    })(e, t, n);
                                if (r.string(e))
                                    return (function (e, t, n) {
                                        return i(document.body, e, t, n);
                                    })(e, t, n);
                                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                            };
                        },
                        817: function (e) {
                            e.exports = function (e) {
                                var t;
                                if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
                                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                                    var n = e.hasAttribute("readonly");
                                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), (t = e.value);
                                } else {
                                    e.hasAttribute("contenteditable") && e.focus();
                                    var r = window.getSelection(),
                                        i = document.createRange();
                                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), (t = r.toString());
                                }
                                return t;
                            };
                        },
                        279: function (e) {
                            function t() { }
                            (t.prototype = {
                                on: function (e, t, n) {
                                    var r = this.e || (this.e = {});
                                    return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
                                },
                                once: function (e, t, n) {
                                    var r = this;
                                    function i() {
                                        r.off(e, i), t.apply(n, arguments);
                                    }
                                    return (i._ = t), this.on(e, i, n);
                                },
                                emit: function (e) {
                                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                                    return this;
                                },
                                off: function (e, t) {
                                    var n = this.e || (this.e = {}),
                                        r = n[e],
                                        i = [];
                                    if (r && t) for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                                    return i.length ? (n[e] = i) : delete n[e], this;
                                },
                            }),
                                (e.exports = t),
                                (e.exports.TinyEmitter = t);
                        },
                    },
                        t = {};
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var i = (t[r] = { exports: {} });
                        return e[r](i, i.exports, n), i.exports;
                    }
                    return (
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                        return e.default;
                                    }
                                    : function () {
                                        return e;
                                    };
                            return n.d(t, { a: t }), t;
                        }),
                        (n.d = function (e, t) {
                            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        n(686)
                    );
                })().default;
            }),
                (e.exports = t());
        },
    },
        t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = (t[r] = { exports: {} });
        return e[r].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                    return e.default;
                }
                : function () {
                    return e;
                };
        return n.d(t, { a: t }), t;
    }),
        (n.d = function (e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (function () {
            "use strict";
            function e(e) {
                if (e.includes("full")) return 0.99;
                if (e.includes("half")) return 0.5;
                if (!e.includes("threshold")) return 0;
                let t = e[e.indexOf("threshold") + 1];
                return "100" === t ? 1 : "0" === t ? 0 : Number(`.${t}`);
            }
            function t(e) {
                let t = e.match(/^(-?[0-9]+)(px|%)?$/);
                return t ? t[1] + (t[2] || "px") : void 0;
            }
            function r(e) {
                const n = "0px 0px 0px 0px",
                    r = e.indexOf("margin");
                if (-1 === r) return n;
                let i = [];
                for (let n = 1; n < 5; n++) i.push(t(e[r + n] || ""));
                return (i = i.filter((e) => void 0 !== e)), i.length ? i.join(" ").trim() : n;
            }
            var i,
                o,
                a,
                s,
                l = !1,
                c = !1,
                u = [],
                f = -1;
            function d(e) {
                let t = u.indexOf(e);
                -1 !== t && t > f && u.splice(t, 1);
            }
            function p() {
                (l = !1), (c = !0);
                for (let e = 0; e < u.length; e++) u[e](), (f = e);
                (u.length = 0), (f = -1), (c = !1);
            }
            var _ = !0;
            function h(e) {
                o = e;
            }
            function y(e, t) {
                let n,
                    r = !0,
                    i = o(() => {
                        let i = e();
                        JSON.stringify(i),
                            r
                                ? (n = i)
                                : queueMicrotask(() => {
                                    t(i, n), (n = i);
                                }),
                            (r = !1);
                    });
                return () => a(i);
            }
            var m = [],
                v = [],
                g = [];
            function x(e, t) {
                "function" == typeof t ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : ((t = e), v.push(t));
            }
            function b(e) {
                m.push(e);
            }
            function w(e, t, n) {
                e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(n);
            }
            function E(e, t) {
                e._x_attributeCleanups &&
                    Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
                        (void 0 === t || t.includes(n)) && (r.forEach((e) => e()), delete e._x_attributeCleanups[n]);
                    });
            }
            var S = new MutationObserver(L),
                A = !1;
            function k() {
                S.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), (A = !0);
            }
            function O() {
                !(function () {
                    let e = S.takeRecords();
                    j.push(() => e.length > 0 && L(e));
                    let t = j.length;
                    queueMicrotask(() => {
                        if (j.length === t) for (; j.length > 0;) j.shift()();
                    });
                })(),
                    S.disconnect(),
                    (A = !1);
            }
            var j = [];
            function C(e) {
                if (!A) return e();
                O();
                let t = e();
                return k(), t;
            }
            var T = !1,
                $ = [];
            function L(e) {
                if (T) return void ($ = $.concat(e));
                let t = new Set(),
                    n = new Set(),
                    r = new Map(),
                    i = new Map();
                for (let o = 0; o < e.length; o++)
                    if (
                        !e[o].target._x_ignoreMutationObserver &&
                        ("childList" === e[o].type && (e[o].addedNodes.forEach((e) => 1 === e.nodeType && t.add(e)), e[o].removedNodes.forEach((e) => 1 === e.nodeType && n.add(e))), "attributes" === e[o].type)
                    ) {
                        let t = e[o].target,
                            n = e[o].attributeName,
                            a = e[o].oldValue,
                            s = () => {
                                r.has(t) || r.set(t, []), r.get(t).push({ name: n, value: t.getAttribute(n) });
                            },
                            l = () => {
                                i.has(t) || i.set(t, []), i.get(t).push(n);
                            };
                        t.hasAttribute(n) && null === a ? s() : t.hasAttribute(n) ? (l(), s()) : l();
                    }
                i.forEach((e, t) => {
                    E(t, e);
                }),
                    r.forEach((e, t) => {
                        m.forEach((n) => n(t, e));
                    });
                for (let e of n) t.has(e) || v.forEach((t) => t(e));
                t.forEach((e) => {
                    (e._x_ignoreSelf = !0), (e._x_ignore = !0);
                });
                for (let e of t) n.has(e) || (e.isConnected && (delete e._x_ignoreSelf, delete e._x_ignore, g.forEach((t) => t(e)), (e._x_ignore = !0), (e._x_ignoreSelf = !0)));
                t.forEach((e) => {
                    delete e._x_ignoreSelf, delete e._x_ignore;
                }),
                    (t = null),
                    (n = null),
                    (r = null),
                    (i = null);
            }
            function M(e) {
                return R(P(e));
            }
            function N(e, t, n) {
                return (
                    (e._x_dataStack = [t, ...P(n || e)]),
                    () => {
                        e._x_dataStack = e._x_dataStack.filter((e) => e !== t);
                    }
                );
            }
            function P(e) {
                return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? P(e.host) : e.parentNode ? P(e.parentNode) : [];
            }
            function R(e) {
                return new Proxy({ objects: e }, q);
            }
            var q = {
                ownKeys({ objects: e }) {
                    return Array.from(new Set(e.flatMap((e) => Object.keys(e))));
                },
                has({ objects: e }, t) {
                    return t != Symbol.unscopables && e.some((e) => Object.prototype.hasOwnProperty.call(e, t) || Reflect.has(e, t));
                },
                get({ objects: e }, t, n) {
                    return "toJSON" == t ? I : Reflect.get(e.find((e) => Reflect.has(e, t)) || {}, t, n);
                },
                set({ objects: e }, t, n, r) {
                    const i = e.find((e) => Object.prototype.hasOwnProperty.call(e, t)) || e[e.length - 1],
                        o = Object.getOwnPropertyDescriptor(i, t);
                    return o?.set && o?.get ? o.set.call(r, n) || !0 : Reflect.set(i, t, n);
                },
            };
            function I() {
                return Reflect.ownKeys(this).reduce((e, t) => ((e[t] = Reflect.get(this, t)), e), {});
            }
            function D(e) {
                let t = (n, r = "") => {
                    Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([i, { value: o, enumerable: a }]) => {
                        if (!1 === a || void 0 === o) return;
                        if ("object" == typeof o && null !== o && o.__v_skip) return;
                        let s = "" === r ? i : `${r}.${i}`;
                        var l;
                        "object" == typeof o && null !== o && o._x_interceptor ? (n[i] = o.initialize(e, s, i)) : "object" != typeof (l = o) || Array.isArray(l) || null === l || o === n || o instanceof Element || t(o, s);
                    });
                };
                return t(e);
            }
            function z(e, t = () => { }) {
                let n = {
                    initialValue: void 0,
                    _x_interceptor: !0,
                    initialize(t, n, r) {
                        return e(
                            this.initialValue,
                            () =>
                                (function (e, t) {
                                    return t.split(".").reduce((e, t) => e[t], e);
                                })(t, n),
                            (e) => B(t, n, e),
                            n,
                            r
                        );
                    },
                };
                return (
                    t(n),
                    (e) => {
                        if ("object" == typeof e && null !== e && e._x_interceptor) {
                            let t = n.initialize.bind(n);
                            n.initialize = (r, i, o) => {
                                let a = e.initialize(r, i, o);
                                return (n.initialValue = a), t(r, i, o);
                            };
                        } else n.initialValue = e;
                        return n;
                    }
                );
            }
            function B(e, t, n) {
                if (("string" == typeof t && (t = t.split(".")), 1 !== t.length)) {
                    if (0 === t.length) throw error;
                    return e[t[0]] || (e[t[0]] = {}), B(e[t[0]], t.slice(1), n);
                }
                e[t[0]] = n;
            }
            var F = {};
            function H(e, t) {
                F[e] = t;
            }
            function W(e, t) {
                return (
                    Object.entries(F).forEach(([n, r]) => {
                        let i = null;
                        Object.defineProperty(e, `$${n}`, {
                            get() {
                                return r(
                                    t,
                                    (function () {
                                        if (i) return i;
                                        {
                                            let [e, n] = ue(t);
                                            return (i = { interceptor: z, ...e }), x(t, n), i;
                                        }
                                    })()
                                );
                            },
                            enumerable: !1,
                        });
                    }),
                    e
                );
            }
            function V(e, t, n, ...r) {
                try {
                    return n(...r);
                } catch (n) {
                    U(n, e, t);
                }
            }
            function U(e, t, n = void 0) {
                (e = Object.assign(e ?? { message: "No error message given." }, { el: t, expression: n })),
                    console.warn(`Alpine Expression Error: ${e.message}\n\n${n ? 'Expression: "' + n + '"\n\n' : ""}`, t),
                    setTimeout(() => {
                        throw e;
                    }, 0);
            }
            var K = !0;
            function Z(e) {
                let t = K;
                K = !1;
                let n = e();
                return (K = t), n;
            }
            function J(e, t, n = {}) {
                let r;
                return X(e, t)((e) => (r = e), n), r;
            }
            function X(...e) {
                return Y(...e);
            }
            var Y = G;
            function G(e, t) {
                let n = {};
                W(n, e);
                let r = [n, ...P(e)],
                    i =
                        "function" == typeof t
                            ? (function (e, t) {
                                return (n = () => { }, { scope: r = {}, params: i = [] } = {}) => {
                                    ee(n, t.apply(R([r, ...e]), i));
                                };
                            })(r, t)
                            : (function (e, t, n) {
                                let r = (function (e, t) {
                                    if (Q[e]) return Q[e];
                                    let n = Object.getPrototypeOf(async function () { }).constructor,
                                        r = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e;
                                    let i = (() => {
                                        try {
                                            let t = new n(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);
                                            return Object.defineProperty(t, "name", { value: `[Alpine] ${e}` }), t;
                                        } catch (n) {
                                            return U(n, t, e), Promise.resolve();
                                        }
                                    })();
                                    return (Q[e] = i), i;
                                })(t, n);
                                return (i = () => { }, { scope: o = {}, params: a = [] } = {}) => {
                                    (r.result = void 0), (r.finished = !1);
                                    let s = R([o, ...e]);
                                    if ("function" == typeof r) {
                                        let e = r(r, s).catch((e) => U(e, n, t));
                                        r.finished
                                            ? (ee(i, r.result, s, a, n), (r.result = void 0))
                                            : e
                                                .then((e) => {
                                                    ee(i, e, s, a, n);
                                                })
                                                .catch((e) => U(e, n, t))
                                                .finally(() => (r.result = void 0));
                                    }
                                };
                            })(r, t, e);
                return V.bind(null, e, t, i);
            }
            var Q = {};
            function ee(e, t, n, r, i) {
                if (K && "function" == typeof t) {
                    let o = t.apply(n, r);
                    o instanceof Promise ? o.then((t) => ee(e, t, n, r)).catch((e) => U(e, i, t)) : e(o);
                } else "object" == typeof t && t instanceof Promise ? t.then((t) => e(t)) : e(t);
            }
            var te = "x-";
            function ne(e = "") {
                return te + e;
            }
            var re = {};
            function ie(e, t) {
                return (
                    (re[e] = t),
                    {
                        before(t) {
                            if (!re[t]) return void console.warn(String.raw`Cannot find directive \`${t}\`. \`${e}\` will use the default order of execution`);
                            const n = ve.indexOf(t);
                            ve.splice(n >= 0 ? n : ve.indexOf("DEFAULT"), 0, e);
                        },
                    }
                );
            }
            function oe(e, t, n) {
                if (((t = Array.from(t)), e._x_virtualDirectives)) {
                    let n = Object.entries(e._x_virtualDirectives).map(([e, t]) => ({ name: e, value: t })),
                        r = ae(n);
                    (n = n.map((e) => (r.find((t) => t.name === e.name) ? { name: `x-bind:${e.name}`, value: `"${e.value}"` } : e))), (t = t.concat(n));
                }
                let r = {},
                    i = t
                        .map(de((e, t) => (r[e] = t)))
                        .filter(he)
                        .map(
                            (function (e, t) {
                                return ({ name: n, value: r }) => {
                                    let i = n.match(ye()),
                                        o = n.match(/:([a-zA-Z0-9\-_:]+)/),
                                        a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                                        s = t || e[n] || n;
                                    return { type: i ? i[1] : null, value: o ? o[1] : null, modifiers: a.map((e) => e.replace(".", "")), expression: r, original: s };
                                };
                            })(r, n)
                        )
                        .sort(ge);
                return i.map((t) =>
                    (function (e, t) {
                        let n = re[t.type] || (() => { }),
                            [r, i] = ue(e);
                        w(e, t.original, i);
                        let o = () => {
                            e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, r), (n = n.bind(n, e, t, r)), se ? le.get(ce).push(n) : n());
                        };
                        return (o.runCleanups = i), o;
                    })(e, t)
                );
            }
            function ae(e) {
                return Array.from(e)
                    .map(de())
                    .filter((e) => !he(e));
            }
            var se = !1,
                le = new Map(),
                ce = Symbol();
            function ue(e) {
                let t = [],
                    [n, r] = (function (e) {
                        let t = () => { };
                        return [
                            (n) => {
                                let r = o(n);
                                return (
                                    e._x_effects ||
                                    ((e._x_effects = new Set()),
                                        (e._x_runEffects = () => {
                                            e._x_effects.forEach((e) => e());
                                        })),
                                    e._x_effects.add(r),
                                    (t = () => {
                                        void 0 !== r && (e._x_effects.delete(r), a(r));
                                    }),
                                    r
                                );
                            },
                            () => {
                                t();
                            },
                        ];
                    })(e);
                return t.push(r), [{ Alpine: _t, effect: n, cleanup: (e) => t.push(e), evaluateLater: X.bind(X, e), evaluate: J.bind(J, e) }, () => t.forEach((e) => e())];
            }
            var fe = (e, t) => ({ name: n, value: r }) => (n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r });
            function de(e = () => { }) {
                return ({ name: t, value: n }) => {
                    let { name: r, value: i } = pe.reduce((e, t) => t(e), { name: t, value: n });
                    return r !== t && e(r, t), { name: r, value: i };
                };
            }
            var pe = [];
            function _e(e) {
                pe.push(e);
            }
            function he({ name: e }) {
                return ye().test(e);
            }
            var ye = () => new RegExp(`^${te}([^:^.]+)\\b`),
                me = "DEFAULT",
                ve = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", me, "teleport"];
            function ge(e, t) {
                let n = -1 === ve.indexOf(e.type) ? me : e.type,
                    r = -1 === ve.indexOf(t.type) ? me : t.type;
                return ve.indexOf(n) - ve.indexOf(r);
            }
            function xe(e, t, n = {}) {
                e.dispatchEvent(new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 }));
            }
            function be(e, t) {
                if ("function" == typeof ShadowRoot && e instanceof ShadowRoot) return void Array.from(e.children).forEach((e) => be(e, t));
                let n = !1;
                if ((t(e, () => (n = !0)), n)) return;
                let r = e.firstElementChild;
                for (; r;) be(r, t), (r = r.nextElementSibling);
            }
            function we(e, ...t) {
                console.warn(`Alpine Warning: ${e}`, ...t);
            }
            var Ee = !1,
                Se = [],
                Ae = [];
            function ke() {
                return Se.map((e) => e());
            }
            function Oe() {
                return Se.concat(Ae).map((e) => e());
            }
            function je(e) {
                Se.push(e);
            }
            function Ce(e) {
                Ae.push(e);
            }
            function Te(e, t = !1) {
                return $e(e, (e) => {
                    if ((t ? Oe() : ke()).some((t) => e.matches(t))) return !0;
                });
            }
            function $e(e, t) {
                if (e) {
                    if (t(e)) return e;
                    if ((e._x_teleportBack && (e = e._x_teleportBack), e.parentElement)) return $e(e.parentElement, t);
                }
            }
            var Le = [];
            function Me(e, t = be, n = () => { }) {
                !(function (r) {
                    se = !0;
                    let i = Symbol();
                    (ce = i), le.set(i, []);
                    let o = () => {
                        for (; le.get(i).length;) le.get(i).shift()();
                        le.delete(i);
                    };
                    t(e, (e, t) => {
                        n(e, t), Le.forEach((n) => n(e, t)), oe(e, e.attributes).forEach((e) => e()), e._x_ignore && t();
                    }),
                        (se = !1),
                        o();
                })();
            }
            function Ne(e, t = be) {
                t(e, (e) => {
                    E(e),
                        (function (e) {
                            if (e._x_cleanups) for (; e._x_cleanups.length;) e._x_cleanups.pop()();
                        })(e);
                });
            }
            var Pe = [],
                Re = !1;
            function qe(e = () => { }) {
                return (
                    queueMicrotask(() => {
                        Re ||
                            setTimeout(() => {
                                Ie();
                            });
                    }),
                    new Promise((t) => {
                        Pe.push(() => {
                            e(), t();
                        });
                    })
                );
            }
            function Ie() {
                for (Re = !1; Pe.length;) Pe.shift()();
            }
            function De(e, t) {
                return Array.isArray(t)
                    ? ze(e, t.join(" "))
                    : "object" == typeof t && null !== t
                        ? (function (e, t) {
                            let n = (e) => e.split(" ").filter(Boolean),
                                r = Object.entries(t)
                                    .flatMap(([e, t]) => !!t && n(e))
                                    .filter(Boolean),
                                i = Object.entries(t)
                                    .flatMap(([e, t]) => !t && n(e))
                                    .filter(Boolean),
                                o = [],
                                a = [];
                            return (
                                i.forEach((t) => {
                                    e.classList.contains(t) && (e.classList.remove(t), a.push(t));
                                }),
                                r.forEach((t) => {
                                    e.classList.contains(t) || (e.classList.add(t), o.push(t));
                                }),
                                () => {
                                    a.forEach((t) => e.classList.add(t)), o.forEach((t) => e.classList.remove(t));
                                }
                            );
                        })(e, t)
                        : "function" == typeof t
                            ? De(e, t())
                            : ze(e, t);
            }
            function ze(e, t) {
                return (
                    (t = !0 === t ? (t = "") : t || ""),
                    (n = t
                        .split(" ")
                        .filter((t) => !e.classList.contains(t))
                        .filter(Boolean)),
                    e.classList.add(...n),
                    () => {
                        e.classList.remove(...n);
                    }
                );
                var n;
            }
            function Be(e, t) {
                return "object" == typeof t && null !== t
                    ? (function (e, t) {
                        let n = {};
                        return (
                            Object.entries(t).forEach(([t, r]) => {
                                (n[t] = e.style[t]), t.startsWith("--") || (t = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), e.style.setProperty(t, r);
                            }),
                            setTimeout(() => {
                                0 === e.style.length && e.removeAttribute("style");
                            }),
                            () => {
                                Be(e, n);
                            }
                        );
                    })(e, t)
                    : (function (e, t) {
                        let n = e.getAttribute("style", t);
                        return (
                            e.setAttribute("style", t),
                            () => {
                                e.setAttribute("style", n || "");
                            }
                        );
                    })(e, t);
            }
            function Fe(e, t = () => { }) {
                let n = !1;
                return function () {
                    n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
                };
            }
            function He(e, t, n = {}) {
                e._x_transition ||
                    (e._x_transition = {
                        enter: { during: n, start: n, end: n },
                        leave: { during: n, start: n, end: n },
                        in(n = () => { }, r = () => { }) {
                            Ve(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, n, r);
                        },
                        out(n = () => { }, r = () => { }) {
                            Ve(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, n, r);
                        },
                    });
            }
            function We(e) {
                let t = e.parentNode;
                if (t) return t._x_hidePromise ? t : We(t);
            }
            function Ve(e, t, { during: n, start: r, end: i } = {}, o = () => { }, a = () => { }) {
                if ((e._x_transitioning && e._x_transitioning.cancel(), 0 === Object.keys(n).length && 0 === Object.keys(r).length && 0 === Object.keys(i).length)) return o(), void a();
                let s, l, c;
                !(function (e, t) {
                    let n,
                        r,
                        i,
                        o = Fe(() => {
                            C(() => {
                                (n = !0), r || t.before(), i || (t.end(), Ie()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
                            });
                        });
                    (e._x_transitioning = {
                        beforeCancels: [],
                        beforeCancel(e) {
                            this.beforeCancels.push(e);
                        },
                        cancel: Fe(function () {
                            for (; this.beforeCancels.length;) this.beforeCancels.shift()();
                            o();
                        }),
                        finish: o,
                    }),
                        C(() => {
                            t.start(), t.during();
                        }),
                        (Re = !0),
                        requestAnimationFrame(() => {
                            if (n) return;
                            let o = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")),
                                a = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                            0 === o && (o = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))),
                                C(() => {
                                    t.before();
                                }),
                                (r = !0),
                                requestAnimationFrame(() => {
                                    n ||
                                        (C(() => {
                                            t.end();
                                        }),
                                            Ie(),
                                            setTimeout(e._x_transitioning.finish, o + a),
                                            (i = !0));
                                });
                        });
                })(e, {
                    start() {
                        s = t(e, r);
                    },
                    during() {
                        l = t(e, n);
                    },
                    before: o,
                    end() {
                        s(), (c = t(e, i));
                    },
                    after: a,
                    cleanup() {
                        l(), c();
                    },
                });
            }
            function Ue(e, t, n) {
                if (-1 === e.indexOf(t)) return n;
                const r = e[e.indexOf(t) + 1];
                if (!r) return n;
                if ("scale" === t && isNaN(r)) return n;
                if ("duration" === t || "delay" === t) {
                    let e = r.match(/([0-9]+)ms/);
                    if (e) return e[1];
                }
                return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r;
            }
            ie("transition", (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
                "function" == typeof r && (r = i(r)),
                    !1 !== r &&
                    (r && "boolean" != typeof r
                        ? (function (e, t, n) {
                            He(e, De, ""),
                                {
                                    enter: (t) => {
                                        e._x_transition.enter.during = t;
                                    },
                                    "enter-start": (t) => {
                                        e._x_transition.enter.start = t;
                                    },
                                    "enter-end": (t) => {
                                        e._x_transition.enter.end = t;
                                    },
                                    leave: (t) => {
                                        e._x_transition.leave.during = t;
                                    },
                                    "leave-start": (t) => {
                                        e._x_transition.leave.start = t;
                                    },
                                    "leave-end": (t) => {
                                        e._x_transition.leave.end = t;
                                    },
                                }[n](t);
                        })(e, r, t)
                        : (function (e, t, n) {
                            He(e, Be);
                            let r = !t.includes("in") && !t.includes("out") && !n,
                                i = r || t.includes("in") || ["enter"].includes(n),
                                o = r || t.includes("out") || ["leave"].includes(n);
                            t.includes("in") && !r && (t = t.filter((e, n) => n < t.indexOf("out"))), t.includes("out") && !r && (t = t.filter((e, n) => n > t.indexOf("out")));
                            let a = !t.includes("opacity") && !t.includes("scale"),
                                s = a || t.includes("opacity") ? 0 : 1,
                                l = a || t.includes("scale") ? Ue(t, "scale", 95) / 100 : 1,
                                c = Ue(t, "delay", 0) / 1e3,
                                u = Ue(t, "origin", "center"),
                                f = "opacity, transform",
                                d = Ue(t, "duration", 150) / 1e3,
                                p = Ue(t, "duration", 75) / 1e3,
                                _ = "cubic-bezier(0.4, 0.0, 0.2, 1)";
                            i &&
                                ((e._x_transition.enter.during = { transformOrigin: u, transitionDelay: `${c}s`, transitionProperty: f, transitionDuration: `${d}s`, transitionTimingFunction: _ }),
                                    (e._x_transition.enter.start = { opacity: s, transform: `scale(${l})` }),
                                    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
                                o &&
                                ((e._x_transition.leave.during = { transformOrigin: u, transitionDelay: `${c}s`, transitionProperty: f, transitionDuration: `${p}s`, transitionTimingFunction: _ }),
                                    (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
                                    (e._x_transition.leave.end = { opacity: s, transform: `scale(${l})` }));
                        })(e, n, t));
            }),
                (window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, n, r) {
                    const i = "visible" === document.visibilityState ? requestAnimationFrame : setTimeout;
                    let o = () => i(n);
                    t
                        ? e._x_transition && (e._x_transition.enter || e._x_transition.leave)
                            ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length)
                                ? e._x_transition.in(n)
                                : o()
                            : e._x_transition
                                ? e._x_transition.in(n)
                                : o()
                        : ((e._x_hidePromise = e._x_transition
                            ? new Promise((t, n) => {
                                e._x_transition.out(
                                    () => { },
                                    () => t(r)
                                ),
                                    e._x_transitioning && e._x_transitioning.beforeCancel(() => n({ isFromCancelledTransition: !0 }));
                            })
                            : Promise.resolve(r)),
                            queueMicrotask(() => {
                                let t = We(e);
                                t
                                    ? (t._x_hideChildren || (t._x_hideChildren = []), t._x_hideChildren.push(e))
                                    : i(() => {
                                        let t = (e) => {
                                            let n = Promise.all([e._x_hidePromise, ...(e._x_hideChildren || []).map(t)]).then(([e]) => e?.());
                                            return delete e._x_hidePromise, delete e._x_hideChildren, n;
                                        };
                                        t(e).catch((e) => {
                                            if (!e.isFromCancelledTransition) throw e;
                                        });
                                    });
                            }));
                });
            var Ke = !1;
            function Ze(e, t = () => { }) {
                return (...n) => (Ke ? t(...n) : e(...n));
            }
            var Je = [];
            function Xe(e) {
                Je.push(e);
            }
            var Ye = !1;
            function Ge(e) {
                let t = o;
                h((e, n) => {
                    let r = t(e);
                    return a(r), () => { };
                }),
                    e(),
                    h(t);
            }
            function Qe(e, t, n, r = []) {
                switch ((e._x_bindings || (e._x_bindings = i({})), (e._x_bindings[t] = n), (t = r.includes("camel") ? t.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase()) : t))) {
                    case "value":
                        !(function (e, t) {
                            if ("radio" === e.type) void 0 === e.attributes.value && (e.value = t), window.fromModel && (e.checked = "boolean" == typeof t ? nt(e.value) === t : tt(e.value, t));
                            else if ("checkbox" === e.type)
                                Number.isInteger(t)
                                    ? (e.value = t)
                                    : Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t)
                                        ? Array.isArray(t)
                                            ? (e.checked = t.some((t) => tt(t, e.value)))
                                            : (e.checked = !!t)
                                        : (e.value = String(t));
                            else if ("SELECT" === e.tagName)
                                !(function (e, t) {
                                    const n = [].concat(t).map((e) => e + "");
                                    Array.from(e.options).forEach((e) => {
                                        e.selected = n.includes(e.value);
                                    });
                                })(e, t);
                            else {
                                if (e.value === t) return;
                                e.value = void 0 === t ? "" : t;
                            }
                        })(e, n);
                        break;
                    case "style":
                        !(function (e, t) {
                            e._x_undoAddedStyles && e._x_undoAddedStyles(), (e._x_undoAddedStyles = Be(e, t));
                        })(e, n);
                        break;
                    case "class":
                        !(function (e, t) {
                            e._x_undoAddedClasses && e._x_undoAddedClasses(), (e._x_undoAddedClasses = De(e, t));
                        })(e, n);
                        break;
                    case "selected":
                    case "checked":
                        !(function (e, t, n) {
                            et(e, t, n),
                                (function (e, t, n) {
                                    e[t] !== n && (e[t] = n);
                                })(e, t, n);
                        })(e, t, n);
                        break;
                    default:
                        et(e, t, n);
                }
            }
            function et(e, t, n) {
                [null, void 0, !1].includes(n) &&
                    (function (e) {
                        return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
                    })(t)
                    ? e.removeAttribute(t)
                    : (rt(t) && (n = t),
                        (function (e, t, n) {
                            e.getAttribute(t) != n && e.setAttribute(t, n);
                        })(e, t, n));
            }
            function tt(e, t) {
                return e == t;
            }
            function nt(e) {
                return !![1, "1", "true", "on", "yes", !0].includes(e) || (![0, "0", "false", "off", "no", !1].includes(e) && (e ? Boolean(e) : null));
            }
            function rt(e) {
                return [
                    "disabled",
                    "checked",
                    "required",
                    "readonly",
                    "open",
                    "selected",
                    "autofocus",
                    "itemscope",
                    "multiple",
                    "novalidate",
                    "allowfullscreen",
                    "allowpaymentrequest",
                    "formnovalidate",
                    "autoplay",
                    "controls",
                    "loop",
                    "muted",
                    "playsinline",
                    "default",
                    "ismap",
                    "reversed",
                    "async",
                    "defer",
                    "nomodule",
                ].includes(e);
            }
            function it(e, t, n) {
                let r = e.getAttribute(t);
                return null === r ? ("function" == typeof n ? n() : n) : "" === r || (rt(t) ? !![t, "true"].includes(r) : r);
            }
            function ot(e, t) {
                var n;
                return function () {
                    var r = this,
                        i = arguments;
                    clearTimeout(n),
                        (n = setTimeout(function () {
                            (n = null), e.apply(r, i);
                        }, t));
                };
            }
            function at(e, t) {
                let n;
                return function () {
                    let r = arguments;
                    n || (e.apply(this, r), (n = !0), setTimeout(() => (n = !1), t));
                };
            }
            function st({ get: e, set: t }, { get: n, set: r }) {
                let i,
                    s,
                    l = !0,
                    c = o(() => {
                        let o = e(),
                            a = n();
                        if (l) r(lt(o)), (l = !1);
                        else {
                            let e = JSON.stringify(o),
                                n = JSON.stringify(a);
                            e !== i ? r(lt(o)) : e !== n && t(lt(a));
                        }
                        (i = JSON.stringify(e())), (s = JSON.stringify(n()));
                    });
                return () => {
                    a(c);
                };
            }
            function lt(e) {
                return "object" == typeof e ? JSON.parse(JSON.stringify(e)) : e;
            }
            var ct = {},
                ut = !1,
                ft = {};
            function dt(e, t, n) {
                let r = [];
                for (; r.length;) r.pop()();
                let i = Object.entries(t).map(([e, t]) => ({ name: e, value: t })),
                    o = ae(i);
                return (
                    (i = i.map((e) => (o.find((t) => t.name === e.name) ? { name: `x-bind:${e.name}`, value: `"${e.value}"` } : e))),
                    oe(e, i, n).map((e) => {
                        r.push(e.runCleanups), e();
                    }),
                    () => {
                        for (; r.length;) r.pop()();
                    }
                );
            }
            var pt = {},
                _t = {
                    get reactive() {
                        return i;
                    },
                    get release() {
                        return a;
                    },
                    get effect() {
                        return o;
                    },
                    get raw() {
                        return s;
                    },
                    version: "3.14.1",
                    flushAndStopDeferringMutations: function () {
                        (T = !1), L($), ($ = []);
                    },
                    dontAutoEvaluateFunctions: Z,
                    disableEffectScheduling: function (e) {
                        (_ = !1), e(), (_ = !0);
                    },
                    startObservingMutations: k,
                    stopObservingMutations: O,
                    setReactivityEngine: function (e) {
                        (i = e.reactive),
                            (a = e.release),
                            (o = (t) =>
                                e.effect(t, {
                                    scheduler: (e) => {
                                        _
                                            ? (function (e) {
                                                var t;
                                                (t = e), u.includes(t) || u.push(t), c || l || ((l = !0), queueMicrotask(p));
                                            })(e)
                                            : e();
                                    },
                                })),
                            (s = e.raw);
                    },
                    onAttributeRemoved: w,
                    onAttributesAdded: b,
                    closestDataStack: P,
                    skipDuringClone: Ze,
                    onlyDuringClone: function (e) {
                        return (...t) => Ke && e(...t);
                    },
                    addRootSelector: je,
                    addInitSelector: Ce,
                    interceptClone: Xe,
                    addScopeToNode: N,
                    deferMutations: function () {
                        T = !0;
                    },
                    mapAttributes: _e,
                    evaluateLater: X,
                    interceptInit: function (e) {
                        Le.push(e);
                    },
                    setEvaluator: function (e) {
                        Y = e;
                    },
                    mergeProxies: R,
                    extractProp: function (e, t, n, r = !0) {
                        if (e._x_bindings && void 0 !== e._x_bindings[t]) return e._x_bindings[t];
                        if (e._x_inlineBindings && void 0 !== e._x_inlineBindings[t]) {
                            let n = e._x_inlineBindings[t];
                            return (n.extract = r), Z(() => J(e, n.expression));
                        }
                        return it(e, t, n);
                    },
                    findClosest: $e,
                    onElRemoved: x,
                    closestRoot: Te,
                    destroyTree: Ne,
                    interceptor: z,
                    transition: Ve,
                    setStyles: Be,
                    mutateDom: C,
                    directive: ie,
                    entangle: st,
                    throttle: at,
                    debounce: ot,
                    evaluate: J,
                    initTree: Me,
                    nextTick: qe,
                    prefixed: ne,
                    prefix: function (e) {
                        te = e;
                    },
                    plugin: function (e) {
                        (Array.isArray(e) ? e : [e]).forEach((e) => e(_t));
                    },
                    magic: H,
                    store: function (e, t) {
                        if ((ut || ((ct = i(ct)), (ut = !0)), void 0 === t)) return ct[e];
                        (ct[e] = t), "object" == typeof t && null !== t && t.hasOwnProperty("init") && "function" == typeof t.init && ct[e].init(), D(ct[e]);
                    },
                    start: function () {
                        var e;
                        Ee && we("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
                            (Ee = !0),
                            document.body || we("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
                            xe(document, "alpine:init"),
                            xe(document, "alpine:initializing"),
                            k(),
                            (e = (e) => Me(e, be)),
                            g.push(e),
                            x((e) => Ne(e)),
                            b((e, t) => {
                                oe(e, t).forEach((e) => e());
                            }),
                            Array.from(document.querySelectorAll(Oe().join(",")))
                                .filter((e) => !Te(e.parentElement, !0))
                                .forEach((e) => {
                                    Me(e);
                                }),
                            xe(document, "alpine:initialized"),
                            setTimeout(() => {
                                [
                                    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
                                    ["anchor", "anchor", ["[x-anchor]"]],
                                    ["sort", "sort", ["[x-sort]"]],
                                ].forEach(([e, t, n]) => {
                                    var r;
                                    (r = t),
                                        Object.keys(re).includes(r) ||
                                        n.some((t) => {
                                            if (document.querySelector(t)) return we(`found "${t}", but missing ${e} plugin`), !0;
                                        });
                                });
                            });
                    },
                    clone: function (e, t) {
                        t._x_dataStack || (t._x_dataStack = e._x_dataStack),
                            (Ke = !0),
                            (Ye = !0),
                            Ge(() => {
                                !(function (e) {
                                    let t = !1;
                                    Me(e, (e, n) => {
                                        be(e, (e, r) => {
                                            if (
                                                t &&
                                                (function (e) {
                                                    return ke().some((t) => e.matches(t));
                                                })(e)
                                            )
                                                return r();
                                            (t = !0), n(e, r);
                                        });
                                    });
                                })(t);
                            }),
                            (Ke = !1),
                            (Ye = !1);
                    },
                    cloneNode: function (e, t) {
                        Je.forEach((n) => n(e, t)),
                            (Ke = !0),
                            Ge(() => {
                                Me(t, (e, t) => {
                                    t(e, () => { });
                                });
                            }),
                            (Ke = !1);
                    },
                    bound: function (e, t, n) {
                        return e._x_bindings && void 0 !== e._x_bindings[t] ? e._x_bindings[t] : it(e, t, n);
                    },
                    $data: M,
                    watch: y,
                    walk: be,
                    data: function (e, t) {
                        pt[e] = t;
                    },
                    bind: function (e, t) {
                        let n = "function" != typeof t ? () => t : t;
                        return e instanceof Element ? dt(e, n()) : ((ft[e] = n), () => { });
                    },
                };
            function ht(e, t) {
                const n = Object.create(null),
                    r = e.split(",");
                for (let e = 0; e < r.length; e++) n[r[e]] = !0;
                return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
            }
            var yt,
                mt = Object.freeze({}),
                vt = (Object.freeze([]), Object.prototype.hasOwnProperty),
                gt = (e, t) => vt.call(e, t),
                xt = Array.isArray,
                bt = (e) => "[object Map]" === At(e),
                wt = (e) => "symbol" == typeof e,
                Et = (e) => null !== e && "object" == typeof e,
                St = Object.prototype.toString,
                At = (e) => St.call(e),
                kt = (e) => At(e).slice(8, -1),
                Ot = (e) => "string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
                jt = (e) => {
                    const t = Object.create(null);
                    return (n) => t[n] || (t[n] = e(n));
                },
                Ct = /-(\w)/g,
                Tt = (jt((e) => e.replace(Ct, (e, t) => (t ? t.toUpperCase() : ""))), /\B([A-Z])/g),
                $t = (jt((e) => e.replace(Tt, "-$1").toLowerCase()), jt((e) => e.charAt(0).toUpperCase() + e.slice(1))),
                Lt = (jt((e) => (e ? `on${$t(e)}` : "")), (e, t) => e !== t && (e == e || t == t)),
                Mt = new WeakMap(),
                Nt = [],
                Pt = Symbol("iterate"),
                Rt = Symbol("Map key iterate"),
                qt = 0;
            function It(e) {
                const { deps: t } = e;
                if (t.length) {
                    for (let n = 0; n < t.length; n++) t[n].delete(e);
                    t.length = 0;
                }
            }
            var Dt = !0,
                zt = [];
            function Bt() {
                const e = zt.pop();
                Dt = void 0 === e || e;
            }
            function Ft(e, t, n) {
                if (!Dt || void 0 === yt) return;
                let r = Mt.get(e);
                r || Mt.set(e, (r = new Map()));
                let i = r.get(n);
                i || r.set(n, (i = new Set())), i.has(yt) || (i.add(yt), yt.deps.push(i), yt.options.onTrack && yt.options.onTrack({ effect: yt, target: e, type: t, key: n }));
            }
            function Ht(e, t, n, r, i, o) {
                const a = Mt.get(e);
                if (!a) return;
                const s = new Set(),
                    l = (e) => {
                        e &&
                            e.forEach((e) => {
                                (e !== yt || e.allowRecurse) && s.add(e);
                            });
                    };
                if ("clear" === t) a.forEach(l);
                else if ("length" === n && xt(e))
                    a.forEach((e, t) => {
                        ("length" === t || t >= r) && l(e);
                    });
                else
                    switch ((void 0 !== n && l(a.get(n)), t)) {
                        case "add":
                            xt(e) ? Ot(n) && l(a.get("length")) : (l(a.get(Pt)), bt(e) && l(a.get(Rt)));
                            break;
                        case "delete":
                            xt(e) || (l(a.get(Pt)), bt(e) && l(a.get(Rt)));
                            break;
                        case "set":
                            bt(e) && l(a.get(Pt));
                    }
                s.forEach((a) => {
                    a.options.onTrigger && a.options.onTrigger({ effect: a, target: e, key: n, type: t, newValue: r, oldValue: i, oldTarget: o }), a.options.scheduler ? a.options.scheduler(a) : a();
                });
            }
            var Wt = ht("__proto__,__v_isRef,__isVue"),
                Vt = new Set(
                    Object.getOwnPropertyNames(Symbol)
                        .map((e) => Symbol[e])
                        .filter(wt)
                ),
                Ut = Xt(),
                Kt = Xt(!0),
                Zt = Jt();
            function Jt() {
                const e = {};
                return (
                    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
                        e[t] = function (...e) {
                            const n = $n(this);
                            for (let e = 0, t = this.length; e < t; e++) Ft(n, "get", e + "");
                            const r = n[t](...e);
                            return -1 === r || !1 === r ? n[t](...e.map($n)) : r;
                        };
                    }),
                    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
                        e[t] = function (...e) {
                            zt.push(Dt), (Dt = !1);
                            const n = $n(this)[t].apply(this, e);
                            return Bt(), n;
                        };
                    }),
                    e
                );
            }
            function Xt(e = !1, t = !1) {
                return function (n, r, i) {
                    if ("__v_isReactive" === r) return !e;
                    if ("__v_isReadonly" === r) return e;
                    if ("__v_raw" === r && i === (e ? (t ? On : kn) : t ? An : Sn).get(n)) return n;
                    const o = xt(n);
                    if (!e && o && gt(Zt, r)) return Reflect.get(Zt, r, i);
                    const a = Reflect.get(n, r, i);
                    return (wt(r) ? Vt.has(r) : Wt(r)) ? a : (e || Ft(n, "get", r), t ? a : Ln(a) ? (o && Ot(r) ? a : a.value) : Et(a) ? (e ? Cn(a) : jn(a)) : a);
                };
            }
            function Yt(e = !1) {
                return function (t, n, r, i) {
                    let o = t[n];
                    if (!e && ((r = $n(r)), (o = $n(o)), !xt(t) && Ln(o) && !Ln(r))) return (o.value = r), !0;
                    const a = xt(t) && Ot(n) ? Number(n) < t.length : gt(t, n),
                        s = Reflect.set(t, n, r, i);
                    return t === $n(i) && (a ? Lt(r, o) && Ht(t, "set", n, r, o) : Ht(t, "add", n, r)), s;
                };
            }
            var Gt = {
                get: Ut,
                set: Yt(),
                deleteProperty: function (e, t) {
                    const n = gt(e, t),
                        r = e[t],
                        i = Reflect.deleteProperty(e, t);
                    return i && n && Ht(e, "delete", t, void 0, r), i;
                },
                has: function (e, t) {
                    const n = Reflect.has(e, t);
                    return (wt(t) && Vt.has(t)) || Ft(e, "has", t), n;
                },
                ownKeys: function (e) {
                    return Ft(e, "iterate", xt(e) ? "length" : Pt), Reflect.ownKeys(e);
                },
            },
                Qt = {
                    get: Kt,
                    set(e, t) {
                        return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
                    },
                    deleteProperty(e, t) {
                        return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
                    },
                },
                en = (e) => (Et(e) ? jn(e) : e),
                tn = (e) => (Et(e) ? Cn(e) : e),
                nn = (e) => e,
                rn = (e) => Reflect.getPrototypeOf(e);
            function on(e, t, n = !1, r = !1) {
                const i = $n((e = e.__v_raw)),
                    o = $n(t);
                t !== o && !n && Ft(i, "get", t), !n && Ft(i, "get", o);
                const { has: a } = rn(i),
                    s = r ? nn : n ? tn : en;
                return a.call(i, t) ? s(e.get(t)) : a.call(i, o) ? s(e.get(o)) : void (e !== i && e.get(t));
            }
            function an(e, t = !1) {
                const n = this.__v_raw,
                    r = $n(n),
                    i = $n(e);
                return e !== i && !t && Ft(r, "has", e), !t && Ft(r, "has", i), e === i ? n.has(e) : n.has(e) || n.has(i);
            }
            function sn(e, t = !1) {
                return (e = e.__v_raw), !t && Ft($n(e), "iterate", Pt), Reflect.get(e, "size", e);
            }
            function ln(e) {
                e = $n(e);
                const t = $n(this);
                return rn(t).has.call(t, e) || (t.add(e), Ht(t, "add", e, e)), this;
            }
            function cn(e, t) {
                t = $n(t);
                const n = $n(this),
                    { has: r, get: i } = rn(n);
                let o = r.call(n, e);
                o ? En(n, r, e) : ((e = $n(e)), (o = r.call(n, e)));
                const a = i.call(n, e);
                return n.set(e, t), o ? Lt(t, a) && Ht(n, "set", e, t, a) : Ht(n, "add", e, t), this;
            }
            function un(e) {
                const t = $n(this),
                    { has: n, get: r } = rn(t);
                let i = n.call(t, e);
                i ? En(t, n, e) : ((e = $n(e)), (i = n.call(t, e)));
                const o = r ? r.call(t, e) : void 0,
                    a = t.delete(e);
                return i && Ht(t, "delete", e, void 0, o), a;
            }
            function fn() {
                const e = $n(this),
                    t = 0 !== e.size,
                    n = bt(e) ? new Map(e) : new Set(e),
                    r = e.clear();
                return t && Ht(e, "clear", void 0, void 0, n), r;
            }
            function dn(e, t) {
                return function (n, r) {
                    const i = this,
                        o = i.__v_raw,
                        a = $n(o),
                        s = t ? nn : e ? tn : en;
                    return !e && Ft(a, "iterate", Pt), o.forEach((e, t) => n.call(r, s(e), s(t), i));
                };
            }
            function pn(e, t, n) {
                return function (...r) {
                    const i = this.__v_raw,
                        o = $n(i),
                        a = bt(o),
                        s = "entries" === e || (e === Symbol.iterator && a),
                        l = "keys" === e && a,
                        c = i[e](...r),
                        u = n ? nn : t ? tn : en;
                    return (
                        !t && Ft(o, "iterate", l ? Rt : Pt),
                        {
                            next() {
                                const { value: e, done: t } = c.next();
                                return t ? { value: e, done: t } : { value: s ? [u(e[0]), u(e[1])] : u(e), done: t };
                            },
                            [Symbol.iterator]() {
                                return this;
                            },
                        }
                    );
                };
            }
            function _n(e) {
                return function (...t) {
                    {
                        const n = t[0] ? `on key "${t[0]}" ` : "";
                        console.warn(`${$t(e)} operation ${n}failed: target is readonly.`, $n(this));
                    }
                    return "delete" !== e && this;
                };
            }
            function hn() {
                const e = {
                    get(e) {
                        return on(this, e);
                    },
                    get size() {
                        return sn(this);
                    },
                    has: an,
                    add: ln,
                    set: cn,
                    delete: un,
                    clear: fn,
                    forEach: dn(!1, !1),
                },
                    t = {
                        get(e) {
                            return on(this, e, !1, !0);
                        },
                        get size() {
                            return sn(this);
                        },
                        has: an,
                        add: ln,
                        set: cn,
                        delete: un,
                        clear: fn,
                        forEach: dn(!1, !0),
                    },
                    n = {
                        get(e) {
                            return on(this, e, !0);
                        },
                        get size() {
                            return sn(this, !0);
                        },
                        has(e) {
                            return an.call(this, e, !0);
                        },
                        add: _n("add"),
                        set: _n("set"),
                        delete: _n("delete"),
                        clear: _n("clear"),
                        forEach: dn(!0, !1),
                    },
                    r = {
                        get(e) {
                            return on(this, e, !0, !0);
                        },
                        get size() {
                            return sn(this, !0);
                        },
                        has(e) {
                            return an.call(this, e, !0);
                        },
                        add: _n("add"),
                        set: _n("set"),
                        delete: _n("delete"),
                        clear: _n("clear"),
                        forEach: dn(!0, !0),
                    };
                return (
                    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
                        (e[i] = pn(i, !1, !1)), (n[i] = pn(i, !0, !1)), (t[i] = pn(i, !1, !0)), (r[i] = pn(i, !0, !0));
                    }),
                    [e, n, t, r]
                );
            }
            var [yn, mn, vn, gn] = hn();
            function xn(e, t) {
                const n = t ? (e ? gn : vn) : e ? mn : yn;
                return (t, r, i) => ("__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(gt(n, r) && r in t ? n : t, r, i));
            }
            var bn = { get: xn(!1, !1) },
                wn = { get: xn(!0, !1) };
            function En(e, t, n) {
                const r = $n(n);
                if (r !== n && t.call(e, r)) {
                    const t = kt(e);
                    console.warn(
                        `Reactive ${t} contains both the raw and reactive versions of the same object${"Map" === t ? " as keys" : ""
                        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
                    );
                }
            }
            var Sn = new WeakMap(),
                An = new WeakMap(),
                kn = new WeakMap(),
                On = new WeakMap();
            function jn(e) {
                return e && e.__v_isReadonly ? e : Tn(e, !1, Gt, bn, Sn);
            }
            function Cn(e) {
                return Tn(e, !0, Qt, wn, kn);
            }
            function Tn(e, t, n, r, i) {
                if (!Et(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
                if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
                const o = i.get(e);
                if (o) return o;
                const a =
                    (s = e).__v_skip || !Object.isExtensible(s)
                        ? 0
                        : (function (e) {
                            switch (e) {
                                case "Object":
                                case "Array":
                                    return 1;
                                case "Map":
                                case "Set":
                                case "WeakMap":
                                case "WeakSet":
                                    return 2;
                                default:
                                    return 0;
                            }
                        })(kt(s));
                var s;
                if (0 === a) return e;
                const l = new Proxy(e, 2 === a ? r : n);
                return i.set(e, l), l;
            }
            function $n(e) {
                return (e && $n(e.__v_raw)) || e;
            }
            function Ln(e) {
                return Boolean(e && !0 === e.__v_isRef);
            }
            H("nextTick", () => qe),
                H("dispatch", (e) => xe.bind(xe, e)),
                H("watch", (e, { evaluateLater: t, cleanup: n }) => (e, r) => {
                    let i = t(e),
                        o = y(() => {
                            let e;
                            return i((t) => (e = t)), e;
                        }, r);
                    n(o);
                }),
                H("store", function () {
                    return ct;
                }),
                H("data", (e) => M(e)),
                H("root", (e) => Te(e)),
                H(
                    "refs",
                    (e) => (
                        e._x_refs_proxy ||
                        (e._x_refs_proxy = R(
                            (function (e) {
                                let t = [];
                                return (
                                    $e(e, (e) => {
                                        e._x_refs && t.push(e._x_refs);
                                    }),
                                    t
                                );
                            })(e)
                        )),
                        e._x_refs_proxy
                    )
                );
            var Mn = {};
            function Nn(e) {
                return Mn[e] || (Mn[e] = 0), ++Mn[e];
            }
            function Pn(e, t, n) {
                H(t, (r) => we(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r));
            }
            H("id", (e, { cleanup: t }) => (n, r = null) =>
                (function (e, t, n, r) {
                    if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
                    let i = r();
                    return (
                        (e._x_id[t] = i),
                        n(() => {
                            delete e._x_id[t];
                        }),
                        i
                    );
                })(e, `${n}${r ? `-${r}` : ""}`, t, () => {
                    let t = (function (e, t) {
                        return $e(e, (e) => {
                            if (e._x_ids && e._x_ids[t]) return !0;
                        });
                    })(e, n),
                        i = t ? t._x_ids[n] : Nn(n);
                    return r ? `${n}-${i}-${r}` : `${n}-${i}`;
                })
            ),
                Xe((e, t) => {
                    e._x_id && (t._x_id = e._x_id);
                }),
                H("el", (e) => e),
                Pn("Focus", "focus", "focus"),
                Pn("Persist", "persist", "persist"),
                ie("modelable", (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
                    let o = r(t),
                        a = () => {
                            let e;
                            return o((t) => (e = t)), e;
                        },
                        s = r(`${t} = __placeholder`),
                        l = (e) => s(() => { }, { scope: { __placeholder: e } }),
                        c = a();
                    l(c),
                        queueMicrotask(() => {
                            if (!e._x_model) return;
                            e._x_removeModelListeners.default();
                            let t = e._x_model.get,
                                n = e._x_model.set,
                                r = st(
                                    {
                                        get() {
                                            return t();
                                        },
                                        set(e) {
                                            n(e);
                                        },
                                    },
                                    {
                                        get() {
                                            return a();
                                        },
                                        set(e) {
                                            l(e);
                                        },
                                    }
                                );
                            i(r);
                        });
                }),
                ie("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
                    "template" !== e.tagName.toLowerCase() && we("x-teleport can only be used on a <template> tag", e);
                    let i = qn(n),
                        o = e.content.cloneNode(!0).firstElementChild;
                    (e._x_teleport = o),
                        (o._x_teleportBack = e),
                        e.setAttribute("data-teleport-template", !0),
                        o.setAttribute("data-teleport-target", !0),
                        e._x_forwardEvents &&
                        e._x_forwardEvents.forEach((t) => {
                            o.addEventListener(t, (t) => {
                                t.stopPropagation(), e.dispatchEvent(new t.constructor(t.type, t));
                            });
                        }),
                        N(o, {}, e);
                    let a = (e, t, n) => {
                        n.includes("prepend") ? t.parentNode.insertBefore(e, t) : n.includes("append") ? t.parentNode.insertBefore(e, t.nextSibling) : t.appendChild(e);
                    };
                    C(() => {
                        a(o, i, t),
                            Ze(() => {
                                Me(o), (o._x_ignore = !0);
                            })();
                    }),
                        (e._x_teleportPutBack = () => {
                            let r = qn(n);
                            C(() => {
                                a(e._x_teleport, r, t);
                            });
                        }),
                        r(() => o.remove());
                });
            var Rn = document.createElement("div");
            function qn(e) {
                let t = Ze(
                    () => document.querySelector(e),
                    () => Rn
                )();
                return t || we(`Cannot find x-teleport element for selector: "${e}"`), t;
            }
            var In = () => { };
            function Dn(e, t, n, r) {
                let i = e,
                    o = (e) => r(e),
                    a = {},
                    s = (e, t) => (n) => t(e, n);
                if (
                    (n.includes("dot") && (t = t.replace(/-/g, ".")),
                        n.includes("camel") && (t = t.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase())),
                        n.includes("passive") && (a.passive = !0),
                        n.includes("capture") && (a.capture = !0),
                        n.includes("window") && (i = window),
                        n.includes("document") && (i = document),
                        n.includes("debounce"))
                ) {
                    let e = n[n.indexOf("debounce") + 1] || "invalid-wait",
                        t = zn(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                    o = ot(o, t);
                }
                if (n.includes("throttle")) {
                    let e = n[n.indexOf("throttle") + 1] || "invalid-wait",
                        t = zn(e.split("ms")[0]) ? Number(e.split("ms")[0]) : 250;
                    o = at(o, t);
                }
                return (
                    n.includes("prevent") &&
                    (o = s(o, (e, t) => {
                        t.preventDefault(), e(t);
                    })),
                    n.includes("stop") &&
                    (o = s(o, (e, t) => {
                        t.stopPropagation(), e(t);
                    })),
                    n.includes("once") &&
                    (o = s(o, (e, n) => {
                        e(n), i.removeEventListener(t, o, a);
                    })),
                    (n.includes("away") || n.includes("outside")) &&
                    ((i = document),
                        (o = s(o, (t, n) => {
                            e.contains(n.target) || (!1 !== n.target.isConnected && ((e.offsetWidth < 1 && e.offsetHeight < 1) || (!1 !== e._x_isShown && t(n))));
                        }))),
                    n.includes("self") &&
                    (o = s(o, (t, n) => {
                        n.target === e && t(n);
                    })),
                    ((function (e) {
                        return ["keydown", "keyup"].includes(e);
                    })(t) ||
                        Bn(t)) &&
                    (o = s(o, (e, t) => {
                        (function (e, t) {
                            let n = t.filter((e) => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(e));
                            if (n.includes("debounce")) {
                                let e = n.indexOf("debounce");
                                n.splice(e, zn((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
                            }
                            if (n.includes("throttle")) {
                                let e = n.indexOf("throttle");
                                n.splice(e, zn((n[e + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
                            }
                            if (0 === n.length) return !1;
                            if (1 === n.length && Fn(e.key).includes(n[0])) return !1;
                            const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((e) => n.includes(e));
                            if (((n = n.filter((e) => !r.includes(e))), r.length > 0 && r.filter((t) => (("cmd" !== t && "super" !== t) || (t = "meta"), e[`${t}Key`])).length === r.length)) {
                                if (Bn(e.type)) return !1;
                                if (Fn(e.key).includes(n[0])) return !1;
                            }
                            return !0;
                        })(t, n) || e(t);
                    })),
                    i.addEventListener(t, o, a),
                    () => {
                        i.removeEventListener(t, o, a);
                    }
                );
            }
            function zn(e) {
                return !Array.isArray(e) && !isNaN(e);
            }
            function Bn(e) {
                return ["contextmenu", "click", "mouse"].some((t) => e.includes(t));
            }
            function Fn(e) {
                if (!e) return [];
                var t;
                e = [" ", "_"].includes((t = e))
                    ? t
                    : t
                        .replace(/([a-z])([A-Z])/g, "$1-$2")
                        .replace(/[_\s]/, "-")
                        .toLowerCase();
                let n = {
                    ctrl: "control",
                    slash: "/",
                    space: " ",
                    spacebar: " ",
                    cmd: "meta",
                    esc: "escape",
                    up: "arrow-up",
                    down: "arrow-down",
                    left: "arrow-left",
                    right: "arrow-right",
                    period: ".",
                    comma: ",",
                    equal: "=",
                    minus: "-",
                    underscore: "_",
                };
                return (
                    (n[e] = e),
                    Object.keys(n)
                        .map((t) => {
                            if (n[t] === e) return t;
                        })
                        .filter((e) => e)
                );
            }
            function Hn(e, t, n, r) {
                return C(() => {
                    if (n instanceof CustomEvent && void 0 !== n.detail) return null !== n.detail && void 0 !== n.detail ? n.detail : n.target.value;
                    if ("checkbox" === e.type) {
                        if (Array.isArray(r)) {
                            let e = null;
                            return (e = t.includes("number") ? Wn(n.target.value) : t.includes("boolean") ? nt(n.target.value) : n.target.value), n.target.checked ? (r.includes(e) ? r : r.concat([e])) : r.filter((t) => !(t == e));
                        }
                        return n.target.checked;
                    }
                    if ("select" === e.tagName.toLowerCase() && e.multiple)
                        return t.includes("number")
                            ? Array.from(n.target.selectedOptions).map((e) => Wn(e.value || e.text))
                            : t.includes("boolean")
                                ? Array.from(n.target.selectedOptions).map((e) => nt(e.value || e.text))
                                : Array.from(n.target.selectedOptions).map((e) => e.value || e.text);
                    {
                        let i;
                        return (i = "radio" === e.type ? (n.target.checked ? n.target.value : r) : n.target.value), t.includes("number") ? Wn(i) : t.includes("boolean") ? nt(i) : t.includes("trim") ? i.trim() : i;
                    }
                });
            }
            function Wn(e) {
                let t = e ? parseFloat(e) : null;
                return (n = t), Array.isArray(n) || isNaN(n) ? e : t;
                var n;
            }
            function Vn(e) {
                return null !== e && "object" == typeof e && "function" == typeof e.get && "function" == typeof e.set;
            }
            (In.inline = (e, { modifiers: t }, { cleanup: n }) => {
                t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
                    n(() => {
                        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
                    });
            }),
                ie("ignore", In),
                ie(
                    "effect",
                    Ze((e, { expression: t }, { effect: n }) => {
                        n(X(e, t));
                    })
                ),
                ie("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
                    let o = e;
                    t.includes("parent") && (o = e.parentNode);
                    let a,
                        s = X(o, n);
                    a = "string" == typeof n ? X(o, `${n} = __placeholder`) : "function" == typeof n && "string" == typeof n() ? X(o, `${n()} = __placeholder`) : () => { };
                    let l = () => {
                        let e;
                        return s((t) => (e = t)), Vn(e) ? e.get() : e;
                    },
                        c = (e) => {
                            let t;
                            s((e) => (t = e)), Vn(t) ? t.set(e) : a(() => { }, { scope: { __placeholder: e } });
                        };
                    "string" == typeof n &&
                        "radio" === e.type &&
                        C(() => {
                            e.hasAttribute("name") || e.setAttribute("name", n);
                        });
                    var u = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
                    let f = Ke
                        ? () => { }
                        : Dn(e, u, t, (n) => {
                            c(Hn(e, t, n, l()));
                        });
                    if (
                        (t.includes("fill") && ([void 0, null, ""].includes(l()) || ("checkbox" === e.type && Array.isArray(l())) || ("select" === e.tagName.toLowerCase() && e.multiple)) && c(Hn(e, t, { target: e }, l())),
                            e._x_removeModelListeners || (e._x_removeModelListeners = {}),
                            (e._x_removeModelListeners.default = f),
                            i(() => e._x_removeModelListeners.default()),
                            e.form)
                    ) {
                        let n = Dn(e.form, "reset", [], (n) => {
                            qe(() => e._x_model && e._x_model.set(Hn(e, t, { target: e }, l())));
                        });
                        i(() => n());
                    }
                    (e._x_model = {
                        get() {
                            return l();
                        },
                        set(e) {
                            c(e);
                        },
                    }),
                        (e._x_forceModelUpdate = (t) => {
                            void 0 === t && "string" == typeof n && n.match(/\./) && (t = ""), (window.fromModel = !0), C(() => Qe(e, "value", t)), delete window.fromModel;
                        }),
                        r(() => {
                            let n = l();
                            (t.includes("unintrusive") && document.activeElement.isSameNode(e)) || e._x_forceModelUpdate(n);
                        });
                }),
                ie("cloak", (e) => queueMicrotask(() => C(() => e.removeAttribute(ne("cloak"))))),
                Ce(() => `[${ne("init")}]`),
                ie(
                    "init",
                    Ze((e, { expression: t }, { evaluate: n }) => ("string" == typeof t ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)))
                ),
                ie("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
                    let i = r(t);
                    n(() => {
                        i((t) => {
                            C(() => {
                                e.textContent = t;
                            });
                        });
                    });
                }),
                ie("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
                    let i = r(t);
                    n(() => {
                        i((t) => {
                            C(() => {
                                (e.innerHTML = t), (e._x_ignoreSelf = !0), Me(e), delete e._x_ignoreSelf;
                            });
                        });
                    });
                }),
                _e(fe(":", ne("bind:")));
            var Un = (e, { value: t, modifiers: n, expression: r, original: i }, { effect: o, cleanup: a }) => {
                if (!t) {
                    let t = {};
                    return (
                        (s = t),
                        Object.entries(ft).forEach(([e, t]) => {
                            Object.defineProperty(s, e, {
                                get() {
                                    return (...e) => t(...e);
                                },
                            });
                        }),
                        void X(e, r)(
                            (t) => {
                                dt(e, t, i);
                            },
                            { scope: t }
                        )
                    );
                }
                var s;
                if ("key" === t)
                    return (function (e, t) {
                        e._x_keyExpression = t;
                    })(e, r);
                if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
                let l = X(e, r);
                o(() =>
                    l((i) => {
                        void 0 === i && "string" == typeof r && r.match(/\./) && (i = ""), C(() => Qe(e, t, i, n));
                    })
                ),
                    a(() => {
                        e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedStyles && e._x_undoAddedStyles();
                    });
            };
            function Kn(e, t, n, r) {
                let i = {};
                return (
                    /^\[.*\]$/.test(e.item) && Array.isArray(t)
                        ? e.item
                            .replace("[", "")
                            .replace("]", "")
                            .split(",")
                            .map((e) => e.trim())
                            .forEach((e, n) => {
                                i[e] = t[n];
                            })
                        : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t
                            ? e.item
                                .replace("{", "")
                                .replace("}", "")
                                .split(",")
                                .map((e) => e.trim())
                                .forEach((e) => {
                                    i[e] = t[e];
                                })
                            : (i[e.item] = t),
                    e.index && (i[e.index] = n),
                    e.collection && (i[e.collection] = r),
                    i
                );
            }
            function Zn() { }
            function Jn(e, t, n) {
                ie(t, (r) => we(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r));
            }
            (Un.inline = (e, { value: t, modifiers: n, expression: r }) => {
                t && (e._x_inlineBindings || (e._x_inlineBindings = {}), (e._x_inlineBindings[t] = { expression: r, extract: !1 }));
            }),
                ie("bind", Un),
                je(() => `[${ne("data")}]`),
                ie("data", (e, { expression: t }, { cleanup: n }) => {
                    if (
                        (function (e) {
                            return !!Ke && (!!Ye || e.hasAttribute("data-has-alpine-state"));
                        })(e)
                    )
                        return;
                    t = "" === t ? "{}" : t;
                    let r = {};
                    W(r, e);
                    let o = {};
                    var a, s;
                    (a = o),
                        (s = r),
                        Object.entries(pt).forEach(([e, t]) => {
                            Object.defineProperty(a, e, {
                                get() {
                                    return (...e) => t.bind(s)(...e);
                                },
                                enumerable: !1,
                            });
                        });
                    let l = J(e, t, { scope: o });
                    (void 0 !== l && !0 !== l) || (l = {}), W(l, e);
                    let c = i(l);
                    D(c);
                    let u = N(e, c);
                    c.init && J(e, c.init),
                        n(() => {
                            c.destroy && J(e, c.destroy), u();
                        });
                }),
                Xe((e, t) => {
                    e._x_dataStack && ((t._x_dataStack = e._x_dataStack), t.setAttribute("data-has-alpine-state", !0));
                }),
                ie("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
                    let i = X(e, n);
                    e._x_doHide ||
                        (e._x_doHide = () => {
                            C(() => {
                                e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0);
                            });
                        }),
                        e._x_doShow ||
                        (e._x_doShow = () => {
                            C(() => {
                                1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display");
                            });
                        });
                    let o,
                        a = () => {
                            e._x_doHide(), (e._x_isShown = !1);
                        },
                        s = () => {
                            e._x_doShow(), (e._x_isShown = !0);
                        },
                        l = () => setTimeout(s),
                        c = Fe(
                            (e) => (e ? s() : a()),
                            (t) => {
                                "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, t, s, a) : t ? l() : a();
                            }
                        ),
                        u = !0;
                    r(() =>
                        i((e) => {
                            (u || e !== o) && (t.includes("immediate") && (e ? l() : a()), c(e), (o = e), (u = !1));
                        })
                    );
                }),
                ie("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
                    let o = (function (e) {
                        let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                            n = e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
                        if (!n) return;
                        let r = {};
                        r.items = n[2].trim();
                        let i = n[1].replace(/^\s*\(|\)\s*$/g, "").trim(),
                            o = i.match(t);
                        return o ? ((r.item = i.replace(t, "").trim()), (r.index = o[1].trim()), o[2] && (r.collection = o[2].trim())) : (r.item = i), r;
                    })(t),
                        a = X(e, o.items),
                        s = X(e, e._x_keyExpression || "index");
                    (e._x_prevKeys = []),
                        (e._x_lookup = {}),
                        n(() =>
                            (function (e, t, n, r) {
                                let o = e;
                                n((n) => {
                                    var a;
                                    (a = n), !Array.isArray(a) && !isNaN(a) && n >= 0 && (n = Array.from(Array(n).keys(), (e) => e + 1)), void 0 === n && (n = []);
                                    let s = e._x_lookup,
                                        l = e._x_prevKeys,
                                        c = [],
                                        u = [];
                                    if ("object" != typeof (f = n) || Array.isArray(f))
                                        for (let i = 0; i < n.length; i++) {
                                            let o = Kn(t, n[i], i, n);
                                            r(
                                                (t) => {
                                                    u.includes(t) && we("Duplicate key on x-for", e), u.push(t);
                                                },
                                                { scope: { index: i, ...o } }
                                            ),
                                                c.push(o);
                                        }
                                    else
                                        n = Object.entries(n).map(([i, o]) => {
                                            let a = Kn(t, o, i, n);
                                            r(
                                                (t) => {
                                                    u.includes(t) && we("Duplicate key on x-for", e), u.push(t);
                                                },
                                                { scope: { index: i, ...a } }
                                            ),
                                                c.push(a);
                                        });
                                    var f;
                                    let p = [],
                                        _ = [],
                                        h = [],
                                        y = [];
                                    for (let e = 0; e < l.length; e++) {
                                        let t = l[e];
                                        -1 === u.indexOf(t) && h.push(t);
                                    }
                                    l = l.filter((e) => !h.includes(e));
                                    let m = "template";
                                    for (let e = 0; e < u.length; e++) {
                                        let t = u[e],
                                            n = l.indexOf(t);
                                        if (-1 === n) l.splice(e, 0, t), p.push([m, e]);
                                        else if (n !== e) {
                                            let t = l.splice(e, 1)[0],
                                                r = l.splice(n - 1, 1)[0];
                                            l.splice(e, 0, r), l.splice(n, 0, t), _.push([t, r]);
                                        } else y.push(t);
                                        m = t;
                                    }
                                    for (let e = 0; e < h.length; e++) {
                                        let t = h[e];
                                        s[t]._x_effects && s[t]._x_effects.forEach(d), s[t].remove(), (s[t] = null), delete s[t];
                                    }
                                    for (let e = 0; e < _.length; e++) {
                                        let [t, n] = _[e],
                                            r = s[t],
                                            i = s[n],
                                            a = document.createElement("div");
                                        C(() => {
                                            i || we('x-for ":key" is undefined or invalid', o, n, s),
                                                i.after(a),
                                                r.after(i),
                                                i._x_currentIfEl && i.after(i._x_currentIfEl),
                                                a.before(r),
                                                r._x_currentIfEl && r.after(r._x_currentIfEl),
                                                a.remove();
                                        }),
                                            i._x_refreshXForScope(c[u.indexOf(n)]);
                                    }
                                    for (let e = 0; e < p.length; e++) {
                                        let [t, n] = p[e],
                                            r = "template" === t ? o : s[t];
                                        r._x_currentIfEl && (r = r._x_currentIfEl);
                                        let a = c[n],
                                            l = u[n],
                                            f = document.importNode(o.content, !0).firstElementChild,
                                            d = i(a);
                                        N(f, d, o),
                                            (f._x_refreshXForScope = (e) => {
                                                Object.entries(e).forEach(([e, t]) => {
                                                    d[e] = t;
                                                });
                                            }),
                                            C(() => {
                                                r.after(f), Ze(() => Me(f))();
                                            }),
                                            "object" == typeof l && we("x-for key cannot be an object, it must be a string or an integer", o),
                                            (s[l] = f);
                                    }
                                    for (let e = 0; e < y.length; e++) s[y[e]]._x_refreshXForScope(c[u.indexOf(y[e])]);
                                    o._x_prevKeys = u;
                                });
                            })(e, o, a, s)
                        ),
                        r(() => {
                            Object.values(e._x_lookup).forEach((e) => e.remove()), delete e._x_prevKeys, delete e._x_lookup;
                        });
                }),
                (Zn.inline = (e, { expression: t }, { cleanup: n }) => {
                    let r = Te(e);
                    r._x_refs || (r._x_refs = {}), (r._x_refs[t] = e), n(() => delete r._x_refs[t]);
                }),
                ie("ref", Zn),
                ie("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
                    "template" !== e.tagName.toLowerCase() && we("x-if can only be used on a <template> tag", e);
                    let i = X(e, t);
                    n(() =>
                        i((t) => {
                            t
                                ? (() => {
                                    if (e._x_currentIfEl) return e._x_currentIfEl;
                                    let t = e.content.cloneNode(!0).firstElementChild;
                                    N(t, {}, e),
                                        C(() => {
                                            e.after(t), Ze(() => Me(t))();
                                        }),
                                        (e._x_currentIfEl = t),
                                        (e._x_undoIf = () => {
                                            be(t, (e) => {
                                                e._x_effects && e._x_effects.forEach(d);
                                            }),
                                                t.remove(),
                                                delete e._x_currentIfEl;
                                        });
                                })()
                                : e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
                        })
                    ),
                        r(() => e._x_undoIf && e._x_undoIf());
                }),
                ie("id", (e, { expression: t }, { evaluate: n }) => {
                    n(t).forEach((t) =>
                        (function (e, t) {
                            e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Nn(t));
                        })(e, t)
                    );
                }),
                Xe((e, t) => {
                    e._x_ids && (t._x_ids = e._x_ids);
                }),
                _e(fe("@", ne("on:"))),
                ie(
                    "on",
                    Ze((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
                        let o = r ? X(e, r) : () => { };
                        "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
                        let a = Dn(e, t, n, (e) => {
                            o(() => { }, { scope: { $event: e }, params: [e] });
                        });
                        i(() => a());
                    })
                ),
                Jn("Collapse", "collapse", "collapse"),
                Jn("Intersect", "intersect", "intersect"),
                Jn("Focus", "trap", "focus"),
                Jn("Mask", "mask", "mask"),
                _t.setEvaluator(G),
                _t.setReactivityEngine({
                    reactive: jn,
                    effect: function (e, t = mt) {
                        (function (e) {
                            return e && !0 === e._isEffect;
                        })(e) && (e = e.raw);
                        const n = (function (e, t) {
                            const n = function () {
                                if (!n.active) return e();
                                if (!Nt.includes(n)) {
                                    It(n);
                                    try {
                                        return zt.push(Dt), (Dt = !0), Nt.push(n), (yt = n), e();
                                    } finally {
                                        Nt.pop(), Bt(), (yt = Nt[Nt.length - 1]);
                                    }
                                }
                            };
                            return (n.id = qt++), (n.allowRecurse = !!t.allowRecurse), (n._isEffect = !0), (n.active = !0), (n.raw = e), (n.deps = []), (n.options = t), n;
                        })(e, t);
                        return t.lazy || n(), n;
                    },
                    release: function (e) {
                        e.active && (It(e), e.options.onStop && e.options.onStop(), (e.active = !1));
                    },
                    raw: $n,
                });
            var Xn = _t,
                Yn = n(122),
                Gn = n.n(Yn);
            function Qn(e, t) {
                e.classList.remove("scale-100"), t.classList.add("scale-100"), e.classList.add("scale-0"), t.classList.remove("scale-0");
            }
            (window.Alpine = Xn),
                Xn.plugin(function (t) {
                    t.directive(
                        "intersect",
                        t.skipDuringClone((t, { value: n, expression: i, modifiers: o }, { evaluateLater: a, cleanup: s }) => {
                            let l = a(i),
                                c = { rootMargin: r(o), threshold: e(o) },
                                u = new IntersectionObserver((e) => {
                                    e.forEach((e) => {
                                        e.isIntersecting !== ("leave" === n) && (l(), o.includes("once") && u.disconnect());
                                    });
                                }, c);
                            u.observe(t),
                                s(() => {
                                    u.disconnect();
                                });
                        })
                    );
                }),
                Xn.start(),
                window.addEventListener("DOMContentLoaded", () => {
                    !(function () {
                        const e = document.querySelectorAll(".highlight");
                        if (!e) return;
                        e.forEach((e) => {
                            const t = e.querySelector("pre");
                            if (t) {
                                const e =
                                    '<button class="copy z-20 inline-flex h-6 w-6 items-center justify-center rounded-md p-4 border border-border bg-background opacity-0 focus:opacity-100 text-sm font-medium transition-all hover:bg-muted absolute right-4 top-4 tooltipped tooltipped-w" data-tooltip="Copy Code" type="button"><span class="sr-only">Copy Code</span><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 96 960 960" fill="currentColor" stroke="none" class="copy-icon h-[14px] w-[14px] transition-all transform scale-100 absolute"><path d="M200 976q-33 0-56.5-23.5T120 896V376q0-17 11.5-28.5T160 336q17 0 28.5 11.5T200 376v520h400q17 0 28.5 11.5T640 936q0 17-11.5 28.5T600 976H200Zm160-160q-33 0-56.5-23.5T280 736V256q0-33 23.5-56.5T360 176h360q33 0 56.5 23.5T800 256v480q0 33-23.5 56.5T720 816H360Zm0-80h360V256H360v480Zm0 0V256v480Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 96 960 960" fill="currentColor" stroke="none" class="copy-success-icon h-[14px] w-[14px] transition-all transform scale-0 absolute"><path d="M382 799q-8 0-15-2.5t-13-8.5L182 616q-11-11-10.5-28.5T183 559q11-11 28-11t28 11l143 143 339-339q11-11 28.5-11t28.5 11q11 11 11 28.5T778 420L410 788q-6 6-13 8.5t-15 2.5Z"/></svg></button>';
                                t.insertAdjacentHTML("beforeend", e);
                            }
                        });
                        const t = new (Gn())("button.copy", { target: (e) => e.previousElementSibling });
                        t.on("success", ({ trigger: e }) => {
                            const t = e.getAttribute("data-tooltip"),
                                n = e.querySelector(".copy-icon"),
                                r = e.querySelector(".copy-success-icon");
                            Qn(n, r),
                                e.setAttribute("data-tooltip", "Code Copied!"),
                                setTimeout(() => {
                                    Qn(r, n), e.setAttribute("data-tooltip", t);
                                }, 2e3);
                        });
                    })();
                });
        })();
})();

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
