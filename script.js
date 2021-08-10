var query = window.location.search;
query = query.replace("?", '');
if (query === "") {
    document.getElementById("query").innerHTML = "Your Query Argument";
} else {
    document.getElementById("query").innerHTML = query;
}

function copyQuery() {
    const clipboard = navigator.clipboard;
    const query = document.querySelector("#query");
    clipboard.writeText(query.innerText).then(() => alert('Query copied'));
}