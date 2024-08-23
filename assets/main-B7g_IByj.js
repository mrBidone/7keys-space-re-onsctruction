(function() {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
	new MutationObserver(n => {
		for (const r of n)
			if (r.type === "childList")
				for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && s(l)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function t(n) {
		const r = {};
		return n.integrity && (r.integrity = n.integrity), n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
	}

	function s(n) {
		if (n.ep) return;
		n.ep = !0;
		const r = t(n);
		fetch(n.href, r)
	}
})();

function ae(i) {
	return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object
}

function se(i, e) {
	i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach(t => {
		typeof i[t] > "u" ? i[t] = e[t] : ae(e[t]) && ae(i[t]) && Object.keys(e[t]).length > 0 && se(i[t], e[t])
	})
}
const ve = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: {
		blur() {},
		nodeName: ""
	},
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return {
			initEvent() {}
		}
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			}
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: ""
	}
};

function F() {
	const i = typeof document < "u" ? document : {};
	return se(i, ve), i
}
const Ie = {
	document: ve,
	navigator: {
		userAgent: ""
	},
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: ""
	},
	history: {
		replaceState() {},
		pushState() {},
		go() {},
		back() {}
	},
	CustomEvent: function() {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ""
			}
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(i) {
		return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0)
	},
	cancelAnimationFrame(i) {
		typeof setTimeout > "u" || clearTimeout(i)
	}
};

function z() {
	const i = typeof window < "u" ? window : {};
	return se(i, Ie), i
}

function Ce(i) {
	return i === void 0 && (i = ""), i.trim().split(" ").filter(e => !!e.trim())
}

function Le(i) {
	const e = i;
	Object.keys(e).forEach(t => {
		try {
			e[t] = null
		} catch {}
		try {
			delete e[t]
		} catch {}
	})
}

function ee(i, e) {
	return e === void 0 && (e = 0), setTimeout(i, e)
}

function $() {
	return Date.now()
}

function Oe(i) {
	const e = z();
	let t;
	return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t
}

function ze(i, e) {
	e === void 0 && (e = "x");
	const t = z();
	let s, n, r;
	const l = Oe(i);
	return t.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(a => a.replace(",", ".")).join(", ")), r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0
}

function _(i) {
	return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}

function Ae(i) {
	return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}

function O() {
	const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		e = ["__proto__", "constructor", "prototype"];
	for (let t = 1; t < arguments.length; t += 1) {
		const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
		if (s != null && !Ae(s)) {
			const n = Object.keys(Object(s)).filter(r => e.indexOf(r) < 0);
			for (let r = 0, l = n.length; r < l; r += 1) {
				const a = n[r],
					o = Object.getOwnPropertyDescriptor(s, a);
				o !== void 0 && o.enumerable && (_(i[a]) && _(s[a]) ? s[a].__swiper__ ? i[a] = s[a] : O(i[a], s[a]) : !_(i[a]) && _(s[a]) ? (i[a] = {}, s[a].__swiper__ ? i[a] = s[a] : O(i[a], s[a])) : i[a] = s[a])
			}
		}
	}
	return i
}

function N(i, e, t) {
	i.style.setProperty(e, t)
}

function we(i) {
	let {
		swiper: e,
		targetPosition: t,
		side: s
	} = i;
	const n = z(),
		r = -e.translate;
	let l = null,
		a;
	const o = e.params.speed;
	e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
	const d = t > r ? "next" : "prev",
		c = (p, u) => d === "next" && p >= u || d === "prev" && p <= u,
		f = () => {
			a = new Date().getTime(), l === null && (l = a);
			const p = Math.max(Math.min((a - l) / o, 1), 0),
				u = .5 - Math.cos(p * Math.PI) / 2;
			let m = r + u * (t - r);
			if (c(m, t) && (m = t), e.wrapperEl.scrollTo({
					[s]: m
				}), c(m, t)) {
				e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
					e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
						[s]: m
					})
				}), n.cancelAnimationFrame(e.cssModeFrameID);
				return
			}
			e.cssModeFrameID = n.requestAnimationFrame(f)
		};
	f()
}

function G(i, e) {
	return e === void 0 && (e = ""), [...i.children].filter(t => t.matches(e))
}

function R(i) {
	try {
		console.warn(i);
		return
	} catch {}
}

function te(i, e) {
	e === void 0 && (e = []);
	const t = document.createElement(i);
	return t.classList.add(...Array.isArray(e) ? e : Ce(e)), t
}

function Ge(i, e) {
	const t = [];
	for (; i.previousElementSibling;) {
		const s = i.previousElementSibling;
		e ? s.matches(e) && t.push(s) : t.push(s), i = s
	}
	return t
}

function ke(i, e) {
	const t = [];
	for (; i.nextElementSibling;) {
		const s = i.nextElementSibling;
		e ? s.matches(e) && t.push(s) : t.push(s), i = s
	}
	return t
}

function D(i, e) {
	return z().getComputedStyle(i, null).getPropertyValue(e)
}

