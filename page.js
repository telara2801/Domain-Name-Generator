//console.log("hola tulio");
let pronoum=["the","our","We"];
let adj=["great","big","small"];
let noum=["jogger","racoon","monkey"]
var dotcom=[".com",".es",".edu"]

for (let item of pronoum){
     //console.log(item);
     for(let item2 of adj){
        //console.log(item,item2);
        for(let item3 of noum){
            //console.log(item,item2,item3);
            for(let item4 of dotcom){
                //console.log(item,item2,item3,item4);
                const ArrayShow=[item,item2,item3,item4];
                //console.log(ArrayShow);
                ////*******armafdo */
                const index = pronoum.findIndex(pronom => pronom === item);
                const index2 = adj.findIndex(adj => adj === item2);
                const index3 = noum.findIndex(noum => noum === item3);
                const index4 = dotcom.findIndex(dotcom => dotcom === item4);
                const texto=ArrayShow;
                // console.log(texto); 
                // console.log(index);
                // console.log(index2);
                // console.log(index3);
                // console.log(index4); 
                //console.log(pronoum[index]+adj[index2]+noum[index3]+dotcom[index4]); 
                var finaltext=ArrayShow.join('');
                console.log(finaltext);                  
            }
        }
     }
}