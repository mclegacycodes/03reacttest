import React from "react";
import reactDom from "react-dom";

// css
import './index.css'

const features = [
    {
        id:1,
        image:"https://i.pinimg.com/474x/f1/9a/a3/f19aa34981b8e781b37506e31422e141.jpg",
        title:"Audio and HD video calling",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste laudantium dolor enim sit harum voluptatum distinctio earum. Repellat, similique tenetur!"
    },
     {
        id:2,
        image:"https://cdn0.iconfinder.com/data/icons/communication-network-2/70/network__connection__sharing__LCD__screen-512.png",
        title:"Screen sharing",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste laudantium dolor enim sit harum voluptatum distinctio earum. Repellat, similique tenetur!"
    },
    {
        id:3,
        image:"https://cdn3.iconfinder.com/data/icons/devices-set-vol-2/512/Device_and_Media_icons-76-512.png",
        title:"Smart messaging",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste laudantium dolor enim sit harum voluptatum distinctio earum. Repellat, similique tenetur!"
    }
]

const CheckFeatures=()=>{
    return <section>
        <span>
            <h1>Checkout All Features</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Nostrum tempora perferendis iure sed et illo laboriosam velit debitis.</p>
        </span>
        <FeatureList/>
    </section>
}
const FeatureList=()=>{
    return <section className="featurelist">
{features.map((item)=>{
    return <Feature key={item.id} features={item}/>
    })}
    </section>
}

const Feature=(props)=>{
    const{image,title,description}=props.features
    return <div>
        <img src={image} alt="feature image" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}

reactDom.render(<CheckFeatures/>,document.getElementById('root'))