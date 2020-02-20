import Vue from 'vue'

let loading = null;

export default ({
  app
}, inject) => {

  // 错误提示
  inject('errorToast', function(msg, duration = 2000) {
      if (msg) {
        this.$message({
          message: msg,
          // type: 'error',
          duration: duration,
          center: true,
          showClose: false,
          customClass: 'errorToast',
          iconClass: 'errorToast-icon'
        });
      }
    }),

    // 成功提示
    inject('successToast', function(msg, duration = 2000) {
      if (msg) {
        this.$message({
          message: msg,
          // type: 'success',
          duration: duration,
          center: true,
          showClose: false,
          customClass: 'successToast',
          iconClass: 'successToast-icon'
        });
      }
    }),

    // 加载
    // 显示loading
    inject('loadStart', function(text = '加载中...') {
      // loading = this.$loading({
      //   lock: true,
      //   text: text,
      //   background: 'rgba(255,255,255,0.7)'
      // });

    }),

    // 隐藏loading
    inject('loadEnd', function() {
      // loading.close();
    }),

    // 弹窗
    inject('wDialog', function(title, content, cancelButtonText, confirmButtonText, showCancelButton, cb_ok, cb_err) {
      this.$confirm(content, title, {
        cancelButtonText: cancelButtonText || '取消',
        confirmButtonText: confirmButtonText || '确定',
        showCancelButton: showCancelButton,
        dangerouslyUseHTMLString: true,
        center: true,
        customClass: 'myDialogBox',
        distinguishCancelAndClose: true,
        callback: function(action) {
          if (action == "confirm") {
            cb_ok && cb_ok();
          } else if (action == "cancel") {
            cb_err && cb_err();
          }
        }
      })
    }),

    // 指定滚动条位置
    inject('wSetScroll', function(left, top) {
      window.scrollTo(left, top);
    }),

    // textarea格式转换
    inject('textFormat', function(str) {
      if (str) {
        return str.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
      } else {
        return '';
      }

    }),
    inject('admin_base', function(options, cb_ok_array, cb_ok, cb_err_array) {
      this.$loadStart();
      let array = [];
      let error = false;
      this.$axiosAll(options).then(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].code == 0) {
            cb_ok_array && cb_ok_array[i] && cb_ok_array[i](res[i]);
          } else {
            this.$errorCode(res[i], cb_err_array && cb_err_array[i]);
          }
        }
        cb_ok && cb_ok();
        this.$loadEnd();
      }, res => {
        this.$errorToast('系统出错，请稍后再试');
      })
    }),

    // 判断页面是否滚动到底部
    inject('scrollBottom', function(cb) {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        cb && cb();
      }

    })

}
