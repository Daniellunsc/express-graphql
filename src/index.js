import app from 'config/express.config';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Listening at ${PORT}`)
});