export interface Iproduct{
    id?:string |undefined;
    title:string;
    description:string;
    imageURL:string;
    price:string;
    colors:string[];
    category:{
        name:string;
        imageURL:string
    }
}
export interface Iforminput{
    id:string;
    placeholder:string;
    name: "title"|"description"|"imageURL"|"price";
    Label:string;
    type:string
}
export interface Icategory{
    id:string;
    name:string;
    imageURL:string
}