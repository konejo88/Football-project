const podmenu = `
<ul class="football">
        <li>FC Chelsea</li>
		<li><a href="index.html">Главная</a></li>
		<li><a href="index2.html">Матчи</a></li>
		<li><a href="index3.html">Новости</a></li>
		<li><a href="index4.html">Состав</a></li>
		<li><a href="index5.html">Форум</a></li>
	</ul>`
const menumenu= document.querySelector(".menu")

menumenu.innerHTML = podmenu
const zagolov = document.createElement("h1")
zagolov.textContent="Chelsea"
const god=document.querySelector(".god")
god.appendChild(zagolov)
