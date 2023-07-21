import multer from 'multer'
import path from 'path';

import * as url from 'url'


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const storage = multer.diskStorage({
    destination: __dirname + 'views/build/images/',
    filename: (req, file, cb)=> {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + "-" + file.originalname)
    }
})

export default multer({ storage })
