const {Router} = 'express'

const routes = Router();

const dataBase = []

routes.get('/users', (req, res) => {
    return Response.status(200).json(dataBase)
});

export {routes};