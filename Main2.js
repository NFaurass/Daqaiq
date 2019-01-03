(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        17: function(e, t, a) {
            e.exports = {
                flex: "Footer_flex__XJqyj",
                attribution: "Footer_attribution__2j1Jl",
                smallTextGroup: "Footer_smallTextGroup__2LFYo",
                smallText: "Footer_smallText__3GDT2"
            }
        },
        2: function(e, t, a) {
            e.exports = {
                clockContainer: "Clock_clockContainer__2eaGj",
                clock: "Clock_clock__1Kp26",
                minutesContainer: "Clock_minutesContainer__19ohw",
                hoursContainer: "Clock_hoursContainer__DSn3d",
                secondsContainer: "Clock_secondsContainer__1OmOQ",
                hours: "Clock_hours__MPZC0",
                minutes: "Clock_minutes__3e_Np",
                seconds: "Clock_seconds__Zxnzv",
                top: "Clock_top__2bYfv",
                topText: "Clock_topText__3THiD",
                topNext: "Clock_topNext__Qzouh",
                topNextText: "Clock_topNextText__2tv3Y",
                bottom: "Clock_bottom__21L9f",
                delete: "Clock_delete__XM3II",
                designatePrimary: "Clock_designatePrimary__1DL_T"
            }
        },
        22: function(e, t, a) {
            e.exports = {
                flex: "Header_flex__1OsXy",
                tagline: "Header_tagline__1hvNQ"
            }
        },
        25: function(e, t, a) {
            e.exports = {
                panel: "ClockPanel_panel__2tu1b",
                grid: "ClockPanel_grid__1G_Do"
            }
        },
        4: function(e, t, a) {
            e.exports = {
                flex: "BarControls_flex__2u_KF",
                staticLabel: "BarControls_staticLabel__3xn3w",
                timeInputField: "BarControls_timeInputField__3EyJY",
                timeInput: "BarControls_timeInput__2pTDl",
                locationInputField: "BarControls_locationInputField__32Tvj",
                locationInput: "BarControls_locationInput__3naqm",
                staticIcon: "BarControls_staticIcon__JJ1YT",
                failureText: "BarControls_failureText__NZpjW"
            }
        },
        42: function(e, t, a) {
            e.exports = a(82)
        },
        47: function(e, t, a) {},
        51: function(e, t, a) {},
        82: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(38),
                c = a.n(o),
                l = (a(47), a(6)),
                s = a(7),
                i = a(11),
                m = a(8),
                u = a(12),
                p = a(29),
                d = (a(51), a(22)),
                h = a.n(d),
                f = function(e) {
                    return r.a.createElement("div", null, r.a.createElement("div", {
                        className: h.a.flex
                    }, r.a.createElement("a", {
                        href: "/",
                        style: {
                            textDecoration: "none",
                            color: "#7e207f",
                            paddingLeft: "2%",
                        }
                    }, r.a.createElement("h1", null, "Daqaiq")),
                    r.a.createElement("div", null,
                    r.a.createElement("p", {
                        className: h.a.tagline
                    },"Work conveniently across timezones."))))
                },
                k = a(10),
                y = a(14),
                _ = a.n(y),
                v = a(2),
                b = a.n(v),
                E = a(5),
                g = a(9),
                C = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(i.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = NaN;
                            if ("" !== this.props.checkTime) {
                                var t = parseInt(this.props.checkTime.split(":")[0]),
                                    a = parseInt(this.props.checkTime.split(":")[1]);
                                e = g.DateTime.fromObject({
                                    hour: t,
                                    minute: a,
                                    zone: this.props.primaryZone
                                }).setZone(this.props.timezone)
                            } else e = this.props.universalDate.setZone(this.props.timezone);
                            var n = 6 * e.second,
                                o = 6 * e.minute,
                                c = 30 * e.hour + e.minute / 2,
                                l = {
                                    WebkitTransform: "rotateZ(" + c + "deg)",
                                    transform: "rotateZ(" + c + "deg)"
                                },
                                s = {
                                    WebkitTransform: "rotateZ(" + o + "deg)",
                                    transform: "rotateZ(" + o + "deg)"
                                },
                                i = {
                                    WebkitTransform: "rotateZ(" + n + "deg)",
                                    transform: "rotateZ(" + n + "deg)"
                                };
                            return r.a.createElement("div", {
                                className: b.a.clockContainer
                            }, r.a.createElement("div", {
                                className: b.a.top
                            }, r.a.createElement("span", {
                                className: b.a.topText
                            }, this.props.name), r.a.createElement("span", {
                                className: b.a.topText
                            }, e.toLocaleString({
                                hour: "numeric",
                                minute: "2-digit"
                            }))), r.a.createElement("div", {
                                className: b.a.topNext
                            }, r.a.createElement("span", {
                                className: b.a.topNextText
                            }, e.toLocaleString({
                                weekday: "short",
                                month: "short",
                                day: "2-digit"
                            }))), r.a.createElement("article", {
                                className: _()(b.a.clock)
                            }, r.a.createElement("div", {
                                className: b.a.hoursContainer
                            }, r.a.createElement("div", {
                                className: b.a.hours,
                                style: l
                            })), r.a.createElement("div", {
                                className: b.a.minutesContainer
                            }, r.a.createElement("div", {
                                className: b.a.minutes,
                                style: s
                            })), r.a.createElement("div", {
                                className: b.a.secondsContainer
                            }, r.a.createElement("div", {
                                className: b.a.seconds,
                                style: i
                            }))), r.a.createElement("div", {
                                className: b.a.bottom
                            }, r.a.createElement("div", {
                                className: b.a.delete,
                                id: this.props.unique,
                                onClick: this.props.handleDeleteClock
                            }, r.a.createElement(E.a, {
                                href: "#",
                                icon: ["fas", "trash-alt"]
                            })), r.a.createElement("div", {
                                className: b.a.designatePrimary,
                                onClick: this.props.handlePrimaryZoneChange,
                                id: this.props.unique,
                                style: this.props.isPrimary ? {
                                    color: "#4778ff"
                                } : {
                                    color: ""
                                }
                            }, r.a.createElement(E.a, {
                                href: "#",
                                icon: ["fas", "clock"]
                            }))))
                        }
                    }]), t
                }(n.Component),
                N = Object(k.b)(function(e) {
                    return {
                        universalDate: e.universalDate,
                        checkTime: e.checkTime,
                        primaryZone: e.primaryZone
                    }
                }, function(e) {
                    return {
                        handlePrimaryZoneChange: function(t) {
                            return e({
                                type: "PRIMARY_ZONE",
                                payload: {
                                    clockId: parseInt(t.currentTarget.id)
                                }
                            })
                        },
                        handleDeleteClock: function(t) {
                            return e({
                                type: "DELETE_CLOCK",
                                payload: {
                                    clockId: parseInt(t.currentTarget.id)
                                }
                            })
                        }
                    }
                })(C),
                x = a(25),
                T = a.n(x),
                O = a(28),
                I = O.b.div({
                    enter: {
                        x: 0,
                        opacity: 1
                    },
                    exit: {
                        x: -50,
                        opacity: 0
                    }
                }),
                D = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(i.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.timerID = setInterval(function() {
                                return e.tick()
                            }, 1e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.timerID)
                        }
                    }, {
                        key: "tick",
                        value: function() {
                            var e = g.DateTime.utc();
                            this.props.universalDateUpdate(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: T.a.panel
                            }, r.a.createElement("div", {
                                className: T.a.grid
                            }, r.a.createElement(O.a, null, this.props.clocks.map(function(e, t) {
                                return r.a.createElement(I, {
                                    key: t
                                }, r.a.createElement(N, {
                                    key: t,
                                    unique: t,
                                    timezone: e.timezone,
                                    name: e.name,
                                    isPrimary: e.isPrimary
                                }))
                            }))))
                        }
                    }]), t
                }(n.Component),
                j = Object(k.b)(function(e) {
                    return {
                        universalDate: e.universalDate,
                        clocks: e.clocks
                    }
                }, function(e) {
                    return {
                        universalDateUpdate: function(t) {
                            return e({
                                type: "UNIVERSAL_UPDATE",
                                payload: {
                                    newDate: t
                                }
                            })
                        }
                    }
                })(D),
                w = a(26),
                P = a.n(w),
                S = a(40),
                Z = a(27),
                z = a.n(Z),
                A = a(4),
                L = a.n(A),
                q = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(i.a)(this, Object(m.a)(t).call(this, e))).handleMode = function(e) {
                            "location" === a.state.mode ? a.setState({
                                mode: "time"
                            }) : (a.props.handleCheckTime({
                                target: {
                                    value: ""
                                }
                            }), a.setState({
                                mode: "location"
                            }))
                        }, a.handleQuery = function(e) {
                            a.setState({
                                query: e.target.value
                            })
                        }, a.handleLocationQuery = function() {
                            var e = Object(S.a)(P.a.mark(function e(t) {
                                var n, r, o, c, l;
                                return P.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("Enter" !== t.key) {
                                                e.next = 32;
                                                break
                                            }
                                            return a.setState({
                                                status: "loading"
                                            }), n = void 0, e.prev = 3, e.next = 6, z.a.get("https://maps.googleapis.com/maps/api/geocode/json", {
                                                params: {
                                                    address: t.target.value,
                                                    key: "AIzaSyD803rKP9ygtRsX-vUO61n42vUD4b8xb0E"
                                                }
                                            });
                                        case 6:
                                            n = e.sent, e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(3), console.log(e.t0);
                                        case 12:
                                            if ("OK" === n.data.status) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.abrupt("return", (console.log("No response from Geocode API"), a.setState({
                                                status: "failure"
                                            })));
                                        case 14:
                                            return r = {
                                                lat: n.data.results[0].geometry.location.lat,
                                                lng: n.data.results[0].geometry.location.lng,
                                                name: n.data.results[0].address_components[0].long_name
                                            }, o = Math.trunc(g.DateTime.utc().toSeconds()), c = void 0, "https://cors-anywhere.herokuapp.com/http://api.timezonedb.com/v2.1/get-time-zone", e.prev = 18, e.next = 21, z.a.get("https://cors-anywhere.herokuapp.com/http://api.timezonedb.com/v2.1/get-time-zone", {
                                                params: {
                                                    by: "position",
                                                    lat: r.lat,
                                                    lng: r.lng,
                                                    time: o,
                                                    key: "MWZNB46ZMW9N",
                                                    format: "json"
                                                }
                                            });
                                        case 21:
                                            c = e.sent, e.next = 27;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t1 = e.catch(18), console.log(e.t1);
                                        case 27:
                                            if (void 0 !== c.data.zoneName) {
                                                e.next = 29;
                                                break
                                            }
                                            return e.abrupt("return", (console.log("No response from Time Zone API"), a.setState({
                                                status: "failure"
                                            })));
                                        case 29:
                                            l = {
                                                lat: r.lat,
                                                lng: r.lng,
                                                name: r.name,
                                                timezone: c.data.zoneName,
                                                isPrimary: !1
                                            }, a.setState({
                                                status: "success",
                                                query: ""
                                            }, function() {
                                                setTimeout(function() {
                                                    a.setState({
                                                        status: "none"
                                                    })
                                                }, 2e3)
                                            }), a.props.handleAddClock(l);
                                        case 32:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [3, 9],
                                    [18, 24]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), a.state = {
                            mode: "location",
                            status: "none",
                            query: ""
                        }, a
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = void 0,
                                t = void 0;
                            switch (this.state.status) {
                                case "none":
                                    e = void 0;
                                    break;
                                case "loading":
                                    e = r.a.createElement(E.a, {
                                        href: "#",
                                        icon: ["fas", "circle-notch"],
                                        spin: !0
                                    });
                                    break;
                                case "success":
                                    e = r.a.createElement(E.a, {
                                        href: "#",
                                        icon: ["fas", "check-circle"],
                                        style: {
                                            color: "rgb(50, 173, 116)"
                                        }
                                    });
                                    break;
                                case "failure":
                                    e = r.a.createElement(E.a, {
                                        href: "#",
                                        icon: ["fas", "exclamation-circle"],
                                        style: {
                                            color: "#e74c3c"
                                        }
                                    }), t = r.a.createElement("span", {
                                        className: L.a.failureText
                                    }, "An error occurred. Please try again.");
                                    break;
                                default:
                                    e = void 0, t = void 0
                            }
                            return r.a.createElement("div", null, r.a.createElement("div", {
                                className: L.a.flex
                            }, "location" === this.state.mode ? r.a.createElement("div", {
                                className: _()("button -green", L.a.barButton),
                                onClick: this.handleMode
                            }, r.a.createElement(E.a, {
                                href: "#",
                                icon: ["fas", "globe-asia"],
                                size: "2x"
                            })) : r.a.createElement("div", {
                                className: _()("button -blue", L.a.barButton),
                                onClick: this.handleMode
                            }, r.a.createElement(E.a, {
                                href: "#",
                                icon: ["fas", "clock"],
                                size: "2x"
                            })), "location" === this.state.mode ? r.a.createElement("div", {
                                className: L.a.locationInput
                            }, r.a.createElement("input", {
                                className: _()("input", L.a.locationInputField),
                                type: "text",
                                placeholder: "Add location...",
                                onKeyDown: this.handleLocationQuery,
                                onChange: this.handleQuery,
                                value: this.state.query
                            }), t, r.a.createElement("div", {
                                className: L.a.staticIcon
                            }, e)) : r.a.createElement("div", {
                                className: L.a.timeInput
                            }, r.a.createElement("input", {
                                className: _()("input", L.a.timeInputField),
                                type: "time",
                                onChange: this.props.handleCheckTime
                            }), r.a.createElement("label", {
                                className: L.a.staticLabel
                            }, "Check a time:"))))
                        }
                    }]), t
                }(n.Component),
                B = Object(k.b)(function(e) {
                    return {
                        primaryZone: e.primaryZone
                    }
                }, function(e) {
                    return {
                        handleCheckTime: function(t) {
                            return e({
                                type: "CHECK_TIME",
                                payload: {
                                    checkTime: t.target.value
                                }
                            })
                        },
                        handleAddClock: function(t) {
                            return e({
                                type: "ADD_CLOCK",
                                payload: {
                                    clock: t
                                }
                            })
                        }
                    }
                })(q),
                F = a(17),
                M = a.n(F),
                J = function(e) {
                    return r.a.createElement("div", null, r.a.createElement("div", {
                        className: M.a.flex
                    }, r.a.createElement("div", {
                        className: M.a.smallTextGroup
                    }, r.a.createElement("h1", {
                        className: M.a.attribution
                    }, "Made with \u2764 by Nidal Faurass."))))
                },
                K = a(18),
                U = a(15),
                W = a(41);
            K.b.add(U.c, U.e, U.f, U.b, U.a, U.d, W.a), p.a.initialize("UA-131515629-1"), p.a.pageview(window.location.pathname + window.location.search);
            var G = function(e) {
                function t() {
                    return Object(l.a)(this, t), Object(i.a)(this, Object(m.a)(t).apply(this, arguments))
                }
                return Object(u.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: "App"
                        }, r.a.createElement("div", {
                            className: "wrapper"
                        }, r.a.createElement(f, null), r.a.createElement(B, null), r.a.createElement(j, null), r.a.createElement(J, null)))
                    }
                }]), t
            }(n.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var R = a(19),
                Q = a(30),
                Y = a(13),
                H = {
                    universalDate: g.DateTime.utc(),
                    clocks: [],
                    primaryZone: "",
                    checkTime: "",
                    user: {
                        userEmail: "",
                        userDisplayName: "",
                        userPhoto: "",
                        userRefreshToken: "",
                        userToken: ""
                    }
                },
                X = localStorage.getItem("DaqaiqClocks");
            if (X) {
                H.clocks = JSON.parse(X);
                var V = !0,
                    $ = !1,
                    ee = void 0;
                try {
                    for (var te, ae = H.clocks[Symbol.iterator](); !(V = (te = ae.next()).done); V = !0) {
                        var ne = te.value;
                        if (ne.isPrimary) {
                            H.primaryZone = ne.timezone;
                            break
                        }
                    }
                } catch (ce) {
                    $ = !0, ee = ce
                } finally {
                    try {
                        V || null == ae.return || ae.return()
                    } finally {
                        if ($) throw ee
                    }
                }
            }
            var re = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "UNIVERSAL_UPDATE":
                            return Object(Y.a)({}, e, {
                                universalDate: t.payload.newDate
                            });
                        case "CHECK_TIME":
                            return Object(Y.a)({}, e, {
                                checkTime: t.payload.checkTime
                            });
                        case "PRIMARY_ZONE":
                            var a = t.payload.clockId,
                                n = e.clocks[a].timezone,
                                r = Object(Q.a)(e.clocks);
                            r[a].isPrimary = !0;
                            for (var o = 0; o < r.length; o++) o !== a && (r[o].isPrimary = !1);
                            return localStorage.setItem("DaqaiqClocks", JSON.stringify(r)), Object(Y.a)({}, e, {
                                clocks: r,
                                primaryZone: n
                            });
                        case "ADD_CLOCK":
                            var c = t.payload.clock,
                                l = !0,
                                s = !1,
                                i = void 0;
                            try {
                                for (var m, u = e.clocks[Symbol.iterator](); !(l = (m = u.next()).done); l = !0) {
                                    var p = m.value;
                                    if (c.name === p.name) return e
                                }
                            } catch (ce) {
                                s = !0, i = ce
                            } finally {
                                try {
                                    l || null == u.return || u.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                            var d = Object(Y.a)({}, e, {
                                clocks: [c].concat(Object(Q.a)(e.clocks))
                            });
                            return 0 === e.clocks.length && (c.isPrimary = !0, d.primaryZone = c.timezone), localStorage.setItem("DaqaiqClocks", JSON.stringify(d.clocks)), d;
                        case "DELETE_CLOCK":
                            var h = e.clocks[t.payload.clockId],
                                f = e.clocks.filter(function(e) {
                                    return e !== h
                                });
                            h.isPrimary && f.length > 0 && (f[0].isPrimary = !0), localStorage.setItem("DaqaiqClocks", JSON.stringify(f));
                            var k = f.length > 0 ? f[0].timezone : "";
                            return Object(Y.a)({}, e, {
                                clocks: f,
                                primaryZone: k
                            });
                        case "SIGN_IN":
                            return Object(Y.a)({}, e, {
                                user: t.payload
                            });
                        case "SIGN_OUT":
                            return Object(Y.a)({}, e, {
                                user: {
                                    userEmail: "",
                                    userDisplayName: "",
                                    userPhoto: "",
                                    userRefreshToken: "",
                                    userToken: ""
                                }
                            });
                        default:
                            return e
                    }
                },
                oe = Object(R.b)(re);
            c.a.render(r.a.createElement(k.a, {
                store: oe
            }, r.a.createElement(G, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
                e.unregister()
            })
        }
    },
    [
        [42, 2, 1]
    ]
]);
