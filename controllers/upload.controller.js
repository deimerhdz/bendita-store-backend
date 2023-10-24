const Product = require('../models/product');
const Store = require('../models/store');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const updatedImageCloudinary =async (req=request,res=response)=>{
    const {id,collection} = req.params;
        let model;
        switch (collection) {
            case 'stores':
                model= await Store.findByPk(id);
                    if(!model){
                        return res.status(400).json({
                            msg:'does not exist store with id'
                        })
                    }
                break;
            case 'products':
                 model= await Product.findByPk(id);
                    if(!model){
                        return res.status(400).json({
                            msg:'does not exist product with id'
                        })
                    }
                break;
            default:
                return res.status(500).json({msg:'You forgot validate this'})
        }
        if(model.image){
            const nameArr = model.img.split('/');
            const name = nameArr[nameArr.length-1];
            const [public_id] = name.split('.');
            cloudinary.uploader.destroy(public_id);
          
        }
        const {tempFilePath}= req.files.file;
        const {secure_url} = await cloudinary.uploader.upload(tempFilePath)
        model.image = secure_url
        await model.save();
        
        res.json(model);
    }

    module.exports = {
        updatedImageCloudinary
    }