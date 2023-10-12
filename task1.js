    const list = document.querySelector("ol");
    const listItems = list.getElementsByTagName("li");
    alert("1 " + listItems[0].textContent);
    alert("2 " + listItems[listItems.length - 1].textContent);
    alert("3 " + listItems[1].textContent);
    alert("4 " + listItems[3].textContent);
    alert("5 " + listItems[2].textContent);