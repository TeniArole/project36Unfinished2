class Food{
    constructor(){
      this.foodStock = 0;
      this.image = loadImage("Images/Milk.png")
      width = this.width
      height = this.height  
    }

    getFoodStock(){
      //returns the amount foodStock
      return this.foodStock
    }

    updateFoodStock(foodStock){
      this.foodStock = foodStock
    }

    deductFood(){
      if(this.foodStock > 0){
        this.foodStock = this.foodStock - 1
      }
    }

    display(){
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80
            y=y+50
          }
          this.image(this.image,x,y,50,50)
          x=x+30
        }
      }
    }

    
}