import wepy from 'wepy'

export async function toast(title) {
  return new Promise((resolve, reject) => {
    wepy.showToast({
      title: title, //提示的内容,
      icon: 'none', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: (res) => {
        resolve(res)
      }
    });
  })
}


export async function chooseImage(maxNum) {
  return new Promise((resolve, reject) => {
    wepy.chooseImage({
      count: maxNum, //最多可以选择的图片张数,
      success: (res) => {
        resolve(res)
      }, //返回图片的本地文件路径列表 tempFilePaths,
      fail: (err) => {
        reject(err)
      }
    });
  })
}


export async function getImageInfo(src) {

  return new Promise((resolve, reject) => {
    wepy.getImageInfo({
      src: src, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    });

  })
}

export function showActionSheet(itemList, itemColor) {
  return new Promise((resolve, reject) => {
    wepy.showActionSheet({
      itemList, //按钮的文字数组，数组长度最大为6个,
      itemColor: '#000000', //按钮的文字颜色,
      success: (res) => {
        resolve(res)
      }
    });
  })
}
//获取上一页的页面栈
export function getPrePage() {
  var curPages = getCurrentPages();
  return curPages[curPages.length - 2]
}


export function extend(o, p) {
  for(var key in p){
    o[key] = p[key]
  }
  return o
}

export function showLoading(title,mask){
  wepy.showLoading({
    title: title? title : "请稍后...", //提示的内容,
    mask: !mask , //显示透明蒙层，防止触摸穿透,
  });
}