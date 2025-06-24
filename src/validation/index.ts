export const productvalidation=(
    product:{title:string;
        description:string;
        imageURL:string;
        price:string;}
)=>{
    //return an object
    const  errors:{
        
        title:string;
        description:string;
        imageURL:string;
        price:string;
    }={
        title: "",
    description: "",
    imageURL: "",
    price: "",
    }
    const validurl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);


    if(!product.title.trim()||product.title.length<10||product.title.length>80){
        errors.title="producy title must be between 10 &80"
    }
    if(!product.description.trim()||product.description.length<10||product.description.length>80){
        errors.title="productdescription         "
    }
    if(!product.imageURL.trim()||!validurl){
        errors.imageURL="not correct image"
    }
    if(!product.price.trim()||isNaN(Number(product.price))){
        errors.price="enter valid price"
    }

    

    
    return {errors}
}