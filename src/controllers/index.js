const {Count} = require("../db")
const Mutation=async(req,res)=>{
    let dna = req.body.dna 
    let dnaArray = []
    var contador=0 
    let dnaIverted
    let dnaOblique=[[],[],[],[],[]]
    let dnaObliqueInv=dnaOblique
    let final 
    let transpose=(a)=>{
        return Object.keys(a[0]).map((c)=> {
            return a.map((r)=>{ return r[c]; });
        });
    }
    
    try{
        //Validaciones
        for(let i=0; i<dna.length;i++){
            if(dna[i].length!==6){
                return res.status(400).send("Invalid DNA")
            }
        }
        for(let i = 0; i<dna.length;i++){
            dnaArray.push(dna[i].split("",6))}
    
        for (let i=0;i<dnaArray.length;i++){
            for(let j=0;j<6;j++){
                if(dnaArray[i][j]!=="A"&&dnaArray[i][j]!=="T"&&dnaArray[i][j]!=="C"&&dnaArray[i][j]!=="G"){
                    return res.status(400).send("Incorrect nitrogenous base")
                }
            }
        }
        
        //-----------------------------------------------------------------------------

            
        dnaIverted = transpose(dnaArray)
    
       
    
        for(let i=0; i<3; i++){
            for(let j=0; j<dnaArray.length; j++){
                dnaOblique[i].push(dnaArray[j][j+i])
            }
        }
    
        for(let i=1; i<3; i++){
            for(let j=0; j<dnaIverted.length;j++){
                dnaOblique[i+2].push(dnaIverted[j][j+i])
            }
        }
    
        for(let i=0; i<3; i++){
            for(let j=5; j>=0; j--){
                dnaObliqueInv[i].push(dnaArray[5-j][j-i])
            }
        }
    
        for(let i=1; i<3; i++){
            for(let j=5; (j+1-i)>0; j--){
                dnaObliqueInv[i+2].push(dnaArray[5-j+i][j])
            }
        }
    
       final = dnaArray.concat(dnaIverted).concat(dnaOblique).concat(dnaObliqueInv)
    
        for(i=0;i<final.length;i++){
            for(j=0;j<2;j++){
                if(final[i][j]==final[i][j+1]&&final[i][j+1]==final[i][j+2]&&final[i][j+2]==final[i][j+3]){
                    contador+=1
                }
            }
        }
     
    
        if(contador>1){
            await Count.create({
                mutation: true,
                dna: dna
            })
            
           return res.status(200).send(true)
        }
        else {
            await Count.create({
                mutation: false,
                dna: dna
            })
            return res.status(404).send(false)}
   }
    catch(e){
     res.status(400).send("DNA ya registrado  "+ e)
 }
 

}


const Stats= async(req,res)=>{
    let trueMutations = await Count.findAll({
        
    })
    let falseMutation = await Count.findAll({
        where:{
            mutation: false
        }
    })
    let as = trueMutations.length
    let sa = falseMutation.length
    let ss = (as/sa)
    res.status(200).json({"count_mutations":`${as}`, "count_no_mutation":`${sa}`, "ratio":`${as/sa}`})

}





module.exports={
    Mutation,
    Stats
}

