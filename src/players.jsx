import './App.css';
import './Appmobile.css';

function Players() {
	return(
	<div class="player">
      <h2 class="players">Players</h2>
      <picture class="basketballer">
            <source media="(max-width: 640px)" srcset={require("./images/basketballer_302.png")} class="sportsmen" />
            <source media="(min-width: 641px) and (max-width: 960px)" srcset={require("./images/basketballer_436.png")} />
            <source media="(min-width: 961px)"  srcset={require("./images/basketballer_991.png")} />
            <img class="branch-img" src="basketballer_436.png" alt="footballer" />
        </picture>

      <div class="at11">
        <p class="at111">01</p>
        <h3>Connection</h3>
        <p class="at0">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor</p>
      </div>
      <div class="at12">
        <p class="at122">02</p>
        <h3>Collaboration</h3>
        <p class="at0">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor</p>
      </div>
      <div class="at13">
        <p class="at133">03</p>
        <h3>Growth</h3>
        <p class="at0">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor</p>
      </div>
    </div>
	)
}
export default Players;