
const privateKeyPem = `-----BEGIN PRIVATE KEY-----
                MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCMWlIdcQOEViX
                eX65S4MCqmc51UREBgxNsf94lqNYx725XoiCJ8/pJaz43NQmH690ypAu04Q/5j0+
                sRl+nV3ihZcvj/Tjd2yzgt5lYW0C5hoVCi3IV87ImHb4+RdSyiCfLINj5euoni1v
                aMsz/PiG1poKQ8to5tHK0FbIlXvGxswpoWGtA6FqvxD2mwAgJHAEN7BaOaa7vImv
                dMje5k6Jue6iRBeYq/zEx+m5rS1gktgNCpT2+LgUGH1xatp+/iHUsZjF6lWrX2Yp
                kF8RKBoNSjapuwfNLqDLt9h3MhwhGhg25ESxlyZOGNCCputlI7YDEN372EreUiky
                N2APft0JAgMBAAECggEADwjoT9XeUgCBzWh4qTvxbrlmuJGMcX/OYA2R6/Itv2fn
                hnyNMRaIAFMMa1AdlL4LRY2RUC7MJG5c+4eWo7jnVexl4ibRHPNYFSXithKu7/SE
                vHBHTyWNOvai72/JoH1JvUki+w8ICcwFVITWhrXlP/tJfdX1369POtaagXkhVihX
                ixKqFd8K6WcQxbtDBgalXjgXMJX8Te/JDPPContbUvGnXnaalILDcWW2mZV+1OIX
                FIffjFJ0UcFkjxV/xBC0uEyB3cwsKVELRbhMhoqHd9cnBr8LblcR5ebb3p0XOLdG
                NAa2uz14PPfYa2Ljdt8DPrJMtt+wyBeYgxzU8VD4AQKBgQDhvpj8EI30Ud06tt+H
                pIUMI0+sZV5dUMihu1CZhQpXDeYn8BSTFX4lLy6n7dXieP+l880QG2ZEHidgxsGD
                IUnvAfVoIyc8QtcZeUodQ5BM7p4Kio2a0D+avjdVQ1uNwmRRSmQbng7mN0oyBDEx
                4+dzSLAl48pFEfOVSHxdHIwLgQKBgQDcOEQtE5LMdOj+ERybB2UYwqlh3cpj9cuy
                CEgg6L5PW7CLQZNC98JhAtJ4n71whg1/Dxn+8d9PuYNpITlKxlH6ECAURAJE0u2U
                ftoSoyiz3+CZnExLUPauNwmOIIQ5hGySylkSRhOHGvCn0O952EswYLHgszqKMt8a
                LxYgm6s1iQKBgCpwq9BPyHBTZ7UfJl0Y+A51IQh3Mkt24ZFOZvPFyFDfgxKlFykj
                1EhnW20k0J44Q0/OyxGpJQvPY3XVSBJAEudFRf7jBQBWTJw0alOgHSPphHrU25Rs
                bFjKRBrag/7dugBybOmoSILNiDxo/1qyzxOkacFl1uQvYM0DCKZ0tHuBAoGADOc/
                F2UONOykuj5Gbs8AHXNKeXGFalX8mXHiyArbG8tDjOVKu6HIweZobqjtcKpqIAfC
                fi2t5/32tTI9KSR1qTFIr+dMOrwhL5I/NNhaii+T+WwvDDqyOYMADFPba4NW2UMB
                9RAmFMR/VVXosjr6LNt9kKzvwSk56U7Y/RAh+AECgYEAtzUzzqLuDYZdb2XdkE1d
                f1X5PoLeEPs8PDcKOW6AH3UYW/df/jEApQ/4Yhw7HlZ8SSOHbV8ONLTQXkCpbN/W
                zCzLlSDj81GFRyhhAfG6XT8d76avnqqgR4TcD0eoayTv+yfsVRq4rIGKM06Ysga5
                fkbequq8d0zmi0Y8DlxORpg=
                -----END PRIVATE KEY-----`;

const encrypted_key = 'L4C9nHG9ShNHDAqGTMsyR9JcpTAmnQueVYkwyUeKuVF3Ob/z4omE7H6VtkKaZVoVN4415Ik/3BN/0SxHRtHLMSTYk3vxPG1McyC+0cXB2GgM7AaEn+hhZ1jjp30m6R0z1jQqziMst3uREaRp4+W2cIdgAqaTg8AaVhaKr9jrZQ0fiVTq3u+OinDIt2rZcloaBJ+D94YbRXJreIgMEWtjkD5BKkhLCjUD/ZuV6JtCx2yHJau6fxzsUmaVGygzMYvOYIAsG/F4+hCmE63SC6R6DUgfOSCnj6l/c970suRAGRpBYlIptI0INpUSZOrvlRzMyu2L4j6n2ebRZz3x7Ia9ag==';
const encrypted_message = '477f2fb2dd459e6fa3defa01ac734f2cc9c071436bdbdee60c9ef1200d5cdebe889eab8e6bfbc29a94ef80ba0aadd6e16c136509a14fce21cfb8f405559f84b02e646d745622e89da8438abb21725cb0'

const textEncoder = new TextDecoder();
const divMessage = document.querySelector(".message");


function removeLines(str) {
  return str.replace("\n", "");
}

function base64ToArrayBuffer(b64) {
  var byteString = window.atob(b64);
  var byteArray = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }
  return byteArray;
}

function hex_decode(string) {
  let bytes = [];
  string.replace(/../g, function (pair) {
    bytes.push(parseInt(pair, 16));
  });
  return new Uint8Array(bytes).buffer;
}

function pemToArrayBuffer(pem) {
  var b64Lines = removeLines(pem);
  var b64Prefix = b64Lines.replace('-----BEGIN PRIVATE KEY-----', '');
  var b64Final = b64Prefix.replace('-----END PRIVATE KEY-----', '');

  return base64ToArrayBuffer(b64Final);
}

async function decrytedRSA(privateKeyPem, encrypted_key) {
  const privateKey = await crypto.subtle.importKey(
    "pkcs8", // "pkcs8" (private only)
    pemToArrayBuffer(privateKeyPem),
    {
      name: "RSA-OAEP",
      hash: { name: "SHA-256" } // or SHA-512
    },
    true,
    ["decrypt"] //"verify" for public key import, "sign" for private key imports
  )
  const decryptedKey = await crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    base64ToArrayBuffer(encrypted_key)
  );
  return textEncoder.decode(decryptedKey)
}

async function decryptedAES(encrypted_message) {
  const decryptedKey = await decrytedRSA(privateKeyPem, encrypted_key);
  const [symetric_key, iv] = decryptedKey.split(',');

  const key = await crypto.subtle.importKey(
    "raw", // "pkcs8" (private only)
    hex_decode(symetric_key),
    { name: "AES-CBC" },
    true,
    ["encrypt", "decrypt"] //"verify" for public key import, "sign" for private key imports
  )

  const decryptedSecret = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv: hex_decode(iv) },
    key,
    hex_decode(encrypted_message)
  );
  return textEncoder.decode(decryptedSecret)
}

decryptedAES(encrypted_message).then((secret) => {
  divMessage.textContent = secret
})