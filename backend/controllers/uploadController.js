import express from "express"
import path from "path"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/")
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

const fileFilter = (file, cb) => {
  console.log(2, file.originalname)
  const fileTypes = /jpe?g|png|webp/
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/
  const extname = fileTypes.test(path.extname(file.originalname)).toLowerCase()
  const mimeType = mimetypes.test(file.mimetype)
  if (extname && mimeType) {
    return cb(null, true)
  } else {
    cb("فرمت غیر مجاز")
  }
}

const upload = multer({
  storage,
  // fileFilter,
})

const uploadSingle = upload.single("image")
router.post("/", (req, res) => {
  uploadSingle(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: "مشکلی پیش آمد" })
    }
    res.status(200).send({
      message: "فایل دریافت شد",
      image: `/${req.file.path}`,
    })
  })
})

export default router
