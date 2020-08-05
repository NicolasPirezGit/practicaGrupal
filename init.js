//const plantas_url = "https://silvinavd.github.io/plantasrepo/plantas.json";




var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok){
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}
console.log();
