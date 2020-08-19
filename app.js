const github = new Github; 
const ui = new UI; 

const searchUser = document.getElementById('searchUser'); 
searchUser.addEventListener('blur', (e) => { 
  const userText = e.target.value; 
  if(userText !== ''){
    console.log(userText); 
    github.getUser(userText)
      .then((data) => {
        if (data.profile.message === 'Not Found'){
          ui.showAlert('user not found ❌', 'alert alert-danger'); 
        }else { 
          ui.showProfile(data.profile); 
          ui.showRepos(data.repos); 
          console.log(data); 
        }
      })
  }else { 
    ui.clearProfile();
  }
})