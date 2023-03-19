let user = "svxy"

function _0x47c9() {
    var _0x46400e = ['count', '1444kpZFLX', '3389238nbXsJD', '1275480lYfIZU', '358KuXyCL', '215369AVMwha', 'data', 'https://api.kickalerts.live/api/v1/proxy/viewcount', '1178700GlVlKS', 'innerHTML', '42KXmCZn', '12315RekTyP', '377736bqWrux', '1753BJOooF', '44kKKtIM', 'log'];
    _0x47c9 = function() {
        return _0x46400e;
    };
    return _0x47c9();
}

function _0x168f(_0x4b5253, _0x5b96ba) {
    var _0x47c9ab = _0x47c9();
    return _0x168f = function(_0x168f86, _0x5d1eb7) {
        _0x168f86 = _0x168f86 - 0x1c6;
        var _0x24c666 = _0x47c9ab[_0x168f86];
        return _0x24c666;
    }, _0x168f(_0x4b5253, _0x5b96ba);
}(function(_0x5e9584, _0x2f8735) {
    var _0x455103 = _0x168f,
        _0x45148f = _0x5e9584();
    while (!![]) {
        try {
            var _0x1779a5 = -parseInt(_0x455103(0x1c7)) / 0x1 * (-parseInt(_0x455103(0x1ce)) / 0x2) + -parseInt(_0x455103(0x1c6)) / 0x3 + parseInt(_0x455103(0x1cb)) / 0x4 * (parseInt(_0x455103(0x1d5)) / 0x5) + -parseInt(_0x455103(0x1d4)) / 0x6 * (parseInt(_0x455103(0x1cf)) / 0x7) + -parseInt(_0x455103(0x1cd)) / 0x8 + parseInt(_0x455103(0x1cc)) / 0x9 + -parseInt(_0x455103(0x1d2)) / 0xa * (parseInt(_0x455103(0x1c8)) / 0xb);
            if (_0x1779a5 === _0x2f8735) break;
            else _0x45148f['push'](_0x45148f['shift']());
        } catch (_0xec4744) {
            _0x45148f['push'](_0x45148f['shift']());
        }
    }
}(_0x47c9, 0x94454));
async function update() {
    var _0x446d91 = _0x168f;
    axios['post'](_0x446d91(0x1d1), {
        'username': user
    })['then'](_0x223c5d => {
        var _0x4fce02 = _0x446d91;
        console['log'](_0x223c5d[_0x4fce02(0x1d0)]), _0x223c5d[_0x4fce02(0x1d0)][_0x4fce02(0x1ca)] && (document['getElementById'](_0x4fce02(0x1ca))[_0x4fce02(0x1d3)] = _0x223c5d[_0x4fce02(0x1d0)]['count']);
    }, _0x4b484a => {
        var _0x4c77a3 = _0x446d91;
        console[_0x4c77a3(0x1c9)](_0x4b484a);
    });
}
setInterval(update, 0x7530), update();