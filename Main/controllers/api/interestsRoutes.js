const router = require('express').Router();
const { User, Interests } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try{
    const interestsData = await Interests.findAll({
      plain:true,
      where: { userId: req.session.user_id, },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
console.log(interestsData)

    // Serialize data so the template can read it
    // const projects = interestsData.map((project) => project.get({ plain: true }));
    // const movies = projects.filter(sav => sav.category == 'movies');
    res.render('actualsavs', { 
      interestsData
, 
      logged_in: req.session.logged_in
    });

  } catch(error){ 
    if(error) console.log(error)
  };
})

router.post('/', withAuth, async (req, res) => {

  try {
    const newInterest = await Interests.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newInterest)
    res.status(200).json(newInterest);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
