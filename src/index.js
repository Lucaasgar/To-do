import  express  from "express";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.routes.js"

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRouter)

app.use(express.static(join(__dirname, 'public')))

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`)
})