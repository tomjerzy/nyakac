const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const { Users, Enquiries, Abouts, Infos, Messages } = require('../models')
const AuthenticationControllerPolicy = require('../policies/user');
const multer = require('multer');
router.use(bodyParser.json())

router.use(express.static("public"));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + file.originalname)
    }
  });
  const upload = multer({ storage: storage })
//user
router.post("/login", (req, res) => {
    const { username, password} = req.body
    Users.findOne({
            where:{
                password: password,
                username: username 
            }
        })
        .then(usr => {
            res.send(usr)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({message: 'Could not verify credentials'})
        })
    });

router.post('/register',(req, res) => {
    if(req.body.gender === 'male') {
        req.body.avatar = '/male.png'
    } else {
        req.body.avatar = '/woman.png'
    }
    AuthenticationControllerPolicy.register;
    try {
        Users.create(req.body)
        .then(data => res.send(data))
    } catch(err) {
        console.log(err)
        res.status(500).end()
    }
});
router.post('/update-user', (req, res) => {
    Users.update(req.body, {
        where: {
            id: req.body.id
        }
    })
    .then(() => Users.findOne({
        where: {
            id: req.body.id
        }
    }))
    .then(resp => res.send(resp))
    .catch(err => res.status(500).end())
})

router.post('/change-password', (req, res) => {
    Users.update({
        password: req.body.confirm
    },{
        where: {
            id: req.body.id,
            password: req.body.current
        }
    })
    .then(r => res.send({message: 'Password changed successfully'}))
    .catch(err => res.status(500).send({message: 'Error changing password'}))
})
router.delete('/delete-user/:id', (req, res) => {
    Users.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(resp => res.status(200).end())
    .catch(err => res.status(500).end())
})

router.post('/upload-avatar', (req, res, next) => {
		upload.single('file')(req, res, function(err) {
			if(err) {
				res.status(500).end()
			} else {
				Users.update({
                    avatar: `/${req.file.filename}`
                }, {
                    where: {
                        id: req.body.id
                    }
                }).then(() => {
                    res.send(req.file.filename)
                })
			}
		})

})

router.get('/get-users', (req, res) => {
    Users.findAll(
        { attributes:['id','f_name', 'l_name', 'avatar', 'fb', 'twitter','ig'],
        include: [{ model: Abouts, as: 'About'}] },
        ).then(usrs => {
            console.log(usrs)
        res.send(usrs)
    }).catch(err => {
        console.log(err);
        res.status(500).end()})
})


// about
router.post('/create-about', (req, res) => {
   Abouts.create(req.body).then(dt => {
    Users.update({
        AboutId: dt.id
    }, {
        where: {
            id: req.body.id
        }
    })
    res.send({message: 'Success'})
   })
    .catch(err => console.log(err))
})


router.post('/add-info', (req, res) => {
        Infos.create(req.body).then(dt => {
            Users.update({
                InfoId: dt.id
            }, {
                where: {
                    id: req.body.id
                }
            })
            res.send({message: 'Success'})
        })
    .catch(err => res.status(500).end())
})

router.get('/fetch-user/:id', (req, res) => {
    Users.findByPk(req.params.id,{
        include: [ 
            { model: Abouts, as: 'About'},
            { model: Infos, as: 'Info'}
        ]
    }).then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err),
        res.status(500).end()
    })
})

router.post('/update-about/:id', (req, res) => {
    Abouts.update(req.body, {
        where :{
            UserId: req.params.id
        }
    })
    .then(resp => res.status(201).end())
    .catch(err => res.status(500).end())
})
//messages
router.post('/send-message', (req, res) => {
    Messages.create(req.body)
    .then(resp => {
        res.status(201).send(resp)
    })
    .catch(err => {
        res.status(500).send({message: 'Error posting data'})
    }
   )
})
//enquiries
router.post('/enquiry', (req, res) => {
    
    Enquiries.create(req.body)
    .then(resp => {
        res.status(201).send(resp)
    })
    .catch(err => 
        res.status(500).send({message: 'Error psoting data'})
    )
})

router.get('/fetch-inquiries', (req, res) => {
    Enquiries.findAll().then(r => res.send(r)).catch(err => res.status(500).send({message: 'Error fetching enquiries'}))
})
module.exports = router;