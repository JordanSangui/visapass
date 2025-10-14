/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import env from '#start/env'
import router from '@adonisjs/core/services/router'
import transmit from '@adonisjs/transmit/services/main'
const HealthChecksController = () => import('#controllers/health_checks_controller')
const AppsController = () => import('#controllers/apps_controller')


transmit.registerRoutes()

router.get('/', [AppsController, 'home']).as('app.home')
router.get('/services', [AppsController, 'services']).as('app.services')
router.get('/prices', [AppsController, 'prices']).as('app.prices')
router.get('/articles/:id?', [AppsController, 'articles']).as('app.articles')
router.get('/events', [AppsController, 'events']).as('app.events')
router.get('/about', [AppsController, 'about']).as('app.about')
router.get('/contact', [AppsController, 'contact']).as('app.contact')
router.get('/signin', [AppsController, 'signin']).as('app.signin')
router.get('/signup', [AppsController, 'signup']).as('app.signup')

router.get('/health', [HealthChecksController])
    .use(({ request, response }, next) => {
        const secret = env.get('SECRET_MONITORING', '')
        if(secret == '') response.unauthorized({ message: 'Unauthorized access' })
        if (request.header('x-monitoring-secret') === secret) {
            return next()
        }
        response.unauthorized({ message: 'Unauthorized access' })
    })

