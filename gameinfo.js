// This will store information about the game.
var GameInfo = {};
// This will store global variables that relate to the game.
var GameVar = {};
GameInfo.release = "Prototype";
GameInfo.releaseType = "";
GameInfo.version = "V 1.0.0";

GameInfo.credits = {
};

GameInfo.getVersionString = function() {
	return GameInfo.release + " " + GameInfo.version + " - " + GameInfo.releaseType;
};

// Basic Menu Id's to associate the menuId variable with certain functions. // Can be removed.
GameVar.MENU_LOGIN = -1;
GameVar.MENU_MAIN = 0;
GameVar.MENU_INGAME = 1;
GameVar.MENU_GAMEOVER = 2;
GameVar.MENU_LOADING = 3;
GameVar.MENU_GOINGINTOGAME = 4;

GameVar.canvasID = "game";
GameVar.canvasWidth = 1080;
GameVar.canvasHeight = 720;

GameVar.serverGame = undefined;

GameVar.useWebGL = false;

// This signifies if a menu switch has happened, and if we should start loading new assets.
GameVar.loading = true;
// This holds the current menu id of the game in it's current state.
GameVar.menuId = 0;

// This temporary object is used to store temporary variables between menus. When a menu is changed, this variable is reset.
GameVar.temp = {};

function temp() {
	return GameVar.temp;
}

// The background of the game, this is drawn first so everything is shown on top of it.
GameVar.BACKBACKGROUND;