const buildList = (array) => {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      let listItem = document.createElement("li");


      let text = document.createTextNode(array[i]);

      listItem.appendChild(text);

      let list = document.getElementById("storyList");
      list.appendChild(listItem);

    }
  }

  var listArray
  var storedListString = localStorage.getItem("listArray")
  if (storedListString == null) {
    listArray = []
  } else {
    listArray = JSON.parse(storedListString)
    console.log("memory start");
    console.log(listArray);
    console.log("memory end");
    buildList(listArray)
  }


  const loadStory = () => {
    let storyName = document.getElementById("name_input").value
    let storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
  }

  const saveStory = () => {
    let storyName = document.getElementById("name_input").value
    let storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML)
    if (!listArray.includes(storyName)) {
      listArray.push(storyName)
      let storedListString = JSON.stringify(listArray)
      localStorage.setItem("listArray", storedListString)
      let listItem = document.createElement('li');
      console.log(listArray[listArray.length - 1]);
      let name = document.createTextNode(listArray[listArray.length - 1]);
      console.log(name);
      listItem.appendChild(name);

      let list = document.getElementById("storyList");
      list.appendChild(listItem);
    }
         
  }

  const displayStory = () => {
    let storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML
  }