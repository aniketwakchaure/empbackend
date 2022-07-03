const db = require("../models")
const EmployeeModel = db.employee 


//Create
exports.create = (req,res,next)=>{
    let {name,mobile,email,address,password} = req.body
    EmployeeModel.create({
        name,
        mobile,
        address,
        email,
        password
    },(err,result)=>{
        if(err){
            res.json({
                message:"Error while saving customer",
                error: err 
            })
    }
    res.json({
        status:200,
        data:result 
    })
})
}
//Get All
exports.getAll = (req,res,next)=>{
    EmployeeModel.findById(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"successfully retrieved by ID banker",
            data:{
                model:result
            }
        })
    })
}

//Get By ID
exports.getByID = (req,res,next)=>{
    EmployeeModel.findById(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrived by ID",
            data:{
                    model:result
            }
        })
    })
}
//Get by Email
exports.getByEmail = (req,res,next) =>{
    EmployeeModel.find({"email":req.body.email},(err,result) =>{
        if(err)
        next(err)
        res.json({
            status:"success",
            message:"successfully retrieved",
            data:{
                model:result
            }
        })
    })
}

//update
exports.updateById = (req,res,next)=>{
    EmployeeModel.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated by ID",
            data:{
                model:result
            }
        })
    })
}

//Delete by ID
exports.deleteById = (req,res,next)=>{
    EmployeeModel.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully delete By ID",
            data:{
                model:result 
            }
        })
    })
}

//Delete all
exports.deleteAll = (req,res,next)=>{
    EmployeeModel.remove({},(err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted All",
            data:{
                model:result
            }
        })
    })
}