function de(i) {
	let e = i,
		t;
	if (e) {
		for (t = 0;
			(e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
		return t
	}
}

function De(i, e) {
	const t = [];
	let s = i.parentElement;
	for (; s;) t.push(s), s = s.parentElement;
	return t
}

function ce(i, e, t) {
	const s = z();
	return i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
let W;

function Ve() {
	const i = z(),
		e = F();
	return {
		smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
		touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
	}
}

function Se() {
	return W || (W = Ve()), W
}
let j;

function Be(i) {
	let {
		userAgent: e
	} = i === void 0 ? {} : i;
	const t = Se(),
		s = z(),
		n = s.navigator.platform,
		r = e || s.navigator.userAgent,
		l = {
			ios: !1,
			android: !1
		},
		a = s.screen.width,
		o = s.screen.height,
		d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
	let c = r.match(/(iPad).*OS\s([\d_]+)/);
	const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
		p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		u = n === "Win32";
	let m = n === "MacIntel";
	const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
	return !c && m && t.touch && g.indexOf(`${a}x${o}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !u && (l.os = "android", l.android = !0), (c || p || f) && (l.os = "ios", l.ios = !0), l
}

function Te(i) {
	return i === void 0 && (i = {}), j || (j = Be(i)), j
}
let q;

function Fe() {
	const i = z(),
		e = Te();
	let t = !1;

	function s() {
		const a = i.navigator.userAgent.toLowerCase();
		return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
	}
	if (s()) {
		const a = String(i.navigator.userAgent);
		if (a.includes("Version/")) {
			const [o, d] = a.split("Version/")[1].split(" ")[0].split(".").map(c => Number(c));
			t = o < 16 || o === 16 && d < 2
		}
	}
	const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),
		r = s(),
		l = r || n && e.ios;
	return {
		isSafari: t || r,
		needPerspectiveFix: t,
		need3dFix: l,
		isWebView: n
	}
}

function _e() {
	return q || (q = Fe()), q
}

function Ne(i) {
	let {
		swiper: e,
		on: t,
		emit: s
	} = i;
	const n = z();
	let r = null,
		l = null;
	const a = () => {
			!e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
		},
		o = () => {
			!e || e.destroyed || !e.initialized || (r = new ResizeObserver(f => {
				l = n.requestAnimationFrame(() => {
					const {
						width: p,
						height: u
					} = e;
					let m = p,
						g = u;
					f.forEach(x => {
						let {
							contentBoxSize: v,
							contentRect: b,
							target: h
						} = x;
						h && h !== e.el || (m = b ? b.width : (v[0] || v).inlineSize, g = b ? b.height : (v[0] || v).blockSize)
					}), (m !== p || g !== u) && a()
				})
			}), r.observe(e.el))
		},
		d = () => {
			l && n.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
		},
		c = () => {
			!e || e.destroyed || !e.initialized || s("orientationchange")
		};
	t("init", () => {
		if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
			o();
			return
		}
		n.addEventListener("resize", a), n.addEventListener("orientationchange", c)
	}), t("destroy", () => {
		d(), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", c)
	})
}

function He(i) {
	let {
		swiper: e,
		extendParams: t,
		on: s,
		emit: n
	} = i;
	const r = [],
		l = z(),
		a = function(c, f) {
			f === void 0 && (f = {});
			const p = l.MutationObserver || l.WebkitMutationObserver,
				u = new p(m => {
					if (e.__preventObserver__) return;
					if (m.length === 1) {
						n("observerUpdate", m[0]);
						return
					}
					const g = function() {
						n("observerUpdate", m[0])
					};
					l.requestAnimationFrame ? l.requestAnimationFrame(g) : l.setTimeout(g, 0)
				});
			u.observe(c, {
				attributes: typeof f.attributes > "u" ? !0 : f.attributes,
				childList: typeof f.childList > "u" ? !0 : f.childList,
				characterData: typeof f.characterData > "u" ? !0 : f.characterData
			}), r.push(u)
		},
		o = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const c = De(e.hostEl);
					for (let f = 0; f < c.length; f += 1) a(c[f])
				}
				a(e.hostEl, {
					childList: e.params.observeSlideChildren
				}), a(e.wrapperEl, {
					attributes: !1
				})
			}
		},
		d = () => {
			r.forEach(c => {
				c.disconnect()
			}), r.splice(0, r.length)
		};
	t({
		observer: !1,
		observeParents: !1,
		observeSlideChildren: !1
	}), s("init", o), s("destroy", d)
}
var $e = {
	on(i, e, t) {
		const s = this;
		if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
		const n = t ? "unshift" : "push";
		return i.split(" ").forEach(r => {
			s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e)
		}), s
	},
	once(i, e, t) {
		const s = this;
		if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;

		function n() {
			s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
			for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++) l[a] = arguments[a];
			e.apply(s, l)
		}
		return n.__emitterProxy = e, s.on(i, n, t)
	},
	onAny(i, e) {
		const t = this;
		if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
		const s = e ? "unshift" : "push";
		return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
	},
	offAny(i) {
		const e = this;
		if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
		const t = e.eventsAnyListeners.indexOf(i);
		return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
	},
	off(i, e) {
		const t = this;
		return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s => {
			typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n, r) => {
				(n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1)
			})
		}), t
	},
	emit() {
		const i = this;
		if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
		let e, t, s;
		for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
		return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), s = i) : (e = r[0].events, t = r[0].data, s = r[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(o => {
			i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(d => {
				d.apply(s, [o, ...t])
			}), i.eventsListeners && i.eventsListeners[o] && i.eventsListeners[o].forEach(d => {
				d.apply(s, t)
			})
		}), i
	}
};

function Re() {
	const i = this;
	let e, t;
	const s = i.el;
	typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(D(s, "padding-left") || 0, 10) - parseInt(D(s, "padding-right") || 0, 10), t = t - parseInt(D(s, "padding-top") || 0, 10) - parseInt(D(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
		width: e,
		height: t,
		size: i.isHorizontal() ? e : t
	}))
}

function We() {
	const i = this;

	function e(w, E) {
		return parseFloat(w.getPropertyValue(i.getDirectionLabel(E)) || 0)
	}
	const t = i.params,
		{
			wrapperEl: s,
			slidesEl: n,
			size: r,
			rtlTranslate: l,
			wrongRTL: a
		} = i,
		o = i.virtual && t.virtual.enabled,
		d = o ? i.virtual.slides.length : i.slides.length,
		c = G(n, `.${i.params.slideClass}, swiper-slide`),
		f = o ? i.virtual.slides.length : c.length;
	let p = [];
	const u = [],
		m = [];
	let g = t.slidesOffsetBefore;
	typeof g == "function" && (g = t.slidesOffsetBefore.call(i));
	let x = t.slidesOffsetAfter;
	typeof x == "function" && (x = t.slidesOffsetAfter.call(i));
	const v = i.snapGrid.length,
		b = i.slidesGrid.length;
	let h = t.spaceBetween,
		S = -g,
		T = 0,
		M = 0;
	if (typeof r > "u") return;
	typeof h == "string" && h.indexOf("%") >= 0 ? h = parseFloat(h.replace("%", "")) / 100 * r : typeof h == "string" && (h = parseFloat(h)), i.virtualSize = -h, c.forEach(w => {
		l ? w.style.marginLeft = "" : w.style.marginRight = "", w.style.marginBottom = "", w.style.marginTop = ""
	}), t.centeredSlides && t.cssMode && (N(s, "--swiper-centered-offset-before", ""), N(s, "--swiper-centered-offset-after", ""));
	const V = t.grid && t.grid.rows > 1 && i.grid;
	V ? i.grid.initSlides(c) : i.grid && i.grid.unsetSlides();
	let C;
	const B = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(w => typeof t.breakpoints[w].slidesPerView < "u").length > 0;
	for (let w = 0; w < f; w += 1) {
		C = 0;
		let E;
		if (c[w] && (E = c[w]), V && i.grid.updateSlide(w, E, c), !(c[w] && D(E, "display") === "none")) {
			if (t.slidesPerView === "auto") {
				B && (c[w].style[i.getDirectionLabel("width")] = "");
				const P = getComputedStyle(E),
					y = E.style.transform,
					I = E.style.webkitTransform;
				if (y && (E.style.transform = "none"), I && (E.style.webkitTransform = "none"), t.roundLengths) C = i.isHorizontal() ? ce(E, "width") : ce(E, "height");
				else {
					const L = e(P, "width"),
						k = e(P, "padding-left"),
						Ee = e(P, "padding-right"),
						ne = e(P, "margin-left"),
						oe = e(P, "margin-right"),
						le = P.getPropertyValue("box-sizing");
					if (le && le === "border-box") C = L + ne + oe;
					else {
						const {
							clientWidth: Pe,
							offsetWidth: Me
						} = E;
						C = L + k + Ee + ne + oe + (Me - Pe)
					}
				}
				y && (E.style.transform = y), I && (E.style.webkitTransform = I), t.roundLengths && (C = Math.floor(C))
			} else C = (r - (t.slidesPerView - 1) * h) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), c[w] && (c[w].style[i.getDirectionLabel("width")] = `${C}px`);
			c[w] && (c[w].swiperSlideSize = C), m.push(C), t.centeredSlides ? (S = S + C / 2 + T / 2 + h, T === 0 && w !== 0 && (S = S - r / 2 - h), w === 0 && (S = S - r / 2 - h), Math.abs(S) < 1 / 1e3 && (S = 0), t.roundLengths && (S = Math.floor(S)), M % t.slidesPerGroup === 0 && p.push(S), u.push(S)) : (t.roundLengths && (S = Math.floor(S)), (M - Math.min(i.params.slidesPerGroupSkip, M)) % i.params.slidesPerGroup === 0 && p.push(S), u.push(S), S = S + C + h), i.virtualSize += C + h, T = C, M += 1
		}
	}
	if (i.virtualSize = Math.max(i.virtualSize, r) + x, l && a && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize+h}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize+h}px`), V && i.grid.updateWrapperSize(C, p), !t.centeredSlides) {
		const w = [];
		for (let E = 0; E < p.length; E += 1) {
			let P = p[E];
			t.roundLengths && (P = Math.floor(P)), p[E] <= i.virtualSize - r && w.push(P)
		}
		p = w, Math.floor(i.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(i.virtualSize - r)
	}
	if (o && t.loop) {
		const w = m[0] + h;
		if (t.slidesPerGroup > 1) {
			const E = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup),
				P = w * t.slidesPerGroup;
			for (let y = 0; y < E; y += 1) p.push(p[p.length - 1] + P)
		}
		for (let E = 0; E < i.virtual.slidesBefore + i.virtual.slidesAfter; E += 1) t.slidesPerGroup === 1 && p.push(p[p.length - 1] + w), u.push(u[u.length - 1] + w), i.virtualSize += w
	}
	if (p.length === 0 && (p = [0]), h !== 0) {
		const w = i.isHorizontal() && l ? "marginLeft" : i.getDirectionLabel("marginRight");
		c.filter((E, P) => !t.cssMode || t.loop ? !0 : P !== c.length - 1).forEach(E => {
			E.style[w] = `${h}px`
		})
	}
	if (t.centeredSlides && t.centeredSlidesBounds) {
		let w = 0;
		m.forEach(P => {
			w += P + (h || 0)
		}), w -= h;
		const E = w - r;
		p = p.map(P => P <= 0 ? -g : P > E ? E + x : P)
	}
	if (t.centerInsufficientSlides) {
		let w = 0;
		m.forEach(P => {
			w += P + (h || 0)
		}), w -= h;
		const E = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
		if (w + E < r) {
			const P = (r - w - E) / 2;
			p.forEach((y, I) => {
				p[I] = y - P
			}), u.forEach((y, I) => {
				u[I] = y + P
			})
		}
	}
	if (Object.assign(i, {
			slides: c,
			snapGrid: p,
			slidesGrid: u,
			slidesSizesGrid: m
		}), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
		N(s, "--swiper-centered-offset-before", `${-p[0]}px`), N(s, "--swiper-centered-offset-after", `${i.size/2-m[m.length-1]/2}px`);
		const w = -i.snapGrid[0],
			E = -i.slidesGrid[0];
		i.snapGrid = i.snapGrid.map(P => P + w), i.slidesGrid = i.slidesGrid.map(P => P + E)
	}
	if (f !== d && i.emit("slidesLengthChange"), p.length !== v && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), u.length !== b && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !o && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
		const w = `${t.containerModifierClass}backface-hidden`,
			E = i.el.classList.contains(w);
		f <= t.maxBackfaceHiddenSlides ? E || i.el.classList.add(w) : E && i.el.classList.remove(w)
	}
}

function je(i) {
	const e = this,
		t = [],
		s = e.virtual && e.params.virtual.enabled;
	let n = 0,
		r;
	typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
	const l = a => s ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
	if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
		if (e.params.centeredSlides)(e.visibleSlides || []).forEach(a => {
			t.push(a)
		});
		else
			for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
				const a = e.activeIndex + r;
				if (a > e.slides.length && !s) break;
				t.push(l(a))
			} else t.push(l(e.activeIndex));
	for (r = 0; r < t.length; r += 1)
		if (typeof t[r] < "u") {
			const a = t[r].offsetHeight;
			n = a > n ? a : n
		}(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function qe() {
	const i = this,
		e = i.slides,
		t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
	for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}
const fe = (i, e, t) => {
	e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t)
};

function Ye(i) {
	i === void 0 && (i = this && this.translate || 0);
	const e = this,
		t = e.params,
		{
			slides: s,
			rtlTranslate: n,
			snapGrid: r
		} = e;
	if (s.length === 0) return;
	typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
	let l = -i;
	n && (l = i), e.visibleSlidesIndexes = [], e.visibleSlides = [];
	let a = t.spaceBetween;
	typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
	for (let o = 0; o < s.length; o += 1) {
		const d = s[o];
		let c = d.swiperSlideOffset;
		t.cssMode && t.centeredSlides && (c -= s[0].swiperSlideOffset);
		const f = (l + (t.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + a),
			p = (l - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + a),
			u = -(l - c),
			m = u + e.slidesSizesGrid[o],
			g = u >= 0 && u <= e.size - e.slidesSizesGrid[o],
			x = u >= 0 && u < e.size - 1 || m > 1 && m <= e.size || u <= 0 && m >= e.size;
		x && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(o)), fe(d, x, t.slideVisibleClass), fe(d, g, t.slideFullyVisibleClass), d.progress = n ? -f : f, d.originalProgress = n ? -p : p
	}
}

function Xe(i) {
	const e = this;
	if (typeof i > "u") {
		const c = e.rtlTranslate ? -1 : 1;
		i = e && e.translate && e.translate * c || 0
	}
	const t = e.params,
		s = e.maxTranslate() - e.minTranslate();
	let {
		progress: n,
		isBeginning: r,
		isEnd: l,
		progressLoop: a
	} = e;
	const o = r,
		d = l;
	if (s === 0) n = 0, r = !0, l = !0;
	else {
		n = (i - e.minTranslate()) / s;
		const c = Math.abs(i - e.minTranslate()) < 1,
			f = Math.abs(i - e.maxTranslate()) < 1;
		r = c || n <= 0, l = f || n >= 1, c && (n = 0), f && (n = 1)
	}
	if (t.loop) {
		const c = e.getSlideIndexByData(0),
			f = e.getSlideIndexByData(e.slides.length - 1),
			p = e.slidesGrid[c],
			u = e.slidesGrid[f],
			m = e.slidesGrid[e.slidesGrid.length - 1],
			g = Math.abs(i);
		g >= p ? a = (g - p) / m : a = (g + m - u) / m, a > 1 && (a -= 1)
	}
	Object.assign(e, {
		progress: n,
		progressLoop: a,
		isBeginning: r,
		isEnd: l
	}), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), r && !o && e.emit("reachBeginning toEdge"), l && !d && e.emit("reachEnd toEdge"), (o && !r || d && !l) && e.emit("fromEdge"), e.emit("progress", n)
}
const Y = (i, e, t) => {
	e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t)
};

