let savedTabs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabsFromLocalStorage = JSON.parse( localStorage.getItem("savedTabs") );
const tabBtn = document.getElementById("tab-btn");

if (tabsFromLocalStorage) {
    savedTabs = tabsFromLocalStorage;
    render(savedTabs);
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        savedTabs.push(tabs[0].url);
        localStorage.setItem("savedTabs", JSON.stringify(savedTabs) );
        render(savedTabs);
    });
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    };
    ulEl.innerHTML = listItems;
};

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    savedTabs = [];
    render(savedTabs);
});

inputBtn.addEventListener("click", function() {
    savedTabs.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("savedTabs", JSON.stringify(savedTabs) );
    render(savedTabs);
});
