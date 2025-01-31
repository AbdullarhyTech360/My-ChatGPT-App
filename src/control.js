document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-btn').forEach((btn) => {
        btn.addEventListener('change', () => {
            document.querySelector('nav').classList.toggle('hidden');
            document.querySelectorAll('.top-btn').forEach(btn => btn.classList.toggle('hidden'));
            // console.log(document.)
        });
    });
    document.querySelector('.btn').addEventListener('click', () => {
        document.querySelector('.hidden-container').classList.toggle('hidden');
    });
    document.querySelector('.btn1').addEventListener('click', () => {
        document.querySelector('.hidden-container1').classList.toggle('hidden');
    });

    // Close the hidden container when clicking outside of it or the toggle button
    document.addEventListener('click', (event) => {
        if (!document.querySelector('.hidden-container').contains(event.target) && !document.querySelector(".btn").contains(event.target)) {
            document.querySelector('.hidden-container').classList.add('hidden');
        }
    });
    
});