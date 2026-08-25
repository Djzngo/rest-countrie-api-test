document.getElementById("btnRequest").addEventListener("click", e => getRequest(e));
document.getElementById("btnRequest2").addEventListener("click", e => displayData());

async function getRequest(e) {
    const response = await fetch(
      "https://api.restcountries.com/countries/v5",
      {
        headers: {
          Authorization: "Bearer rc_live_79b6961d3d694fd19986cb45e54a3983",
        },
      },
    );

    const data = await response.json();

    if (response.ok) {
        countryNames(data);
    }
    else {
        throw new Error(data.error);
    }
}

function countryNames(data) {
    const test = data;
    let testArray = [];

    // Go through object and pulls common name for country out of the object.
    console.log(test.data.objects[1].names.common);
}