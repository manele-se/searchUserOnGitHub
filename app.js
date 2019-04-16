//instantiate classes
const gitHub = new GitHub();
const ui = new UI();

//good practice to create difference files. Webpack och bubble will permit to add module to js
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
	//get input text
	const userText = e.target.value;
	if (userText !== '') {
		//http call
		gitHub.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found' || data.profile.message === 'Forbidden') {
				//show alert
				ui.showAlert('Sorry, I cannot find the user you are looking for!', 'alert alert-danger');
			} else {
				//show the profile
				if (data.profile.login === userText) {
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			}
		});
	} else {
		//clear profile
		ui.clearProfile();
	}
});
