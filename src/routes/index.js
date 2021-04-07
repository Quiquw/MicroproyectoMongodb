const express = require('express');
const router = express.Router();
const User = require('../model/task');

router.get('/', async(req, res) => {
    const tasks = await User.find();
    res.render('index', {
        tasks
    });
});

/* router.get('/', (req, res) => {
    res.send('Hello World');
}); */

//Route for submit user
router.post('/add', async(req, res, next) => {
    const task = new User(req.body);
    await task.save();
    res.redirect('/');
});

router.get('/turn/:id', async(req, res, next) => {
    let { id } = req.params;
    const task = await User.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});


router.get('/edit/:id', async(req, res, next) => {
    const task = await User.findById(req.params.id);
    res.render('edit', { task });
});

router.post('/edit/:id', async(req, res, next) => {
    const { id } = req.params;
    await User.update({ _id: id }, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async(req, res, next) => {
    let { id } = req.params;
    await User.remove({ _id: id });
    res.redirect('/');
});


module.exports = router;