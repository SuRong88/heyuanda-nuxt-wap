import axios from 'axios';
// import Vue from 'vue'
// import URL from '@/assets/js/url.js'

axios.defaults.timeout = 10000;
axios.defaults.baseURL ='';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    config.headers = {
      // 'X-Token': window.vm.getToken(),
      // 'Project-Id': window.vm.getItemId(),
      'Content-Type':'application/json;charset=UTF-8'
    }

    // if (config.url != URL.login && config.url != URL.adminRole) {
    //   if (!window.vm.getToken()) {
    //       // window.vm.$store.commit('updateLogin', false)
    //       window.vm.$router.push({path: '/login'})
    //   }
    // }

    // // if(token){
    // //   config.params = {'token':token}
    // // }
    // if (config.url != URL.crfTemplateList && window.vm.$route.path != '/build') {
    //   window.vm.loading()
    // }
// console.log(app.$successToast(1))
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  res => {
    if(res.data.code != 0){
      // window.vm.errorCode(window.vm, res.data)
      return Promise.reject(res)
    }
    return res;
  },
  error => {
    // window.vm.$message.error("连接超时")
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
function get(url,params={}){
  this.$loadStart()
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      errorAction(this, err, reject)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 function post(url,data = {}){
  this.$loadStart()
  return new Promise((resolve,reject) => {
    axios.post(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      errorAction(this, err, reject)
    })
  })
 }

 /**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function del(url,data = {}){
  this.$loadStart()
  return new Promise((resolve,reject) => {
    axios.delete(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      errorAction(this, err, reject)
    })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put(url,data = {}){
  this.$loadStart()
  return new Promise((resolve,reject) => {
    axios.put(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      errorAction(this, err, reject)
    })
  })
}

function errorAction(that, data, reject){
  // 有错误码的情况
  if (data.data && data.data.code != 0) {
    that.$errorCode(data.data)
    reject(data)
  } else {
    // 没有错误码的情况，是系统报错（404、504之类的）
    that.$errorToast("连接超时")
  }

}


export default ({ app }, inject) => {
  inject('post', post),
  inject('get', get),
  inject('del', del),
  inject('put', put),
  inject('axiosAll', function(option){
    this.$loadStart()
    return new Promise((resolve,reject) => {
      axios.all(option)
      .then(response => {
        resolve(response)
      }, err=>{
        errorAction(this, err, reject)
      })
    })
  })
}

