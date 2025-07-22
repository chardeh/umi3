
                                
document.addEventListener('DOMContentLoaded', function() {

  const letterContentEl = document.getElementById('letter-content');
  const heartEl = document.querySelector('.heart');
  const heartPath = document.getElementById('heart-path');

  /* MODIFICAR: El mensaje de la carta */
  const text = "For my love Salma Abdelattiff,\n\n" +
      "It has been officially 1 year since we have gotten to know eachother. So much happened in that short period of time between you and I. We hit it off at an instant, like we had known eachother for years. I felt so comfortable around you and felt like i could be myself without being judged. \n\n" +
      "I quickly grew to like you a lot and eventually even fell in love with you. It was love at first sight, at last sight, at every and ever sight. I fell in love with the way you carry yourself, i fell in love with the way you made me grow as a man,I fell in love with how strong you are despite of past experiences, I fell in love with how you'd always be there for me and check up on me, I fell in love with how you were both my best friend and my partner, I fell in love with your insecurities, I fell in love with how you opened up to me and let me see parts of you that nobody knew, I fell in love with you on an emotional level, I fell in love with you because our love is pure the type of love that would last a lifetime, I fell in love with you Umi. You are, and always have been, my dream. My heart is drawn to you. Surah Al-Imran 3:14 - 'Beautiful for people is love of that which they desire, of woman, children heaped up sums of gold and silver'.\n\n" +
      "Altough we both love eachother immensly we still had our up and downs, which i believe to be normal in a relationship because we both wanted to bring out the best version of eachother. At times I was acting childish and ungrateful of you, i guess that was my lack of experience in relationships which i been owning up to on my own time. I have wronged you Umi, without it being my intention I caused you hurt and I am here to apologise for everything I caused you. Surah Al-A'raf 7:23 - 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.' The way I have hurt you, i know couldn't been easy for you and I deeply regret it. But at the end we always made it up to eachother and came back stronger not only individually but also as a partnership. If i had to put your beauty into words I would say: I wish i was one of your tears, so i could be born in your beautiful eyes, run down your cheek and die on your soft lips. \n\n" +
      "You went trough a lot this year and I always tried being there for you. I know my way of expressing that wasn't always clear and I should've done better. You shouldn't have to tell me everytime im acting wrongfully, this should be something i recognise myself and change myself, I am still very grateful for you for pointing this out because it helped develop in a better person, a better man for you(hopefully). I know how I should treat you the right way, the way u deserve to be treated, and i hope in the bottom of my heart you will give me that chance to treat you that way without any nonsense that has come with it the past times. I have found the one whom my soul loves. Surah Adh-Dhariyat 54:49 - 'And of everything We created pairs, so that you may reflect.' \n\n" +
      "هي جت لروحي كإنها روحها \n"+ 
      "I love you Umi ❤️, \n"+
      "Chardeh"

  /* MODIFICAR: Velocidad de escritura */
  const typingSpeed = 30;

  const heartPathLength = heartPath.getTotalLength();
  heartPath.style.strokeDasharray = heartPathLength;
  heartPath.style.strokeDashoffset = heartPathLength;

  let i = 0;

  function typeWriter() {
      if (i < text.length) {
          letterContentEl.innerHTML += text.charAt(i);
          const progress = i / (text.length - 1);
          const newDashoffset = heartPathLength * (1 - progress);
          heartPath.style.strokeDashoffset = newDashoffset;
          i++;
          setTimeout(typeWriter, typingSpeed);
      } else {
          letterContentEl.classList.add('typing-done');
          heartEl.classList.add('finished');
      }
  }

  typeWriter();

  function createSparkle(x, y) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      document.body.appendChild(sparkle);

      const size = Math.random() * 6 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      sparkle.style.left = `${x - size / 2}px`;
      sparkle.style.top = `${y - size / 2}px`;

      const randomX = Math.random() * 40 - 20;
      const randomY = Math.random() * 40 - 20;

      sparkle.addEventListener('animationend', () => {
          sparkle.remove();
      });
  }

  document.addEventListener('mousemove', (e) => {
      createSparkle(e.clientX, e.clientY);
  });

  document.addEventListener('touchmove', (e) => {

      if (e.touches.length > 0) {
          createSparkle(e.touches[0].clientX, e.touches[0].clientY);
      }
  });
});

                          