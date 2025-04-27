const User = require("./userModel")



async function addUser (req,res){
    try{
        const formData = req.body //get user data form request
        const validation = []
      //  console.log(formData)
       if(!formData.name || typeof formData.name !== 'string'){
         validation.push("name is required and must be string")
       }
       if(!formData.email || typeof formData.email !== 'string'){
         validation.push("email is required and must be string")
       }
       if(!formData.password || typeof formData.password !== 'string'){
         validation.push("password is required and must be string")
       }
       if(!formData.phone || typeof formData.phone !== 'string'){
         validation.push("phone number is required and must be string")
       }
       if(!formData.address || typeof formData.address !== 'string'){
         validation.push("address is required and must be string")
       }
       if(validation.length > 0){
        return res.json({
            status:422,
            success:false,
            message:"validation error",
            error:validation
        })
       }
       const user = new User(req.body)
       await user.save()

       res.send({
        status:201,
        success:true,
        message:"new user is created",
        data:user
       })

   }catch(err){
        res.send({
            status:500,
            success:false,
            message:"intenal server error",
            error:err.message
        })
   }
}





module.exports = {addUser}