import './App.css';
import './Appmobile.css';

function Active2() {
	return(
		<div class="be_active2">
        <div class="left">
            <h2>Work It</h2>
          <p class="lefttxt">ipsum dolor sit amet, consectetur adipisicing elit, sed do   eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
          <div class="number2">
            <p>02</p>
          </div>
        </div>
        <picture class="active2">
              <source media="(max-width: 640px)" srcset={require("./images/find-contact_640.jpg")} />
              <source media="(min-width: 641px) and (max-width: 960px)" srcset={require("./images/find-contact_960.jpg")} />
              <source media="(min-width: 961px)"  srcset={require("./images/find-contact_1024.jpg")} />
              <img class="branch-img" src="images/find-contact.jpg" alt="footballer" />
        </picture>
    </div>
	);
};

export default Active2;