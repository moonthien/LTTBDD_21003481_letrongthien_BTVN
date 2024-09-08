
function Output(question, value) {
    const outputDiv = document.getElementById("nhap");
    outputDiv.innerHTML += `<div class="display"> <span>${question}  ${value}</span> </div>`;
  }



//27
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  Output(27, ". Tạo một hàm sẽ nhận một mảng số làm đối số và sẽ trả về một mảng mới với các phần tử riêng biệt:");
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  Output(" mang nhap vao: ", numbers);
  const uniqueNumbers = removeDuplicates(numbers);
  Output(" Manng rieng biet:", uniqueNumbers);
//28
// Hàm kiểm tra số nguyên tố
Output(28, ". Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng:");
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Hàm tìm 100 số nguyên tố đầu tiên
  function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;
  
    while (primes.length < n) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
  
    return primes;
  }
  
  // Hàm tính tổng của mảng số nguyên tố
  function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Sử dụng các hàm
  const numberOfPrimes = 100;
  const primes = getFirstNPrimes(numberOfPrimes);
  const sum = sumOfArray(primes);
  
  Output('Số nguyên tố:', primes);
  Output('Tổng của các số nguyên tố:', sum);

  Output(29, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  // Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Hàm tìm 100 số nguyên tố đầu tiên
  function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;
  
    while (primes.length < n) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
  
    return primes;
  }
  
  // Hàm tính khoảng cách giữa các số nguyên tố
  function getPrimeGaps(primes) {
    const gaps = [];
    for (let i = 1; i < primes.length; i++) {
      gaps.push(primes[i] - primes[i - 1]);
    }
    return gaps;
  }
  
  // Sử dụng các hàm
  const numberOfPrimes1 = 100;
  const primes1 = getFirstNPrimes(numberOfPrimes1);
  const gaps = getPrimeGaps(primes1);
  
  Output('100 số nguyên tố đầu tiên:', primes);
  Output('Khoảng cách giữa các số nguyên tố:', gaps);
  Output(30, ". In khoảng cách giữa 100 số nguyên tố đầu tiêcn:");
  Output(31, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  Output(32, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  Output(33, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  Output(34, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  Output(35, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");


  

  