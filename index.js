const { Telegraf } = require('telegraf');

const axios = require('axios');

// Créer un nouveau bot avec le jeton (token) obtenu à partir de BotFather
const bot = new Telegraf('6088056595:AAEagMcATReZreJ0RbYEqSRsMonTSLnYKPI');

// Répondre aux messages de texte envoyés par l'utilisateurbot.on('text', async (ctx) => {
// Récupérer le texte envoyé par l'utilisateur
const query = ctx.message.text;

// Effectuer une recherche sur Google en utilisant l'API Google Custom Search
const searchResults = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${query}&cx=4132d6150f991439f&key=AIzaSyBeMwQ6-KcfIVb2_EKYE7zb_Es1_jK4uqc&num=3`);

// Récupérer les trois premiers résultats de la recherche
const results = searchResults.data.items.slice(0, 3);

// Envoyer les résultats de la recherche à l'utilisateur
let response = '';

results.forEach((result, index) => {
    response += `${index + 1}. ${result.title}\n${result.link}\n\n`;
});

ctx.reply(response);

// Démarrer le bot
bot.launch();