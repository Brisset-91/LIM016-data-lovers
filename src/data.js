
export const rio_teams = (data) =>{

  let just_athletes_team= Object.entries(data)[4][1]; //convierto al objeto en array, luego me quedé solo con el último elemento del array
  let justCountries= just_athletes_team.map(item=>item.team);
   return justCountries;
   
};

// export const rio_sports = (data) =>{

//   let just_athletes_sport= Object.entries(data)[4][1]; //convierto al objeto en array, luego me quedé solo con el último elemento del array
//   let justSports= just_athletes_sport.map(item=>
//     [(`
//   ${item.sport}
//   `)]
//   );
//   return justSports;

// };

export const timesRepeated = arr =>{
  return arr.reduce((acc, item) =>{
    if(!acc[item]){  
      acc[item]= 1;
    }
    else{
      acc[item] = acc[item]+1;
    }
    return acc
  }, {});
};

export const noRepeated = arr =>{
  return arr.reduce((acc, item) =>{
    if(!acc[item]){  
      acc[item]= "";
    }
    else{
      acc[item] = acc[item]+ "";
    }
    return acc
  }, {});
};
export const spliceIntoChunks= (arr, chunkSize) =>{
  const res = [];
  while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
  }
  return res;
}

export const justFemale=(arr)=>{
  let female= Object.values(arr.filter(item=> (item.gender=== "F")));
  return female;
}

// export const anotherExample = (data) => {
//   return 'OMG';
// };

export const medalFemale = (data) => {
  let datos = data.map(item => [item.name, item.gender, item.sport, item.medal]);
 
  let female = datos.filter ((arr) => {
    if (arr[1]=== "F") {
      let filtroFameleMedal = [arr.name, arr.gender, arr.sport, arr.medal]
      
      return filtroFameleMedal
    }
        
  })
  
  return female
 
 

/*  scores.sort((a, b) =>  b[1] - a[1]);
  let movies10 = [], scores10 = [];

  for (let i = 0; i < 10; i++) {
    movies10[i] = scores[i][0];
    scores10[i] = scores[i][1];
  }
  return [movies10, scores10];*/
};