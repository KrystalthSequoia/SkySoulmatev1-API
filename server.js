Code du backend (server.js)
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

require('dotenv').config(); // Charge les variables d'environnement

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const { createClient } = require('@supabase/supabase-js'); // Ajoute cette ligne si elle manque

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Exemple d'endpoint pour récupérer des utilisateurs
app.get('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');
    
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
