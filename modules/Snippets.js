const snippets = [
    {
      id: 0,
      name: "Konvertere temperatur",
      desc:"",
      kode: `
      function convertCtoF(celsius) {
          let fahrenheit = celsius * (9 / 5) + 32;
          return fahrenheit;
        }
        
        convertCtoF(30);
        
        function convertFtoC(fahrenheit) {
          let celsius = (fahrenheit - 32) * 5/9;
          return celsius;
        }
        
        convertFtoC(90)`,
    },
    {
      id: 1,
      name: "Reversere String",
      desc:`Bruk split(), 
        innebygd funksjon i JavaScript til å dele strengen i en rekke tegn. 
        Bruk reverse()-funksjonen i JavaScript for å reversere rekken med tegn i. 
        Bruk join()-funksjonen i JavaScript for å koble elementene i en matrise til en streng.`,
      kode: `
      function reverseString(str) {
        return str.split('').reverse().join('');
      }
      
      reverseString("Hallo");`,
    },
    {
      id: 2,
      name: "Faktorisering",
      desc:"",
      kode: `
      function faktoriser(num) {
        if (num === 0) {
          return 1
        }
        return num * faktoriser(num - 1);
      }
      
      faktoriser(85);`,
    },
    {
      id: 3,
      name: "Retuner Lengste Ord",
      desc:"",
      kode: `
      function findLongestWordLength(str) {
        str = str.match(/\w+/gi);
        let largest = "";
        for(let i = 0; i < str.length; i++) {
          if(str[i].length > largest.length){
          largest = str[i]
          }
        }
        return largest.length;
      }
      
      findLongestWordLength("Return the length of the longest word in the provided sentence");`,
    },
    {
      id: 4,
      name: "Størst av 4",
      desc:"",
      kode: `
      function largestOfFour(arr) {
        const total = []
        for (let i = 0; i < arr.length; i++){
          let largest = arr[i][0]
          for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > largest) {
              largest = arr[i][j];
            }
          }
          total.push(largest);
        }
        return total;
      }
      
      largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);`,
    },
    {
      id: 5,
      name: "Beslutt slutt",
      desc:"",
      kode: `
      function confirmEnding(str, target) {
        if (str.slice(str.length - target.length) === target) {
          return true;
        }else {
          return false;
        }
      }
      
      confirmEnding("Bastian", "n");`,
    },
    {
      id: 6,
      name: "Gjenta en string",
      desc:"",
      kode: `
      function repeatStringNumTimes(str, num) {
        if (num < 1) {
          return ""
        }else {
          return str + repeatStringNumTimes(str, num - 1)
        }
      }
      
      repeatStringNumTimes("abc", 3);`,
    },
    {
      id: 7,
      name: "Avkorte (truncate) en string",
      desc:"",
      kode: `
      function truncateString(str, num) {
        if (str.length > num){
          return str.substring(0, num) + "...";
        }else {
          return str
        }
      }
      
      truncateString("A-tisket a-tasket A green and yellow basket", 8);`,
    },
    {
      id: 8,
      name: "Fin elementet",
      desc:"",
      kode: `
      function findElement(arr, func) {
        let num = 0;
        for (let x = 0; x < arr.length; x++) {
          num = arr[x];
          if (func(num)) {
            return num;
          }
        }
        return undefined;
      }
      
      findElement([1, 2, 3, 4], num => num % 2 === 0);`,
    },
    {
      id: 9,
      name: "Boowho",
      desc:"",
      kode: `
      function booWho(bool) {
        return (typeof bool === "boolean" ? true : false);
      }
      
      booWho(null);`,
    },
    {
      id: 10,
      name: "Stor bokstav",
      desc:`(\S) - alle tegn som ikke er "whitespace"
            (\s) - eller alle tegn ETTER "whitespace" 
            (^) - i begynnelsen
            (g) - sjekker globalt`,
      kode: `
      function titleCase(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
      }
      
      titleCase("I'm a little tea pot");`,
    },
    {
      id: 11,
      name: "Slice and splice",
      desc:"",
      kode: `
      function sliceAndSplice(arr1, arr2, n) {
        let newArr = arr2.slice();
        newArr.splice(n, 0, ...arr1);
        return newArr; 
      }
      
      sliceAndSplice([1, 2, 3], [4, 5, 6], 1);`,
    },
    {
      id: 12,
      name: "Falsy",
      desc:"",
      kode: `
      function falsyBouncer(arr) {
        return arr.filter(Boolean);
      }
      
      falsyBouncer([7, "ate", "", false, 9]);`,
    },
    {
      id: 13,
      name: "Hvor går jeg",
      desc:"",
      kode: `
      function getIndexToIns(arr, num) {
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] >= num)
            return i;
        }
        return arr.length;
      }
      
      getIndexToIns([40, 60], 50);`,
    },
    {
      id: 14,
      name: "Mutasjon",
      desc:"",
      kode: `
      function mutation(arr) {
        return arr[1]
          .toLowerCase()
          .split("")
          .every((bokstav) => {
            return arr[0].toLowerCase().indexOf(bokstav) !== -1;
          });
      }
      
      mutation(["hello", "hey"]);`,
    },
    {
      id: 15,
      name: "Chunky Monkey",
      desc:"",
      kode: `
      function chunkArrayInGroups(arr, size) {
        let newArr = [];
        for (let i = 0; i < arr.length; i+= size) {
          newArr.push(arr.slice(i, i + size))
        }
        return newArr;
      }
      
      chunkArrayInGroups(["a", "b", "c", "d"], 2);`,
    }
  ]

export {snippets}