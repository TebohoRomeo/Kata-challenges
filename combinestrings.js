function zip(listA, listB, zipList = []) {
        if (listA.length === 0 || listB.length === 0) {
            return zipList.reverse();
        } else {
          zipList.unshift(listA.shift());
          zipList.unshift(listB.shift());
          return zip(listA, listB, zipList);
        }
      }
      console.log(zip([11, 22, 33], [1, 2, 3]));