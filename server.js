// ==========================================================================
// SERVIDOR CLOUD REST API & STATIC HOSTING
// Plataforma de Autoevaluación Docente - Colegio San Buenaventura
// ==========================================================================

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');
const TEACHERS_SEED_FILE = path.join(__dirname, 'teachers_db_2627.json');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Servir archivos estáticos (Frontend Web App)
app.use(express.static(__dirname));

// Inicialización de Base de Datos Persistente en Servidor
function initServerDB() {
    if (!fs.existsSync(DB_FILE)) {
        console.log('Inicializando db.json en el servidor...');
        let seedTeachers = [];
        if (fs.existsSync(TEACHERS_SEED_FILE)) {
            try {
                seedTeachers = JSON.parse(fs.readFileSync(TEACHERS_SEED_FILE, 'utf8'));
            } catch(e) {
                console.error('Error leyendo semilla de profesores', e);
            }
        }
        
        const initialDB = {
            teachers: seedTeachers,
            evaluations: {}
        };

        seedTeachers.forEach(t => {
            initialDB.evaluations[t.name] = {
                status: 'not_started',
                updatedAt: null,
                answers: {},
                directorAnswers: {},
                reflections: {},
                directorNotes: ''
            };
        });

        fs.writeFileSync(DB_FILE, JSON.stringify(initialDB, null, 2), 'utf8');
        return initialDB;
    } else {
        try {
            return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
        } catch(e) {
            console.error('Error leyendo db.json', e);
            return { teachers: [], evaluations: {} };
        }
    }
}

// Ensure DB exists on startup
let serverData = initServerDB();

// --------------------------------------------------------------------------
// RUTAS API REST CLOUD
// --------------------------------------------------------------------------

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        server: 'Colegio San Buenaventura Cloud API',
        teachersCount: serverData.teachers ? serverData.teachers.length : 0,
        timestamp: new Date().toISOString()
    });
});

// Obtener base de datos completa
app.get('/api/db', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
        res.json(data);
    } catch(e) {
        res.status(500).json({ error: 'Error leyendo base de datos' });
    }
});

// Guardar/Sincronizar base de datos completa
app.post('/api/db', (req, res) => {
    try {
        const newDb = req.body;
        if (!newDb || !newDb.evaluations) {
            return res.status(400).json({ error: 'Datos no válidos' });
        }
        fs.writeFileSync(DB_FILE, JSON.stringify(newDb, null, 2), 'utf8');
        serverData = newDb;
        res.json({ success: true, message: 'Base de datos sincronizada en la nube' });
    } catch(e) {
        res.status(500).json({ error: 'Error guardando en el servidor' });
    }
});

// Guardar evaluación de un profesor individual
app.post('/api/evaluations/:username', (req, res) => {
    try {
        const username = decodeURIComponent(req.params.username);
        const evalData = req.body;
        
        const currentDb = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
        currentDb.evaluations[username] = {
            ...currentDb.evaluations[username],
            ...evalData,
            updatedAt: new Date().toISOString()
        };

        fs.writeFileSync(DB_FILE, JSON.stringify(currentDb, null, 2), 'utf8');
        serverData = currentDb;
        res.json({ success: true, username: username, updatedAt: currentDb.evaluations[username].updatedAt });
    } catch(e) {
        res.status(500).json({ error: 'Error guardando evaluación' });
    }
});

// Redirección por defecto a la SPA
app.get('*', (req, res) => {
    if (fs.existsSync(path.join(__dirname, 'previsualizacion-autoevaluacion.html'))) {
        res.sendFile(path.join(__dirname, 'previsualizacion-autoevaluacion.html'));
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`===========================================================`);
    console.log(`🚀 SERVIDOR SERVIDOR CLOUD ACTIVO`);
    console.log(`🏫 Colegio San Buenaventura — Autoevaluación Docente`);
    console.log(`🌐 Servidor escuchando en: http://localhost:${PORT}`);
    console.log(`===========================================================`);
});
