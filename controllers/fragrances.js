const express = require('express');
const fragranceRouter = new express.Router();

let fragrances = [
  {"name" : "Bvlgari", "category" : "Luxury"},
  {"name" : "Calvin Klein", "category" : "Top"},
  {"name" : "Giorgio Armani","category" : "Luxury"},
  {"name" : "Davidoff","category" : "Top"},
  {"name" : "Paco Rabanne", "category" : "Luxury"},
  {"name" : "Caroline Herrera", "category" : "Top"},
  {"name" : "Yves Saint Laurent", "category" : "Luxury"},
  {"name" : "Elie Saab", "category" : "Luxury"},
  {"name" : "Issey Miyake", "category" : "Top"},
  {"name" : "Dolce & Gabbana", "category" : "Luxury"},
  {"name" : "Narcisso Rodriguez", "category" : "Top"},
  {"name" : "Kenzo", "category" : "Top"},
];

fragranceRouter.get('/', function(req, res){
  res.json(fragrances);
});

fragranceRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json(fragrances[index]);
});

fragranceRouter.post('/', function(req, res){
  fragrances.push(req.body.fragrance);
  res.json(fragrances);
});

fragranceRouter.put('/:id', function(req, res){
  let index = req.params.id;
  fragrances[index] = req.body.fragrance;
  res.json(fragrances);
});

fragranceRouter.delete('/', function(req, res){
  let index = req.params.id;
  fragrances.splice(index, 5);
  res.json(fragrances);
});

module.exports = fragranceRouter;
