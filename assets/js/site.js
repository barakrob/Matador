/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e, t) {
    function n(e) {
        var t = dt[e] = {};
        return Y.each(e.split(tt), function(e, n) {
            t[n] = !0
        }),
        t
    }
    function r(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(mt, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : vt.test(r) ? Y.parseJSON(r) : r
                } catch (s) {}
                Y.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function i(e) {
        var t;
        for (t in e) {
            if (t === "data" && Y.isEmptyObject(e[t]))
                continue;
            if (t !== "toJSON")
                return !1
        }
        return !0
    }
    function s() {
        return !1
    }
    function o() {
        return !0
    }
    function u(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function a(e, t) {
        do
            e = e[t];
        while (e && e.nodeType !== 1);return e
    }
    function f(e, t, n) {
        t = t || 0;
        if (Y.isFunction(t))
            return Y.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
        if (t.nodeType)
            return Y.grep(e, function(e, r) {
                return e === t === n
            });
        if (typeof t == "string") {
            var r = Y.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (Bt.test(t))
                return Y.filter(t, r, !n);
            t = Y.filter(t, r)
        }
        return Y.grep(e, function(e, r) {
            return Y.inArray(e, t) >= 0 === n
        })
    }
    function l(e) {
        var t = It.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    function c(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e, t) {
        if (t.nodeType !== 1 || !Y.hasData(e))
            return;
        var n, r, i, s = Y._data(e), o = Y._data(t, s), u = s.events;
        if (u) {
            delete o.handle,
            o.events = {};
            for (n in u)
                for (r = 0,
                i = u[n].length; r < i; r++)
                    Y.event.add(t, n, u[n][r])
        }
        o.data && (o.data = Y.extend({}, o.data))
    }
    function p(e, t) {
        var n;
        if (t.nodeType !== 1)
            return;
        t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML),
        Y.support.html5Clone && e.innerHTML && !Y.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Kt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
        t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text),
        t.removeAttribute(Y.expando)
    }
    function d(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function v(e) {
        Kt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function m(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = yn.length;
        while (i--) {
            t = yn[i] + n;
            if (t in e)
                return t
        }
        return r
    }
    function g(e, t) {
        return e = t || e,
        Y.css(e, "display") === "none" || !Y.contains(e.ownerDocument, e)
    }
    function y(e, t) {
        var n, r, i = [], s = 0, o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style)
                continue;
            i[s] = Y._data(n, "olddisplay"),
            t ? (!i[s] && n.style.display === "none" && (n.style.display = ""),
            n.style.display === "" && g(n) && (i[s] = Y._data(n, "olddisplay", S(n.nodeName)))) : (r = nn(n, "display"),
            !i[s] && r !== "none" && Y._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style)
                continue;
            if (!t || n.style.display === "none" || n.style.display === "")
                n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }
    function b(e, t, n) {
        var r = cn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function w(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0
          , s = 0;
        for (; i < 4; i += 2)
            n === "margin" && (s += Y.css(e, n + gn[i], !0)),
            r ? (n === "content" && (s -= parseFloat(nn(e, "padding" + gn[i])) || 0),
            n !== "margin" && (s -= parseFloat(nn(e, "border" + gn[i] + "Width")) || 0)) : (s += parseFloat(nn(e, "padding" + gn[i])) || 0,
            n !== "padding" && (s += parseFloat(nn(e, "border" + gn[i] + "Width")) || 0));
        return s
    }
    function E(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight
          , i = !0
          , s = Y.support.boxSizing && Y.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = nn(e, t);
            if (r < 0 || r == null)
                r = e.style[t];
            if (hn.test(r))
                return r;
            i = s && (Y.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + w(e, t, n || (s ? "border" : "content"), i) + "px"
    }
    function S(e) {
        if (dn[e])
            return dn[e];
        var t = Y("<" + e + ">").appendTo(R.body)
          , n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            rn = R.body.appendChild(rn || Y.extend(R.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!sn || !rn.createElement)
                sn = (rn.contentWindow || rn.contentDocument).document,
                sn.write("<!doctype html><html><body>"),
                sn.close();
            t = sn.body.appendChild(sn.createElement(e)),
            n = nn(t, "display"),
            R.body.removeChild(rn)
        }
        return dn[e] = n,
        n
    }
    function x(e, t, n, r) {
        var i;
        if (Y.isArray(t))
            Y.each(t, function(t, i) {
                n || En.test(e) ? r(e, i) : x(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && Y.type(t) === "object")
            for (i in t)
                x(e + "[" + i + "]", t[i], n, r);
        else
            r(e, t)
    }
    function T(e) {
        return function(t, n) {
            typeof t != "string" && (n = t,
            t = "*");
            var r, i, s, o = t.toLowerCase().split(tt), u = 0, a = o.length;
            if (Y.isFunction(n))
                for (; u < a; u++)
                    r = o[u],
                    s = /^\+/.test(r),
                    s && (r = r.substr(1) || "*"),
                    i = e[r] = e[r] || [],
                    i[s ? "unshift" : "push"](n)
        }
    }
    function N(e, n, r, i, s, o) {
        s = s || n.dataTypes[0],
        o = o || {},
        o[s] = !0;
        var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === jn;
        for (; f < l && (c || !u); f++)
            u = a[f](n, r, i),
            typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u),
            u = N(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = N(e, n, r, i, "*", o)),
        u
    }
    function C(e, n) {
        var r, i, s = Y.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && Y.extend(!0, e, i)
    }
    function k(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (s in l)
            s in r && (n[l[s]] = r[s]);
        while (f[0] === "*")
            f.shift(),
            i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0]in r)
            o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o)
            return o !== f[0] && f.unshift(o),
            r[o]
    }
    function L(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters)
                a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f]; )
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0],
                                    o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"])
                            t = n(t);
                        else
                            try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + u + " to " + i
                                }
                            }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }
    function A() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function O() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function M() {
        return setTimeout(function() {
            Jn = t
        }, 0),
        Jn = Y.now()
    }
    function _(e, t) {
        Y.each(t, function(t, n) {
            var r = (er[t] || []).concat(er["*"])
              , i = 0
              , s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n))
                    return
        })
    }
    function D(e, t, n) {
        var r, i = 0, s = 0, o = Zn.length, u = Y.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            var t = Jn || M()
              , n = Math.max(0, f.startTime + f.duration - t)
              , r = n / f.duration || 0
              , i = 1 - r
              , s = 0
              , o = f.tweens.length;
            for (; s < o; s++)
                f.tweens[s].run(i);
            return u.notifyWith(e, [f, i, n]),
            i < 1 && o ? n : (u.resolveWith(e, [f]),
            !1)
        }, f = u.promise({
            elem: e,
            props: Y.extend({}, t),
            opts: Y.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Jn || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n, r) {
                var i = Y.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , r = t ? f.tweens.length : 0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }), l = f.props;
        P(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Zn[i].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return _(f, l),
        Y.isFunction(f.opts.start) && f.opts.start.call(e, f),
        Y.fx.timer(Y.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function P(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = Y.camelCase(n),
            i = t[r],
            s = e[n],
            Y.isArray(s) && (i = s[1],
            s = e[n] = s[0]),
            n !== r && (e[r] = s,
            delete e[n]),
            o = Y.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n],
                    t[n] = i)
            } else
                t[r] = i
        }
    }
    function H(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, v = [], m = e.nodeType && g(e);
        n.queue || (l = Y._queueHooks(e, "fx"),
        l.unqueued == null && (l.unqueued = 0,
        c = l.empty.fire,
        l.empty.fire = function() {
            l.unqueued || c()
        }
        ),
        l.unqueued++,
        h.always(function() {
            h.always(function() {
                l.unqueued--,
                Y.queue(e, "fx").length || l.empty.fire()
            })
        })),
        e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        Y.css(e, "display") === "inline" && Y.css(e, "float") === "none" && (!Y.support.inlineBlockNeedsLayout || S(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)),
        n.overflow && (p.overflow = "hidden",
        Y.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Qn.exec(s)) {
                delete t[r],
                a = a || s === "toggle";
                if (s === (m ? "hide" : "show"))
                    continue;
                v.push(r)
            }
        }
        o = v.length;
        if (o) {
            u = Y._data(e, "fxshow") || Y._data(e, "fxshow", {}),
            "hidden"in u && (m = u.hidden),
            a && (u.hidden = !m),
            m ? Y(e).show() : h.done(function() {
                Y(e).hide()
            }),
            h.done(function() {
                var t;
                Y.removeData(e, "fxshow", !0);
                for (t in d)
                    Y.style(e, t, d[t])
            });
            for (r = 0; r < o; r++)
                i = v[r],
                f = h.createTween(i, m ? u[i] : 0),
                d[i] = u[i] || Y.style(e, i),
                i in u || (u[i] = f.start,
                m && (f.end = f.start,
                f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }
    function B(e, t, n, r, i) {
        return new B.prototype.init(e,t,n,r,i)
    }
    function j(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)
            n = gn[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function F(e) {
        return Y.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var I, q, R = e.document, U = e.location, z = e.navigator, W = e.jQuery, X = e.$, V = Array.prototype.push, $ = Array.prototype.slice, J = Array.prototype.indexOf, K = Object.prototype.toString, Q = Object.prototype.hasOwnProperty, G = String.prototype.trim, Y = function(e, t) {
        return new Y.fn.init(e,t,I)
    }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, st = /^[\],:{}\s]*$/, ot = /(?:^|:|,)(?:\s*\[)+/g, ut = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, at = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ft = /^-ms-/, lt = /-([\da-z])/gi, ct = function(e, t) {
        return (t + "").toUpperCase()
    }, ht = function() {
        R.addEventListener ? (R.removeEventListener("DOMContentLoaded", ht, !1),
        Y.ready()) : R.readyState === "complete" && (R.detachEvent("onreadystatechange", ht),
        Y.ready())
    }, pt = {};
    Y.fn = Y.prototype = {
        constructor: Y,
        init: function(e, n, r) {
            var i, s, o, u;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                this.length = 1,
                this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = rt.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1])
                        return n = n instanceof Y ? n[0] : n,
                        u = n && n.nodeType ? n.ownerDocument || n : R,
                        e = Y.parseHTML(i[1], u, !0),
                        it.test(i[1]) && Y.isPlainObject(n) && this.attr.call(e, n, !0),
                        Y.merge(this, e);
                    s = R.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2])
                            return r.find(e);
                        this.length = 1,
                        this[0] = s
                    }
                    return this.context = R,
                    this.selector = e,
                    this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return Y.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            Y.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return $.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = Y.merge(this.constructor(), e);
            return r.prevObject = this,
            r.context = this.context,
            t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
        },
        each: function(e, t) {
            return Y.each(this, e, t)
        },
        ready: function(e) {
            return Y.ready.promise().done(e),
            this
        },
        eq: function(e) {
            return e = +e,
            e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack($.apply(this, arguments), "slice", $.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(Y.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: [].sort,
        splice: [].splice
    },
    Y.fn.init.prototype = Y.fn,
    Y.extend = Y.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u,
        u = arguments[1] || {},
        a = 2),
        typeof u != "object" && !Y.isFunction(u) && (u = {}),
        f === a && (u = this,
        --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n],
                    i = e[n];
                    if (u === i)
                        continue;
                    l && i && (Y.isPlainObject(i) || (s = Y.isArray(i))) ? (s ? (s = !1,
                    o = r && Y.isArray(r) ? r : []) : o = r && Y.isPlainObject(r) ? r : {},
                    u[n] = Y.extend(l, o, i)) : i !== t && (u[n] = i)
                }
        return u
    }
    ,
    Y.extend({
        noConflict: function(t) {
            return e.$ === Y && (e.$ = X),
            t && e.jQuery === Y && (e.jQuery = W),
            Y
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Y.readyWait++ : Y.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --Y.readyWait : Y.isReady)
                return;
            if (!R.body)
                return setTimeout(Y.ready, 1);
            Y.isReady = !0;
            if (e !== !0 && --Y.readyWait > 0)
                return;
            q.resolveWith(R, [Y]),
            Y.fn.trigger && Y(R).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return Y.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return Y.type(e) === "array"
        }
        ,
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : pt[K.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || Y.type(e) !== "object" || e.nodeType || Y.isWindow(e))
                return !1;
            try {
                if (e.constructor && !Q.call(e, "constructor") && !Q.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e)
                ;
            return r === t || Q.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t,
            t = 0),
            t = t || R,
            (r = it.exec(e)) ? [t.createElement(r[1])] : (r = Y.buildFragment([e], t, n ? null : []),
            Y.merge([], (r.cacheable ? Y.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string")
                return null;
            t = Y.trim(t);
            if (e.JSON && e.JSON.parse)
                return e.JSON.parse(t);
            if (st.test(t.replace(ut, "@").replace(at, "]").replace(ot, "")))
                return (new Function("return " + t))();
            Y.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string")
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && Y.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(ft, "ms-").replace(lt, ct)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0, o = e.length, u = o === t || Y.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1)
                            break
                } else
                    for (; s < o; )
                        if (n.apply(e[s++], r) === !1)
                            break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1)
                        break
            } else
                for (; s < o; )
                    if (n.call(e[s], s, e[s++]) === !1)
                        break;
            return e
        },
        trim: G && !G.call("﻿ ") ? function(e) {
            return e == null ? "" : G.call(e)
        }
        : function(e) {
            return e == null ? "" : (e + "").replace(nt, "")
        }
        ,
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = Y.type(e),
            e.length == null || n === "string" || n === "function" || n === "regexp" || Y.isWindow(e) ? V.call(r, e) : Y.merge(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (J)
                    return J.call(t, e, n);
                r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , s = 0;
            if (typeof r == "number")
                for (; s < r; s++)
                    e[i++] = n[s];
            else
                while (n[s] !== t)
                    e[i++] = n[s++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)
                r = !!t(e[s], s),
                n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [], u = 0, a = e.length, f = e instanceof Y || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || Y.isArray(e));
            if (f)
                for (; u < a; u++)
                    i = n(e[u], u, r),
                    i != null && (o[o.length] = i);
            else
                for (s in e)
                    i = n(e[s], s, r),
                    i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n],
            n = e,
            e = r),
            Y.isFunction(e) ? (i = $.call(arguments, 2),
            s = function() {
                return e.apply(n, i.concat($.call(arguments)))
            }
            ,
            s.guid = e.guid = e.guid || Y.guid++,
            s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null, l = 0, c = e.length;
            if (r && typeof r == "object") {
                for (l in r)
                    Y.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && Y.isFunction(i),
                f && (a ? (a = n,
                n = function(e, t, n) {
                    return a.call(Y(e), n)
                }
                ) : (n.call(e, i),
                n = null));
                if (n)
                    for (; l < c; l++)
                        n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    Y.ready.promise = function(t) {
        if (!q) {
            q = Y.Deferred();
            if (R.readyState === "complete")
                setTimeout(Y.ready, 1);
            else if (R.addEventListener)
                R.addEventListener("DOMContentLoaded", ht, !1),
                e.addEventListener("load", Y.ready, !1);
            else {
                R.attachEvent("onreadystatechange", ht),
                e.attachEvent("onload", Y.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && R.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!Y.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        Y.ready()
                    }
                }()
            }
        }
        return q.promise(t)
    }
    ,
    Y.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        pt["[object " + t + "]"] = t.toLowerCase()
    }),
    I = Y(R);
    var dt = {};
    Y.Callbacks = function(e) {
        e = typeof e == "string" ? dt[e] || n(e) : Y.extend({}, e);
        var r, i, s, o, u, a, f = [], l = !e.once && [], c = function(t) {
            r = e.memory && t,
            i = !0,
            a = o || 0,
            o = 0,
            u = f.length,
            s = !0;
            for (; f && a < u; a++)
                if (f[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            s = !1,
            f && (l ? l.length && c(l.shift()) : r ? f = [] : h.disable())
        }, h = {
            add: function() {
                if (f) {
                    var t = f.length;
                    (function n(t) {
                        Y.each(t, function(t, r) {
                            var i = Y.type(r);
                            i === "function" ? (!e.unique || !h.has(r)) && f.push(r) : r && r.length && i !== "string" && n(r)
                        })
                    })(arguments),
                    s ? u = f.length : r && (o = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return f && Y.each(arguments, function(e, t) {
                    var n;
                    while ((n = Y.inArray(t, f, n)) > -1)
                        f.splice(n, 1),
                        s && (n <= u && u--,
                        n <= a && a--)
                }),
                this
            },
            has: function(e) {
                return Y.inArray(e, f) > -1
            },
            empty: function() {
                return f = [],
                this
            },
            disable: function() {
                return f = l = r = t,
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return l = t,
                r || h.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                f && (!i || l) && (s ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return h
    }
    ,
    Y.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", Y.Callbacks("once memory"), "resolved"], ["reject", "fail", Y.Callbacks("once memory"), "rejected"], ["notify", "progress", Y.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return Y.Deferred(function(n) {
                        Y.each(t, function(t, r) {
                            var s = r[0]
                              , o = e[t];
                            i[r[1]](Y.isFunction(o) ? function() {
                                var e = o.apply(this, arguments);
                                e && Y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                            }
                            : n[s])
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? Y.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            Y.each(t, function(e, s) {
                var o = s[2]
                  , u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock),
                i[s[0]] = o.fire,
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = $.call(arguments), r = n.length, i = r !== 1 || e && Y.isFunction(e.promise) ? r : 0, s = i === 1 ? e : Y.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? $.call(arguments) : r,
                    n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r),
                a = new Array(r),
                f = new Array(r);
                for (; t < r; t++)
                    n[t] && Y.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n),
            s.promise()
        }
    }),
    Y.support = function() {
        var t, n, r, i, s, o, u, a, f, l, c, h = R.createElement("div");
        h.setAttribute("className", "t"),
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = h.getElementsByTagName("*"),
        r = h.getElementsByTagName("a")[0];
        if (!n || !r || !n.length)
            return {};
        i = R.createElement("select"),
        s = i.appendChild(R.createElement("option")),
        o = h.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            leadingWhitespace: h.firstChild.nodeType === 3,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: o.value === "on",
            optSelected: s.selected,
            getSetAttribute: h.className !== "t",
            enctype: !!R.createElement("form").enctype,
            html5Clone: R.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: R.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        i.disabled = !0,
        t.optDisabled = !s.disabled;
        try {
            delete h.test
        } catch (p) {
            t.deleteExpando = !1
        }
        !h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", c = function() {
            t.noCloneEvent = !1
        }
        ),
        h.cloneNode(!0).fireEvent("onclick"),
        h.detachEvent("onclick", c)),
        o = R.createElement("input"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = o.value === "t",
        o.setAttribute("checked", "checked"),
        o.setAttribute("name", "t"),
        h.appendChild(o),
        u = R.createDocumentFragment(),
        u.appendChild(h.lastChild),
        t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = o.checked,
        u.removeChild(o),
        u.appendChild(h);
        if (h.attachEvent)
            for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                a = "on" + f,
                l = a in h,
                l || (h.setAttribute(a, "return;"),
                l = typeof h[a] == "function"),
                t[f + "Bubbles"] = l;
        return Y(function() {
            var n, r, i, s, o = "padding:0;margin:0;border:0;display:block;overflow:hidden;", u = R.getElementsByTagName("body")[0];
            if (!u)
                return;
            n = R.createElement("div"),
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            u.insertBefore(n, u.firstChild),
            r = R.createElement("div"),
            n.appendChild(r),
            r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            i = r.getElementsByTagName("td"),
            i[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            l = i[0].offsetHeight === 0,
            i[0].style.display = "",
            i[1].style.display = "none",
            t.reliableHiddenOffsets = l && i[0].offsetHeight === 0,
            r.innerHTML = "",
            r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            t.boxSizing = r.offsetWidth === 4,
            t.doesNotIncludeMarginInBodyOffset = u.offsetTop !== 1,
            e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%",
            t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px",
            s = R.createElement("div"),
            s.style.cssText = r.style.cssText = o,
            s.style.marginRight = s.style.width = "0",
            r.style.width = "1px",
            r.appendChild(s),
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)),
            typeof r.style.zoom != "undefined" && (r.innerHTML = "",
            r.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = r.offsetWidth === 3,
            r.style.display = "block",
            r.style.overflow = "visible",
            r.innerHTML = "<div></div>",
            r.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = r.offsetWidth !== 3,
            n.style.zoom = 1),
            u.removeChild(n),
            n = r = i = s = null
        }),
        u.removeChild(h),
        n = r = i = s = o = u = h = null,
        t
    }();
    var vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , mt = /([A-Z])/g;
    Y.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (Y.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? Y.cache[e[Y.expando]] : e[Y.expando],
            !!e && !i(e)
        },
        data: function(e, n, r, i) {
            if (!Y.acceptData(e))
                return;
            var s, o, u = Y.expando, a = typeof n == "string", f = e.nodeType, l = f ? Y.cache : e, c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t)
                return;
            c || (f ? e[u] = c = Y.deletedIds.pop() || Y.guid++ : c = u),
            l[c] || (l[c] = {},
            f || (l[c].toJSON = Y.noop));
            if (typeof n == "object" || typeof n == "function")
                i ? l[c] = Y.extend(l[c], n) : l[c].data = Y.extend(l[c].data, n);
            return s = l[c],
            i || (s.data || (s.data = {}),
            s = s.data),
            r !== t && (s[Y.camelCase(n)] = r),
            a ? (o = s[n],
            o == null && (o = s[Y.camelCase(n)])) : o = s,
            o
        },
        removeData: function(e, t, n) {
            if (!Y.acceptData(e))
                return;
            var r, s, o, u = e.nodeType, a = u ? Y.cache : e, f = u ? e[Y.expando] : Y.expando;
            if (!a[f])
                return;
            if (t) {
                r = n ? a[f] : a[f].data;
                if (r) {
                    Y.isArray(t) || (t in r ? t = [t] : (t = Y.camelCase(t),
                    t in r ? t = [t] : t = t.split(" ")));
                    for (s = 0,
                    o = t.length; s < o; s++)
                        delete r[t[s]];
                    if (!(n ? i : Y.isEmptyObject)(r))
                        return
                }
            }
            if (!n) {
                delete a[f].data;
                if (!i(a[f]))
                    return
            }
            u ? Y.cleanData([e], !0) : Y.support.deleteExpando || a != a.window ? delete a[f] : a[f] = null
        },
        _data: function(e, t, n) {
            return Y.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && Y.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    Y.fn.extend({
        data: function(e, n) {
            var i, s, o, u, a, f = this[0], l = 0, c = null;
            if (e === t) {
                if (this.length) {
                    c = Y.data(f);
                    if (f.nodeType === 1 && !Y._data(f, "parsedAttrs")) {
                        o = f.attributes;
                        for (a = o.length; l < a; l++)
                            u = o[l].name,
                            u.indexOf("data-") || (u = Y.camelCase(u.substring(5)),
                            r(f, u, c[u]));
                        Y._data(f, "parsedAttrs", !0)
                    }
                }
                return c
            }
            return typeof e == "object" ? this.each(function() {
                Y.data(this, e)
            }) : (i = e.split(".", 2),
            i[1] = i[1] ? "." + i[1] : "",
            s = i[1] + "!",
            Y.access(this, function(n) {
                if (n === t)
                    return c = this.triggerHandler("getData" + s, [i[0]]),
                    c === t && f && (c = Y.data(f, e),
                    c = r(f, e, c)),
                    c === t && i[1] ? this.data(i[0]) : c;
                i[1] = n,
                this.each(function() {
                    var t = Y(this);
                    t.triggerHandler("setData" + s, i),
                    Y.data(this, e, n),
                    t.triggerHandler("changeData" + s, i)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                Y.removeData(this, e)
            })
        }
    }),
    Y.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y._data(e, t),
                n && (!r || Y.isArray(n) ? r = Y._data(e, t, Y.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Y.queue(e, t)
              , r = n.length
              , i = n.shift()
              , s = Y._queueHooks(e, t)
              , o = function() {
                Y.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(),
            r--),
            i && (t === "fx" && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y._data(e, n) || Y._data(e, n, {
                empty: Y.Callbacks("once memory").add(function() {
                    Y.removeData(e, t + "queue", !0),
                    Y.removeData(e, n, !0)
                })
            })
        }
    }),
    Y.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e,
            e = "fx",
            r--),
            arguments.length < r ? Y.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = Y.queue(this, e, n);
                Y._queueHooks(this, e),
                e === "fx" && t[0] !== "inprogress" && Y.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Y.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = Y.fx ? Y.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, s = Y.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e,
            e = t),
            e = e || "fx";
            while (u--)
                r = Y._data(o[u], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(a));
            return a(),
            s.promise(n)
        }
    });
    var gt, yt, bt, wt = /[\t\r\n]/g, Et = /\r/g, St = /^(?:button|input)$/i, xt = /^(?:button|input|object|select|textarea)$/i, Tt = /^a(?:rea|)$/i, Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Ct = Y.support.getSetAttribute;
    Y.fn.extend({
        attr: function(e, t) {
            return Y.access(this, Y.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Y.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return Y.access(this, Y.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = Y.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (Y.isFunction(e))
                return this.each(function(t) {
                    Y(this).addClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string") {
                t = e.split(tt);
                for (n = 0,
                r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1)
                            i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0,
                            u = t.length; o < u; o++)
                                s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = Y.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (Y.isFunction(e))
                return this.each(function(t) {
                    Y(this).removeClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(tt);
                for (u = 0,
                a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(wt, " ");
                        for (s = 0,
                        o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0)
                                r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? Y.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = typeof t == "boolean";
            return Y.isFunction(e) ? this.each(function(n) {
                Y(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0, o = Y(this), u = t, a = e.split(tt);
                    while (i = a[s++])
                        u = r ? u : !o.hasClass(i),
                        o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean")
                    this.className && Y._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : Y._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s)
                    return n = Y.valHooks[s.type] || Y.valHooks[s.nodeName.toLowerCase()],
                    n && "get"in n && (r = n.get(s, "value")) !== t ? r : (r = s.value,
                    typeof r == "string" ? r.replace(Et, "") : r == null ? "" : r);
                return
            }
            return i = Y.isFunction(e),
            this.each(function(r) {
                var s, o = Y(this);
                if (this.nodeType !== 1)
                    return;
                i ? s = e.call(this, r, o.val()) : s = e,
                s == null ? s = "" : typeof s == "number" ? s += "" : Y.isArray(s) && (s = Y.map(s, function(e) {
                    return e == null ? "" : e + ""
                })),
                n = Y.valHooks[this.type] || Y.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set"in n) || n.set(this, s, "value") === t)
                    this.value = s
            })
        }
    }),
    Y.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (Y.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !Y.nodeName(n.parentNode, "optgroup"))) {
                            t = Y(n).val();
                            if (s)
                                return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = Y.makeArray(t);
                    return Y(e).find("option").each(function() {
                        this.selected = Y.inArray(Y(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2)
                return;
            if (i && Y.isFunction(Y.fn[n]))
                return Y(e)[n](r);
            if (typeof e.getAttribute == "undefined")
                return Y.prop(e, n, r);
            u = a !== 1 || !Y.isXMLDoc(e),
            u && (n = n.toLowerCase(),
            o = Y.attrHooks[n] || (Nt.test(n) ? yt : gt));
            if (r !== t) {
                if (r === null) {
                    Y.removeAttr(e, n);
                    return
                }
                return o && "set"in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                r)
            }
            return o && "get"in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n),
            s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(tt);
                for (; o < r.length; o++)
                    i = r[o],
                    i && (n = Y.propFix[i] || i,
                    s = Nt.test(i),
                    s || Y.attr(e, i, ""),
                    e.removeAttribute(Ct ? i : n),
                    s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (St.test(e.nodeName) && e.parentNode)
                        Y.error("type property can't be changed");
                    else if (!Y.support.radioValue && t === "radio" && Y.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return gt && Y.nodeName(e, "button") ? gt.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (gt && Y.nodeName(e, "button"))
                        return gt.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)
                return;
            return o = u !== 1 || !Y.isXMLDoc(e),
            o && (n = Y.propFix[n] || n,
            s = Y.propHooks[n]),
            r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : xt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    yt = {
        get: function(e, n) {
            var r, i = Y.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? Y.removeAttr(e, n) : (r = Y.propFix[n] || n,
            r in e && (e[r] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    Ct || (bt = {
        name: !0,
        id: !0,
        coords: !0
    },
    gt = Y.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n),
            r && (bt[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = R.createAttribute(n),
            e.setAttributeNode(r)),
            r.value = t + ""
        }
    },
    Y.each(["width", "height"], function(e, t) {
        Y.attrHooks[t] = Y.extend(Y.attrHooks[t], {
            set: function(e, n) {
                if (n === "")
                    return e.setAttribute(t, "auto"),
                    n
            }
        })
    }),
    Y.attrHooks.contenteditable = {
        get: gt.get,
        set: function(e, t, n) {
            t === "" && (t = "false"),
            gt.set(e, t, n)
        }
    }),
    Y.support.hrefNormalized || Y.each(["href", "src", "width", "height"], function(e, n) {
        Y.attrHooks[n] = Y.extend(Y.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }),
    Y.support.style || (Y.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    Y.support.optSelected || (Y.propHooks.selected = Y.extend(Y.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    Y.support.enctype || (Y.propFix.enctype = "encoding"),
    Y.support.checkOn || Y.each(["radio", "checkbox"], function() {
        Y.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }),
    Y.each(["radio", "checkbox"], function() {
        Y.valHooks[this] = Y.extend(Y.valHooks[this], {
            set: function(e, t) {
                if (Y.isArray(t))
                    return e.checked = Y.inArray(Y(e).val(), t) >= 0
            }
        })
    });
    var kt = /^(?:textarea|input|select)$/i
      , Lt = /^([^\.]*|)(?:\.(.+)|)$/
      , At = /(?:^|\s)hover(\.\S+|)\b/
      , Ot = /^key/
      , Mt = /^(?:mouse|contextmenu)|click/
      , _t = /^(?:focusinfocus|focusoutblur)$/
      , Dt = function(e) {
        return Y.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1")
    };
    Y.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = Y._data(e)))
                return;
            r.handler && (d = r,
            r = d.handler,
            s = d.selector),
            r.guid || (r.guid = Y.guid++),
            a = o.events,
            a || (o.events = a = {}),
            u = o.handle,
            u || (o.handle = u = function(e) {
                return typeof Y == "undefined" || !!e && Y.event.triggered === e.type ? t : Y.event.dispatch.apply(u.elem, arguments)
            }
            ,
            u.elem = e),
            n = Y.trim(Dt(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = Lt.exec(n[f]) || [],
                c = l[1],
                h = (l[2] || "").split(".").sort(),
                m = Y.event.special[c] || {},
                c = (s ? m.delegateType : m.bindType) || c,
                m = Y.event.special[c] || {},
                p = Y.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && Y.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d),
                v = a[c];
                if (!v) {
                    v = a[c] = [],
                    v.delegateCount = 0;
                    if (!m.setup || m.setup.call(e, i, h, u) === !1)
                        e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                m.add && (m.add.call(e, p),
                p.handler.guid || (p.handler.guid = r.guid)),
                s ? v.splice(v.delegateCount++, 0, p) : v.push(p),
                Y.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = Y.hasData(e) && Y._data(e);
            if (!m || !(h = m.events))
                return;
            t = Y.trim(Dt(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = Lt.exec(t[s]) || [],
                u = a = o[1],
                f = o[2];
                if (!u) {
                    for (u in h)
                        Y.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = Y.event.special[u] || {},
                u = (r ? p.delegateType : p.bindType) || u,
                d = h[u] || [],
                l = d.length,
                f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++)
                    v = d[c],
                    (i || a === v.origType) && (!n || n.guid === v.guid) && (!f || f.test(v.namespace)) && (!r || r === v.selector || r === "**" && v.selector) && (d.splice(c--, 1),
                    v.selector && d.delegateCount--,
                    p.remove && p.remove.call(e, v));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, m.handle) === !1) && Y.removeEvent(e, u, m.handle),
                delete h[u])
            }
            Y.isEmptyObject(h) && (delete m.handle,
            Y.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, i, s) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var o, u, a, f, l, c, h, p, d, v, m = n.type || n, g = [];
                if (_t.test(m + Y.event.triggered))
                    return;
                m.indexOf("!") >= 0 && (m = m.slice(0, -1),
                u = !0),
                m.indexOf(".") >= 0 && (g = m.split("."),
                m = g.shift(),
                g.sort());
                if ((!i || Y.event.customEvent[m]) && !Y.event.global[m])
                    return;
                n = typeof n == "object" ? n[Y.expando] ? n : new Y.Event(m,n) : new Y.Event(m),
                n.type = m,
                n.isTrigger = !0,
                n.exclusive = u,
                n.namespace = g.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                c = m.indexOf(":") < 0 ? "on" + m : "";
                if (!i) {
                    o = Y.cache;
                    for (a in o)
                        o[a].events && o[a].events[m] && Y.event.trigger(n, r, o[a].handle.elem, !0);
                    return
                }
                n.result = t,
                n.target || (n.target = i),
                r = r != null ? Y.makeArray(r) : [],
                r.unshift(n),
                h = Y.event.special[m] || {};
                if (h.trigger && h.trigger.apply(i, r) === !1)
                    return;
                d = [[i, h.bindType || m]];
                if (!s && !h.noBubble && !Y.isWindow(i)) {
                    v = h.delegateType || m,
                    f = _t.test(v + m) ? i : i.parentNode;
                    for (l = i; f; f = f.parentNode)
                        d.push([f, v]),
                        l = f;
                    l === (i.ownerDocument || R) && d.push([l.defaultView || l.parentWindow || e, v])
                }
                for (a = 0; a < d.length && !n.isPropagationStopped(); a++)
                    f = d[a][0],
                    n.type = d[a][1],
                    p = (Y._data(f, "events") || {})[n.type] && Y._data(f, "handle"),
                    p && p.apply(f, r),
                    p = c && f[c],
                    p && Y.acceptData(f) && p.apply && p.apply(f, r) === !1 && n.preventDefault();
                return n.type = m,
                !s && !n.isDefaultPrevented() && (!h._default || h._default.apply(i.ownerDocument, r) === !1) && (m !== "click" || !Y.nodeName(i, "a")) && Y.acceptData(i) && c && i[m] && (m !== "focus" && m !== "blur" || n.target.offsetWidth !== 0) && !Y.isWindow(i) && (l = i[c],
                l && (i[c] = null),
                Y.event.triggered = m,
                i[m](),
                Y.event.triggered = t,
                l && (i[c] = l)),
                n.result
            }
            return
        },
        dispatch: function(n) {
            n = Y.event.fix(n || e.event);
            var r, i, s, o, u, a, f, l, c, h, p = (Y._data(this, "events") || {})[n.type] || [], d = p.delegateCount, v = $.call(arguments), m = !n.exclusive && !n.namespace, g = Y.event.special[n.type] || {}, y = [];
            v[0] = n,
            n.delegateTarget = this;
            if (g.preDispatch && g.preDispatch.call(this, n) === !1)
                return;
            if (d && (!n.button || n.type !== "click"))
                for (s = n.target; s != this; s = s.parentNode || this)
                    if (s.disabled !== !0 || n.type !== "click") {
                        u = {},
                        f = [];
                        for (r = 0; r < d; r++)
                            l = p[r],
                            c = l.selector,
                            u[c] === t && (u[c] = l.needsContext ? Y(c, this).index(s) >= 0 : Y.find(c, this, null, [s]).length),
                            u[c] && f.push(l);
                        f.length && y.push({
                            elem: s,
                            matches: f
                        })
                    }
            p.length > d && y.push({
                elem: this,
                matches: p.slice(d)
            });
            for (r = 0; r < y.length && !n.isPropagationStopped(); r++) {
                a = y[r],
                n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    l = a.matches[i];
                    if (m || !n.namespace && !l.namespace || n.namespace_re && n.namespace_re.test(l.namespace))
                        n.data = l.data,
                        n.handleObj = l,
                        o = ((Y.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, v),
                        o !== t && (n.result = o,
                        o === !1 && (n.preventDefault(),
                        n.stopPropagation()))
                }
            }
            return g.postDispatch && g.postDispatch.call(this, n),
            n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, s, o = n.button, u = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || R,
                i = r.documentElement,
                s = r.body,
                e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0),
                e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)),
                !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u),
                !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[Y.expando])
                return e;
            var t, n, r = e, i = Y.event.fixHooks[e.type] || {}, s = i.props ? this.props.concat(i.props) : this.props;
            e = Y.Event(r);
            for (t = s.length; t; )
                n = s[--t],
                e[n] = r[n];
            return e.target || (e.target = r.srcElement || R),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            i.filter ? i.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    Y.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Y.extend(new Y.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Y.event.trigger(i, null, t) : Y.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    Y.event.handle = Y.event.dispatch,
    Y.removeEvent = R.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    Y.Event = function(e, t) {
        if (!(this instanceof Y.Event))
            return new Y.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? o : s) : this.type = e,
        t && Y.extend(this, t),
        this.timeStamp = e && e.timeStamp || Y.now(),
        this[Y.expando] = !0
    }
    ,
    Y.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = o;
            var e = this.originalEvent;
            if (!e)
                return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = o;
            var e = this.originalEvent;
            if (!e)
                return;
            e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = o,
            this.stopPropagation()
        },
        isDefaultPrevented: s,
        isPropagationStopped: s,
        isImmediatePropagationStopped: s
    },
    Y.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        Y.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
                if (!i || i !== r && !Y.contains(r, i))
                    e.type = s.origType,
                    n = s.handler.apply(this, arguments),
                    e.type = t;
                return n
            }
        }
    }),
    Y.support.submitBubbles || (Y.event.special.submit = {
        setup: function() {
            if (Y.nodeName(this, "form"))
                return !1;
            Y.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = Y.nodeName(n, "input") || Y.nodeName(n, "button") ? n.form : t;
                r && !Y._data(r, "_submit_attached") && (Y.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                Y._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && Y.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (Y.nodeName(this, "form"))
                return !1;
            Y.event.remove(this, "._submit")
        }
    }),
    Y.support.changeBubbles || (Y.event.special.change = {
        setup: function() {
            if (kt.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    Y.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                    Y.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        Y.event.simulate("change", this, e, !0)
                    });
                return !1
            }
            Y.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                kt.test(t.nodeName) && !Y._data(t, "_change_attached") && (Y.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && Y.event.simulate("change", this.parentNode, e, !0)
                }),
                Y._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return Y.event.remove(this, "._change"),
            !kt.test(this.nodeName)
        }
    }),
    Y.support.focusinBubbles || Y.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            Y.event.simulate(t, e.target, Y.event.fix(e), !0)
        };
        Y.event.special[t] = {
            setup: function() {
                n++ === 0 && R.addEventListener(e, r, !0)
            },
            teardown: function() {
                --n === 0 && R.removeEventListener(e, r, !0)
            }
        }
    }),
    Y.fn.extend({
        on: function(e, n, r, i, o) {
            var u, a;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n,
                n = t);
                for (a in e)
                    this.on(a, n, r, e[a], o);
                return this
            }
            r == null && i == null ? (i = n,
            r = n = t) : i == null && (typeof n == "string" ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t));
            if (i === !1)
                i = s;
            else if (!i)
                return this;
            return o === 1 && (u = i,
            i = function(e) {
                return Y().off(e),
                u.apply(this, arguments)
            }
            ,
            i.guid = u.guid || (u.guid = Y.guid++)),
            this.each(function() {
                Y.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                Y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if (typeof e == "object") {
                for (o in e)
                    this.off(o, n, e[o]);
                return this
            }
            if (n === !1 || typeof n == "function")
                r = n,
                n = t;
            return r === !1 && (r = s),
            this.each(function() {
                Y.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return Y(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return Y(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                Y.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0])
                return Y.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments
              , n = e.guid || Y.guid++
              , r = 0
              , i = function(n) {
                var i = (Y._data(this, "lastToggle" + e.guid) || 0) % r;
                return Y._data(this, "lastToggle" + e.guid, i + 1),
                n.preventDefault(),
                t[i].apply(this, arguments) || !1
            };
            i.guid = n;
            while (r < t.length)
                t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Y.fn[t] = function(e, n) {
            return n == null && (n = e,
            e = null),
            arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
        ,
        Ot.test(t) && (Y.event.fixHooks[t] = Y.event.keyHooks),
        Mt.test(t) && (Y.event.fixHooks[t] = Y.event.mouseHooks)
    }),
    function(e, t) {
        function n(e, t, n, r) {
            n = n || [],
            t = t || M;
            var i, s, o, u, a = t.nodeType;
            if (!e || typeof e != "string")
                return n;
            if (a !== 1 && a !== 9)
                return [];
            o = E(t);
            if (!o && !r)
                if (i = nt.exec(e))
                    if (u = i[1]) {
                        if (a === 9) {
                            s = t.getElementById(u);
                            if (!s || !s.parentNode)
                                return n;
                            if (s.id === u)
                                return n.push(s),
                                n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && S(t, s) && s.id === u)
                            return n.push(s),
                            n
                    } else {
                        if (i[2])
                            return B.apply(n, j.call(t.getElementsByTagName(e), 0)),
                            n;
                        if ((u = i[3]) && dt && t.getElementsByClassName)
                            return B.apply(n, j.call(t.getElementsByClassName(u), 0)),
                            n
                    }
            return v(e.replace(G, "$1"), t, n, r, o)
        }
        function r(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function i(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function s(e) {
            return I(function(t) {
                return t = +t,
                I(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function o(e, t, n) {
            if (e === t)
                return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        function u(e, t) {
            var r, i, s, o, u, a, f, l = U[A][e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = b.preFilter;
            while (u) {
                if (!r || (i = Z.exec(u)))
                    i && (u = u.slice(i[0].length) || u),
                    a.push(s = []);
                r = !1;
                if (i = et.exec(u))
                    s.push(r = new O(i.shift())),
                    u = u.slice(r.length),
                    r.type = i[0].replace(G, " ");
                for (o in b.filter)
                    (i = ft[o].exec(u)) && (!f[o] || (i = f[o](i))) && (s.push(r = new O(i.shift())),
                    u = u.slice(r.length),
                    r.type = o,
                    r.matches = i);
                if (!r)
                    break
            }
            return t ? u.length : u ? n.error(e) : U(e, a).slice(0)
        }
        function a(e, t, n) {
            var r = t.dir
              , i = n && t.dir === "parentNode"
              , s = P++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (i || t.nodeType === 1)
                        return e(t, n, s)
            }
            : function(t, n, o) {
                if (!o) {
                    var u, a = D + " " + s + " ", f = a + g;
                    while (t = t[r])
                        if (i || t.nodeType === 1) {
                            if ((u = t[A]) === f)
                                return t.sizset;
                            if (typeof u == "string" && u.indexOf(a) === 0) {
                                if (t.sizset)
                                    return t
                            } else {
                                t[A] = f;
                                if (e(t, n, o))
                                    return t.sizset = !0,
                                    t;
                                t.sizset = !1
                            }
                        }
                } else
                    while (t = t[r])
                        if (i || t.nodeType === 1)
                            if (e(t, n, o))
                                return t
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function l(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s),
                        f && t.push(u);
            return o
        }
        function c(e, t, n, r, i, s) {
            return r && !r[A] && (r = c(r)),
            i && !i[A] && (i = c(i, s)),
            I(function(s, o, u, a) {
                var f, c, h, p = [], v = [], m = o.length, g = s || d(t || "*", u.nodeType ? [u] : u, []), y = e && (s || !t) ? l(g, p, e, u, a) : g, b = n ? i || (s ? e : m || r) ? [] : o : y;
                n && n(y, b, u, a);
                if (r) {
                    f = l(b, v),
                    r(f, [], u, a),
                    c = f.length;
                    while (c--)
                        if (h = f[c])
                            b[v[c]] = !(y[v[c]] = h)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [],
                            c = b.length;
                            while (c--)
                                (h = b[c]) && f.push(y[c] = h);
                            i(null, b = [], f, a)
                        }
                        c = b.length;
                        while (c--)
                            (h = b[c]) && (f = i ? F.call(s, h) : p[c]) > -1 && (s[f] = !(o[f] = h))
                    }
                } else
                    b = l(b === o ? b.splice(m, b.length) : b),
                    i ? i(null, o, b, a) : B.apply(o, b)
            })
        }
        function h(e) {
            var t, n, r, i = e.length, s = b.relative[e[0].type], o = s || b.relative[" "], u = s ? 1 : 0, l = a(function(e) {
                return e === t
            }, o, !0), p = a(function(e) {
                return F.call(t, e) > -1
            }, o, !0), d = [function(e, n, r) {
                return !s && (r || n !== C) || ((t = n).nodeType ? l(e, n, r) : p(e, n, r))
            }
            ];
            for (; u < i; u++)
                if (n = b.relative[e[u].type])
                    d = [a(f(d), n)];
                else {
                    n = b.filter[e[u].type].apply(null, e[u].matches);
                    if (n[A]) {
                        r = ++u;
                        for (; r < i; r++)
                            if (b.relative[e[r].type])
                                break;
                        return c(u > 1 && f(d), u > 1 && e.slice(0, u - 1).join("").replace(G, "$1"), n, u < r && h(e.slice(u, r)), r < i && h(e = e.slice(r)), r < i && e.join(""))
                    }
                    d.push(n)
                }
            return f(d)
        }
        function p(e, t) {
            var r = t.length > 0
              , i = e.length > 0
              , s = function(o, u, a, f, c) {
                var h, p, d, v = [], m = 0, y = "0", w = o && [], E = c != null, S = C, x = o || i && b.find.TAG("*", c && u.parentNode || u), T = D += S == null ? 1 : Math.E;
                E && (C = u !== M && u,
                g = s.el);
                for (; (h = x[y]) != null; y++) {
                    if (i && h) {
                        for (p = 0; d = e[p]; p++)
                            if (d(h, u, a)) {
                                f.push(h);
                                break
                            }
                        E && (D = T,
                        g = ++s.el)
                    }
                    r && ((h = !d && h) && m--,
                    o && w.push(h))
                }
                m += y;
                if (r && y !== m) {
                    for (p = 0; d = t[p]; p++)
                        d(w, v, u, a);
                    if (o) {
                        if (m > 0)
                            while (y--)
                                !w[y] && !v[y] && (v[y] = H.call(f));
                        v = l(v)
                    }
                    B.apply(f, v),
                    E && !o && v.length > 0 && m + t.length > 1 && n.uniqueSort(f)
                }
                return E && (D = T,
                C = S),
                w
            };
            return s.el = 0,
            r ? I(s) : s
        }
        function d(e, t, r) {
            var i = 0
              , s = t.length;
            for (; i < s; i++)
                n(e, t[i], r);
            return r
        }
        function v(e, t, n, r, i) {
            var s, o, a, f, l, c = u(e), h = c.length;
            if (!r && c.length === 1) {
                o = c[0] = c[0].slice(0);
                if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !i && b.relative[o[1].type]) {
                    t = b.find.ID(a.matches[0].replace(at, ""), t, i)[0];
                    if (!t)
                        return n;
                    e = e.slice(o.shift().length)
                }
                for (s = ft.POS.test(e) ? -1 : o.length - 1; s >= 0; s--) {
                    a = o[s];
                    if (b.relative[f = a.type])
                        break;
                    if (l = b.find[f])
                        if (r = l(a.matches[0].replace(at, ""), it.test(o[0].type) && t.parentNode || t, i)) {
                            o.splice(s, 1),
                            e = r.length && o.join("");
                            if (!e)
                                return B.apply(n, j.call(r, 0)),
                                n;
                            break
                        }
                }
            }
            return x(e, c)(r, t, i, n, it.test(e)),
            n
        }
        function m() {}
        var g, y, b, w, E, S, x, T, N, C, k = !0, L = "undefined", A = ("sizcache" + Math.random()).replace(".", ""), O = String, M = e.document, _ = M.documentElement, D = 0, P = 0, H = [].pop, B = [].push, j = [].slice, F = [].indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , I = function(e, t) {
            return e[A] = t == null || t,
            e
        }, q = function() {
            var e = {}
              , t = [];
            return I(function(n, r) {
                return t.push(n) > b.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }, e)
        }, R = q(), U = q(), z = q(), W = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", V = X.replace("w", "w#"), $ = "([*^$|!~]?=)", J = "\\[" + W + "*(" + X + ")" + W + "*(?:" + $ + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + V + ")|)|)" + W + "*\\]", K = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + J + ")|[^:]|\\\\.)*|.*))\\)|)", Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", G = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$","g"), Z = new RegExp("^" + W + "*," + W + "*"), et = new RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"), tt = new RegExp(K), nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, rt = /^:not/, it = /[\x20\t\r\n\f]*[+~]/, st = /:not\($/, ot = /h\d/i, ut = /input|select|textarea|button/i, at = /\\(?!\\)/g, ft = {
            ID: new RegExp("^#(" + X + ")"),
            CLASS: new RegExp("^\\.(" + X + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
            TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + J),
            PSEUDO: new RegExp("^" + K),
            POS: new RegExp(Q,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)","i"),
            needsContext: new RegExp("^" + W + "*[>+~]|" + Q,"i")
        }, lt = function(e) {
            var t = M.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }, ct = lt(function(e) {
            return e.appendChild(M.createComment("")),
            !e.getElementsByTagName("*").length
        }), ht = lt(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
        }), pt = lt(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), dt = lt(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e",
            e.getElementsByClassName("e").length === 2)
        }), vt = lt(function(e) {
            e.id = A + 0,
            e.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>",
            _.insertBefore(e, _.firstChild);
            var t = M.getElementsByName && M.getElementsByName(A).length === 2 + M.getElementsByName(A + 0).length;
            return y = !M.getElementById(A),
            _.removeChild(e),
            t
        });
        try {
            j.call(_.childNodes, 0)[0].nodeType
        } catch (mt) {
            j = function(e) {
                var t, n = [];
                for (; t = this[e]; e++)
                    n.push(t);
                return n
            }
        }
        n.matches = function(e, t) {
            return n(e, null, null, t)
        }
        ,
        n.matchesSelector = function(e, t) {
            return n(t, null, null, [e]).length > 0
        }
        ,
        w = n.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string")
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (i === 3 || i === 4)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += w(t);
            return n
        }
        ,
        E = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ,
        S = n.contains = _.contains ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e
              , r = t && t.parentNode;
            return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
        }
        : _.compareDocumentPosition ? function(e, t) {
            return t && !!(e.compareDocumentPosition(t) & 16)
        }
        : function(e, t) {
            while (t = t.parentNode)
                if (t === e)
                    return !0;
            return !1
        }
        ,
        n.attr = function(e, t) {
            var n, r = E(e);
            return r || (t = t.toLowerCase()),
            (n = b.attrHandle[t]) ? n(e) : r || pt ? e.getAttribute(t) : (n = e.getAttributeNode(t),
            n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }
        ,
        b = n.selectors = {
            cacheLength: 50,
            createPseudo: I,
            match: ft,
            attrHandle: ht ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: y ? function(e, t, n) {
                    if (typeof t.getElementById !== L && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                }
                : function(e, n, r) {
                    if (typeof n.getElementById !== L && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== L && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }
                ,
                TAG: ct ? function(e, t) {
                    if (typeof t.getElementsByTagName !== L)
                        return t.getElementsByTagName(e)
                }
                : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [], s = 0;
                        for (; r = n[s]; s++)
                            r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                }
                ,
                NAME: vt && function(e, t) {
                    if (typeof t.getElementsByName !== L)
                        return t.getElementsByName(name)
                }
                ,
                CLASS: dt && function(e, t, n) {
                    if (typeof t.getElementsByClassName !== L && !n)
                        return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(at, ""),
                    e[3] = (e[4] || e[5] || "").replace(at, ""),
                    e[2] === "~=" && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    e[1] === "nth" ? (e[2] || n.error(e[0]),
                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")),
                    e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (ft.CHILD.test(e[0]))
                        return null;
                    if (e[3])
                        e[2] = e[3];
                    else if (t = e[4])
                        tt.test(t) && (n = u(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n),
                        e[0] = e[0].slice(0, n)),
                        e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: y ? function(e) {
                    return e = e.replace(at, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                : function(e) {
                    return e = e.replace(at, ""),
                    function(t) {
                        var n = typeof t.getAttributeNode !== L && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                TAG: function(e) {
                    return e === "*" ? function() {
                        return !0
                    }
                    : (e = e.replace(at, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                    )
                },
                CLASS: function(e) {
                    var t = R[A][e + " "];
                    return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && R(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, r) {
                    return function(i, s) {
                        var o = n.attr(i, e);
                        return o == null ? t === "!=" : t ? (o += "",
                        t === "=" ? o === r : t === "!=" ? o !== r : t === "^=" ? r && o.indexOf(r) === 0 : t === "*=" ? r && o.indexOf(r) > -1 : t === "$=" ? r && o.substr(o.length - r.length) === r : t === "~=" ? (" " + o + " ").indexOf(r) > -1 : t === "|=" ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r) {
                    return e === "nth" ? function(e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0)
                            return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling)
                                if (t.nodeType === 1) {
                                    i++;
                                    if (e === t)
                                        break
                                }
                        }
                        return i -= r,
                        i === n || i % n === 0 && i / n >= 0
                    }
                    : function(t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            while (n = n.previousSibling)
                                if (n.nodeType === 1)
                                    return !1;
                            if (e === "first")
                                return !0;
                            n = t;
                        case "last":
                            while (n = n.nextSibling)
                                if (n.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return i[A] ? i(t) : i.length > 1 ? (r = [e, e, "", t],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? I(function(e, n) {
                        var r, s = i(e, t), o = s.length;
                        while (o--)
                            r = F.call(e, s[o]),
                            e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, r)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: I(function(e) {
                    var t = []
                      , n = []
                      , r = x(e.replace(G, "$1"));
                    return r[A] ? I(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null, s, n),
                        !n.pop()
                    }
                }),
                has: I(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: I(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)
                            return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function(e) {
                    return ot.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: r("radio"),
                checkbox: r("checkbox"),
                file: r("file"),
                password: r("password"),
                image: r("image"),
                submit: i("submit"),
                reset: i("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function(e) {
                    return ut.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        T = _.compareDocumentPosition ? function(e, t) {
            return e === t ? (N = !0,
            0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        }
        : function(e, t) {
            if (e === t)
                return N = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], u = e.parentNode, a = t.parentNode, f = u;
            if (u === a)
                return o(e, t);
            if (!u)
                return -1;
            if (!a)
                return 1;
            while (f)
                i.unshift(f),
                f = f.parentNode;
            f = a;
            while (f)
                s.unshift(f),
                f = f.parentNode;
            n = i.length,
            r = s.length;
            for (var l = 0; l < n && l < r; l++)
                if (i[l] !== s[l])
                    return o(i[l], s[l]);
            return l === n ? o(e, s[l], -1) : o(i[l], t, 1)
        }
        ,
        [0, 0].sort(T),
        k = !N,
        n.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            N = k,
            e.sort(T);
            if (N) {
                for (; t = e[r]; r++)
                    t === e[r - 1] && (i = n.push(r));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        x = n.compile = function(e, t) {
            var n, r = [], i = [], s = z[A][e + " "];
            if (!s) {
                t || (t = u(e)),
                n = t.length;
                while (n--)
                    s = h(t[n]),
                    s[A] ? r.push(s) : i.push(s);
                s = z(e, p(i, r))
            }
            return s
        }
        ,
        M.querySelectorAll && function() {
            var e, t = v, r = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, s = [":focus"], o = [":active"], a = _.matchesSelector || _.mozMatchesSelector || _.webkitMatchesSelector || _.oMatchesSelector || _.msMatchesSelector;
            lt(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || s.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || s.push(":checked")
            }),
            lt(function(e) {
                e.innerHTML = "<p test=''></p>",
                e.querySelectorAll("[test^='']").length && s.push("[*^$]=" + W + "*(?:\"\"|'')"),
                e.innerHTML = "<input type='hidden'/>",
                e.querySelectorAll(":enabled").length || s.push(":enabled", ":disabled")
            }),
            s = new RegExp(s.join("|")),
            v = function(e, n, i, o, a) {
                if (!o && !a && !s.test(e)) {
                    var f, l, c = !0, h = A, p = n, d = n.nodeType === 9 && e;
                    if (n.nodeType === 1 && n.nodeName.toLowerCase() !== "object") {
                        f = u(e),
                        (c = n.getAttribute("id")) ? h = c.replace(r, "\\$&") : n.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        l = f.length;
                        while (l--)
                            f[l] = h + f[l].join("");
                        p = it.test(e) && n.parentNode || n,
                        d = f.join(",")
                    }
                    if (d)
                        try {
                            return B.apply(i, j.call(p.querySelectorAll(d), 0)),
                            i
                        } catch (v) {} finally {
                            c || n.removeAttribute("id")
                        }
                }
                return t(e, n, i, o, a)
            }
            ,
            a && (lt(function(t) {
                e = a.call(t, "div");
                try {
                    a.call(t, "[test!='']:sizzle"),
                    o.push("!=", K)
                } catch (n) {}
            }),
            o = new RegExp(o.join("|")),
            n.matchesSelector = function(t, r) {
                r = r.replace(i, "='$1']");
                if (!E(t) && !o.test(r) && !s.test(r))
                    try {
                        var u = a.call(t, r);
                        if (u || e || t.document && t.document.nodeType !== 11)
                            return u
                    } catch (f) {}
                return n(r, null, null, [t]).length > 0
            }
            )
        }(),
        b.pseudos.nth = b.pseudos.eq,
        b.filters = m.prototype = b.pseudos,
        b.setFilters = new m,
        n.attr = Y.attr,
        Y.find = n,
        Y.expr = n.selectors,
        Y.expr[":"] = Y.expr.pseudos,
        Y.unique = n.uniqueSort,
        Y.text = n.getText,
        Y.isXMLDoc = n.isXML,
        Y.contains = n.contains
    }(e);
    var Pt = /Until$/
      , Ht = /^(?:parents|prev(?:Until|All))/
      , Bt = /^.[^:#\[\.,]*$/
      , jt = Y.expr.match.needsContext
      , Ft = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Y.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string")
                return Y(e).filter(function() {
                    for (t = 0,
                    n = u.length; t < n; t++)
                        if (Y.contains(u[t], this))
                            return !0
                });
            o = this.pushStack("", "find", e);
            for (t = 0,
            n = this.length; t < n; t++) {
                r = o.length,
                Y.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = Y(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (Y.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(f(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? jt.test(e) ? Y(e, this.context).index(this[0]) >= 0 : Y.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = jt.test(e) || typeof e != "string" ? Y(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : Y.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? Y.unique(s) : s,
            this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? Y.inArray(this[0], Y(e)) : Y.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? Y(e, t) : Y.makeArray(e && e.nodeType ? [e] : e)
              , r = Y.merge(this.get(), n);
            return this.pushStack(u(n[0]) || u(r[0]) ? r : Y.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    Y.fn.andSelf = Y.fn.addBack,
    Y.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return Y.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Y.dir(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return Y.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Y.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Y.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Y.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Y.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Y.sibling(e.firstChild)
        },
        contents: function(e) {
            return Y.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Y.merge([], e.childNodes)
        }
    }, function(e, t) {
        Y.fn[e] = function(n, r) {
            var i = Y.map(this, t, n);
            return Pt.test(e) || (r = n),
            r && typeof r == "string" && (i = Y.filter(r, i)),
            i = this.length > 1 && !Ft[e] ? Y.unique(i) : i,
            this.length > 1 && Ht.test(e) && (i = i.reverse()),
            this.pushStack(i, e, $.call(arguments).join(","))
        }
    }),
    Y.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            t.length === 1 ? Y.find.matchesSelector(t[0], e) ? [t[0]] : [] : Y.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = []
              , s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !Y(s).is(r)))
                s.nodeType === 1 && i.push(s),
                s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , qt = / jQuery\d+="(?:null|\d+)"/g
      , Rt = /^\s+/
      , Ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , zt = /<([\w:]+)/
      , Wt = /<tbody/i
      , Xt = /<|&#?\w+;/
      , Vt = /<(?:script|style|link)/i
      , $t = /<(?:script|object|embed|option|style)/i
      , Jt = new RegExp("<(?:" + It + ")[\\s/>]","i")
      , Kt = /^(?:checkbox|radio)$/
      , Qt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Gt = /\/(java|ecma)script/i
      , Yt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , Zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , en = l(R)
      , tn = en.appendChild(R.createElement("div"));
    Zt.optgroup = Zt.option,
    Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
    Zt.th = Zt.td,
    Y.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]),
    Y.fn.extend({
        text: function(e) {
            return Y.access(this, function(e) {
                return e === t ? Y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (Y.isFunction(e))
                return this.each(function(t) {
                    Y(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = Y(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return Y.isFunction(e) ? this.each(function(t) {
                Y(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Y(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Y.isFunction(e);
            return this.each(function(n) {
                Y(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Y.nodeName(this, "body") || Y(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!u(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = Y.clean(arguments);
                return this.pushStack(Y.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!u(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = Y.clean(arguments);
                return this.pushStack(Y.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++)
                if (!e || Y.filter(e, [n]).length)
                    !t && n.nodeType === 1 && (Y.cleanData(n.getElementsByTagName("*")),
                    Y.cleanData([n])),
                    n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && Y.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild)
                    e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e,
            t = t == null ? e : t,
            this.map(function() {
                return Y.clone(this, e, t)
            })
        },
        html: function(e) {
            return Y.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return n.nodeType === 1 ? n.innerHTML.replace(qt, "") : t;
                if (typeof e == "string" && !Vt.test(e) && (Y.support.htmlSerialize || !Jt.test(e)) && (Y.support.leadingWhitespace || !Rt.test(e)) && !Zt[(zt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ut, "<$1></$2>");
                    try {
                        for (; r < i; r++)
                            n = this[r] || {},
                            n.nodeType === 1 && (Y.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return u(this[0]) ? this.length ? this.pushStack(Y(Y.isFunction(e) ? e() : e), "replaceWith", e) : this : Y.isFunction(e) ? this.each(function(t) {
                var n = Y(this)
                  , r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = Y(e).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , n = this.parentNode;
                Y(this).remove(),
                t ? Y(t).before(e) : Y(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0, f = e[0], l = [], h = this.length;
            if (!Y.support.checkClone && h > 1 && typeof f == "string" && Qt.test(f))
                return this.each(function() {
                    Y(this).domManip(e, n, r)
                });
            if (Y.isFunction(f))
                return this.each(function(i) {
                    var s = Y(this);
                    e[0] = f.call(this, i, n ? s.html() : t),
                    s.domManip(e, n, r)
                });
            if (this[0]) {
                i = Y.buildFragment(e, this, l),
                o = i.fragment,
                s = o.firstChild,
                o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && Y.nodeName(s, "tr");
                    for (u = i.cacheable || h - 1; a < h; a++)
                        r.call(n && Y.nodeName(this[a], "table") ? c(this[a], "tbody") : this[a], a === u ? o : Y.clone(o, !0, !0))
                }
                o = s = null,
                l.length && Y.each(l, function(e, t) {
                    t.src ? Y.ajax ? Y.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : Y.error("no ajax") : Y.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Yt, "")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    Y.buildFragment = function(e, n, r) {
        var i, s, o, u = e[0];
        return n = n || R,
        n = !n.nodeType && n[0] || n,
        n = n.ownerDocument || n,
        e.length === 1 && typeof u == "string" && u.length < 512 && n === R && u.charAt(0) === "<" && !$t.test(u) && (Y.support.checkClone || !Qt.test(u)) && (Y.support.html5Clone || !Jt.test(u)) && (s = !0,
        i = Y.fragments[u],
        o = i !== t),
        i || (i = n.createDocumentFragment(),
        Y.clean(e, n, i, r),
        s && (Y.fragments[u] = o && i)),
        {
            fragment: i,
            cacheable: s
        }
    }
    ,
    Y.fragments = {},
    Y.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Y.fn[e] = function(n) {
            var r, i = 0, s = [], o = Y(n), u = o.length, a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1)
                return o[t](this[0]),
                this;
            for (; i < u; i++)
                r = (i > 0 ? this.clone(!0) : this).get(),
                Y(o[i])[t](r),
                s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }),
    Y.extend({
        clone: function(e, t, n) {
            var r, i, s, o;
            Y.support.html5Clone || Y.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML,
            tn.removeChild(o = tn.firstChild));
            if ((!Y.support.noCloneEvent || !Y.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !Y.isXMLDoc(e)) {
                p(e, o),
                r = d(e),
                i = d(o);
                for (s = 0; r[s]; ++s)
                    i[s] && p(r[s], i[s])
            }
            if (t) {
                h(e, o);
                if (n) {
                    r = d(e),
                    i = d(o);
                    for (s = 0; r[s]; ++s)
                        h(r[s], i[s])
                }
            }
            return r = i = null,
            o
        },
        clean: function(e, t, n, r) {
            var i, s, o, u, a, f, c, h, p, d, m, g, y = t === R && en, b = [];
            if (!t || typeof t.createDocumentFragment == "undefined")
                t = R;
            for (i = 0; (o = e[i]) != null; i++) {
                typeof o == "number" && (o += "");
                if (!o)
                    continue;
                if (typeof o == "string")
                    if (!Xt.test(o))
                        o = t.createTextNode(o);
                    else {
                        y = y || l(t),
                        c = t.createElement("div"),
                        y.appendChild(c),
                        o = o.replace(Ut, "<$1></$2>"),
                        u = (zt.exec(o) || ["", ""])[1].toLowerCase(),
                        a = Zt[u] || Zt._default,
                        f = a[0],
                        c.innerHTML = a[1] + o + a[2];
                        while (f--)
                            c = c.lastChild;
                        if (!Y.support.tbody) {
                            h = Wt.test(o),
                            p = u === "table" && !h ? c.firstChild && c.firstChild.childNodes : a[1] === "<table>" && !h ? c.childNodes : [];
                            for (s = p.length - 1; s >= 0; --s)
                                Y.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s])
                        }
                        !Y.support.leadingWhitespace && Rt.test(o) && c.insertBefore(t.createTextNode(Rt.exec(o)[0]), c.firstChild),
                        o = c.childNodes,
                        c.parentNode.removeChild(c)
                    }
                o.nodeType ? b.push(o) : Y.merge(b, o)
            }
            c && (o = c = y = null);
            if (!Y.support.appendChecked)
                for (i = 0; (o = b[i]) != null; i++)
                    Y.nodeName(o, "input") ? v(o) : typeof o.getElementsByTagName != "undefined" && Y.grep(o.getElementsByTagName("input"), v);
            if (n) {
                m = function(e) {
                    if (!e.type || Gt.test(e.type))
                        return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                }
                ;
                for (i = 0; (o = b[i]) != null; i++)
                    if (!Y.nodeName(o, "script") || !m(o))
                        n.appendChild(o),
                        typeof o.getElementsByTagName != "undefined" && (g = Y.grep(Y.merge([], o.getElementsByTagName("script")), m),
                        b.splice.apply(b, [i + 1, 0].concat(g)),
                        i += g.length)
            }
            return b
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0, u = Y.expando, a = Y.cache, f = Y.support.deleteExpando, l = Y.event.special;
            for (; (i = e[o]) != null; o++)
                if (t || Y.acceptData(i)) {
                    r = i[u],
                    n = r && a[r];
                    if (n) {
                        if (n.events)
                            for (s in n.events)
                                l[s] ? Y.event.remove(i, s) : Y.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r],
                        f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null,
                        Y.deletedIds.push(r))
                    }
                }
        }
    }),
    function() {
        var e, t;
        Y.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ,
        e = Y.uaMatch(z.userAgent),
        t = {},
        e.browser && (t[e.browser] = !0,
        t.version = e.version),
        t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
        Y.browser = t,
        Y.sub = function() {
            function e(t, n) {
                return new e.fn.init(t,n)
            }
            Y.extend(!0, e, this),
            e.superclass = this,
            e.fn = e.prototype = this(),
            e.fn.constructor = e,
            e.sub = this.sub,
            e.fn.init = function(n, r) {
                return r && r instanceof Y && !(r instanceof e) && (r = e(r)),
                Y.fn.init.call(this, n, r, t)
            }
            ,
            e.fn.init.prototype = e.fn;
            var t = e(R);
            return e
        }
    }();
    var nn, rn, sn, on = /alpha\([^)]*\)/i, un = /opacity=([^)]*)/, an = /^(top|right|bottom|left)$/, fn = /^(none|table(?!-c[ea]).+)/, ln = /^margin/, cn = new RegExp("^(" + Z + ")(.*)$","i"), hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i"), pn = new RegExp("^([-+])=(" + Z + ")","i"), dn = {
        BODY: "block"
    }, vn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, mn = {
        letterSpacing: 0,
        fontWeight: 400
    }, gn = ["Top", "Right", "Bottom", "Left"], yn = ["Webkit", "O", "Moz", "ms"], bn = Y.fn.toggle;
    Y.fn.extend({
        css: function(e, n) {
            return Y.access(this, function(e, n, r) {
                return r !== t ? Y.style(e, n, r) : Y.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return Y.isFunction(e) && Y.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : g(this)) ? Y(this).show() : Y(this).hide()
            })
        }
    }),
    Y.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": Y.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                return;
            var s, o, u, a = Y.camelCase(n), f = e.style;
            n = Y.cssProps[a] || (Y.cssProps[a] = m(f, a)),
            u = Y.cssHooks[n] || Y.cssHooks[a];
            if (r === t)
                return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r,
            o === "string" && (s = pn.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(Y.css(e, n)),
            o = "number");
            if (r == null || o === "number" && isNaN(r))
                return;
            o === "number" && !Y.cssNumber[a] && (r += "px");
            if (!u || !("set"in u) || (r = u.set(e, r, i)) !== t)
                try {
                    f[n] = r
                } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = Y.camelCase(n);
            return n = Y.cssProps[a] || (Y.cssProps[a] = m(e.style, a)),
            u = Y.cssHooks[n] || Y.cssHooks[a],
            u && "get"in u && (s = u.get(e, !0, i)),
            s === t && (s = nn(e, n)),
            s === "normal" && n in mn && (s = mn[n]),
            r || i !== t ? (o = parseFloat(s),
            r || Y.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t)
                s[i] = e.style[i],
                e.style[i] = t[i];
            r = n.call(e);
            for (i in t)
                e.style[i] = s[i];
            return r
        }
    }),
    e.getComputedStyle ? nn = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n],
        r === "" && !Y.contains(t.ownerDocument, t) && (r = Y.style(t, n)),
        hn.test(r) && ln.test(n) && (i = a.width,
        s = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = r,
        r = u.width,
        a.width = i,
        a.minWidth = s,
        a.maxWidth = o)),
        r
    }
    : R.documentElement.currentStyle && (nn = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
        return i == null && s && s[t] && (i = s[t]),
        hn.test(i) && !an.test(t) && (n = s.left,
        r = e.runtimeStyle && e.runtimeStyle.left,
        r && (e.runtimeStyle.left = e.currentStyle.left),
        s.left = t === "fontSize" ? "1em" : i,
        i = s.pixelLeft + "px",
        s.left = n,
        r && (e.runtimeStyle.left = r)),
        i === "" ? "auto" : i
    }
    ),
    Y.each(["height", "width"], function(e, t) {
        Y.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return e.offsetWidth === 0 && fn.test(nn(e, "display")) ? Y.swap(e, vn, function() {
                        return E(e, t, r)
                    }) : E(e, t, r)
            },
            set: function(e, n, r) {
                return b(e, n, r ? w(e, t, r, Y.support.boxSizing && Y.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }),
    Y.support.opacity || (Y.cssHooks.opacity = {
        get: function(e, t) {
            return un.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = Y.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && Y.trim(s.replace(on, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter)
                    return
            }
            n.filter = on.test(s) ? s.replace(on, i) : s + " " + i
        }
    }),
    Y(function() {
        Y.support.reliableMarginRight || (Y.cssHooks.marginRight = {
            get: function(e, t) {
                return Y.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t)
                        return nn(e, "marginRight")
                })
            }
        }),
        !Y.support.pixelPosition && Y.fn.position && Y.each(["top", "left"], function(e, t) {
            Y.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = nn(e, t);
                        return hn.test(r) ? Y(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }),
    Y.expr && Y.expr.filters && (Y.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !Y.support.reliableHiddenOffsets && (e.style && e.style.display || nn(e, "display")) === "none"
    }
    ,
    Y.expr.filters.visible = function(e) {
        return !Y.expr.filters.hidden(e)
    }
    ),
    Y.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Y.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n], s = {};
                for (r = 0; r < 4; r++)
                    s[e + gn[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        },
        ln.test(e) || (Y.cssHooks[e + t].set = b)
    });
    var wn = /%20/g
      , En = /\[\]$/
      , Sn = /\r?\n/g
      , xn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , Tn = /^(?:select|textarea)/i;
    Y.fn.extend({
        serialize: function() {
            return Y.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? Y.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Tn.test(this.nodeName) || xn.test(this.type))
            }).map(function(e, t) {
                var n = Y(this).val();
                return n == null ? null : Y.isArray(n) ? Y.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Sn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }),
    Y.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = Y.isFunction(t) ? t() : t == null ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = Y.ajaxSettings && Y.ajaxSettings.traditional);
        if (Y.isArray(e) || e.jquery && !Y.isPlainObject(e))
            Y.each(e, function() {
                s(this.name, this.value)
            });
        else
            for (r in e)
                x(r, e[r], n, s);
        return i.join("&").replace(wn, "+")
    }
    ;
    var Nn, Cn, kn = /#.*$/, Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, On = /^(?:GET|HEAD)$/, Mn = /^\/\//, _n = /\?/, Dn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Pn = /([?&])_=[^&]*/, Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bn = Y.fn.load, jn = {}, Fn = {}, In = ["*/"] + ["*"];
    try {
        Cn = U.href
    } catch (qn) {
        Cn = R.createElement("a"),
        Cn.href = "",
        Cn = Cn.href
    }
    Nn = Hn.exec(Cn.toLowerCase()) || [],
    Y.fn.load = function(e, n, r) {
        if (typeof e != "string" && Bn)
            return Bn.apply(this, arguments);
        if (!this.length)
            return this;
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length),
        e = e.slice(0, a)),
        Y.isFunction(n) ? (r = n,
        n = t) : n && typeof n == "object" && (s = "POST"),
        Y.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments,
            u.html(i ? Y("<div>").append(e.replace(Dn, "")).find(i) : e)
        }),
        this
    }
    ,
    Y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        Y.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    Y.each(["get", "post"], function(e, n) {
        Y[n] = function(e, r, i, s) {
            return Y.isFunction(r) && (s = s || i,
            i = r,
            r = t),
            Y.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }),
    Y.extend({
        getScript: function(e, n) {
            return Y.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return Y.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? C(e, Y.ajaxSettings) : (t = e,
            e = Y.ajaxSettings),
            C(e, t),
            e
        },
        ajaxSettings: {
            url: Cn,
            isLocal: An.test(Nn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": In
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": Y.parseJSON,
                "text xml": Y.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: T(jn),
        ajaxTransport: T(Fn),
        ajax: function(e, n) {
            function r(e, n, r, o) {
                var f, c, y, b, E, x = n;
                if (w === 2)
                    return;
                w = 2,
                a && clearTimeout(a),
                u = t,
                s = o || "",
                S.readyState = e > 0 ? 4 : 0,
                r && (b = k(h, S, r));
                if (e >= 200 && e < 300 || e === 304)
                    h.ifModified && (E = S.getResponseHeader("Last-Modified"),
                    E && (Y.lastModified[i] = E),
                    E = S.getResponseHeader("Etag"),
                    E && (Y.etag[i] = E)),
                    e === 304 ? (x = "notmodified",
                    f = !0) : (f = L(h, b),
                    x = f.state,
                    c = f.data,
                    y = f.error,
                    f = !y);
                else {
                    y = x;
                    if (!x || e)
                        x = "error",
                        e < 0 && (e = 0)
                }
                S.status = e,
                S.statusText = (n || x) + "",
                f ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]),
                S.statusCode(g),
                g = t,
                l && d.trigger("ajax" + (f ? "Success" : "Error"), [S, h, f ? c : y]),
                m.fireWith(p, [S, x]),
                l && (d.trigger("ajaxComplete", [S, h]),
                --Y.active || Y.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e,
            e = t),
            n = n || {};
            var i, s, o, u, a, f, l, c, h = Y.ajaxSetup({}, n), p = h.context || h, d = p !== h && (p.nodeType || p instanceof Y) ? Y(p) : Y.event, v = Y.Deferred(), m = Y.Callbacks("once memory"), g = h.statusCode || {}, y = {}, b = {}, w = 0, E = "canceled", S = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!w) {
                        var n = e.toLowerCase();
                        e = b[n] = b[n] || e,
                        y[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return w === 2 ? s : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (w === 2) {
                        if (!o) {
                            o = {};
                            while (n = Ln.exec(s))
                                o[n[1].toLowerCase()] = n[2]
                        }
                        n = o[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function(e) {
                    return w || (h.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || E,
                    u && u.abort(e),
                    r(0, e),
                    this
                }
            };
            v.promise(S),
            S.success = S.done,
            S.error = S.fail,
            S.complete = m.add,
            S.statusCode = function(e) {
                if (e) {
                    var t;
                    if (w < 2)
                        for (t in e)
                            g[t] = [g[t], e[t]];
                    else
                        t = e[S.status],
                        S.always(t)
                }
                return this
            }
            ,
            h.url = ((e || h.url) + "").replace(kn, "").replace(Mn, Nn[1] + "//"),
            h.dataTypes = Y.trim(h.dataType || "*").toLowerCase().split(tt),
            h.crossDomain == null && (f = Hn.exec(h.url.toLowerCase()),
            h.crossDomain = !(!f || f[1] === Nn[1] && f[2] === Nn[2] && (f[3] || (f[1] === "http:" ? 80 : 443)) == (Nn[3] || (Nn[1] === "http:" ? 80 : 443)))),
            h.data && h.processData && typeof h.data != "string" && (h.data = Y.param(h.data, h.traditional)),
            N(jn, h, n, S);
            if (w === 2)
                return S;
            l = h.global,
            h.type = h.type.toUpperCase(),
            h.hasContent = !On.test(h.type),
            l && Y.active++ === 0 && Y.event.trigger("ajaxStart");
            if (!h.hasContent) {
                h.data && (h.url += (_n.test(h.url) ? "&" : "?") + h.data,
                delete h.data),
                i = h.url;
                if (h.cache === !1) {
                    var x = Y.now()
                      , T = h.url.replace(Pn, "$1_=" + x);
                    h.url = T + (T === h.url ? (_n.test(h.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
            h.ifModified && (i = i || h.url,
            Y.lastModified[i] && S.setRequestHeader("If-Modified-Since", Y.lastModified[i]),
            Y.etag[i] && S.setRequestHeader("If-None-Match", Y.etag[i])),
            S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + In + "; q=0.01" : "") : h.accepts["*"]);
            for (c in h.headers)
                S.setRequestHeader(c, h.headers[c]);
            if (!h.beforeSend || h.beforeSend.call(p, S, h) !== !1 && w !== 2) {
                E = "abort";
                for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    S[c](h[c]);
                u = N(Fn, h, n, S);
                if (!u)
                    r(-1, "No Transport");
                else {
                    S.readyState = 1,
                    l && d.trigger("ajaxSend", [S, h]),
                    h.async && h.timeout > 0 && (a = setTimeout(function() {
                        S.abort("timeout")
                    }, h.timeout));
                    try {
                        w = 1,
                        u.send(y, r)
                    } catch (C) {
                        if (!(w < 2))
                            throw C;
                        r(-1, C)
                    }
                }
                return S
            }
            return S.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Rn = []
      , Un = /\?/
      , zn = /(=)\?(?=&|$)|\?\?/
      , Wn = Y.now();
    Y.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rn.pop() || Y.expando + "_" + Wn++;
            return this[e] = !0,
            e
        }
    }),
    Y.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && zn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h)
            return s = n.jsonpCallback = Y.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
            o = e[s],
            c ? n.url = f.replace(zn, "$1" + s) : h ? n.data = a.replace(zn, "$1" + s) : l && (n.url += (Un.test(f) ? "&" : "?") + n.jsonp + "=" + s),
            n.converters["script json"] = function() {
                return u || Y.error(s + " was not called"),
                u[0]
            }
            ,
            n.dataTypes[0] = "json",
            e[s] = function() {
                u = arguments
            }
            ,
            i.always(function() {
                e[s] = o,
                n[s] && (n.jsonpCallback = r.jsonpCallback,
                Rn.push(s)),
                u && Y.isFunction(o) && o(u[0]),
                u = o = t
            }),
            "script"
    }),
    Y.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return Y.globalEval(e),
                e
            }
        }
    }),
    Y.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    Y.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
            return {
                send: function(i, s) {
                    n = R.createElement("script"),
                    n.async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState))
                            n.onload = n.onreadystatechange = null,
                            r && n.parentNode && r.removeChild(n),
                            n = t,
                            i || s(200, "success")
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Xn, Vn = e.ActiveXObject ? function() {
        for (var e in Xn)
            Xn[e](0, 1)
    }
    : !1, $n = 0;
    Y.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && A() || O()
    }
    : A,
    function(e) {
        Y.extend(Y.support, {
            ajax: !!e,
            cors: !!e && "withCredentials"in e
        })
    }(Y.ajaxSettings.xhr()),
    Y.support.ajax && Y.ajaxTransport(function(n) {
        if (!n.crossDomain || Y.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields)
                            a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
                    !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)
                            a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t,
                                o && (a.onreadystatechange = Y.noop,
                                Vn && delete Xn[o]);
                                if (i)
                                    a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status,
                                    l = a.getAllResponseHeaders(),
                                    c = {},
                                    h = a.responseXML,
                                    h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }
                    ,
                    n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++$n,
                    Vn && (Xn || (Xn = {},
                    Y(e).unload(Vn)),
                    Xn[o] = r),
                    a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var Jn, Kn, Qn = /^(?:toggle|show|hide)$/, Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$","i"), Yn = /queueHooks$/, Zn = [H], er = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t), s = Gn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                n = +s[2],
                r = s[3] || (Y.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = Y.css(i.elem, e, !0) || n || 1;
                    do
                        a = a || ".5",
                        u /= a,
                        Y.style(i.elem, e, u + r);
                    while (a !== (a = i.cur() / o) && a !== 1 && --f)
                }
                i.unit = r,
                i.start = u,
                i.end = s[1] ? u + (s[1] + 1) * n : n
            }
            return i
        }
        ]
    };
    Y.Animation = Y.extend(D, {
        tweener: function(e, t) {
            Y.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)
                n = e[r],
                er[n] = er[n] || [],
                er[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }),
    Y.Tween = B,
    B.prototype = {
        constructor: B,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (Y.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : B.propHooks._default.set(this),
            this
        }
    },
    B.prototype.init.prototype = B.prototype,
    B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = Y.css(e.elem, e.prop, !1, ""),
                !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                Y.fx.step[e.prop] ? Y.fx.step[e.prop](e) : e.elem.style && (e.elem.style[Y.cssProps[e.prop]] != null || Y.cssHooks[e.prop]) ? Y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Y.each(["toggle", "show", "hide"], function(e, t) {
        var n = Y.fn[t];
        Y.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && Y.isFunction(r) && Y.isFunction(i) ? n.apply(this, arguments) : this.animate(j(t, !0), r, i, s)
        }
    }),
    Y.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(g).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = Y.isEmptyObject(e)
              , s = Y.speed(t, n, r)
              , o = function() {
                var t = D(this, Y.extend({}, e), s);
                i && t.stop(!0)
            };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return typeof e != "string" && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = e != null && e + "queueHooks"
                  , s = Y.timers
                  , o = Y._data(this);
                if (n)
                    o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Yn.test(n) && i(o[n]);
                for (n = s.length; n--; )
                    s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r),
                    t = !1,
                    s.splice(n, 1));
                (t || !r) && Y.dequeue(this, e)
            })
        }
    }),
    Y.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        Y.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    Y.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? Y.extend({}, e) : {
            complete: n || !n && t || Y.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Y.isFunction(t) && t
        };
        r.duration = Y.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in Y.fx.speeds ? Y.fx.speeds[r.duration] : Y.fx.speeds._default;
        if (r.queue == null || r.queue === !0)
            r.queue = "fx";
        return r.old = r.complete,
        r.complete = function() {
            Y.isFunction(r.old) && r.old.call(this),
            r.queue && Y.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    Y.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    Y.timers = [],
    Y.fx = B.prototype.init,
    Y.fx.tick = function() {
        var e, n = Y.timers, r = 0;
        Jn = Y.now();
        for (; r < n.length; r++)
            e = n[r],
            !e() && n[r] === e && n.splice(r--, 1);
        n.length || Y.fx.stop(),
        Jn = t
    }
    ,
    Y.fx.timer = function(e) {
        e() && Y.timers.push(e) && !Kn && (Kn = setInterval(Y.fx.tick, Y.fx.interval))
    }
    ,
    Y.fx.interval = 13,
    Y.fx.stop = function() {
        clearInterval(Kn),
        Kn = null
    }
    ,
    Y.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Y.fx.step = {},
    Y.expr && Y.expr.filters && (Y.expr.filters.animated = function(e) {
        return Y.grep(Y.timers, function(t) {
            return e === t.elem
        }).length
    }
    );
    var tr = /^(?:body|html)$/i;
    Y.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                Y.offset.setOffset(this, e, t)
            });
        var n, r, i, s, o, u, a, f = {
            top: 0,
            left: 0
        }, l = this[0], c = l && l.ownerDocument;
        if (!c)
            return;
        return (r = c.body) === l ? Y.offset.bodyOffset(l) : (n = c.documentElement,
        Y.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()),
        i = F(c),
        s = n.clientTop || r.clientTop || 0,
        o = n.clientLeft || r.clientLeft || 0,
        u = i.pageYOffset || n.scrollTop,
        a = i.pageXOffset || n.scrollLeft,
        {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }
    ,
    Y.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return Y.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(Y.css(e, "marginTop")) || 0,
            n += parseFloat(Y.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = Y.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = Y(e), s = i.offset(), o = Y.css(e, "top"), u = Y.css(e, "left"), a = (r === "absolute" || r === "fixed") && Y.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(),
            c = l.top,
            h = l.left) : (c = parseFloat(o) || 0,
            h = parseFloat(u) || 0),
            Y.isFunction(t) && (t = t.call(e, n, s)),
            t.top != null && (f.top = t.top - s.top + c),
            t.left != null && (f.left = t.left - s.left + h),
            "using"in t ? t.using.call(e, f) : i.css(f)
        }
    },
    Y.fn.extend({
        position: function() {
            if (!this[0])
                return;
            var e = this[0]
              , t = this.offsetParent()
              , n = this.offset()
              , r = tr.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(Y.css(e, "marginTop")) || 0,
            n.left -= parseFloat(Y.css(e, "marginLeft")) || 0,
            r.top += parseFloat(Y.css(t[0], "borderTopWidth")) || 0,
            r.left += parseFloat(Y.css(t[0], "borderLeftWidth")) || 0,
            {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || R.body;
                while (e && !tr.test(e.nodeName) && Y.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || R.body
            })
        }
    }),
    Y.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        Y.fn[e] = function(i) {
            return Y.access(this, function(e, i, s) {
                var o = F(e);
                if (s === t)
                    return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? Y(o).scrollLeft() : s, r ? s : Y(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }),
    Y.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        Y.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            Y.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean")
                  , u = r || (i === !0 || s === !0 ? "margin" : "border");
                return Y.access(this, function(n, r, i) {
                    var s;
                    return Y.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement,
                    Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? Y.css(n, r, i, u) : Y.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }),
    e.jQuery = e.$ = Y,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return Y
    })
})(window),
function(e, t, n) {
    "use strict";
    e.fn.backstretch = function(r, s) {
        return (r === n || r.length === 0) && e.error("No images were supplied for Backstretch"),
        e(t).scrollTop() === 0 && t.scrollTo(0, 0),
        this.each(function() {
            var t = e(this)
              , n = t.data("backstretch");
            n && (s = e.extend(n.options, s),
            n.destroy(!0)),
            n = new i(this,r,s),
            t.data("backstretch", n)
        })
    }
    ,
    e.backstretch = function(t, n) {
        return e("body").backstretch(t, n).data("backstretch")
    }
    ,
    e.expr[":"].backstretch = function(t) {
        return e(t).data("backstretch") !== n
    }
    ,
    e.fn.backstretch.defaults = {
        centeredX: !0,
        centeredY: !0,
        duration: 5e3,
        fade: 0
    };
    var r = {
        wrap: {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        img: {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxWidth: "none",
            zIndex: -999999
        }
    }
      , i = function(n, i, o) {
        this.options = e.extend({}, e.fn.backstretch.defaults, o || {}),
        this.images = e.isArray(i) ? i : [i],
        e.each(this.images, function() {
            e("<img />")[0].src = this
        }),
        this.isBody = n === document.body,
        this.$container = e(n),
        this.$wrap = e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),
        this.$root = this.isBody ? s ? e(t) : e(document) : this.$container;
        if (!this.isBody) {
            var u = this.$container.css("position")
              , a = this.$container.css("zIndex");
            this.$container.css({
                position: u === "static" ? "relative" : u,
                zIndex: a === "auto" ? 0 : a,
                background: "none"
            }),
            this.$wrap.css({
                zIndex: -999998
            })
        }
        this.$wrap.css({
            position: this.isBody && s ? "fixed" : "absolute"
        }),
        this.index = 0,
        this.show(this.index),
        e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
            this.isBody && t.pageYOffset === 0 && (t.scrollTo(0, 1),
            this.resize())
        }, this))
    };
    i.prototype = {
        resize: function() {
            try {
                var e = {
                    left: 0,
                    top: 0
                }, n = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = n, i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(), s = r / this.$img.data("ratio"), o;
                s >= i ? (o = (s - i) / 2,
                this.options.centeredY && (e.top = "-" + o + "px")) : (s = i,
                r = s * this.$img.data("ratio"),
                o = (r - n) / 2,
                this.options.centeredX && (e.left = "-" + o + "px")),
                this.$wrap.css({
                    width: n,
                    height: i
                }).find("img:not(.deleteable)").css({
                    width: r,
                    height: s
                }).css(e)
            } catch (u) {}
            return this
        },
        show: function(t) {
            if (Math.abs(t) > this.images.length - 1)
                return;
            this.index = t;
            var n = this
              , i = n.$wrap.find("img").addClass("deleteable")
              , s = e.Event("backstretch.show", {
                relatedTarget: n.$container[0]
            });
            return clearInterval(n.interval),
            n.$img = e("<img />").css(r.img).bind("load", function(t) {
                var r = this.width || e(t.target).width()
                  , o = this.height || e(t.target).height();
                e(this).data("ratio", r / o),
                e(this).fadeIn(n.options.speed || n.options.fade, function() {
                    i.remove(),
                    n.paused || n.cycle(),
                    n.$container.trigger(s, n)
                }),
                n.resize()
            }).appendTo(n.$wrap),
            n.$img.attr("src", n.images[t]),
            n
        },
        next: function() {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function() {
            return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1)
        },
        pause: function() {
            return this.paused = !0,
            this
        },
        resume: function() {
            return this.paused = !1,
            this.next(),
            this
        },
        cycle: function() {
            return this.images.length > 1 && (clearInterval(this.interval),
            this.interval = setInterval(e.proxy(function() {
                this.paused || this.next()
            }, this), this.options.duration)),
            this
        },
        destroy: function(n) {
            e(t).off("resize.backstretch orientationchange.backstretch"),
            clearInterval(this.interval),
            n || this.$wrap.remove(),
            this.$container.removeData("backstretch")
        }
    };
    var s = function() {
        var e = navigator.userAgent
          , n = navigator.platform
          , r = e.match(/AppleWebKit\/([0-9]+)/)
          , i = !!r && r[1]
          , s = e.match(/Fennec\/([0-9]+)/)
          , o = !!s && s[1]
          , u = e.match(/Opera Mobi\/([0-9]+)/)
          , a = !!u && u[1]
          , f = e.match(/MSIE ([0-9]+)/)
          , l = !!f && f[1];
        return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || u && a < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource"in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || l && l <= 6)
    }()
}(jQuery, window),
function(e, t) {
    function h(e, t, n) {
        var r = u[t.type] || {};
        return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e),
        isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
    }
    function p(t) {
        var n = s()
          , r = n._rgba = [];
        return t = t.toLowerCase(),
        c(i, function(e, i) {
            var s, u = i.re.exec(t), a = u && i.parse(u), f = i.space || "rgba";
            if (a)
                return s = n[f](a),
                n[o[f].cache] = s[o[f].cache],
                r = n._rgba = s._rgba,
                !1
        }),
        r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent),
        n) : l[t]
    }
    function d(e, t, n) {
        return n = (n + 1) % 1,
        n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, i = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(e) {
            return [e[1], e[2], e[3], e[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(e) {
            return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(e) {
            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(e) {
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(e) {
            return [e[1], e[2] / 100, e[3] / 100, e[4]]
        }
    }], s = e.Color = function(t, n, r, i) {
        return new e.Color.fn.parse(t,n,r,i)
    }
    , o = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }, u = {
        "byte": {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }, a = s.support = {}, f = e("<p>")[0], l, c = e.each;
    f.style.cssText = "background-color:rgba(1,1,1,.5)",
    a.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
    c(o, function(e, t) {
        t.cache = "_" + e,
        t.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }),
    s.fn = e.extend(s.prototype, {
        parse: function(n, r, i, u) {
            if (n === t)
                return this._rgba = [null, null, null, null],
                this;
            if (n.jquery || n.nodeType)
                n = e(n).css(r),
                r = t;
            var a = this
              , f = e.type(n)
              , d = this._rgba = [];
            r !== t && (n = [n, r, i, u],
            f = "array");
            if (f === "string")
                return this.parse(p(n) || l._default);
            if (f === "array")
                return c(o.rgba.props, function(e, t) {
                    d[t.idx] = h(n[t.idx], t)
                }),
                this;
            if (f === "object")
                return n instanceof s ? c(o, function(e, t) {
                    n[t.cache] && (a[t.cache] = n[t.cache].slice())
                }) : c(o, function(t, r) {
                    var i = r.cache;
                    c(r.props, function(e, t) {
                        if (!a[i] && r.to) {
                            if (e === "alpha" || n[e] == null)
                                return;
                            a[i] = r.to(a._rgba)
                        }
                        a[i][t.idx] = h(n[e], t, !0)
                    }),
                    a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1,
                    r.from && (a._rgba = r.from(a[i])))
                }),
                this
        },
        is: function(e) {
            var t = s(e)
              , n = !0
              , r = this;
            return c(o, function(e, i) {
                var s, o = t[i.cache];
                return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [],
                c(i.props, function(e, t) {
                    if (o[t.idx] != null)
                        return n = o[t.idx] === s[t.idx],
                        n
                })),
                n
            }),
            n
        },
        _space: function() {
            var e = []
              , t = this;
            return c(o, function(n, r) {
                t[r.cache] && e.push(n)
            }),
            e.pop()
        },
        transition: function(e, t) {
            var n = s(e)
              , r = n._space()
              , i = o[r]
              , a = this.alpha() === 0 ? s("transparent") : this
              , f = a[i.cache] || i.to(a._rgba)
              , l = f.slice();
            return n = n[i.cache],
            c(i.props, function(e, r) {
                var i = r.idx
                  , s = f[i]
                  , o = n[i]
                  , a = u[r.type] || {};
                if (o === null)
                    return;
                s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)),
                l[i] = h((o - s) * t + s, r))
            }),
            this[r](l)
        },
        blend: function(t) {
            if (this._rgba[3] === 1)
                return this;
            var n = this._rgba.slice()
              , r = n.pop()
              , i = s(t)._rgba;
            return s(e.map(n, function(e, t) {
                return (1 - r) * i[t] + r * e
            }))
        },
        toRgbaString: function() {
            var t = "rgba("
              , n = e.map(this._rgba, function(e, t) {
                return e == null ? t > 2 ? 1 : 0 : e
            });
            return n[3] === 1 && (n.pop(),
            t = "rgb("),
            t + n.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla("
              , n = e.map(this.hsla(), function(e, t) {
                return e == null && (e = t > 2 ? 1 : 0),
                t && t < 3 && (e = Math.round(e * 100) + "%"),
                e
            });
            return n[3] === 1 && (n.pop(),
            t = "hsl("),
            t + n.join() + ")"
        },
        toHexString: function(t) {
            var n = this._rgba.slice()
              , r = n.pop();
            return t && n.push(~~(r * 255)),
            "#" + e.map(n, function(e) {
                return e = (e || 0).toString(16),
                e.length === 1 ? "0" + e : e
            }).join("")
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }
    }),
    s.fn.parse.prototype = s.fn,
    o.hsla.to = function(e) {
        if (e[0] == null || e[1] == null || e[2] == null)
            return [null, null, null, e[3]];
        var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
        return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240,
        u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a),
        [Math.round(l) % 360, c, f, i == null ? 1 : i]
    }
    ,
    o.hsla.from = function(e) {
        if (e[0] == null || e[1] == null || e[2] == null)
            return [null, null, null, e[3]];
        var t = e[0] / 360
          , n = e[1]
          , r = e[2]
          , i = e[3]
          , s = r <= .5 ? r * (1 + n) : r + n - r * n
          , o = 2 * r - s;
        return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
    }
    ,
    c(o, function(n, i) {
        var o = i.props
          , u = i.cache
          , a = i.to
          , f = i.from;
        s.fn[n] = function(n) {
            a && !this[u] && (this[u] = a(this._rgba));
            if (n === t)
                return this[u].slice();
            var r, i = e.type(n), l = i === "array" || i === "object" ? n : arguments, p = this[u].slice();
            return c(o, function(e, t) {
                var n = l[i === "object" ? e : t.idx];
                n == null && (n = p[t.idx]),
                p[t.idx] = h(n, t)
            }),
            f ? (r = s(f(p)),
            r[u] = p,
            r) : s(p)
        }
        ,
        c(o, function(t, i) {
            if (s.fn[t])
                return;
            s.fn[t] = function(s) {
                var o = e.type(s), u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n, a = this[u](), f = a[i.idx], l;
                return o === "undefined" ? f : (o === "function" && (s = s.call(this, f),
                o = e.type(s)),
                s == null && i.empty ? this : (o === "string" && (l = r.exec(s),
                l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))),
                a[i.idx] = s,
                this[u](a)))
            }
        })
    }),
    s.hook = function(t) {
        var n = t.split(" ");
        c(n, function(t, n) {
            e.cssHooks[n] = {
                set: function(t, r) {
                    var i, o, u = "";
                    if (e.type(r) !== "string" || (i = p(r))) {
                        r = s(i || r);
                        if (!a.rgba && r._rgba[3] !== 1) {
                            o = n === "backgroundColor" ? t.parentNode : t;
                            while ((u === "" || u === "transparent") && o && o.style)
                                try {
                                    u = e.css(o, "backgroundColor"),
                                    o = o.parentNode
                                } catch (f) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        t.style[n] = r
                    } catch (f) {}
                }
            },
            e.fx.step[n] = function(t) {
                t.colorInit || (t.start = s(t.elem, n),
                t.end = s(t.end),
                t.colorInit = !0),
                e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }
    ,
    s.hook(n),
    e.cssHooks.borderColor = {
        expand: function(e) {
            var t = {};
            return c(["Top", "Right", "Bottom", "Left"], function(n, r) {
                t["border" + r + "Color"] = e
            }),
            t
        }
    },
    l = e.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery),
function(e, t, n, r, i) {
    var s = e(r)
      , o = "waypoint.reached"
      , u = function(e, n) {
        e.element.trigger(o, n),
        e.options.triggerOnce && e.element[t]("destroy")
    }
      , a = function(e, t) {
        if (!t)
            return -1;
        var n = t.waypoints.length - 1;
        while (n >= 0 && t.waypoints[n].element[0] !== e[0])
            n -= 1;
        return n
    }
      , f = []
      , l = function(t) {
        e.extend(this, {
            element: e(t),
            oldScroll: 0,
            waypoints: [],
            didScroll: !1,
            didResize: !1,
            doScroll: e.proxy(function() {
                var t = this.element.scrollTop()
                  , r = t > this.oldScroll
                  , i = this
                  , s = e.grep(this.waypoints, function(e, n) {
                    return r ? e.offset > i.oldScroll && e.offset <= t : e.offset <= i.oldScroll && e.offset > t
                })
                  , o = s.length;
                (!this.oldScroll || !t) && e[n]("refresh"),
                this.oldScroll = t;
                if (!o)
                    return;
                r || s.reverse(),
                e.each(s, function(e, t) {
                    (t.options.continuous || e === o - 1) && u(t, [r ? "down" : "up"])
                })
            }, this)
        }),
        e(t).bind("scroll.waypoints", e.proxy(function() {
            this.didScroll || (this.didScroll = !0,
            r.setTimeout(e.proxy(function() {
                this.doScroll(),
                this.didScroll = !1
            }, this), e[n].settings.scrollThrottle))
        }, this)).bind("resize.waypoints", e.proxy(function() {
            this.didResize || (this.didResize = !0,
            r.setTimeout(e.proxy(function() {
                e[n]("refresh"),
                this.didResize = !1
            }, this), e[n].settings.resizeThrottle))
        }, this)),
        s.load(e.proxy(function() {
            this.doScroll()
        }, this))
    }
      , c = function(t) {
        var n = null;
        return e.each(f, function(e, r) {
            if (r.element[0] === t)
                return n = r,
                !1
        }),
        n
    }
      , h = {
        init: function(r, i) {
            return this.each(function() {
                var s = e.fn[t].defaults.context, u, h = e(this);
                i && i.context && (s = i.context),
                e.isWindow(s) || (s = h.closest(s)[0]),
                u = c(s),
                u || (u = new l(s),
                f.push(u));
                var p = a(h, u)
                  , d = p < 0 ? e.fn[t].defaults : u.waypoints[p].options
                  , v = e.extend({}, d, i);
                v.offset = v.offset === "bottom-in-view" ? function() {
                    var t = e.isWindow(s) ? e[n]("viewportHeight") : e(s).height();
                    return t - e(this).outerHeight()
                }
                : v.offset,
                p < 0 ? u.waypoints.push({
                    element: h,
                    offset: null,
                    options: v
                }) : u.waypoints[p].options = v,
                r && h.bind(o, r),
                i && i.handler && h.bind(o, i.handler)
            }),
            e[n]("refresh"),
            this
        },
        remove: function() {
            return this.each(function(t, n) {
                var r = e(n);
                e.each(f, function(e, t) {
                    var n = a(r, t);
                    n >= 0 && (t.waypoints.splice(n, 1),
                    t.waypoints.length || (t.element.unbind("scroll.waypoints resize.waypoints"),
                    f.splice(e, 1)))
                })
            })
        },
        destroy: function() {
            return this.unbind(o)[t]("remove")
        }
    }
      , p = {
        refresh: function() {
            e.each(f, function(t, r) {
                var i = e.isWindow(r.element[0])
                  , s = i ? 0 : r.element.offset().top
                  , o = i ? e[n]("viewportHeight") : r.element.height()
                  , a = i ? 0 : r.element.scrollTop();
                e.each(r.waypoints, function(e, t) {
                    if (!t)
                        return;
                    var n = t.options.offset
                      , i = t.offset;
                    if (typeof t.options.offset == "function")
                        n = t.options.offset.apply(t.element);
                    else if (typeof t.options.offset == "string") {
                        var f = parseFloat(t.options.offset);
                        n = t.options.offset.indexOf("%") ? Math.ceil(o * (f / 100)) : f
                    }
                    t.offset = t.element.offset().top - s + a - n;
                    if (t.options.onlyOnScroll)
                        return;
                    i !== null && r.oldScroll > i && r.oldScroll <= t.offset ? u(t, ["up"]) : i !== null && r.oldScroll < i && r.oldScroll >= t.offset ? u(t, ["down"]) : !i && r.element.scrollTop() > t.offset && u(t, ["down"])
                }),
                r.waypoints.sort(function(e, t) {
                    return e.offset - t.offset
                })
            })
        },
        viewportHeight: function() {
            return r.innerHeight ? r.innerHeight : s.height()
        },
        aggregate: function() {
            var t = e();
            return e.each(f, function(n, r) {
                e.each(r.waypoints, function(e, n) {
                    t = t.add(n.element)
                })
            }),
            t
        }
    };
    e.fn[t] = function(n) {
        if (h[n])
            return h[n].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof n == "function" || !n)
            return h.init.apply(this, arguments);
        if (typeof n == "object")
            return h.init.apply(this, [null, n]);
        e.error("Method " + n + " does not exist on jQuery " + t)
    }
    ,
    e.fn[t].defaults = {
        continuous: !0,
        offset: 0,
        triggerOnce: !1,
        context: r
    },
    e[n] = function(e) {
        return p[e] ? p[e].apply(this) : p.aggregate()
    }
    ,
    e[n].settings = {
        resizeThrottle: 200,
        scrollThrottle: 100
    },
    s.load(function() {
        e[n]("refresh")
    })
}(jQuery, "waypoint", "waypoints", window),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var s = 1.70158
          , o = 0
          , u = r;
        if (t == 0)
            return n;
        if ((t /= i) == 1)
            return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else
            var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158
          , o = 0
          , u = r;
        if (t == 0)
            return n;
        if ((t /= i) == 1)
            return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else
            var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var s = 1.70158
          , o = 0
          , u = r;
        if (t == 0)
            return n;
        if ((t /= i / 2) == 2)
            return n + r;
        o || (o = i * .3 * 1.5);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else
            var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158),
        r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158),
        r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158),
        (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, r, i) {
        return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
}),
function(e) {
    function n(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
    var t = e.scrollTo = function(t, n, r) {
        e(window).scrollTo(t, n, r)
    }
    ;
    t.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    },
    t.window = function(t) {
        return e(window)._scrollable()
    }
    ,
    e.fn._scrollable = function() {
        return this.map(function() {
            var t = this
              , n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!n)
                return t;
            var r = (t.contentWindow || t).document || t.ownerDocument || t;
            return /webkit/i.test(navigator.userAgent) || r.compatMode == "BackCompat" ? r.body : r.documentElement
        })
    }
    ,
    e.fn.scrollTo = function(r, i, s) {
        return typeof i == "object" && (s = i,
        i = 0),
        typeof s == "function" && (s = {
            onAfter: s
        }),
        r == "max" && (r = 9e9),
        s = e.extend({}, t.defaults, s),
        i = i || s.duration,
        s.queue = s.queue && s.axis.length > 1,
        s.queue && (i /= 2),
        s.offset = n(s.offset),
        s.over = n(s.over),
        this._scrollable().each(function() {
            function d(e) {
                u.animate(c, i, s.easing, e && function() {
                    e.call(this, r, s)
                }
                )
            }
            if (r == null)
                return;
            var o = this, u = e(o), a = r, l, c = {}, p = u.is("html,body");
            switch (typeof a) {
            case "number":
            case "string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)) {
                    a = n(a);
                    break
                }
                a = e(a, this);
                if (!a.length)
                    return;
            case "object":
                if (a.is || a.style)
                    l = (a = e(a)).offset()
            }
            e.each(s.axis.split(""), function(e, n) {
                var r = n == "x" ? "Left" : "Top"
                  , i = r.toLowerCase()
                  , f = "scroll" + r
                  , v = o[f]
                  , m = t.max(o, n);
                if (l)
                    c[f] = l[i] + (p ? 0 : v - u.offset()[i]),
                    s.margin && (c[f] -= parseInt(a.css("margin" + r)) || 0,
                    c[f] -= parseInt(a.css("border" + r + "Width")) || 0),
                    c[f] += s.offset[i] || 0,
                    s.over[i] && (c[f] += a[n == "x" ? "width" : "height"]() * s.over[i]);
                else {
                    var y = a[i];
                    c[f] = y.slice && y.slice(-1) == "%" ? parseFloat(y) / 100 * m : y
                }
                s.limit && /^\d+$/.test(c[f]) && (c[f] = c[f] <= 0 ? 0 : Math.min(c[f], m)),
                !e && s.queue && (v != c[f] && d(s.onAfterFirst),
                delete c[f])
            }),
            d(s.onAfter)
        }).end()
    }
    ,
    t.max = function(t, n) {
        var r = n == "x" ? "Width" : "Height"
          , i = "scroll" + r;
        if (!e(t).is("html,body"))
            return t[i] - e(t)[r.toLowerCase()]();
        var s = "client" + r
          , o = t.ownerDocument.documentElement
          , u = t.ownerDocument.body;
        return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
    }
}(jQuery),
function(e, t) {
    function a(e, t) {
        return e === null ? t === "null" : e === undefined ? t === "undefined" : e.is && e instanceof i ? t === "element" : Object.prototype.toString.call(e).toLowerCase().indexOf(t) > 7
    }
    function h(e) {
        var t, n, r, i, s, o, u, c, p;
        if (e instanceof h)
            return e;
        a(e, "array") || (e = String(e).replace(/\s/g, "").toLowerCase().match(/(?:\+,|[^,])+/g));
        for (t = 0,
        n = e.length; t < n; ++t) {
            a(e[t], "array") || (e[t] = String(e[t]).match(/(?:\+\/|[^\/])+/g)),
            o = [],
            r = e[t].length;
            while (r--) {
                var u = e[t][r];
                s = {
                    jwertyCombo: String(u),
                    shiftKey: !1,
                    ctrlKey: !1,
                    altKey: !1,
                    metaKey: !1
                },
                a(u, "array") || (u = String(u).toLowerCase().match(/(?:(?:[^\+])+|\+\+|^\+$)/g)),
                i = u.length;
                while (i--)
                    u[i] === "++" && (u[i] = "+"),
                    u[i]in l.mods ? s[f[l.mods[u[i]]]] = !0 : u[i]in l.keys ? s.keyCode = l.keys[u[i]] : c = u[i].match(/^\[([^-]+\-?[^-]*)-([^-]+\-?[^-]*)\]$/);
                if (a(s.keyCode, "undefined"))
                    if (c && c[1]in l.keys && c[2]in l.keys) {
                        c[2] = l.keys[c[2]],
                        c[1] = l.keys[c[1]];
                        for (p = c[1]; p < c[2]; ++p)
                            o.push({
                                altKey: s.altKey,
                                shiftKey: s.shiftKey,
                                metaKey: s.metaKey,
                                ctrlKey: s.ctrlKey,
                                keyCode: p,
                                jwertyCombo: String(u)
                            });
                        s.keyCode = p
                    } else
                        s.keyCode = 0;
                o.push(s)
            }
            this[t] = o
        }
        return this.length = t,
        this
    }
    var r = e.document, i = e.jQuery || e.Zepto || e.ender || r, s, o, u = "keydown";
    i === r ? (s = function(e, t) {
        return e ? i.querySelector(e, t || i) : i
    }
    ,
    o = function(e, t) {
        e.addEventListener(u, t, !1)
    }
    ,
    $f = function(e, t) {
        var n = document.createEvent("Event"), r;
        n.initEvent(u, !0, !0);
        for (r in t)
            n[r] = t[r];
        return (e || i).dispatchEvent(n)
    }
    ) : (s = function(e, t, n) {
        return i(e || r, t)
    }
    ,
    o = function(e, t) {
        i(e).bind(u + ".jwerty", t)
    }
    ,
    $f = function(e, t) {
        i(e || r).trigger(i.Event(u, t))
    }
    );
    var f = {
        16: "shiftKey",
        17: "ctrlKey",
        18: "altKey",
        91: "metaKey"
    }
      , l = {
        mods: {
            "⇧": 16,
            shift: 16,
            "⌃": 17,
            ctrl: 17,
            "⌥": 18,
            alt: 18,
            option: 18,
            "⌘": 91,
            meta: 91,
            cmd: 91,
            "super": 91,
            win: 91
        },
        keys: {
            "⌫": 8,
            backspace: 8,
            "⇥": 9,
            "⇆": 9,
            tab: 9,
            "↩": 13,
            "return": 13,
            enter: 13,
            "⌅": 13,
            pause: 19,
            "pause-break": 19,
            "⇪": 20,
            caps: 20,
            "caps-lock": 20,
            "⎋": 27,
            escape: 27,
            esc: 27,
            space: 32,
            "↖": 33,
            pgup: 33,
            "page-up": 33,
            "↘": 34,
            pgdown: 34,
            "page-down": 34,
            "⇟": 35,
            end: 35,
            "⇞": 36,
            home: 36,
            ins: 45,
            insert: 45,
            del: 46,
            "delete": 46,
            "←": 37,
            left: 37,
            "arrow-left": 37,
            "↑": 38,
            up: 38,
            "arrow-up": 38,
            "→": 39,
            right: 39,
            "arrow-right": 39,
            "↓": 40,
            down: 40,
            "arrow-down": 40,
            "*": 106,
            star: 106,
            asterisk: 106,
            multiply: 106,
            "+": 107,
            plus: 107,
            "-": 109,
            subtract: 109,
            ";": 186,
            semicolon: 186,
            "=": 187,
            equals: 187,
            ",": 188,
            comma: 188,
            ".": 190,
            period: 190,
            "full-stop": 190,
            "/": 191,
            slash: 191,
            "forward-slash": 191,
            "`": 192,
            tick: 192,
            "back-quote": 192,
            "[": 219,
            "open-bracket": 219,
            "\\": 220,
            "back-slash": 220,
            "]": 221,
            "close-bracket": 221,
            "'": 222,
            quote: 222,
            apostraphe: 222
        }
    };
    c = 95,
    n = 0;
    while (++c < 106)
        l.keys["num-" + n] = c,
        ++n;
    c = 47,
    n = 0;
    while (++c < 58)
        l.keys[n] = c,
        ++n;
    c = 111,
    n = 1;
    while (++c < 136)
        l.keys["f" + n] = c,
        ++n;
    var c = 64;
    while (++c < 91)
        l.keys[String.fromCharCode(c).toLowerCase()] = c;
    var p = t.jwerty = {
        event: function(e, t, n) {
            if (a(t, "boolean")) {
                var r = t;
                t = function() {
                    return r
                }
            }
            e = new h(e);
            var i = 0, s = e.length - 1, o, u;
            return function(r) {
                if (u = p.is(e, r, i)) {
                    if (i < s) {
                        ++i;
                        return
                    }
                    o = t.call(n || this, r, u),
                    o === !1 && r.preventDefault(),
                    i = 0;
                    return
                }
                i = p.is(e, r) ? 1 : 0
            }
        },
        is: function(e, t, n) {
            e = new h(e),
            n = n || 0,
            e = e[n],
            t = t.originalEvent || t;
            var r, i = e.length, s = !1;
            while (i--) {
                s = e[i].jwertyCombo;
                for (var o in e[i])
                    o !== "jwertyCombo" && t[o] != e[i][o] && (s = !1);
                if (s !== !1)
                    return s
            }
            return s
        },
        key: function(t, n, r, i, u) {
            var f = a(r, "element") || a(r, "string") ? r : i
              , l = f === r ? e : r
              , c = f === r ? i : u;
            o(a(f, "element") ? f : s(f, c), p.event(t, n, l))
        },
        fire: function(e, t, n, r) {
            e = new h(e);
            var i = a(n, "number") ? n : r;
            $f(a(t, "element") ? t : s(t, n), e[i || 0][0])
        },
        KEYS: l
    }
}(this, typeof module != "undefined" && module.exports ? module.exports : this),
function() {
    window.$$ = {
        version: "0.1",
        sections: [],
        start_time: (new Date).getTime(),
        total_time: 0,
        start_reading: 0,
        hash: window.location.hash,
        can_animate_background: !0,
        animation_started: !1,
        animate_background: function(e, t) {
            var n, r;
            n = $$.sections[e].color,
            r = $(".section").eq(e),
            Modernizr.csstransitions ? $(".bg-image.show").removeClass("show") : $(".bg-image.show").hide(),
            r.hasClass("image") && (Modernizr.csstransitions ? r.find(".bg-image").addClass("show") : $$.animation_started || r.find(".bg-image").animate({
                opacity: "show"
            }, 300, function() {
                return $(this).addClass("show")
            })),
            Modernizr.csstransitions ? $$.body.attr("class", n) : (n = $$.sections[e].rgb,
            $$.animation_started || ($$.animation_started = !0,
            $$.body.animate({
                backgroundColor: n
            }, 300, function() {
                return $$.animation_started = !1
            })));
            if (typeof t == "function")
                return t()
        },
        set_active_section: function(e) {
            $(".section.fixed").removeClass("fixed"),
            $(".section").eq(e).addClass("fixed"),
            $(".site-link.selected").removeClass("selected"),
            $(".site-nav li:not(:has(#freddie))").eq(e).find(".site-link").addClass("selected")
        },
        hash_section_present: function() {
            var e, t;
            if ($$.hash && $$.hash[1] === "!")
                return e = $$.hash.split("/"),
                t = $(".section#section-" + e[2]),
                e[1] === "section" && t.length ? !0 : !1
        },
        get_hash_section: function() {
            var e, t;
            if ($$.hash_section_present()) {
                e = $$.hash.split("/"),
                t = $(".section#section-" + e[2]);
                if (t.length)
                    return t
            }
        },
        init_sticky: function() {
            var e, t, n, r, i;
            n = $(".masthead").offset().top + $(".masthead").outerHeight(),
            t = Math.ceil($("footer").offset().top),
            e = $(".site-nav, .section.first"),
            i = $(window).scrollTop(),
            r = i + $(window).height(),
            i >= n ? e.hasClass("relative") && e.removeClass("relative") : e.addClass("relative"),
            r >= t ? ($(".site-nav").addClass("bottom-relative"),
            $(".section.last").addClass("relative")) : ($(".section.last").removeClass("relative"),
            $(".site-nav").removeClass("bottom-relative"))
        },
        navigation_to_section: function(e, t) {
            var n, r, i, s;
            return n = $(".site-link.selected").parent("li").index(),
            i = e === "next" ? n + 1 : n - 1,
            s = $(".masthead, .section"),
            r = s.eq(i),
            e === "prev" && n === 0 || e === "next" && n < 0 ? t.preventDefault() : $$.body.scrollTo(r, {
                duration: 450
            })
        },
        seconds_scrolling: function() {
            var e;
            return e = (new Date).getTime(),
            $$.total_time = e - $$.start_time,
            Math.round($$.total_time / 100) / 10
        }
    },
    $(document).ready(function() {
        return $$.body = $("body"),
        Modernizr.svg || $("img").each(function() {
            var e;
            return e = $(this).attr("src"),
            $(this).attr("src", e.replace(".svg", ".png"))
        }),
        // $(".masthead figure.freddie-back").backstretch($(".masthead figure.freddie-back img").attr("src")),
        // $("footer figure.freddie-wave").backstretch($("footer figure.freddie-wave img").attr("src")),
        Modernizr.backgroundsize || $(".bg-image").each(function() {
            var e, t;
            return e = $(this),
            t = e.css("backgroundImage").replace(/url\("|"\)/gi, ""),
            e.backstretch(t)
        }),
        $(".section .content").waypoint(function(e, t) {
            return $$.start_reading = $$.seconds_scrolling()
        }, {
            offset: -150
        }),
        $(".section .content").waypoint(function(e, t) {
            var n, r;
            return t === "down" ? n = $(this).parents(".section").prev() : n = $(this).parents(".section"),
            r = n.find(".section-title").html(),
            typeof r != "undefined",
            $$.start_time = (new Date).getTime()
        }, {
            offset: "bottom-in-view"
        })
    }),
    Modernizr.touch || $(document).ready(function() {
        var e;
        return $(".section").each(function(e, t) {
            return t = $(t),
            $$.sections.push({
                el: t,
                color: t.attr("data-color"),
                rgb: t.css("backgroundColor")
            }),
            t.css("background", "transparent")
        }),
        $.waypoints.settings.scrollThrottle = 0,
        $(".section .content").waypoint(function(e, t) {
            var n;
            n = $(this).parent(".section"),
            t === "up" && n.index() > 0 && (n = n.prev()),
            $$.can_animate_background && ($$.set_active_section(n.index()),
            $$.animate_background(n.index())),
            n.attr("id") === "section-footer" && $(".site-nav").fadeOut();
            if (t === "up")
                return $(".site-nav").fadeIn()
        }, {
            offset: 400,
            continuous: !1
        }),
        $$.hash_section_present() ? ($(".bg-image").removeClass("show"),
        $$.can_animate_background = !1,
        e = $$.get_hash_section(),
        $$.set_active_section(e.index()),
        $$.animate_background(e.index()),
        $(window).scrollTo(e.find(".content"), {
            duration: 1e3,
            onAfter: function() {
                return $$.can_animate_background = !0
            }
        })) : $$.body.css("backgroundColor", $$.sections[0].colour),
        $(".site-nav .site-link:not(#freddie)").click(function(e) {
            var t, n, r;
            return e.preventDefault(),
            r = $(this),
            t = r.attr("href"),
            n = r.parent("li").index() - 1,
            $$.can_animate_background = !1,
            $("body, .bg-image").addClass("no-transition"),
            $$.animate_background(n),
            $$.set_active_section(n),
            $("body").scrollTo(t, {
                duration: 1e3,
                offset: {
                    top: 50
                },
                onAfter: function() {
                    return window.location.hash = "!/section/" + t.replace("#section-", ""),
                    $("body, .bg-image").removeClass("no-transition"),
                    $$.can_animate_background = !0
                }
            })
        }),
        $("#freddie").click(function(e) {
            return e.preventDefault(),
            $$.animate_background(0),
            $$.set_active_section(0),
            $$.can_animate_background = !1,
            $$.body.scrollTo("#top", {
                duration: 1e3,
                onAfter: function() {
                    return window.location.hash = "",
                    $$.can_animate_background = !0
                }
            })
        }),
        $$.hash_section_present() || $$.init_sticky(),
        $(window).bind("scroll", function() {
            return $$.init_sticky()
        }),
        $(window).height() > 900 && $("footer").css("height", $(window).height()),
        $(window).resize(function() {
            if ($(window).height() > 900)
                return $("footer").css("height", $(window).height())
        }),
        jwerty.key("↓", function(e) {
            return $$.navigation_to_section("next", e)
        }),
        jwerty.key("→", function(e) {
            return $$.navigation_to_section("next", e)
        }),
        jwerty.key("j", function(e) {
            return $$.navigation_to_section("next", e)
        }),
        jwerty.key("k", function(e) {
            return $$.navigation_to_section("prev", e)
        }),
        jwerty.key("↑", function(e) {
            return $$.navigation_to_section("prev", e)
        }),
        jwerty.key("←", function(e) {
            return $$.navigation_to_section("prev", e)
        }),
        $("#section-the-app .users-by-industry .bar-section, #section-the-app .users-by-industry ul li").each(function() {
            var e, t;
            return t = $(this),
            e = t.parents("dd"),
            t.mouseenter(function(n) {
                return e.find(".bar-section.show").removeClass("show"),
                e.find("li.show").removeClass("show"),
                e.find('*[data-industry="' + t.attr("data-industry") + '"]').addClass("show")
            })
        }),
        $("#section-geography ul li a").each(function() {
            var e, t, n;
            return n = $(this),
            e = $(this).attr("data-country"),
            t = $("#section-geography .map"),
            n.mouseenter(function() {
                return t.find(".country.show").removeClass("show"),
                t.find(".country." + e).addClass("show")
            }),
            n.mouseleave(function() {
                return t.find(".country.show").removeClass("show")
            })
        })
    })
}
.call(this);
