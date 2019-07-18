# What's this?

- This is a best practice for ExpressJS that introduce to us how we create the ExpressJS App.
- We referred the source codes from [here](https://www.tutorialspoint.com/expressjs/index.htm)!

# Why ExpressJS?

- ExpressJS will help you to create the Web Server as easily, flexible and faster.

# Prerequisites

- Basic knowledge of JavaScript and HTML.
- Basic knowledge of MongoDB will help you a little.
- Install the NodeJS and some libraries.
  - You can install NodeJS from [here](https://nodejs.org/en/)!
  - You can install the `nodemon` for convenience to restart your application when you develop.
  - When you deploy this App to production, you can install the `pm2` for managing NodeJS processes.
- That's it!

# How to run?

- You can test this project by below command.

  ```
  $ npm run test
  ```

- Use below command when simply run this App using default node executor.

  ```
  $ npm run start
  ```

- If you installed `nodemon` then run the below command.

  > Note. Use `pm2` rather then `nodemon` in your production environment.

  ```
  $ npm run dev
  ```


# What will you do step by step?

### #0. TDD [(Test Driven Development)](https://en.wikipedia.org/wiki/Test-driven_development)

- Just simple way about TDD.
  1. Write new test code.
  2. Run the new test and see the failure.
  3. Write functions.
  4. Run the new test again and see the success.
  5. Repeat above steps all your functions until you complete this project.

### #1. Request and Response

- Request
  - Reference: https://expressjs.com/en/4x/api.html#req

- Response
  - Reference: https://expressjs.com/en/4x/api.html#res

### #2. Routing
### #3. Serve static files
### #4. Middleware
### #5. HTTP methods
### #6. RESTful APIs
### #7. Cookie
### #8. Session
### #9. Error handling
### #10. Logging
### #11. Tips

# License

This is licensed as [MIT](./LICENSE)