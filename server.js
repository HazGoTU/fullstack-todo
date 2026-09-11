const app = require('./src/app')
const PORT = 3000;

(async(req,res)=>{
    try{
        app.listen(PORT, ()=>console.log(`app listen on PORT ${PORT}`))
    }catch(error){
        console.error(`failed to connection server`,error)
    }
})
();