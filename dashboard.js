const base = 'https://docs.google.com/spreadsheets/d/1ULlXrsmg7q1kHYc7sACZpx82IGOBA7Bk3rUVic2W7L8/gviz/tq?';
const output = document.querySelector('.result');
const query = encodeURIComponent('Select B,C where A=20092022');
const url = base + '&tq=' + query;
fetch(url)
    .then(res => res.text())
    .then(rep => {
        const data = JSON.parse(rep.substr(47).slice(0, -2));
        const row = document.createElement('tr');
        output.append(row);
        data.table.cols.forEach((heading) => {
            const cell = document.createElement('td');
            cell.textContent = heading.label;
            row.append(cell);

        })
        data.table.rows.forEach((main) => {
            const container = document.createElement('tr');
            output.append(container);
            main.c.forEach((ele) => {
                const cell = document.createElement('td');
                cell.textContent = ele.v;
                container.append(cell);
            })
        })
    })

function updateChart() {
    async function fetchData() {
        const url = 'https://docs.google.com/spreadsheets/d/16G6N3G4oa_w1BTPZdZuGLJXOEI2cnXSjWb3iJ5xRBw4/gviz/tq?';
        const response = await fetch(url);
        const datapoints = await response.json();

        return container;
    };
}
setInterval(updateChart, 1000);

$('.output').hide()

$('#button1').click(function() {
    $('.output').show();

})

$('.output').hide()
var state = document.getElementById('inputState');
var date = document.getElementById('inputEmail4');

$('#button1').click(function() {
    // console.log(date.value);
    // console.log(state.value);

    // if(state.value=='Haryana' ){
    //     $('.output').show();
    //     $('.output').html('AQI(Low)  AQI(High) <br> <pre>76  52</pre>');
    // }

    // if(state.value=='Patna' ){
    //     $('.output').show();
    //     $('.output').html('AQI(Low)  AQI(High) <br> <pre>76  152</pre>');
    // }
    // if(state.value=='Delhi' ){
    //     $('.output').show();
    //     $('.output').html('AQI(Low)  AQI(High) <br> <pre>76  152</pre>');
    // }
    if (state.value == 'Delhi') {
        $('.output').show();

        function randomIntFromInterval(min, max) {
            return (Math.random() * (max - min + 1) + min)
        }

        const rndInt = randomIntFromInterval(58, 196);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const rnd = randomIntFromInterval(200, 386)
        console.log(rnd)
        $('.output').html('AQI(Low)  AQI(High) <br> <pre>' + '  ' + rndInt + '        ' + rnd + '</pre>');
    }



    if (state.value == 'Patna') {
        $('.output').show();

        function randomIntFromInterval(min, max) {
            return (Math.random() * (max - min + 1) + min)
        }

        const rndInt = randomIntFromInterval(58, 196);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const rnd = randomIntFromInterval(200, 386)
        console.log(rnd)
        $('.output').html('AQI(Low)  AQI(High) <br> <pre>' + '  ' + rndInt + '        ' + rnd + '</pre>');
    }
    if (state.value == 'Haryana') {
        $('.output').show();

        function randomIntFromInterval(min, max) {
            return (Math.random() * (max - min + 1) + min)
        }

        const rndInt = randomIntFromInterval(58, 196);

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const rnd = randomIntFromInterval(200, 386)
        console.log(rnd)
        $('.output').html('AQI(Low)  AQI(High) <br> <pre>' + '  ' + rndInt + '        ' + rnd + '</pre>');
    }

})