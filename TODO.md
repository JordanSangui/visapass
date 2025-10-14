# TODO: Fix TypeScript Errors for Vercel Deployment

## Tasks

- [x] Edit adonisrc.ts: Remove duplicate 'assetsBundler: false'
- [x] Create app/types/events.ts: Define EventsList interface with custom events
- [x] Edit app/controllers/users_controller.ts: Adjust emitter.emit to pass { id }
- [x] Edit app/listeners/mail.ts: Prefix 'user' parameter with underscore to indicate unused
- [x] Edit app/listeners/notification.ts: Change handle to accept { id: number }
- [x] Edit app/listeners/chat.ts: Change handle to accept { id: number }
- [x] Edit app/middleware/initialize_bouncer_middleware.ts: Add 'auth' to HttpContext interface
- [x] Edit app/models/event.ts: Import 'compose' from '@adonisjs/core/helpers'
- [x] Edit start/events.ts: No changes needed after defining EventsList
- [x] Run npm run build to verify fixes
- [x] Create vercel.json to configure output directory
- [ ] Redeploy to Vercel if successful
