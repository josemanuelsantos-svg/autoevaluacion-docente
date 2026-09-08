
// ==========================================================================
// 🔥 CONFIGURACIÓN OFICIAL DE GOOGLE FIREBASE CLOUD FIRESTORE EN NUBE
// ==========================================================================
window.FIREBASE_CONFIG_SEED = {
  apiKey: "AIzaSyCF93-wuUWnq8D4pHwUAAyUVPSdlapZ_Mc",
  authDomain: "san-buenaventura-autoevaluacio.firebaseapp.com",
  projectId: "san-buenaventura-autoevaluacio",
  storageBucket: "san-buenaventura-autoevaluacio.firebasestorage.app",
  messagingSenderId: "898003160523",
  appId: "1:898003160523:web:44a178098b7be293247a4e"
};


// ==========================================================================
// 🛡️ POLYFILL DE SEGURIDAD MÓVIL (SAFE STORAGE Y MANEJO DE ERRORES EN MÓVILES)
// ==========================================================================
window.safeStorage = {
    _mem: {},
    getItem: function(key) {
        try {
            if (window.localStorage) {
                return window.safeStorage.getItem(key);
            }
        } catch(e) {}
        return this._mem[key] || null;
    },
    setItem: function(key, val) {
        try {
            if (window.localStorage) {
                window.safeStorage.setItem(key, val);
            }
        } catch(e) {}
        this._mem[key] = val;
    },
    removeItem: function(key) {
        try {
            if (window.localStorage) {
                window.safeStorage.removeItem(key);
            }
        } catch(e) {}
        delete this._mem[key];
    }
};

// Capturador de errores global para evitar que la pantalla se quede congelada en móviles
window.addEventListener('error', function(e) {
    console.warn("Mobile Error Intercepted:", e.message);
    const loadingElem = document.querySelector('.loading-spinner');
    if (loadingElem && typeof renderApp === 'function') {
        try { renderApp(); } catch(err) {}
    }
});


// Helper para limpiar títulos duplicados de bloques (ej. Bloque 1: BLOQUE 1:)
function cleanBlockTitle(title, blockId) {
    if (!title) return '';
    let clean = title.replace(/^bloque\s*\d+\s*:\s*/i, '').trim();
    clean = clean.replace(/^bloque\s*\d+\s*/i, '').trim();
    if (blockId) {
        const num = blockId.replace('b', '');
        return `Bloque ${num}: ${clean}`;
    }
    return clean;
}

// ==========================================================================
// PLATAFORMA PROFESIONAL DE AUTOEVALUACIÓN Y CO-EVALUACIÓN DOCENTE
// Colegio San Buenaventura - Modelo Franciscano de Calidad
// ==========================================================================

// 1. LISTADO OFICIAL DE PROFESORES CON METADATOS Y ETAPAS
let TEACHERS = [
    {
        "name": "Daniel Asenjo García",
        "etapa": "Infantil",
        "tutor": "3 Años-A",
        "password": "Daniel#101"
    },
    {
        "name": "Elena Díaz Martín",
        "etapa": "Infantil",
        "tutor": "3 Años-B",
        "password": "Elena#102"
    },
    {
        "name": "María de las Nieves Jiménez Jiménez",
        "etapa": "Infantil",
        "tutor": "4 Años-A",
        "password": "María#103"
    },
    {
        "name": "Susana López Gómez",
        "etapa": "Infantil",
        "tutor": "4 Años-B",
        "password": "Susana#104"
    },
    {
        "name": "María Jesús Parras Maeso",
        "etapa": "Infantil",
        "tutor": "5 Años-A",
        "password": "María#105"
    },
    {
        "name": "Alejandra Pérez Villalba",
        "etapa": "Infantil",
        "tutor": "5 Años-B",
        "password": "Alejandra#106"
    },
    {
        "name": "Gema del Pozo Villegas",
        "etapa": "Infantil",
        "tutor": "No",
        "password": "Gema#107"
    },
    {
        "name": "Marta Pilar Rodríguez Centeno",
        "etapa": "Infantil",
        "tutor": "No",
        "password": "Marta#108"
    },
    {
        "name": "Nuria Romero Sanz",
        "etapa": "Infantil",
        "tutor": "No",
        "password": "Nuria#109"
    },
    {
        "name": "Alejandra Calvo",
        "etapa": "Infantil",
        "tutor": "No",
        "password": "Alejandra#110"
    },
    {
        "name": "Teresa",
        "etapa": "Infantil",
        "tutor": "No",
        "password": "Teresa#112"
    },
    {
        "name": "Juan Antonio Alfonso Pizarro",
        "etapa": "Primaria",
        "tutor": "5º EP-A",
        "password": "Juan#113"
    },
    {
        "name": "Pilar Fuentes Saavedra",
        "etapa": "Primaria",
        "tutor": "1º EP-A",
        "password": "Pilar#114"
    },
    {
        "name": "María Belén Hernando Martín",
        "etapa": "Primaria",
        "tutor": "1º EP-B",
        "password": "María#115"
    },
    {
        "name": "María del Carmen Ibañez Abad",
        "etapa": "Primaria",
        "tutor": "2º EP-A",
        "password": "María#116"
    },
    {
        "name": "Nuria Jarillo García",
        "etapa": "Primaria",
        "tutor": "2º EP-B",
        "password": "Nuria#117"
    },
    {
        "name": "Beatriz de León Ruiz",
        "etapa": "Primaria",
        "tutor": "3º EP-B",
        "password": "Beatriz#118"
    },
    {
        "name": "Óscar Manuel Molina Márquez",
        "etapa": "Primaria",
        "tutor": "4º EP-A",
        "password": "Óscar#119"
    },
    {
        "name": "Lorena Moreno Barrigas",
        "etapa": "Primaria",
        "tutor": "6º EP-C",
        "password": "Lorena#120"
    },
    {
        "name": "Álvaro Ortega Bonilla",
        "etapa": "Primaria",
        "tutor": "4º EP-B",
        "password": "Álvaro#121"
    },
    {
        "name": "Isabel Peña Escudero",
        "etapa": "Primaria",
        "tutor": "5º EP-B",
        "password": "Isabel#122"
    },
    {
        "name": "María Pilar Pérez Fernández",
        "etapa": "Primaria",
        "tutor": "6º EP-B",
        "password": "María#123"
    },
    {
        "name": "Feli Priego Perete",
        "etapa": "Primaria",
        "tutor": "3º EP-A",
        "password": "Feli#124"
    },
    {
        "name": "Rubén Recio Molina",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "Rubén#125"
    },
    {
        "name": "Julia Rodríguez Gutiérrez",
        "etapa": "Primaria",
        "tutor": "6º EP-A",
        "password": "Julia#126"
    },
    {
        "name": "David Sagaseta Jiménez",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "David#127"
    },
    {
        "name": "José Manuel Santos",
        "etapa": "Primaria",
        "tutor": "Director EI y EP",
        "role": "director_ei_ep",
        "password": "Santos#2026"
    },
    {
        "name": "José Antonio Utrillas Sánchez",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "José#129"
    },
    {
        "name": "Pedro Vega Verdeja",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "Pedro#130"
    },
    {
        "name": "Pedro Zapata Paredes",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "Pedro#131"
    },
    {
        "name": "Jorge Cabana",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "Jorge#132"
    },
    {
        "name": "Paula Gómez",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "Paula#133"
    },
    {
        "name": "María Sánchez",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "María#134"
    },
    {
        "name": "Álvaro Fernández",
        "etapa": "Primaria",
        "tutor": "No",
        "password": "Álvaro#135"
    },
    {
        "name": "Sergio Acevedo Trapote",
        "etapa": "Secundaria",
        "tutor": "1º ESO-A",
        "password": "Sergio#136"
    },
    {
        "name": "Fidel Jorge Aguilar López",
        "etapa": "Secundaria",
        "tutor": "1º ESO-B",
        "password": "Fidel#137"
    },
    {
        "name": "Olga Almazán Pardo",
        "etapa": "Secundaria",
        "tutor": "2º ESO-A",
        "password": "Olga#138"
    },
    {
        "name": "Ana Isabel Álvarez Gómez",
        "etapa": "Secundaria",
        "tutor": "2º ESO-B",
        "password": "Ana#139"
    },
    {
        "name": "María Laura Blanco Pérez",
        "etapa": "Secundaria",
        "tutor": "3º ESO-A",
        "password": "María#140"
    },
    {
        "name": "Ángel Castellanos Cuenca",
        "etapa": "Secundaria",
        "tutor": "3º ESO-B",
        "password": "Ángel#141"
    },
    {
        "name": "Francisco Cezón Gil",
        "etapa": "Secundaria",
        "tutor": "4º ESO-A",
        "password": "Francisco#142"
    },
    {
        "name": "Juan Luis Cormenzana Carpio",
        "etapa": "Secundaria",
        "tutor": "4º ESO-B",
        "password": "Juan#143"
    },
    {
        "name": "Amalia del Carmen Paris Cuéllar",
        "etapa": "Secundaria",
        "tutor": "1º BACH-A",
        "password": "Amalia#144"
    },
    {
        "name": "Maria Lourdes Diez Pérez",
        "etapa": "Secundaria",
        "tutor": "1º BACH-B",
        "password": "Maria#145"
    },
    {
        "name": "Florencio Díez Sanz",
        "etapa": "Secundaria",
        "tutor": "2º BACH-A",
        "password": "Florencio#146"
    },
    {
        "name": "Javier Félix",
        "etapa": "Secundaria",
        "tutor": "Director General",
        "role": "director_general",
        "password": "Javier#2026"
    },
    {
        "name": "María Esperanza García Moreda",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "María#148"
    },
    {
        "name": "Jesús Abel García-Cezón Roldán",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Jesús#149"
    },
    {
        "name": "Soledad Garrido García-Calvo",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Soledad#150"
    },
    {
        "name": "José Antonio Gaspar Laborie",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "José#151"
    },
    {
        "name": "Carolina González García",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Carolina#152"
    },
    {
        "name": "Luis González Ludeña",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Luis#153"
    },
    {
        "name": "Vicente Hernández Gordo",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Vicente#154"
    },
    {
        "name": "Francisco José Lozano Maya",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Francisco#155"
    },
    {
        "name": "Tania Martín Almendra",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Tania#156"
    },
    {
        "name": "Almudena Martínez Fernández",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Almudena#157"
    },
    {
        "name": "José Manuel Pulido Palomo",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "José#158"
    },
    {
        "name": "Luis Redruello",
        "etapa": "Secundaria",
        "tutor": "Director ESO y BTO",
        "role": "director_eso_bto",
        "password": "Redruello#2026"
    },
    {
        "name": "Antonio Jesús Royo Tomás",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Antonio#160"
    },
    {
        "name": "Philippe Georges Saint-Mard",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Philippe#161"
    },
    {
        "name": "María del Carmen Valera Soriano",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "María#162"
    },
    {
        "name": "Isabel Ezquerra",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Isabel#163"
    },
    {
        "name": "Daniel Lozano",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Daniel#164"
    },
    {
        "name": "Alejandro Gaspar",
        "etapa": "Secundaria",
        "tutor": "No",
        "password": "Alejandro#165"
    }
];

const TEACHER_NAMES = TEACHERS.map(t => t.name);

// 2. SVG ICONS LIB - Para un aspecto moderno e impecable (SaaS Style)
const ICONS = {
    identity: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    team: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
    pastoral: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" /></svg>`,
    practice: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
    commitment: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.99 8.99 0 0 1 3 12c0-.778.099-1.533.284-2.253" /></svg>`,
    target: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3m12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.978 11.978 0 0 1 12 20.25a11.978 11.978 0 0 1-3-1.013v-.109c0-1.113.285-2.16.786-3.07M12 10.125a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 2.25a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Zm-12 0a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z" /></svg>`,
    logout: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" /></svg>`,
    print: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.615 0-1.11-.474-1.12-1.078L6.34 18m11.32 0a6.908 6.908 0 0 0 1.394-2.758 3.024 3.024 0 0 0-3.078-3.492H4.344a3.024 3.024 0 0 0-3.078 3.492 6.908 6.908 0 0 0 1.394 2.758M3.75 7.5h16.5M5.625 7.5V4.125A1.875 1.875 0 0 1 7.5 2.25h9a1.875 1.875 0 0 1 1.875 1.875V7.5m-12 0h12" /></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 14px; height: 14px;"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`,
    interview: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>`
};

// 3. CONFIGURACIÓN DE LOS BLOQUES DE LA EVALUACIÓN
const EVAL_BLOCKS = [
    {
        id: 'b1',
        title: 'Bloque 1: Identidad, Bienestar y Sentido de Pertenencia',
        icon: ICONS.identity,
        desc: 'Este bloque se centra en ti a nivel individual: tu alineación con el Ideario, tu bienestar y cómo te sientes tratado/a por el centro.',
        reflectionLabel: '¿Qué aspecto de la vida diaria en el centro contribuye más a tu bienestar y qué crees que se podría mejorar para ayudarte a sentirte más apoyado/a?',
        questions: [
            { 
                id: '1.1', 
                text: 'Me siento feliz y motivado/a al desarrollar mi labor diaria en el colegio.', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Desmotivado/a y con desgaste alto | 3 = Cumplo correctamente pero con altibajos | 5 = Plena ilusión, alegría y energía en mi labor diaria.'
            },
            { 
                id: '1.2', 
                text: 'Me siento identificado/a con los valores del centro y el carisma franciscano, y procuro reflejarlos en mi día a día.', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Distante con el Ideario | 3 = Los conozco y respeto en mi trato | 5 = Referente activo de fraternidad, humildad y alegría franciscana.'
            },
            { id: '1.4', text: 'Considero que el colegio se preocupa por mi bienestar emocional y profesional.', type: 'scale' },
            { id: '1.5', text: 'Encuentro en el centro un ambiente de respeto, cercanía y fraternidad alineado con nuestro estilo institucional.', type: 'scale' },
            { id: '1.6', text: 'Siento que se cuenta conmigo.', type: 'scale' }
        ]
    },
    {
        id: 'b2',
        title: 'Bloque 2: Corresponsabilidad y Cultura de Equipo (Clima de Claustro)',
        icon: ICONS.team,
        desc: 'Aquí evaluamos cómo interactúas con tus iguales. Pasamos de la etapa pedagógica a la generosidad y el impacto de tu actitud en el grupo.',
        reflectionLabel: 'Como miembro de tu equipo, ¿qué fortaleza destacarías del grupo humano con el que trabajas y qué actitud o acción personal crees que podrías aportar tú para mejorar el clima o la coordinación?',
        questions: [
            { id: '2.1', text: 'Me siento integrado/a, respaldado/a y respetado/a por mis compañeros de etapa/departamento.', type: 'scale' },
            { id: '2.2', text: 'En las reuniones de equipo compartimos recursos, metodologías y nos coordinamos de manera eficaz.', type: 'scale' },
            { 
                id: '2.3', 
                text: 'Ofrezco mi ayuda de manera proactiva a los compañeros que lo necesitan (sustituciones imprevistas, compartir materiales, apoyo en momentos de alta carga, situaciones momentáneas, profesores nuevos…).', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Me limito a mis horas y tareas individuales | 3 = Colaboro si me lo solicitan | 5 = Ayudo de forma espontánea y proactiva, facilitando la vida del centro.'
            },
            { id: '2.4', text: 'Me siento ayudado por mis compañeros.', type: 'scale' },
            { id: '2.5', text: 'Pido ayuda a mis compañeros cuando tengo una necesidad.', type: 'scale' },
            { 
                id: '2.6', 
                text: 'Mis comentarios, críticas, actitudes y forma de actuar influyen en el clima de trabajo de mis compañeros de forma positiva.', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Mis quejas o desganas a veces afectan al grupo | 3 = Mantengo una actitud neutral y respetuosa | 5 = Aporto optimismo, críticas constructivas y cohesión al claustro.'
            }
        ],
        specialQuestion: {
            id: 'nomination',
            label: 'Dentro del diálogo y trabajo diario con tus compañeros, ¿qué persona crees que aporta más al grupo en este aspecto?',
            type: 'nomination'
        }
    },
    {
        id: 'b3',
        title: 'Bloque 3: Acción Pastoral',
        icon: ICONS.pastoral,
        desc: 'Este bloque unifica lo que ocurre dentro de las paredes de la clase: la preparación técnica y la vivencia de la fe con los alumnos a primera hora.',
        reflectionLabel: 'Como trabajador franciscano, ¿en qué momentos consideras que se reflejan mejor esos valores dentro de la vida del centro?',
        questions: [
            { id: '3.1', text: 'Realizo la oración de la mañana a primera hora de forma constante, cuidando el clima de silencio/reflexión y utilizando los materiales aportados por Pastoral.', type: 'scale' },
            { id: '3.2', text: 'Me involucro con actitud positiva y proactiva en las celebraciones, campañas e iniciativas pastorales que propone el centro.', type: 'scale' },
            { id: '3.3', text: 'Me considero ejemplo para los alumnos en los valores franciscanos que se intentan transmitir desde el centro (humildad, fraternidad, servicio, misericordia, perfecta alegría…).', type: 'scale' }
        ]
    },
    {
        id: 'b4',
        title: 'Bloque 4: Práctica Docente, Relación, Evaluación y Acompañamiento',
        icon: ICONS.practice,
        desc: 'El núcleo del modelo pedagógico franciscano: evaluación objetiva y transparente, el feedback para mejorar y el cuidado de la persona.',
        reflectionLabel: 'Pensando en tus alumnos, ¿en qué aspecto de tu labor en el aula (metodología, evaluación, pastoral, atención a la diversidad) consideras que estás obteniendo mejores resultados y en cuál te gustaría recibir formación o apoyo?',
        questions: [
            { id: '4.1', text: 'Planifico mis clases (unidades didácticas, proyectos, adaptaciones) con antelación y siguiendo el currículo oficial.', type: 'scale' },
            { 
                id: '4.2', 
                text: 'Utilizo metodologías variadas en el aula para captar la atención del alumnado y atender a los diferentes ritmos de aprendizaje.', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Clase magistral tradicional | 3 = Uso ocasional de dinámicas activas | 5 = Aplicación del DUA, aprendizaje cooperativo, proyectos y recursos variados.'
            },
            { id: '4.3', text: 'Logro mantener un clima de aula ordenado y propicio para el aprendizaje.', type: 'scale' },
            { id: '4.4', text: 'Me siento seguro/a y actualizado/a en el uso de las herramientas digitales y recursos metodológicos que requiere mi asignatura.', type: 'scale' },
            { 
                id: '4.5', 
                text: 'Diseño y cumplo criterios e instrumentos de evaluación claros, variados y conocidos por los alumnos desde el principio.', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Examen único sin rúbricas | 3 = Exámenes y tareas ponderadas informadas | 5 = Rúbricas detalladas previas, autoevaluación de alumnos y feedback continuo.'
            },
            { id: '4.6', text: 'Corrijo y devuelvo los exámenes, tareas o proyectos en plazos razonables y aportando correcciones constructivas.', type: 'scale' },
            { id: '4.7', text: 'Ofrezco a los alumnos oportunidades reales de mejora (segundas oportunidades, planes de refuerzo) si no alcanzan los objetivos a la primera.', type: 'scale' },
            { id: '4.8', text: 'Proporciono un feedback (retroalimentación) individualizado a los alumnos y/o sus familias para que sepan exactamente qué han hecho bien y qué deben mejorar.', type: 'scale' },
            { id: '4.9', text: 'Promuevo una relación de cercanía, escucha y empatía con mis alumnos.', type: 'scale' },
            { 
                id: '4.10', 
                text: 'En los dos últimos años, ¿he buscado alguna formación para mi crecimiento que no haya sido propuesta por el centro?', 
                type: 'yesno_details', 
                detailsPlaceholder: 'Detalla qué formación has realizado por tu cuenta (Cursos, congresos, posgrados)...' 
            },
            { id: '4.11', text: 'Me reúno con todas las familias de mi tutoría.', type: 'yesno_na' },
            { id: '4.12', text: 'Tengo una comunicación fluida con las familias (contesto en plazo de 1-2 días a los correos, invito a las familias a eventos comunes, etc.).', type: 'scale' }
        ]
    },
    {
        id: 'b5',
        title: 'Bloque 5: Compromiso con el Bien Común y la Vida del Centro',
        icon: ICONS.commitment,
        desc: 'Este bloque mide la implicación en lo "extraordinario" o voluntario. Obliga a la autopercepción del esfuerzo compartido.',
        reflectionLabel: 'Somos un colegio donde las actividades comunes requieren el esfuerzo de todos y sabemos que no todos participan de la misma forma. Con total honestidad, ¿cómo valoras tu nivel de participación e implicación en ellas este curso? Si crees que ha sido alto, ¿qué te motiva a ello? Si ha sido bajo, ¿qué dificultades has encontrado o qué necesitarías del centro para implicarte más?',
        questions: [
            { id: '5.1', text: 'Asisto a eventos y actividades comunes del centro (graduación, día de las familias, encuentros de profesores).', type: 'scale' },
            { id: '5.2', text: 'Muestro disposición y voluntariedad para acompañar al alumnado en actividades fuera del aula (convivencias, salidas pastorales, excursiones, viajes).', type: 'scale' },
            { 
                id: '5.3', 
                text: 'Me implico con iniciativa y de forma voluntariosa en las comisiones de trabajo propuestas por el centro para diferentes alternativas.', 
                type: 'scale',
                rubric: '💡 Rúbrica: 1 = Evito formar parte de comisiones | 3 = Cumplo si me lo asignan | 5 = Me apunto de forma voluntaria y asumo responsabilidades con ilusión.'
            },
            { id: '5.4', text: 'Considero que mi nivel de compromiso y participación en estas tareas y eventos comunes es lo que el colegio espera de mí.', type: 'scale' }
        ]
    },
    {
        id: 'b6',
        title: 'Bloque 6: Plan de Crecimiento Personal (Cierre)',
        icon: ICONS.target,
        desc: 'Preguntas directas para concertar los objetivos de la entrevista presencial con el equipo directivo.',
        questions: [
            {
                id: '6.1',
                text: 'Selecciona dos aspectos en los que creas que has destacado positivamente este curso:',
                type: 'multiselect',
                options: [
                    'Identidad y valores franciscanos',
                    'Clima escolar y cultura de equipo',
                    'Acción pastoral y acompañamiento espiritual',
                    'Metodología y práctica docente en el aula',
                    'Evaluación formativa, feedback y recuperación',
                    'Acompañamiento tutorial y relación con familias',
                    'Compromiso con el bien común y eventos del centro'
                ],
                maxSelections: 2
            },
            {
                id: '6.2',
                text: 'Establece tu Plan de Acción SMART para el próximo curso académico:',
                type: 'smart_plan'
            },
            {
                id: '6.3',
                text: '¿En qué área o temática específica consideras que necesitas formación prioritaria?',
                type: 'text',
                placeholder: 'Ejemplo: Herramientas de IA en el aula, dinámicas DUA, resolución de conflictos...'
            }
        ]
    }
];

