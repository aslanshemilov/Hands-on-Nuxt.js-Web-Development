'use strict'

import Router from 'koa-router'
import pool from '../../../../core/database/mysql'

const router = new Router()

// Nested routes.
// https://www.npmjs.com/package/koa-router#nested-routers
// var userIndex = new Router()
// var user = new Router()

// // Get all users.
// user.get('/', async (ctx, next) => {

//   // var userId = ctx.state
//   // console.log(userId)

//   ctx.type = 'json'
//   ctx.body = users
// })

// // Get the user by id.
// user.get('/:id', async (ctx, next) => {
//   const id = parseInt(ctx.params.id) // or ctx.request.params.id
//   console.log(users[id])
//   if (id >= 0 && id < users.length) {
//     ctx.body = users[id]
//   } else {
//     ctx.throw(404)
//   }
// })

// userIndex.use('/users', user.routes(), user.allowedMethods())

// export default userIndex

// Get all users.
router.get('/', async (ctx, next) => {
  try {
    var users = await pool.query('SELECT `id`, `name`, `created_on`, `last_on` FROM `users`')
  } catch(err) {
    // Throw the error.
    ctx.throw(500, err.sqlMessage)
  }

  ctx.type = 'json'
  ctx.body = users
})

export default router
