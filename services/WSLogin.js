// import { xml2js } from 'xml-js';
function login(user, pass, navigation) {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "text/xml");
    // myHeaders.append("Authorization", "Basic Q1QuQUJBUDoxMjM0NTZ6WkAj");
    // myHeaders.append("Cookie", "sap-usercontext=sap-client=100");


    // var raw = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:urn=\"urn:sap-com:document:sap:rfc:functions\">" + "<soapenv:Header/>" + "<soapenv:Body>" + "<urn:ZWS_LOGIN_HT>" + "<IV_PASSWORD>" + pass + "</IV_PASSWORD>" + "<IV_USERNAME>" + user + "</IV_USERNAME>" + "</urn:ZWS_LOGIN_HT>" + "</soapenv:Body>" + "</soapenv:Envelope>";

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow',
    //     mode: 'no-cors'
    // };

    // fetch("https://s4training.citek.vn:44335/sap/bc/srt/rfc/sap/zbm_ws_login_ht/100/zsn/zbn", requestOptions)
    // .then(response => response.text())
    // .then(result => {
    //     console.log(result)
    //     // const options = { compact: true, ignoreComment: true, spaces: 4 };
    //     // const xmlObject = xml2js(result, options);
    //     // console.log(xmlObject)
    // })
    // .catch(error => alert(error));
}
export default login
