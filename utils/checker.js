export function isMobileNumber(v) {
    if (/^\d{9,11}$/.test(Number(v))) return true;
    throw '手机格式不正确';
}

export function isWalletPassword(v) {
    if (/^\d{6}$/.test(Number(v))) return true;
    throw '密码格式不正确';
}
