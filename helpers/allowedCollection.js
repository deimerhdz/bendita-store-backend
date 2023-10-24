const allowedCollection = (colleccion,allowedCollection=[])=>{
    const allowed = allowedCollection.includes(colleccion);
    if(!allowed){
        throw new Error(`Collection ${colleccion} is not allowed`)
    }
    return true;
}

module.exports={
    allowedCollection
}