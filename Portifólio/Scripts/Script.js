document.addEventListener('DOMContentLoaded', function() {
    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML='';
        textoArray.forEach((letra, i) => {
            setTimeout(() =>
                elemento.innerHTML += letra, 112*i)
        });
    }
    const titulo = document.querySelector('span');
    typeWrite(titulo);


    // Adicione um evento de scroll na janela
    window.addEventListener('scroll', function() {
        // Selecione o elemento navbar
        const navbar = document.querySelector('.Navbar');
        const scrolldown = document.querySelector('.ScrollDown');
        // Verifique se o usuário rolou a página
        if (window.scrollY > 5) {
            // Adicione a classe 'scrolled' ao navbar
            navbar.classList.add('scrolled');
            scrolldown.classList.add('scrolled');
        } else {
            // Remova a classe 'scrolled' do navbar
            navbar.classList.remove('scrolled');
            scrolldown.classList.remove('scrolled');
        }
    });


    window.sr = ScrollReveal({ reset: true});
    sr.reveal('.About')
    sr.reveal('.Projects')
    sr.reveal('.Experience')


    VanillaTilt.init(document.querySelectorAll(".AboutImg"));
});