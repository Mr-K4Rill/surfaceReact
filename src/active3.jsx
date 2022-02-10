import './App.css';
import './Appmobile.css';

function Active3() {
	return(
		<div class="be_active">
      <picture class="active">
            <source media="(max-width: 640px)" srcset={require("./images/work-it_640.jpg")} />
            <source media="(min-width: 641px) and (max-width: 960px)" srcset={require("./images/work-it_960.jpg")} />
            <source media="(min-width: 961px)"  srcset={require("./images/work-it_1024.jpg")} />
            <img class="branch-img" src="images/work-it.jpg" alt="footballer" />
        </picture>
        <div class="right">
            <div class="number">
          <p>03</p>
          </div>
          <h2>Work It</h2>
          <p class="righttxt">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
        </div>
    </div>
	)
}
export default Active3;