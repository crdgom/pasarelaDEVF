import modelosInit from '../models/init.models.js';
import cron from 'node-cron';
import { Op } from 'sequelize';
import {sequelize} from '../database/database.js';
import {tokenize, detokenize} from '../utilities/tokenization.js';
import { getExchange } from '../utilities/exchange.rate.js';
import luhn from 'luhn'

let modelos = modelosInit(sequelize);
let version = '1.0.0';


    // tokenizar tarjeta 
export const tokenizeCard = async (req,res) =>{
    let {card_holder, card_number, expiration_date,card_type} = req.body;
    luhn.validate(card_number);
    let response;
    let date = new Date();
    date.setDate(date.getDate() + 1 );
    let sqlDate = date.toISOString().slice(0,19).replace("T", " ");
    let token = tokenize(card_number+expiration_date+card_type)
    try{
        response = await modelos.cards.create({
            card_holder,
            card_number: tokenize(card_number), // ! los datos vienen en claro (no se encriptan) y hay que encriptarlos en AES256
            expiration_date: tokenize(expiration_date) , // ! los datos vienen en claro (no se encriptan) y hay que encriptarlos AES256
            card_type
        });

        response = await modelos.tokens.create({
            token,
            creado: Date.now(),
            expired_at: sqlDate,
            card_id: response.id_card

        });
    } catch(error){
       console.error(error);
        res.status(500).json({'error': error});
    }
    res.status(200).json(response);
}


export const payCard = async (req,res) =>{
    let token_id = req.body.token_id;
    let currency = req.body.currency;
    let response;
    let token;
    let expiration;
    let present = Date.now();
    let exchange_rate = await getExchange(currency);

    try{
        response = await modelos.tokens.findByPk(token_id);
        token = response.dataValues.token.toString();
        expiration = Date.parse(response.dataValues.expired_at.toString());

        if(expiration < present){
            res.status(500).json({'error': 'token expired'});
            return;
        }

        response = await modelos.orders.create({
            amount: req.body.amount,
            currency,
            exchange_rate,
            expedition_date: Date.now(),
            geolocation: req.body.geolocation,
            version,
            bank_transmitter : req.body.bank_transmitter,
            bank_receptor: req.body.bank_receptor,
            concept: req.body.concept,
            charges: req.body.charges,
            recurrency: req.body.recurrency,
            token_id,
            client_id: req.body.client_id,
            paymenthm_id: req.body.paymenthm_id,
            status_id: 3
        });



    } catch(error){
        console.error(error);
        res.status(500).json({'error': error});
    }
}

cron.schedule('0 0 * * *', async () => {
    let response;

    try{
        response = await modelos.orders.findAll({
            where:{
                [Op.and]:[
                    {status_id:3},
                    {[Op.or]:[{tries:null},{tries:false}]}
                ]
            }
        });
    } catch(error){
        console.log(error);
    }
    response = array.forEach(element => {
        element.expedition_date

    });
    console.log(response.length);

});

// funcion para generar numero entre 0 y 1

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

// función random para generar status id entre null y 3

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

}


/* {
    "token":"",
    "amount":"",
    "currency":"",
    "exchage_rate":"",
    "expedition_date":"",
    "geolocation":"",
    "version":"",
    "bank_trasnmitter":"",
    "bank_receptor":"",
    "concept":"",
    "charges":"",
    "recurrency":"",
    "token_id":"",
    "client_id":"",
    "paymenthm_id":"",
    "status_id":""
  } */