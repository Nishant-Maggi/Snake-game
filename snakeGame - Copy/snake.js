class Snake{
    constructor(x,y){
        
        this.body = [];

        this.sqr = createSprite(x,y,20,20);

        this.width = 20;
        this.height = 20;

        this.body.push(this.sqr);     
        
    }

    display(){

        for(var index in this.body){
            var pos = this.body[index].position ;
            rect(pos.x,pos.y,this.width,this.height);;
        }
    }
}