
export class GenerateRandomKey   {
    
     private static beforeKey :string  = "-1";

     
     public static generateKey() : string {
          
          let tmp = new Date().getTime().toString(32);
          if(tmp !== this.beforeKey) {
               this.beforeKey = tmp;
               return tmp;
          }
          while (true)
          {
               tmp = new Date().getTime().toString(32);
               if(tmp !== this.beforeKey) {
               this.beforeKey = tmp;
               return tmp;
                                           }
          }
     }
} 