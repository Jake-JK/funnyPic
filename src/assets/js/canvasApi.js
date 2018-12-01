
if(!Promise.wrapForCanvas) {
    Promise.wrapForCanvas = function(fnName) {
        return function() {
            var args = [].slice.call(arguments);
            var ctx = args.splice(0, 1)[0]
            return new Promise((reslove, reject) => {
                args = args.concat(function(err, v) {
                    reslove(v)
                })
                ctx[fnName]["apply"](ctx, args)
            })
        }
    }
}

if(!Promise.wrap) {
    Promise.wrap = function(fn){
        return function() {
            var args = [].slice.call(arguments)
            var firstArg = args[0];
            return new Promise((reslove, reject) => {
                if(typeof firstArg === "object"){
                    firstArg.success = function(v){
                        reslove(v)
                    }
                    firstArg.fail = function(err) {
                        reject(err)
                    }
                }else{
                    args = args.concat(function(v){
                        reslove(v)
                    }, function(err){
                        reject(err)
                    }) 
                }
                fn.apply(null, args)
            })
        }
    }
}

export function drawImg(ctx ,obj) {
    let self =  this
    return new Promise((reslove, reject) => {
        ctx.drawImage(obj.imageResource , obj.sx, obj.sy, obj.sWidth, obj.sHeight, obj.dx, obj.dy, obj.dWidth, obj.dHeight)
        reslove(obj)
    })
}

export let _draw = Promise.wrapForCanvas("draw")

export let _canvasToTempFilePath = Promise.wrap(wx.canvasToTempFilePath)


export let _saveImageToPhotosAlbum = Promise.wrap(wx.saveImageToPhotosAlbum)


export let _previewImage = Promise.wrap(wx.previewImage)