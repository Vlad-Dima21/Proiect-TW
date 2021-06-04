const url = 'http://localhost:5000/reparari-telefoane';

const getIntrari = async () => {
    const response = await fetch(url, {method: 'GET'});
    const intrari = await response.json();
    return intrari;
}
// console.log(getIntrari());

async function creareIntrare(intrare) {
    await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({intrareNoua: intrare})
    });
}

window.onload =  async () => {

    let reparari = document.getElementById('nume-categorie');
    setInterval(() => {
        reparari.style.color =  "#" + Math.floor(Math.random()*16777215).toString(16);
        reparari.style.fontSize =  `${Math.random() * (30 - 25) + 25}px`;
    }, 700);

    let ul = document.getElementById('info-garena');

    let countMarire = 0;

    function marire(e) {
        if (countMarire === 2) {
            ul.removeEventListener('click', marire);
            return;
        }
        e.target.style.fontSize = `${parseInt(window.getComputedStyle(e.target).getPropertyValue('font-size'), 10) + 10}px`;
        // console.log(window.getComputedStyle(e.target).getPropertyValue('font-size'));
        // console.log(e.target.style.fontSize = e.target.getComputedStyle(e.target).getPropertyValue('font-size'));
        // console.log(e.target.tagName);
        // e.currentTarget.style.height = `${parseInt(window.getComputedStyle(e.currentTarget).getPropertyValue('height'),10) + 40}px`;
        // console.log(e.currentTarget.tagName);
        let foot = document.getElementsByTagName('footer')[0];
        console.log(e.currentTarget.tagName);
        foot.style.height = `${parseInt(window.getComputedStyle(foot).getPropertyValue('height'),10) + 10}px`;
        e.currentTarget.style.listStyleType = 'disc';
        countMarire += 1;

    }

    ul.addEventListener('click', marire);
    
    document.addEventListener('keydown', (event) => {
        const tasta = event.key;
        // console.log(tasta);
        if (tasta && tasta.toLowerCase() === 'd' && !document.getElementById('data')) {
            const data = document.createElement('p');
            data.id = 'data';
            var d = new Date()
            data.innerText = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
            const container = document.querySelector('main');
            container.insertBefore(data, document.getElementById('grila-tel'));
            // data.style.display = 'relative';
            data.style.display = 'absolute'
            // data.style.zIndex = '-1';
            data.style.marginLeft = '30px';
            // data.style.right = '5px';
            data.style.fontSize = '25px'

            setTimeout(() => {
                data.remove();
            }, 3000);

        }
    });

    let toggle = false;

    document.addEventListener('keydown', (event) => {
        const tasta = event.key;
        // console.log(tasta);
        if (tasta && tasta.toLowerCase() === 'control' && !toggle)
            document.querySelector('header').style.display = 'none', toggle = !toggle;
        else if (tasta && tasta.toLowerCase() === 'control')
            document.querySelector('header').style.display = 'block', toggle = !toggle;
        
    });


    setTimeout(function(){

    const calcPret = document.createElement('form');
    
    main = document.getElementsByTagName('main')[0];
    main.appendChild(calcPret);
    calcPret.style.marginBottom = "60px";
    calcPret.style.marginTop = "100px";
    calcPret.style.marginLeft = "10px";
    calcPret.style.marginBottom = "100px";

    // border-radius: 25px;
    // border: 2px solid #73AD21;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;

    calcPret.style.borderRadius = '25px';
    calcPret.style.border = '2px solid #73AD21';
    calcPret.style.padding = '20px';
    calcPret.style.width = 'auto';
    calcPret.style.display = 'flex';
    calcPret.style.flexDirection = 'column';
    calcPret.style.width = '35%';
    calcPret.style.marginLeft = '31%';
    // calcPret.style.justifyContent = 'center';
    // calcPret.style.textAlign = 'center';
    // calcPret.style.alignItems = 'center'


    const labelTel = document.createElement('label');
    // labelTel.id = 'selectTelefon';
    labelTel.innerText = "Selectați telefonul";
    calcPret.appendChild(labelTel);

    const selectTel = document.createElement('select');
    selectTel.id = 'selectTelefon';
    calcPret.appendChild(selectTel);
    // selectTel.style.display = "block";
    selectTel.style.marginLeft = "10px";


    const optiuneTel1 = document.createElement('option');
    optiuneTel1.classList.add('telefon');
    optiuneTel1.setAttribute('value','Iphone 12');
    optiuneTel1.setAttribute('name','telefon');
    selectTel.appendChild(optiuneTel1);

    const optiuneTel2 = document.createElement('option');
    optiuneTel2.classList.add('telefon');
    optiuneTel2.setAttribute('value','Iphone 12 Pro');
    optiuneTel2.setAttribute('name','telefon');
    selectTel.appendChild(optiuneTel2);

    const optiuneTel3 = document.createElement('option');
    optiuneTel3.classList.add('telefon');
    optiuneTel3.setAttribute('value','Iphone 12 Pro Max');
    optiuneTel3.setAttribute('name','telefon');
    selectTel.appendChild(optiuneTel3);

    const optiuneTel4 = document.createElement('option');
    optiuneTel4.classList.add('telefon');
    optiuneTel4.setAttribute('value','Samsung Galaxy S21');
    optiuneTel4.setAttribute('name','telefon');
    selectTel.appendChild(optiuneTel4);

    const optiuneTel5 = document.createElement('option');
    optiuneTel5.classList.add('telefon');
    optiuneTel5.setAttribute('value','Samsung Galaxy S21+');
    optiuneTel5.setAttribute('name','telefon');
    selectTel.appendChild(optiuneTel5);

    const optiuneTel6 = document.createElement('option');
    optiuneTel6.classList.add('telefon');
    optiuneTel6.setAttribute('value','Samsung Galaxy S21 Ultra');
    optiuneTel6.setAttribute('name','telefon');
    selectTel.appendChild(optiuneTel6);

    optiuneTel1.innerText = optiuneTel1.value;
    optiuneTel2.innerText = optiuneTel2.value;
    optiuneTel3.innerText = optiuneTel3.value;
    optiuneTel4.innerText = optiuneTel4.value;
    optiuneTel5.innerText = optiuneTel5.value;
    optiuneTel6.innerText = optiuneTel6.value;

    let preturi = [[optiuneTel1.value, 500, 600, 1200], [optiuneTel2.value,550,650,1250], [optiuneTel3.value,600,700,1400], [optiuneTel4.value,300, 500, 1200], [optiuneTel5.value,600, 600, 1200], [optiuneTel6.value,650, 700, 1400]];

    const textPret = document.createElement('p');
    calcPret.appendChild(textPret);
    textPret.style.marginTop = "10px";
    

    selectTel.addEventListener('change', afisarePretTotal);

    function afisarePretTotal() {

        if (!!document.getElementById('labelEmail')) {
            let labelEmail = document.getElementById('labelEmail');
            let inputEmail = document.getElementById('inputEmail');
            let butonEmail = document.getElementById('butonEmail');
            let abonare = document.querySelectorAll('.abonare');

            labelEmail.remove();
            inputEmail.remove();
            butonEmail.remove();
            for (let item of abonare) {
                if (item.className === 'abonare')  console.log(item.nodeName), item.remove();  
                // console.log(item.nodeName);
            }
        }

        // textPret.innerText = "Prețul pentru repararea totală a telefonului este: ";
        let telefon = document.getElementById('selectTelefon').value;
        // console.log(telefon);

        let pretFinal = 0;

        preturi.forEach(gasirePretTel);

        function gasirePretTel(item){
            if (item[0] == telefon) {
                for (let i = 1; i < item.length; i++)
                    pretFinal += item[i];
            }
        }

        textPret.innerText = "Prețul pentru repararea totală a telefonului este: " + pretFinal.toString();
        // setTimeout(function(){textPret.innerText="";}, 10000);   

        const labelEmail = document.createElement('label');
        calcPret.appendChild(labelEmail);
        labelEmail.id = 'labelEmail';
        labelEmail.innerText = "Introduceți adresa de mail pentru a primi informații suplimentare";

        const inputEmail = document.createElement('input');
        calcPret.appendChild(inputEmail);
        inputEmail.setAttribute('type', 'text');
        inputEmail.setAttribute('placeholder', 'Adresa dvs.');
        inputEmail.style.marginLeft = "5px";
        inputEmail.id = 'inputEmail';
        
        let br1 = document.createElement('br');
        br1.className = 'abonare';
        calcPret.appendChild(br1);

        const div = document.createElement('div');
        div.className = 'abonare';
        calcPret.appendChild(div);
            
        
        const radioNews = document.createElement('input');
        radioNews.setAttribute('name', 'abonare');
        radioNews.setAttribute('type', 'checkbox');
        // radioNews.style.display = 'block';
        radioNews.setAttribute('checked', 'true');
        div.appendChild(radioNews);
        radioNews.className = 'abonare';

        const labelNews = document.createElement('label');
        labelNews.setAttribute('for', 'abonare');
        labelNews.style.fontSize = '20px';
        div.appendChild(labelNews);
        // labelNews.style.display = 'inline-block';
        labelNews.innerText = "Abonare la newsletter";
        labelNews.className = 'abonare'
        // labelNews.style.display = 'inline';

        let br2 = document.createElement('br');
        br2.className = 'abonare';
        calcPret.appendChild(br2);

        const butonEmail = document.createElement('button');
        calcPret.appendChild(butonEmail);
        butonEmail.innerText = "Trimite";
        // butonEmail.setAttribute('display', 'block');
        butonEmail.id = 'butonEmail'; 
        butonEmail.style.width = '30%';


        butonEmail.addEventListener('click', verificareEmail);
        // inputEmail.addEventListener('input', verificareEmail);


       async function verificareEmail(e) {

            e.preventDefault(); // ca sa nu mai dea refresh pagina cand e completat formularul
            // inputEmail.removeEventListener('input', verificareEmail);
            var formatEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (inputEmail.value.match(formatEmail)) {
                if (!localStorage.getItem(inputEmail.value)) {// daca nu a mai fost folosit emailul
                    let val = [];
                    val.push(selectTel.value);
                    localStorage.setItem(inputEmail.value, val);
                    alert(`Veți primi pe adresa ${inputEmail.value.toUpperCase()} un mail cu mai multe detalii`);
                    inputEmail.readOnly = true;
                    // console.log(formData);
                    
                }
                else {
                    let deja = false;
                    let val = localStorage.getItem(inputEmail.value);
                    if (typeof(val) == "object") {
                    
                        for (let i of localStorage.getItem(inputEmail.value))  {
                            // console.log(i , selectTel.value);
                            if (i === selectTel.value)
                                deja = true;
                        }
                    }
                    else {
                        if (selectTel.value === val)
                            deja = true;
                    }

                    if (!deja) {
                        let val = localStorage.getItem(inputEmail.value);
                        if (typeof(val) != "object") {
                            let arr = [];
                            arr.push(val, selectTel.value);
                            localStorage.setItem(inputEmail.value, arr);
                        }
                        else {
                            val.push(selectTel.value);
                            localStorage.setItem(inputEmail.val, val);  
                        }
                        alert(`Veți primi pe adresa ${inputEmail.value.toUpperCase()} un mail cu mai multe detalii`);
                        inputEmail.readOnly = true;

                    }
                    else 
                        alert('Ați mai făcut o dată cererea!');

                }

                //partea cu json, fac verificarea din nou, doar ca de data aceasta cu datele din JSON si adaug informatiile in fisier
                const formData = {
                    email: inputEmail.value,
                    telefon: selectTel.value,
                    pret: pretFinal,
                    abonare: radioNews.checked
                };
                let data = await getIntrari();
                let val = [];
                for (let item of data)
                    if (item.email == inputEmail.value && selectTel.value == item.telefon)
                        val.push(item);
                if (!val.length)
                    creareIntrare(formData);


            }
            else
                alert('Adresa introdusă nu este validă!')
            
        }

    }

    

    }, 0);



}