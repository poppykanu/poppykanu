let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSeQfQdyTmQRpHZlEYyfDkh87oTNo6k9krLpUo3YFLvxF5A4XNPOW--E1hKRaudWMc6xhBPSf5oNyX3/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here

    let component = document.createElement("div")
    component.classList.add("project-component")

    let name = document.createElement("p")
    name.textContent = row.name
    name.classList.add("name")

    let image = document.createElement("img")
    image.src = "images/" + row.imageurl
    image.classList.add("soil")

    let description = document.createElement("description")
    description.textContent = row.description
    description.classList.add ("description")

    component.addEventListener("click", function(){
      window.open(row.page)
    })

   





  component.append(name)
  component.append(image)
  component.append(description)
  main.append(component)
}
