const mongoose = require('../database')

const BaseSchema = new mongoose.Schema({
    
    fachada:{
        type: String ,
        select: false,
        require: true , 
    },
    titulo:{
        type: String ,
        require: true ,
        unique: true,
    },
    cidade: {
        type: String ,
        require: true ,
        enum: ["Rio de Janeiro", 
                 "Nova York", 
                 "Tóquio"],
    },
    tecnologias: {
        type: [String],
        require: true,
        anyOf: ["laboratório de nanotecnologia", 
                    "jardim de ervas venenosas", 
                    "estande de tiro",
                    "academia de parkour"],
        
    },
})

const Base = mongoose.model('Base', BaseSchema)
module.exports =  Base


