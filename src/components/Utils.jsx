import * as yup from 'yup'
import img1 from '../images/image-best-gear.jpg'
import img2 from '../images/image-gallery-1.jpg'
import img3 from '../images/head_phone_2.jpg'
const schema = yup.object().shape({
    firstName: yup.string("you must enter letters").required("ananomous!!"),
    emailNumber: yup.number("must be number").required("ananomous!!"),
    email:yup.string("you must enter letters").email("must iclude example@example.com").required("ananomous!!"),
    street: yup.string("you must enter letters").required("ananomous!!"),
    code: yup.number("must be number").required("ananomous!!"),
    city: yup.string("you must enter letters").required("ananomous!!"),
    country: yup.string("you must enter letters").required("ananomous!!"),
    number: yup.number("must be number").required("ananomous!!"),
    eMoney: yup.number("must be number").required("ananomous!!")
  })
  const initialValues = {
    firstName:'',
    emailNumber:'' ,
    email: '',
    street: '',
    code: '',
    city:'',
    country: '',
    number: '',
    eMoney: ''
}
const pagesList = [
    {
        id:"headphones",
        name:"HEADPHONES",
        content: [
            {
              id:4,
              name: "XX99 Mark II ",
              desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
              img: "../images/head_phone_2.jpg",
              price:1999,
              quantity:1,
            },
            {
              id:5,
              name:"XX99 Mark I ",
              desc:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
              img:"/images/head_phone_1.png",
              price:2999,
              quantity:1,
            },
            {
              id:6,
              name:"XX59 ",
              desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
              img: "../images/maylike-2.png",
              price:999,
              quantity:1,
            },
        ]
    },
    {
        id:"speakers",
        name:"SPEAKERS",
        content: [
            {
              id:7,
              name: "ZX9 ",
              desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
              img: "../images/speaker_1.jpg",
              price:899,
              quantity:1,
            },
            {
              id:8,
              name:"ZX7 ",
              desc:"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
              img:"../images/speaker_2.jpg",
              price:2549,
              quantity:1,
            },
        ]
    },
    {
        id:"earphones",
        name:"EARPHONES",
        content: [
            {
              id:9,
              name: "YX1 WIRELESS ",
              desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
              img: "../images/earphone_1.jpg",
              price:1599,
              quantity:1,
            },
        ]
    }, 
]
const mayLike = [
    {
      id:1,
      name:"EARPHONES",
      img:"../images/maylike-1.png",
      catagory:"headphones",
    },
    {
        id:2,
        name:"HEADPHONES",
        img:"../images/maylike-2.png",
        catagory:"speakers",
    },
    {
        id:3,
        name:"SPEAKERS",
        img:"../images/maylike-3.png",
        catagory:"EARPHONES",
    },
]
const P = "Located at the heart of New York City Audiophile is the premier store for high end headphones, earphones,speakers, and audio accessories. We have a large showroom and uxury demonstration rooms available for you to browse  and experience a wide range  of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."

export default { mayLike,P,pagesList,schema,initialValues,img1,img2,img3}