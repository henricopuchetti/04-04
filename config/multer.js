//importar o pacote multer
const multer = require('multer')

//configurar o armazenamento
const armazenamento = multer.diskStorage(
    {
//pasta de destino
destination:(req,file,cb)=>{
    cb(null,'./uploads/')
},
//nome do arquivo
filename:(req,file,cb)=>{
    cb(null,Date.now()+file.originalname)
}
}
)

var upload = multer({
    storage: armazenamento,
    fileFilter: (req,file,cb)=>{
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true)
        } else{
            cb(null, false)
            return cn(new Error("Tipo de arquivo invalido"))
        }
    },
    limits: {fileSize: 100000}
}).single("imagem")

module.exports = upload


