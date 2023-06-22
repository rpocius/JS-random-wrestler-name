const first = ['THE BIG', 'EL', 'LEGIT', 'THE NEW', 'GOLDEN', 'MISTER', 'SMOOTH', 'ULTIMATE', 'ICE COLD'];

const second = ['POWER BOMB', 'ROCK BOTTOM', 'SWAN DIVE', 'DIAMOND CUTTER', 'ASS BLASTER', 'VEGAN MASTER', 'PRETTY BOY', 'PARTY POOPER', 'HUMBLE GIANT', 'LIFE CRUSHER'];

const third = ['APOLLO', 'RANDY', 'RAZOR', 'ZEUS', 'TITAN', 'PRESIDENTE', 'TIGER', 'DOG', 'BRAWLER', 'DREAMER'];

function randNum(num) {
    return Math.floor(Math.random() * num);
};

function randName() {
    console.log(`YOUR RANDOM WRESTLER NAME IS: ${first[randNum(first.length)]} ${second[randNum(first.length)]} ${third[randNum(first.length)]}`);
};

randName();