import { uniqueId } from "lodash";
import img1 from "./img/home/img1.jpg";
import img2 from "./img/home/img2.jpg";
import img3 from "./img/home/img3.png";
import poster from "./img/home/poster.jpg";
import logo from "./img/logo.png"


export const fakeData = {
    pageLink: [
        {path: "/", page: "HOME", id: uniqueId()},
        {path: "allproduct", page: "All-PRODUCT", id: uniqueId()},
        {path: "shop", page: "SHOP", id: uniqueId()},
        
    ],
    home: {
        text: {
            blockText : [
                {
                    title: "Free Shipping & Returns",
                    text: "BUY NOW",
                    id: uniqueId(),
                    color: "#B8B8B8"

                },
                {
                    title: "20% Discount for all dresses",
                    text: "USE CODE: Colorlib",
                    id: uniqueId(),
                    color: "#FF084E",
                    
                },
                {
                    title: "20% Discount for students",
                    text: "USE CODE: Colorlib",
                    id: uniqueId(),
                    color: "#3A3A3A"
                }
            ],
            posterText: [
                {
                    title: "IN BAGS EXCEPTING THE NEW COLLECTION",
                    text: "DESIGNER BAGS",
                    id: uniqueId()
                },
                {
                    title: "ON ACCESORIES",
                    text: "SALE 30%",
                    id: uniqueId()
                    
                },
            ],
            colectionTitle: "NEW ARRIVALS",
        },
        sliderImg : [
            img1,
            img2,
            img3
        ],
        poster,
        posterText: {
                title:"WHITE T-SHIRT",
                text:"* Free shipping until 25 Dec 2017",
                price: "$25.90 $15.90"
        }
    },
    shop:{
        color: [
            "#D7D7D7",
            "#FD4F4F",
            "#FCF29C",
            "#8FC99C",
            "#BC83B1",
            "#9EE7F4"

        ]
    },
    categoryData: [
        {name: "men's clothing", complited: true},
        {name: 'jewelery', complited: true},
        {name: 'electronics', complited: true},
        {name: "women's clothing", complited: true}
    ],
    buyTitle:[
        "Information",
        "Card Details",
        "SHIPPING & RETURNS"
    ],
    sizeAndColor:[
        {
            size: 32,
            color: "red",
            id: uniqueId()
        },
        {
            size: 34,
            color: "blue",
            id: uniqueId()
        },
        {
            size: 36,
            color: "green",
            id: uniqueId()
        },
        {
            size: 38,
            color: "pink",
            id: uniqueId()
        },
        {
            size: 40,
            color: "grey",
            id: uniqueId()
        },
        {
            size: 42,
            color: "yellow",
            id: uniqueId()
        },

    ],
    link: {
        about: [
            "About",
            "Blog",
            "Faq",
            "Returns",
        ],
        myAcount: [
            "MyAcount",
            "Shipping",
            "Our Policies",
            "Afiliates"
        ],
        logo
    },
}

export const  backgraundColor = [
    `background: #fceabb; 
    background: -webkit-linear-gradient(to right, #f8b500, #fceabb); 
    background: linear-gradient(to right, #f8b500, #fceabb);
    `,
    `background: #42275a; 
    background: -webkit-linear-gradient(to right, #734b6d, #42275a);
    background: linear-gradient(to right, #734b6d, #42275a);
    `,
    `background: #0B486B; 
    background: -webkit-linear-gradient(to right, #F56217, #0B486B); 
    background: linear-gradient(to right, #F56217, #0B486B);
    `,
    `background: #1D4350;
    background: -webkit-linear-gradient(to right, #A43931, #1D4350); 
    background: linear-gradient(to right, #A43931, #1D4350);
    `,
    `background: #654ea3;  
    background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);  
    background: linear-gradient(to right, #eaafc8, #654ea3);
    `,
    `background: #544a7d;
    background: -webkit-linear-gradient(to right, #ffd452, #544a7d); 
    background: linear-gradient(to right, #ffd452, #544a7d);
    `,
    `background: #f12711; 
    background: -webkit-linear-gradient(to right, #f5af19, #f12711); 
    background: linear-gradient(to right, #f5af19, #f12711); 
    `,
    `background: #1f4037; 
    background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);
    background: linear-gradient(to right, #99f2c8, #1f4037);
    `,
    `background: #bdc3c7; 
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
    background: linear-gradient(to right, #2c3e50, #bdc3c7);
    `,`background: #ffd89b; 
    background: -webkit-linear-gradient(to right, #19547b, #ffd89b); 
    background: linear-gradient(to right, #19547b, #ffd89b);
    `

]