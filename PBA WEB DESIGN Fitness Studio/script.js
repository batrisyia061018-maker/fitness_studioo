// script.js — simple form validation and success modal
(function(){
  const form = document.getElementById('regForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Basic HTML5 validation checks
    if(!form.checkValidity()){
      form.classList.add('was-validated');
      // focus first invalid element
      const firstInvalid = form.querySelector(':invalid');
      if(firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate sending data (student project: no backend)
    const data = {
      name: document.getElementById('fullName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      program: document.getElementById('program').value,
      
    };
    console.log('Registration data (simulated):', data);

    // Show Bootstrap modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    // Optional: reset form after short delay
    setTimeout(()=>{ form.reset(); form.classList.remove('was-validated'); }, 800);
  });
})();
