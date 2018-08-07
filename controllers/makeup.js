const express = require('express');
const makeupRouter = new express.Router();

let brands = [
  {"name" : "Charlotte Tilbury", "category" : "Top"},
  {"name" : "Benefit",  "category" : "Top"},
  {"name" : "MAC", "category" : "Top"},
  {"name" : "Urban Decay",  "category" : "Top"},
  {"name" : "Clarins",  "category" : "Top"},
  {"name" : "Bobbi Brown",  "category" : "Top"},
  {"name" : "Clinique",  "category" : "Top"},
  {"name" : "Elemis",  "category" : "Top"},
  {"name" : "YSL Beaute",  "category" : "Luxury"},
  {"name" : "Maybelline",  "category" : "Top"}
 ];

//index or home page to display all brands
makeupRouter.get('/', function(req, res){
  res.json(brands);
});

//show one brand by id
makeupRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: brands[index]});
});

//create a new brand
makeupRouter.post('/', function(req, res){
  brands.push(req.body.brand);
  res.json(brands);
});

//update an existing brand
makeupRouter.put('/:id', function(req, res){
  let index = req.params.id;
  brands[index] = req.body.brand;
  res.json(brands);
});

//delete an existing brand
makeupRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  brands.splice(index, 10);
  res.json(brands);
});


module.exports = makeupRouter;
