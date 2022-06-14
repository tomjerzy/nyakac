const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const { User, Enquiry, About, Info, Message } = require('../models')
const AuthenticationControllerPolicy = require('../policies/user');
const multer = require('multer');
router.use(bodyParser.json())


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
    console.log(req.body)
    const { username, password} = req.body
    User.findOne({
            where:{
                password: password,
                username: username
                
            }
        })
        .then(usr => {
            console.log(usr)
            res.send(usr)
        })
        .catch(err => {
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
        User.create(req.body)
        .then(data => res.send(data))
    } catch(err) {
        console.log(err)
        res.status(500).end()
    }
});
router.post('/update-user', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.body.id
        }
    })
    .then(() => User.findOne({
        where: {
            id: req.body.id
        }
    }))
    .then(resp => res.send(resp))
    .catch(err => res.status(500).end())
})

router.post('/change-password', (req, res) => {
    User.update({
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
    User.destroy({
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
				User.update({
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
    User.findAll(
        { attributes:['id','f_name', 'l_name', 'avatar', 'fb', 'twitter','ig'],
        include: [{ model: About, as: 'About'}] },
        ).then(usrs => {
        res.send(usrs)
    }).catch(err => res.status(500).end())
})


// about
router.post('/create-about', (req, res) => {
   About.create(req.body).then(dt => {
    User.update({
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
        Info.create(req.body).then(dt => {
            User.update({
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
    User.findByPk(req.params.id,{
        include: [ 
            { model: About, as: 'About'},
            { model: Info, as: 'Info'}
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
    About.update(req.body, {
        where :{
            UserId: req.params.id
        }
    })
    .then(resp => res.status(201).end())
    .catch(err => res.status(500).end())
})
//messages
router.post('/send-message', (req, res) => {
    Message.create(req.body)
    .then(resp => {
        res.status(201).send(resp)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send({message: 'Error posting data'})
    }
   )
})
//enquiries
router.post('/enquiry', (req, res) => {
    
    Enquiry.create(req.body)
    .then(resp => {
        res.status(201).send(resp)
    })
    .catch(err => 
        res.status(500).send({message: 'Error psoting data'})
    )
})

router.get('/fetch-inquiries', (req, res) => {
    Enquiry.findAll().then(r => res.send(r)).catch(err => res.status(500).send({message: 'Error fetching enquiries'}))
})
module.exports = router;