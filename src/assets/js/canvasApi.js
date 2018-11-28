export function drawImg(ctx ,obj) {
    let self =  this
    return new Promise((reslove, reject) => {
        ctx.drawImage(obj.imageResource , obj.sx, obj.sy, obj.sWidth, obj.sHeight, obj.dx, obj.dy, obj.dWidth, obj.dHeight)
        ctx.draw(false, (res)=>{
            console.log(res)
            reslove(res)
        })
    })
}


