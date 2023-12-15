import multer from "multer"
const storage = multer.diskStorage({
    destination: function (res, file, cb) {
        cb(null, "public/assets")
    },
    filename: function (res, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage })