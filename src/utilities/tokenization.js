import CryptoJS from "crypto-js";

const key = "`Ck|u;4Euz-7K5fk4RWH3O|7p2NnWH~;B@OAw>|_A#nrrrhM<M2mI|Dy5]OVf{#a"

export const tokenize = (data) => {
    return CryptoJS.AES.encrypt(data, key,{
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
}

export const detokenize = (data) => {
    return CryptoJS.AES.decrypt(data, key,{
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
}