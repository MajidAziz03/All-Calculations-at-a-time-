

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
   
    let mth = document.querySelector('#mth').value;
    let phy = document.querySelector('#phy').value;
    let chem = document.querySelector('#chem').value;
    let eng = document.querySelector('#eng').value;
   
let total = parseFloat(mth) + parseFloat(phy) + parseFloat(chem) + parseFloat(eng);

let perc =  total / 400 * 100 


if(perc >= 80 )
{
   


        alert(`Your total optained marks are : ${total} Your percentage is : ${perc}  your grade is : A+ `);

}
else{
    screenValue = (`Your total optained marks are : ${total} Your percentage is : ${perc}  your grade is : A  `);
     
     alert(`Your total optained marks are : ${total} Your percentage is : ${perc}  your grade is : A  `);
    
}
alert('Thank you')
})