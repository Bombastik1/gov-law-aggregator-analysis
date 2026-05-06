/**
 * Дані, які імітують відповідь від твого .NET LawsController.
 * У реальному проєкті тут був би виклик fetch('api/laws').
 */
const mockData = [
    { id: 1, title: "Земельний кодекс України", category: "Кодекс", date: "2024-05-01", status: "Активний" },
    { id: 2, title: "Про цифрові активи", category: "Закон", date: "2024-04-20", status: "На підписі" },
    { id: 3, title: "Про порядок денний ВРУ", category: "Постанова", date: "2024-05-05", status: "Активний" },
    { id: 4, title: "Податковий кодекс України", category: "Кодекс", date: "2024-03-15", status: "Зміни" },
    { id: 5, title: "Про митний тариф", category: "Закон", date: "2024-02-10", status: "Активний" }
];

/**
 * Функція для відображення карток на сторінці
 * @param {Array} data - масив об'єктів із законами
 */
function renderLaws(data) {
    const lawsList = document.getElementById('laws-list');
    const countLabel = document.getElementById('law-count');
    
    // Оновлюємо лічильник
    countLabel.innerText = data.length;
    
    // Перевірка на порожній результат
    if (data.length === 0) {
        lawsList.innerHTML = `
            <div class="no-results animated-fade">
                <p>🔍 Нічого не знайдено. Спробуйте змінити параметри пошуку.</p>
            </div>`;
        return;
    }

    // Рендеримо картки за допомогою .map()
    lawsList.innerHTML = data.map(law => `
        <div class="law-card animated-fade">
            <div class="law-status">${law.status}</div>
            <h3>${law.title}</h3>
            <div class="law-info">
                <span>📂 ${law.category}</span>
                <span>📅 ${new Date(law.date).toLocaleDateString('uk-UA')}</span>
            </div>
            <button class="btn-detail" onclick="showDetail('${law.title}')">Детальніше</button>
        </div>
    `).join('');
}

/**
 * Логіка фільтрації (пошук + категорія)
 */
function filterLaws() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;

    const filtered = mockData.filter(law => {
        const matchesSearch = law.title.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || law.category === category;
        return matchesSearch && matchesCategory;
    });

    renderLaws(filtered);
}

/**
 * Проста функція для кнопки "Детальніше"
 */
function showDetail(title) {
    alert(`Перегляд детальної інформації про: \n"${title}"`);
}

/**
 * Ініціалізація при завантаженні сторінки
 */
window.onload = () => {
    console.log("GovLaw Prototype initialized");
    renderLaws(mockData);
};
