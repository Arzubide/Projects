import servidor from "./servidor"

const port = process.env.PORT || 4000 // process.env.PORT es el puerto que asigna una vez que esta en produccion
servidor.listen(port, ()=>{
    console.log(`listen from port ${port}`)
    
})