function Ke() {
	const i = this,
		{
			slides: e,
			params: t,
			slidesEl: s,
			activeIndex: n
		} = i,
		r = i.virtual && t.virtual.enabled,
		l = i.grid && t.grid && t.grid.rows > 1,
		a = f => G(s, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
	let o, d, c;
	if (r)
		if (t.loop) {
			let f = n - i.virtual.slidesBefore;
			f < 0 && (f = i.virtual.slides.length + f), f >= i.virtual.slides.length && (f -= i.virtual.slides.length), o = a(`[data-swiper-slide-index="${f}"]`)
		} else o = a(`[data-swiper-slide-index="${n}"]`);
	else l ? (o = e.filter(f => f.column === n)[0], c = e.filter(f => f.column === n + 1)[0], d = e.filter(f => f.column === n - 1)[0]) : o = e[n];
	o && (l || (c = ke(o, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c && (c = e[0]), d = Ge(o, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d === 0 && (d = e[e.length - 1]))), e.forEach(f => {
		Y(f, f === o, t.slideActiveClass), Y(f, f === c, t.slideNextClass), Y(f, f === d, t.slidePrevClass)
	}), i.emitSlidesClasses()
}
const H = (i, e) => {
		if (!i || i.destroyed || !i.params) return;
		const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`,
			s = e.closest(t());
		if (s) {
			let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
			!n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
				s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), n && n.remove())
			})), n && n.remove()
		}
	},
	X = (i, e) => {
		if (!i.slides[e]) return;
		const t = i.slides[e].querySelector('[loading="lazy"]');
		t && t.removeAttribute("loading")
	},
	ie = i => {
		if (!i || i.destroyed || !i.params) return;
		let e = i.params.lazyPreloadPrevNext;
		const t = i.slides.length;
		if (!t || !e || e < 0) return;
		e = Math.min(e, t);
		const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
			n = i.activeIndex;
		if (i.params.grid && i.params.grid.rows > 1) {
			const l = n,
				a = [l - e];
			a.push(...Array.from({
				length: e
			}).map((o, d) => l + s + d)), i.slides.forEach((o, d) => {
				a.includes(o.column) && X(i, d)
			});
			return
		}
		const r = n + s - 1;
		if (i.params.rewind || i.params.loop)
			for (let l = n - e; l <= r + e; l += 1) {
				const a = (l % t + t) % t;
				(a < n || a > r) && X(i, a)
			} else
				for (let l = Math.max(n - e, 0); l <= Math.min(r + e, t - 1); l += 1) l !== n && (l > r || l < n) && X(i, l)
	};

function Ue(i) {
	const {
		slidesGrid: e,
		params: t
	} = i, s = i.rtlTranslate ? i.translate : -i.translate;
	let n;
	for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
	return t.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n
}

function Je(i) {
	const e = this,
		t = e.rtlTranslate ? e.translate : -e.translate,
		{
			snapGrid: s,
			params: n,
			activeIndex: r,
			realIndex: l,
			snapIndex: a
		} = e;
	let o = i,
		d;
	const c = u => {
		let m = u - e.virtual.slidesBefore;
		return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m
	};
	if (typeof o > "u" && (o = Ue(e)), s.indexOf(t) >= 0) d = s.indexOf(t);
	else {
		const u = Math.min(n.slidesPerGroupSkip, o);
		d = u + Math.floor((o - u) / n.slidesPerGroup)
	}
	if (d >= s.length && (d = s.length - 1), o === r && !e.params.loop) {
		d !== a && (e.snapIndex = d, e.emit("snapIndexChange"));
		return
	}
	if (o === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
		e.realIndex = c(o);
		return
	}
	const f = e.grid && n.grid && n.grid.rows > 1;
	let p;
	if (e.virtual && n.virtual.enabled && n.loop) p = c(o);
	else if (f) {
		const u = e.slides.filter(g => g.column === o)[0];
		let m = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
		Number.isNaN(m) && (m = Math.max(e.slides.indexOf(u), 0)), p = Math.floor(m / n.grid.rows)
	} else if (e.slides[o]) {
		const u = e.slides[o].getAttribute("data-swiper-slide-index");
		u ? p = parseInt(u, 10) : p = o
	} else p = o;
	Object.assign(e, {
		previousSnapIndex: a,
		snapIndex: d,
		previousRealIndex: l,
		realIndex: p,
		previousIndex: r,
		activeIndex: o
	}), e.initialized && ie(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== p && e.emit("realIndexChange"), e.emit("slideChange"))
}

function Qe(i, e) {
	const t = this,
		s = t.params;
	let n = i.closest(`.${s.slideClass}, swiper-slide`);
	!n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(a => {
		!n && a.matches && a.matches(`.${s.slideClass}, swiper-slide`) && (n = a)
	});
	let r = !1,
		l;
	if (n) {
		for (let a = 0; a < t.slides.length; a += 1)
			if (t.slides[a] === n) {
				r = !0, l = a;
				break
			}
	}
	if (n && r) t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = l;
	else {
		t.clickedSlide = void 0, t.clickedIndex = void 0;
		return
	}
	s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Ze = {
	updateSize: Re,
	updateSlides: We,
	updateAutoHeight: je,
	updateSlidesOffset: qe,
	updateSlidesProgress: Ye,
	updateProgress: Xe,
	updateSlidesClasses: Ke,
	updateActiveIndex: Je,
	updateClickedSlide: Qe
};

function et(i) {
	i === void 0 && (i = this.isHorizontal() ? "x" : "y");
	const e = this,
		{
			params: t,
			rtlTranslate: s,
			translate: n,
			wrapperEl: r
		} = e;
	if (t.virtualTranslate) return s ? -n : n;
	if (t.cssMode) return n;
	let l = ze(r, i);
	return l += e.cssOverflowAdjustment(), s && (l = -l), l || 0
}

function tt(i, e) {
	const t = this,
		{
			rtlTranslate: s,
			params: n,
			wrapperEl: r,
			progress: l
		} = t;
	let a = 0,
		o = 0;
	const d = 0;
	t.isHorizontal() ? a = s ? -i : i : o = i, n.roundLengths && (a = Math.floor(a), o = Math.floor(o)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? a : o, n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -o : n.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : o -= t.cssOverflowAdjustment(), r.style.transform = `translate3d(${a}px, ${o}px, ${d}px)`);
	let c;
	const f = t.maxTranslate() - t.minTranslate();
	f === 0 ? c = 0 : c = (i - t.minTranslate()) / f, c !== l && t.updateProgress(i), t.emit("setTranslate", t.translate, e)
}

function it() {
	return -this.snapGrid[0]
}

function st() {
	return -this.snapGrid[this.snapGrid.length - 1]
}

function rt(i, e, t, s, n) {
	i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
	const r = this,
		{
			params: l,
			wrapperEl: a
		} = r;
	if (r.animating && l.preventInteractionOnTransition) return !1;
	const o = r.minTranslate(),
		d = r.maxTranslate();
	let c;
	if (s && i > o ? c = o : s && i < d ? c = d : c = i, r.updateProgress(c), l.cssMode) {
		const f = r.isHorizontal();
		if (e === 0) a[f ? "scrollLeft" : "scrollTop"] = -c;
		else {
			if (!r.support.smoothScroll) return we({
				swiper: r,
				targetPosition: -c,
				side: f ? "left" : "top"
			}), !0;
			a.scrollTo({
				[f ? "left" : "top"]: -c,
				behavior: "smooth"
			})
		}
		return !0
	}
	return e === 0 ? (r.setTransition(0), r.setTranslate(c), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(c), t && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(p) {
		!r || r.destroyed || p.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, t && r.emit("transitionEnd"))
	}), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var nt = {
	getTranslate: et,
	setTranslate: tt,
	minTranslate: it,
	maxTranslate: st,
	translateTo: rt
};

function ot(i, e) {
	const t = this;
	t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e)
}

function ye(i) {
	let {
		swiper: e,
		runCallbacks: t,
		direction: s,
		step: n
	} = i;
	const {
		activeIndex: r,
		previousIndex: l
	} = e;
	let a = s;
	if (a || (r > l ? a = "next" : r < l ? a = "prev" : a = "reset"), e.emit(`transition${n}`), t && r !== l) {
		if (a === "reset") {
			e.emit(`slideResetTransition${n}`);
			return
		}
		e.emit(`slideChangeTransition${n}`), a === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
	}
}

function lt(i, e) {
	i === void 0 && (i = !0);
	const t = this,
		{
			params: s
		} = t;
	s.cssMode || (s.autoHeight && t.updateAutoHeight(), ye({
		swiper: t,
		runCallbacks: i,
		direction: e,
		step: "Start"
	}))
}

function at(i, e) {
	i === void 0 && (i = !0);
	const t = this,
		{
			params: s
		} = t;
	t.animating = !1, !s.cssMode && (t.setTransition(0), ye({
		swiper: t,
		runCallbacks: i,
		direction: e,
		step: "End"
	}))
}
var dt = {
	setTransition: ot,
	transitionStart: lt,
	transitionEnd: at
};

function ct(i, e, t, s, n) {
	i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
	const r = this;
	let l = i;
	l < 0 && (l = 0);
	const {
		params: a,
		snapGrid: o,
		slidesGrid: d,
		previousIndex: c,
		activeIndex: f,
		rtlTranslate: p,
		wrapperEl: u,
		enabled: m
	} = r;
	if (!m && !s && !n || r.destroyed || r.animating && a.preventInteractionOnTransition) return !1;
	typeof e > "u" && (e = r.params.speed);
	const g = Math.min(r.params.slidesPerGroupSkip, l);
	let x = g + Math.floor((l - g) / r.params.slidesPerGroup);
	x >= o.length && (x = o.length - 1);
	const v = -o[x];
	if (a.normalizeSlideIndex)
		for (let h = 0; h < d.length; h += 1) {
			const S = -Math.floor(v * 100),
				T = Math.floor(d[h] * 100),
				M = Math.floor(d[h + 1] * 100);
			typeof d[h + 1] < "u" ? S >= T && S < M - (M - T) / 2 ? l = h : S >= T && S < M && (l = h + 1) : S >= T && (l = h)
		}
	if (r.initialized && l !== f && (!r.allowSlideNext && (p ? v > r.translate && v > r.minTranslate() : v < r.translate && v < r.minTranslate()) || !r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (f || 0) !== l)) return !1;
	l !== (c || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(v);
	let b;
	if (l > f ? b = "next" : l < f ? b = "prev" : b = "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(l), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), a.effect !== "slide" && r.setTranslate(v), b !== "reset" && (r.transitionStart(t, b), r.transitionEnd(t, b)), !1;
	if (a.cssMode) {
		const h = r.isHorizontal(),
			S = p ? v : -v;
		if (e === 0) {
			const T = r.virtual && r.params.virtual.enabled;
			T && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), T && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
				u[h ? "scrollLeft" : "scrollTop"] = S
			})) : u[h ? "scrollLeft" : "scrollTop"] = S, T && requestAnimationFrame(() => {
				r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
			})
		} else {
			if (!r.support.smoothScroll) return we({
				swiper: r,
				targetPosition: S,
				side: h ? "left" : "top"
			}), !0;
			u.scrollTo({
				[h ? "left" : "top"]: S,
				behavior: "smooth"
			})
		}
		return !0
	}
	return r.setTransition(e), r.setTranslate(v), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(t, b), e === 0 ? r.transitionEnd(t, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(S) {
		!r || r.destroyed || S.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, b))
	}), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function ft(i, e, t, s) {
	i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
	const n = this;
	if (n.destroyed) return;
	typeof e > "u" && (e = n.params.speed);
	const r = n.grid && n.params.grid && n.params.grid.rows > 1;
	let l = i;
	if (n.params.loop)
		if (n.virtual && n.params.virtual.enabled) l = l + n.virtual.slidesBefore;
		else {
			let a;
			if (r) {
				const p = l * n.params.grid.rows;
				a = n.slides.filter(u => u.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
			} else a = n.getSlideIndexByData(l);
			const o = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
				{
					centeredSlides: d
				} = n.params;
			let c = n.params.slidesPerView;
			c === "auto" ? c = n.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(n.params.slidesPerView, 10)), d && c % 2 === 0 && (c = c + 1));
			let f = o - a < c;
			if (d && (f = f || a < Math.ceil(c / 2)), s && d && n.params.slidesPerView !== "auto" && !r && (f = !1), f) {
				const p = d ? a < n.activeIndex ? "prev" : "next" : a - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
				n.loopFix({
					direction: p,
					slideTo: !0,
					activeSlideIndex: p === "next" ? a + 1 : a - o + 1,
					slideRealIndex: p === "next" ? n.realIndex : void 0
				})
			}
			if (r) {
				const p = l * n.params.grid.rows;
				l = n.slides.filter(u => u.getAttribute("data-swiper-slide-index") * 1 === p)[0].column
			} else l = n.getSlideIndexByData(l)
		}
	return requestAnimationFrame(() => {
		n.slideTo(l, e, t, s)
	}), n
}

function ut(i, e, t) {
	e === void 0 && (e = !0);
	const s = this,
		{
			enabled: n,
			params: r,
			animating: l
		} = s;
	if (!n || s.destroyed) return s;
	typeof i > "u" && (i = s.params.speed);
	let a = r.slidesPerGroup;
	r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
	const o = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
		d = s.virtual && r.virtual.enabled;
	if (r.loop) {
		if (l && !d && r.loopPreventsSliding) return !1;
		if (s.loopFix({
				direction: "next"
			}), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
			s.slideTo(s.activeIndex + o, i, e, t)
		}), !0
	}
	return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + o, i, e, t)
}

function pt(i, e, t) {
	e === void 0 && (e = !0);
	const s = this,
		{
			params: n,
			snapGrid: r,
			slidesGrid: l,
			rtlTranslate: a,
			enabled: o,
			animating: d
		} = s;
	if (!o || s.destroyed) return s;
	typeof i > "u" && (i = s.params.speed);
	const c = s.virtual && n.virtual.enabled;
	if (n.loop) {
		if (d && !c && n.loopPreventsSliding) return !1;
		s.loopFix({
			direction: "prev"
		}), s._clientLeft = s.wrapperEl.clientLeft
	}
	const f = a ? s.translate : -s.translate;

	function p(v) {
		return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v)
	}
	const u = p(f),
		m = r.map(v => p(v));
	let g = r[m.indexOf(u) - 1];
	if (typeof g > "u" && n.cssMode) {
		let v;
		r.forEach((b, h) => {
			u >= b && (v = h)
		}), typeof v < "u" && (g = r[v > 0 ? v - 1 : v])
	}
	let x = 0;
	if (typeof g < "u" && (x = l.indexOf(g), x < 0 && (x = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (x = x - s.slidesPerViewDynamic("previous", !0) + 1, x = Math.max(x, 0))), n.rewind && s.isBeginning) {
		const v = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
		return s.slideTo(v, i, e, t)
	} else if (n.loop && s.activeIndex === 0 && n.cssMode) return requestAnimationFrame(() => {
		s.slideTo(x, i, e, t)
	}), !0;
	return s.slideTo(x, i, e, t)
}

function mt(i, e, t) {
	e === void 0 && (e = !0);
	const s = this;
	if (!s.destroyed) return typeof i > "u" && (i = s.params.speed), s.slideTo(s.activeIndex, i, e, t)
}

function ht(i, e, t, s) {
	e === void 0 && (e = !0), s === void 0 && (s = .5);
	const n = this;
	if (n.destroyed) return;
	typeof i > "u" && (i = n.params.speed);
	let r = n.activeIndex;
	const l = Math.min(n.params.slidesPerGroupSkip, r),
		a = l + Math.floor((r - l) / n.params.slidesPerGroup),
		o = n.rtlTranslate ? n.translate : -n.translate;
	if (o >= n.snapGrid[a]) {
		const d = n.snapGrid[a],
			c = n.snapGrid[a + 1];
		o - d > (c - d) * s && (r += n.params.slidesPerGroup)
	} else {
		const d = n.snapGrid[a - 1],
			c = n.snapGrid[a];
		o - d <= (c - d) * s && (r -= n.params.slidesPerGroup)
	}
	return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, i, e, t)
}

function gt() {
	const i = this;
	if (i.destroyed) return;
	const {
		params: e,
		slidesEl: t
	} = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
	let n = i.clickedIndex,
		r;
	const l = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
	if (e.loop) {
		if (i.animating) return;
		r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), n = i.getSlideIndex(G(t, `${l}[data-swiper-slide-index="${r}"]`)[0]), ee(() => {
			i.slideTo(n)
		})) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(), n = i.getSlideIndex(G(t, `${l}[data-swiper-slide-index="${r}"]`)[0]), ee(() => {
			i.slideTo(n)
		})) : i.slideTo(n)
	} else i.slideTo(n)
}
var vt = {
	slideTo: ct,
	slideToLoop: ft,
	slideNext: ut,
	slidePrev: pt,
	slideReset: mt,
	slideToClosest: ht,
	slideToClickedSlide: gt
};

function wt(i) {
	const e = this,
		{
			params: t,
			slidesEl: s
		} = e;
	if (!t.loop || e.virtual && e.params.virtual.enabled) return;
	const n = () => {
			G(s, `.${t.slideClass}, swiper-slide`).forEach((f, p) => {
				f.setAttribute("data-swiper-slide-index", p)
			})
		},
		r = e.grid && t.grid && t.grid.rows > 1,
		l = t.slidesPerGroup * (r ? t.grid.rows : 1),
		a = e.slides.length % l !== 0,
		o = r && e.slides.length % t.grid.rows !== 0,
		d = c => {
			for (let f = 0; f < c; f += 1) {
				const p = e.isElement ? te("swiper-slide", [t.slideBlankClass]) : te("div", [t.slideClass, t.slideBlankClass]);
				e.slidesEl.append(p)
			}
		};
	if (a) {
		if (t.loopAddBlankSlides) {
			const c = l - e.slides.length % l;
			d(c), e.recalcSlides(), e.updateSlides()
		} else R("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
		n()
	} else if (o) {
		if (t.loopAddBlankSlides) {
			const c = t.grid.rows - e.slides.length % t.grid.rows;
			d(c), e.recalcSlides(), e.updateSlides()
		} else R("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
		n()
	} else n();
	e.loopFix({
		slideRealIndex: i,
		direction: t.centeredSlides ? void 0 : "next"
	})
}

function St(i) {
	let {
		slideRealIndex: e,
		slideTo: t = !0,
		direction: s,
		setTranslate: n,
		activeSlideIndex: r,
		byController: l,
		byMousewheel: a
	} = i === void 0 ? {} : i;
	const o = this;
	if (!o.params.loop) return;
	o.emit("beforeLoopFix");
	const {
		slides: d,
		allowSlidePrev: c,
		allowSlideNext: f,
		slidesEl: p,
		params: u
	} = o, {
		centeredSlides: m
	} = u;
	if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && u.virtual.enabled) {
		t && (!u.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : u.centeredSlides && o.snapIndex < u.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = f, o.emit("loopFix");
		return
	}
	let g = u.slidesPerView;
	g === "auto" ? g = o.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(u.slidesPerView, 10)), m && g % 2 === 0 && (g = g + 1));
	const x = u.slidesPerGroupAuto ? g : u.slidesPerGroup;
	let v = x;
	v % x !== 0 && (v += x - v % x), v += u.loopAdditionalSlides, o.loopedSlides = v;
	const b = o.grid && u.grid && u.grid.rows > 1;
	d.length < g + v ? R("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && u.grid.fill === "row" && R("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
	const h = [],
		S = [];
	let T = o.activeIndex;
	typeof r > "u" ? r = o.getSlideIndex(d.filter(y => y.classList.contains(u.slideActiveClass))[0]) : T = r;
	const M = s === "next" || !s,
		V = s === "prev" || !s;
	let C = 0,
		B = 0;
	const w = b ? Math.ceil(d.length / u.grid.rows) : d.length,
		P = (b ? d[r].column : r) + (m && typeof n > "u" ? -g / 2 + .5 : 0);
	if (P < v) {
		C = Math.max(v - P, x);
		for (let y = 0; y < v - P; y += 1) {
			const I = y - Math.floor(y / w) * w;
			if (b) {
				const L = w - I - 1;
				for (let k = d.length - 1; k >= 0; k -= 1) d[k].column === L && h.push(k)
			} else h.push(w - I - 1)
		}
	} else if (P + g > w - v) {
		B = Math.max(P - (w - v * 2), x);
		for (let y = 0; y < B; y += 1) {
			const I = y - Math.floor(y / w) * w;
			b ? d.forEach((L, k) => {
				L.column === I && S.push(k)
			}) : S.push(I)
		}
	}
	if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
			o.__preventObserver__ = !1
		}), V && h.forEach(y => {
			d[y].swiperLoopMoveDOM = !0, p.prepend(d[y]), d[y].swiperLoopMoveDOM = !1
		}), M && S.forEach(y => {
			d[y].swiperLoopMoveDOM = !0, p.append(d[y]), d[y].swiperLoopMoveDOM = !1
		}), o.recalcSlides(), u.slidesPerView === "auto" ? o.updateSlides() : b && (h.length > 0 && V || S.length > 0 && M) && o.slides.forEach((y, I) => {
			o.grid.updateSlide(I, y, o.slides)
		}), u.watchSlidesProgress && o.updateSlidesOffset(), t) {
		if (h.length > 0 && V) {
			if (typeof e > "u") {
				const y = o.slidesGrid[T],
					L = o.slidesGrid[T + C] - y;
				a ? o.setTranslate(o.translate - L) : (o.slideTo(T + Math.ceil(C), 0, !1, !0), n && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - L, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - L))
			} else if (n) {
				const y = b ? h.length / u.grid.rows : h.length;
				o.slideTo(o.activeIndex + y, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
			}
		} else if (S.length > 0 && M)
			if (typeof e > "u") {
				const y = o.slidesGrid[T],
					L = o.slidesGrid[T - B] - y;
				a ? o.setTranslate(o.translate - L) : (o.slideTo(T - B, 0, !1, !0), n && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - L, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - L))
			} else {
				const y = b ? S.length / u.grid.rows : S.length;
				o.slideTo(o.activeIndex - y, 0, !1, !0)
			}
	}
	if (o.allowSlidePrev = c, o.allowSlideNext = f, o.controller && o.controller.control && !l) {
		const y = {
			slideRealIndex: e,
			direction: s,
			setTranslate: n,
			activeSlideIndex: r,
			byController: !0
		};
		Array.isArray(o.controller.control) ? o.controller.control.forEach(I => {
			!I.destroyed && I.params.loop && I.loopFix({ ...y,
				slideTo: I.params.slidesPerView === u.slidesPerView ? t : !1
			})
		}) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({ ...y,
			slideTo: o.controller.control.params.slidesPerView === u.slidesPerView ? t : !1
		})
	}
	o.emit("loopFix")
}

function Tt() {
	const i = this,
		{
			params: e,
			slidesEl: t
		} = i;
	if (!e.loop || i.virtual && i.params.virtual.enabled) return;
	i.recalcSlides();
	const s = [];
	i.slides.forEach(n => {
		const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
		s[r] = n
	}), i.slides.forEach(n => {
		n.removeAttribute("data-swiper-slide-index")
	}), s.forEach(n => {
		t.append(n)
	}), i.recalcSlides(), i.slideTo(i.realIndex, 0)
}
var yt = {
	loopCreate: wt,
	loopFix: St,
	loopDestroy: Tt
};

function xt(i) {
	const e = this;
	if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
	const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
	e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
		e.__preventObserver__ = !1
	})
}

function bt() {
	const i = this;
	i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
		i.__preventObserver__ = !1
	}))
}
var Et = {
	setGrabCursor: xt,
	unsetGrabCursor: bt
};

function Pt(i, e) {
	e === void 0 && (e = this);

	function t(s) {
		if (!s || s === F() || s === z()) return null;
		s.assignedSlot && (s = s.assignedSlot);
		const n = s.closest(i);
		return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
	}
	return t(e)
}

function ue(i, e, t) {
	const s = z(),
		{
			params: n
		} = i,
		r = n.edgeSwipeDetection,
		l = n.edgeSwipeThreshold;
	return r && (t <= l || t >= s.innerWidth - l) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function Mt(i) {
	const e = this,
		t = F();
	let s = i;
	s.originalEvent && (s = s.originalEvent);
	const n = e.touchEventsData;
	if (s.type === "pointerdown") {
		if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
		n.pointerId = s.pointerId
	} else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
	if (s.type === "touchstart") {
		ue(e, s, s.targetTouches[0].pageX);
		return
	}
	const {
		params: r,
		touches: l,
		enabled: a
	} = e;
	if (!a || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
	!e.animating && r.cssMode && r.loop && e.loopFix();
	let o = s.target;
	if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(o) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
	const d = !!r.noSwipingClass && r.noSwipingClass !== "",
		c = s.composedPath ? s.composedPath() : s.path;
	d && s.target && s.target.shadowRoot && c && (o = c[0]);
	const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
		p = !!(s.target && s.target.shadowRoot);
	if (r.noSwiping && (p ? Pt(f, o) : o.closest(f))) {
		e.allowClick = !0;
		return
	}
	if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
	l.currentX = s.pageX, l.currentY = s.pageY;
	const u = l.currentX,
		m = l.currentY;
	if (!ue(e, s, u)) return;
	Object.assign(n, {
		isTouched: !0,
		isMoved: !1,
		allowTouchCallbacks: !0,
		isScrolling: void 0,
		startMoving: void 0
	}), l.startX = u, l.startY = m, n.touchStartTime = $(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
	let g = !0;
	o.matches(n.focusableElements) && (g = !1, o.nodeName === "SELECT" && (n.isTouched = !1)), t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== o && t.activeElement.blur();
	const x = g && e.allowTouchMove && r.touchStartPreventDefault;
	(r.touchStartForcePreventDefault || x) && !o.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s)
}

function It(i) {
	const e = F(),
		t = this,
		s = t.touchEventsData,
		{
			params: n,
			touches: r,
			rtlTranslate: l,
			enabled: a
		} = t;
	if (!a || !n.simulateTouch && i.pointerType === "mouse") return;
	let o = i;
	if (o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (s.touchId !== null || o.pointerId !== s.pointerId)) return;
	let d;
	if (o.type === "touchmove") {
		if (d = [...o.changedTouches].filter(M => M.identifier === s.touchId)[0], !d || d.identifier !== s.touchId) return
	} else d = o;
	if (!s.isTouched) {
		s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o);
		return
	}
	const c = d.pageX,
		f = d.pageY;
	if (o.preventedByNestedSwiper) {
		r.startX = c, r.startY = f;
		return
	}
	if (!t.allowTouchMove) {
		o.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(r, {
			startX: c,
			startY: f,
			currentX: c,
			currentY: f
		}), s.touchStartTime = $());
		return
	}
	if (n.touchReleaseOnEdges && !n.loop) {
		if (t.isVertical()) {
			if (f < r.startY && t.translate <= t.maxTranslate() || f > r.startY && t.translate >= t.minTranslate()) {
				s.isTouched = !1, s.isMoved = !1;
				return
			}
		} else if (c < r.startX && t.translate <= t.maxTranslate() || c > r.startX && t.translate >= t.minTranslate()) return
	}
	if (e.activeElement && o.target === e.activeElement && o.target.matches(s.focusableElements)) {
		s.isMoved = !0, t.allowClick = !1;
		return
	}
	s.allowTouchCallbacks && t.emit("touchMove", o), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = c, r.currentY = f;
	const p = r.currentX - r.startX,
		u = r.currentY - r.startY;
	if (t.params.threshold && Math.sqrt(p ** 2 + u ** 2) < t.params.threshold) return;
	if (typeof s.isScrolling > "u") {
		let M;
		t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + u * u >= 25 && (M = Math.atan2(Math.abs(u), Math.abs(p)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? M > n.touchAngle : 90 - M > n.touchAngle)
	}
	if (s.isScrolling && t.emit("touchMoveOpposite", o), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || o.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
		s.isTouched = !1;
		return
	}
	if (!s.startMoving) return;
	t.allowClick = !1, !n.cssMode && o.cancelable && o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation();
	let m = t.isHorizontal() ? p : u,
		g = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
	n.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), r.diff = m, m *= n.touchRatio, l && (m = -m, g = -g);
	const x = t.touchesDirection;
	t.swipeDirection = m > 0 ? "prev" : "next", t.touchesDirection = g > 0 ? "prev" : "next";
	const v = t.params.loop && !n.cssMode,
		b = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
	if (!s.isMoved) {
		if (v && b && t.loopFix({
				direction: t.swipeDirection
			}), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
			const M = new window.CustomEvent("transitionend", {
				bubbles: !0,
				cancelable: !0,
				detail: {
					bySwiperTouchMove: !0
				}
			});
			t.wrapperEl.dispatchEvent(M)
		}
		s.allowMomentumBounce = !1, n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", o)
	}
	let h;
	if (new Date().getTime(), s.isMoved && s.allowThresholdMove && x !== t.touchesDirection && v && b && Math.abs(m) >= 1) {
		Object.assign(r, {
			startX: c,
			startY: f,
			currentX: c,
			currentY: f,
			startTranslate: s.currentTranslate
		}), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
		return
	}
	t.emit("sliderMove", o), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
	let S = !0,
		T = n.resistanceRatio;
	if (n.touchReleaseOnEdges && (T = 0), m > 0 ? (v && b && !h && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
			direction: "prev",
			setTranslate: !0,
			activeSlideIndex: 0
		}), s.currentTranslate > t.minTranslate() && (S = !1, n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** T))) : m < 0 && (v && b && !h && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
			direction: "next",
			setTranslate: !0,
			activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
		}), s.currentTranslate < t.maxTranslate() && (S = !1, n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** T))), S && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
		if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
			if (!s.allowThresholdMove) {
				s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
				return
			}
		} else {
			s.currentTranslate = s.startTranslate;
			return
		}!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
}

function Ct(i) {
	const e = this,
		t = e.touchEventsData;
	let s = i;
	s.originalEvent && (s = s.originalEvent);
	let n;
	if (s.type === "touchend" || s.type === "touchcancel") {
		if (n = [...s.changedTouches].filter(T => T.identifier === t.touchId)[0], !n || n.identifier !== t.touchId) return
	} else {
		if (t.touchId !== null || s.pointerId !== t.pointerId) return;
		n = s
	}
	if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))) return;
	t.pointerId = null, t.touchId = null;
	const {
		params: l,
		touches: a,
		rtlTranslate: o,
		slidesGrid: d,
		enabled: c
	} = e;
	if (!c || !l.simulateTouch && s.pointerType === "mouse") return;
	if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
		t.isMoved && l.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
		return
	}
	l.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
	const f = $(),
		p = f - t.touchStartTime;
	if (e.allowClick) {
		const T = s.path || s.composedPath && s.composedPath();
		e.updateClickedSlide(T && T[0] || s.target, T), e.emit("tap click", s), p < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
	}
	if (t.lastClickTime = $(), ee(() => {
			e.destroyed || (e.allowClick = !0)
		}), !t.isTouched || !t.isMoved || !e.swipeDirection || a.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
		t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
		return
	}
	t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
	let u;
	if (l.followFinger ? u = o ? e.translate : -e.translate : u = -t.currentTranslate, l.cssMode) return;
	if (l.freeMode && l.freeMode.enabled) {
		e.freeMode.onTouchEnd({
			currentPos: u
		});
		return
	}
	const m = u >= -e.maxTranslate() && !e.params.loop;
	let g = 0,
		x = e.slidesSizesGrid[0];
	for (let T = 0; T < d.length; T += T < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
		const M = T < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
		typeof d[T + M] < "u" ? (m || u >= d[T] && u < d[T + M]) && (g = T, x = d[T + M] - d[T]) : (m || u >= d[T]) && (g = T, x = d[d.length - 1] - d[d.length - 2])
	}
	let v = null,
		b = null;
	l.rewind && (e.isBeginning ? b = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
	const h = (u - d[g]) / x,
		S = g < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
	if (p > l.longSwipesMs) {
		if (!l.longSwipes) {
			e.slideTo(e.activeIndex);
			return
		}
		e.swipeDirection === "next" && (h >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? v : g + S) : e.slideTo(g)), e.swipeDirection === "prev" && (h > 1 - l.longSwipesRatio ? e.slideTo(g + S) : b !== null && h < 0 && Math.abs(h) > l.longSwipesRatio ? e.slideTo(b) : e.slideTo(g))
	} else {
		if (!l.shortSwipes) {
			e.slideTo(e.activeIndex);
			return
		}
		e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(g + S) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : g + S), e.swipeDirection === "prev" && e.slideTo(b !== null ? b : g))
	}
}

function pe() {
	const i = this,
		{
			params: e,
			el: t
		} = i;
	if (t && t.offsetWidth === 0) return;
	e.breakpoints && i.setBreakpoint();
	const {
		allowSlideNext: s,
		allowSlidePrev: n,
		snapGrid: r
	} = i, l = i.virtual && i.params.virtual.enabled;
	i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
	const a = l && e.loop;
	(e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !a ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !l ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
		i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
	}, 500)), i.allowSlidePrev = n, i.allowSlideNext = s, i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}

function Lt(i) {
	const e = this;
	e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())))
}

function Ot() {
	const i = this,
		{
			wrapperEl: e,
			rtlTranslate: t,
			enabled: s
		} = i;
	if (!s) return;
	i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
	let n;
	const r = i.maxTranslate() - i.minTranslate();
	r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r, n !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1)
}

function zt(i) {
	const e = this;
	H(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function At() {
	const i = this;
	i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const xe = (i, e) => {
	const t = F(),
		{
			params: s,
			el: n,
			wrapperEl: r,
			device: l
		} = i,
		a = !!s.nested,
		o = e === "on" ? "addEventListener" : "removeEventListener",
		d = e;
	!n || typeof n == "string" || (t[o]("touchstart", i.onDocumentTouchStart, {
		passive: !1,
		capture: a
	}), n[o]("touchstart", i.onTouchStart, {
		passive: !1
	}), n[o]("pointerdown", i.onTouchStart, {
		passive: !1
	}), t[o]("touchmove", i.onTouchMove, {
		passive: !1,
		capture: a
	}), t[o]("pointermove", i.onTouchMove, {
		passive: !1,
		capture: a
	}), t[o]("touchend", i.onTouchEnd, {
		passive: !0
	}), t[o]("pointerup", i.onTouchEnd, {
		passive: !0
	}), t[o]("pointercancel", i.onTouchEnd, {
		passive: !0
	}), t[o]("touchcancel", i.onTouchEnd, {
		passive: !0
	}), t[o]("pointerout", i.onTouchEnd, {
		passive: !0
	}), t[o]("pointerleave", i.onTouchEnd, {
		passive: !0
	}), t[o]("contextmenu", i.onTouchEnd, {
		passive: !0
	}), (s.preventClicks || s.preventClicksPropagation) && n[o]("click", i.onClick, !0), s.cssMode && r[o]("scroll", i.onScroll), s.updateOnWindowResize ? i[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pe, !0) : i[d]("observerUpdate", pe, !0), n[o]("load", i.onLoad, {
		capture: !0
	}))
};

function Gt() {
	const i = this,
		{
			params: e
		} = i;
	i.onTouchStart = Mt.bind(i), i.onTouchMove = It.bind(i), i.onTouchEnd = Ct.bind(i), i.onDocumentTouchStart = At.bind(i), e.cssMode && (i.onScroll = Ot.bind(i)), i.onClick = Lt.bind(i), i.onLoad = zt.bind(i), xe(i, "on")
}

function kt() {
	xe(this, "off")
}
var Dt = {
	attachEvents: Gt,
	detachEvents: kt
};
const me = (i, e) => i.grid && e.grid && e.grid.rows > 1;

function Vt() {
	const i = this,
		{
			realIndex: e,
			initialized: t,
			params: s,
			el: n
		} = i,
		r = s.breakpoints;
	if (!r || r && Object.keys(r).length === 0) return;
	const l = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
	if (!l || i.currentBreakpoint === l) return;
	const o = (l in r ? r[l] : void 0) || i.originalParams,
		d = me(i, s),
		c = me(i, o),
		f = i.params.grabCursor,
		p = o.grabCursor,
		u = s.enabled;
	d && !c ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !d && c && (n.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), f && !p ? i.unsetGrabCursor() : !f && p && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(h => {
		if (typeof o[h] > "u") return;
		const S = s[h] && s[h].enabled,
			T = o[h] && o[h].enabled;
		S && !T && i[h].disable(), !S && T && i[h].enable()
	});
	const m = o.direction && o.direction !== s.direction,
		g = s.loop && (o.slidesPerView !== s.slidesPerView || m),
		x = s.loop;
	m && t && i.changeDirection(), O(i.params, o);
	const v = i.params.enabled,
		b = i.params.loop;
	Object.assign(i, {
		allowTouchMove: i.params.allowTouchMove,
		allowSlideNext: i.params.allowSlideNext,
		allowSlidePrev: i.params.allowSlidePrev
	}), u && !v ? i.disable() : !u && v && i.enable(), i.currentBreakpoint = l, i.emit("_beforeBreakpoint", o), t && (g ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !x && b ? (i.loopCreate(e), i.updateSlides()) : x && !b && i.loopDestroy()), i.emit("breakpoint", o)
}

function Bt(i, e, t) {
	if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
	let s = !1;
	const n = z(),
		r = e === "window" ? n.innerHeight : t.clientHeight,
		l = Object.keys(i).map(a => {
			if (typeof a == "string" && a.indexOf("@") === 0) {
				const o = parseFloat(a.substr(1));
				return {
					value: r * o,
					point: a
				}
			}
			return {
				value: a,
				point: a
			}
		});
	l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
	for (let a = 0; a < l.length; a += 1) {
		const {
			point: o,
			value: d
		} = l[a];
		e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= t.clientWidth && (s = o)
	}
	return s || "max"
}
var Ft = {
	setBreakpoint: Vt,
	getBreakpoint: Bt
};

function _t(i, e) {
	const t = [];
	return i.forEach(s => {
		typeof s == "object" ? Object.keys(s).forEach(n => {
			s[n] && t.push(e + n)
		}) : typeof s == "string" && t.push(e + s)
	}), t
}

function Nt() {
	const i = this,
		{
			classNames: e,
			params: t,
			rtl: s,
			el: n,
			device: r
		} = i,
		l = _t(["initialized", t.direction, {
			"free-mode": i.params.freeMode && t.freeMode.enabled
		}, {
			autoheight: t.autoHeight
		}, {
			rtl: s
		}, {
			grid: t.grid && t.grid.rows > 1
		}, {
			"grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
		}, {
			android: r.android
		}, {
			ios: r.ios
		}, {
			"css-mode": t.cssMode
		}, {
			centered: t.cssMode && t.centeredSlides
		}, {
			"watch-progress": t.watchSlidesProgress
		}], t.containerModifierClass);
	e.push(...l), n.classList.add(...e), i.emitContainerClasses()
}

function Ht() {
	const i = this,
		{
			el: e,
			classNames: t
		} = i;
	!e || typeof e == "string" || (e.classList.remove(...t), i.emitContainerClasses())
}
var $t = {
	addClasses: Nt,
	removeClasses: Ht
};

function Rt() {
	const i = this,
		{
			isLocked: e,
			params: t
		} = i,
		{
			slidesOffsetBefore: s
		} = t;
	if (s) {
		const n = i.slides.length - 1,
			r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
		i.isLocked = i.size > r
	} else i.isLocked = i.snapGrid.length === 1;
	t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var Wt = {
		checkOverflow: Rt
	},
	he = {
		init: !0,
		direction: "horizontal",
		oneWayMovement: !1,
		swiperElementNodeName: "SWIPER-CONTAINER",
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: "swiper",
		enabled: !0,
		focusableElements: "input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: .85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-blank",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideFullyVisibleClass: "swiper-slide-fully-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1
	};

function jt(i, e) {
	return function(s) {
		s === void 0 && (s = {});
		const n = Object.keys(s)[0],
			r = s[n];
		if (typeof r != "object" || r === null) {
			O(e, s);
			return
		}
		if (i[n] === !0 && (i[n] = {
				enabled: !0
			}), n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0), !(n in i && "enabled" in r)) {
			O(e, s);
			return
		}
		typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0), i[n] || (i[n] = {
			enabled: !1
		}), O(e, s)
	}
}
const K = {
		eventsEmitter: $e,
		update: Ze,
		translate: nt,
		transition: dt,
		slide: vt,
		loop: yt,
		grabCursor: Et,
		events: Dt,
		breakpoints: Ft,
		checkOverflow: Wt,
		classes: $t
	},
	U = {};
class A {
	constructor() {
		let e, t;
		for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
		n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e, t] = n, t || (t = {}), t = O({}, t), e && !t.el && (t.el = e);
		const l = F();
		if (t.el && typeof t.el == "string" && l.querySelectorAll(t.el).length > 1) {
			const c = [];
			return l.querySelectorAll(t.el).forEach(f => {
				const p = O({}, t, {
					el: f
				});
				c.push(new A(p))
			}), c
		}
		const a = this;
		a.__swiper__ = !0, a.support = Se(), a.device = Te({
			userAgent: t.userAgent
		}), a.browser = _e(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
		const o = {};
		a.modules.forEach(c => {
			c({
				params: t,
				swiper: a,
				extendParams: jt(t, o),
				on: a.on.bind(a),
				once: a.once.bind(a),
				off: a.off.bind(a),
				emit: a.emit.bind(a)
			})
		});
		const d = O({}, he, o);
		return a.params = O({}, d, U, t), a.originalParams = O({}, a.params), a.passedParams = O({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach(c => {
			a.on(c, a.params.on[c])
		}), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
			enabled: a.params.enabled,
			el: e,
			classNames: [],
			slides: [],
			slidesGrid: [],
			snapGrid: [],
			slidesSizesGrid: [],
			isHorizontal() {
				return a.params.direction === "horizontal"
			},
			isVertical() {
				return a.params.direction === "vertical"
			},
			activeIndex: 0,
			realIndex: 0,
			isBeginning: !0,
			isEnd: !1,
			translate: 0,
			previousTranslate: 0,
			progress: 0,
			velocity: 0,
			animating: !1,
			cssOverflowAdjustment() {
				return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
			},
			allowSlideNext: a.params.allowSlideNext,
			allowSlidePrev: a.params.allowSlidePrev,
			touchEventsData: {
				isTouched: void 0,
				isMoved: void 0,
				allowTouchCallbacks: void 0,
				touchStartTime: void 0,
				isScrolling: void 0,
				currentTranslate: void 0,
				startTranslate: void 0,
				allowThresholdMove: void 0,
				focusableElements: a.params.focusableElements,
				lastClickTime: 0,
				clickTimeout: void 0,
				velocities: [],
				allowMomentumBounce: void 0,
				startMoving: void 0,
				pointerId: null,
				touchId: null
			},
			allowClick: !0,
			allowTouchMove: a.params.allowTouchMove,
			touches: {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			},
			imagesToLoad: [],
			imagesLoaded: 0
		}), a.emit("_swiper"), a.params.init && a.init(), a
	}
	getDirectionLabel(e) {
		return this.isHorizontal() ? e : {
			width: "height",
			"margin-top": "margin-left",
			"margin-bottom ": "margin-right",
			"margin-left": "margin-top",
			"margin-right": "margin-bottom",
			"padding-left": "padding-top",
			"padding-right": "padding-bottom",
			marginRight: "marginBottom"
		}[e]
	}
	getSlideIndex(e) {
		const {
			slidesEl: t,
			params: s
		} = this, n = G(t, `.${s.slideClass}, swiper-slide`), r = de(n[0]);
		return de(e) - r
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
	}
	recalcSlides() {
		const e = this,
			{
				slidesEl: t,
				params: s
			} = e;
		e.slides = G(t, `.${s.slideClass}, swiper-slide`)
	}
	enable() {
		const e = this;
		e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
	}
	disable() {
		const e = this;
		e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
	}
	setProgress(e, t) {
		const s = this;
		e = Math.min(Math.max(e, 0), 1);
		const n = s.minTranslate(),
			l = (s.maxTranslate() - n) * e + n;
		s.translateTo(l, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
	}
	emitContainerClasses() {
		const e = this;
		if (!e.params._emitClasses || !e.el) return;
		const t = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
		e.emit("_containerClasses", t.join(" "))
	}
	getSlideClasses(e) {
		const t = this;
		return t.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
	}
	emitSlidesClasses() {
		const e = this;
		if (!e.params._emitClasses || !e.el) return;
		const t = [];
		e.slides.forEach(s => {
			const n = e.getSlideClasses(s);
			t.push({
				slideEl: s,
				classNames: n
			}), e.emit("_slideClass", s, n)
		}), e.emit("_slideClasses", t)
	}
	slidesPerViewDynamic(e, t) {
		e === void 0 && (e = "current"), t === void 0 && (t = !1);
		const s = this,
			{
				params: n,
				slides: r,
				slidesGrid: l,
				slidesSizesGrid: a,
				size: o,
				activeIndex: d
			} = s;
		let c = 1;
		if (typeof n.slidesPerView == "number") return n.slidesPerView;
		if (n.centeredSlides) {
			let f = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0,
				p;
			for (let u = d + 1; u < r.length; u += 1) r[u] && !p && (f += Math.ceil(r[u].swiperSlideSize), c += 1, f > o && (p = !0));
			for (let u = d - 1; u >= 0; u -= 1) r[u] && !p && (f += r[u].swiperSlideSize, c += 1, f > o && (p = !0))
		} else if (e === "current")
			for (let f = d + 1; f < r.length; f += 1)(t ? l[f] + a[f] - l[d] < o : l[f] - l[d] < o) && (c += 1);
		else
			for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < o && (c += 1);
		return c
	}
	update() {
		const e = this;
		if (!e || e.destroyed) return;
		const {
			snapGrid: t,
			params: s
		} = e;
		s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
			l.complete && H(e, l)
		}), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

		function n() {
			const l = e.rtlTranslate ? e.translate * -1 : e.translate,
				a = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
			e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
		}
		let r;
		if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
		else {
			if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
				const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
				r = e.slideTo(l.length - 1, 0, !1, !0)
			} else r = e.slideTo(e.activeIndex, 0, !1, !0);
			r || n()
		}
		s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
	}
	changeDirection(e, t) {
		t === void 0 && (t = !0);
		const s = this,
			n = s.params.direction;
		return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(r => {
			e === "vertical" ? r.style.width = "" : r.style.height = ""
		}), s.emit("changeDirection"), t && s.update()), s
	}
	changeLanguageDirection(e) {
		const t = this;
		t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
	}
	mount(e) {
		const t = this;
		if (t.mounted) return !0;
		let s = e || t.params.el;
		if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
		s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
		const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
		let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : G(s, n())[0];
		return !l && t.params.createElements && (l = te("div", t.params.wrapperClass), s.append(l), G(s, `.${t.params.slideClass}`).forEach(a => {
			l.append(a)
		})), Object.assign(t, {
			el: s,
			wrapperEl: l,
			slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
			hostEl: t.isElement ? s.parentNode.host : s,
			mounted: !0,
			rtl: s.dir.toLowerCase() === "rtl" || D(s, "direction") === "rtl",
			rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || D(s, "direction") === "rtl"),
			wrongRTL: D(l, "display") === "-webkit-box"
		}), !0
	}
	init(e) {
		const t = this;
		if (t.initialized || t.mount(e) === !1) return t;
		t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
		const n = [...t.el.querySelectorAll('[loading="lazy"]')];
		return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(r => {
			r.complete ? H(t, r) : r.addEventListener("load", l => {
				H(t, l.target)
			})
		}), ie(t), t.initialized = !0, ie(t), t.emit("init"), t.emit("afterInit"), t
	}
	destroy(e, t) {
		e === void 0 && (e = !0), t === void 0 && (t = !0);
		const s = this,
			{
				params: n,
				el: r,
				wrapperEl: l,
				slides: a
			} = s;
		return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), l && l.removeAttribute("style"), a && a.length && a.forEach(o => {
			o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index")
		})), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(o => {
			s.off(o)
		}), e !== !1 && (s.el && typeof s.el != "string" && (s.el.swiper = null), Le(s)), s.destroyed = !0), null
	}
	static extendDefaults(e) {
		O(U, e)
	}
	static get extendedDefaults() {
		return U
	}
	static get defaults() {
		return he
	}
	static installModule(e) {
		A.prototype.__modules__ || (A.prototype.__modules__ = []);
		const t = A.prototype.__modules__;
		typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
	}
	static use(e) {
		return Array.isArray(e) ? (e.forEach(t => A.installModule(t)), A) : (A.installModule(e), A)
	}
}
Object.keys(K).forEach(i => {
	Object.keys(K[i]).forEach(e => {
		A.prototype[e] = K[i][e]
	})
});
A.use([Ne, He]);
const ge = document.querySelectorAll(".corrects-items > .item"),
	J = [];
ge.forEach((i, e) => {
	const t = i.querySelector(".item-content"),
		s = i.querySelector(".item-wrap");
	i.querySelector(".item-header");
	const n = () => {
		J[e] = t.clientHeight, s.style.height = (i.classList.contains("open") ? J[e] : 0) + "px"
	};
	window.addEventListener("resize", n), setTimeout(n, 500), i.addEventListener("click", () => {
		i.classList.toggle("open"), ge.forEach(r => {
			const l = r.querySelector(".item-wrap");
			r !== i && r.classList.remove("open"), l.style.height = (r.classList.contains("open") ? J[e] : 0) + "px"
		})
	})
});
try {
	const i = document.getElementById("hidden-text"),
		e = document.getElementById("show-hidden"),
		t = i.querySelector("p");
	let s = t.clientHeight;
	const n = () => {
		s = t.clientHeight, i.classList.contains("open") && (s.style.height = s + "px")
	};
	window.addEventListener("resize", n), e.addEventListener("click", () => {
		i.classList.toggle("open"), e.classList.add("hide"), i.classList.contains("open") && (i.style.height = s + "px")
	})
} catch (i) {
	console.log(i)
}
const re = new A(".videos-swiper.swiper", {
	slidesPerView: 1.25,
	spaceBetween: 20,
	centeredSlides: !0,
	breakpoints: {
		501: {
			centeredSlides: !1,
			slidesPerView: 2.4
		}
	}
});
re.slideTo(1);
const be = Array.from(document.querySelectorAll(".videos-pagination span"));
be.forEach((i, e) => {
	i.addEventListener("click", () => {
		re.slideTo(e)
	})
});
re.on("slideChange", i => {
	be.forEach((e, t) => {
		e.classList[i.activeIndex === t ? "add" : "remove"]("active")
	})
});
const Q = document.getElementById("menu-btn"),
	Z = document.querySelector(".mobile-aside");
Q.addEventListener("click", () => {
	console.log("!"), window.scrollTo(0, 0), Q.classList.toggle("active"), Z.classList.toggle("open"), document.documentElement.style["overflow-y"] = document.documentElement.style["overflow-y"] === "hidden" ? "initial" : "hidden", Z.querySelectorAll("a").forEach(i => {
		i.addEventListener("click", () => {
			Q.classList.remove("active"), Z.classList.remove("open"), document.documentElement.style["overflow-y"] = "initial"
		})
	})
});

// TypeIt by Alex MacArthur - https://typeitjs.com
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).TypeIt=t()}(this,(function(){"use strict";const e=e=>Array.isArray(e),t=t=>e(t)?t:[t];const s="data-typeit-id",i="ti-cursor",r={started:!1,completed:!1,frozen:!1,destroyed:!1},n={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map((e=>({opacity:e}))),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},o=`[${s}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,a=e=>document.createElement(e),u=e=>document.createTextNode(e),l=(e,t="")=>{let s=a("style");s.id=t,s.appendChild(u(e)),document.head.appendChild(s)},h=t=>(e(t)||(t=[t/2,t/2]),t),d=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let p=e=>e/2;const c=e=>Array.from(e);let m=e=>([...e.childNodes].forEach((e=>{if(e.nodeValue)return[...e.nodeValue].forEach((t=>{e.parentNode.insertBefore(u(t),e)})),void e.remove();m(e)})),e);const f=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,m(t.body)};function y(e,t=!1,s=!1){let r,n=e.querySelector(`.${i}`),o=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{if(n&&s){if(e.classList?.contains(i))return NodeFilter.FILTER_ACCEPT;if(n.contains(e))return NodeFilter.FILTER_REJECT}return e.classList?.contains(i)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),a=[];for(;r=o.nextNode();)r.originalParent||(r.originalParent=r.parentNode),a.push(r);return t?a.reverse():a}function g(e,t=!0){return t?y(f(e)):c(e).map(u)}const b=({index:e,newIndex:t,queueItems:s,cleanUp:i})=>{for(let r=e+1;r<t+1;r++)i(s[r][0])},P=e=>Number.isInteger(e),C=({queueItems:e,selector:t,cursorPosition:s,to:i})=>{if(P(t))return-1*t;let r=new RegExp("END","i").test(i),n=t?[...e].reverse().findIndex((({char:e})=>{let s=e.parentElement,i=s.matches(t);return!(!r||!i)||i&&s.firstChild.isSameNode(e)})):-1;return n<0&&(n=r?0:e.length-1),n-s+(r?0:1)},I=(e,t)=>new Array(t).fill(e);let v=e=>new Promise((t=>{requestAnimationFrame((async()=>{t(await e())}))})),w=e=>e?.getAnimations().find((t=>t.id===e.dataset.tiAnimationId)),T=({cursor:e,frames:t,options:s})=>{let i=e.animate(t,s);return i.pause(),i.id=e.dataset.tiAnimationId,v((()=>{v((()=>{i.play()}))})),i},q=e=>e.func?.call(null),S=async({index:e,queueItems:t,wait:s,cursor:i,cursorOptions:r})=>{let n=t[e][1],o=[],a=e,u=n,l=()=>u&&!u.delay,h=n.shouldPauseCursor()&&r.autoPause;for(;l();)o.push(u),l()&&a++,u=t[a]?t[a][1]:null;if(o.length)return await v((async()=>{for(let e of o)await q(e)})),a-1;let d,p=w(i);return p&&(d={...p.effect.getComputedTiming(),delay:h?r.autoPauseDelay:0}),await s((async()=>{p&&h&&p.cancel(),await v((()=>{q(n)}))}),n.delay),await(({cursor:e,options:t,cursorOptions:s})=>{if(!e||!s)return;let i,r=w(e);r&&(t.delay=r.effect.getComputedTiming().delay,i=r.currentTime,r.cancel());let n=T({cursor:e,frames:s.animation.frames,options:t});return i&&(n.currentTime=i),n})({cursor:i,options:d,cursorOptions:r}),e};const N=e=>"value"in e;let A=e=>"function"==typeof e?e():e,E=(e,t=document,s=!1)=>t["querySelector"+(s?"All":"")](e);const L=(e,t)=>Object.assign({},e,t);let x={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"};return class{element;timeouts;cursorPosition;predictedCursorPosition;statuses={started:!1,completed:!1,frozen:!1,destroyed:!1};opts;id;queue;cursor;unfreeze=()=>{};constructor(e,s={}){var i;this.opts=L(n,s),this.element="string"==typeof(i=e)?E(i):i,this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=L({},r),this.id=Math.random().toString().substring(2,9),this.queue=function(e){let s=function(e){return t(e).forEach((e=>n.set(Symbol(e.char?.innerText),i({...e})))),this},i=e=>(e.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},e),r=()=>Array.from(n.values()),n=new Map;return s(e),{add:s,set:function(e,t){let s=[...n.keys()];n.set(s[e],i(t))},wipe:function(){n=new Map,s(e)},done:(e,t=!1)=>t?n.delete(e):n.get(e).done=!0,reset:function(){n.forEach((e=>delete e.done))},destroy:e=>n.delete(e),getItems:(e=!1)=>e?r():r().filter((e=>!e.done)),getQueue:()=>n,getTypeable:()=>r().filter((e=>e.typeable))}}([{delay:this.opts.startDelay}]),this.#e(s),this.cursor=this.#t(),this.element.dataset.typeitId=this.id,l(o),this.opts.strings.length&&this.#s()}go(){return this.statuses.started?this:(this.#i(),this.opts.waitUntilVisible?(e=this.element,t=this.#r.bind(this),new IntersectionObserver(((s,i)=>{s.forEach((s=>{s.isIntersecting&&(t(),i.unobserve(e))}))}),{threshold:1}).observe(e),this):(this.#r(),this));var e,t}destroy(e=!0){this.timeouts=(this.timeouts.forEach(clearTimeout),[]),A(e)&&this.cursor&&this.#n(this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let t in this.statuses)this.statuses[t]=!1;return this.element[this.#o()?"value":"innerHTML"]="",this}is=function(e){return this.statuses[e]};type(e,t={}){e=A(e);let{instant:s}=t,i=this.#a(t),r=g(e,this.opts.html).map((e=>{return{func:()=>this.#u(e),char:e,delay:s||(t=e,/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML))?0:this.#l(),typeable:e.nodeType===Node.TEXT_NODE};var t})),n=[i[0],{func:async()=>await this.opts.beforeString(e,this)},...r,{func:async()=>await this.opts.afterString(e,this)},i[1]];return this.#h(n,t)}break(e={}){return this.#h({func:()=>this.#u(a("BR")),typeable:!0},e)}move(e,t={}){e=A(e);let s=this.#a(t),{instant:i,to:r}=t,n=C({queueItems:this.queue.getTypeable(),selector:null===e?"":e,to:r,cursorPosition:this.#d}),o=n<0?-1:1;return this.predictedCursorPosition=this.#d+n,this.#h([s[0],...I({func:()=>this.#p(o),delay:i?0:this.#l(),cursorable:!0},Math.abs(n)),s[1]],t)}exec(e,t={}){let s=this.#a(t);return this.#h([s[0],{func:()=>e(this)},s[1]],t)}options(e,t={}){return e=A(e),this.#c(e),this.#h({},t)}pause(e,t={}){return this.#h({delay:A(e)},t)}delete(e=null,t={}){e=A(e);let s=this.#a(t),i=e,{instant:r,to:n}=t,o=this.queue.getTypeable(),a=(()=>null===i?o.length:P(i)?i:C({queueItems:o,selector:i,cursorPosition:this.#d,to:n}))();return this.#h([s[0],...I({func:this.#m.bind(this),delay:r?0:this.#l(1),deletable:!0},a),s[1]],t)}freeze(){this.statuses.frozen=!0}flush(e=()=>{}){return this.#i(),this.#r(!1).then(e),this}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return this.#c(e)}getElement(){return this.element}empty(e={}){return this.#h({func:this.#f.bind(this)},e)}async#f(){this.#o()?this.element.value="":this.#y.forEach(this.#n.bind(this))}async#r(e=!0){this.statuses.started=!0;let t=t=>{this.queue.done(t,!e)};try{let s=[...this.queue.getQueue()];for(let e=0;e<s.length;e++){let[i,r]=s[e];if(!r.done){if(!r.deletable||r.deletable&&this.#y.length){let i=await this.#g(e,s);b({index:e,newIndex:i,queueItems:s,cleanUp:t}),e=i}t(i)}}if(!e)return this;if(this.statuses.completed=!0,await this.opts.afterComplete(this),!this.opts.loop)throw"";let i=this.opts.loopDelay;this.#b((async()=>{await this.#P(i[0]),this.#r()}),i[1])}catch(s){}return this}async#p(e){var t,s,r;this.cursorPosition=(t=e,s=this.cursorPosition,r=this.#y,Math.min(Math.max(s+t,0),r.length)),((e,t,s)=>{let r=t[s-1],n=E(`.${i}`,e);(e=r?.parentNode||e).insertBefore(n,r||null)})(this.element,this.#y,this.cursorPosition)}async#P(e){let t=this.#d;t&&await this.#p({value:t});let s=this.#y.map((e=>[Symbol(),{func:this.#m.bind(this),delay:this.#l(1),deletable:!0,shouldPauseCursor:()=>!0}]));for(let i=0;i<s.length;i++)await this.#g(i,s);this.queue.reset(),this.queue.set(0,{delay:e})}#g(e,t){return S({index:e,queueItems:t,wait:this.#b.bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})}async#b(e,t,s=!1){this.statuses.frozen&&await new Promise((e=>{this.unfreeze=()=>{this.statuses.frozen=!1,e()}})),s||await this.opts.beforeStep(this),await((e,t,s)=>new Promise((i=>{s.push(setTimeout((async()=>{await e(),i()}),t||0))})))(e,t,this.timeouts),s||await this.opts.afterStep(this)}async#i(){if(!this.#o()&&this.cursor&&this.element.appendChild(this.cursor),this.#C){((e,t)=>{let r=`[${s}='${e}'] .${i}`,n=getComputedStyle(t),o=Object.entries(x).reduce(((e,[t,s])=>`${e} ${t}: var(--ti-cursor-${t}, ${s||n[t]});`),"");l(`${r} { display: inline-block; width: 0; ${o} }`,e)})(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:t,options:r}=e;T({frames:t,cursor:this.cursor,options:{duration:this.opts.cursorSpeed,...r}})}}#o(){return N(this.element)}#h(e,t){return this.queue.add(e),this.#I(t),this}#I(e={}){let t=e.delay;t&&this.queue.add({delay:t})}#a(e={}){return[{func:()=>this.#c(e)},{func:()=>this.#c(this.opts)}]}async#c(e){this.opts=L(this.opts,e)}#s(){let e=this.opts.strings.filter((e=>!!e));e.forEach(((t,s)=>{if(this.type(t),s+1===e.length)return;let i=this.opts.breakLines?[{func:()=>this.#u(a("BR")),typeable:!0}]:I({func:this.#m.bind(this),delay:this.#l(1)},this.queue.getTypeable().length);this.#v(i)}))}#e=e=>{e.cursor=(e=>{if("object"==typeof e){let t={},{frames:s,options:i}=n.cursor.animation;return t.animation=e.animation||{},t.animation.frames=e.animation?.frames||s,t.animation.options=L(i,e.animation?.options||{}),t.autoPause=e.autoPause??n.cursor.autoPause,t.autoPauseDelay=e.autoPauseDelay||n.cursor.autoPauseDelay,t}return!0===e?n.cursor:e})(e.cursor??n.cursor),this.opts.strings=this.#w(t(this.opts.strings)),this.opts=L(this.opts,{html:!this.#T&&this.opts.html,nextStringDelay:h(this.opts.nextStringDelay),loopDelay:h(this.opts.loopDelay)})};#w(e){let t=this.element.innerHTML;return t?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=t,m(this.element),this.#v(I({func:this.#m.bind(this),delay:this.#l(1),deletable:!0},this.#y.length)),e):(s=t,s.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)).concat(e)):e;var s}#t(){if(this.#T)return null;let e=a("span");return e.className=i,this.#C?(e.innerHTML=f(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)}#v(e){let t=this.opts.nextStringDelay;this.queue.add([{delay:t[0]},...e,{delay:t[1]}])}#u(e){((e,t)=>{if(N(e))return void(e.value=`${e.value}${t.textContent}`);t.innerHTML="";let s=(r=t.originalParent,/body/i.test(r?.tagName)?e:t.originalParent||e);var r;s.insertBefore(t,E("."+i,s)||null)})(this.element,e)}#m(){this.#y.length&&(this.#T?this.element.value=this.element.value.slice(0,-1):this.#n(this.#y[this.cursorPosition]))}#n(e){((e,t)=>{if(!e)return;let s=e.parentNode;(s.childNodes.length>1||s.isSameNode(t)?e:s).remove()})(e,this.element)}#l(e=0){return function(e){let{speed:t,deleteSpeed:s,lifeLike:i}=e;return s=null!==s?s:t/3,i?[d(t,p(t)),d(s,p(s))]:[t,s]}(this.opts)[e]}get#d(){return this.predictedCursorPosition??this.cursorPosition}get#T(){return N(this.element)}get#C(){return!!this.opts.cursor&&!this.#T}get#y(){return e=this.element,N(e)?c(e.value):y(e,!0).filter((e=>!(e.childNodes.length>0)));var e}}}));


