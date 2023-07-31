import Sale from '../model/sale.model.js'
import User from '../model/user.model.js'

export const getSales = async (req,res)=>{    
    try {
        const salesFound = await Sale.find({userId: req.user.id})
        console.log(salesFound)
        return res.json(salesFound)        
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const getSaleById = async (req,res)=>{
    try {
        const saleFound= await Sale.findById(req.params.id)
        res.json(saleFound)
    } catch (error) {
        return res.sendStatus(401).json({message:error.message})        
    }
}

export const createSale = async (req,res)=>{
    try {
        const userId = req.user.id
        const newSale= new Sale({userId , cart:req.body})
        const response = await newSale.save()        
        return res.json(response)        
    } catch (error) {
        return res.sendStatus(401).json({message:error.message})        
    }
}

export const updateSale = async (req,res)=>{
    console.log(req.body)
    try {
        const userId = req.user.id
        const response = await Sale.findByIdAndUpdate(req.params.id, {userId, cart:req.body}, {new:true})
        return res.json(response)        
    } catch (error) {
        return res.sendStatus(401).json({message:error.message})        
    }
}

export const deleteSale = (req,res)=>{    
    try {
        Sale.findByIdAndDelete(req.params.id)
        return res.status(200)        
    } catch (error) {
        return res.sendStatus(401).json({message:error.message})        
    }
}