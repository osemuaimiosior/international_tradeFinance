const express = require('express');
const router = express.Router();
const path = require('path');


router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','index.html'));
});

router.get('/about(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','about.html'));
});

router.get('/blog(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','blog.html'));
});

router.get('/contact(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','contact.html'));
});

router.get('/services(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','services.html'));
});

router.get('/FAQ(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','FAQ.html'));
});

router.get('/Purchase-Order-Finance-DetailsPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Purchase-Order-Finance-DetailsPage.html'));
});

router.get('/Bank-Gurantee-DetailsPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Bank-Gurantee-DetailsPage.html'));
});

router.get('/Performance-Bond-DetailsPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Performance-Bond-DetailsPage.html'));
});

router.get('/Bank-ComfortLetter-DetailsPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Bank-ComfortLetter-DetailsPage.html"'));
});

router.get('/Letter-Of-Credit-DetailsPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Letter-Of-Credit-DetailsPage.html'));
});

module.exports = router;