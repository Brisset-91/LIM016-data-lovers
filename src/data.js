
export const rio_teams = (data) =>{

  let just_athletes_team= Object.entries(data)[4][1]; //convierto al objeto en array, luego me quedé solo con el último elemento del array
  let justCountries= just_athletes_team.map(item=>item.team);
   return justCountries;
   
};

export const timesRepeated = arr =>{
  return arr.reduce((acc, item) =>{
    //console.log(item)
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
  let datos = data.map(item => [/*item.name, item.sport, */item.gender, item.medal]);
  //console.log(datos)
  /*let female = datos.filter ((arr) => {
    if (arr[0]=== "F") {
      let filtroFameleMedal = [/*arr.name, arr.gender, arr.sport, arr.medal]
      return filtroFameleMedal
    }  
  })*/
  
  //return female
  return datos
 
};

