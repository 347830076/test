window.error = function(e) {
    console.log(e)
}
!
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ArcProgress = e() : t.ArcProgress = e()
} (window,
function() {
	return function(t) {
		var e = {};
		function s(i) {
			if (e[i]) return e[i].exports;
			var r = e[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return t[i].call(r.exports, r, r.exports, s),
			r.l = !0,
			r.exports
		}
		return s.m = t,
		s.c = e,
		s.d = function(t, e, i) {
			s.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: i
			})
		},
		s.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}),
			Object.defineProperty(t, "__esModule", {
				value: !0
			})
		},
		s.t = function(t, e) {
			if (1 & e && (t = s(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if (s.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t) for (var r in t) s.d(i, r,
			function(e) {
				return t[e]
			}.bind(null, r));
			return i
		},
		s.n = function(t) {
			var e = t && t.__esModule ?
			function() {
				return t.
			default
			}:
			function() {
				return t
			};
			return s.d(e, "a", e),
			e
		},
		s.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		},
		s.p = "",
		s(s.s = 0)
	} ([function(t, e, s) {
		"use strict";
		var i = this && this.__assign ||
		function() {
			return (i = Object.assign ||
			function(t) {
				for (var e, s = 1,
				i = arguments.length; s < i; s++) for (var r in e = arguments[s]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
				return t
			}).apply(this, arguments)
		},
		r = this && this.__rest ||
		function(t, e) {
			var s = {};
			for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (s[i] = t[i]);
			if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (s[i[r]] = t[i[r]])
			}
			return s
		},
		n = this && this.__spreadArrays ||
		function() {
			for (var t = 0,
			e = 0,
			s = arguments.length; e < s; e++) t += arguments[e].length;
			var i = Array(t),
			r = 0;
			for (e = 0; e < s; e++) for (var n = arguments[e], o = 0, a = n.length; o < a; o++, r++) i[r] = n[o];
			return i
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = s(1),
		a = Math.PI,
		h = function() {
			function t(t) {
                console.log(t)
				var e = this,
				s = t.size,
				r = t.el,
				n = t.textStyle,
				o = void 0 === n ? {}: n,
				a = t.arcStart,
				h = void 0 === a ? 144 : a,
				c = t.arcEnd,
				l = void 0 === c ? 396 : c,
				p = t.progress,
				u = t.text,
				f = t.thickness,
				d = t.fillThickness,
				y = void 0 === d ? 0 : d,
				g = t.emptyColor,
				v = t.fillColor,
				m = t.lineCap,
				x = t.animation,
				b = t.speed,
				P = void 0 === b ? 0 : b,
				C = t.customText,
				k = t.animationEnd,
				S = void 0 === k ?
				function() {}: k,
				O = t.onError,
				w = void 0 === O ?
				function() {}: O,
				T = t.observer;
				this.percentage = 0,
				this.speed = 1,
				this.speedOption = 0,
				this.type = "increase",
				this.isEnd = !1,
				this.emptyColor = "#efefef",
				this.fillColor = "#6bd5c8",
				this.lineCap = "round",
				this.increaseValue = 0,
				this.frequency = 0,
				this.lastNumber = 0,
				this.prevProgress = 0,
				this.prevText = "0",
                this.textValue = 0,
               
				this.drawProgressAnimate = function() { ! 1 === e.animation && (e.percentage = e.progress),
					e.isEnd = e.percentage === e.progress,
					e.ctx.clearRect(0, 0, e.size, e.size),
					e.drawBackground(),
                    e.drawText(),
					e.drawProgress(),
					e.isEnd || ("increase" === e.type ? (e.accumulation(), e.requestAnimationFrame(e.drawProgressAnimate)) : "decrease" === e.type && (e.accumulation(), e.requestAnimationFrame(e.drawProgressAnimate)))
				},
				this.resetOptions = function(t) {
					var s = t.progress,
					r = t.thickness,
					n = t.textStyle,
					o = t.size,
					a = t.speed;
					if ("number" == typeof s) {
						var h = 100 * s;
						e.type = h > e.progress ? "increase": "decrease",
						e.progress = h,
						e.optionProgress = s
					}
					r && (e.thickness = 2 * r),
					n && (e.textStyle = i(i({},
					e.textStyle), n)),
					o && (e.size = 2 * o),
					"number" == typeof a && (e.speedOption = a)
				},
				this.size = 2 * (s || 200),
				this.arcStart = h,
				this.arcEnd = l,
				this.optionProgress = p,
				this.progress = 100 * p,
				this.text = u,
				this.el = r,
				this.thickness = 2 * (f || 12),
				this.fillThickness = 2 * y || this.thickness,
				this.animationEnd = S,
				this.onError = w,
				this.emptyColor = g,
                this.fillColor = v || this.fillColor,
				this.lineCap = m || this.lineCap,
				this.animation = x,
				this.textStyle = i({
					size: "18px",
					color: "#000",
					x: this.size / 4,
					y: this.size / 4
				},
				o),
				this.customText = C || [],
				this.observer = T,
				this.speedOption = P,
				this.init({
					updateImg: !0
				})
			}
			return Object.defineProperty(t.prototype, "isEmptyProgressBig", {
				get: function() {
					return this.thickness >= this.fillThickness
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.init = function(t) {
				var e = this,
				s = t || {},
				i = s.notCreate,
				r = s.updateImg;
				this.createCanvas(i),
				this.setSpeed(),
				this.text && this.setIncreaseValue(),
				this.sourceLoad(r).then(function() {
					return e.drawProgressAnimate()
				}).
				catch(function(t) {
					return e.onError(t)
				})
			},
			t.prototype.createCanvas = function(t) {
				var e = "string" == typeof this.el ? document.querySelector(this.el) : this.el;
				t || (this.canvas = document.createElement("canvas"));
				var s = this.size / 2;
				e.style.width = s + "px",
				e.style.height = s + "px",
				this.canvas.width = this.size,
				this.canvas.height = this.size,
				this.canvas.style.width = s + "px",
				this.canvas.style.height = s + "px",
				this.canvas.style.width = "block",
				t || (e.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"))
			},
			t.prototype.drawBackground = function() {
				var t = this.ctx,
				e = this.size / 2,
				s = this.arcStart / 180 * a,
				i = this.arcEnd / 180 * a;
				t.beginPath(),
				t.lineWidth = this.thickness,
				t.lineCap = this.lineCap,
				t.strokeStyle = this.emptyColor;
				var r = this.isEmptyProgressBig ? e - this.thickness: e - this.thickness - (this.fillThickness - this.thickness);
				t.arc(e, e, r, s, i, !1),
				t.stroke(),
				t.closePath()
			},
			t.prototype.computedArc = function() {
				var t = this.arcStart / 180,
				e = (this.arcEnd / 180 - t) * (this.percentage / 100) + t;
				return {
					start: t * a,
					end: e * a
				}
			},
			t.prototype.setSpeed = function() {
				var t = this.speedOption,
				e = this.animation,
				s = this.progress,
				i = this.prevProgress,
				r = s > i ? s - i: i - s;
				e && "number" == typeof e ? this.speed = r / (e / (1e3 / 60)) : "number" == typeof t && (this.speed = 1, this.speed += t > 0 ? t / 40 : t / 101),
				this.frequency = r / this.speed
			},
			t.prototype.setIncreaseValue = function() {
				var t = this.frequency,
				e = Number(this.text),
				s = Number(this.prevText),
				i = (e > s ? e - s: s - e) / t; ! o.isInt(this.text) || i % 2 && i % 5 || (i = i - 1 > 0 ? i -= 1 : 1),
				this.increaseValue = i
			},
			t.prototype.computedText = function() {
				var t = this.lastNumber,
				e = o.isInt(this.text);
				if ("increase" === this.type ? this.textValue += this.increaseValue: this.textValue -= this.increaseValue, this.isEnd) return this.text;
				if (e) return String(Math.floor(this.textValue));
				var s = this.text.split(".")[1].length;
				return this.lastNumber = 9 === t ? 0 : t + 1,
				s > 1 ? this.textValue.toFixed(s - 1) + this.lastNumber: this.textValue.toFixed(0) + "." + this.lastNumber
			},
			t.prototype.sourceLoad = function(t) {
				var e = this;
				return new Promise(function(s, i) {
					if ("object" === o.type(e.fillColor) && t && e.fillColor.image) {
						e.drawBackground();
						var r = e.fillColor.image,
						n = new Image;
						n.src = r,
						n.onload = function() {
							e.fillImage = n,
							s(!0)
						},
						n.onerror = function(t) {
							i(t)
						}
					} else s(!1)
				})
			},
			t.prototype.setFillColor = function(t) {
                var e = o.type(this.fillColor);
				if ("string" === e) t.strokeStyle = this.fillColor;
				else if ("object" === e && !this.fillColor.gradient) {
					var s = t.createPattern(this.fillImage, "no-repeat");
					t.strokeStyle = s
				} else {
                    console.log(this.fillColor.gradient)
					for (var i = this.fillColor.gradient,
					r = t.createLinearGradient(0, 0, this.size, 0), n = i.length, a = 1 / n, h = 0, c = 0; c < n; c++)  r.addColorStop(h, i[c]),
					h += a;
                    t.strokeStyle = r
				}
			},
			t.prototype.drawProgress = function() {
				var t = this.ctx,
				e = this.size / 2,
				s = this.computedArc(),
				i = s.start,
				r = s.end;
				t.beginPath(),
				t.lineWidth = this.fillThickness,
                t.lineCap = this.lineCap,
                console.log(t)
				this.setFillColor(t);
				var n = this.isEmptyProgressBig ? e - this.fillThickness - (this.thickness - this.fillThickness) : e - this.fillThickness;
				t.arc(e, e, n, i, r, !1),
				t.stroke(),
				t.closePath(),
				this.observer && this.observer(this.percentage, this.currentText),
				this.isEnd && this.animationEnd({
					progress: this.optionProgress,
					text: this.text
				})
			},
			t.prototype.setText = function(t, e) {
				var s = e.text,
				i = e.size,
				r = void 0 === i ? "14px": i,
				n = e.color,
				o = void 0 === n ? "#000": n,
				a = e.x,
				h = void 0 === a ? 10 : a,
				c = e.y,
				l = void 0 === c ? 10 : c,
				p = e.font,
				u = void 0 === p ? "sans-seri": p,
				f = 2 * parseInt(r),
				d = r.substring(String(f).length) || "px";
				t.font = "" + f + d + " " + u,
				t.fillStyle = o,
				t.textAlign = "center",
				t.textBaseline = "middle",
				t.fillText(s, 2 * h, 2 * l)
			},
			t.prototype.drawText = function() {
				var t = this.ctx,
				e = this.text && this.computedText();
				this.currentText = e;
				var s = [];
				e && s.push(i({
					text: e
				},
				this.textStyle)),
				s = n(s, this.customText);
				for (var r = 0; r < s.length; r++) this.setText(t, s[r])
			},
			t.prototype.requestAnimationFrame = function(t) {
				return window.requestAnimationFrame(t)
			},
			t.prototype.accumulation = function() {
				"increase" === this.type ? (this.percentage += this.speed, this.percentage > this.progress && (this.percentage = this.progress)) : (this.percentage -= this.speed, this.percentage < this.progress && (this.percentage = this.progress))
			},
			t.prototype.updateProgress = function(t) {
				var e = this;
				this.prevProgress = this.progress,
				this.prevText = this.text;
				var s = t.progress,
				i = t.thickness,
				n = t.textStyle,
				a = t.size,
				h = t.speed,
				c = r(t, ["progress", "thickness", "textStyle", "size", "speed"]);
				if (this.isEnd && this.prevProgress !== 100 * s) {
					this.resetOptions({
						progress: s,
						thickness: i,
						textStyle: n,
						size: a,
						speed: h
					}),
					Object.keys(c || {}).forEach(function(t) {
						return e[t] = c[t]
					});
					var l = "object" === o.type(c.fillColor) && !c.fillColor.image;
					this.init({
						notCreate: !0,
						updateImg: l
					})
				}
			},
			t.prototype.destroy = function() {
				var t = this.canvas.parentNode;
				t && t.removeChild(this.canvas)
			},
			t
		} ();
		e.
	default = h
	},
	function(t, e, s) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}),
		e.isInt = function(t) {
			return void 0 === t && (t = ""),
			1 === t.split(".").length
		},
		e.type = function(t) {
			return Object.prototype.toString.call(t).match(/[A-Z]\w+/)[0].toLowerCase()
		}
	}]).
default
});