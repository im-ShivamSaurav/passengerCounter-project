let countEl = document.getElementById("count-el")

let count = 0
let cntVal

function save()
{
    if(count > 0)
    {
        cntVal = count + " - "
        document.getElementById("prev-el").textContent += cntVal
        countEl.textContent = 0;
        count =0;
    }
}

function increment()
{
    count = count + 1
    countEl.innerText = count ;
}

function decrement()
{
    if(count > 0)
    {
        count = count -1
        countEl.innerText = count ;
    }
}

