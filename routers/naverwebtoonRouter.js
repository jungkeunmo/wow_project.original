const express = require("express");
const router = require("./globalRouter");

router.get("/naverwebtoons", (req,res)=>{
    res.render("naverWebtoonWriter/NWallpage");
});


router.get("/nwpage1", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage1")
});

router.get("/nwpage2", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage2")
});

router.get("/nwpage3", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage3")
});

router.get("/nwpage4", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage4")
});

router.get("/nwpage5", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage5")
});

router.get("/nwpage6", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage6")
});

router.get("/nwpage7", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage7")
});

router.get("/nwpage8", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage8")
});

router.get("/nwpage9", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage9")
});

router.get("/nwpage10", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage10")
});

router.get("/nwpage11", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage11")
});

router.get("/nwpage12", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage12")
});

router.get("/nwpage13", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage13")
});

router.get("/nwpage14", (req,res)=>{
    res.render("naverWebtoonWriter/NWpage14")
});

router.get("/nwpage/alphabet", (req,res)=>{
    res.render("naverWebtoonWriter/NWalphabet")
});

router.get("/nwpage/numbers", (req,res)=>{
    res.render("naverWebtoonWriter/NWnumbers")
});







module.exports = router;
