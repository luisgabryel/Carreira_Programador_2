module.exports = class IndexController{
    static index(req,res){
        res.render('index')
    }


    static create(req,res){
        res.render('form')
    }
    static store(req,res){
        let nome = req.body.nome
        let email = req.body.email
        let data_nascimento = req.body.data_nascimento

        console.log(nome, email, data_nascimento)
        
        res.redirect('/')
    }
}