// Імітація виклику твого C# API
function loadLaws() {
    const lawsList = document.getElementById('laws-list');
    
    // Дані, які нібито прийшли з твого LawsController.cs
    const mockData = [
        { title: "Земельний кодекс", category: "Кодекс", date: "2024-05-01" },
        { title: "Про цифрові активи", category: "Закон", date: "2024-04-20" }
    ];

    lawsList.innerHTML = mockData.map(law => `
        <div class="law-card">
            <h3>${law.title}</h3>
            <p>Категорія: <strong>${law.category}</strong></p>
            <small>Дата публікації: ${law.date}</small>
        </div>
    `).join('');
}

// Завантажити при старті
window.onload = loadLaws;
