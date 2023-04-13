// const menu = document.createElement("div");
// menu.classList.add("school")
// const school = document.querySelector(".school")

// const two = document.body
// two.appendChild(menu)

const podmenu = `
<ul class="football">
        <li>FC Chelsea</li>
		<li><a href="index.html">Главная</a></li>
		<li><a href="index2.html">Матчи</a></li>
		<li><a href="index3.html">Новости</a></li>
		<li><a href="index4.html">Состав</a></li>
		<li><a href="index5.html">Форум</a></li>
	</ul>`
const razmetka=document.querySelector(".navigation");

razmetka.innerHTML = podmenu

// const img = document.createElement("img");
// img.classList.add("logo")
// img.src = "580b57fcd9996e24bc43c4e1.png"
// menu.appendChild(img)


const games = document.querySelector(".trener");
// two.appendChild(games);
const calendar = `
<ul class="calendar">
                 <li><button type="button" class="btn btn-primary">Расписание</button></li>
                <li>17.04.2022|18:30Англия. Кубок Кристал Пэлас</li>
		<li>20.04.2022|21:45Англия. Премьер-лига Арсенал</li>
		<li>24.04.2022|16:00 Англия. Премьер-лига Вест Хэм</li>
		<li>01.05.2022|16:00 Англия. Премьер-лига Эвертон</li>
		<li>07.05.2022|17:00 Англия. Премьер-лига Вулверхэмптон</li>
		<li>11.05.2022|21:30 Англия. Премьер-лига Лидс</li>
		<li>15.05.2022 Англия. Премьер-лига Манчестер Юнайтед</li>
		<li>19.05.2022|22:00 Англия. Премьер-лига Лестер</li>
		<li>22.05.2022|18:00 Англия. Премьер-лига Уотфорд</li>
		
	</ul>`
games.innerHTML = calendar;


// const winner=prompt("Вам есть 18 лет?");
// if (winner>18) {
//     prompt("Да,подходит")
// } else if (winner<18) {
//     prompt("Нет, не подходит")
// }
const pass=prompt('Введите пароль');
const parol=prompt('Повторите пароль');
if (pass==parol) {
	// alert('Правильно')
} else {
	// alert('Ошмбка')
}
const name=prompt('Введите Имя');
if (name=='Sergey') {
	// alert('Верно')
} else {
	// alert('Неверно')
	
}
const mail=prompt('Введите email');
if (mail=='konejo@mail.ru') {
	alert('Добро Пожаловать')
} else {
	
	alert('Попробуйте снова')
}

