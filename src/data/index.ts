import { Icategory, Iforminput, Iproduct } from "../interfaces";
import { v4 as uuid} from 'uuid';

export const productlist:Iproduct[]=[
    {
        id:uuid(),
        title :"2022 Geneis GV70",
        description :"A luxury brand go A  ",
        imageURL:"src/assets/images/image.png",
        price:"500000",
        colors:["#ff0032" ,"#2563eb","#ff6E31"],
        category:{
            name:"cars",
            imageURL:"src/assets/images/image.png",
        },


    },
    {
        id:uuid(),
        title :"chevrolet spark .995cc",
        description :"A luxury brand go ",
        imageURL:"src/assets/images/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.webp",
        price:"100000",
        colors:["#ff0032" ,"#2563eb","#ff6E31"],
        category:{
            name:"cars",
            imageURL:"src/assets/images/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.webp",
        },


    },
    {
        id:uuid(),
        title :"chevrolet spark .995cc",
        description :"A luxury brand go ",
        imageURL:"src/assets/images/Orange.jpg",
        price:"400000",
        colors:["#ff0032" ,"#2563eb","#ff6E31"],
        category:{
            name:"cars",
            imageURL:"src/assets/images/Orange.jpg",
        },


    },
    {
        id:uuid(),
        title :"chevrolet spark .995cc",
        description :"A luxury brand go ",
        imageURL:"src/assets/images/white-t-shirt-front-mockup_23-292935585.avif",
        price:"300000",
        colors:["#ff0032" ,"#2563eb","#ff6E31"],
        category:{
            name:"cars",
            imageURL:"src/assets/images/white-t-shirt-front-mockup_23-292935585.avif",
        },
    },
    {
        id:uuid(),
        title :"Classic Leather Jacket",
        description :"A timeless leather jacket.",
        imageURL:"https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        price:"1200000",
        colors:["#000000" ,"#3C2A21"],
        category:{
            name:"Jackets",
            imageURL:"https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        },
    },
    {
        id:uuid(),
        title :"Blue Denim Jeans",
        description :"Comfortable and stylish.",
        imageURL:"https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"750000",
        colors:["#2563eb"],
        category:{
            name:"Pants",
            imageURL:"https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    },
    {
        id:uuid(),
        title :"Running Sneakers",
        description :"Lightweight and durable.",
        imageURL:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"600000",
        colors:["#FFFFFF", "#000000", "#FF0032"],
        category:{
            name:"Shoes",
            imageURL:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    },
    {
        id:uuid(),
        title :"Designer Sunglasses",
        description :"Protect your eyes in style.",
        imageURL:"https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"450000",
        colors:["#000000"],
        category:{
            name:"Accessories",
            imageURL:"https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    }
    


]


export const forminputlist:Iforminput[]=[
    {
    id:"title",
    name:"title",
    Label:"Prodect title",
    placeholder:"enter your title",
    type:"text",

    },
    {
        id:"description",
        name:"description",
        placeholder:"enter your title",
        Label:"Prodect description",
        type:"text",
    
        },
    {
            id:"Image",
            name:"imageURL",
            placeholder:"enter your title",
            Label:"Prodect Image URL",
            type:"text",
        
    },
    {
        id:"Price",
        name:"price",
        placeholder:"enter your title",
        Label:"Prodect price",
        type:"text",
    
}
]
export const colors:string[]=[

"#2563eb",
"#84D2C5",
"#13005A",
"#A31ACB",
"#FF6E31",
"#3C2A21",
"#6C4AB6",
"#CB1C8D",
"#000000",
"#645CBB",
"#1F8A70",
"#820000",
"#FF0032",
    
]
export const categories:Icategory[]=[
    {
        id:uuid(),
        name:"rofaida",
        imageURL:"src/assets/images/download.jpg"
    },
    {
        id:uuid(),
        name:"rofy",
        imageURL:"src/assets/images/download.jpg"
    },{
        id:uuid(),
        name:"roro",
        imageURL:"src/assets/images/download.jpg"
    },
    
]