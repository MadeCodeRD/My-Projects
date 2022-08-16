//store card in variables
const questions= document.querySelectorAll('.accordion-q');
const faqCard= document.querySelector('.faq-card');

questions.forEach(question=>{
    question.addEventListener('click', ()=>{
        //check the height
        const height=question.nextElementSibling.scrollHeight;
        //check if the question is already opened and closed it!
        if(question.parentElement.classList.contains('active')){
            question.parentElement.classList.remove('active');
            question.nextElementSibling.style.maxHeight = 0;
            return;
        }

        //apply default state
        questions.forEach(q=>{
            q.parentElement.classList.remove('active');
            q.nextElementSibling.style.maxHeight = 0;
        });

        //open the question
        question.parentElement.classList.add('active');
        question.nextElementSibling.style.maxHeight=`${height}px`;
        
    })
});