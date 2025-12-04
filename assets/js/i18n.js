document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en';
    let translations = {};

    // Initialize
    init();

    async function init() {
        try {
            const response = await fetch('assets/data/translations.json');
            translations = await response.json();

            const savedLang = localStorage.getItem('mpcc_lang') || defaultLang;
            setLanguage(savedLang);

            // Bind click events to language switchers
            document.querySelectorAll('.lang-switch').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const lang = e.target.dataset.lang;
                    if (lang) setLanguage(lang);
                });
            });

        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;

        // Save preference
        localStorage.setItem('mpcc_lang', lang);

        // Update DOM text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.placeholder) {
                    el.placeholder = translations[lang][key];
                } else {
                    // Check if content has HTML (like <br>)
                    if (translations[lang][key].includes('<')) {
                        el.innerHTML = translations[lang][key];
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            }
        });

        // Update active state of buttons
        document.querySelectorAll('.lang-switch').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('text-brand-red');
                btn.classList.remove('text-gray-400', 'hover:text-brand-dark');
            } else {
                btn.classList.remove('text-brand-red');
                btn.classList.add('text-gray-400', 'hover:text-brand-dark');
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Toggle Malayalam font class on body
        if (lang === 'ml') {
            document.body.classList.add('font-malayalam');
        } else {
            document.body.classList.remove('font-malayalam');
        }
    }
});
