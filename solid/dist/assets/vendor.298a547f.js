let e = h;
const n = {},
  t = { owned: null, cleanups: null, context: null, owner: null };
var l = null;
let r = null,
  o = null,
  s = null,
  u = null,
  i = 0;
function f(e, n, r) {
  a(
    (function (e, n, r, o = 1, s) {
      const u = {
        fn: e,
        state: o,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: n,
        owner: l,
        context: null,
        pure: r,
      };
      null === l || (l !== t && (l.owned ? l.owned.push(u) : (l.owned = [u])));
      return u;
    })(e, n, !1, 1),
  );
}
function c(e, t, l) {
  if (e.comparator && e.comparator(e.value, t)) return t;
  if (o) return e.pending === n && o.push(e), (e.pending = t), t;
  let r = !1;
  return (
    (e.value = t),
    e.observers &&
      e.observers.length &&
      d(() => {
        for (let n = 0; n < e.observers.length; n += 1) {
          const t = e.observers[n];
          r, t.pure ? s.push(t) : u.push(t), t.observers && !t.state && v(t), (t.state = 1);
        }
        if (s.length > 1e6) throw ((s = []), new Error());
      }, !1),
    t
  );
}
function a(e) {
  if (!e.fn) return;
  y(e);
  const n = l,
    t = r,
    o = i;
  (r = l = e),
    (function (e, n, t) {
      let l;
      try {
        l = e.fn(n);
      } catch (r) {
        b(r);
      }
      (!e.updatedAt || e.updatedAt <= t) &&
        (e.observers && e.observers.length ? c(e, l) : (e.value = l), (e.updatedAt = t));
    })(e, e.value, o),
    (r = t),
    (l = n);
}
function p(e) {
  if (1 !== e.state) return (e.state = 0);
  if (
    e.suspense &&
    (function (e) {
      let n,
        t = r;
      return (r = null), (n = e()), (r = t), n;
    })(e.suspense.inFallback)
  )
    return e.suspense.effects.push(e);
  const n = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < i); ) e.state && n.push(e);
  for (let t = n.length - 1; t >= 0; t--)
    if (1 === (e = n[t]).state) a(e);
    else if (2 === e.state) {
      const n = s;
      (s = null), g(e), (s = n);
    }
}
function d(t, l) {
  if (s) return t();
  let r = !1;
  l || (s = []), u ? (r = !0) : (u = []), i++;
  try {
    t();
  } catch (f) {
    b(f);
  } finally {
    !(function (t) {
      s && (h(s), (s = null));
      if (t) return;
      u.length
        ? (function (e) {
            if (o) return e();
            let t;
            const l = (o = []);
            try {
              t = e();
            } finally {
              o = null;
            }
            d(() => {
              for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                if (t.pending !== n) {
                  const e = t.pending;
                  (t.pending = n), c(t, e);
                }
              }
            }, !1);
          })(() => {
            e(u), (u = null);
          })
        : (u = null);
    })(r);
  }
}
function h(e) {
  for (let n = 0; n < e.length; n++) p(e[n]);
}
function g(e) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const t = e.sources[n];
    t.sources && (1 === t.state ? p(t) : 2 === t.state && g(t));
  }
}
function v(e) {
  for (let n = 0; n < e.observers.length; n += 1) {
    const t = e.observers[n];
    t.state || ((t.state = 2), t.pure ? s.push(t) : u.push(t), t.observers && v(t));
  }
}
function y(e) {
  let n;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(),
        t = e.sourceSlots.pop(),
        l = n.observers;
      if (l && l.length) {
        const e = l.pop(),
          r = n.observerSlots.pop();
        t < l.length && ((e.sourceSlots[r] = t), (l[t] = e), (n.observerSlots[t] = r));
      }
    }
  if (e.owned) {
    for (n = 0; n < e.owned.length; n++) y(e.owned[n]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (n = 0; n < e.cleanups.length; n++) e.cleanups[n]();
    e.cleanups = null;
  }
  (e.state = 0), (e.context = null);
}
function b(e) {
  throw e;
}
function w(e, n, t) {
  let l = t.length,
    r = n.length,
    o = l,
    s = 0,
    u = 0,
    i = n[r - 1].nextSibling,
    f = null;
  for (; s < r || u < o; )
    if (n[s] !== t[u]) {
      for (; n[r - 1] === t[o - 1]; ) r--, o--;
      if (r === s) {
        const n = o < l ? (u ? t[u - 1].nextSibling : t[o - u]) : i;
        for (; u < o; ) e.insertBefore(t[u++], n);
      } else if (o === u) for (; s < r; ) (f && f.has(n[s])) || e.removeChild(n[s]), s++;
      else if (n[s] === t[o - 1] && t[u] === n[r - 1]) {
        const l = n[--r].nextSibling;
        e.insertBefore(t[u++], n[s++].nextSibling), e.insertBefore(t[--o], l), (n[r] = t[o]);
      } else {
        if (!f) {
          f = new Map();
          let e = u;
          for (; e < o; ) f.set(t[e], e++);
        }
        const l = f.get(n[s]);
        if (null != l)
          if (u < l && l < o) {
            let i,
              c = s,
              a = 1;
            for (; ++c < r && c < o && null != (i = f.get(n[c])) && i === l + a; ) a++;
            if (a > l - u) {
              const r = n[s];
              for (; u < l; ) e.insertBefore(t[u++], r);
            } else e.replaceChild(t[u++], n[s++]);
          } else s++;
        else e.removeChild(n[s++]);
      }
    } else s++, u++;
}
function x(e, n, o) {
  let s;
  return (
    (function (e, n) {
      n && (l = n);
      const o = r,
        s = l,
        u = 0 === e.length ? t : { owned: null, cleanups: null, context: null, owner: s };
      let i;
      (l = u), (r = null);
      try {
        d(() => (i = e(() => y(u))), !0);
      } finally {
        (r = o), (l = s);
      }
    })(t => {
      (s = t),
        (function (e, n, t, l) {
          void 0 === t || l || (l = []);
          if ('function' != typeof n) return A(e, n, l, t);
          f(l => A(e, n(), l, t), l);
        })(n, e(), n.firstChild ? null : void 0, o);
    }),
    () => {
      s(), (n.textContent = '');
    }
  );
}
function A(e, n, t, l, r) {
  for (; 'function' == typeof t; ) t = t();
  if (n === t) return t;
  const o = typeof n,
    s = void 0 !== l;
  if (((e = (s && t[0] && t[0].parentNode) || e), 'string' === o || 'number' === o))
    if (('number' === o && (n = n.toString()), s)) {
      let r = t[0];
      r && 3 === r.nodeType ? (r.data = n) : (r = document.createTextNode(n)), (t = S(e, t, l, r));
    } else t = '' !== t && 'string' == typeof t ? (e.firstChild.data = n) : (e.textContent = n);
  else if (null == n || 'boolean' === o) t = S(e, t, l);
  else {
    if ('function' === o)
      return (
        f(() => {
          let r = n();
          for (; 'function' == typeof r; ) r = r();
          t = A(e, r, t, l);
        }),
        () => t
      );
    if (Array.isArray(n)) {
      const o = [];
      if (C(o, n, r)) return f(() => (t = A(e, o, t, l, !0))), () => t;
      if (0 === o.length) {
        if (((t = S(e, t, l)), s)) return t;
      } else
        Array.isArray(t)
          ? 0 === t.length
            ? m(e, o, l)
            : w(e, t, o)
          : null == t || '' === t
          ? m(e, o)
          : w(e, (s && t) || [e.firstChild], o);
      t = o;
    } else if (n instanceof Node) {
      if (Array.isArray(t)) {
        if (s) return (t = S(e, t, l, n));
        S(e, t, null, n);
      } else null != t && '' !== t && e.firstChild ? e.replaceChild(n, e.firstChild) : e.appendChild(n);
      t = n;
    }
  }
  return t;
}
function C(e, n, t) {
  let l = !1;
  for (let r = 0, o = n.length; r < o; r++) {
    let o,
      s = n[r];
    if (s instanceof Node) e.push(s);
    else if (null == s || !0 === s || !1 === s);
    else if (Array.isArray(s)) l = C(e, s) || l;
    else if ('string' == (o = typeof s)) e.push(document.createTextNode(s));
    else if ('function' === o)
      if (t) {
        for (; 'function' == typeof s; ) s = s();
        l = C(e, Array.isArray(s) ? s : [s]) || l;
      } else e.push(s), (l = !0);
    else e.push(document.createTextNode(s.toString()));
  }
  return l;
}
function m(e, n, t) {
  for (let l = 0, r = n.length; l < r; l++) e.insertBefore(n[l], t);
}
function S(e, n, t, l) {
  if (void 0 === t) return (e.textContent = '');
  const r = l || document.createTextNode('');
  if (n.length) {
    let l = !1;
    for (let o = n.length - 1; o >= 0; o--) {
      const s = n[o];
      if (r !== s) {
        const n = s.parentNode === e;
        l || o ? n && e.removeChild(s) : n ? e.replaceChild(r, s) : e.insertBefore(r, t);
      } else l = !0;
    }
  } else e.insertBefore(r, t);
  return [r];
}
export { x as r };
