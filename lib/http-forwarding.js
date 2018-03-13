var ForwardingModule = require("store-forward-system").Abstractions.ForwardingModule;
var request = require("request");
class HTTPForwarding extends ForwardingModule{
  constructor(){
    super("http");
  }

  async forward(key, doc, forwardingInfo){
    var {
      url,
      headers,
      method
    } = forwardingInfo;

    return new Promise((resolve, reject) => {
      request({method, url, headers, form:doc}, (error, result, body) => {
        var resultHeaders = result.headers;
        if(error){
          resolve({error:error, headers:resultHeaders});
          return;
        }
        resolve()
      })
    })
  }

  async retry(key, doc, forwardingInfo){
    return this.forward(key, doc);
  }

  async returnBack(key, doc, forwardingInfo){

  }
}

module.exports = HTTPForwarding;
