const ejs = require('ejs')

class Key {
  static async index(req, res) {
    const keys = []
    const randomWords = require('random-words')

    for (let i = 0; i < 100; i++) {
      keys.push({
        key: i + 1,
        room: `${i + 101}`,
        building: randomWords({ exactly: 1, maxLength: 5 }),
        description: randomWords({ exactly: 1, wordsPerString: 8 }),
        lockNumber: Math.floor(Math.random() * 1000000),
      })
    }

    const content = await ejs.renderFile(`${__dirname}/../views/content/keys.ejs`, {
      title: process.env.APP_NAME,
      description: 'A searchable list of all the keys in the system.',
      keys,
      navLinks: [
        {
          name: 'Home',
          url: '/',
          active: req.path == '/',
        },
        {
          name: 'Keys',
          url: '/keys',
          active: req.path == '/keys',
        },
      ],
    })

    const params = {
      title: process.env.APP_NAME,
      content,
      navLinks: [
        {
          name: 'Home',
          url: '/',
          active: req.path == '/',
        },
        {
          name: 'Keys',
          url: '/keys',
          active: req.path == '/keys',
        },
      ],
    }

    res.render('index', params)
  }
}

module.exports = Key
