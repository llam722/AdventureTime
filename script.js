async function fetchData(){
  const res = await fetch('https://api.coronavirus.data.gov.uk/v1/data');
  const record = await res.json();
  document.getElementById('pokemon').innerHTML=record.data[0].date;
  document.getElementById('type').innerHTML=record.data[0].areaName;
  document.getElementById('hp').innerHTML=record.data[0].latestBy;
  document.getElementById('lvl').innerHTML=record.data[0].deathNew;
}
fetchData();