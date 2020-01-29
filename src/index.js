import './assets/styles/app.scss';
import './assets/images/more_horiz-24px.svg';
import './assets/images/notifications-24px.svg';
import './assets/images/offline_bolt-24px.svg';
import './assets/images/portrait1.jpg';
import './assets/images/search-24px.svg';
import './index.hbs';
import './about.hbs';


document.querySelector('[data-toggle]').addEventListener('click', function (event) {
    let element = event.target.dataset.toggle;
    document.querySelectorAll('[data-' + element + ']').forEach(function (el) {
        el.classList.toggle(element + '-hide');
    })
});
