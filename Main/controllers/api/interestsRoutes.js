const router = require('express').Router();
const { User, Interests } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try{
    const interestsData = await Interests.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = interestsData.map((project) => project.get({ plain: true }));
    const movies = projects.filter(sav => sav.category == 'movies');
    
  } catch(error){ 
    if(error) console.log(error)
  };
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
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
