// 1. Inicializar Iconos Lucide
lucide.createIcons();

// 2. Captura de UTMs al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    captureUTMs();
});

function captureUTMs() {
    const params = new URLSearchParams(window.location.search);
    const fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    fields.forEach(field => {
        const value = params.get(field) || '';
        
        // Para formulario principal
        const mainInput = document.getElementById(field);
        if (mainInput) mainInput.value = value;

        // Para formulario WhatsApp
        const waInput = document.getElementById('wa_' + field);
        if (waInput) waInput.value = value;
    });
}

// 3. Lógica del Menú Móvil
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// 4. Desplazamiento Suave
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobile-menu').classList.add('hidden');
    }
}

// 5. Selección de Modelo
function selectModel(modelName) {
    scrollToSection('contacto');
    const select = document.getElementById('model');
    select.value = modelName;
    select.classList.add('bg-brand-light', 'font-bold');
    
    // Auto-seleccionar tipo
    const radios = document.getElementsByName('printerType');
    if (modelName.includes('C320F')) {
        radios.forEach(r => r.value === 'Color' ? r.checked = true : null);
    } else {
        radios.forEach(r => r.value === 'Blanco y Negro' ? r.checked = true : null);
    }
}

function selectOtherModel() {
    scrollToSection('contacto');
    const select = document.getElementById('model');
    select.value = "Otro";
    select.classList.add('bg-brand-light', 'font-bold');
}

function resetModel() {
    const select = document.getElementById('model');
    select.value = "";
    select.classList.remove('bg-brand-light', 'font-bold');
}

// 6. Lógica MODAL WHATSAPP
function openWhatsAppModal() {
    const modal = document.getElementById('whatsapp-modal');
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open'); // Bloquear scroll
}

function closeWhatsAppModal() {
    const modal = document.getElementById('whatsapp-modal');
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

// 7. Envío a ZAPIER (Función Genérica)
function sendToZapier(webhookUrl, formData, redirectUrl) {
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Enviar fetch (no-cors para evitar bloqueos del navegador, aunque no leamos respuesta)
    fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors' 
    }).then(() => {
        window.location.href = redirectUrl;
    }).catch((error) => {
        console.error('Error:', error);
        window.location.href = redirectUrl; // Redirigir de todos modos
    });
}

// 8. Manejo FORMULARIO PRINCIPAL
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = 'Enviando...';
    btn.disabled = true;

    const formData = new FormData(e.target);
    const webhook = "https://hooks.zapier.com/hooks/catch/23995305/ufmcyhg/";
    
    sendToZapier(webhook, formData, "gracias.html");
}

// 9. Manejo FORMULARIO WHATSAPP
function handleWhatsAppSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = 'Conectando...';
    btn.disabled = true;

    const formData = new FormData(e.target);
    // Asegurar formato internacional para el campo "phone" si se desea guardar así en CRM
    // Pero el usuario pidió solo enviar JSON. 
    
    const webhook = "https://hooks.zapier.com/hooks/catch/23995305/ufmchy7/";
    
    sendToZapier(webhook, formData, "whatsapp-redirect.html");
}