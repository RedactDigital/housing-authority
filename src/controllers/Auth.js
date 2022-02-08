const ejs = require('ejs')
const { keys } = require('../database/models')

class Auth {
  static async index(req, res) {
    const data = await keys.findAll()

    const content = await ejs.renderFile(`${__dirname}/../views/content/keys.ejs`, {
      title: process.env.APP_NAME,
      description: 'A searchable list of all the keys in the system.',
      keys: data,
      navLinks: [
        {
          name: 'Home',
          url: '/',
          active: req.path == '/',
        },
        // {
        //   name: 'Keys',
        //   url: '/keys',
        //   active: req.path == '/keys',
        // },
      ],
    })
    const params = {
      title: process.env.APP_NAME,
      description: 'A searchable list of all the keys in the system.',
      content,
      navLinks: [
        {
          name: 'Home',
          url: '/',
          active: req.path == '/',
        },
        // {
        //   name: 'Keys',
        //   url: '/keys',
        //   active: req.path == '/keys',
        // },
      ],
    }

    res.render('index', params)
  }

  static async create(req, res) {
    const { key, doorNumber, doorLocation, description, lockNumber } = req.body

    await keys.create({
      key,
      doorNumber,
      doorLocation,
      description,
      lockNumber,
    })

    res.redirect(`${process.env.APP_URL}`)
  }

  static async update(req, res) {
    const { id } = req.params
    const { key, doorNumber, doorLocation, description, lockNumber } = req.body

    await keys.update(
      {
        key,
        doorNumber,
        doorLocation,
        description,
        lockNumber,
      },
      {
        where: {
          id,
        },
      }
    )

    res.redirect(`${process.env.APP_URL}`)
  }

  static async delete(req, res) {
    const { id } = req.params

    await keys.destroy({
      where: {
        id,
      },
    })

    res.redirect(`${process.env.APP_URL}`)
  }
}

module.exports = Auth
