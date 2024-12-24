import userRouter from "./Modules/User/Routes/user.routes.js"

export function init(app){
    app.use(process.env.USER_ROUTE_URL,userRouter)
}