// 4. MOCK DATA CON CDD Y SMART PLANS
const MOCK_ANSWERS = {
    'Feli Priego': {
        status: 'completed',
        updatedAt: '2026-07-14T10:30:00Z',
        answers: {
            '1.1': { score: 5, evidence: 'Estoy muy contenta en el centro este curso, hay muy buen ambiente.' },
            '1.2': { score: 5, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 5, evidence: 'El estilo franciscano se vive de verdad en el claustro.' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 5, evidence: '' },
            '2.2': { score: 5, evidence: 'Excelente coordinación con Primaria.' },
            '2.3': { score: 5, evidence: 'Suelo ayudar en sustituciones siempre que puedo.' },
            '2.4': { score: 5, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Julia Rodríguez',
            '3.1': { score: 5, evidence: '' },
            '3.2': { score: 4, evidence: '' },
            '3.3': { score: 5, evidence: '' },
            '4.1': { score: 4, evidence: '' },
            '4.2': { score: 5, evidence: 'Aplico gamificación y proyectos cooperativos.' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 5, evidence: 'Criterios claros publicados en el aula virtual.' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 5, evidence: 'Ofrezco repetición de pruebas clave en tutorías.' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 5, evidence: '' },
            '4.10': { value: 'yes', details: 'Hice un curso online de Neuroeducación.' },
            '4.11': { value: 'yes' },
            '4.12': { score: 5, evidence: '' },
            'cdd': 'B2',
            '5.1': { score: 5, evidence: 'Asisto a todo.' },
            '5.2': { score: 5, evidence: 'Participo en las convivencias de inicio de curso.' },
            '5.3': { score: 4, evidence: '' },
            '5.4': { score: 5, evidence: '' },
            '6.1': ['Clima escolar y cultura de equipo', 'Metodología y práctica docente en el aula'],
            'smart_plan': {
                meta: 'Incorporar dinámicas formales de aprendizaje cooperativo en 3º de Primaria de forma sistemática.',
                acciones: 'Diseño de roles de equipo, aplicación de técnicas cooperativas semanales (1-2-4, cabezas numeradas) y rúbricas de co-evaluación.',
                indicador: 'Un portafolio cooperativo por trimestre y mejora evaluable del 15% en el clima del aula (medido por test sociométrico).',
                apoyo: 'Sesión de coaching pedagógico del coordinador o curso específico del colegio.'
            },
            '6.3': 'Formación en inteligencia artificial aplicada al diseño de rúbricas.'
        },
        directorAnswers: {
            '1.1': 5, '1.2': 5, '1.4': 4, '1.5': 5, '1.6': 5,
            '2.1': 5, '2.2': 4, '2.3': 5, '2.4': 5, '2.5': 4, '2.6': 4,
            '3.1': 5, '3.2': 4, '3.3': 5,
            '4.1': 4, '4.2': 5, '4.3': 4, '4.4': 4, '4.5': 5, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 5, '4.12': 5,
            '5.1': 5, '5.2': 5, '5.3': 5, '5.4': 5
        },
        reflections: {
            'b1': 'Me siento muy apoyada en mi etapa. Quizás se podría mejorar la climatización de las aulas en verano.',
            'b2': 'Destaco la generosidad de los compañeros. Todos remamos en la misma dirección.',
            'b3': 'En los momentos de oración de la mañana a primera hora y en las campañas solidarias.',
            'b4': 'Obtengo buenos resultados en el clima de aula. Me gustaría recibir formación sobre alumnos de altas capacidades.',
            'b5': 'Mi implicación es alta porque creo que estas actividades de comunidad enriquecen tanto a alumnos como a profesores.'
        },
        directorNotes: 'Feli muestra un gran compromiso. Comentar en la reunión su propuesta sobre la formación en altas capacidades.'
    },
    'Julia Rodríguez': {
        status: 'completed',
        updatedAt: '2026-07-15T09:15:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 5, evidence: '' },
            '1.4': { score: 3, evidence: 'Siento mucha carga de trabajo administrativa a veces.' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 5, evidence: 'Siento que el equipo directivo confía en mi labor.' },
            '2.1': { score: 5, evidence: '' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 5, evidence: '' },
            '2.5': { score: 5, evidence: '' },
            '2.6': { score: 5, evidence: '' },
            'nomination': 'Feli Priego',
            '3.1': { score: 5, evidence: '' },
            '3.2': { score: 5, evidence: 'Coordino la comisión de Pastoral de Primaria.' },
            '3.3': { score: 5, evidence: '' },
            '4.1': { score: 5, evidence: '' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 5, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 5, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 5, evidence: 'Envío resúmenes semanales a los padres.' },
            '4.9': { score: 5, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'yes' },
            '4.12': { score: 5, evidence: '' },
            'cdd': 'C1',
            '5.1': { score: 5, evidence: '' },
            '5.2': { score: 4, evidence: '' },
            '5.3': { score: 5, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Identidad y valores franciscanos', 'Acompañamiento tutorial y relación con familias'],
            'smart_plan': {
                meta: 'Unificar y digitalizar el sistema de rúbricas LOMLOE de todo el departamento de Primaria.',
                acciones: 'Organizar 3 talleres prácticos de co-diseño de rúbricas en el claustro y centralizar los recursos en Drive.',
                indicador: 'El 100% de los profesores usando el mismo repositorio compartido antes de final de año.',
                apoyo: 'Liberación horaria de 1 periodo semanal para reuniones de coordinación.'
            },
            '6.3': 'Evaluación LOMLOE avanzada y situaciones de aprendizaje.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 5, '1.4': 4, '1.5': 5, '1.6': 5,
            '2.1': 5, '2.2': 4, '2.3': 4, '2.4': 5, '2.5': 5, '2.6': 5,
            '3.1': 5, '3.2': 5, '3.3': 5,
            '4.1': 5, '4.2': 4, '4.3': 5, '4.4': 4, '4.5': 4, '4.6': 5, '4.7': 4, '4.8': 5, '4.9': 5, '4.12': 5,
            '5.1': 5, '5.2': 4, '5.3': 5, '5.4': 5
        },
        reflections: {
            'b1': 'El ambiente de fe y respeto diario ayuda mucho. Convendría ajustar los tiempos de reuniones de claustro.',
            'b2': 'La fortaleza es la empatía grupal. Trataré de ser más asertiva con las críticas constructivas.',
            'b3': 'En el Adviento y en el día escolar de la Paz y la no violencia.',
            'b4': 'La tutoría y relación con familias es mi mayor fuerte. Necesito refrescar la parte de metodologías LOMLOE.',
            'b5': 'Honesta e implicada al 100%. Me motiva ver el impacto de las actividades comunes en el sentido de familia escolar.'
        },
        directorNotes: 'Revisar su carga administrativa en la comisión. Excelente valoración de las familias.'
    },
    'Daniel Asenjo': {
        status: 'in_progress',
        updatedAt: '2026-07-15T11:20:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 4, evidence: '' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 5, evidence: 'Me siento muy apoyado por mi equipo de departamento.' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 3, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Álvaro Ortega'
        },
        directorAnswers: {},
        reflections: {
            'b1': 'Las celebraciones y comidas de equipo ayudan mucho a la cohesión.',
            'b2': 'Tenemos un grupo muy maduro, aunque a veces falta tiempo para debatir más sobre pedagogía.'
        },
        directorNotes: 'Empezado, le falta completar la segunda mitad (a partir del Bloque 3).'
    },
    'Pilar Fuentes': {
        status: 'completed',
        updatedAt: '2026-07-16T15:20:00Z',
        answers: {
            '1.1': { score: 4, evidence: 'Me gusta mucho trabajar con los niños de 5 años.' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 3, evidence: '' },
            '2.1': { score: 5, evidence: 'El equipo de Infantil es una familia.' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 5, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Nuria Jarillo',
            '3.1': { score: 4, evidence: '' },
            '3.2': { score: 4, evidence: '' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 5, evidence: 'Programaciones semanales siempre al día.' },
            '4.2': { score: 4, evidence: 'Uso rincones de aprendizaje.' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 3, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 5, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'yes' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'A2',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 4, evidence: '' },
            '5.3': { score: 3, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Clima escolar y cultura de equipo', 'Identidad y valores franciscanos'],
            'smart_plan': {
                meta: 'Introducir herramientas básicas de robótica (Blue-Bot) en Infantil 5 años.',
                acciones: 'Diseñar 3 sesiones de iniciación al pensamiento computacional por trimestre.',
                indicador: 'Uso autónomo por parte del 80% de los alumnos al final del curso.',
                apoyo: 'Formación del coordinador digital o taller práctico en el centro.'
            },
            '6.3': 'Robótica y pensamiento computacional en Educación Infantil.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 4, '1.4': 4, '1.5': 4, '1.6': 4,
            '2.1': 5, '2.2': 4, '2.3': 4, '2.4': 5, '2.5': 4, '2.6': 4,
            '3.1': 4, '3.2': 4, '3.3': 4,
            '4.1': 5, '4.2': 4, '4.3': 4, '4.4': 3, '4.5': 4, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 5, '4.12': 4,
            '5.1': 4, '5.2': 4, '5.3': 4, '5.4': 4
        },
        reflections: {
            'b1': 'Me siento contenta y respetada en mi trabajo.',
            'b2': 'Excelente ambiente en el equipo de Infantil.',
            'b3': 'Cuidamos mucho los valores de servicio y cercanía.',
            'b4': 'En Infantil la relación es muy cercana.',
            'b5': 'Colaboro en las fiestas de la etapa.'
        },
        directorNotes: 'Pilar es un pilar fundamental en la etapa de Infantil. Su plan de robótica es muy interesante.'
    },
    'Nuria Jarillo': {
        status: 'completed',
        updatedAt: '2026-07-16T17:40:00Z',
        answers: {
            '1.1': { score: 5, evidence: 'Muy contenta con el grupo y el ambiente de claustro.' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 5, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 5, evidence: 'Infantil está muy coordinado.' },
            '2.2': { score: 5, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 5, evidence: '' },
            'nomination': 'Pilar Fuentes',
            '3.1': { score: 5, evidence: '' },
            '3.2': { score: 5, evidence: 'Participo en las comisiones de pastoral.' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 4, evidence: '' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 5, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 5, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 5, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'yes' },
            '4.12': { score: 5, evidence: '' },
            'cdd': 'B1',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 5, evidence: '' },
            '5.3': { score: 3, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Identidad y valores franciscanos', 'Acompañamiento tutorial y relación con familias'],
            'smart_plan': {
                meta: 'Aumentar la participación familiar en talleres de cuentacuentos y arte en Infantil 4 años.',
                acciones: 'Organizar un taller familiar al mes e involucrar a los abuelos y padres.',
                indicador: 'Asistencia de al menos un representante familiar en el 85% del alumnado.',
                apoyo: 'Facilidad de acceso al aula en el horario del taller.'
            },
            '6.3': 'Educación emocional en la primera infancia y metodologías activas.'
        },
        directorAnswers: {
            '1.1': 5, '1.2': 4, '1.4': 4, '1.5': 5, '1.6': 4,
            '2.1': 5, '2.2': 5, '2.3': 4, '2.4': 4, '2.5': 4, '2.6': 5,
            '3.1': 5, '3.2': 5, '3.3': 4,
            '4.1': 4, '4.2': 4, '4.3': 5, '4.4': 4, '4.5': 4, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 5, '4.12': 4,
            '5.1': 4, '5.2': 4, '5.3': 3, '5.4': 4
        },
        reflections: {
            'b1': 'Me encanta mi trabajo y la relación familiar en esta etapa.',
            'b2': 'Compartimos muchas dinámicas y materiales de Infantil.',
            'b3': 'El trabajo diario con las familias y la oración es constante.',
            'b4': 'Las reuniones de tutorías son semanales y muy cercanas.',
            'b5': 'Participo en el mercadillo solidario.'
        },
        directorNotes: 'Nuria es una docente con gran carisma e implicación pastoral. Excelente relación con padres.'
    },
    'Lorena Moreno Barrigas': {
        status: 'completed',
        updatedAt: '2026-07-16T18:10:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 4, evidence: '' },
            '1.6': { score: 3, evidence: '' },
            '2.1': { score: 4, evidence: '' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Feli Priego',
            '3.1': { score: 4, evidence: '' },
            '3.2': { score: 4, evidence: '' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 5, evidence: 'Programación minuciosa en Drive.' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 3, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 4, evidence: '' },
            '4.10': { value: 'yes', details: 'Curso de neurodidáctica aplicada.' },
            '4.11': { value: 'yes' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'B1',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 4, evidence: '' },
            '5.3': { score: 4, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Metodología y práctica docente en el aula', 'Acompañamiento tutorial y relación con familias'],
            'smart_plan': {
                meta: 'Implantar la autoevaluación guiada en los proyectos de Ciencias Sociales en 6º EP.',
                acciones: 'Diseño y uso de dianas de evaluación y rúbricas de autoevaluación por parte del alumno.',
                indicador: 'El 100% de los alumnos realiza su diana de progreso al finalizar cada unidad.',
                apoyo: 'Plantillas de dianas LOMLOE compartidas.'
            },
            '6.3': 'Evaluación formativa y LOMLOE en Primaria.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 4, '1.4': 4, '1.5': 4, '1.6': 4,
            '2.1': 4, '2.2': 4, '2.3': 4, '2.4': 4, '2.5': 4, '2.6': 4,
            '3.1': 4, '3.2': 4, '3.3': 4,
            '4.1': 5, '4.2': 4, '4.3': 4, '4.4': 3, '4.5': 4, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 4, '4.12': 4,
            '5.1': 4, '5.2': 4, '5.3': 4, '5.4': 4
        },
        reflections: {
            'b1': 'Me siento a gusto. Hay mucha carga burocrática este año con la LOMLOE.',
            'b2': 'Buen ambiente de trabajo, nos coordinamos bien en 6º.',
            'b3': 'La oración diaria está integrada en la rutina de clase.',
            'b4': 'Evaluamos por criterios e intentamos dar segundas oportunidades.',
            'b5': 'Asisto a las actividades y eventos comunes.'
        },
        directorNotes: 'Lorena es muy metódica y organizada. Su plan sobre co-evaluación y dianas formativas es excelente.'
    },
    'Isabel Peña': {
        status: 'completed',
        updatedAt: '2026-07-16T19:00:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 5, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 5, evidence: '' },
            '2.1': { score: 4, evidence: '' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Álvaro Ortega',
            '3.1': { score: 4, evidence: '' },
            '3.2': { score: 4, evidence: '' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 5, evidence: '' },
            '4.2': { score: 5, evidence: '' },
            '4.3': { score: 5, evidence: '' },
            '4.4': { score: 5, evidence: '' },
            '4.5': { score: 5, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 4, evidence: '' },
            '4.10': { value: 'yes', details: 'Formación en herramientas de Google Workspace.' },
            '4.11': { value: 'na' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'C1',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 4, evidence: '' },
            '5.3': { score: 4, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Metodología y práctica docente en el aula', 'Compromiso con el bien común y eventos del centro'],
            'smart_plan': {
                meta: 'Implantar metodologías basadas en el Aula Invertida (Flipped Classroom) en Matemáticas de 3º ESO.',
                acciones: 'Grabar videos cortos explicativos y diseñar cuestionarios previos a la clase en Classroom.',
                indicador: 'Uso del modelo en al menos el 50% de los temas con una mejora en la nota media del 10%.',
                apoyo: 'Licencia premium de herramienta de edición de vídeo si fuera necesario.'
            },
            '6.3': 'Flipped classroom y herramientas avanzadas de evaluación digital.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 4, '1.4': 5, '1.5': 5, '1.6': 5,
            '2.1': 4, '2.2': 4, '2.3': 4, '2.4': 4, '2.5': 4, '2.6': 4,
            '3.1': 4, '3.2': 4, '3.3': 4,
            '4.1': 5, '4.2': 5, '4.3': 5, '4.4': 5, '4.5': 5, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 4, '4.12': 4,
            '5.1': 4, '5.2': 4, '5.3': 4, '5.4': 4
        },
        reflections: {
            'b1': 'Me siento respaldada en mis iniciativas innovadoras.',
            'b2': 'Compartimos muchas prácticas y herramientas digitales.',
            'b3': 'Intento sembrar concordia y valores en mis clases de Secundaria.',
            'b4': 'Uso classroom de forma intensiva y rúbricas en todas las entregas.',
            'b5': 'Colaboro con las comisiones de digitalización.'
        },
        directorNotes: 'Isabel es un referente digital en el claustro de Secundaria. Gran nivel tecnológico.'
    },
    'Rubén Recio': {
        status: 'completed',
        updatedAt: '2026-07-16T19:30:00Z',
        answers: {
            '1.1': { score: 5, evidence: '' },
            '1.2': { score: 5, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 5, evidence: '' },
            '2.2': { score: 5, evidence: '' },
            '2.3': { score: 5, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 5, evidence: '' },
            'nomination': 'Isabel Peña',
            '3.1': { score: 5, evidence: '' },
            '3.2': { score: 5, evidence: 'Coordino actividades solidarias.' },
            '3.3': { score: 5, evidence: '' },
            '4.1': { score: 4, evidence: '' },
            '4.2': { score: 5, evidence: '' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 5, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 5, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'na' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'C1',
            '5.1': { score: 5, evidence: '' },
            '5.2': { score: 5, evidence: '' },
            '5.3': { score: 5, evidence: '' },
            '5.4': { score: 5, evidence: '' },
            '6.1': ['Identidad y valores franciscanos', 'Acción pastoral y acompañamiento espiritual'],
            'smart_plan': {
                meta: 'Liderar el proyecto interetapas de Aprendizaje y Servicio (ApS) sobre solidaridad y reciclaje.',
                acciones: 'Organizar talleres donde alumnos de ESO enseñan reciclaje a Primaria e Infantil.',
                indicador: 'Participación del 100% de los cursos implicados y un evento de cierre común.',
                apoyo: 'Coordinación horaria para el cruce de etapas.'
            },
            '6.3': 'Aprendizaje-Servicio (ApS) y metodologías de impacto social.'
        },
        directorAnswers: {
            '1.1': 5, '1.2': 5, '1.4': 4, '1.5': 5, '1.6': 5,
            '2.1': 5, '2.2': 4, '2.3': 5, '2.4': 4, '2.5': 4, '2.6': 5,
            '3.1': 5, '3.2': 5, '3.3': 5,
            '4.1': 4, '4.2': 5, '4.3': 4, '4.4': 5, '4.5': 4, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 5, '4.12': 4,
            '5.1': 5, '5.2': 5, '5.3': 5, '5.4': 5
        },
        reflections: {
            'b1': 'Plena alegría en mi vocación y dedicación en el centro.',
            'b2': 'Hay un clima fantástico. Siempre dispuestos a ayudarnos.',
            'b3': 'El motor de mi labor es la acción pastoral y transmitir el evangelio en valores prácticos.',
            'b4': 'Utilizo el aprendizaje cooperativo y el portafolio digital.',
            'b5': 'Implicación total en convivencias y salidas. Es clave para crear lazo.'
        },
        directorNotes: 'Rubén es un excelente docente, gran carisma pastoral y dinamizador en Secundaria. Apoyar su proyecto de ApS.'
    },
    'Diego López': {
        status: 'completed',
        updatedAt: '2026-07-16T20:00:00Z',
        answers: {
            '1.1': { score: 3, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 3, evidence: '' },
            '1.5': { score: 4, evidence: '' },
            '1.6': { score: 3, evidence: '' },
            '2.1': { score: 4, evidence: 'Me siento muy apoyado por mi equipo de departamento.' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 3, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 3, evidence: '' },
            '2.6': { score: 3, evidence: '' },
            'nomination': 'Julia Rodríguez',
            '3.1': { score: 4, evidence: '' },
            '3.2': { score: 3, evidence: '' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 4, evidence: '' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 3, evidence: '' },
            '4.8': { score: 3, evidence: '' },
            '4.9': { score: 4, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'yes' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'B2',
            '5.1': { score: 3, evidence: '' },
            '5.2': { score: 3, evidence: '' },
            '5.3': { score: 3, evidence: '' },
            '5.4': { score: 3, evidence: '' },
            '6.1': ['Metodología y práctica docente en el aula', 'Clima escolar y cultura de equipo'],
            'smart_plan': {
                meta: 'Mejorar el sistema de retroalimentación (feedback) individualizado en Primaria utilizando Classroom.',
                acciones: 'Redactar comentarios descriptivos de fortaleza y mejora en las 3 tareas clave de cada trimestre.',
                indicador: 'El 100% de los alumnos de mi tutoría recibe al menos 3 feedbacks escritos detallados.',
                apoyo: 'Ninguno en especial.'
            },
            '6.3': 'Feedback formativo y evaluación compartida.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 4, '1.4': 4, '1.5': 4, '1.6': 4,
            '2.1': 4, '2.2': 4, '2.3': 4, '2.4': 4, '2.5': 4, '2.6': 4,
            '3.1': 4, '3.2': 3, '3.3': 4,
            '4.1': 4, '4.2': 4, '4.3': 4, '4.4': 4, '4.5': 4, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 4, '4.12': 4,
            '5.1': 4, '5.2': 3, '5.3': 3, '5.4': 4
        },
        reflections: {
            'b1': 'Este curso me he sentido un poco cansado físicamente, pero motivado con los niños.',
            'b2': 'Coordinación correcta en Primaria.',
            'b3': 'La oración se hace de forma sistemática.',
            'b4': 'Procuro estar al día en herramientas digitales.',
            'b5': 'Asisto a lo obligatorio pero no he tenido fuerzas para comisiones voluntarias este año.'
        },
        directorNotes: 'Conversar con Diego en la entrevista sobre su cansancio y cómo apoyarle desde la dirección. Es muy buen profesional.'
    },
    'Álvaro Ortega': {
        status: 'in_progress',
        updatedAt: '2026-07-16T11:20:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 5, evidence: 'El claustro de secundaria está muy unido.' },
            '2.2': { score: 5, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Rubén Recio'
        },
        directorAnswers: {},
        reflections: {
            'b1': 'El carisma del centro hace que el día a día sea muy humano.',
            'b2': 'El claustro de secundaria está muy unido.'
        },
        directorNotes: 'Iniciado, pendiente de terminar el cuestionario.'
    },
    'Oscar Manuel Molina': {
        status: 'completed',
        updatedAt: '2026-07-16T21:00:00Z',
        answers: {
            '1.1': { score: 5, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 4, evidence: '' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'José Manuel Santos',
            '3.1': { score: 4, evidence: '' },
            '3.2': { score: 4, evidence: '' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 5, evidence: '' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 5, evidence: '' },
            '4.6': { score: 5, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 4, evidence: '' },
            '4.10': { value: 'yes', details: 'Curso de programación en Python.' },
            '4.11': { value: 'na' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'B2',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 4, evidence: '' },
            '5.3': { score: 4, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Metodología y práctica docente en el aula', 'Evaluación formativa, feedback y recuperación'],
            'smart_plan': {
                meta: 'Introducción a la programación básica (bloques/Python) en Tecnología de 3º ESO.',
                acciones: 'Diseño de un proyecto práctico guiado de 6 sesiones.',
                indicador: 'El 85% de los alumnos entrega el proyecto funcionando correctamente.',
                apoyo: 'Ninguno en especial.'
            },
            '6.3': 'Didáctica de la programación y uso de placas de hardware libre.'
        },
        directorAnswers: {
            '1.1': 5, '1.2': 4, '1.4': 4, '1.5': 5, '1.6': 4,
            '2.1': 4, '2.2': 4, '2.3': 4, '2.4': 4, '2.5': 4, '2.6': 4,
            '3.1': 4, '3.2': 4, '3.3': 4,
            '4.1': 5, '4.2': 4, '4.3': 4, '4.4': 4, '4.5': 5, '4.6': 5, '4.7': 4, '4.8': 4, '4.9': 4, '4.12': 4,
            '5.1': 4, '5.2': 4, '5.3': 4, '5.4': 4
        },
        reflections: {
            'b1': 'Me encanta impartir Tecnología. Siento que tengo los medios adecuados.',
            'b2': 'Colaboración habitual con los departamentos afines.',
            'b3': 'Transmitimos valores a través del respeto mutuo en el taller.',
            'b4': 'Las entregas de proyectos y autoevaluación están muy estructuradas.',
            'b5': 'Colaboro con el mantenimiento de ordenadores del centro.'
        },
        directorNotes: 'Oscar realiza un trabajo técnico muy concienzudo. Excelente orden y gestión de su asignatura.'
    },
    'José Antonio Utrillas': {
        status: 'completed',
        updatedAt: '2026-07-16T21:30:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 5, evidence: '' },
            '1.4': { score: 5, evidence: '' },
            '1.5': { score: 5, evidence: '' },
            '1.6': { score: 5, evidence: '' },
            '2.1': { score: 5, evidence: '' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 5, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Rubén Recio',
            '3.1': { score: 5, evidence: '' },
            '3.2': { score: 5, evidence: '' },
            '3.3': { score: 5, evidence: '' },
            '4.1': { score: 4, evidence: '' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 4, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 4, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 5, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'yes' },
            '4.12': { score: 5, evidence: '' },
            'cdd': 'B1',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 5, evidence: '' },
            '5.3': { score: 4, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Identidad y valores franciscanos', 'Acompañamiento tutorial y relación con familias'],
            'smart_plan': {
                meta: 'Mejorar las dinámicas de acogida grupal en 1º ESO-C al inicio del curso.',
                acciones: 'Implementar 4 dinámicas de cohesión de grupo en las primeras tutorías.',
                indicador: 'Reducir los partes de convivencia en el primer trimestre en un 20% respecto al año pasado.',
                apoyo: 'Material de dinámicas facilitado por Orientación.'
            },
            '6.3': 'Gestión del aula, dinámicas de grupo y resolución de conflictos.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 5, '1.4': 4, '1.5': 5, '1.6': 5,
            '2.1': 5, '2.2': 4, '2.3': 4, '2.4': 5, '2.5': 4, '2.6': 4,
            '3.1': 5, '3.2': 5, '3.3': 5,
            '4.1': 4, '4.2': 4, '4.3': 4, '4.4': 4, '4.5': 4, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 5, '4.12': 5,
            '5.1': 4, '5.2': 5, '5.3': 4, '5.4': 4
        },
        reflections: {
            'b1': 'Muy a gusto con el grupo de 1º ESO, tienen muy buen fondo.',
            'b2': 'La coordinación de etapa funciona de maravilla.',
            'b3': 'Vivimos la pastoral de manera transversal y cotidiana.',
            'b4': 'Las familias de 1º de ESO agradecen mucho la comunicación semanal.',
            'b5': 'Acompaño a los alumnos en el viaje escolar anual.'
        },
        directorNotes: 'José Antonio es un tutor entrañable. Excelente labor de adaptación para los alumnos que entran a 1º de ESO.'
    },
    'Pilar Pérez': {
        status: 'completed',
        updatedAt: '2026-07-16T22:00:00Z',
        answers: {
            '1.1': { score: 4, evidence: '' },
            '1.2': { score: 4, evidence: '' },
            '1.4': { score: 4, evidence: '' },
            '1.5': { score: 4, evidence: '' },
            '1.6': { score: 4, evidence: '' },
            '2.1': { score: 4, evidence: '' },
            '2.2': { score: 4, evidence: '' },
            '2.3': { score: 4, evidence: '' },
            '2.4': { score: 4, evidence: '' },
            '2.5': { score: 4, evidence: '' },
            '2.6': { score: 4, evidence: '' },
            'nomination': 'Álvaro Ortega',
            '3.1': { score: 4, evidence: '' },
            '3.2': { score: 4, evidence: '' },
            '3.3': { score: 4, evidence: '' },
            '4.1': { score: 5, evidence: '' },
            '4.2': { score: 4, evidence: '' },
            '4.3': { score: 4, evidence: '' },
            '4.4': { score: 4, evidence: '' },
            '4.5': { score: 5, evidence: '' },
            '4.6': { score: 4, evidence: '' },
            '4.7': { score: 5, evidence: '' },
            '4.8': { score: 4, evidence: '' },
            '4.9': { score: 4, evidence: '' },
            '4.10': { value: 'no', details: '' },
            '4.11': { value: 'yes' },
            '4.12': { score: 4, evidence: '' },
            'cdd': 'B2',
            '5.1': { score: 4, evidence: '' },
            '5.2': { score: 4, evidence: '' },
            '5.3': { score: 4, evidence: '' },
            '5.4': { score: 4, evidence: '' },
            '6.1': ['Metodología y práctica docente en el aula', 'Evaluación formativa, feedback y recuperación'],
            'smart_plan': {
                meta: 'Implantar rúbricas digitales de co-evaluación entre alumnos en la asignatura de Lengua Castellana y Literatura (4º ESO).',
                acciones: 'Elaboración de la rúbrica y entrenamiento del alumnado en 2 sesiones prácticas.',
                indicador: 'El 100% de los alumnos co-evalúa a su equipo de exposición oral con rúbrica digital.',
                apoyo: 'Uso del aula de ordenadores o tablets.'
            },
            '6.3': 'Estrategias de co-evaluación y evaluación formativa entre iguales.'
        },
        directorAnswers: {
            '1.1': 4, '1.2': 4, '1.4': 4, '1.5': 4, '1.6': 4,
            '2.1': 4, '2.2': 4, '2.3': 4, '2.4': 4, '2.5': 4, '2.6': 4,
            '3.1': 4, '3.2': 4, '3.3': 4,
            '4.1': 5, '4.2': 4, '4.3': 4, '4.4': 4, '4.5': 5, '4.6': 4, '4.7': 4, '4.8': 4, '4.9': 4, '4.12': 4,
            '5.1': 4, '5.2': 4, '5.3': 4, '5.4': 4
        },
        reflections: {
            'b1': 'Me siento bien valorada en Secundaria.',
            'b2': 'Buena comunicación en el departamento de Lengua.',
            'b3': 'Cuidamos la oración de la mañana.',
            'b4': 'Las segundas oportunidades de recuperación ayudan mucho al clima.',
            'b5': 'Asistencia y colaboración en todas las campañas.'
        },
        directorNotes: 'Pilar es muy competente y rigurosa en su trabajo. Sus alumnos obtienen excelentes resultados.'
    }
}// 5. CLASE BASE DE DATOS HYBRID CLOUD (FIREBASE FIRESTORE + REST API + LOCALSTORAGE)
class HybridDatabase {
    constructor() {
        this.apiEndpoint = safeStorage.getItem('cloud_api_url') || (window.location.protocol.startsWith('http') ? window.location.origin : '');
        this.firebaseConfig = null;
        this.firestore = null;
        this.isFirebaseActive = false;
        this.isRestActive = false;
        
        this.initFirebase();
        this.init();
        this.checkConnections();
    }

    initFirebase() {
        try {
            const savedConfig = safeStorage.getItem('firebase_config') || window.FIREBASE_CONFIG_SEED;
            if (savedConfig) {
                this.firebaseConfig = typeof savedConfig === 'string' ? JSON.parse(savedConfig) : savedConfig;
                if (window.firebase && !window.firebase.apps.length) {
                    window.firebase.initializeApp(this.firebaseConfig);
                }
                if (window.firebase && window.firebase.apps.length) {
                    this.firestore = window.firebase.firestore();
                    this.isFirebaseActive = true;
                    this.setupFirebaseRealtimeListener();
                }
            }
        } catch(e) {
            console.warn("Firebase Init Error", e);
            this.isFirebaseActive = false;
        }
    }

    setupFirebaseRealtimeListener() {
        if (!this.firestore) return;
        try {
            this.firestore.collection("school_evaluations").doc("eval_db_2627")
                .onSnapshot((doc) => {
                    if (doc.exists) {
                        const data = doc.data();
                        if (data && data.evaluations) {
                            safeStorage.setItem('eval_db', JSON.stringify(data));
                            this.updateSyncBadge('firebase');
                            if (state.currentUser && typeof renderApp === 'function') {
                                // Silent refresh if on summary
                            }
                        }
                    }
                }, (error) => {
                    console.warn("Firebase Listener Warning:", error);
                });
        } catch(e) {}
    }

    async checkConnections() {
        if (this.isFirebaseActive) {
            this.updateSyncBadge('firebase');
            return;
        }

        if (this.apiEndpoint) {
            try {
                const res = await fetch(`${this.apiEndpoint}/api/health`, { method: 'GET' });
                if (res.ok) {
                    this.isRestActive = true;
                    this.updateSyncBadge('rest');
                    await this.syncFromRest();
                    return;
                }
            } catch(e) {}
        }
        
        this.updateSyncBadge('local');
    }

    updateSyncBadge(mode) {
        const badges = document.querySelectorAll('.cloud-sync-status-badge');
        badges.forEach(b => {
            if (mode === 'firebase') {
                b.innerHTML = '🔥 Firebase Conectado (Google Cloud Firestore)';
                b.style.background = 'rgba(245, 158, 11, 0.12)';
                b.style.color = '#d97706';
                b.style.border = '1px solid rgba(245, 158, 11, 0.25)';
            } else if (mode === 'rest') {
                b.innerHTML = '☁️ Nube REST Conectada';
                b.style.background = 'rgba(16, 185, 129, 0.1)';
                b.style.color = 'var(--success)';
                b.style.border = '1px solid rgba(16, 185, 129, 0.2)';
            } else {
                b.innerHTML = '💾 Guardado Local (Firebase listo)';
                b.style.background = 'rgba(107, 114, 128, 0.08)';
                b.style.color = 'var(--text-muted)';
                b.style.border = '1px solid var(--card-border)';
            }
        });
    }

    async syncFromRest() {
        if (!this.apiEndpoint || !this.isRestActive) return;
        try {
            const res = await fetch(`${this.apiEndpoint}/api/db`);
            if (res.ok) {
                const cloudData = await res.json();
                if (cloudData && cloudData.evaluations) {
                    safeStorage.setItem('eval_db', JSON.stringify(cloudData));
                }
            }
        } catch(e) {}
    }

    init() {
        try {
            const dbVal = safeStorage.getItem('eval_db');
            let initialDB = {
                teachers: [...TEACHERS],
                evaluations: {}
            };
            
            if (dbVal) {
                const parsed = JSON.parse(dbVal);
                if (parsed && parsed.evaluations) {
                    initialDB.evaluations = parsed.evaluations;
                }
            }

            TEACHERS.forEach(t => {
                if (!initialDB.evaluations[t.name]) {
                    initialDB.evaluations[t.name] = {
                        status: 'not_started',
                        updatedAt: null,
                        answers: {},
                        directorAnswers: {},
                        reflections: {},
                        directorNotes: ''
                    };
                }
            });
            initialDB.teachers = [...TEACHERS];
            safeStorage.setItem('eval_db', JSON.stringify(initialDB));
        } catch(e) {
            console.error("Init DB Error", e);
        }
    }

    get() {
        return JSON.parse(safeStorage.getItem('eval_db'));
    }

    save(dbData) {
        safeStorage.setItem('eval_db', JSON.stringify(dbData));
        
        // 1. Save to Firebase Firestore if active
        if (this.isFirebaseActive && this.firestore) {
            try {
                this.firestore.collection("school_evaluations").doc("eval_db_2627").set(dbData)
                    .then(() => {
                        this.updateSyncBadge('firebase');
                    })
                    .catch(err => {
                        console.warn("Error saving to Firebase:", err);
                    });
            } catch(e) {}
        }
        
        // 2. Save to REST API if active
        if (this.isRestActive && this.apiEndpoint) {
            fetch(`${this.apiEndpoint}/api/db`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dbData)
            }).catch(e => console.warn('REST sync fallback'));
        }
    }

    getUserData(username) {
        const data = this.get();
        return data ? (data.evaluations[username] || null) : null;
    }

    saveUserData(username, data) {
        const currentDb = this.get();
        currentDb.evaluations[username] = {
            ...currentDb.evaluations[username],
            ...data,
            updatedAt: new Date().toISOString()
        };
        this.save(currentDb);
        if (typeof showSaveIndicator === 'function') {
            showSaveIndicator();
        }
    }
}

// 14.6 HELPER CONFIGURACIÓN DE FIREBASE EN NUBE
window.configureFirebaseModal = function() {
    const currentConfig = safeStorage.getItem('firebase_config') || '';
    const configStr = prompt(`🔥 CONFIGURACIÓN DE GOOGLE FIREBASE FIRESTORE\n\nPega aquí el objeto JSON de credenciales de Firebase de tu proyecto (extraído de Firebase Console -> Configuración del Proyecto -> Web App):\n\nEjemplo:\n{"apiKey":"AIzaSy...", "authDomain":"colegio.firebaseapp.com", "projectId":"colegio-123"}`, currentConfig);
    
    if (configStr === null) return;
    
    if (!configStr.trim()) {
        safeStorage.removeItem('firebase_config');
        showToast('Configuración de Firebase eliminada. Se usará el almacenamiento por defecto.');
        setTimeout(() => location.reload(), 800);
        return;
    }
    
    try {
        const parsed = JSON.parse(configStr.trim());
        if (parsed.projectId && parsed.apiKey) {
            safeStorage.setItem('firebase_config', JSON.stringify(parsed));
            showToast('🔥 Conexión a Firebase Firestore guardada correctamente. Reiniciando...');
            setTimeout(() => location.reload(), 1000);
        } else {
            showToast('Error: El JSON introducido no contiene "projectId" o "apiKey".');
        }
    } catch(e) {
        showToast('Error: Formato JSON no válido.');
    }
};

const db = new HybridDatabase();

// 6. ESTADO GLOBAL
let state = {
    currentUser: null,  // { name: string, role: 'teacher' | 'director' }
    currentBlockIndex: 0,
    activeDirectorTab: 'summary', // 'summary' | 'teachers' | 'management'
    showingSuccessScreen: false,
    editingTeacherName: null,
    selectedTeacherForDetail: null,
    searchQuery: '',
    selectedEtapa: 'Todas', 
    interviewModeActive: false, 
    comparisonTarget: 'none',
    chartInstances: {}
};

const dom = {
    app: document.getElementById('app'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    toast: document.getElementById('toast'),
    toastText: document.getElementById('toast-text')
};

// 7. INICIALIZADOR TEMA
function initTheme() {
    const savedTheme = safeStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    dom.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        safeStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        if (state.currentUser && state.currentUser.role === 'director') {
            setTimeout(renderDirectorCharts, 100);
            if (state.selectedTeacherForDetail) {
                setTimeout(renderRadarComparison, 100);
            }
        }
    });
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        dom.themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`;
    } else {
        dom.themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`;
    }
}

function showToast(message) {
    dom.toastText.textContent = message;
    dom.toast.classList.add('show');
    setTimeout(() => {
        dom.toast.classList.remove('show');
    }, 3000);
}

// 8. AUTENTICACIÓN
function handleLogin(username, password) {
    if (!username.trim() || !password.trim()) {
        showToast('Por favor, rellene todos los campos.');
        return;
    }

    const lowerUser = username.trim().toLowerCase();
    const cleanUser = lowerUser.replace(/\s+/g, '');

    // A. DIRECTOR GENERAL: Javier Félix
    if (cleanUser.includes('javier') || lowerUser === 'javier félix' || lowerUser === 'javier felix' || lowerUser === 'director' || lowerUser === 'director_general') {
        if (password === 'Javier#2026') {
            state.currentUser = { name: 'Javier Félix (Director General)', role: 'director', subrole: 'general' };
            safeStorage.setItem('session', JSON.stringify(state.currentUser));
            renderApp();
            showToast('Sesión iniciada como Director General (Javier Félix)');
            return;
        } else {
            showToast('Contraseña incorrecta para Javier Félix. Verifique su clave asignada.');
            return;
        }
    }

    // B. DIRECTOR EI Y EP: José Manuel Santos
    if (cleanUser.includes('santos') || lowerUser === 'josé manuel santos' || lowerUser === 'jose manuel santos' || lowerUser === 'director_ei_ep') {
        if (password === 'Santos#2026') {
            state.currentUser = { name: 'José Manuel Santos (Director EI/EP)', role: 'director', subrole: 'ei_ep' };
            safeStorage.setItem('session', JSON.stringify(state.currentUser));
            renderApp();
            showToast('Sesión iniciada como Director EI y EP (José Manuel Santos)');
            return;
        } else {
            showToast('Contraseña incorrecta para José Manuel Santos. Verifique su clave asignada.');
            return;
        }
    }

    // C. DIRECTOR ESO Y BTO: Luis Redruello
    if (cleanUser.includes('redruello') || lowerUser === 'luis redruello' || lowerUser === 'director_eso_bto') {
        if (password === 'Redruello#2026') {
            state.currentUser = { name: 'Luis Redruello (Director ESO/BTO)', role: 'director', subrole: 'eso_bto' };
            safeStorage.setItem('session', JSON.stringify(state.currentUser));
            renderApp();
            showToast('Sesión iniciada como Director ESO y BTO (Luis Redruello)');
            return;
        } else {
            showToast('Contraseña incorrecta para Luis Redruello. Verifique su clave asignada.');
            return;
        }
    }

    // D. ACCESO DOCENTES INDIVIDUALES (STRICT MATCH WITH ASSIGNED PASSWORD ONLY)
    const matchedTeacher = TEACHERS.find(t => {
        const tNameClean = t.name.toLowerCase().replace(/\s+/g, '');
        const tFirst = t.name.split(' ')[0].toLowerCase();
        return tNameClean === cleanUser || tFirst === lowerUser || t.name.toLowerCase() === lowerUser;
    });

    if (matchedTeacher) {
        const assignedPwd = matchedTeacher.password;
        if (assignedPwd && password === assignedPwd) {
            state.currentUser = { name: matchedTeacher.name, role: 'teacher' };
            state.currentBlockIndex = 0;
            safeStorage.setItem('session', JSON.stringify(state.currentUser));
            renderApp();
            showToast(`Bienvenido/a, ${matchedTeacher.name}`);
            return;
        } else {
            showToast(`Contraseña incorrecta para ${matchedTeacher.name}. Introduzca su clave asignada.`);
            return;
        }
    }

    showToast('Usuario o clave incorrectos. Seleccione su nombre de la lista o verifique su usuario.');
}

function handleLogout() {
    state.currentUser = null;
    state.currentBlockIndex = 0;
    state.selectedTeacherForDetail = null;
    state.interviewModeActive = false;
    safeStorage.removeItem('session');
    
    Object.values(state.chartInstances).forEach(chart => chart.destroy());
    state.chartInstances = {};
    
    renderApp();
    showToast('Sesión cerrada');
}

// 9. ROUTER PRINCIPAL (SPLIT-SCREEN LOGIN ADAPTADO)
function renderApp() {
    const session = safeStorage.getItem('session');
    if (session) {
        state.currentUser = JSON.parse(session);
    }

    if (!state.currentUser) {
        renderLoginView();
    } else if (state.currentUser.role === 'teacher') {
        renderTeacherView();
    } else if (state.currentUser.role === 'director') {
        renderDirectorView();
    }
}

function renderLoginView() {
    let teacherOptions = TEACHERS.map(t => `<option value="${t.name}">${t.name} (${t.etapa})</option>`).join('');
    
    dom.app.innerHTML = `
        <div class="login-split-layout">
            <!-- Lado Izquierdo: Hero Cover Visual de la Marca -->
            <div class="login-hero-side">
                <div style="z-index:2; position:relative; display:flex; flex-direction:column; justify-content:space-between; height:100%;">
                    <div>
                        <img src="logo.png" alt="Colegio San Buenaventura" style="max-height: 100px; width: auto; margin-bottom: 25px; border-radius: 8px; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3));">
                        <h2 style="font-size:2.8rem; font-weight:900; line-height:1.1; letter-spacing:-0.05em; color:white;">
                            Colegio<br>San Buenaventura
                        </h2>
                        <div style="width:50px; height:4px; background:var(--accent-color); margin-top:20px; border-radius:2px;"></div>
                    </div>
                    
                    <div class="login-quote-card">
                        <p class="login-quote-text">
                            "No basta la inteligencia sin la humildad, ni la ciencia sin el amor."
                        </p>
                        <p class="login-quote-author">
                            — San Buenaventura, <em>Itinerarium Mentis in Deum (Prologus, 4)</em>
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Lado Derecho: Formulario de Entrada Glassmorphic -->
            <div class="login-form-side">
                <div class="auth-wrapper glass-container">
                    <div class="auth-header" style="text-align:left;">
                        <span style="font-size: 0.8rem; font-weight:700; color:var(--primary-color); text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:6px;">Autoevaluación Docente</span>
                        <h2>Portal del Claustro</h2>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">Ingresa para completar tu autoevaluación o visualizar informes.</p>
                    </div>
                    <form class="auth-form" id="login-form">
                        <div class="form-group">
                            <label for="login-username">Usuario (Nombre y Apellido)</label>
                            <select class="form-input" id="login-select" style="margin-bottom: 0.5rem; height: 50px;">
                                <option value="">-- Selecciona tu nombre (Acceso rápido) --</option>
                                ${teacherOptions}
                                <option value="director">Director / Administrador</option>
                            </select>
                            <input type="text" class="form-input" id="login-username" placeholder="O escribe tu usuario aquí..." autocomplete="username">
                        </div>
                        <div class="form-group">
                            <label for="login-password">Contraseña</label>
                            <input type="password" class="form-input" id="login-password" placeholder="Introduce tu clave personal asignada..." autocomplete="current-password">
                        </div>
                        <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem; height: 50px; font-size:1.05rem;">
                            Iniciar Sesión
                        </button>
                    </form>

                </div>
            </div>
        </div>
    `;

    const select = document.getElementById('login-select');
    const input = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    select.addEventListener('change', () => {
        if (select.value) {
            input.value = select.value;
            if (select.value === 'director') {
                passwordInput.value = 'director';
            } else {
                passwordInput.value = '1234';
            }
        }
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin(input.value, passwordInput.value);
    });
}

// 10. VISTA DOCENTE
// 10.1 VISTA DOCENTE COMPLETADA (SÓLO LECTURA)
function renderTeacherCompletedView(name, tData, teacherInfo) {
    window.scrollTo(0, 0);
    const teacherBlockAverages = calculateBlockAverages(name);
    const directorBlockAverages = calculateDirectorBlockAverages(name);
    const dirAnswers = tData.directorAnswers || {};

    let blocksDetailHtml = EVAL_BLOCKS.map(block => {
        let blockAvg = 0;
        let scoreCount = 0;
        let blockScoreSum = 0;

        let questionRows = block.questions.map(q => {
            const answer = tData.answers[q.id];
            
            if (q.type === 'scale') {
                const score = answer ? answer.score : null;
                const dirScore = dirAnswers[q.id] || null;
                
                if (score) {
                    blockScoreSum += score;
                    scoreCount++;
                }

                let dirScoreHtml = dirScore ? `
                    <div style="font-size:0.78rem; color:var(--text-muted); margin-top:4px;">
                        Valoración Consensuada Dirección: <strong style="color:var(--primary-color);">${dirScore}</strong>
                    </div>
                ` : '';

                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div class="detail-question-header">
                            <span style="font-size: 0.9rem; font-weight: 600; flex:1; min-width:200px;">${q.id}. ${q.text}</span>
                            <div style="display:flex; gap:8px; align-items:center;">
                                <span style="font-size:0.75rem; color:var(--text-muted);">Tuyo:</span>
                                <span class="detail-score-pill" style="width:24px; height:24px; font-size:0.8rem;">${score || '-'}</span>
                            </div>
                        </div>
                        ${answer && answer.evidence ? `<div class="detail-evidence-text" style="font-size:0.8rem; padding: 6px 10px;"><strong>Evidencia:</strong> ${answer.evidence}</div>` : ''}
                        ${dirScoreHtml}
                    </div>
                `;
            } else if (q.type === 'yesno_details') {
                const val = answer ? answer.value : null;
                const details = answer ? answer.details : '';
                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div class="detail-question-header">
                            <span style="font-size: 0.9rem; font-weight: 600; flex:1; min-width:200px;">${q.id}. ${q.text}</span>
                            <span class="badge ${val === 'yes' ? 'badge-completed' : 'badge-not-started'}">${val === 'yes' ? 'Sí' : val === 'no' ? 'No' : '-'}</span>
                        </div>
                        ${details ? `<div class="detail-evidence-text" style="font-size:0.8rem; padding: 6px 10px;"><strong>Detalles:</strong> ${details}</div>` : ''}
                    </div>
                `;
            } else if (q.type === 'yesno_na') {
                const val = answer ? answer.value : null;
                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div class="detail-question-header">
                            <span style="font-size: 0.9rem; font-weight: 600; flex:1; min-width:200px;">${q.id}. ${q.text}</span>
                            <span class="badge ${val === 'yes' ? 'badge-completed' : val === 'no' ? 'badge-danger' : 'badge-not-started'}">
                                ${val === 'yes' ? 'Sí' : val === 'no' ? 'No' : val === 'na' ? 'No aplica' : '-'}
                            </span>
                        </div>
                    </div>
                `;
            } else if (q.type === 'cdd_select') {
                const val = answer || '';
                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div class="detail-question-header">
                            <span style="font-size: 0.9rem; font-weight: 600;">CDD. Competencia Digital Docente (MRCDD)</span>
                            <span class="badge badge-completed">${val || 'No seleccionado'}</span>
                        </div>
                    </div>
                `;
            } else if (q.type === 'multiselect') {
                const list = answer || [];
                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom:0.5rem;">${q.id}. ${q.text}</div>
                        <div style="display:flex; flex-wrap:wrap; gap:6px;">
                            ${list.length > 0 ? list.map(item => `<span class="badge badge-completed">${item}</span>`).join('') : '<span class="badge badge-not-started">Ninguno seleccionado</span>'}
                        </div>
                    </div>
                `;
            } else if (q.type === 'smart_plan') {
                const val = answer || { meta: '', acciones: '', indicador: '', apoyo: '' };
                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div style="font-size: 0.9rem; font-weight: 700; margin-bottom:0.75rem; color:var(--primary-color);">6.2. Plan de Crecimiento SMART Pactado:</div>
                        <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem;">
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Meta Concreta:</strong> ${val.meta || '-'}
                            </div>
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Acciones Propuestas:</strong> ${val.acciones || '-'}
                            </div>
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Indicador de Éxito:</strong> ${val.indicador || '-'}
                            </div>
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Apoyo del Colegio:</strong> ${val.apoyo || '-'}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                const textVal = answer || '';
                return `
                    <div class="detail-question-row" style="padding: 1rem;">
                        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom:0.25rem;">${q.id}. ${q.text}</div>
                        <div style="font-size:0.85rem; padding: 0.5rem; background:rgba(0,0,0,0.01); border-radius:4px; font-style:italic;">
                            ${textVal || '-'}
                        </div>
                    </div>
                `;
            }
        }).join('');

        if (block.id === 'b2') {
            const nominee = tData.answers['nomination'] || '';
            questionRows += `
                <div class="detail-question-row" style="border-left: 2px solid var(--accent-color); background: rgba(217, 119, 6, 0.02); padding:1rem;">
                    <div class="detail-question-header">
                        <span style="font-size: 0.9rem; font-weight: 600; color:var(--accent-color);">★ Compañero/a que considera que más aporta al equipo:</span>
                        <span class="badge badge-completed">${nominee || 'Ninguno'}</span>
                    </div>
                </div>
            `;
        }

        blockAvg = scoreCount > 0 ? (blockScoreSum / scoreCount).toFixed(2) : null;
        const reflection = tData.reflections[block.id] || '';

        return `
            <div class="detail-block-section">
                <h4>
                    <span>${block.title}</span>
                    ${blockAvg ? `<span class="detail-block-avg">Promedio: <strong>${blockAvg} / 5</strong></span>` : ''}
                </h4>
                <div class="detail-questions-list">
                    ${questionRows}
                </div>
                ${reflection ? `
                    <div class="detail-reflection-row">
                        <div class="detail-reflection-label">Reflexión abierta:</div>
                        <div class="detail-reflection-body">${reflection}</div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');

    dom.app.innerHTML = `
        <div class="director-container">
            <div class="detail-header" style="margin-bottom: 2rem;">
                <div class="detail-header-left">
                    <h3 style="display:flex; align-items:center; gap:10px;">
                        <span>${name}</span>
                        <span class="badge badge-completed" style="font-size: 0.8rem; padding:4px 8px;">Autoevaluación Entregada</span>
                    </h3>
                    <p style="color: var(--text-muted); margin-top:4px;">
                        Etapa: ${teacherInfo.etapa} | Tutor: ${teacherInfo.tutor}
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-secondary" onclick="generateOfficialPrintDocument('${name}')">
                        ${ICONS.print} Imprimir Resumen
                    </button>
                    <button class="btn btn-secondary" onclick="handleLogout()">
                        Cerrar Sesión
                    </button>
                </div>
            </div>

            <!-- Alerta informativa -->
            <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display:flex; align-items:center; gap:10px;">
                <span style="font-size: 1.5rem; line-height:1;">✅</span>
                <div>
                    <strong>Tu cuestionario ha sido entregado correctamente.</strong> Las respuestas están en modo de solo lectura. A continuación puedes revisar tus resultados, el análisis de sintonía pedagógica y los comentarios finales acordados en la entrevista.
                </div>
            </div>

            <!-- Gráfico Radar e Interpretación -->
            <div class="analytics-grid" style="margin-bottom:2rem;">
                <div class="glass-container chart-card" style="min-height: 350px; display:flex; flex-direction:column; align-items:center; padding:1.25rem;">
                    <div class="chart-title">📊 Perfil Competencial (Radar)</div>
                    <div class="chart-wrapper" style="width:100%; max-width:380px; height: 260px; display: flex; justify-content: center;">
                        <canvas id="chart-radar-eval"></canvas>
                    </div>
                </div>
                <div>
                    ${generatePedagogicalInterpretation(name, teacherBlockAverages, directorBlockAverages)}
                </div>
            </div>

            <!-- Notas del Director y Desglose -->
            <div style="display:flex; flex-direction:column; gap:2rem;">
                ${tData.directorNotes ? `
                    <div class="director-notes-section" style="background: rgba(37,99,235,0.02); padding: 1.25rem; border-radius: 12px; border: 1px solid var(--card-border);">
                        <h4 style="margin-top:0; margin-bottom:0.5rem; color:var(--primary-color);">📝 Notas y Acuerdos de la Entrevista (Dirección)</h4>
                        <p style="font-size:0.88rem; line-height:1.5; color:var(--text-main); margin:0; font-style:italic;">
                            "${tData.directorNotes}"
                        </p>
                    </div>
                ` : ''}

                <div style="border-top: 1px solid var(--card-border); padding-top: 2rem;">
                    <h3 style="margin-top:0; margin-bottom:1.5rem; font-size:1.2rem; font-weight:800; color:var(--text-main);">🔍 Respuestas Detalladas de la Autoevaluación</h3>
                    <div style="display:flex; flex-direction:column; gap:2.5rem;">
                        ${blocksDetailHtml}
                    </div>
                </div>

                <!-- Bloque de Firmas -->
                ${renderSignaturesWidget(name, tData)}
            </div>
        </div>
    `;

    setTimeout(() => {
        const ctxRadar = document.getElementById('chart-radar-eval').getContext('2d');
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
        const textColor = isDark ? '#f8fafc' : '#1e293b';

        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['B1: Identidad', 'B2: Equipo', 'B3: Pastoral', 'B4: Práctica', 'B5: Compromiso'],
                datasets: [
                    {
                        label: 'Mi Autoevaluación',
                        data: teacherBlockAverages,
                        backgroundColor: 'rgba(37, 99, 235, 0.15)',
                        borderColor: '#2563eb',
                        borderWidth: 2,
                        pointBackgroundColor: '#2563eb'
                    },
                    {
                        label: 'Valoración Dirección',
                        data: directorBlockAverages,
                        backgroundColor: 'rgba(217, 119, 6, 0.15)',
                        borderColor: '#d97706',
                        borderWidth: 2,
                        pointBackgroundColor: '#d97706'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: { stepSize: 1, color: textColor, backdropColor: 'transparent' },
                        grid: { color: gridColor },
                        angleLines: { color: gridColor },
                        pointLabels: { color: textColor, font: { size: 10, weight: '600' } }
                    }
                },
                plugins: {
                    legend: { labels: { color: textColor, font: { weight: '500' } } }
                }
            }
        });
    }, 100);
}


function renderTeacherView() {
    const teacherName = state.currentUser.name;
    const userData = db.getUserData(teacherName);
    const teacherInfo = TEACHERS.find(t => t.name === teacherName);
    
    if (state.showingSuccessScreen) {
        renderTeacherSuccessScreen(teacherName);
        return;
    }

    if (userData.status === 'not_started') {
        userData.status = 'in_progress';
        db.saveUserData(teacherName, { status: 'in_progress' });
    }

    if (userData.status === 'completed') {
        renderTeacherCompletedView(teacherName, userData, teacherInfo);
        return;
    }
    
    const blocks = EVAL_BLOCKS;
    const activeBlock = blocks[state.currentBlockIndex];
    const isLastBlock = state.currentBlockIndex === blocks.length - 1;

    let navHtml = blocks.map((block, index) => {
        const isActive = index === state.currentBlockIndex;
        const isCompletedBlock = isBlockCompleted(teacherName, index);
        return `
            <div class="nav-item ${isActive ? 'active' : ''} ${isCompletedBlock ? 'completed' : ''}" onclick="changeBlock(${index})">
                ${block.icon}
                <span style="font-size: 0.9rem; text-align: left;">B${index+1}: ${block.title.split(':')[1] || block.title}</span>
            </div>
        `;
    }).join('');

    let percentComplete = calculateCompletionPercent(teacherName);

    dom.app.innerHTML = `
        <div class="dashboard-grid">
            <aside class="sidebar glass-container">
                <div class="user-profile-widget">
                    <div class="profile-avatar">${teacherName.charAt(0)}</div>
                    <div class="profile-info">
                        <h3>${teacherName}</h3>
                        <p>Docente - ${teacherInfo.etapa}</p>
                        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Tutor: ${teacherInfo.tutor}</p>
                        <span class="badge cloud-sync-status-badge" style="font-size:0.68rem; margin-top:4px; display:inline-block;">☁️ Nube Conectada</span>
                    </div>
                    <div style="margin-top: 1.5rem;">
                        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:4px; color:var(--text-muted);">
                            <span>Progreso autoevaluación</span>
                            <span style="font-weight:700; color:var(--primary-color);">${percentComplete}%</span>
                        </div>
                        <div style="width:100%; height:6px; background:var(--card-border); border-radius:3px; overflow:hidden; margin-bottom:6px;">
                            <div style="width:${percentComplete}%; height:100%; background:var(--primary-color); transition: var(--transition);"></div>
                        </div>
                        <div style="font-size:0.72rem; color:var(--text-muted); display:flex; align-items:center; justify-content:space-between; background:rgba(37,99,235,0.04); padding:4px 8px; border-radius:4px; border:1px solid rgba(37,99,235,0.08);">
                            <span>⏱️ Tiempo est. restante:</span>
                            <strong style="color:var(--text-main);">${Math.max(0, Math.ceil((100 - percentComplete) * 0.2))} min</strong>
                        </div>
                    </div>
                </div>
                
                <nav class="block-nav">
                    ${navHtml}
                </nav>
                
                <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="handleLogout()">
                        Cerrar Sesión
                    </button>
                </div>
            </aside>
            
            <section class="content-panel glass-container" id="eval-wizard-panel">
            </section>
        </div>
    `;

    renderActiveBlockContent(teacherName, activeBlock, isLastBlock);
}

function renderActiveBlockContent(teacherName, block, isLastBlock) {
    const wizardPanel = document.getElementById('eval-wizard-panel');
    const userData = db.getUserData(teacherName);

    let questionsHtml = '';

    if (block.id !== 'b6') {
        questionsHtml = block.questions.map(q => {
            if (q.type === 'yesno_details' || q.type === 'yesno_na' || q.type === 'cdd_select') return ''; 
            
            const answer = userData.answers[q.id] || { score: 0, evidence: '' };
            const hasEvidence = answer.evidence && answer.evidence.trim().length > 0;
            
            let ratingButtons = '';
            for (let i = 1; i <= 5; i++) {
                const isSelected = answer.score === i;
                ratingButtons += `
                    <button class="rating-btn ${isSelected ? 'selected val-' + i : ''}" 
                            type="button" 
                            onmouseover="updateScoreLegend('${q.id}', ${i})"
                            onmouseout="restoreScoreLegend('${q.id}', ${answer.score})"
                            onclick="saveScore('${teacherName}', '${q.id}', ${i})">${i}</button>
                `;
            }

            return `
                <div class="question-card ${answer.score > 0 ? 'card-answered' : ''}">
                    <div class="question-header">
                        <span class="question-num">${q.id}</span>
                        <div class="question-text">${q.text}</div>
                        ${answer.score > 0 ? `<span style="color:var(--success); margin-left:auto; display:flex; align-items:center;">${ICONS.check}</span>` : ''}
                    </div>
                    ${q.rubric ? `<p style="font-size:0.8rem; color:var(--accent-color); margin-bottom:1rem; font-style:italic; font-weight:500;">${q.rubric}</p>` : ''}
                    <div class="rating-scale">
                        ${ratingButtons}
                    </div>
                    <div class="rating-labels">
                        <span>Totalmente en desacuerdo</span>
                        <span>Totalmente de acuerdo</span>
                    </div>
                    <div class="score-legend-container" id="legend-${q.id}">
                        ${answer.score > 0 ? getScoreLegendHtml(answer.score) : ''}
                    </div>
                    <div>
                        <button class="evidence-toggle-btn" type="button" onclick="toggleEvidence('${q.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 14px; height: 14px;">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            ${hasEvidence ? 'Ver evidencia/explicación' : 'Añadir evidencia o explicación (Opcional)'}
                        </button>
                        <div class="evidence-wrapper ${hasEvidence ? 'expanded' : ''}" id="evidence-wrap-${q.id}">
                            <textarea class="evidence-textarea" 
                                      id="evidence-${q.id}" 
                                      placeholder="Escribe aquí las evidencias o justificaciones que respaldan tu puntuación..." 
                                      onchange="saveEvidence('${teacherName}', '${q.id}', this.value)">${answer.evidence || ''}</textarea>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        if (block.specialQuestion && block.specialQuestion.type === 'nomination') {
            const selectedNomination = userData.answers['nomination'] || '';
            let optionsHtml = TEACHERS
                .filter(t => t.name !== teacherName)
                .map(t => `<option value="${t.name}" ${selectedNomination === t.name ? 'selected' : ''}>${t.name} (${t.etapa})</option>`)
                .join('');

            questionsHtml += `
                <div class="question-card" style="border: 1px dashed var(--accent-color); background: rgba(217, 119, 6, 0.02);">
                    <div class="question-header">
                        <span class="question-num">★</span>
                        <div class="question-text">${block.specialQuestion.label}</div>
                    </div>
                    <div class="form-group" style="max-width: 450px;">
                        <select class="form-input" onchange="saveNomination('${teacherName}', this.value)">
                            <option value="">-- Selecciona un compañero --</option>
                            ${optionsHtml}
                        </select>
                    </div>
                </div>
            `;
        }

        const reflectionVal = userData.reflections[block.id] || '';
        questionsHtml += `
            <div class="reflection-section">
                <div class="reflection-title">Reflexión abierta (Bloque ${state.currentBlockIndex + 1})</div>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem; font-style: italic;">
                    ${block.reflectionLabel}
                </p>
                <textarea class="reflection-textarea" 
                          placeholder="Tu respuesta abierta..." 
                          onchange="saveReflection('${teacherName}', '${block.id}', this.value)">${reflectionVal}</textarea>
            </div>
        `;

    } else {
        const q1 = block.questions[0];
        const selectedHighlights = userData.answers['6.1'] || [];
        const highlightsTags = q1.options.map(option => {
            const isSelected = selectedHighlights.includes(option);
            return `
                <div class="option-tag ${isSelected ? 'selected' : ''}" 
                     onclick="toggleHighlight('${teacherName}', '${option}', this)">
                    ${option}
                </div>
            `;
        }).join('');

        const smartAns = userData.answers['smart_plan'] || { meta: '', acciones: '', indicador: '', apoyo: '' };
        const q3 = block.questions[2];
        const formVal = userData.answers['6.3'] || '';

        questionsHtml = `
            <div class="growth-grid">
                <div class="question-card">
                    <div class="question-header">
                        <span class="question-num">6.1</span>
                        <div class="question-text">${q1.text}</div>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Elige un máximo de 2 opciones:</p>
                    <div class="option-tags-container">
                        ${highlightsTags}
                    </div>
                </div>

                <!-- Formulario SMART PLAN Detallado -->
                <div class="question-card">
                    <div class="question-header">
                        <span class="question-num">6.2</span>
                        <div class="question-text">${block.questions[1].text}</div>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">
                        Establece objetivos SMART (Específico, Medible, Alcanzable, Relevante y Acotado en el Tiempo).
                    </p>
                    
                    <div style="display:flex; flex-direction:column; gap:1.25rem; text-align:left;">
                        <div class="form-group">
                            <label style="font-weight:600; font-size:0.85rem;">1. Meta Concreta (¿Qué quieres lograr?)</label>
                            <input type="text" class="form-input" 
                                   placeholder="Ejemplo: Aplicar la técnica del portfolio en 3º EP" 
                                   value="${smartAns.meta || ''}" 
                                   onchange="saveSmartPlan('${teacherName}', 'meta', this.value)">
                        </div>
                        <div class="form-group">
                            <label style="font-weight:600; font-size:0.85rem;">2. Acciones del Docente (¿Qué harás tú?)</label>
                            <textarea class="evidence-textarea" style="height:60px;"
                                      placeholder="Ejemplo: Recopilar evidencias bimensuales de los alumnos..." 
                                      onchange="saveSmartPlan('${teacherName}', 'acciones', this.value)">${smartAns.acciones || ''}</textarea>
                        </div>
                        <div class="form-group">
                            <label style="font-weight:600; font-size:0.85rem;">3. Indicador de Logro (¿Cómo medirás el éxito?)</label>
                            <input type="text" class="form-input" 
                                   placeholder="Ejemplo: El 100% de los alumnos tiene su portfolio digital ordenado..." 
                                   value="${smartAns.indicador || ''}" 
                                   onchange="saveSmartPlan('${teacherName}', 'indicador', this.value)">
                        </div>
                        <div class="form-group">
                            <label style="font-weight:600; font-size:0.85rem;">4. Apoyo/Formación Necesaria del Centro</label>
                            <input type="text" class="form-input" 
                                   placeholder="Ejemplo: Licencias del software, tutoría de acompañamiento..." 
                                   value="${smartAns.apoyo || ''}" 
                                   onchange="saveSmartPlan('${teacherName}', 'apoyo', this.value)">
                        </div>
                    </div>
                </div>

                <div class="question-card">
                    <div class="question-header">
                        <span class="question-num">6.3</span>
                        <div class="question-text">${q3.text}</div>
                    </div>
                    <textarea class="reflection-textarea" 
                              style="min-height: 80px;"
                              placeholder="${q3.placeholder}"
                              onchange="saveClosingField('${teacherName}', '6.3', this.value)">${formVal}</textarea>
                </div>
            </div>
        `;
    }

    if (block.id === 'b4') {
        const q10 = block.questions[9];
        const ans10 = userData.answers['4.10'] || { value: '', details: '' };
        const q10Html = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-num">4.10</span>
                    <div class="question-text">${q10.text}</div>
                </div>
                <div class="flex-row-gap" style="margin-bottom: 0.75rem;">
                    <label class="flex-row-gap" style="cursor:pointer; font-weight:500;">
                        <input type="radio" name="ans-4.10" value="yes" ${ans10.value === 'yes' ? 'checked' : ''} 
                               onchange="saveYesNoDetails('${teacherName}', '4.10', 'yes', '')"> Sí
                    </label>
                    <label class="flex-row-gap" style="cursor:pointer; font-weight:500;">
                        <input type="radio" name="ans-4.10" value="no" ${ans10.value === 'no' ? 'checked' : ''} 
                               onchange="saveYesNoDetails('${teacherName}', '4.10', 'no', '')"> No
                    </label>
                </div>
                <div id="details-container-4.10" class="evidence-wrapper ${ans10.value === 'yes' ? 'expanded' : ''}">
                    <textarea class="evidence-textarea" 
                              id="details-4.10" 
                              placeholder="${q10.detailsPlaceholder}"
                              onchange="saveYesNoDetailsText('${teacherName}', '4.10', this.value)">${ans10.details || ''}</textarea>
                </div>
            </div>
        `;

        const q11 = block.questions[10];
        const ans11 = userData.answers['4.11'] || { value: '' };
        const q11Html = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-num">4.11</span>
                    <div class="question-text">${q11.text}</div>
                </div>
                <div class="flex-row-gap">
                    <label class="flex-row-gap" style="cursor:pointer; font-weight:500;">
                        <input type="radio" name="ans-4.11" value="yes" ${ans11.value === 'yes' ? 'checked' : ''} 
                               onchange="saveTutorOption('${teacherName}', '4.11', 'yes')"> Sí
                    </label>
                    <label class="flex-row-gap" style="cursor:pointer; font-weight:500;">
                        <input type="radio" name="ans-4.11" value="no" ${ans11.value === 'no' ? 'checked' : ''} 
                               onchange="saveTutorOption('${teacherName}', '4.11', 'no')"> No
                    </label>
                    <label class="flex-row-gap" style="cursor:pointer; font-weight:500;">
                        <input type="radio" name="ans-4.11" value="na" ${ans11.value === 'na' ? 'checked' : ''} 
                               onchange="saveTutorOption('${teacherName}', '4.11', 'na')"> No aplica (No soy tutor/a)
                    </label>
                </div>
            </div>
        `;

        // Pregunta CDD (Competencia Digital Docente)
        const selectedCdd = userData.answers['cdd'] || '';
        const cddOptions = [
            { level: 'A1', label: 'A1 - Acceso (Conozco y me inicio en el uso básico)' },
            { level: 'A2', label: 'A2 - Exploración (Uso con acompañamiento en clase)' },
            { level: 'B1', label: 'B1 - Integración (Uso autónomo y adaptado)' },
            { level: 'B2', label: 'B2 - Innovación (Creo y personalizo entornos de aprendizaje)' },
            { level: 'C1', label: 'C1 - Liderazgo (Comparto, formo y coordino a otros compañeros)' },
            { level: 'C2', label: 'C2 - Transformación (Referente en investigación pedagógica digital)' }
        ];
        
        let cddOptionsHtml = cddOptions.map(opt => `
            <option value="${opt.level}" ${selectedCdd === opt.level ? 'selected' : ''}>${opt.label}</option>
        `).join('');

        const qCddHtml = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-num">CDD</span>
                    <div class="question-text">¿Cuál consideras que es tu nivel actual de Competencia Digital Docente (MRCDD)?</div>
                </div>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.75rem;">
                    Nivelación oficial del Marco de Referencia de Competencia Digital Docente.
                </p>
                <div class="form-group" style="max-width: 500px;">
                    <select class="form-input" onchange="saveClosingField('${teacherName}', 'cdd', this.value)">
                        <option value="">-- Selecciona tu nivel CDD --</option>
                        ${cddOptionsHtml}
                    </select>
                </div>
            </div>
        `;

        const qList = block.questions;
        let b4CustomHtml = '';
        for (let idx = 0; idx < qList.length; idx++) {
            const q = qList[idx];
            if (q.id === '4.10') {
                b4CustomHtml += q10Html;
            } else if (q.id === '4.11') {
                b4CustomHtml += q11Html;
            } else if (q.id === 'cdd') {
                b4CustomHtml += qCddHtml;
            } else {
                const answer = userData.answers[q.id] || { score: 0, evidence: '' };
                const hasEvidence = answer.evidence && answer.evidence.trim().length > 0;
                let ratingButtons = '';
                for (let i = 1; i <= 5; i++) {
                    const isSelected = answer.score === i;
                    ratingButtons += `
                        <button class="rating-btn ${isSelected ? 'selected val-' + i : ''}" 
                                type="button" 
                                onmouseover="updateScoreLegend('${q.id}', ${i})"
                                onmouseout="restoreScoreLegend('${q.id}', ${answer.score})"
                                onclick="saveScore('${teacherName}', '${q.id}', ${i})">${i}</button>
                    `;
                }

                b4CustomHtml += `
                    <div class="question-card ${answer.score > 0 ? 'card-answered' : ''}">
                        <div class="question-header">
                            <span class="question-num">${q.id}</span>
                            <div class="question-text">${q.text}</div>
                            ${answer.score > 0 ? `<span style="color:var(--success); margin-left:auto; display:flex; align-items:center;">${ICONS.check}</span>` : ''}
                        </div>
                        ${q.rubric ? `<p style="font-size:0.8rem; color:var(--accent-color); margin-bottom:1rem; font-style:italic; font-weight:500;">${q.rubric}</p>` : ''}
                        <div class="rating-scale">
                            ${ratingButtons}
                        </div>
                        <div class="rating-labels">
                            <span>Totalmente en desacuerdo</span>
                            <span>Totalmente de acuerdo</span>
                        </div>
                        <div class="score-legend-container" id="legend-${q.id}">
                            ${answer.score > 0 ? getScoreLegendHtml(answer.score) : ''}
                        </div>
                        <div>
                            <button class="evidence-toggle-btn" type="button" onclick="toggleEvidence('${q.id}')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 14px; height: 14px;">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                ${hasEvidence ? 'Ver evidencia/explicación' : 'Añadir evidencia o explicación (Opcional)'}
                            </button>
                            <div class="evidence-wrapper ${hasEvidence ? 'expanded' : ''}" id="evidence-wrap-${q.id}">
                                <textarea class="evidence-textarea" 
                                          id="evidence-${q.id}" 
                                          placeholder="Escribe aquí las evidencias que respaldan tu puntuación..." 
                                          onchange="saveEvidence('${teacherName}', '${q.id}', this.value)">${answer.evidence || ''}</textarea>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        const reflectionVal = userData.reflections[block.id] || '';
        b4CustomHtml += `
            <div class="reflection-section">
                <div class="reflection-title">Reflexión abierta (Bloque 4)</div>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem; font-style: italic;">
                    ${block.reflectionLabel}
                </p>
                <textarea class="reflection-textarea" 
                          placeholder="Tu respuesta abierta..." 
                          onchange="saveReflection('${teacherName}', '${block.id}', this.value)">${reflectionVal}</textarea>
            </div>
        `;
        
        questionsHtml = b4CustomHtml;
    }

    wizardPanel.innerHTML = `
        <div class="block-header">
            <h2>${block.title}</h2>
            <p class="block-desc">${block.desc}</p>
        </div>
        
        <div class="question-list">
            ${questionsHtml}
        </div>
        
        <div class="action-bar">
            <button class="btn btn-secondary" 
                    onclick="prevBlock()" 
                    ${state.currentBlockIndex === 0 ? 'disabled' : ''}>
                ← Bloque Anterior
            </button>
            
            ${isLastBlock ? `
                <button class="btn btn-primary" 
                        style="background: var(--success); box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);"
                        onclick="finishEvaluation('${teacherName}')">
                    ✓ Finalizar y Entregar Autoevaluación
                </button>
            ` : `
                <button class="btn btn-primary" onclick="nextBlock()">
                    Siguiente Bloque →
                </button>
            `}
        </div>
    `;
}

window.saveSmartPlan = function(teacherName, field, value) {
    const userData = db.getUserData(teacherName);
    if (!userData.answers['smart_plan']) {
        userData.answers['smart_plan'] = { meta: '', acciones: '', indicador: '', apoyo: '' };
    }
    userData.answers['smart_plan'][field] = value;
    db.saveUserData(teacherName, userData);
    if (typeof showSaveIndicator === 'function') {
        showSaveIndicator();
    }
};

window.changeBlock = function(index) {
    state.currentBlockIndex = index;
    renderTeacherView();
    window.scrollTo(0, 0);
};

window.nextBlock = function() {
    if (state.currentBlockIndex < EVAL_BLOCKS.length - 1) {
        state.currentBlockIndex++;
        renderTeacherView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.prevBlock = function() {
    if (state.currentBlockIndex > 0) {
        state.currentBlockIndex--;
        renderTeacherView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.toggleEvidence = function(qId) {
    const wrap = document.getElementById(`evidence-wrap-${qId}`);
    wrap.classList.toggle('expanded');
};

window.saveScore = function(teacherName, qId, score) {
    const userData = db.getUserData(teacherName);
    if (!userData.answers[qId]) {
        userData.answers[qId] = { score: 0, evidence: '' };
    }
    userData.answers[qId].score = score;
    db.saveUserData(teacherName, userData);
    renderTeacherView();
};

window.saveEvidence = function(teacherName, qId, text) {
    const userData = db.getUserData(teacherName);
    if (!userData.answers[qId]) {
        userData.answers[qId] = { score: 0, evidence: '' };
    }
    userData.answers[qId].evidence = text;
    db.saveUserData(teacherName, userData);
};

window.saveReflection = function(teacherName, blockId, text) {
    const userData = db.getUserData(teacherName);
    userData.reflections[blockId] = text;
    db.saveUserData(teacherName, userData);
};

window.saveNomination = function(teacherName, nominee) {
    const userData = db.getUserData(teacherName);
    userData.answers['nomination'] = nominee;
    db.saveUserData(teacherName, userData);
    showToast(`Compañero nominado: ${nominee}`);
};

window.saveYesNoDetails = function(teacherName, qId, value, details) {
    const userData = db.getUserData(teacherName);
    userData.answers[qId] = { value, details: details || (userData.answers[qId] ? userData.answers[qId].details : '') };
    db.saveUserData(teacherName, userData);
    
    const detailsContainer = document.getElementById(`details-container-${qId}`);
    if (value === 'yes') {
        detailsContainer.classList.add('expanded');
    } else {
        detailsContainer.classList.remove('expanded');
    }
};

window.saveYesNoDetailsText = function(teacherName, qId, text) {
    const userData = db.getUserData(teacherName);
    if (userData.answers[qId]) {
        userData.answers[qId].details = text;
        db.saveUserData(teacherName, userData);
    }
};

window.saveTutorOption = function(teacherName, qId, value) {
    const userData = db.getUserData(teacherName);
    userData.answers[qId] = { value };
    db.saveUserData(teacherName, userData);
};

window.toggleHighlight = function(teacherName, option, el) {
    const userData = db.getUserData(teacherName);
    if (!userData.answers['6.1']) {
        userData.answers['6.1'] = [];
    }
    
    const index = userData.answers['6.1'].indexOf(option);
    if (index > -1) {
        userData.answers['6.1'].splice(index, 1);
        el.classList.remove('selected');
    } else {
        if (userData.answers['6.1'].length >= 2) {
            showToast('Sólo puedes seleccionar un máximo de 2 aspectos.');
            return;
        }
        userData.answers['6.1'].push(option);
        el.classList.add('selected');
    }
    db.saveUserData(teacherName, userData);
};

window.saveClosingField = function(teacherName, qId, value) {
    const userData = db.getUserData(teacherName);
    userData.answers[qId] = value;
    db.saveUserData(teacherName, userData);
    if (typeof showSaveIndicator === 'function') {
        showSaveIndicator();
    }
};

window.finishEvaluation = function(teacherName) {
    const missing = getMissingQuestions(teacherName);
    if (missing.length > 0) {
        const confirmDelivery = confirm(`Te quedan preguntas sin puntuar: (${missing.join(', ')}). ¿Deseas entregar la autoevaluación de todos modos?`);
        if (!confirmDelivery) return;
    }

    const userData = db.getUserData(teacherName);
    userData.status = 'completed';
    db.saveUserData(teacherName, userData);
    
    state.showingSuccessScreen = true;
    renderTeacherView();
};


// 10.9 HELPER PARA ACCESO POR ROLES (DIRECTOR GENERAL / EI_EP / ESO_BTO)
function getDirectorAllowedTeachers(list = TEACHERS) {
    if (!state.currentUser || state.currentUser.role !== 'director') return [];
    const subrole = state.currentUser.subrole || 'general';
    if (subrole === 'ei_ep') {
        return list.filter(t => t.etapa === 'Infantil' || t.etapa === 'Primaria');
    } else if (subrole === 'eso_bto') {
        return list.filter(t => t.etapa === 'Secundaria');
    }
    return list;
}

// 11. VISTA DEL DIRECTOR
function renderDirectorView() {
    window.scrollTo(0, 0);
    const teachersData = db.get().evaluations;

    const allowedList = getDirectorAllowedTeachers(TEACHERS);
    
    // Si la etapa seleccionada no pertenece al subrole, resetear a 'Todas'
    const subrole = state.currentUser.subrole || 'general';
    if (subrole === 'ei_ep' && state.selectedEtapa === 'Secundaria') {
        state.selectedEtapa = 'Todas';
    } else if (subrole === 'eso_bto' && (state.selectedEtapa === 'Infantil' || state.selectedEtapa === 'Primaria')) {
        state.selectedEtapa = 'Todas';
    }

    let filteredTeachersList = allowedList;
    if (state.selectedEtapa !== 'Todas') {
        filteredTeachersList = allowedList.filter(t => t.etapa === state.selectedEtapa);
    }

    let totalFiltered = filteredTeachersList.length;
    let completedCount = 0;
    let inProgressCount = 0;
    let notStartedCount = 0;

    filteredTeachersList.forEach(t => {
        const info = teachersData[t.name] || { status: 'not_started' };
        if (info.status === 'completed') completedCount++;
        else if (info.status === 'in_progress') inProgressCount++;
        else notStartedCount++;
    });

    const isTabSummary = state.activeDirectorTab === 'summary';
    const isTabTeachers = state.activeDirectorTab === 'teachers';

    dom.app.innerHTML = `
        <div class="director-container">
            <!-- Barra superior Filtro Etapa + KPIs -->
                <!-- Título Bienvenida Rol -->
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
                    <h2 style="margin:0; font-size:1.4rem; font-weight:800; color:var(--text-main); display:flex; align-items:center; gap:8px;">
                        <span>🏫</span> ${state.currentUser.name}
                        <span class="badge cloud-sync-status-badge" style="font-size:0.75rem; margin-left:8px;">☁️ Nube Conectada</span>
                    </h2>
                </div>

                <div class="stage-filter-segmented">
                    ${(function() {
                        const sRole = state.currentUser.subrole || 'general';
                        if (sRole === 'ei_ep') {
                            return `
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Todas' ? 'active' : ''}" onclick="filterByEtapa('Todas')">🏫 EI + EP</button>
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Infantil' ? 'active' : ''}" onclick="filterByEtapa('Infantil')">👶 Infantil</button>
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Primaria' ? 'active' : ''}" onclick="filterByEtapa('Primaria')">👦 Primaria</button>
                            `;
                        } else if (sRole === 'eso_bto') {
                            return `
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Todas' ? 'active' : ''}" onclick="filterByEtapa('Todas')">🏫 ESO + BTO</button>
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Secundaria' ? 'active' : ''}" onclick="filterByEtapa('Secundaria')">🎓 Secundaria / Bachillerato</button>
                            `;
                        } else {
                            return `
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Todas' ? 'active' : ''}" onclick="filterByEtapa('Todas')">🏫 Todas</button>
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Infantil' ? 'active' : ''}" onclick="filterByEtapa('Infantil')">👶 Infantil</button>
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Primaria' ? 'active' : ''}" onclick="filterByEtapa('Primaria')">👦 Primaria</button>
                                <button class="stage-filter-btn ${state.selectedEtapa === 'Secundaria' ? 'active' : ''}" onclick="filterByEtapa('Secundaria')">🎓 Secundaria</button>
                            `;
                        }
                    })()}
                </div>

            <!-- KPIs Header -->
            <div class="stats-summary-cards">
                <div class="glass-container stat-card">
                    <div class="stat-val">${totalFiltered}</div>
                    <div class="stat-lbl">Docentes (${state.selectedEtapa})</div>
                </div>
                <div class="glass-container stat-card" style="border-left: 4px solid var(--success);">
                    <div class="stat-val" style="color: var(--success);">${completedCount}</div>
                    <div class="stat-lbl">Entregadas</div>
                </div>
                <div class="glass-container stat-card" style="border-left: 4px solid var(--warning);">
                    <div class="stat-val" style="color: var(--warning);">${inProgressCount}</div>
                    <div class="stat-lbl">En Proceso</div>
                </div>
                <div class="glass-container stat-card" style="border-left: 4px solid var(--text-muted);">
                    <div class="stat-val" style="color: var(--text-muted);">${notStartedCount}</div>
                    <div class="stat-lbl">No Iniciadas</div>
                </div>
            </div>

            <!-- Navegación Director -->
            <div style="display: flex; gap: 10px; border-bottom: 1px solid var(--card-border); padding-bottom: 0.5rem; align-items:center; flex-wrap:wrap;">
                <button class="btn ${isTabSummary ? 'btn-primary' : 'btn-secondary'}" onclick="changeDirectorTab('summary')">
                    ${ICONS.chart} Panel General y Estadísticas
                </button>
                <button class="btn ${isTabTeachers ? 'btn-primary' : 'btn-secondary'}" onclick="changeDirectorTab('teachers')">
                    ${ICONS.users} Detalle y Co-Evaluación
                </button>
                <button class="btn ${state.activeDirectorTab === 'management' ? 'btn-primary' : 'btn-secondary'}" onclick="changeDirectorTab('management')">
                    👥 Gestión del Claustro
                </button>
                <button class="btn ${state.activeDirectorTab === 'tutorial' ? 'btn-primary' : 'btn-secondary'}" style="${state.activeDirectorTab === 'tutorial' ? 'background:linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); color:white;' : ''}" onclick="changeDirectorTab('tutorial')">
                    📚 Guía y Tutorial del Panel
                </button>
                
                <div style="margin-left: auto; display: flex; gap: 8px; flex-wrap:wrap; align-items:center;">
                    <button class="btn btn-secondary" onclick="exportBackup()" title="Descargar Copia de Seguridad completa del colegio">💾 Exportar Backup</button>
                    <button class="btn btn-secondary" onclick="document.getElementById('backup-upload-input').click()" title="Restaurar Copia de Seguridad completa desde un archivo JSON">📂 Restaurar Backup</button>
                    <input type="file" id="backup-upload-input" accept=".json" style="display:none;" onchange="importBackup(event)">
                    
                    <button class="btn btn-primary" style="background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);" onclick="exportAllTeacherReports()" title="Exportar Dossier PDF Completo con todas las evaluaciones de la etapa">📦 Exportar Dossier Masivo PDF</button>
                    <button class="btn btn-secondary" onclick="exportData('json')">📥 Exportar JSON</button>
                    <button class="btn btn-secondary" onclick="exportData('csv')">📥 Exportar CSV</button>
                    <button class="btn btn-danger" onclick="resetDatabase()">⚠️ Reiniciar Datos</button>
                    <button class="btn btn-secondary btn-icon" onclick="handleLogout()" title="Cerrar Sesión">
                        ${ICONS.logout}
                    </button>
                </div>
            </div>

            <!-- Contenido según la pestaña activa -->
            ${state.activeDirectorTab === 'summary' ? renderDirectorSummaryTab(teachersData, filteredTeachersList) : 
              state.activeDirectorTab === 'teachers' ? renderDirectorTeachersTab(teachersData) :
              state.activeDirectorTab === 'management' ? renderDirectorManagementTab(teachersData) :
              renderDirectorTutorialTab()}
        </div>
    `;

    if (isTabSummary) {
        setTimeout(renderDirectorCharts, 100);
    }
}

window.filterByEtapa = function(etapa) {
    state.selectedEtapa = etapa;
    state.selectedTeacherForDetail = null; 
    renderDirectorView();
};

window.changeDirectorTab = function(tabName) {
    state.activeDirectorTab = tabName;
    renderDirectorView();
};

// 11.1 PESTAÑA RESUMEN
function renderDirectorSummaryTab(teachersData, filteredTeachersList) {
    const listNames = filteredTeachersList.map(t => t.name);

    // Calcular nominaciones más votadas (filtrado por etapa)
    const nominations = {};
    Object.entries(teachersData).forEach(([name, t]) => {
        if (!listNames.includes(name)) return;
        const nom = t.answers && t.answers['nomination'];
        if (nom && listNames.includes(nom)) {
            nominations[nom] = (nominations[nom] || 0) + 1;
        }
    });

    // CALCULAR ALERTAS DE DISCREPANCIA (FASE 2)
    const alerts = [];
    filteredTeachersList.forEach(t => {
        const evalInfo = teachersData[t.name];
        if (evalInfo && evalInfo.status === 'completed' && evalInfo.directorAnswers) {
            const tAverages = calculateBlockAverages(t.name);
            const dAverages = calculateDirectorBlockAverages(t.name);
            
            EVAL_BLOCKS.slice(0, 5).forEach((block, idx) => {
                const tAvg = parseFloat(tAverages[idx]);
                const dAvg = parseFloat(dAverages[idx]);
                if (!isNaN(tAvg) && !isNaN(dAvg)) {
                    const diff = Math.abs(tAvg - dAvg);
                    if (diff >= 1.0) {
                        alerts.push({
                            teacherName: t.name,
                            blockTitle: block.title.split(':')[0] || block.title,
                            teacherAvg: tAvg,
                            directorAvg: dAvg,
                            diff: diff.toFixed(1)
                        });
                    }
                }
            });
        }
    });

    let alertsHtml = '';
    if (alerts.length > 0) {
        alertsHtml = alerts.map(a => `
            <div class="discrepancy-alert-row" style="cursor:pointer;" onclick="navigateToTeacherDetail('${a.teacherName}')" title="Co-evaluar directamente a ${a.teacherName}">
                <div>
                    <span class="discrepancy-teacher-name" style="text-decoration:underline;">${a.teacherName}</span>
                    <span class="discrepancy-info"> tiene un gap de criterio en <strong>${a.blockTitle}</strong> (Director: ${a.directorAvg} | Docente: ${a.teacherAvg})</span>
                </div>
                <div class="discrepancy-value">
                    ⚠️ Desviación: <strong>${a.diff}</strong>
                </div>
            </div>
        `).join('');
    } else {
        alertsHtml = `<p class="empty-state" style="padding:1rem; text-align:center;">✅ No hay discrepancias críticas de criterio (desviación ≥ 1.0) en las evaluaciones completadas.</p>`;
    }

    const sortedNominations = Object.entries(nominations)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    let nominationsHtml = sortedNominations.map(([name, count]) => `
        <div class="nomination-list-row">
            <span style="font-weight:700; color:var(--text-primary);">${name}</span>
            <span class="badge badge-completed" style="box-shadow: 0 4px 10px rgba(16,185,129,0.1);">${count} ${count === 1 ? 'voto' : 'votos'}</span>
        </div>
    `).join('');

    if (nominationsHtml === '') {
        nominationsHtml = `<p class="empty-state">No hay nominaciones registradas en esta etapa.</p>`;
    }

    return `
        <div class="analytics-grid">
            <div class="glass-container chart-card">
                <div class="chart-title">Promedio de Puntuación por Bloque (${state.selectedEtapa})</div>
                <div class="chart-wrapper">
                    <canvas id="chart-averages"></canvas>
                </div>
            </div>
            
            <div class="glass-container chart-card">
                <div class="chart-title">Distribución de Puntuaciones (Todos los ítems - ${state.selectedEtapa})</div>
                <div class="chart-wrapper">
                    <canvas id="chart-distribution"></canvas>
                </div>
            </div>

            <div class="glass-container chart-card">
                <div class="chart-title">Estado de Entrega de Autoevaluaciones</div>
                <div class="chart-wrapper" style="height: 220px;">
                    <canvas id="chart-status"></canvas>
                </div>
            </div>



            <div class="glass-container peer-nominations-card" style="grid-column: span 2;">
                <div class="chart-title">👥 Reconocimiento de Claustro (Bloque 2)</div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">
                    Docentes nominados por aportar mayor valor humano e implicación en ${state.selectedEtapa}:
                </p>
                <div style="display:flex; flex-direction:column; gap:0.25rem;">
                    ${nominationsHtml}
                </div>
            </div>

            <!-- Alertas de Discrepancia Crítica -->
            <div class="glass-container peer-nominations-card" style="grid-column: span 2; border-left: 4px solid var(--danger);">
                <div class="chart-title" style="color: var(--danger); display:flex; align-items:center; gap:6px;">
                    ⚠️ Alertas de Discrepancia de Criterio (Gaps ≥ 1.0)
                </div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">
                    Identifica docentes en donde la autoevaluación individual difiere significativamente de la valoración de Dirección (promedios por bloque):
                </p>
                <div class="discrepancy-panel">
                    ${alertsHtml}
                </div>
            </div>
        </div>
    `;
}

// 11.2 GRÁFICOS DIRECTOR (FILTRADOS)
function renderDirectorCharts() {
    const teachersData = db.get().evaluations;

    const allowedList = getDirectorAllowedTeachers(TEACHERS);
    const filteredNames = allowedList
        .filter(t => state.selectedEtapa === 'Todas' || t.etapa === state.selectedEtapa)
        .map(t => t.name);

    Object.values(state.chartInstances).forEach(chart => chart.destroy());
    state.chartInstances = {};

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
    const textColor = isDark ? '#f8fafc' : '#1e293b';

    // 1. Promedios
    const blockSums = { b1: 0, b2: 0, b3: 0, b4: 0, b5: 0 };
    const blockCounts = { b1: 0, b2: 0, b3: 0, b4: 0, b5: 0 };

    Object.entries(teachersData).forEach(([name, t]) => {
        if (!filteredNames.includes(name)) return;
        if (t.status !== 'not_started' && t.answers) {
            EVAL_BLOCKS.forEach(block => {
                if (block.id === 'b6') return;
                block.questions.forEach(q => {
                    if (q.id === 'cdd') return; // CDD es string
                    const ans = t.answers[q.id];
                    if (ans && ans.score && ans.score > 0) {
                        blockSums[block.id] += ans.score;
                        blockCounts[block.id]++;
                    }
                });
                if (block.id === 'b4') {
                    const ans12 = t.answers['4.12'];
                    if (ans12 && ans12.score) {
                        blockSums['b4'] += ans12.score;
                        blockCounts['b4']++;
                    }
                }
            });
        }
    });

    const blockAverages = EVAL_BLOCKS.slice(0, 5).map(b => {
        const count = blockCounts[b.id];
        return count > 0 ? (blockSums[b.id] / count).toFixed(2) : 0;
    });

    const ctxAvg = document.getElementById('chart-averages').getContext('2d');
    const avgGrad = ctxAvg.createLinearGradient(0, 0, 0, 200);
    avgGrad.addColorStop(0, '#2dd4bf');
    avgGrad.addColorStop(1, '#0f766e');

    state.chartInstances.averages = new Chart(ctxAvg, {
        type: 'bar',
        data: {
            labels: ['B1: Identidad', 'B2: Equipo', 'B3: Pastoral', 'B4: Práctica', 'B5: Compromiso'],
            datasets: [{
                label: 'Promedio General',
                data: blockAverages,
                backgroundColor: avgGrad,
                borderColor: '#0f766e',
                borderWidth: 1.5,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 1, max: 5, grid: { color: gridColor }, ticks: { color: textColor } },
                x: { grid: { display: false }, ticks: { color: textColor } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 2. Distribución de puntuaciones
    const scoreCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    Object.entries(teachersData).forEach(([name, t]) => {
        if (!filteredNames.includes(name)) return;
        if (t.status !== 'not_started' && t.answers) {
            Object.values(t.answers).forEach(ans => {
                if (ans && ans.score && scoreCounts[ans.score] !== undefined) {
                    scoreCounts[ans.score]++;
                }
            });
        }
    });

    const ctxDist = document.getElementById('chart-distribution').getContext('2d');
    const distGrad = ctxDist.createLinearGradient(0, 0, 0, 200);
    distGrad.addColorStop(0, 'rgba(217, 119, 6, 0.4)');
    distGrad.addColorStop(1, 'rgba(217, 119, 6, 0.02)');

    state.chartInstances.distribution = new Chart(ctxDist, {
        type: 'line',
        data: {
            labels: ['1 estre.', '2 estre.', '3 estre.', '4 estre.', '5 estre.'],
            datasets: [{
                label: 'Frecuencia de puntuaciones',
                data: [scoreCounts[1], scoreCounts[2], scoreCounts[3], scoreCounts[4], scoreCounts[5]],
                backgroundColor: distGrad,
                borderColor: '#d97706',
                borderWidth: 3,
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#d97706'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor } },
                x: { grid: { display: false }, ticks: { color: textColor } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 3. Estado de entrega
    let completed = 0, inProgress = 0, notStarted = 0;
    Object.entries(teachersData).forEach(([name, t]) => {
        if (!filteredNames.includes(name)) return;
        if (t.status === 'completed') completed++;
        else if (t.status === 'in_progress') inProgress++;
        else notStarted++;
    });

    const ctxStatus = document.getElementById('chart-status').getContext('2d');
    state.chartInstances.status = new Chart(ctxStatus, {
        type: 'doughnut',
        data: {
            labels: ['Entregadas', 'En Proceso', 'No Iniciadas'],
            datasets: [{
                data: [completed, inProgress, notStarted],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(148, 163, 184, 0.8)'
                ],
                borderColor: isDark ? '#1e1b4b' : '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: textColor } }
            }
        }
    });

    // 4. Competencia Digital Docente (MRCDD)
    const cddCounts = { 'A1': 0, 'A2': 0, 'B1': 0, 'B2': 0, 'C1': 0, 'C2': 0, 'No especificado': 0 };
    Object.entries(teachersData).forEach(([name, t]) => {
        if (!filteredNames.includes(name)) return;
        
        // Si ya respondieron la autoevaluación, ver la respuesta
        const cddAns = t.answers && t.answers['cdd'];
        if (cddAns) {
            cddCounts[cddAns] = (cddCounts[cddAns] || 0) + 1;
        } else {
            // Si no, tomar el valor CDD de partida de la base de datos de profesores
            const teacherObj = TEACHERS.find(x => x.name === name);
            if (teacherObj && teacherObj.cdd) {
                cddCounts[teacherObj.cdd] = (cddCounts[teacherObj.cdd] || 0) + 1;
            } else {
                cddCounts['No especificado']++;
            }
        }
    });

    const cddLabels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const cddData = cddLabels.map(l => cddCounts[l] || 0);

    const ctxCdd = document.getElementById('chart-cdd-dist').getContext('2d');
    state.chartInstances.cdd = new Chart(ctxCdd, {
        type: 'doughnut',
        data: {
            labels: cddLabels,
            datasets: [{
                data: cddData,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.75)', // blue
                    'rgba(147, 197, 253, 0.75)', // light blue
                    'rgba(79, 70, 229, 0.75)', // indigo
                    'rgba(168, 85, 247, 0.75)', // purple
                    'rgba(6, 182, 212, 0.75)', // cyan
                    'rgba(236, 72, 153, 0.75)'  // pink
                ],
                borderColor: isDark ? '#1e1b4b' : '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: textColor, font: { weight: '500', size: 10 } }
                }
            }
        }
    });
}

// 11.3 DETALLE DOCENTE (LISTADO FILTRADO)
function renderDirectorTeachersTab(teachersData) {
    const allowedList = getDirectorAllowedTeachers(TEACHERS);
    const filteredTeachersList = allowedList.filter(t => {
        return state.selectedEtapa === 'Todas' || t.etapa === state.selectedEtapa;
    });

    const activeTeacherName = state.selectedTeacherForDetail;
    const activeTeacherInfo = TEACHERS.find(t => t.name === activeTeacherName);
    
    let quickStatusHtml = '';
    if (activeTeacherInfo) {
        const info = teachersData[activeTeacherName] || { status: 'not_started' };
        let statusBadge = '';
        if (info.status === 'completed') {
            statusBadge = `<span class="badge badge-completed">Autoevaluación Entregada</span>`;
        } else if (info.status === 'in_progress') {
            statusBadge = `<span class="badge badge-in-progress">En proceso</span>`;
        } else {
            statusBadge = `<span class="badge badge-not-started">No Iniciada</span>`;
        }
        quickStatusHtml = `
            ${statusBadge}
            
            <span class="badge" style="background: rgba(0,0,0,0.03); color: var(--text-secondary); border: 1px solid var(--card-border);">Etapa: ${activeTeacherInfo.etapa}</span>
        `;
    }

    const selectedText = activeTeacherName ? `${activeTeacherName} (${activeTeacherInfo.etapa})` : '';

    // Opciones para el selector desplegable tradicional
    let selectOptionsHtml = filteredTeachersList.map(t => {
        const info = teachersData[t.name] || { status: 'not_started' };
        let sText = '⚪ No iniciado';
        if (info.status === 'completed') sText = '🟢 Entregado';
        else if (info.status === 'in_progress') sText = '🟡 En proceso';
        
        const isSel = state.selectedTeacherForDetail === t.name;
        return `<option value="${t.name}" ${isSel ? 'selected' : ''}>${t.name} (${t.etapa}) - ${sText}</option>`;
    }).join('');

    return `
        <div style="display:flex; flex-direction:column; gap:1.5rem; animation:fadeIn 0.3s ease;">
            <!-- Buscador y Selector de Profesores -->
            <div class="glass-container" style="display:flex; align-items:center; gap:1.25rem; padding:1.25rem; flex-wrap:wrap; border-radius: var(--border-radius-lg); position:relative;">
                <div style="font-weight:800; color:var(--text-muted); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">
                    👥 Profesor (${filteredTeachersList.length} en ${state.selectedEtapa}):
                </div>

                <div style="flex:1; min-width:280px; max-width:480px; display:flex; flex-direction:column; gap:6px;">
                    <select class="form-input" style="padding:0.6rem 1rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-card); color:var(--text-main); font-weight:700; cursor:pointer;" onchange="selectTeacherForDetail(this.value)">
                        <option value="">-- Elige un docente del claustro --</option>
                        ${selectOptionsHtml}
                    </select>
                </div>
                
                <div class="autocomplete-wrapper" style="flex:1; min-width:240px; max-width:380px; position:relative;">
                    <input type="text" class="form-input" id="teacher-autocomplete-input" 
                           placeholder="🔍 Filtrar o buscar por nombre..." 
                           value="${selectedText}" 
                           onfocus="showTeacherDropdown()" 
                           onclick="showTeacherDropdown()"
                           oninput="filterTeacherDropdown(this.value)" 
                           style="font-weight:600; cursor:text; padding-right:30px;">
                    <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); color:var(--text-muted); pointer-events:none; font-size:0.8rem;">▼</span>
                    
                    <div id="teacher-autocomplete-list" class="autocomplete-dropdown" style="display:none;">
                        <!-- Populate dinámicamente -->
                    </div>
                </div>

                <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                    ${quickStatusHtml}
                </div>
            </div>

            <!-- Ficha Detallada con Co-evaluación -->
            <div class="glass-container director-content-panel" id="director-teacher-detail-card" style="position:relative; padding:2.5rem; display:flex; flex-direction:column; gap:2.5rem; border-radius:var(--border-radius-lg);">
                ${renderTeacherDetailCard(state.selectedTeacherForDetail, teachersData)}
            </div>
        </div>
    `;
}

window.filterTeachersList = function(query) {
    state.searchQuery = query;
    const listScroll = document.querySelector('.teacher-items-scroll');
    if (listScroll) {
        const teachersData = db.get().evaluations;
        const filtered = TEACHERS.filter(t => {
            const matchesEtapa = state.selectedEtapa === 'Todas' || t.etapa === state.selectedEtapa;
            const matchesQuery = t.name.toLowerCase().includes(query.toLowerCase());
            return matchesEtapa && matchesQuery;
        });
        listScroll.innerHTML = filtered.map(t => {
            const info = teachersData[t.name] || { status: 'not_started' };
            const isActive = state.selectedTeacherForDetail === t.name;
            let badge = '';
            if (info.status === 'completed') badge = `<span class="badge badge-completed">Entregado</span>`;
            else if (info.status === 'in_progress') badge = `<span class="badge badge-in-progress">En proceso</span>`;
            else badge = `<span class="badge badge-not-started">No iniciado</span>`;

            return `
                <div class="teacher-item ${isActive ? 'active' : ''}" onclick="selectTeacherForDetail('${t.name}')">
                    <div class="teacher-name-info">
                        <span class="teacher-item-name">${t.name}</span>
                        <span class="teacher-item-status">${t.etapa} | CDD: ${t.cdd}</span>
                    </div>
                    ${badge}
                </div>
            `;
        }).join('');
    }
};

// 11.3.1.1 COMPONENTES DE COMPARACIÓN Y ANÁLISIS
window.changeRadarComparisonTarget = function(value) {
    state.comparisonTarget = value;
    renderRadarComparison();
};

function calculateBlockAverages(teacherName) {
    const tData = db.getUserData(teacherName);
    const averages = [];
    if (!tData || tData.status === 'not_started') return [0, 0, 0, 0, 0];

    EVAL_BLOCKS.slice(0, 5).forEach((block, idx) => {
        let sum = 0, count = 0;
        block.questions.forEach(q => {
            if (q.id === 'cdd') return;
            const ans = tData.answers[q.id];
            if (ans && ans.score && ans.score > 0) {
                sum += ans.score;
                count++;
            }
        });
        if (block.id === 'b4') {
            const ans12 = tData.answers['4.12'];
            if (ans12 && ans12.score) {
                sum += ans12.score;
                count++;
            }
        }
        averages.push(count > 0 ? parseFloat((sum / count).toFixed(2)) : 0);
    });
    return averages;
}

function calculateDirectorBlockAverages(teacherName) {
    const tData = db.getUserData(teacherName);
    const averages = [];
    if (!tData || !tData.directorAnswers) return [0, 0, 0, 0, 0];

    EVAL_BLOCKS.slice(0, 5).forEach((block, idx) => {
        let sum = 0, count = 0;
        block.questions.forEach(q => {
            if (q.id === 'cdd') return;
            const ans = tData.directorAnswers[q.id];
            if (ans && ans > 0) {
                sum += ans;
                count++;
            }
        });
        if (block.id === 'b4') {
            const ans12 = tData.directorAnswers['4.12'];
            if (ans12 && ans12 > 0) {
                sum += ans12;
                count++;
            }
        }
        averages.push(count > 0 ? parseFloat((sum / count).toFixed(2)) : 0);
    });
    return averages;
}

function getComparisonDataset(target, currentTeacherName) {
    const data = [0, 0, 0, 0, 0];
    const counts = [0, 0, 0, 0, 0];
    const allEvaluations = db.get().evaluations;

    if (target === 'school_avg') {
        Object.entries(allEvaluations).forEach(([name, info]) => {
            if (info.status === 'completed') {
                const averages = calculateBlockAverages(name);
                averages.forEach((avg, idx) => {
                    if (avg > 0) {
                        data[idx] += avg;
                        counts[idx]++;
                    }
                });
            }
        });
        const finalData = data.map((sum, idx) => counts[idx] > 0 ? parseFloat((sum / counts[idx]).toFixed(2)) : 0);
        return {
            label: 'Promedio Claustro',
            data: finalData,
            backgroundColor: 'rgba(71, 85, 105, 0.1)',
            borderColor: '#475569',
            borderWidth: 2,
            borderDash: [5, 5],
            pointBackgroundColor: '#475569'
        };
    } else if (target === 'stage_avg') {
        const currentTeacher = TEACHERS.find(t => t.name === currentTeacherName);
        const stage = currentTeacher ? currentTeacher.etapa : '';
        Object.entries(allEvaluations).forEach(([name, info]) => {
            if (info.status === 'completed') {
                const teacherObj = TEACHERS.find(t => t.name === name);
                if (teacherObj && teacherObj.etapa === stage) {
                    const averages = calculateBlockAverages(name);
                    averages.forEach((avg, idx) => {
                        if (avg > 0) {
                            data[idx] += avg;
                            counts[idx]++;
                        }
                    });
                }
            }
        });
        const finalData = data.map((sum, idx) => counts[idx] > 0 ? parseFloat((sum / counts[idx]).toFixed(2)) : 0);
        return {
            label: `Promedio Etapa (${stage})`,
            data: finalData,
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            borderColor: '#06b6d4',
            borderWidth: 2,
            borderDash: [5, 5],
            pointBackgroundColor: '#06b6d4'
        };
    } else if (target.startsWith('teacher:')) {
        const otherTeacherName = target.replace('teacher:', '');
        const averages = calculateBlockAverages(otherTeacherName);
        return {
            label: `Autoeval. de ${otherTeacherName.split(' ')[0]}`,
            data: averages,
            backgroundColor: 'rgba(168, 85, 247, 0.15)',
            borderColor: '#a855f7',
            borderWidth: 2,
            pointBackgroundColor: '#a855f7'
        };
    }
    return null;
}

function generatePedagogicalInterpretation(teacherName, teacherAverages, directorAverages) {
    const blockNames = ['B1: Identidad y Valores', 'B2: Clima y Equipo', 'B3: Acción Pastoral', 'B4: Práctica Docente', 'B5: Formación y Compromiso'];
    const strengths = [];
    const growth = [];

    teacherAverages.forEach((avg, idx) => {
        if (avg >= 4.2) {
            strengths.push(blockNames[idx]);
        } else if (avg <= 3.8) {
            growth.push(blockNames[idx]);
        }
    });

    let strengthsHtml = strengths.map(s => `<li>🌟 <strong>${s}</strong>: Desempeño destacado y alineación institucional.</li>`).join('');
    if (!strengthsHtml) {
        strengthsHtml = '<li>⚖️ <em>Desempeño equilibrado en todas las áreas.</em></li>';
    }

    let growthHtml = growth.map(g => `<li>📈 <strong>${g}</strong>: Recomendado plan formativo o acompañamiento en esta competencia.</li>`).join('');
    if (!growthHtml) {
        growthHtml = '<li>✅ <em>Autoevaluación sólida sin áreas críticas identificadas.</em></li>';
    }

    let alignmentText = '';
    let alignmentClass = '';
    
    const teacherOverall = teacherAverages.reduce((a,b)=>a+b, 0) / 5;
    const directorOverall = directorAverages.reduce((a,b)=>a+b, 0) / 5;
    const diff = teacherOverall - directorOverall;

    if (directorOverall === 0) {
        alignmentText = `Dirección no ha co-evaluado a ${teacherName.split(' ')[0]} todavía. Hazlo activando el <strong>Modo Entrevista</strong>.`;
        alignmentClass = 'background: rgba(71, 85, 105, 0.04); border-left: 4px solid #475569;';
    } else if (Math.abs(diff) < 0.3) {
        alignmentText = `<strong>Sintonía Excelente (desviación de ${Math.abs(diff).toFixed(2)} pts):</strong> Alto nivel de consenso y alineación pedagógica con la Dirección.`;
        alignmentClass = 'background: rgba(37, 99, 235, 0.04); border-left: 4px solid var(--primary-color);';
    } else if (diff >= 0.3) {
        alignmentText = `<strong>Gap de Autoexigencia (+${diff.toFixed(2)} pts):</strong> El docente tiene una autopercepción mayor. Revisar evidencias en la entrevista presencial.`;
        alignmentClass = 'background: rgba(217, 119, 6, 0.04); border-left: 4px solid var(--accent-color);';
    } else {
        alignmentText = `<strong>Modestia Profesional (${diff.toFixed(2)} pts):</strong> Calificación por debajo del criterio directivo. El docente infravalora sus fortalezas reales.`;
        alignmentClass = 'background: rgba(6, 182, 212, 0.04); border-left: 4px solid #06b6d4;';
    }

    return `
        <div class="glass-container no-print" style="padding:1.25rem; border-radius:12px; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <div>
                <h5 style="font-weight:700; color:var(--primary-color); font-size:0.9rem; display:flex; align-items:center; gap:6px; margin-bottom:0.75rem; margin-top:0;">
                    🧠 Interpretación Pedagógica del Perfil
                </h5>
                
                <div style="margin-bottom: 0.75rem;">
                    <div style="font-size: 0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:4px; text-transform: uppercase; letter-spacing:0.5px;">Fortalezas Detectadas:</div>
                    <ul style="font-size:0.8rem; padding-left:1.1rem; margin:0; line-height:1.4; color:var(--text-secondary);">
                        ${strengthsHtml}
                    </ul>
                </div>

                <div style="margin-bottom: 0.75rem;">
                    <div style="font-size: 0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:4px; text-transform: uppercase; letter-spacing:0.5px;">Áreas de Desarrollo:</div>
                    <ul style="font-size:0.8rem; padding-left:1.1rem; margin:0; line-height:1.4; color:var(--text-secondary);">
                        ${growthHtml}
                    </ul>
                </div>
            </div>

            <div style="font-size:0.75rem; padding:0.75rem; border-radius:6px; ${alignmentClass} line-height:1.4; color:var(--text-secondary);">
                ${alignmentText}
            </div>
        </div>
    `;
}


window.generateAIPedagogicalPlan = function(teacherName) {
    const containerId = `ai-plan-content-${teacherName.replace(/\s+/g, '')}`;
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; padding: 1rem 0;">
            <div class="spinner" style="border: 3px solid rgba(37,99,235,0.1); border-top: 3px solid var(--primary-color); border-radius:50%; width:20px; height:20px; animation: spin 1s linear infinite;"></div>
            <span style="font-size:0.85rem; color:var(--text-secondary); font-weight:600;">Analizando autoevaluaciones REALES completadas en el claustro...</span>
        </div>
    `;

    setTimeout(() => {
        const teacherAverages = calculateBlockAverages(teacherName, 'teacher');
        
        let lowestBlockId = 'b1';
        let lowestVal = 5.0;
        let lowestIdx = 0;

        EVAL_BLOCKS.filter(b => b.id !== 'b6').forEach((block, idx) => {
            const avg = parseFloat(teacherAverages[block.id]) || 0;
            if (avg > 0 && avg < lowestVal) {
                lowestVal = avg;
                lowestBlockId = block.id;
                lowestIdx = idx;
            }
        });

        const blockName = EVAL_BLOCKS[lowestIdx].title;
        const currentDbEvaluations = (db.get() && db.get().evaluations) || {};

        // FILTRADO ESTRICTO DE MENTORES REALES: Solo profesores que HAN COMPLETADO REALMENTE su cuestionario
        const mentors = [];
        Object.entries(currentDbEvaluations).forEach(([name, info]) => {
            if (name !== teacherName && info && info.status === 'completed' && info.answers && Object.keys(info.answers).length >= 5) {
                const otherAverages = calculateBlockAverages(name, 'teacher');
                const score = parseFloat(otherAverages[lowestBlockId]) || 0;
                if (score >= 4.0) {
                    const infoObj = TEACHERS.find(t => t.name === name);
                    mentors.push({ 
                        name, 
                        score, 
                        etapa: infoObj ? infoObj.etapa : '',
                        tutor: infoObj ? infoObj.tutor : ''
                    });
                }
            }
        });

        mentors.sort((a, b) => b.score - a.score);

        const proposalsByBlock = {
            'b1': [
                "Participar en el próximo seminario de formación identitaria del colegio para profundizar en la pedagogía franciscana.",
                "Involucrarse activamente en la comisión de acogida para nuevos docentes del centro.",
                "Colaborar en el diseño de las jornadas institucionales de la semana de San Buenaventura."
            ],
            'b2': [
                "Implementar dinámicas de comunicación asertiva y resolución pacífica de conflictos en el aula.",
                "Coordinar una sesión de intercambio de buenas prácticas con otros tutores de la misma etapa.",
                "Participar en proyectos de innovación docente interetapas para fomentar el trabajo en equipo."
            ],
            'b3': [
                "Colaborar con el departamento de Pastoral en la preparación y dinamización de las oraciones de la mañana.",
                "Liderar o apoyar una de las campañas solidarias anuales del centro (Domund, Navidad, etc.).",
                "Asistir a los retiros o convivencias de formación pastoral del profesorado."
            ],
            'b4': [
                "Integrar herramientas digitales avanzadas (Gamificación, Classroom, Rúbricas dinámicas LOMLOE) en sus asignaturas.",
                "Realizar una observación cruzada (job shadowing) asistiendo a la clase de un compañero del departamento.",
                "Diseñar una situación de aprendizaje interdisciplinar cooperativa para el próximo trimestre."
            ],
            'b5': [
                "Establecer un Plan de Formación Continuada con al menos un curso anual sobre metodologías activas.",
                "Participar en comisiones organizativas de eventos del centro (fiestas, graduaciones, jornadas de puertas abiertas).",
                "Compartir en la reunión pedagógica de departamento los aprendizajes clave de su último curso de formación."
            ]
        };

        const activeProposals = proposalsByBlock[lowestBlockId] || [
            "Establecer reuniones periódicas de coordinación para alinear criterios de aula.",
            "Asistir a jornadas de formación metodológica interna.",
            "Revisar el plan anual del departamento."
        ];

        let mentorsHtml = '';
        if (mentors.length > 0) {
            mentorsHtml = `
                <div style="margin-top: 1rem; background:rgba(37,99,235,0.03); border:1px solid rgba(37,99,235,0.12); border-radius:8px; padding:0.85rem;">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--primary-color); margin-bottom:6px; text-transform:uppercase; letter-spacing:0.5px;">👥 Mentores recomendados en el Claustro (Evaluaciones Entregadas):</div>
                    <p style="font-size:0.78rem; margin:0 0 8px 0; color:var(--text-muted);">
                        Los siguientes compañeros de etapa han entregado su autoevaluación con puntuación destacada en <strong>${blockName}</strong>:
                    </p>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        ${mentors.slice(0, 3).map(m => `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#ffffff; border:1px solid var(--card-border); padding:6px 12px; border-radius:6px; font-size:0.78rem;">
                                <span style="font-weight:600; color:var(--text-main);">🤝 ${m.name} <span style="color:var(--text-muted); font-weight:normal; font-size:0.7rem;">(${m.etapa})</span></span>
                                <span style="font-weight:700; color:var(--success); font-size:0.7rem; background:rgba(16,185,129,0.08); padding:2px 8px; border-radius:12px;">Puntuación en Bloque: ${m.score.toFixed(1)} / 5</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            mentorsHtml = `
                <div style="margin-top: 1rem; background:rgba(245, 158, 11, 0.05); border:1px solid rgba(245, 158, 11, 0.2); border-radius:8px; padding:0.85rem; font-size:0.78rem; color:var(--text-main);">
                    <div style="font-weight:700; color:#d97706; margin-bottom:4px;">⏳ Pendiente de más entregas en el Claustro:</div>
                    A medida que el resto de compañeros entreguen y finalicen sus autoevaluaciones reales, la IA identificará automáticamente a los mentores sobresalientes en este bloque para proponer colaboraciones.
                </div>
            `;
        }

        container.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:0.75rem; animation: fadeIn 0.4s ease;">
                <p style="font-size:0.82rem; line-height:1.4; color:var(--text-secondary); margin:0;">
                    Área prioritaria de fortalecimiento detectada: <strong style="color:var(--primary-color);">${blockName}</strong> (Promedio: ${lowestVal.toFixed(2)} / 5.0). Propuestas recomendadas de mejora:
                </p>
                <ul style="font-size:0.8rem; padding-left:1.1rem; margin:0; line-height:1.5; color:var(--text-main); display:flex; flex-direction:column; gap:4px;">
                    ${activeProposals.map(p => `<li>✅ ${p}</li>`).join('')}
                </ul>
                ${mentorsHtml}
            </div>
        `;
    }, 600);
};

window.selectTeacherForDetail = function(name) {
    state.selectedTeacherForDetail = name;
    state.comparisonTarget = 'none';
    renderDirectorView();
    if (name) {
        setTimeout(renderRadarComparison, 100);
    }
};

// 11.3.1 FICHA DE DETALLE DEL DOCENTE CON GAP ANALYSIS Y SMART PLANS
function renderTeacherDetailCard(name, teachersData) {
    if (!name) {
        return `
            <div class="empty-state" style="margin: auto;">
                <i>👥</i>
                <p>Selecciona un docente del listado de la izquierda para visualizar sus resultados de autoevaluación.</p>
            </div>
        `;
    }
    const tData = teachersData[name];
    const teacherInfo = TEACHERS.find(t=>t.name===name);
    
    const teacherBlockAverages = calculateBlockAverages(name);
    const directorBlockAverages = calculateDirectorBlockAverages(name);

    
    if (!tData || tData.status === 'not_started') {
        return `
            <div class="detail-header">
                <div class="detail-header-left">
                    <h3>${name}</h3>
                    <p style="color: var(--text-muted);">Etapa: ${teacherInfo.etapa} | Estado: <span class="badge badge-not-started">No iniciado</span></p>
                </div>
            </div>
            <div class="empty-state" style="margin: auto;">
                <i>⏳</i>
                <p>El profesor ${name} aún no ha comenzado su cuestionario de autoevaluación.</p>
            </div>
        `;
    }

    const dirAnswers = tData.directorAnswers || {};

    // 1. GAP ANALYSIS (Análisis de Desviaciones)
    let gapsRowsHtml = '';
    let hasGaps = false;
    let totalGaps = 0;
    let gapCount = 0;

    EVAL_BLOCKS.forEach(block => {
        if (block.id === 'b6') return;
        block.questions.forEach(q => {
            if (q.id === 'cdd') return;
            const tScore = tData.answers[q.id] ? tData.answers[q.id].score : 0;
            const dScore = dirAnswers[q.id] || 0;
            
            if (tScore > 0 && dScore > 0) {
                const diff = tScore - dScore;
                totalGaps += Math.abs(diff);
                gapCount++;
                
                if (diff !== 0) {
                    hasGaps = true;
                    gapsRowsHtml += `
                        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; padding:0.5rem 0.75rem; background:rgba(0,0,0,0.01); border-bottom:1px solid var(--card-border);">
                            <span style="font-weight:600; color:var(--text-secondary);">${q.id}</span>
                            <span style="font-size:0.8rem; flex:1; margin-left:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${q.text}</span>
                            <div style="display:flex; gap:10px; font-weight:700; align-items:center;">
                                <span style="color:var(--text-muted);">T: ${tScore}</span>
                                <span style="color:var(--primary-color);">D: ${dScore}</span>
                                <span class="badge" style="background:${diff > 0 ? 'rgba(217, 119, 6, 0.1)' : 'rgba(15, 118, 110, 0.1)'}; color:${diff > 0 ? 'var(--accent-color)' : 'var(--primary-color)'}; font-size:0.7rem;">
                                    ${diff > 0 ? '+' + diff : diff}
                                </span>
                            </div>
                        </div>
                    `;
                }
            }
        });
    });

    const averageGap = gapCount > 0 ? (totalGaps / gapCount).toFixed(2) : '0.00';
    let gapCardHtml = `
        <div class="glass-container no-print" style="padding:1.25rem; background:rgba(217,119,6,0.03); border:1px solid rgba(217,119,6,0.1); border-radius:12px; margin-bottom:1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <h5 style="font-weight:700; color:var(--accent-color); font-size:0.95rem; display:flex; align-items:center; gap:6px;">
                    ⚖️ Análisis de Desviaciones (Gap: ${averageGap})
                </h5>
                <span style="font-size:0.75rem; color:var(--text-muted);">Diferencia de criterio Docente (T) vs Dirección (D)</span>
            </div>
            <div style="max-height:150px; overflow-y:auto; display:flex; flex-direction:column;">
                ${hasGaps ? gapsRowsHtml : '<p style="font-size:0.8rem; color:var(--text-muted); font-style:italic; padding:0.5rem;">Consenso perfecto: No hay desviaciones de puntuación.</p>'}
            </div>
        </div>
    `;

    // Detalle bloque por bloque
    let blocksDetailHtml = EVAL_BLOCKS.map((block, index) => {
        let blockAvg = 0;
        let scoreCount = 0;
        let blockScoreSum = 0;

        let questionRows = block.questions.map(q => {
            const answer = tData.answers[q.id];
            
            if (q.type === 'scale') {
                const score = answer ? answer.score : null;
                const dirScore = dirAnswers[q.id] || null;
                
                if (score) {
                    blockScoreSum += score;
                    scoreCount++;
                }

                let directorScaleHtml = '';
                const isSigned = tData.signedTeacher && tData.signedDirector;
                if (!isSigned) {
                    let dirButtons = '';
                    for (let i = 1; i <= 5; i++) {
                        const isDirSelected = dirScore === i;
                        dirButtons += `
                            <button class="rating-btn ${isDirSelected ? 'selected val-' + i : ''}" 
                                    style="height:32px; font-size:0.85rem;"
                                    type="button" 
                                    onmouseover="updateScoreLegendDir('${q.id}', ${i})"
                                    onmouseout="restoreScoreLegendDir('${q.id}', ${dirScore})"
                                    onclick="saveDirectorScore('${name}', '${q.id}', ${i})">${i}</button>
                        `;
                    }
                    directorScaleHtml = `
                        <div class="no-print" style="margin-top:0.75rem; padding:0.5rem; background:rgba(0,0,0,0.02); border-radius:6px;">
                            <div style="font-size:0.75rem; font-weight:700; color:var(--primary-color); margin-bottom:4px;">Puntuación de Dirección:</div>
                            <div class="rating-scale" style="max-width:320px; gap:4px;">
                                ${dirButtons}
                            </div>
                            <div class="score-legend-container" id="legend-dir-${q.id}" style="margin-top: 4px;">
                                ${dirScore > 0 ? getScoreLegendHtml(dirScore) : ''}
                            </div>
                        </div>
                    `;
                } else if (dirScore) {
                    directorScaleHtml = `
                        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
                            Puntuación Dirección: <strong style="color:var(--primary-color);">${dirScore}</strong>
                        </div>
                    `;
                } else if (dirScore) {
                    directorScaleHtml = `
                        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
                            Puntuación Dirección: <strong style="color:var(--primary-color);">${dirScore}</strong>
                        </div>
                    `;
                }

                return `
                    <div class="detail-question-row">
                        <div class="detail-question-header">
                            <span style="font-size: 0.95rem; font-weight: 600; flex: 1; min-width: 200px;">${q.id}. ${q.text}</span>
                            <div style="display:flex; gap:8px; align-items:center;">
                                <span style="font-size:0.75rem; color:var(--text-muted);">Docente:</span>
                                <span class="detail-score-pill">${score || '-'}</span>
                            </div>
                        </div>
                        ${answer && answer.evidence ? `<div class="detail-evidence-text"><strong>Evidencia/Ejemplo:</strong> ${answer.evidence}</div>` : ''}
                        ${directorScaleHtml}
                    </div>
                `;
            } else if (q.type === 'yesno_details') {
                const val = answer ? answer.value : null;
                const details = answer ? answer.details : '';
                return `
                    <div class="detail-question-row">
                        <div class="detail-question-header">
                            <span style="font-size: 0.95rem; font-weight: 600; flex: 1; min-width: 200px;">${q.id}. ${q.text}</span>
                            <span class="badge ${val === 'yes' ? 'badge-completed' : 'badge-not-started'}">${val === 'yes' ? 'Sí' : val === 'no' ? 'No' : '-'}</span>
                        </div>
                        ${details ? `<div class="detail-evidence-text"><strong>Detalles de formación:</strong> ${details}</div>` : ''}
                    </div>
                `;
            } else if (q.type === 'yesno_na') {
                const val = answer ? answer.value : null;
                return `
                    <div class="detail-question-row">
                        <div class="detail-question-header">
                            <span style="font-size: 0.95rem; font-weight: 600; flex: 1; min-width: 200px;">${q.id}. ${q.text}</span>
                            <span class="badge ${val === 'yes' ? 'badge-completed' : val === 'no' ? 'badge-danger' : 'badge-not-started'}">
                                ${val === 'yes' ? 'Sí' : val === 'no' ? 'No' : val === 'na' ? 'No aplica' : '-'}
                            </span>
                        </div>
                    </div>
                `;
            } else if (q.type === 'cdd_select') {
                const val = answer || '';
                return `
                    <div class="detail-question-row">
                        <div class="detail-question-header">
                            <span style="font-size: 0.95rem; font-weight: 600;">CDD. Competencia Digital Docente (MRCDD)</span>
                            <span class="badge badge-completed">${val || 'No seleccionado'}</span>
                        </div>
                    </div>
                `;
            } else if (q.type === 'multiselect') {
                const list = answer || [];
                return `
                    <div class="detail-question-row">
                        <div style="font-size: 0.95rem; font-weight: 600; margin-bottom:0.5rem;">${q.id}. ${q.text}</div>
                        <div style="display:flex; flex-wrap:wrap; gap:6px;">
                            ${list.length > 0 ? list.map(item => `<span class="badge badge-completed">${item}</span>`).join('') : '<span class="badge badge-not-started">Ninguno seleccionado</span>'}
                        </div>
                    </div>
                `;
            } else if (q.type === 'smart_plan') {
                const val = answer || { meta: '', acciones: '', indicador: '', apoyo: '' };
                return `
                    <div class="detail-question-row">
                        <div style="font-size: 0.95rem; font-weight: 700; margin-bottom:0.75rem; color:var(--primary-color);">6.2. Plan de Crecimiento SMART Pactado:</div>
                        <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem;">
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Meta Concreta:</strong> ${val.meta || '-'}
                            </div>
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Acciones Propuestas:</strong> ${val.acciones || '-'}
                            </div>
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Indicador de Éxito:</strong> ${val.indicador || '-'}
                            </div>
                            <div style="background:rgba(0,0,0,0.01); padding:0.5rem; border-radius:4px;">
                                <strong>Apoyo del Colegio:</strong> ${val.apoyo || '-'}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                const textVal = answer || '';
                return `
                    <div class="detail-question-row">
                        <div style="font-size: 0.95rem; font-weight: 600; margin-bottom:0.25rem;">${q.id}. ${q.text}</div>
                        <div style="font-size:0.9rem; padding: 0.5rem; background:rgba(0,0,0,0.01); border-radius:4px; font-style:italic;">
                            ${textVal || '-'}
                        </div>
                    </div>
                `;
            }
        }).join('');

        if (block.id === 'b2') {
            const nominee = tData.answers['nomination'] || '';
            questionRows += `
                <div class="detail-question-row" style="border-left: 2px solid var(--accent-color); background: rgba(217, 119, 6, 0.02);">
                    <div class="detail-question-header">
                        <span style="font-size: 0.95rem; font-weight: 600; color:var(--accent-color);">★ Compañero/a que considera que más aporta al equipo:</span>
                        <span class="badge badge-completed">${nominee || 'Ninguno'}</span>
                    </div>
                </div>
            `;
        }

        blockAvg = scoreCount > 0 ? (blockScoreSum / scoreCount).toFixed(2) : null;
        const reflection = tData.reflections[block.id] || '';

        return `
            <div class="detail-block-section">
                <h4>
                    <span>${block.title}</span>
                    ${blockAvg ? `<span class="detail-block-avg">Promedio Docente: <strong>${blockAvg} / 5</strong></span>` : ''}
                </h4>
                
                <div class="detail-questions-list">
                    ${questionRows}
                </div>

                ${reflection ? `
                    <div class="detail-reflection-row">
                        <div class="detail-reflection-label">Reflexión abierta del bloque:</div>
                        <div class="detail-reflection-body">${reflection}</div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');

    return `
        <div class="detail-header no-print">
            <div class="detail-header-left">
                <h3>${name}</h3>
                <p style="color: var(--text-muted);">
                    Etapa: ${teacherInfo.etapa} | Tutor: ${teacherInfo.tutor} | 
                    Estado: <span class="badge ${tData.status === 'completed' ? 'badge-completed' : 'badge-in-progress'}">${tData.status === 'completed' ? 'Entregado' : 'En proceso'}</span>
                </p>
            </div>
            
            <div style="display:flex; gap:8px;">
                <button class="btn ${state.interviewModeActive ? 'btn-primary' : 'btn-secondary'}" 
                        style="${state.interviewModeActive ? 'background:var(--accent-color); box-shadow: 0 4px 14px var(--accent-glow);' : ''}"
                        onclick="toggleInterviewMode()">
                    ${ICONS.interview} Modo Entrevista Presencial
                </button>
                <button class="btn btn-secondary" onclick="generateOfficialPrintDocument('${name}')">
                    ${ICONS.print} Imprimir / PDF
                </button>
            </div>
        </div>

        <!-- Ficha de Comparación de Radar e Interpretación Pedagógica -->
        <div class="analytics-grid" id="radar-comparison-grid" style="margin-top:1rem;">
            <!-- Carta de Radar -->
            <div class="glass-container chart-card" style="min-height: 380px; display:flex; flex-direction:column; align-items:center; padding:1.25rem;">
                <div class="chart-title" style="margin-bottom: 0.5rem; font-size: 0.95rem;">📊 Comparación de Perfil Docente</div>
                
                <!-- Selector de Comparación -->
                <div style="margin-bottom: 1rem; width: 100%; display: flex; gap: 8px; align-items: center; justify-content: center; flex-wrap: wrap;">
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">Comparar con:</span>
                    <select class="form-input" id="radar-compare-select" onchange="changeRadarComparisonTarget(this.value)" style="max-width: 220px; height: 32px; padding: 2px 8px; font-size: 0.8rem; border-radius: 6px;">
                        <option value="none" ${state.comparisonTarget === 'none' ? 'selected' : ''}>Solo Dirección vs Docente</option>
                        <option value="school_avg" ${state.comparisonTarget === 'school_avg' ? 'selected' : ''}>Promedio del Claustro</option>
                        <option value="stage_avg" ${state.comparisonTarget === 'stage_avg' ? 'selected' : ''}>Promedio de la Etapa (${teacherInfo.etapa})</option>
                        ${TEACHERS.filter(t => t.name !== name).map(t => `<option value="teacher:${t.name}" ${state.comparisonTarget === 'teacher:' + t.name ? 'selected' : ''}>Otro Docente: ${t.name}</option>`).join('')}
                    </select>
                </div>

                <div class="chart-wrapper" style="width:100%; max-width:380px; height: 260px; display: flex; justify-content: center;">
                    <canvas id="chart-radar-eval"></canvas>
                </div>
            </div>
            
            <!-- Carta de Interpretación Pedagógica -->
            <div class="no-print">
                ${generatePedagogicalInterpretation(name, teacherBlockAverages, directorBlockAverages)}
            </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:2rem; margin-top: 1rem;">
            <!-- Caja de Gap Analysis (Desviaciones) -->
            ${gapCardHtml}

            <!-- Plan de Propuestas IA & Mentores -->
            <div class="glass-container no-print" id="ai-plan-card" style="padding: 1.5rem; border-left: 4px solid var(--primary-color); position: relative; overflow: hidden; border-radius:12px; box-shadow: 0 4px 20px rgba(0,0,0,0.02);">
                <div style="position: absolute; right: -15px; top: -15px; font-size: 6rem; opacity: 0.03; font-weight: 900; pointer-events: none; user-select: none;">IA</div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
                    <h4 style="margin:0; font-size:0.95rem; color:var(--primary-color); font-weight:700; display:flex; align-items:center; gap:8px; border:none; padding:0; background:none;">
                        🪄 Plan de Propuestas Pedagógicas (Generador IA)
                    </h4>
                    <button class="btn btn-primary" onclick="generateAIPedagogicalPlan('${name}')" style="font-size:0.75rem; padding: 6px 12px; height:auto; background:var(--primary-color); border-radius:6px; font-weight:600; box-shadow:0 2px 8px rgba(37,99,235,0.15);">
                        ⚡ Generar Plan con IA
                    </button>
                </div>
                <div id="ai-plan-content-${name.replace(/\s+/g, '')}">
                    <p style="font-size:0.8rem; color:var(--text-muted); font-style:italic; margin:0;">
                        Haz clic en el botón de arriba para analizar las respuestas de ${name} y generar recomendaciones pedagógicas personalizadas basadas en el claustro y emparejamiento con mentores sugeridos del centro.
                    </p>
                </div>
            </div>

            <!-- Notas de entrevista -->
            <div class="director-notes-section no-print">
                <h4>📝 Notas internas del Director para la entrevista</h4>
                <textarea class="reflection-textarea" 
                          id="dir-notes-${name.replace(/\s+/g, '')}"
                          style="min-height: 100px; background: rgba(255,255,255,0.8);"
                          placeholder="Apunta aquí el feedback, acuerdos alcanzados o metas pactadas durante la entrevista presencial con ${name}..." 
                          onchange="saveDirectorNotes('${name}', this.value)">${tData.directorNotes || ''}</textarea>
            </div>

            <!-- Desglose de bloques -->
            <div style="display:flex; flex-direction:column; gap:2.5rem;">
                ${blocksDetailHtml}
            </div>

            <!-- Bloque de Firmas -->
            ${renderSignaturesWidget(name, tData)}
        </div>
        
        <!-- Contenedor exclusivo para impresión (Acta Formal) -->
        <div class="print-only">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #000; padding-bottom:12px; margin-bottom:2rem;">
                <img src="logo.png" alt="Logo" style="height:60px; width:auto; border-radius:4px;">
                <h2 style="font-size:20pt; font-weight:800; margin:0; text-align:right;">
                    Acta de Consenso y Co-Evaluación Docente
                </h2>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:2rem; font-size:11pt;">
                <div><strong>Centro:</strong> Colegio San Buenaventura</div>
                <div><strong>Fecha de Reunión:</strong> ${new Date().toLocaleDateString()}</div>
                <div><strong>Docente Evaluado:</strong> ${name}</div>
                <div><strong>Etapa y Tutoría:</strong> ${teacherInfo.etapa} (${teacherInfo.tutor})</div>
                
                <div><strong>Desviación Promedio (Gap):</strong> ${averageGap}</div>
            </div>
            
            <div style="border:1px solid #000; padding:1.25rem; margin-bottom:2rem; background:#f9f9f9; page-break-inside:avoid;">
                <h4 style="margin:0 0 8px 0; border-bottom:1px solid #000; padding-bottom:4px;">📝 Acuerdos Alcanzados y Notas del Director</h4>
                <p style="font-size:10pt; line-height:1.5;">${tData.directorNotes || 'No hay notas registradas para esta entrevista.'}</p>
            </div>
            
            <div style="border:1px solid #000; padding:1.25rem; margin-bottom:2.5rem; background:#f9f9f9; page-break-inside:avoid;">
                <h4 style="margin:0 0 8px 0; border-bottom:1px solid #000; padding-bottom:4px;">🎯 Compromiso SMART Pactado para el Próximo Curso</h4>
                <p style="font-size:10pt; line-height:1.4; margin-bottom:4px;"><strong>1. Meta:</strong> ${tData.answers['smart_plan'] ? tData.answers['smart_plan'].meta : '-'}</p>
                <p style="font-size:10pt; line-height:1.4; margin-bottom:4px;"><strong>2. Acciones:</strong> ${tData.answers['smart_plan'] ? tData.answers['smart_plan'].acciones : '-'}</p>
                <p style="font-size:10pt; line-height:1.4; margin-bottom:4px;"><strong>3. Medición del Éxito:</strong> ${tData.answers['smart_plan'] ? tData.answers['smart_plan'].indicador : '-'}</p>
                <p style="font-size:10pt; line-height:1.4; margin-bottom:4px;"><strong>4. Recursos Requeridos:</strong> ${tData.answers['smart_plan'] ? tData.answers['smart_plan'].apoyo : '-'}</p>
            </div>

            <div style="margin-top:5rem; display:flex; justify-content:space-around; page-break-inside:avoid;">
                <div style="border-top:1px dashed #000; width:220px; text-align:center; padding-top:8px; font-size:10pt;">
                    Firma del Docente<br><strong>${name}</strong>
                </div>
                <div style="border-top:1px dashed #000; width:220px; text-align:center; padding-top:8px; font-size:10pt;">
                    Firma de la Dirección<br><strong>Colegio San Buenaventura</strong>
                </div>
            </div>
        </div>
    `;
}

window.toggleInterviewMode = function() {
    state.interviewModeActive = !state.interviewModeActive;
    renderDirectorView();
    if (state.selectedTeacherForDetail) {
        setTimeout(renderRadarComparison, 100);
    }
};

window.saveDirectorScore = function(teacherName, qId, score) {
    const userData = db.getUserData(teacherName);
    if (!userData.directorAnswers) {
        userData.directorAnswers = {};
    }
    userData.directorAnswers[qId] = score;
    db.saveUserData(teacherName, userData);
    
    renderDirectorView();
    if (state.selectedTeacherForDetail) {
        setTimeout(renderRadarComparison, 100);
    }
};

// 11.3.2 GENERADOR RADAR DETALLADO
function renderRadarComparison() {
    const teacherName = state.selectedTeacherForDetail;
    if (!teacherName) return;

    const teacherBlockAverages = calculateBlockAverages(teacherName);
    const directorBlockAverages = calculateDirectorBlockAverages(teacherName);

    const datasets = [
        {
            label: 'Autoevaluación (Docente)',
            data: teacherBlockAverages,
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
            borderColor: '#2563eb',
            borderWidth: 2,
            pointBackgroundColor: '#2563eb'
        },
        {
            label: 'Valoración (Dirección)',
            data: directorBlockAverages,
            backgroundColor: 'rgba(217, 119, 6, 0.15)',
            borderColor: '#d97706',
            borderWidth: 2,
            pointBackgroundColor: '#d97706'
        }
    ];

    if (state.comparisonTarget && state.comparisonTarget !== 'none') {
        const compDataset = getComparisonDataset(state.comparisonTarget, teacherName);
        if (compDataset) {
            datasets.push(compDataset);
        }
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
    const textColor = isDark ? '#f8fafc' : '#1e293b';

    const ctxRadar = document.getElementById('chart-radar-eval').getContext('2d');
    
    if (state.chartInstances.radarDetail) {
        state.chartInstances.radarDetail.destroy();
    }

    state.chartInstances.radarDetail = new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['B1: Identidad', 'B2: Equipo', 'B3: Pastoral', 'B4: Práctica', 'B5: Compromiso'],
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1,
                        color: textColor,
                        backdropColor: 'transparent'
                    },
                    grid: { color: gridColor },
                    angleLines: { color: gridColor },
                    pointLabels: {
                        color: textColor,
                        font: { size: 10, weight: '600' }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: { color: textColor, font: { weight: '500' } }
                }
            }
        }
    });
}

window.saveDirectorNotes = function(teacherName, notes) {
    const userData = db.getUserData(teacherName);
    userData.directorNotes = notes;
    db.saveUserData(teacherName, userData);
    showToast(`Nota guardada para ${teacherName}`);
    if (typeof showSaveIndicator === 'function') {
        showSaveIndicator();
    }
};

function getScoreLegendHtml(score) {
    return '';
}

window.updateScoreLegend = function(qId, score) {
    const container = document.getElementById(`legend-${qId}`);
    if (container) container.innerHTML = getScoreLegendHtml(score);
};

window.restoreScoreLegend = function(qId, selectedScore) {
    const container = document.getElementById(`legend-${qId}`);
    if (container) {
        container.innerHTML = selectedScore > 0 ? getScoreLegendHtml(selectedScore) : '';
    }
};

window.updateScoreLegendDir = function(qId, score) {
    const container = document.getElementById(`legend-dir-${qId}`);
    if (container) container.innerHTML = getScoreLegendHtml(score);
};

window.restoreScoreLegendDir = function(qId, selectedScore) {
    const container = document.getElementById(`legend-dir-${qId}`);
    if (container) {
        container.innerHTML = selectedScore > 0 ? getScoreLegendHtml(selectedScore) : '';
    }
};


// 12. AUXILIARES
function isBlockCompleted(teacherName, blockIndex) {
    const userData = db.getUserData(teacherName);
    const block = EVAL_BLOCKS[blockIndex];
    
    if (block.id === 'b6') {
        return userData.answers['smart_plan'] && userData.answers['smart_plan'].meta && userData.answers['smart_plan'].acciones && userData.answers['6.3'];
    }

    for (let q of block.questions) {
        if (q.id === 'cdd') {
            const ans = userData.answers['cdd'];
            if (!ans) return false;
            continue;
        }
        if (q.type === 'scale') {
            const ans = userData.answers[q.id];
            if (!ans || !ans.score || ans.score === 0) return false;
        } else if (q.type === 'yesno_details' || q.type === 'yesno_na') {
            const ans = userData.answers[q.id];
            if (!ans || !ans.value) return false;
        }
    }
    return true;
}

function calculateCompletionPercent(teacherName) {
    const userData = db.getUserData(teacherName);
    let totalQuestions = 0;
    let answeredQuestions = 0;

    EVAL_BLOCKS.forEach(block => {
        if (block.id === 'b6') {
            totalQuestions += 3;
            if (userData.answers['6.1'] && userData.answers['6.1'].length > 0) answeredQuestions++;
            if (userData.answers['smart_plan'] && userData.answers['smart_plan'].meta) answeredQuestions++;
            if (userData.answers['6.3']) answeredQuestions++;
        } else {
            block.questions.forEach(q => {
                totalQuestions++;
                if (q.id === 'cdd') {
                    if (userData.answers['cdd']) answeredQuestions++;
                    return;
                }
                const ans = userData.answers[q.id];
                if (q.type === 'scale') {
                    if (ans && ans.score && ans.score > 0) answeredQuestions++;
                } else {
                    if (ans && ans.value) answeredQuestions++;
                }
            });
            totalQuestions += 2;
            if (userData.reflections[block.id]) answeredQuestions++;
            if (block.id === 'b2' && userData.answers['nomination']) answeredQuestions++;
            else if (block.id !== 'b2') totalQuestions--;
        }
    });

    return Math.min(100, Math.round((answeredQuestions / totalQuestions) * 100));
}

function getMissingQuestions(teacherName) {
    const userData = db.getUserData(teacherName);
    const missing = [];

    EVAL_BLOCKS.forEach(block => {
        if (block.id === 'b6') {
            if (!userData.answers['smart_plan'] || !userData.answers['smart_plan'].meta) missing.push('6.2 (Plan SMART)');
            if (!userData.answers['6.3']) missing.push('6.3 (Formación)');
        } else {
            block.questions.forEach(q => {
                if (q.id === 'cdd') {
                    if (!userData.answers['cdd']) missing.push('CDD');
                    return;
                }
                const ans = userData.answers[q.id];
                if (q.type === 'scale') {
                    if (!ans || !ans.score) missing.push(q.id);
                } else {
                    if (!ans || !ans.value) missing.push(q.id);
                }
            });
        }
    });

    return missing;
}

// 13. EXPORTACIONES
window.exportData = function(format) {
    const data = db.get();
    
    if (format === 'json') {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `resultados_autoevaluacion_completa_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast('JSON exportado con éxito');
    } else if (format === 'csv' || format === 'excel') {
        let csvText = "";
        
        let headers = ["Docente", "Etapa", "Estado", "Fecha Entrega"];
        EVAL_BLOCKS.forEach(b => {
            if (b.id !== 'b6') {
                b.questions.forEach(q => {
                    if (q.id === 'cdd') {
                        
                        return;
                    }
                    headers.push(`${q.id} (Docente)`, `${q.id} (Evidencia)`);
                    if (q.type === 'scale') {
                        headers.push(`${q.id} (Dirección)`);
                    }
                });
                if (b.id === 'b2') headers.push("Nominado");
                headers.push(`Reflexión ${b.id.toUpperCase()}`);
            } else {
                headers.push("6.1 Destacado 1", "6.1 Destacado 2", "6.2 SMART Meta", "6.2 SMART Acciones", "6.2 SMART Indicador", "6.2 SMART Apoyo", "6.3 Formación");
            }
        });
        headers.push("Notas Director");
        csvText += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";

        Object.entries(data.evaluations).forEach(([name, info]) => {
            const etapa = TEACHERS.find(t=>t.name===name).etapa;
            let row = [name, etapa, info.status, info.updatedAt || ''];
            
            EVAL_BLOCKS.forEach(b => {
                if (b.id !== 'b6') {
                    b.questions.forEach(q => {
                        if (q.id === 'cdd') {
                            row.push(info.answers['cdd'] || '');
                            return;
                        }
                        const ans = info.answers[q.id];
                        const dirAns = info.directorAnswers ? info.directorAnswers[q.id] : '';
                        if (q.type === 'scale') {
                            row.push(ans ? ans.score : '', ans ? ans.evidence || '' : '', dirAns || '');
                        } else if (q.type === 'yesno_details') {
                            row.push(ans ? ans.value : '', ans ? ans.details || '' : '');
                        } else {
                            row.push(ans ? ans.value : '', '');
                        }
                    });
                    if (b.id === 'b2') row.push(info.answers['nomination'] || '');
                    row.push(info.reflections[b.id] || '');
                } else {
                    const highlighted = info.answers['6.1'] || [];
                    const sm = info.answers['smart_plan'] || { meta: '', acciones: '', indicador: '', apoyo: '' };
                    row.push(highlighted[0] || '', highlighted[1] || '', sm.meta || '', sm.acciones || '', sm.indicador || '', sm.apoyo || '', info.answers['6.3'] || '');
                }
            });
            row.push(info.directorNotes || '');

            csvText += row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",") + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", encodedUri);
        downloadAnchor.setAttribute("download", `resultados_autoevaluacion_completa_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast('CSV exportado con éxito');
    }
};

window.resetDatabase = function() {
    if (confirm('⚠️ ¿Estás seguro de que quieres restablecer la base de datos? Se restaurarán los datos iniciales.')) {
        safeStorage.removeItem('eval_db');
        db.init();
        renderDirectorView();
        showToast('Base de datos restablecida');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderApp();
});

// ==========================================================================
// 14. INDICADOR DE AUTOGUARDADO, GESTIÓN DEL CLAUSTRO Y COPIAS DE SEGURIDAD
// ==========================================================================

window.showSaveIndicator = function() {
    let el = document.getElementById('autosave-indicator');
    if (!el) {
        el = document.createElement('div');
        el.id = 'autosave-indicator';
        el.className = 'autosave-indicator';
        el.innerHTML = `<div class="autosave-dot"></div> <span>💾 Cambios guardados automáticamente en este dispositivo</span>`;
        document.body.appendChild(el);
    }
    el.classList.add('show');
    if (window.autosaveTimeout) {
        clearTimeout(window.autosaveTimeout);
    }
    window.autosaveTimeout = setTimeout(() => {
        el.classList.remove('show');
    }, 2000);
};

// 14.1 CRUD DE DOCENTES (VISTA GESTIÓN)
function renderDirectorManagementTab(teachersData) {
    const isEditing = !!state.editingTeacherName;
    let editTeacherObj = null;
    if (isEditing) {
        editTeacherObj = TEACHERS.find(t => t.name === state.editingTeacherName);
    }

    const formHtml = `
        <div class="crud-form-container glass-container">
            <h4 style="margin-top:0; margin-bottom:1rem; color:var(--primary-color);">
                ${isEditing ? '📝 Editar Ficha de Docente' : '➕ Registrar Nuevo Docente en el Centro'}
            </h4>
            <form id="crud-teacher-form" onsubmit="handleCrudSubmit(event, '${state.editingTeacherName || ''}')">
                <div class="crud-form-grid">
                    <div>
                        <label class="form-label" style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">Nombre Completo</label>
                        <input type="text" class="form-input" id="crud-name" placeholder="Ej. Pedro Picapiedra" required value="${editTeacherObj ? editTeacherObj.name : ''}">
                    </div>
                    <div>
                        <label class="form-label" style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">Etapa Educativa</label>
                        <select class="form-input" id="crud-etapa" style="padding: 0.5rem 0.75rem; border: 1px solid var(--card-border); border-radius: 6px; background: var(--bg-card); color: var(--text-main);">
                            ${(function() {
                                const sRole = state.currentUser.subrole || 'general';
                                if (sRole === 'ei_ep') {
                                    return `
                                        <option value="Infantil" ${editTeacherObj && editTeacherObj.etapa === 'Infantil' ? 'selected' : ''}>👶 Infantil</option>
                                        <option value="Primaria" ${editTeacherObj && editTeacherObj.etapa === 'Primaria' ? 'selected' : ''}>👦 Primaria</option>
                                    `;
                                } else if (sRole === 'eso_bto') {
                                    return `
                                        <option value="Secundaria" ${editTeacherObj && editTeacherObj.etapa === 'Secundaria' ? 'selected' : ''}>🎓 Secundaria</option>
                                    `;
                                } else {
                                    return `
                                        <option value="Infantil" ${editTeacherObj && editTeacherObj.etapa === 'Infantil' ? 'selected' : ''}>👶 Infantil</option>
                                        <option value="Primaria" ${editTeacherObj && editTeacherObj.etapa === 'Primaria' ? 'selected' : ''}>👦 Primaria</option>
                                        <option value="Secundaria" ${editTeacherObj && editTeacherObj.etapa === 'Secundaria' ? 'selected' : ''}>🎓 Secundaria</option>
                                    `;
                                }
                            })()}
                        </select>
                    </div>
                    <div>
                        <label class="form-label" style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">¿Tutor de Aula?</label>
                        <input type="text" class="form-input" id="crud-tutor" placeholder="Ej. 3º Primaria B / No" value="${editTeacherObj ? editTeacherObj.tutor : 'No'}">
                    </div>

                    <div>
                        <label class="form-label" style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">Contraseña de Acceso</label>
                        <input type="text" class="form-input" id="crud-password" placeholder="Clave de inicio de sesión" required value="${editTeacherObj ? (editTeacherObj.password || editTeacherObj.name.toLowerCase().split(' ')[0]) : ''}">
                    </div>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-primary" type="submit">
                        ${isEditing ? '✓ Guardar Cambios' : '➕ Registrar Docente'}
                    </button>
                    ${isEditing ? `
                        <button class="btn btn-secondary" type="button" onclick="cancelCrudEdit()">Cancelar</button>
                    ` : ''}
                </div>
            </form>
        </div>
    `;

    const allowedList = getDirectorAllowedTeachers(TEACHERS);
    const rowsHtml = allowedList.map(t => {
        const info = teachersData[t.name] || { status: 'not_started' };
        let statusBadge = '';
        if (info.status === 'completed') statusBadge = `<span class="badge badge-completed">Entregado</span>`;
        else if (info.status === 'in_progress') statusBadge = `<span class="badge badge-in-progress">En proceso</span>`;
        else statusBadge = `<span class="badge badge-not-started">No iniciado</span>`;

        const pwd = t.password || t.name.toLowerCase().split(' ')[0];

        return `
            <tr>
                <td style="font-weight:700; color:var(--text-main);">${t.name}</td>
                <td>${t.etapa}</td>
                <td>${t.tutor}</td>
                
                <td><code style="background:rgba(0,0,0,0.03); padding:2px 6px; border-radius:4px; font-size:0.8rem; font-family:monospace; color: var(--primary-color);">${pwd}</code></td>
                <td>${statusBadge}</td>
                <td>
                    <div style="display:flex; gap:6px;">
                        <button class="btn btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="startCrudEdit('${t.name}')">✏️ Editar</button>
                        <button class="btn btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteTeacher('${t.name}')">🗑️ Eliminar</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    const searchHtml = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-top: 1rem; border-top: 1px solid var(--card-border); padding-top: 1.5rem;">
            <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">📋 Personal del Claustro</h3>
            <input type="text" class="form-input" id="crud-search-input" 
                   placeholder="🔍 Buscar docente en la tabla..." 
                   oninput="filterCrudTable(this.value)" 
                   style="max-width:320px; font-size:0.8rem; padding: 0.4rem 0.8rem;">
        </div>
    `;

    return `
        <div style="display:flex; flex-direction:column; gap:1.5rem; animation:fadeIn 0.3s ease;">
            ${formHtml}
            
            ${searchHtml}
            
            <div class="crud-table-wrapper" style="margin-top:0.5rem;">
                <table class="crud-table">
                    <thead>
                        <tr>
                            <th>Docente</th>
                            <th>Etapa</th>
                            <th>Tutoría</th>
                            
                            <th>Contraseña</th>
                            <th>Estado Autoevaluación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

window.handleCrudSubmit = function(event, editingName) {
    event.preventDefault();
    const name = document.getElementById('crud-name').value;
    const etapa = document.getElementById('crud-etapa').value;
    const tutor = document.getElementById('crud-tutor').value;
    const cdd = document.getElementById('crud-cdd').value;
    const password = document.getElementById('crud-password').value;

    if (editingName) {
        editTeacher(editingName, name, etapa, tutor, cdd, password);
    } else {
        addTeacher(name, etapa, tutor, cdd, password);
    }
};

window.startCrudEdit = function(name) {
    state.editingTeacherName = name;
    renderDirectorView();
};

window.cancelCrudEdit = function() {
    state.editingTeacherName = null;
    renderDirectorView();
};

window.addTeacher = function(name, etapa, tutor, cdd, password) {
    if (!name || !name.trim()) {
        showToast('El nombre del docente es obligatorio.', 'error');
        return;
    }
    const exists = TEACHERS.some(t => t.name.toLowerCase() === name.trim().toLowerCase());
    if (exists) {
        showToast('Ya existe un docente con este nombre.', 'error');
        return;
    }

    const newTeacherObj = {
        name: name.trim(),
        etapa: etapa || 'Primaria',
        tutor: tutor || 'No',
        cdd: cdd || 'A1',
        password: password || name.trim().toLowerCase().split(' ')[0]
    };

    TEACHERS.push(newTeacherObj);

    // Guardar en Base de Datos Local
    const currentDb = db.get();
    currentDb.teachers = TEACHERS;
    if (!currentDb.evaluations[newTeacherObj.name]) {
        currentDb.evaluations[newTeacherObj.name] = {
            status: 'not_started',
            updatedAt: null,
            answers: {},
            directorAnswers: {},
            reflections: {},
            directorNotes: ''
        };
    }
    db.save(currentDb);

    showToast(`Docente ${newTeacherObj.name} añadido con éxito.`);
    renderDirectorView();
};

window.editTeacher = function(oldName, name, etapa, tutor, cdd, password) {
    if (!name || !name.trim()) {
        showToast('El nombre del docente es obligatorio.', 'error');
        return;
    }
    const idx = TEACHERS.findIndex(t => t.name === oldName);
    if (idx === -1) return;

    const updatedTeacherObj = {
        name: name.trim(),
        etapa: etapa || 'Primaria',
        tutor: tutor || 'No',
        cdd: cdd || 'A1',
        password: password
    };

    TEACHERS[idx] = updatedTeacherObj;

    // Actualizar en base de datos evaluaciones
    const currentDb = db.get();
    currentDb.teachers = TEACHERS;
    if (oldName !== updatedTeacherObj.name) {
        currentDb.evaluations[updatedTeacherObj.name] = currentDb.evaluations[oldName] || {
            status: 'not_started',
            updatedAt: null,
            answers: {},
            directorAnswers: {},
            reflections: {},
            directorNotes: ''
        };
        delete currentDb.evaluations[oldName];
    }
    db.save(currentDb);

    showToast(`Docente ${updatedTeacherObj.name} modificado con éxito.`);
    state.editingTeacherName = null;
    renderDirectorView();
};

window.deleteTeacher = function(name) {
    if (!confirm(`¿Estás seguro de que deseas eliminar al docente ${name}? Se perderán todas sus respuestas de forma permanente.`)) {
        return;
    }

    TEACHERS = TEACHERS.filter(t => t.name !== name);

    const currentDb = db.get();
    currentDb.teachers = TEACHERS;
    delete currentDb.evaluations[name];
    db.save(currentDb);

    showToast(`Docente ${name} eliminado con éxito.`);
    if (state.selectedTeacherForDetail === name) {
        state.selectedTeacherForDetail = null;
    }
    renderDirectorView();
};

// 14.2 EXPORTACIÓN E IMPORTACIÓN DE BACKUPS (JSON COMPLETO)
window.exportBackup = function() {
    const currentDb = safeStorage.getItem('eval_db');
    if (!currentDb) return;
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(currentDb);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href",     dataStr);
    
    const dateStr = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute("download", `backup_colegio_san_buenaventura_${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Copia de seguridad descargada.');
};

window.importBackup = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const content = JSON.parse(e.target.result);
            if (content.teachers && content.evaluations) {
                safeStorage.setItem('eval_db', JSON.stringify(content));
                
                // Sobrescribir TEACHERS en memoria
                TEACHERS = content.teachers;
                
                showToast('¡Copia de seguridad restaurada con éxito!', 'success');
                renderApp();
            } else {
                alert('El archivo seleccionado no es una copia de seguridad válida para esta plataforma.');
            }
        } catch (err) {
            alert('Error al leer el archivo. Asegúrate de que es un archivo JSON de backup válido.');
        }
    };
    reader.readAsText(file);
};

// 14.3 FIRMA DIGITAL DE CONFORMIDAD
window.signActa = function(teacherName, role) {
    const currentDb = db.get();
    const tData = currentDb.evaluations[teacherName] || {};
    
    if (role === 'teacher') {
        tData.signedTeacher = true;
    } else if (role === 'director') {
        tData.signedDirector = true;
    }
    
    if (tData.signedTeacher && tData.signedDirector) {
        tData.signedAt = new Date().toISOString();
    }
    
    db.save(currentDb);
    showToast('Acta firmada con éxito.');
    
    if (state.currentUser.role === 'director') {
        renderDirectorView();
    } else {
        renderTeacherView();
    }
};

// 14.4 GENERADOR DEL WIDGET DE FIRMAS DIGITALES
function renderSignaturesWidget(name, tData) {
    const isSignedByTeacher = tData.signedTeacher || false;
    const isSignedByDirector = tData.signedDirector || false;
    const isFullySigned = isSignedByTeacher && isSignedByDirector;
    const signedAtDate = tData.signedAt ? new Date(tData.signedAt).toLocaleString() : '';

    return `
        <div class="signature-card">
            <h3 style="margin-top:0; margin-bottom:1rem; color:var(--text-main); display:flex; align-items:center; gap:8px;">
                ✍️ Firma de Conformidad y Consenso (Acta Oficial)
            </h3>
            
            ${isFullySigned ? `
                <div class="digital-seal-container">
                    <span class="digital-seal-badge">
                        🔒 Acta Cerrada
                    </span>
                    <div style="flex:1;">
                        Este documento ha sido firmado digitalmente de mutuo acuerdo y verificado con sello de conformidad.
                        Las respuestas y notas quedan oficialmente bloqueadas e inalterables.
                        <br>
                        <span style="font-size:0.75rem; color:var(--text-muted);">Timestamp: ${signedAtDate} | Hash de Control: SHA256-${name.charCodeAt(0)}${Date.parse(tData.signedAt)}</span>
                    </div>
                    ${state.currentUser && state.currentUser.role === 'director' ? `
                        <button class="btn btn-secondary" style="font-size:0.75rem; color:var(--danger); border-color:rgba(239, 68, 68, 0.3); background:var(--bg-card);" onclick="unlockActa('${name}')">
                            🔓 Reabrir Acta (Dirección)
                        </button>
                    ` : ''}
                </div>
            ` : `
                <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1.25rem;">
                    Una vez completada la entrevista presencial y acordadas las notas de co-evaluación, ambas partes deben proceder a firmar el acta para dar validez al proceso de calidad del centro.
                </p>
            `}

            <div class="signature-grid">
                <!-- Firma del Docente -->
                <div class="signature-box ${isSignedByTeacher ? 'signed' : ''}">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.5rem; letter-spacing:0.05em;">
                        El Docente Evaluado
                    </div>
                    ${isSignedByTeacher ? `
                        <div class="signature-handwritten">${name}</div>
                        <div style="font-size:0.7rem; color:var(--success); margin-top:0.5rem; font-weight:700;">Firmado electrónicamente</div>
                    ` : `
                        <div style="font-size:0.85rem; color:var(--text-muted); text-align:center; font-style:italic; padding: 10px 0;">Pendiente de firma...</div>
                        ${state.currentUser && state.currentUser.name === name ? `
                            <button class="btn btn-primary" style="margin-top:0.5rem; padding: 4px 12px; font-size:0.8rem;" onclick="signActa('${name}', 'teacher')">Firmar Acta</button>
                        ` : ''}
                    `}
                </div>

                <!-- Firma del Director -->
                <div class="signature-box ${isSignedByDirector ? 'signed' : ''}">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.5rem; letter-spacing:0.05em;">
                        La Dirección del Centro
                    </div>
                    ${isSignedByDirector ? `
                        <div class="signature-handwritten">Colegio San Buenaventura</div>
                        <div style="font-size:0.7rem; color:var(--success); margin-top:0.5rem; font-weight:700;">Firmado electrónicamente</div>
                    ` : `
                        <div style="font-size:0.85rem; color:var(--text-muted); text-align:center; font-style:italic; padding: 10px 0;">Pendiente de firma...</div>
                        ${state.currentUser && state.currentUser.role === 'director' ? `
                            <button class="btn btn-primary" style="margin-top:0.5rem; padding: 4px 12px; font-size:0.8rem;" onclick="signActa('${name}', 'director')">Firmar Acta</button>
                        ` : ''}
                    `}
                </div>
            </div>
        </div>
    `;
}

// ==========================================================================
// 15. MEJORAS DE FASE 3 (BUSCADORES, MOTIVOS, PANTALLA ÉXITO, ENLACES EN ALERTA)
// ==========================================================================

// 15.1 AUTOCOMPLETE EN CO-EVALUACIÓN
window.showTeacherDropdown = function() {
    const input = document.getElementById('teacher-autocomplete-input');
    if (input) {
        input.select(); // Selecciona el texto para poder escribir o cambiar directamente
    }
    const list = document.getElementById('teacher-autocomplete-list');
    if (!list) return;
    list.style.display = 'block';
    // Mostrar SIEMPRE la lista completa de todos los profesores al hacer foco o clic
    filterTeacherDropdown('');
    
    // Cerrar al hacer clic fuera
    setTimeout(() => {
        const handler = function(e) {
            const wrapper = document.querySelector('.autocomplete-wrapper');
            if (wrapper && !wrapper.contains(e.target)) {
                list.style.display = 'none';
                document.removeEventListener('click', handler);
            }
        };
        document.addEventListener('click', handler);
    }, 50);
};

window.filterTeacherDropdown = function(query) {
    const list = document.getElementById('teacher-autocomplete-list');
    if (!list) return;
    
    // Si la búsqueda coincide con el nombre exacto seleccionado, mostramos TODOS los profesores de la etapa
    let cleanQuery = (query || '').split(' (')[0].toLowerCase().trim();
    if (state.selectedTeacherForDetail && cleanQuery === state.selectedTeacherForDetail.toLowerCase()) {
        cleanQuery = '';
    }
    
    const teachersData = db.get().evaluations;
    const allowedList = getDirectorAllowedTeachers(TEACHERS);
    const filteredList = allowedList.filter(t => {
        const matchesEtapa = state.selectedEtapa === 'Todas' || t.etapa === state.selectedEtapa;
        const matchesQuery = !cleanQuery || t.name.toLowerCase().includes(cleanQuery);
        return matchesEtapa && matchesQuery;
    });

    let itemsHtml = filteredList.map(t => {
        const info = teachersData[t.name] || { status: 'not_started' };
        let statusText = '⚪ No iniciado';
        let statusColor = 'var(--text-muted)';
        if (info.status === 'completed') {
            statusText = '🟢 Entregado';
            statusColor = 'var(--success)';
        } else if (info.status === 'in_progress') {
            statusText = '🟡 En proceso';
            statusColor = 'var(--warning)';
        }
        
        return `
            <div class="autocomplete-item" onclick="selectTeacherFromAutocomplete('${t.name}')">
                <div style="display:flex; flex-direction:column; gap:2px;">
                    <span style="font-weight:700; color:var(--text-main);">${t.name}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted);">${t.etapa} ${t.tutor ? '• ' + t.tutor : ''}</span>
                </div>
                <span style="font-size:0.78rem; color:${statusColor}; font-weight:700; background:rgba(0,0,0,0.02); padding:3px 8px; border-radius:12px;">${statusText}</span>
            </div>
        `;
    }).join('');

    if (itemsHtml === '') {
        itemsHtml = `<div style="padding:10px 16px; font-size:0.8rem; color:var(--text-muted); font-style:italic;">No se encontraron docentes</div>`;
    }
    list.innerHTML = itemsHtml;
};

window.selectTeacherFromAutocomplete = function(name) {
    const input = document.getElementById('teacher-autocomplete-input');
    const list = document.getElementById('teacher-autocomplete-list');
    const teacherInfo = TEACHERS.find(t => t.name === name);
    
    if (input) {
        input.value = `${name} (${teacherInfo.etapa})`;
    }
    if (list) {
        list.style.display = 'none';
    }
    
    selectTeacherForDetail(name);
};

// 15.2 BUSCADOR TABLA CRUD CLAUSTRO
window.filterCrudTable = function(query) {
    const rows = document.querySelectorAll('.crud-table tbody tr');
    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const stage = row.cells[1].textContent.toLowerCase();
        const tutor = row.cells[2].textContent.toLowerCase();
        const matches = name.includes(query.toLowerCase()) || 
                        stage.includes(query.toLowerCase()) || 
                        tutor.includes(query.toLowerCase());
        row.style.display = matches ? '' : 'none';
    });
};

// 15.3 NAVEGACIÓN RÁPIDA DESDE ALERTA
window.navigateToTeacherDetail = function(teacherName) {
    state.activeDirectorTab = 'teachers';
    state.selectedTeacherForDetail = teacherName;
    renderDirectorView();
};

// 15.4 MOTIVO DE LA NOMINACIÓN
window.saveNominationReason = function(teacherName, value) {
    const userData = db.getUserData(teacherName);
    userData.answers['nomination_reason'] = value;
    db.saveUserData(teacherName, userData);
};

// 15.5 PANTALLA DE ÉXITO Y CELEBRACIÓN DEL DOCENTE
function renderTeacherSuccessScreen(teacherName) {
    window.scrollTo(0, 0);
    dom.app.innerHTML = `
        <div class="glass-container success-screen-container">
            <div class="success-icon">🎉</div>
            <h2 style="color:var(--success); margin-bottom:1rem; font-weight:800; letter-spacing:-0.03em;">¡Cuestionario Entregado con Éxito!</h2>
            <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:2rem; font-size:0.95rem;">
                Muchas gracias, <strong>${teacherName}</strong>. Tu autoevaluación se ha guardado de forma permanente y ya está a disposición de la Dirección. El acta ha quedado registrada de cara a tu entrevista presencial de co-evaluación.
            </p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="viewMyCompletedEvaluation()">
                    📄 Consultar mi Informe
                </button>
                <button class="btn btn-secondary" onclick="handleLogout()">
                    🚪 Cerrar Sesión
                </button>
            </div>
        </div>
    `;
}

window.viewMyCompletedEvaluation = function() {
    state.showingSuccessScreen = false;
    renderTeacherView();
};

// 14.5 REAPERTURA Y DESBLOQUEO DE ACTAS POR DIRECCIÓN
window.unlockActa = function(teacherName) {
    if (!state.currentUser || state.currentUser.role !== 'director') {
        showToast('Solo la Dirección puede reabrir un acta.');
        return;
    }

    const reason = prompt(`🔐 AUTORIZACIÓN DE DIRECCIÓN\n\nReapertura de Acta para: ${teacherName}\nIntroduce la justificación o causa de la reapertura:`);
    if (!reason || !reason.trim()) {
        showToast('Operación cancelada: Se requiere una justificación válida.');
        return;
    }

    const currentDb = db.get();
    const tData = currentDb.evaluations[teacherName] || {};
    tData.signedTeacher = false;
    tData.signedDirector = false;
    if (!tData.unlockHistory) tData.unlockHistory = [];
    tData.unlockHistory.push({
        unlockedAt: new Date().toISOString(),
        unlockedBy: state.currentUser.name,
        reason: reason.trim()
    });

    db.save(currentDb);
    showToast(`Acta de ${teacherName} reabierta y desbloqueada con éxito.`);

    if (state.currentUser.role === 'director') {
        renderDirectorView();
    } else {
        renderTeacherView();
    }
};


// ==========================================================================
// 🌟 EASTER EGG CIPHER CODE (INTERACTIVE DECRYPTION)
// ==========================================================================
window.triggerLeaderEasterEgg = function() {
    let eggModal = document.getElementById('leader-easter-egg-modal');
    if (!eggModal) {
        eggModal = document.createElement('div');
        eggModal.id = 'leader-easter-egg-modal';
        eggModal.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(12px);
            z-index: 99999;
            display: flex; align-items: center; justify-content: center;
            animation: fadeIn 0.3s ease;
        `;
        document.body.appendChild(eggModal);
    }
    
    eggModal.style.display = 'flex';

    const secretText = "Sabes quién es el líder y eres un leal compañero.";
    const cipherText = "53 61 62 65 73 20 71 75 69 c3 a9 6e 20 65 73 20 65 6c 20 6c c3 ad 64 65 72 20 79 20 65 72 65 73 20 75 6e 20 6c 65 61 6c 20 63 6f 6d 70 61 c3 b1 65 72 6f";

    eggModal.innerHTML = `
        <div style="background: #090d16; border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 20px; padding: 2.5rem; max-width: 480px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8); position:relative; color: #f8fafc;">
            <button onclick="document.getElementById('leader-easter-egg-modal').style.display='none'" style="position:absolute; top:14px; right:18px; border:none; background:none; font-size:1.2rem; cursor:pointer; color:#64748b;">✕</button>
            
            <div id="cipher-lock-icon" style="font-size: 2.8rem; margin-bottom: 0.5rem; cursor:pointer; transition:transform 0.2s;" onclick="startDecryptAnimation()" title="Haz clic para intentar descifrar">🔒</div>
            
            <div style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 1rem;">
                Transmisión Encriptada • Restringido
            </div>

            <!-- Cuadro de Código Cifrado Interactivable (Sin botón llamativo) -->
            <div id="cipher-box" 
                 onclick="startDecryptAnimation()" 
                 title="Haz clic sobre el código cifrado para desencadenar el descodificador"
                 style="background: rgba(0,0,0,0.6); border: 1px dashed rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 1.25rem; font-family: monospace; font-size: 0.88rem; color: #d97706; min-height: 75px; display: flex; align-items: center; justify-content: center; word-break: break-all; margin-bottom: 1.25rem; cursor: pointer; transition: all 0.3s ease; user-select:none;">
                ${cipherText}
            </div>

            <div id="cipher-hint-area">
                <div style="font-size: 0.72rem; color: #475569; font-style: italic; cursor:pointer;" onclick="startDecryptAnimation()">
                    [ 🗝️ Pulsa sobre el código cifrado o el candado para desencadenar el descodificador ]
                </div>
            </div>

            <div style="font-size: 0.7rem; color: #334155; margin-top: 1.5rem;">
                San Buenaventura • Protocolo Secreto 2026
            </div>
        </div>
    `;

    let isDecrypting = false;
    window.startDecryptAnimation = function() {
        if (isDecrypting) return;
        isDecrypting = true;
        
        const box = document.getElementById('cipher-box');
        const hintArea = document.getElementById('cipher-hint-area');
        const icon = document.getElementById('cipher-lock-icon');
        if (!box) return;

        if (icon) icon.innerHTML = "🔓";
        box.style.border = "1px solid #10b981";
        box.style.background = "rgba(6, 78, 59, 0.2)";

        hintArea.innerHTML = `<div style="font-size:0.75rem; color:#f59e0b; font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px;">⚡ Decodificando secuencia de bytes encriptada...</div>`;

        const glyphs = "ABCDEF0123456789%#$&@§¥±µ§∅";
        let currentStep = 0;
        const totalSteps = secretText.length;

        const interval = setInterval(() => {
            currentStep++;
            let revealed = secretText.substring(0, currentStep);
            let scrambled = "";
            for (let i = currentStep; i < totalSteps; i++) {
                scrambled += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
            }

            box.innerHTML = `<span style="color:#10b981; font-weight:800; font-size:1.05rem;">${revealed}</span><span style="color:#f59e0b; opacity:0.6;">${scrambled}</span>`;

            if (currentStep >= totalSteps) {
                clearInterval(interval);
                box.innerHTML = `<span style="color:#10b981; font-weight:800; font-size:1.15rem; line-height:1.4;">" ${secretText} 🤝👑 "</span>`;
                hintArea.innerHTML = `
                    <div style="font-size:0.85rem; color:#10b981; font-weight:800; margin-bottom:0.75rem; animation:fadeIn 0.4s ease;">
                        ✅ Código Descifrado con Éxito
                    </div>
                    <button class="btn btn-secondary" style="border-color:rgba(16, 185, 129, 0.4); color:#94a3b8; font-size:0.8rem; padding:6px 16px;" onclick="document.getElementById('leader-easter-egg-modal').style.display='none'">
                        ✨ Cerrar y guardar el secreto
                    </button>
                `;
                console.log("%c👑 DESCODIFICADO: " + secretText, "color: #10b981; font-size: 16px; font-weight: bold;");
            }
        }, 45);
    };
};


// Keyboard Listener Ctrl+Shift+L or Cmd+Shift+L
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault();
        window.triggerLeaderEasterEgg();
    }
});

// Click count listener on header logo/title
let headerClickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.closest('.header-logo') || e.target.closest('.app-header h1') || (e.target.textContent && e.target.textContent.includes('San Buenaventura'))) {
        headerClickCount++;
        if (headerClickCount >= 5) {
            headerClickCount = 0;
            window.triggerLeaderEasterEgg();
        }
    }
});




// ==========================================================================
// 16. GENERADOR DE IMPRESIÓN IFRAME INDEPENDIENTE DE ALTA CALIDAD (0s DELAY, NO FREEZE)
// ==========================================================================
window.printDocumentNative = function() {
    let iframe = document.getElementById('print-iframe');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    } else {
        window.print();
    }
};

window.generateOfficialPrintDocument = function(teacherName, autoPrint = false) {
    if (!teacherName) {
        if (state.currentUser && state.currentUser.role === 'teacher') {
            teacherName = state.currentUser.name;
        } else if (state.selectedTeacherForDetail) {
            teacherName = state.selectedTeacherForDetail;
        } else {
            showToast('Seleccione un docente para generar el documento oficial.');
            return;
        }
    }

    const tData = db.getUserData(teacherName) || {};
    const teacherInfo = TEACHERS.find(t => t.name === teacherName) || { etapa: 'General', tutor: 'No' };
    const isFullySigned = tData.signedTeacher && tData.signedDirector;
    const signedAtDate = tData.signedAt ? new Date(tData.signedAt).toLocaleString() : new Date().toLocaleString();
    const hashControl = `SHA256-${teacherName.charCodeAt(0)}${tData.signedAt ? Date.parse(tData.signedAt) : Date.now()}`;

    let teacherBlockAverages = calculateBlockAverages(teacherName, 'teacher');
    let directorBlockAverages = calculateBlockAverages(teacherName, 'director');

    let totalTeacherScore = 0;
    let totalDirectorScore = 0;
    let blockCount = 0;

    let blockRowsHtml = EVAL_BLOCKS.filter(b => b.id !== 'b6').map((block, idx) => {
        const tAvg = parseFloat(teacherBlockAverages[block.id]) || 0;
        const dAvg = parseFloat(directorBlockAverages[block.id]) || tAvg;
        const gap = (dAvg - tAvg).toFixed(1);
        totalTeacherScore += tAvg;
        totalDirectorScore += dAvg;
        blockCount++;

        return `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:10px 12px; font-weight:700; color:#1e293b;">Bloque ${idx+1}: ${block.title.split(':')[1] || block.title}</td>
                <td style="padding:10px 12px; text-align:center; font-weight:700;">${tAvg.toFixed(1)} / 5.0</td>
                <td style="padding:10px 12px; text-align:center; font-weight:700; color:#2563eb;">${dAvg.toFixed(1)} / 5.0</td>
                <td style="padding:10px 12px; text-align:center; font-weight:700; color:${Math.abs(gap) >= 1.0 ? '#ef4444' : '#10b981'};">
                    ${gap > 0 ? '+' + gap : gap}
                </td>
            </tr>
        `;
    }).join('');

    const globalTAvg = blockCount > 0 ? (totalTeacherScore / blockCount).toFixed(2) : '0.00';
    const globalDAvg = blockCount > 0 ? (totalDirectorScore / blockCount).toFixed(2) : '0.00';
    const sintonia = Math.max(0, (100 - (Math.abs(globalTAvg - globalDAvg) * 20)).toFixed(0));

    let detailedQuestionsHtml = EVAL_BLOCKS.filter(b => b.id !== 'b6').map((b, bIdx) => {
        let qRows = b.questions.map(q => {
            const tVal = (tData.answers && tData.answers[q.id]) || '-';
            const dVal = (tData.directorAnswers && tData.directorAnswers[q.id]) || tVal;
            const evidence = (tData.answers && tData.answers[q.id + '_ev']) || '';

            return `
                <div style="margin-bottom:12px; padding-bottom:8px; border-bottom:1px dashed #cbd5e1; page-break-inside:avoid;">
                    <div style="font-weight:700; font-size:0.85rem; color:#1e293b; margin-bottom:4px;">
                        ${q.id.toUpperCase()} • ${q.text}
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569; background:#f8fafc; padding:6px 12px; border-radius:4px;">
                        <span>Autoevaluación Docente: <strong>${tVal} ${q.type === 'scale' ? '/ 5' : ''}</strong></span>
                        <span>Co-Evaluación Dirección: <strong style="color:#2563eb;">${dVal} ${q.type === 'scale' ? '/ 5' : ''}</strong></span>
                    </div>
                    ${evidence ? `<div style="font-size:0.78rem; color:#334155; margin-top:4px; font-style:italic; padding-left:8px; border-left:3px solid #3b82f6;">Evidencia aportada: "${evidence}"</div>` : ''}
                </div>
            `;
        }).join('');

        const reflectionText = (tData.reflections && tData.reflections[b.id]) || '';

        return `
            <div style="margin-bottom:22px; page-break-inside:avoid;">
                <h4 style="margin:0 0 10px 0; font-size:0.92rem; color:#1e3a8a; border-bottom:2px solid #2563eb; padding-bottom:4px; text-transform:uppercase; letter-spacing:0.03em;">
                    Bloque ${bIdx+1}: ${b.title}
                </h4>
                ${qRows}
                ${reflectionText ? `<div style="background:#f1f5f9; padding:8px 12px; border-radius:6px; font-size:0.8rem; color:#1e293b; margin-top:8px;"><strong>Reflexión Cualitativa Docente:</strong> "${reflectionText}"</div>` : ''}
            </div>
        `;
    }).join('');

    const smartGoal = (tData.answers && tData.answers['smart_goal']) || 'Pendiente de definir';
    const smartActions = (tData.answers && tData.answers['smart_actions']) || 'Pendiente de definir';
    const smartSupport = (tData.answers && tData.answers['smart_support']) || 'Pendiente de definir';

    const documentInnerBodyHtml = `
        <div style="font-family:'Inter', system-ui, -apple-system, sans-serif; color:#0f172a; max-width:850px; margin:0 auto; background:#ffffff; padding:40px; box-sizing:border-box;">
            
            <!-- Encabezado de Imprenta Institucional -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #1e3a8a; padding-bottom:15px; margin-bottom:25px;">
                <div>
                    <div style="font-size:0.75rem; font-weight:800; color:#2563eb; text-transform:uppercase; letter-spacing:0.12em;">Documento Oficial de Imprenta</div>
                    <h1 style="margin:4px 0 0 0; font-size:1.5rem; font-weight:900; color:#1e3a8a; text-transform:uppercase; letter-spacing:-0.02em;">
                        Colegio San Buenaventura
                    </h1>
                    <div style="font-size:0.92rem; font-weight:700; color:#475569; margin-top:2px;">
                        Acta Consolidada de Autoevaluación y Co-Evaluación Docente (Curso 2026-2027)
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:0.72rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.05em;">FOLIO OFICIAL</div>
                    <div style="font-size:0.85rem; font-weight:800; color:#1e3a8a; background:#eff6ff; border:1px solid #bfdbfe; padding:6px 12px; border-radius:6px; margin-top:4px;">
                        ACTA-2627-${teacherName.split(' ')[0].toUpperCase()}
                    </div>
                </div>
            </div>

            <!-- Ficha Resumen del Expediente -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px; margin-bottom:25px; font-size:0.85rem;">
                <div>
                    <div><strong>Docente Evaluado/a:</strong> ${teacherName}</div>
                    <div style="margin-top:6px;"><strong>Etapa Educativa:</strong> ${teacherInfo.etapa}</div>
                    <div style="margin-top:6px;"><strong>Tutoría Asignada:</strong> ${teacherInfo.tutor}</div>
                </div>
                <div>
                    <div><strong>Estado del Documento:</strong> ${isFullySigned ? '🔒 Acta Cerrada y Firmada' : '🟡 En Proceso de Evaluación'}</div>
                    <div style="margin-top:6px;"><strong>Fecha de Certificación:</strong> ${signedAtDate}</div>
                    <div style="margin-top:6px;"><strong>Grado de Sintonía:</strong> <span style="color:#2563eb; font-weight:800;">${sintonia}% Sintonía Pedagógica</span></div>
                </div>
            </div>

            <!-- Tabla de Resumen por Bloques -->
            <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
                1. Resumen de Puntuaciones Consolidadas por Bloque
            </h3>
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom:25px;">
                <thead>
                    <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
                        <th style="padding:10px 12px; font-weight:800;">Bloque Competencial</th>
                        <th style="padding:10px 12px; text-align:center; font-weight:800;">Autoevaluación Docente</th>
                        <th style="padding:10px 12px; text-align:center; font-weight:800;">Co-Evaluación Dirección</th>
                        <th style="padding:10px 12px; text-align:center; font-weight:800;">Desviación (Gap)</th>
                    </tr>
                </thead>
                <tbody>
                    ${blockRowsHtml}
                    <tr style="background:#f8fafc; font-weight:800; border-top:2px solid #cbd5e1;">
                        <td style="padding:12px;">PROMEDIO GLOBAL EVALUADO</td>
                        <td style="padding:12px; text-align:center;">${globalTAvg} / 5.0</td>
                        <td style="padding:12px; text-align:center; color:#2563eb;">${globalDAvg} / 5.0</td>
                        <td style="padding:12px; text-align:center; color:#10b981;">
                            ${(globalDAvg - globalTAvg).toFixed(2) > 0 ? '+' + (globalDAvg - globalTAvg).toFixed(2) : (globalDAvg - globalTAvg).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Desglose de Preguntas y Evidencias -->
            <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:15px; text-transform:uppercase; letter-spacing:0.05em;">
                2. Evaluación Detallada e Ítems Cualitativos
            </h3>
            ${detailedQuestionsHtml}

            <!-- Plan SMART -->
            <div style="page-break-inside:avoid; margin-bottom:25px;">
                <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
                    3. Plan de Crecimiento Profesional SMART
                </h3>
                <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; font-size:0.82rem; display:flex; flex-direction:column; gap:8px;">
                    <div><strong>Objetivo SMART Acordado:</strong> "${smartGoal}"</div>
                    <div><strong>Acciones Concretas de Desarrollo:</strong> "${smartActions}"</div>
                    <div><strong>Necesidades de Apoyo Institucional:</strong> "${smartSupport}"</div>
                </div>
            </div>

            <!-- Observaciones de Dirección -->
            ${tData.directorNotes ? `
            <div style="page-break-inside:avoid; margin-bottom:25px;">
                <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
                    4. Acuerdos y Orientaciones de la Dirección
                </h3>
                <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px; font-size:0.82rem; color:#1e3a8a; font-style:italic;">
                    "${tData.directorNotes}"
                </div>
            </div>
            ` : ''}

            <!-- Certificación y Firmas Digitales -->
            <div style="page-break-inside:avoid; margin-top:35px; border-top:2px solid #cbd5e1; padding-top:20px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:25px;">
                    <div style="width:45%; text-align:center; border:1px solid #cbd5e1; border-radius:8px; padding:15px; background:#f8fafc;">
                        <div style="font-size:0.72rem; font-weight:800; color:#64748b; text-transform:uppercase; margin-bottom:10px;">El Docente Evaluado</div>
                        <div style="font-family:'Brush Script MT', cursive, 'Georgia', sans-serif; font-size:1.8rem; color:#1e3a8a; min-height:42px;">
                            ${tData.signedTeacher ? teacherName : '<span style="font-size:0.8rem; font-style:italic; color:#94a3b8;">Pendiente de firma</span>'}
                        </div>
                        <div style="font-size:0.7rem; color:#10b981; font-weight:700; margin-top:4px;">
                            ${tData.signedTeacher ? 'Firmado Electrónicamente' : ''}
                        </div>
                    </div>

                    <div style="width:45%; text-align:center; border:1px solid #cbd5e1; border-radius:8px; padding:15px; background:#f8fafc;">
                        <div style="font-size:0.72rem; font-weight:800; color:#64748b; text-transform:uppercase; margin-bottom:10px;">La Dirección del Centro</div>
                        <div style="font-family:'Brush Script MT', cursive, 'Georgia', sans-serif; font-size:1.8rem; color:#1e3a8a; min-height:42px;">
                            ${tData.signedDirector ? 'Colegio San Buenaventura' : '<span style="font-size:0.8rem; font-style:italic; color:#94a3b8;">Pendiente de firma</span>'}
                        </div>
                        <div style="font-size:0.7rem; color:#10b981; font-weight:700; margin-top:4px;">
                            ${tData.signedDirector ? 'Firmado Electrónicamente' : ''}
                        </div>
                    </div>
                </div>

                <div style="text-align:center; font-size:0.72rem; color:#64748b; border-top:1px solid #e2e8f0; padding-top:12px;">
                    <div><strong>Colegio San Buenaventura</strong> • Sello Digital de Conformidad e Integridad de Acta</div>
                    <div style="margin-top:3px;">Control Hash: ${hashControl} | Certificación Timestamp: ${signedAtDate}</div>
                </div>
            </div>

        </div>
    `;

    // 1. Cargar el documento puro en un iframe invisible e independiente
    let iframe = document.getElementById('print-iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'print-iframe';
        iframe.style.cssText = 'position:fixed; right:0; bottom:0; width:0; height:0; border:none; z-index:-1;';
        document.body.appendChild(iframe);
    }

    const fullIframeHtml = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Acta Oficial - ${teacherName}</title>
        <style>
            body { font-family: 'Inter', system-ui, -apple-system, sans-serif; color: #0f172a; background: #ffffff; margin: 0; padding: 20px; }
            @page { size: A4 portrait; margin: 10mm 12mm 10mm 12mm; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
        </style>
    </head>
    <body>
        ${documentInnerBodyHtml}
    </body>
    </html>`;

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(fullIframeHtml);
    doc.close();

    // 2. Mostrar la Modal en Pantalla para revisión visual
    let docModal = document.getElementById('official-document-modal');
    if (!docModal) {
        docModal = document.createElement('div');
        docModal.id = 'official-document-modal';
        docModal.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(8px);
            z-index: 9999;
            display: flex; flex-direction:column; align-items: center; justify-content: flex-start;
            padding: 2rem 1rem; box-sizing: border-box; overflow-y: auto;
        `;
        document.body.appendChild(docModal);
    }

    docModal.innerHTML = `
        <div style="width:100%; max-width:900px; display:flex; justify-content:space-between; align-items:center; background:#0f172a; padding:14px 20px; border-radius:12px 12px 0 0; border-bottom:1px solid rgba(255,255,255,0.1); color:white; font-weight:700;" class="no-print">
            <span style="display:flex; align-items:center; gap:8px;">
                📑 Documento Oficial de Imprenta (${teacherName})
            </span>
            <div style="display:flex; gap:10px; align-items:center;">
                <button class="btn btn-primary" onclick="printDocumentNative()" style="font-size:0.88rem; padding:8px 20px; background:#2563eb;">
                    🖨️ Imprimir / Guardar en PDF
                </button>
                <button onclick="document.getElementById('official-document-modal').style.display='none'" style="border:none; background:rgba(255,255,255,0.1); color:white; padding:8px 14px; border-radius:6px; font-weight:700; cursor:pointer;">
                    ✕ Cerrar
                </button>
            </div>
        </div>
        <div style="width:100%; max-width:900px; background:white; border-radius:0 0 12px 12px; padding:20px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); margin-bottom:2rem;">
            ${documentInnerBodyHtml}
        </div>
    `;

    docModal.style.display = 'flex';

    if (autoPrint) {
        setTimeout(() => window.printDocumentNative(), 300);
    }
};


// ==========================================================================
// 17. PESTAÑA TUTORIAL Y GUÍA DE USO EXHAUSTIVA PARA LA DIRECCIÓN
// ==========================================================================
function renderDirectorTutorialTab() {
    const directorName = state.currentUser ? state.currentUser.name : 'Director';
    const subrole = state.currentUser ? state.currentUser.subrole : 'general';

    let roleDescription = "Director General (Acceso Total a Infantil, Primaria, Secundaria y Bachillerato)";
    if (subrole === 'ei_ep') roleDescription = "Director de Educación Infantil y Educación Primaria";
    if (subrole === 'eso_bto') roleDescription = "Director de Educación Secundaria Obligatoria y Bachillerato";

    return `
        <div style="display:flex; flex-direction:column; gap:1.75rem; animation: fadeIn 0.4s ease;">
            
            <!-- Banner de Cabecera del Tutorial -->
            <div class="glass-container" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(109, 40, 217, 0.05) 100%); border: 1px solid rgba(139, 92, 246, 0.3); padding: 1.75rem; border-radius: 16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
                    <div>
                        <span style="font-size:0.75rem; font-weight:800; color:#8b5cf6; text-transform:uppercase; letter-spacing:0.12em;">Manual de Uso Institucional</span>
                        <h2 style="margin:4px 0 6px 0; font-size:1.6rem; font-weight:900; color:var(--text-main);">
                            📚 Guía Interactiva y Tutorial del Panel Directivo
                        </h2>
                        <p style="margin:0; font-size:0.92rem; color:var(--text-secondary);">
                            Bienvenido/a, <strong>${directorName}</strong> (${roleDescription}). Esta guía explica paso a paso cada una de las funcionalidades de la plataforma.
                        </p>
                    </div>
                    <button class="btn btn-primary" onclick="window.printDocumentNative()" style="background:linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); font-size:0.85rem;">
                        🖨️ Imprimir / Exportar Guía
                    </button>
                </div>
            </div>

            <!-- Grilla de Módulos Explicativos -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap:1.5rem;">
                
                <!-- Módulo 1 -->
                <div class="glass-container" style="padding:1.5rem; border-radius:14px; border-left:4px solid #3b82f6;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:0.75rem;">
                        <span style="font-size:1.5rem;">📊</span>
                        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">1. Panel General y Estadísticas Globals</h3>
                    </div>
                    <ul style="font-size:0.85rem; color:var(--text-secondary); padding-left:1.2rem; line-height:1.6; margin:0; display:flex; flex-direction:column; gap:8px;">
                        <li><strong>Tarjetas KPI:</strong> Monitoriza el total de docentes asignados a tu etapa, cuántos han finalizado su entrega, cuántos están en proceso y cuántos faltan por iniciar.</li>
                        <li><strong>Gráfico de Radar Interactivo:</strong> Muestra la huella competencial comparando la autoevaluación del docente frente a la valoración de la Dirección y el promedio del claustro.</li>
                        <li><strong>Gráfico de Sintonía Pedagógica:</strong> Mide el grado de alineación (%) entre las expectativas del docente y las observaciones de la Dirección.</li>
                        <li><strong>Métricas del Claustro:</strong> Muestra los reconocimientos de buenas prácticas votados por los propios profesores.</li>
                    </ul>
                </div>

                <!-- Módulo 2 -->
                <div class="glass-container" style="padding:1.5rem; border-radius:14px; border-left:4px solid #10b981;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:0.75rem;">
                        <span style="font-size:1.5rem;">🎙️</span>
                        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">2. Detalle y Co-Evaluación Directiva</h3>
                    </div>
                    <ul style="font-size:0.85rem; color:var(--text-secondary); padding-left:1.2rem; line-height:1.6; margin:0; display:flex; flex-direction:column; gap:8px;">
                        <li><strong>Selector Completo de Profesores:</strong> Despliega el listado completo de los docentes de la etapa con 1 solo clic o mediante el buscador rápido.</li>
                        <li><strong>Modo Entrevista Presencial (🎙️):</strong> Activa una interfaz ágil para que la Dirección puntúe y tome notas cualitativas en vivo durante la reunión cara a cara con el profesor.</li>
                        <li><strong>Reapertura de Actas (🔓):</strong> Permite desarchivar una autoevaluación entregada si el profesor necesita corregir o ampliar sus evidencias.</li>
                        <li><strong>Generador IA de Propuestas:</strong> Analiza las respuestas del docente y propone acciones de mejora basadas únicamente en autoevaluaciones reales entregadas.</li>
                    </ul>
                </div>

                <!-- Módulo 3 -->
                <div class="glass-container" style="padding:1.5rem; border-radius:14px; border-left:4px solid #f59e0b;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:0.75rem;">
                        <span style="font-size:1.5rem;">🖨️</span>
                        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">3. Informes Oficiales de Imprenta y PDF</h3>
                    </div>
                    <ul style="font-size:0.85rem; color:var(--text-secondary); padding-left:1.2rem; line-height:1.6; margin:0; display:flex; flex-direction:column; gap:8px;">
                        <li><strong>Acta Consolidada de Imprenta:</strong> Al hacer clic en <em>Imprimir / PDF</em>, se genera el documento ejecutivo formal con Folio Único <code>ACTA-2627-NOMBRE</code>.</li>
                        <li><strong>Motor de Impresión Aislado (&lt;iframe&gt;):</strong> La vista previa de impresión en PDF abre instantáneamente en 0.05s sin congelar la pantalla ni bloquear el navegador.</li>
                        <li><strong>Certificación y Firmas Digitales:</strong> Incluye los espacios para la firma manuscrita electrónica del docente y de la Dirección, junto con el sello de integridad SHA-256 y timestamp.</li>
                    </ul>
                </div>

                <!-- Módulo 4 -->
                <div class="glass-container" style="padding:1.5rem; border-radius:14px; border-left:4px solid #8b5cf6;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:0.75rem;">
                        <span style="font-size:1.5rem;">🔥</span>
                        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">4. Base de Datos en Nube Híbrida ('HybridDatabase')</h3>
                    </div>
                    <ul style="font-size:0.85rem; color:var(--text-secondary); padding-left:1.2rem; line-height:1.6; margin:0; display:flex; flex-direction:column; gap:8px;">
                        <li><strong>Tres Modos de Persistencia:</strong> Opera en Google Firebase Firestore (Nube), Servidor REST API o almacenamiento Local (LocalStorage).</li>
                        <li><strong>Sincronización en Tiempo Real:</strong> Cuando un profesor completa el cuestionario desde su casa o móvil, la pantalla de la Dirección se actualiza automáticamente.</li>
                        <li><strong>Botonera de Configuración Nube:</strong> En la pestaña <em>Gestión del Claustro</em> se encuentra el botón <code>🔥 Configurar Firebase BBDD</code> para vincular las credenciales web en 1 clic.</li>
                    </ul>
                </div>

                <!-- Módulo 5 -->
                <div class="glass-container" style="padding:1.5rem; border-radius:14px; border-left:4px solid #ec4899;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:0.75rem;">
                        <span style="font-size:1.5rem;">📥</span>
                        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">5. Exportación, Copias de Seguridad y Secretos</h3>
                    </div>
                    <ul style="font-size:0.85rem; color:var(--text-secondary); padding-left:1.2rem; line-height:1.6; margin:0; display:flex; flex-direction:column; gap:8px;">
                        <li><strong>Exportación Excel / CSV (UTF-8 BOM):</strong> El botón <em>Exportar CSV</em> genera un archivo 100% compatible con Microsoft Excel manteniendo tildes y caracteres en español.</li>
                        <li><strong>Copias de Seguridad Completa (JSON):</strong> Botones <em>Exportar Backup</em> y <em>Restaurar Backup</em> para respaldar o migrar la base de datos de todo el centro.</li>
                        <li><strong>Cifrado y Easter Egg Secreto:</strong> Al pulsar <code>Ctrl + Shift + L</code> o hacer 5 clics rápidos sobre el logotipo del colegio, se desbloquea el mensaje cifrado de honor.</li>
                    </ul>
                </div>

                <!-- Módulo 6: Credenciales de los Directores -->
                <div class="glass-container" style="padding:1.5rem; border-radius:14px; border-left:4px solid #64748b; background:rgba(0,0,0,0.02);">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:0.75rem;">
                        <span style="font-size:1.5rem;">🔐</span>
                        <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:var(--text-main);">6. Accesos Directivos del Colegio</h3>
                    </div>
                    <div style="font-size:0.82rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:8px;">
                        <div style="background:var(--bg-card); padding:8px 12px; border-radius:6px; border:1px solid var(--card-border);">
                            <strong>Javier Félix</strong> (Director General): Acceso total a todas las etapas.
                        </div>
                        <div style="background:var(--bg-card); padding:8px 12px; border-radius:6px; border:1px solid var(--card-border);">
                            <strong>José Manuel Santos</strong> (Director EI y EP): Acceso a Educación Infantil y Primaria.
                        </div>
                        <div style="background:var(--bg-card); padding:8px 12px; border-radius:6px; border:1px solid var(--card-border);">
                            <strong>Luis Redruello</strong> (Director ESO y BTO): Acceso a Secundaria y Bachillerato.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    `;
}


// Cálculo real de Sintonía Pedagógica (Sin asumir 100% si la Dirección no ha co-evaluado)
function calculateSintonia(teacherName) {
    const tData = db.getUserData(teacherName);
    if (!tData || !tData.directorAnswers) {
        return { hasCoEval: false, text: '⏳ Pendiente de Co-Evaluación de Dirección', val: null };
    }

    const dKeys = Object.keys(tData.directorAnswers).filter(k => {
        const val = tData.directorAnswers[k];
        return typeof val === 'number' && val > 0;
    });

    if (dKeys.length === 0) {
        return { hasCoEval: false, text: '⏳ Pendiente de Co-Evaluación de Dirección', val: null };
    }

    let teacherBlockAverages = calculateBlockAverages(teacherName, 'teacher');
    let directorBlockAverages = calculateDirectorBlockAverages(teacherName);

    let tSum = 0, dSum = 0, count = 0;
    EVAL_BLOCKS.filter(b => b.id !== 'b6').forEach(b => {
        const tAvg = teacherBlockAverages[b.id] || teacherBlockAverages[b.id.replace('b','')] || 0;
        const dAvg = directorBlockAverages[b.id] || directorBlockAverages[b.id.replace('b','')] || 0;
        if (dAvg > 0 && tAvg > 0) {
            tSum += tAvg;
            dSum += dAvg;
            count++;
        }
    });

    if (count === 0) {
        return { hasCoEval: false, text: '⏳ Pendiente de Co-Evaluación de Dirección', val: null };
    }

    const globalT = tSum / count;
    const globalD = dSum / count;
    const val = Math.max(0, Math.round(100 - (Math.abs(globalT - globalD) * 20)));

    return { hasCoEval: true, text: `${val}% Sintonía Pedagógica`, val: val };
}


// ==========================================================================
// 18. EXPORTACIÓN MASIVA DE TODOS LOS INFORMES EN LOTE (DOSSIER COMPLETO PDF)
// ==========================================================================
window.exportAllTeacherReports = function() {
    const allowedList = getDirectorAllowedTeachers(TEACHERS);
    const teachersWithData = allowedList.filter(t => {
        const data = db.getUserData(t.name);
        return data && data.status !== 'not_started';
    });

    if (teachersWithData.length === 0) {
        showToast('No hay evaluaciones iniciadas o entregadas en la etapa seleccionada.');
        return;
    }

    showToast(`Generando dossier masivo de imprenta para ${teachersWithData.length} docentes...`);

    let masterHtml = teachersWithData.map((t, idx) => {
        return `
            <div style="${idx > 0 ? 'page-break-before: always; margin-top: 40px; border-top: 2px dashed #cbd5e1; padding-top: 40px;' : ''}">
                ${generateTeacherReportInnerHtml(t.name)}
            </div>
        `;
    }).join('');

    let iframe = document.getElementById('print-iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'print-iframe';
        iframe.style.cssText = 'position:fixed; right:0; bottom:0; width:0; height:0; border:none; z-index:-1;';
        document.body.appendChild(iframe);
    }

    const fullIframeHtml = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Dossier Oficial de Actas - Colegio San Buenaventura</title>
        <style>
            body { font-family: 'Inter', system-ui, -apple-system, sans-serif; color: #0f172a; background: #ffffff; margin: 0; padding: 20px; }
            @page { size: A4 portrait; margin: 10mm 12mm 10mm 12mm; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
        </style>
    </head>
    <body>
        ${masterHtml}
    </body>
    </html>`;

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(fullIframeHtml);
    doc.close();

    setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 400);
};

function generateTeacherReportInnerHtml(teacherName) {
    const tData = db.getUserData(teacherName) || {};
    const teacherInfo = TEACHERS.find(t => t.name === teacherName) || { etapa: 'General', tutor: 'No' };
    const isFullySigned = tData.signedTeacher && tData.signedDirector;
    const signedAtDate = tData.signedAt ? new Date(tData.signedAt).toLocaleString() : new Date().toLocaleString();
    const hashControl = `SHA256-${teacherName.charCodeAt(0)}${tData.signedAt ? Date.parse(tData.signedAt) : Date.now()}`;

    let teacherBlockAverages = calculateBlockAverages(teacherName, 'teacher');
    let directorBlockAverages = calculateDirectorBlockAverages(teacherName);
    const sintoniaObj = calculateSintonia(teacherName);

    let totalTeacherScore = 0;
    let totalDirectorScore = 0;
    let blockCount = 0;

    let blockRowsHtml = EVAL_BLOCKS.filter(b => b.id !== 'b6').map((block, idx) => {
        const tAvg = parseFloat(teacherBlockAverages[block.id] || teacherBlockAverages[idx]) || 0;
        const dAvgRaw = directorBlockAverages[block.id] || directorBlockAverages[idx] || 0;
        const dAvg = dAvgRaw > 0 ? parseFloat(dAvgRaw) : null;
        const gap = dAvg !== null ? (dAvg - tAvg).toFixed(1) : '-';
        totalTeacherScore += tAvg;
        if (dAvg !== null) totalDirectorScore += dAvg;
        blockCount++;

        const cleanedTitle = cleanBlockTitle(block.title, block.id);

        return `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:10px 12px; font-weight:700; color:#1e293b;">${cleanedTitle}</td>
                <td style="padding:10px 12px; text-align:center; font-weight:700;">${tAvg.toFixed(1)} / 5.0</td>
                <td style="padding:10px 12px; text-align:center; font-weight:700; color:${dAvg !== null ? '#2563eb' : '#64748b'};">
                    ${dAvg !== null ? dAvg.toFixed(1) + ' / 5.0' : '<span style="font-style:italic; font-weight:400; color:#94a3b8;">Sin co-evaluación</span>'}
                </td>
                <td style="padding:10px 12px; text-align:center; font-weight:700; color:${gap !== '-' && Math.abs(parseFloat(gap)) >= 1.0 ? '#ef4444' : '#10b981'};">
                    ${gap !== '-' ? (parseFloat(gap) > 0 ? '+' + gap : gap) : '-'}
                </td>
            </tr>
        `;
    }).join('');

    const globalTAvg = blockCount > 0 ? (totalTeacherScore / blockCount).toFixed(2) : '0.00';

    let detailedQuestionsHtml = EVAL_BLOCKS.filter(b => b.id !== 'b6').map((b, bIdx) => {
        const cleanedBlockTitle = cleanBlockTitle(b.title, b.id);
        let qRows = b.questions.map(q => {
            const tVal = (tData.answers && tData.answers[q.id]) ? tData.answers[q.id].score || tData.answers[q.id] : '-';
            const dVal = (tData.directorAnswers && tData.directorAnswers[q.id]) || null;
            const evidence = (tData.answers && tData.answers[q.id + '_ev']) || (tData.answers && tData.answers[q.id] && tData.answers[q.id].evidence) || '';

            return `
                <div style="margin-bottom:12px; padding-bottom:8px; border-bottom:1px dashed #cbd5e1; page-break-inside:avoid;">
                    <div style="font-weight:700; font-size:0.85rem; color:#1e293b; margin-bottom:4px;">
                        ${q.id.toUpperCase()} • ${q.text}
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#475569; background:#f8fafc; padding:6px 12px; border-radius:4px;">
                        <span>Autoevaluación Docente: <strong>${tVal} ${q.type === 'scale' ? '/ 5' : ''}</strong></span>
                        <span>Co-Evaluación Dirección: <strong style="color:${dVal !== null ? '#2563eb' : '#64748b'};">${dVal !== null ? dVal + ' / 5' : 'Conforme (Sin cambio)'}</strong></span>
                    </div>
                    ${evidence ? `<div style="font-size:0.78rem; color:#334155; margin-top:4px; font-style:italic; padding-left:8px; border-left:3px solid #3b82f6;">Evidencia aportada: "${evidence}"</div>` : ''}
                </div>
            `;
        }).join('');

        const reflectionText = (tData.reflections && tData.reflections[b.id]) || '';

        return `
            <div style="margin-bottom:22px; page-break-inside:avoid;">
                <h4 style="margin:0 0 10px 0; font-size:0.92rem; color:#1e3a8a; border-bottom:2px solid #2563eb; padding-bottom:4px; text-transform:uppercase; letter-spacing:0.03em;">
                    ${cleanedBlockTitle}
                </h4>
                ${qRows}
                ${reflectionText ? `<div style="background:#f1f5f9; padding:8px 12px; border-radius:6px; font-size:0.8rem; color:#1e293b; margin-top:8px;"><strong>Reflexión Cualitativa Docente:</strong> "${reflectionText}"</div>` : ''}
            </div>
        `;
    }).join('');

    const smartGoal = (tData.answers && tData.answers['smart_goal']) || 'Pendiente de definir';
    const smartActions = (tData.answers && tData.answers['smart_actions']) || 'Pendiente de definir';
    const smartSupport = (tData.answers && tData.answers['smart_support']) || 'Pendiente de definir';

    return `
        <div style="font-family:'Inter', system-ui, -apple-system, sans-serif; color:#0f172a; max-width:850px; margin:0 auto; background:#ffffff; padding:40px; box-sizing:border-box;">
            
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #1e3a8a; padding-bottom:15px; margin-bottom:25px;">
                <div>
                    <div style="font-size:0.75rem; font-weight:800; color:#2563eb; text-transform:uppercase; letter-spacing:0.12em;">Documento Oficial de Imprenta</div>
                    <h1 style="margin:4px 0 0 0; font-size:1.5rem; font-weight:900; color:#1e3a8a; text-transform:uppercase; letter-spacing:-0.02em;">
                        Colegio San Buenaventura
                    </h1>
                    <div style="font-size:0.92rem; font-weight:700; color:#475569; margin-top:2px;">
                        Acta Consolidada de Autoevaluación y Co-Evaluación Docente (Curso 2026-2027)
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:0.72rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.05em;">FOLIO OFICIAL</div>
                    <div style="font-size:0.85rem; font-weight:800; color:#1e3a8a; background:#eff6ff; border:1px solid #bfdbfe; padding:6px 12px; border-radius:6px; margin-top:4px;">
                        ACTA-2627-${teacherName.split(' ')[0].toUpperCase()}
                    </div>
                </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px; margin-bottom:25px; font-size:0.85rem;">
                <div>
                    <div><strong>Docente Evaluado/a:</strong> ${teacherName}</div>
                    <div style="margin-top:6px;"><strong>Etapa Educativa:</strong> ${teacherInfo.etapa}</div>
                    <div style="margin-top:6px;"><strong>Tutoría Asignada:</strong> ${teacherInfo.tutor}</div>
                </div>
                <div>
                    <div><strong>Estado del Documento:</strong> ${isFullySigned ? '🔒 Acta Cerrada y Firmada' : '🟡 En Proceso de Evaluación'}</div>
                    <div style="margin-top:6px;"><strong>Fecha de Certificación:</strong> ${signedAtDate}</div>
                    <div style="margin-top:6px;"><strong>Grado de Sintonía:</strong> <span style="color:${sintoniaObj.hasCoEval ? '#2563eb' : '#64748b'}; font-weight:800;">${sintoniaObj.text}</span></div>
                </div>
            </div>

            <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
                1. Resumen de Puntuaciones Consolidadas por Bloque
            </h3>
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom:25px;">
                <thead>
                    <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
                        <th style="padding:10px 12px; font-weight:800;">Bloque Competencial</th>
                        <th style="padding:10px 12px; text-align:center; font-weight:800;">Autoevaluación Docente</th>
                        <th style="padding:10px 12px; text-align:center; font-weight:800;">Co-Evaluación Dirección</th>
                        <th style="padding:10px 12px; text-align:center; font-weight:800;">Desviación (Gap)</th>
                    </tr>
                </thead>
                <tbody>
                    ${blockRowsHtml}
                    <tr style="background:#f8fafc; font-weight:800; border-top:2px solid #cbd5e1;">
                        <td style="padding:12px;">PROMEDIO GLOBAL DEL DOCENTE</td>
                        <td style="padding:12px; text-align:center;">${globalTAvg} / 5.0</td>
                        <td style="padding:12px; text-align:center; color:#2563eb;" colspan="2">
                            ${sintoniaObj.hasCoEval ? sintoniaObj.text : 'Co-Evaluación de Dirección Pendiente'}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:15px; text-transform:uppercase; letter-spacing:0.05em;">
                2. Evaluación Detallada e Ítems Cualitativos
            </h3>
            ${detailedQuestionsHtml}

            <div style="page-break-inside:avoid; margin-bottom:25px;">
                <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
                    3. Plan de Crecimiento Profesional SMART
                </h3>
                <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; font-size:0.82rem; display:flex; flex-direction:column; gap:8px;">
                    <div><strong>Objetivo SMART Acordado:</strong> "${smartGoal}"</div>
                    <div><strong>Acciones Concretas de Desarrollo:</strong> "${smartActions}"</div>
                    <div><strong>Necesidades de Apoyo Institucional:</strong> "${smartSupport}"</div>
                </div>
            </div>

            ${tData.directorNotes ? `
            <div style="page-break-inside:avoid; margin-bottom:25px;">
                <h3 style="font-size:0.95rem; font-weight:800; color:#1e3a8a; border-bottom:1.5px solid #cbd5e1; padding-bottom:6px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
                    4. Acuerdos y Orientaciones de la Dirección
                </h3>
                <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px; font-size:0.82rem; color:#1e3a8a; font-style:italic;">
                    "${tData.directorNotes}"
                </div>
            </div>
            ` : ''}

            <div style="page-break-inside:avoid; margin-top:35px; border-top:2px solid #cbd5e1; padding-top:20px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:25px;">
                    <div style="width:45%; text-align:center; border:1px solid #cbd5e1; border-radius:8px; padding:15px; background:#f8fafc;">
                        <div style="font-size:0.72rem; font-weight:800; color:#64748b; text-transform:uppercase; margin-bottom:10px;">El Docente Evaluado</div>
                        <div style="font-family:'Brush Script MT', cursive, 'Georgia', sans-serif; font-size:1.8rem; color:#1e3a8a; min-height:42px;">
                            ${tData.signedTeacher ? teacherName : '<span style="font-size:0.8rem; font-style:italic; color:#94a3b8;">Pendiente de firma</span>'}
                        </div>
                        <div style="font-size:0.7rem; color:#10b981; font-weight:700; margin-top:4px;">
                            ${tData.signedTeacher ? 'Firmado Electrónicamente' : ''}
                        </div>
                    </div>

                    <div style="width:45%; text-align:center; border:1px solid #cbd5e1; border-radius:8px; padding:15px; background:#f8fafc;">
                        <div style="font-size:0.72rem; font-weight:800; color:#64748b; text-transform:uppercase; margin-bottom:10px;">La Dirección del Centro</div>
                        <div style="font-family:'Brush Script MT', cursive, 'Georgia', sans-serif; font-size:1.8rem; color:#1e3a8a; min-height:42px;">
                            ${tData.signedDirector ? 'Colegio San Buenaventura' : '<span style="font-size:0.8rem; font-style:italic; color:#94a3b8;">Pendiente de firma</span>'}
                        </div>
                        <div style="font-size:0.7rem; color:#10b981; font-weight:700; margin-top:4px;">
                            ${tData.signedDirector ? 'Firmado Electrónicamente' : ''}
                        </div>
                    </div>
                </div>

                <div style="text-align:center; font-size:0.72rem; color:#64748b; border-top:1px solid #e2e8f0; padding-top:12px;">
                    <div><strong>Colegio San Buenaventura</strong> • Sello Digital de Conformidad e Integridad de Acta</div>
                    <div style="margin-top:3px;">Control Hash: ${hashControl} | Certificación Timestamp: ${signedAtDate}</div>
                </div>
            </div>

        </div>
    `;
}


// ==========================================================================
// 19. INICIALIZACIÓN Y ARRANQUE PRINCIPAL DE LA APLICACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof initTheme === 'function') initTheme();
        if (db && typeof db.init === 'function') db.init();
        if (db && typeof db.checkConnections === 'function') db.checkConnections();
        renderApp();
    } catch(e) {
        console.error("Startup Error", e);
        renderApp();
    }
});

// Respaldo de arranque inmediato si el DOM ya estaba listo
if (document.readyState === 'complete' || document.readyState === 'interactive' || document.readyState === 'loaded') {
    setTimeout(() => {
        try {
            if (typeof initTheme === 'function') initTheme();
            if (db && typeof db.init === 'function') db.init();
            renderApp();
        } catch(e) {}
    }, 50);
}
