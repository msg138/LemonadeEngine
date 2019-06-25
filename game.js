Lemonade.include("gameinfo.js");
Lemonade.include("mirror.js");

function init() {
	Lemonade.initialize(GameVar.canvasWidth, GameVar.canvasHeight, GameVar.canvasID, true, GameVar.useWebGL);
	
	GameVar.menuId = GameVar.MENU_LOADING;
	
	// Load Assets and such
	GameVar.BACKBACKGROUND = Lemonade.addEntity(new Lemonade.Entity());
	GameVar.BACKBACKGROUND.addComponent(Lemonade.Components.visible);
	GameVar.BACKBACKGROUND.addComponent(Lemonade.Components.image);
	GameVar.BACKBACKGROUND.set("image", "image", Lemonade.Repository.getImage('background'));
	GameVar.BACKBACKGROUND.addComponent(Lemonade.Components.position);
	GameVar.BACKBACKGROUND.set("position", "width", 1080);
	GameVar.BACKBACKGROUND.set("position", "height", 720);
	
	
	
	changeMenu(GameVar.menuId);
}

function loop() {
	switch (GameVar.menuId) {
		case GameVar.MENU_INGAME:
			ingame();
			break;
		case GameVar.MENU_MAIN:
			mainMenu();
			break;
		case GameVar.MENU_LOADING:
			RPS.init();
			// Here, lets set a tween for the opening animation.
			loadAnimation();
			break;
		case GameVar.MENU_GOINGINTOGAME:
			lobby();
			break;
		case GameVar.MENU_LOGIN:
			loginMenu();
			break;
		default:
			loginMenu();
			break;
	}
}

function changeMenu(newMenu) {
	GameVar.loading = true;

	GameVar.menuId = newMenu;
	Lemonade.EntityHandler.entities.splice(0);

	Lemonade.addEntity(GameVar.BACKBACKGROUND);

	// Only used to store temporary things in menus.
	GameVar.temp = {};

	GameVar.temp.versionInfo = Lemonade.addEntity(new Lemonade.Entity());
	GameVar.temp.versionInfo.addComponent(Lemonade.Components.visible);
	GameVar.temp.versionInfo.addComponent(Lemonade.Components.color);
	GameVar.temp.versionInfo.set("color", "red", "#000000");
	GameVar.temp.versionInfo.addComponent(Lemonade.Components.label);
	GameVar.temp.versionInfo.set("label", "text", GameInfo.releaseType + " " + GameInfo.release + " " + GameInfo.version);
	GameVar.temp.versionInfo.set("label", "style", "20px " + RPS.globalFont);
	GameVar.temp.versionInfo.addComponent(Lemonade.Components.position);
	GameVar.temp.versionInfo.set("position", "x", 0);
	GameVar.temp.versionInfo.set("position", "y", 700); // No need to set height and width, since we are only displaying text.
}

function lobby(){
	if(GameVar.loading) {
		GameVar.loading = false;
	}
}

function loginMenu() {
	if (GameVar.loading) {
		GameVar.loading = false;
	}
}

function mainMenu() {
	if (GameVar.loading) {
		GameVar.loading = false;
	}
}

function loadAnimation(){
	if (GameVar.loading) {
		GameVar.loading = false;
	}
}

function ingame() {
	if (GameVar.loading) {
		GameVar.loading = false;
	}
}
loopRender = function() {};