
let age, sity, sport, s_sity, s_sport;
age = prompt('Введите свой вораст');
if(!age) {
  alert('Жаль, что Вы не указали свой возраст')
} else {
  sity = prompt('Введите свой город');
  if(!sity) {
    alert('Жаль, что Вы не указали свой город')
  } else {
    sport = prompt('Какой Ваш любимый вид спорта');
    if(!sport) {
      alert('Жаль, что Вы не указали свой любимый вид спорта')
    } else {
      switch (sity) {
        case 'Москва':
          s_sity = 'Ты живешь в столице России.';
          break;
        case 'Киев':
          s_sity = 'Ты живешь в столице Украины.';
          break;
        case 'Минск':
          s_sity = 'Ты живешь в столице Беларуси.';
          break;
        default:
          s_sity = `Ты живешь в городе ${sity}`;
      }

      switch (sport) {
        case 'бокс':
          s_sport = 'Круто! Хочешь стать Александром Усиком.';
          break;
        case 'футбол':
          s_sport = 'Круто! Хочешь стать Лионелем Месси.';
          break;
        case 'теннис':
          s_sport = 'Круто! Хочешь стать Новаком Джоваковичем.';
          break;
        default:
          s_sport = `Тебе нравится ${sport}`;
      }

      alert(`Тебе ${age} лет. \n${s_sity} \n${s_sport}`)
    }
  }
}


