// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {
        let wallet = {};
        if (currency > 10000) {
            wallet['error'] = "You are rich, my friend! We don\'t have so much coins for exchange";
            return wallet;
        }
        let rest = currency;
        if (currency >= 50) {
            wallet['H'] = Math.floor(currency / 50);
            rest = currency % 50;
        }
        if (rest >= 25) {
            wallet['Q'] = Math.floor(rest / 25);
            rest = rest % 25;
        }
        if (rest >= 10) {
            wallet['D'] = Math.floor(rest / 10);
            rest = rest % 10;
        }
        if (rest >= 5) {
            wallet['N'] = Math.floor(rest / 5);
            rest = rest % 5;
        }
        if (rest >= 1) {
            wallet['P'] = rest / 1;
        }
    return wallet
}