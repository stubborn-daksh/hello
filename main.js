let my_form = document.getElementById('my-form');
my_form.addEventListener('submit',save_user);

function save_user(e){
    e.preventDefault();
    const user ={};
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    userpassword = document.getElementById('userpassword').value;

    axios.post('http://localhost:3000/add-user',user)
    .then((response)=>{
        user.id = response.data.id;
    })
    .catch((err)=> console.log(err))
    
}

