import multer from 'multer';
import nextConnect from 'next-connect';

// Set up multer to store files in the "uploads" folder
const upload = multer({ dest: './public/uploads/' });

// Middleware handler using nextConnect
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Apply multer middleware for handling 'file' field
apiRoute.use(upload.single('file'));

// Handle POST request to upload the file
apiRoute.post((req, res) => {
  console.log('File uploaded:', req.file);
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default body parser to use multer
  },
};
