import express from "express";
import session from 'express-session'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import flash from 'connect-flash'
import sessions from "express-session";
import expressSession from "express-mysql-session";
import cookieParser from 'cookie-parser';
import db from "./databaseConnection.js";
import cors from 'cors';
import createError from "http-errors";
import initSockets from "./sockets/initialize.js";
import search  from "./routes/search.js";
import login from "./routes/login.js";
const store = expressSession(sessions);
const mysqlSessionStore = new store({/* Default Options*/},db);

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json())

app.use(flash());
app.set("view engine", "svelte");
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


// app.use((req, res, next)=>{
//   requestPrint(req.url);
//   next();
// });

app.use(session({
  secret: 'piqued',
  resave: true,
  saveUninitialized: true
} )); // session secret

app.use(cookieParser());

// const sessionMiddleware = session({
//   store: new pgSession({ pgPromise: db }),
//   secret: process.env.SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
// });

// app.use(sessionMiddleware);
// const server = initSockets(app, sessionMiddleware);

app.use(sessions({
  key: "sid",
  secret: "piqued",
  store: mysqlSessionStore,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  saveUninitialized: false
}));

app.use("/", express.static('dist'));

app.use("/api/search", search);
app.use("/login", login);

//This is for hash route aliasing. Please do not remove
//If user goes to /route it auto-redirects to the proper /#/route hashroute in frontend
// app.use("/login", (req, res) => {
//   res.redirect('/#/login');
// })

// app.use("/signup", (req, res) => {
//   res.redirect('/#/signup');
// })

//connect to port
app.listen(port, () => {
  console.log("Server listening on port", port);
});

// catch routing error
app.use((req,res,next) => {
  next(createError(404, `The route ${req.method} : ${req.url} does not exist.`));
})

