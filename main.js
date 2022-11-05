// 일반 함수로 작성
function earnRandomMoney() {
  // 1~10 사이의 랜덤 정수를 뽑은 뒤, 10000을 곱합니다
  const rand = Math.floor(Math.random() * 10) + 1;
  const newMoney = rand * 10000;

  // wallet 객체를 가져옵니다
  let wallet = document.querySelector('#wallet');

  // wallet 객체에서 현재 잔액을 가져옵니다
  const nowMoney = wallet.innerText;

  // wallet 객체에 현재 잔액에 새롭게 번 돈을 합산하여 지갑에 반영합니다
  wallet.innerText = Number(nowMoney) + Number(newMoney);
}

// Arrow Function으로 작성
const payMoney = (price) => {
  let wallet = document.querySelector('#wallet');
  const nowMoney = wallet.innerText;

  if (Number(wallet.innerText) - Number(price) >= 0) {
    wallet.innerText = Number(nowMoney) - Number(price);
  } else {
    alert('돈이 부족합니다!');
  }
};
