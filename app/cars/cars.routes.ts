import { Router } from "express";
const bodyParser = require('body-parser');
const router = Router();
const bodyEncoder = router.use(bodyParser.urlencoded({ extended: false }))
const  cars:{companyName:string,modelName:string,speed:number,noOfGears:number}[] =[
    {
    companyName:"BMW",
    modelName:"rRc",
    speed:340,
    noOfGears:4
}
];

router.get("/", (req, res, next) => {
    // handle the incoming request
res.send(cars);

    // send out the response
});
router.post("/",(req,res,next)=>{
    // const obj = {
    //     companyName:req.body.companyName,
    // modelName:req.body.modelName,
    // speed:req.body.speed,
    // noOfGears:req.body.noOfGears
    // }
    //cars.push(obj);
})

export default router;