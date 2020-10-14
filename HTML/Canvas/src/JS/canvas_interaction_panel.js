class Panel {
    constructor() {
        this.scale = 0;
        this.angle = 0;   
    }
    draw() {
        ctx.fillStyle = 'rgba(255,240,0,0.7)';
        ctx.resetTransform(); //setTransform(1,0,0,1,0,0); 과 같음
        ctx.translate(oX, oY); //기준점 옮김
        ctx.scale(this.scale, this.scale);
        ctx.rotate(canUtil.toRadian(this.angle));
        
        ctx.translate(-oX, -oY);
        ctx.fillRect(oX-150, oY-150, 300,300);
        ctx.resetTransform();
    }

    showContent() {
        ctx.fillStyle = '#fff';
        ctx.fillText(selectedBox.index, oX, oY);
    
    }
    }