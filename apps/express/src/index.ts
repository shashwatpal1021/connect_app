//@ts-ignore
import app from './app/app'
import userRouter  from './routes/user.routes'

app.use("/",userRouter)

app.listen(4000, () => {
  console.log('Server started on port 4000');
})
