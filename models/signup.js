var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
//mongoose.connect('mongodb://localhost:27017/covid19', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb+srv://pankajkumarbijarniya:Pankaj@123@cluster0.kbvks.mongodb.net/thecovidinfo?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://lucky:Lucky123@cluster0.xlvsyhs.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

var conn=mongoose.connection;
var signupSchema=new mongoose.Schema({
    email: { 
      type:String, 
      required: true, 
      index: { unique: true }
    },
    name: { 
      type:String, 
      required: true
    },
    phone: { 
      type:String, 
      required: true
    },
    country: { 
      type:String, 
      required: true
    },
    password: { 
      type:String,
      required: true
    },
    date: { 
      type:Date,
      default: Date.now 
    }
});
const signupModel= mongoose.model('signups', signupSchema);
module.exports=signupModel;