// Componente de tarjeta de curso
function createCourseCard(course) {
    const card = document.createElement('div');
    card.classList.add('course-card');

    const img = document.createElement('img');
    img.src = course.posterUrl;
    img.alt = course.name;

    const title = document.createElement('h3');
    title.textContent = course.name;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener('click', () => {
        window.location.href = `../pages/courseDetails.html?courseId=${course.id}`;
    });

    return card;
}
