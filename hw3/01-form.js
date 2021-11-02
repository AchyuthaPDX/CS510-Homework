// Enter your code here

console.log('========Form Submission========');
document.querySelector('form.form').addEventListener('submit', function(e) {
    e.preventDefault();
    let x = document.querySelector('form.form').elements;
    console.log("Name: ", x['name'].value);
    console.log("Email: ", x['mail'].value);
    console.log("Class Registration: ", x['status'].value);
    if(x['ug'].checked){
      console.log("Course Section: Undergraduate");
    }
    else  if(x['pg'].checked){
      console.log("Course Section: Graduate");
    }
    else {
      console.log("Course Section: No Selection");
    }
    if(x['pre1'].checked && x['pre2'].checked && x['pre3'].checked) {
      console.log("Courses Taken: Programming Languages, Operating Systems, Full Stack Web Development");

    }
    else if(x['pre1'].checked && x['pre2'].checked) {
      console.log("Courses Taken: Programming Languages, Operating Systems");

    }
    else if(x['pre1'].checked && x['pre3'].checked) {
      console.log("Courses Taken: Programming Languages, Full Stack Web Development");

    }
    else if(x['pre2'].checked && x['pre3'].checked) {
      console.log("Courses Taken: Operating Systems, Full Stack Web Development");

    }
    else{
      console.log("Courses Taken: None Taken")
    }

    console.log("Feedback: ", x['Others'].value);
  });