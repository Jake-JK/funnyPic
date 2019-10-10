import wepy from 'wepy'

//轻提示
export async function toast(title) {
  return new Promise((resolve, reject) => {
    wepy.showToast({
      title: title, //提示的内容,
      icon: 'none', //图标,
      duration: 2500, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: (res) => {
        resolve(res)
      }
    });
  })
}

//选择图片
export async function chooseImage(maxNum, sourceType = ['album']) {
  return new Promise((resolve, reject) => {
    wepy.chooseImage({
      count: maxNum, //最多可以选择的图片张数,
      sizeType: ['original'],
      sourceType: sourceType,
      success: (res) => {
        resolve(res)
      }, //返回图片的本地文件路径列表 tempFilePaths,
      fail: (err) => {
        reject(err)
      }
    });
  })
}

//获取图片信息
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

//showActionSheet
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

//扩展对象
export function extend(o, p) {
  for (var key in p) {
    o[key] = p[key]
  }
  return o
}

//showLoading
export function showLoading(title, mask) {
  wepy.showLoading({
    title: title ? title : "请稍后...", //提示的内容,
    mask: !mask, //显示透明蒙层，防止触摸穿透,
  });
}

//showModel
export function showModel(obj) {
  return new Promise((resolve, reject) => {
    wepy.showModal({
      title: obj.title ? obj.title : "提示", //提示的标题,
      content: obj.content, //提示的内容,
      showCancel: obj.showCancel === 'show', //是否显示取消按钮,
      cancelColor: '#000000', //取消按钮的文字颜色,
      confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
      confirmColor: '#3CC51F', //确定按钮的文字颜色,
      success: res => {
        resolve(res)
      }
    });
  })
}

export function getHandImgHD(imageUrl) {
  imageUrl = imageUrl.split('/');
  if (imageUrl[imageUrl.length - 1] && (imageUrl[imageUrl.length - 1] == 46 || imageUrl[imageUrl.length - 1] == 64 || imageUrl[imageUrl.length - 1] == 96 || imageUrl[imageUrl.length - 1] == 132)) {
    imageUrl[imageUrl.length - 1] = 0;
  }
  imageUrl = imageUrl.join('/'); //重新拼接为字符串
  return imageUrl
}


