import './App.css';
import './Appmobile.css';

function Athlets() {
	return(
	<div class="athlets"> 
	      <h2 class="runner">athlets</h2>
	      <picture class="branch-preview-athlete">
	            <source media="(max-width: 640px)" srcset={require("./images/footballer_192.png")} class="sportsmen" />
	            <source media="(min-width: 641px) and (max-width: 960px)" srcset={require("./images/footballer_497.png")} />
	            <source media="(min-width: 961px)"  srcset={require("./images/footballer_566.png")} />
	            <img class="branch-img" src={require("./images/footballer_497.png")} alt="footballer" />
	        </picture>

	      <div class="at01">
	        <p class="at011">01</p>
	        <h3>Connection</h3>
	        <p class="at0">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	        tempor</p>
	      </div>
	      <div class="at02">
	        <p class="at022">02</p>
	        <h3>Collaboration</h3>
	        <p class="at0">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	        tempor</p>
	      </div>
	      <div class="at03">
	        <p class="at033">03</p>
	        <h3>Growth</h3>
	        <p class="at0">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	        tempor</p>
	      </div>
    </div>
	);
};
export default Athlets