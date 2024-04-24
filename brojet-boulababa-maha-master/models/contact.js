const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactschema= new schema ({

    fullname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    avatar:{
        type:String,
    },
    iduser:{
        type:String,
    },
    
})
const contact=mongoose.model('listofcontact',contactschema)
module.exports=contact